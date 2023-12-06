import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import parse from 'html-react-parser';

const Post: FunctionComponent = ({id, title, categories, body, display_date, end_date, userLastName,
  userDepartment, nbrLike, likedPost, userRole, ownerId, focusCat, focusText, onClick, zoomLiked, zoomSupprId}) => {
  const [suppr, setSuppr] = useState<Boolean>(false)
  const [ready, setReady] = useState<Boolean>(false)
  const [currentUserId, setCurrentUserId] = useState<number>()
  const isInitialMount = useRef(true)

  useEffect(() => {
    if(isInitialMount.current){ //Avoid being called more times than necessary
      getUserId() 
      postExpired()
      NoDisplayYet()
      isInitialMount.current = false
    }
  })

  //Callback from the post's footer. If the user delete a post, manage the front end part of the suppression by setting a bool to true
  function handleCallback(){
    setSuppr(true)
  }

  //We get from the props the value of the Title/post owner name. If there is a match, we display the post, if not, we don't.
  //If there is no value from the props, we display it.
  //Condition : If the props 'focusText'(string) is somewhere in the title or owner name (both strings), we display.
  function searchFocus(){
    if(title.toLowerCase().includes(focusText.toLowerCase()) || userLastName.toLowerCase().includes(focusText.toLowerCase())) return true
    else return false
  }

  //If the post have a suppression date, then we check if it has passed yet. If it did, we don't display front end and delete it back end
  function postExpired(){
    if(end_date != null){
      const expiration = Date.parse(end_date)-3600000
      const now = Date.now()
      if(now > expiration){
        fetch('/api/post/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({'id' : id})
        })
        .then(() => {
          setSuppr(true)
        })
      }
    }
  }

  //Check if the post is ready to be displayed by looking at the datetime chosed when created and comparing it to the current datetime.
  function NoDisplayYet(){
    const now = Date.now()
    now >= Date.parse(display_date)-3600000 ? setReady(true) : setReady(false) //-3600000 because the date parse add 3600000 from the french time
    
  }

  //Check if the current user has the rights to delete a post or not. Normal user can't create or delete a post.
  //Department admins can delete their own post but that's it.
  //Admins can delete all the posts, even others'.
  function deletePerm(postOwnerId){
    if((userRole.includes("ROLE_ADMIN"))||(userRole.includes("ROLE_DEPARTMENT_ADMIN") && currentUserId == postOwnerId)){
      return true
    }
  }
  
  //For the function above (deletePerm) set the current user Id so that it can be compared to the post Id to know if they are the owner
  function getUserId(){
    fetch('/api/user/getId')
      .then(response => {
        if(response.ok){
          return response.json()
        } 
      })
      .then((data) => {
        setCurrentUserId(data)
      })
  }

  return (
    <div>
    {(suppr == false && ready == true && (categories.includes(focusCat)|| focusCat =='') && zoomSupprId != id) && searchFocus() && 
      <div className="card m-3 mb-1 shadow" onClick={onClick}>
            <div className="container">
                <div className="row d-flex flex-column justify-content-between">
                    <div className="card-title card-header">
                        <Head title={title} categories={categories}/>
                    </div>
                    <div className="card-body">
                        <Body body={body} name={userLastName} department={userDepartment.department}/>
                    </div>
                    <div className="col-sm">
                        <Footer id={id} nbrLike={nbrLike} display_date={display_date}
                         title={title} name={userLastName} likedPost={likedPost} parentCallback={handleCallback}
                         canDelete={deletePerm(ownerId)} zoomLiked={zoomLiked}/>
                    </div>
                </div>
            </div>
        </div>}
    </div>     
  );
};

const Head: FunctionComponent = ({title, categories}) => {
  const [titleSize, setTitleSize] = useState<String>('title.length')
  const isInitialMount = useRef(true)

  useEffect(() => {
    if(isInitialMount.current){
      getTitleSize()
      isInitialMount.current = false
    }
  })

  //If the title is too long, break the line and reduce the font size so that it fills in the top of the card
  function getTitleSize(){
    if (title.length > 16){
      setTitleSize('0.7rem')
    }
    else{
      setTitleSize('1rem')
    }
  }

  //Return the little category pin on the top right of the card.
  function displayCategory(category){
    switch (category){
        case 'Important':
          return (<div className="border border-1 border-danger rounded-circle text-white fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow"
           style={{backgroundColor:"#FF8B00", width:"20px"}}   data-mdb-toggle="popover" data-mdb-trigger="hover"
           title={category}>!</div>)
        case 'Urgent':
          return (<div className="border border-1 border-danger rounded-circle text-white fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow"
          style={{backgroundColor:"#8000FF", width:"20px"}}   data-mdb-toggle="popover" data-mdb-trigger="hover"
          title={category}>U</div>)
        case 'Information':
          return (<div className="border border-1 border-success rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow"
          style={{backgroundColor:"#009C18", width:"20px"}}   data-mdb-toggle="popover" data-mdb-trigger="hover"
          title={category}>Info</div>)
        case 'Request':
          return (<div className="border border-1 border-dark rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow"
          style={{backgroundColor:"#909090", width:"20px"}}   data-mdb-toggle="popover" data-mdb-trigger="hover"
          title={category}>Req</div>)
        case 'Meeting notice':
          return (<div className="border border-1 border-danger rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow"
          style={{backgroundColor:"#7C84FF", width:"20px"}}   data-mdb-toggle="popover" data-mdb-trigger="hover"
          title={category}>Meet</div>)
        case 'Event':
          return (<div className="border border-1 border-primary rounded-circle fw-bolder d-flex justify-content-center align-item-center overflow-hidden shadow"
          style={{backgroundColor:"#77F9C4", width:"20px"}}   data-mdb-toggle="popover" data-mdb-trigger="hover"
          title={category}>Evnt</div>)
    }   
  }

  return (
    <div className="custom-card-titles d-flex justify-content-between ">
      <div className="text-decoration-underline fw-bold w-75" style={{fontSize: titleSize, height:'25px'}}>{title}</div>
      <div className="d-flex flex-row w-25 justify-content-around disable user-select-none" style={{fontSize: "0.7rem"}}>{categories.map((category, index) => (
                            <div className="ml-1" key={index}>{displayCategory(category)}</div>
                         ))}</div>
    </div>
  );
};

