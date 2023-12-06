import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import { useNavigate} from 'react-router-dom';
import parse from 'html-react-parser';

const ZoomPost: FunctionComponent = ({id, title, categories, body, display_date, userLastName,
  userDepartment, nbrLike, likedPost, userRole, ownerId, display, onLike, supprId}) => {
  const [currentUserId, setCurrentUserId] = useState<number>()
  const isInitMound = useRef(true)
  const navigate = useNavigate()

  useEffect(() => {
    if(isInitMound.current){
      getUserId()
      isInitMound.current = false
    }
  })

  //Send back to the board and send the post Id to the board so that it can stop displaying the deleted post
  function handleCallback(){
    supprId(id)
    navigate('/')
    display(false)
  }

  //important to set 'onLike' on null or the last action made on the zoomed post will be repercuted on the next zoomed post
  const back = () => {
    onLike(null)
    navigate('/')
    display(false)
  }

  function deletePerm(postOwnerId){
    if((userRole.includes("ROLE_ADMIN"))||(userRole.includes("ROLE_DEPARTMENT_ADMIN") && currentUserId == postOwnerId)){
      return true
    }
  }

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
      <div className="position-fixed on-top overflow-hidden d-flex justify-content-center" style={{width: "100%", height: "100vh", backgroundColor:"rgb(33, 33, 33, 0.7)"}}>
        <div className="card m-3 mb-1 d-flex flex-column" style={{opacity: '1', width: "40%", height:'95%', minHeight: '600px', minWidth: '400px' }}>
          <div className="container" style={{ height:'100%' }}>
                <div className="row">
                    <div className="card-title card-header d-flex justify-content-between">
                      <button type="button" className="btn-close align-self-end" aria-label="Close" onClick={back}></button>
                        <div style={{width:'90%'}}><Head title={title} categories={categories}/></div>
                    </div>
                    <div className="card-body">
                        <Body body={body} name={userLastName} department={userDepartment.department}/>
                    </div>
                    <div className="col-sm">
                        <Footer id={id} nbrLike={nbrLike} display_date={display_date}
                         title={title} name={userLastName} likedPost={likedPost} parentCallback={handleCallback}
                         canDelete={deletePerm(ownerId)} onLike={onLike}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

  );
};


const Head: FunctionComponent = ({title, categories}) => {

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
    <div className="custom-card-titles d-flex justify-content-between">
      <div className="text-decoration-underline fw-bold" style={{fontSize: '1.2rem', height:'25px'}}>{title}</div>
      <div className="d-flex flex-row w-25 justify-content-around" style={{fontSize: "0.7rem"}}>{categories.map((category, index) => (
                            <div className="ml-1" key={index}>{displayCategory(category)}</div>
                         ))}</div>
    </div>
  );
};

const Body: FunctionComponent = ({body, name, department}) => {

  return (
    <div style={{height:'75vh'}}>
      <div className="d-flex fontSize-25 fw-bold"><div>{`${name} from ${department}`}</div></div>
      <div className="overflow-auto custom-card-tags" style={{height:'95%', width:'100%'}}>
        {parse(body)}
      </div>
    </div>
  );
};

const Footer: FunctionComponent = ({id, nbrLike, display_date, name, title, likedPost, parentCallback, canDelete, onLike}) => {
  const [date, setDate] = useState<String>('')
  const [likeCount, setLikeCount] = useState<number>(nbrLike)
  const [likeArray, setLikeArray] = useState<Array<number>>([])
  const [userLike, setUserLike] = useState<Boolean>()
  const [load, setLoad] = useState<Boolean>(true)
  const isInitialMount = useRef(true)
  const isMountZoomed = useRef(true)


  useEffect(()=>{
    alreadyLiked() //We load if the button is already liked or not, so that the user can unlike or like properly afterwards
    if (isInitialMount.current) {
      likedornot()
      display_date = display_date.replace("T", " ") // reformat the display date so that it is readable and nice to the user
      display_date = display_date.split("+")
      setDate(display_date[0]) //only [0] to remove what's not necessary
      isInitialMount.current = false;
    }
  })

  useEffect(()=> {
    if (isMountZoomed.current) {
      isMountZoomed.current = false;
    }else {
      if(likeArray.includes(id) && !likedPost.includes(id)){ //if the post has been liked on the board
        setUserLike(true)
        setLikeCount(likeCount+1)
      }
      else if(!likeArray.includes(id) && likedPost.includes(id)){ //if the post has been unliked on the board
        setUserLike(false)
        setLikeCount(likeCount-1)
      }
    }
  }, [likeArray])


  function alreadyLiked(){
    if(likedPost.includes(id) && load){
      setUserLike(true)
      setLoad(false)
    } 
  }

  //fetch if liked or not in the db (we compare the first array and the new one)
  //This function is meant that if a post is liked on the board, it is updated on the zoomed version
  async function likedornot(){
    const response = await fetch("api/like/get")
    response.json()
      .then((data) => {
        data.forEach(post => {
          setLikeArray(likeArray => [...likeArray, post[1]])
        });
      })
  }



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
    onLike(true)
  }

  function removeLike(){
    fetch("/api/like/unlike", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'postId' : id})
    })
    onLike(false)
  }

  function handleLike(){
      if(userLike){
        setUserLike(false)
        removeLike()
        setLikeCount(likeCount-1)
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
          {userLike && <button className='btn btn-sm btn-primary' onClick={handleLike}>
          <i className="fa fa-thumbs-up"></i></button>}
          {!userLike && <button className='btn btn-sm btn-secondary' onClick={handleLike}>
          <i className="fa fa-thumbs-up"></i></button>} +{likeCount}
        </div>
        <div style={{height: "1rem"}} className="d-flex justify-content-between align-items-end flex-column fontSize-08">
            <div style={{fontSize: "1rem"}} >{`Posted on : ${date}`}</div>       
            <div>
              {canDelete == true && <button className="btn btn-sm" onClick={handleSuppr}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
              </button> }  
            </div>
        </div>
    </div>
  );
};

export default ZoomPost;