const Body: FunctionComponent = ({body, name, department}) => {

  return (
    <div >
      <div className="d-flex fontSize-08 fw-bold justify-content-between"><div>{name}</div><div>{department}</div></div>
      <div className="cardBody overflow-auto custom-card-tags" style={{height: "9rem"}}>
        {parse(body)}
      </div>
    </div>
  );
};

const Footer: FunctionComponent = ({id, nbrLike, display_date, name, title, likedPost, parentCallback, canDelete, zoomLiked}) => {
  const [date, setDate] = useState<String>('')
  const [likeCount, setLikeCount] = useState<number>(nbrLike)
  const [userLike, setUserLike] = useState<Boolean>()
  const [load, setLoad] = useState<Boolean>(false)
  const isInitialMount = useRef(true)
  const isInitialZoomLike = useRef(true)


  useEffect(()=>{
    alreadyLiked() //need to be outside the initial mount, else might not be taken into account
    if (isInitialMount.current) {
      display_date = display_date.replace("T", " ") //Format the display date so that it's readable (without the T and the extra information)
      display_date = display_date.split("+")
      setDate(display_date[0])
      isInitialMount.current = false;
   }
  })

  useEffect(()=>{ //This useEffect is updated everytime the post is liked or unliked in its zoomed version.
    if (isInitialZoomLike.current) { //We don't want it to do anything at the initialization, only when there is a change.
      isInitialZoomLike.current = false;
   } else {
    if(zoomLiked != userLike && zoomLiked != null){ //If the result is different (can't like twice) and if the post is zoomed (if not receive null)
      setUserLike(zoomLiked)
      zoomLiked ? setLikeCount(likeCount+1) : setLikeCount(likeCount-1)
    }
   }
  }, [zoomLiked])

  //If the post is already liked, then show it front end
  function alreadyLiked(){
    if(likedPost.includes(id) && !load){
      setUserLike(true)
      setLoad(true) //once taken into account, then stop asking to know
    }
  }

  //Delete the post by its id in the back end and call the the parent component 'Post' to manage front end
  function handleSuppr(){
    let text = "Are you sure you want to delete the post " + title + " of " + name +"?";
    if (confirm(text) == true) {
      fetch('/api/post/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'id' : id})
      })
      .then(() => {
        parentCallback()
      })
    } else {
      text = "You canceled!";
    }
  }

  function addLike(){
    fetch("/api/like/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'postId' : id})
    })
  }

  function removeLike(){
    fetch("/api/like/unlike", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'postId' : id})
    })
  }

  function handleLike(){
      if(userLike){
        setUserLike(false)
        removeLike()
        setLikeCount(likeCount-1) //to show something front end, without having to ask again to the back end and reload the page.
      }
      else{
        setUserLike(true)
        addLike()
        setLikeCount(likeCount+1)
      }
  }

  return (
    <div className="d-flex justify-content-between mt-0">
        <div>
          {(userLike) && <button id={`like_${id}`}  className='btn btn-sm btn-primary' onClick={handleLike}>
          <i id={`like_${id}`} className="fa fa-thumbs-up"></i></button>}
          {(!userLike) && <button id={`like_${id}`} className='btn btn-sm btn-secondary' onClick={handleLike}>
          <i id={`like_${id}`} className="fa fa-thumbs-up"></i></button>} +{likeCount}
        </div>
        <div style={{height: "1rem"}} className="d-flex justify-content-between align-items-end flex-column fontSize-08">
            <div style={{fontSize: "0.6rem"}} >{date}</div>       
            <div id={`delete_${id}`}>
              {canDelete == true && <button id={`delete_${id}`} className="btn btn-sm" onClick={handleSuppr}>
                <svg id={`delete_${id}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path id={`delete_${id}`} d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path id={`delete_${id}`} d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
              </button> }  
            </div>
        </div>
    </div>
  );
};

export default Post;
