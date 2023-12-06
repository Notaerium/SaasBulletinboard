import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import {useNavigate, createSearchParams } from 'react-router-dom';
import Searchbar from "./Searchbar";
import Post from "./Post";
import AddBtn from "./AddPostBtn";
import ZoomPost from "./ZoomPost";

const Board: FunctionComponent = () => {
  const [userRole, setUserRole] = useState<Array<String>>([''])
  const [likedPost, setLikedPost] = useState<Array<number>>([])
  const [isVerified, setIsVerified] = useState<Boolean>(true)
  const [posts, setPosts] = useState<any>()
  const [focusCat, setFocusCat] = useState<String>('')
  const [search, setSearch] = useState<String>('')
  const [zoom, setZoom] = useState<Boolean>()
  const [zoomLike, setZoomLike] = useState<Boolean>()
  const [zoomPost, setZoomPost] = useState<any>()
  const [zoomedSupprId, setZoomedSupprId] = useState<number>()
  const isInitialMount = useRef(true)
  const navigate = useNavigate();

  useEffect(() => {
    if(isInitialMount.current){
      getPosts()
      isLoggedIn()
      getUserRole()
      getVerification()
      isInitialMount.current = false;
    }
    postsIdsLikedbyUser()
    checkURL()
  }, []);

  //When zoomed, we want to set the liked post button on like or unlike on the board too.
  //We check the ids and if they match, return the value of the like button from the zoom to the board
  function likeOnBoard2(zoomId, postId){
    if(zoomId == postId)
      return zoomLike
  }

  //Get all the posts from the db to display them
  function getPosts(){
    fetch('/api/post/getAll')
      .then(response => {
        if(response.ok){
          return response.json()
        } 
      })
      .then((data) => {
        let reversed = data.reverse() //display from the most recent to the most ancient
        setPosts(reversed)
      })
  }

  //If someone get to the notice board from the url without being logged in, they are redirected to the login page.
  async function isLoggedIn(){
      const response = await fetch('/api/user/check')
      response.json()
          .then((data) => {
              data == true ? "" : navigate("/login")
          })
  }

  //get the Current role to allow things or not
  function getUserRole(){
    fetch('/api/user/getRole')
      .then(response => {
        if(response.ok){
          return response.json()
        } 
      })
      .then((data) => {
        setUserRole(data)
      })
  }

  //if the user is not verified yet with his mail, this person won't be able to post anything, even if the role should be enough
  function getVerification(){
    fetch('/api/user/verified')
      .then(response => {
        if(response.ok){
          return response.json()
        } 
      })
      .then((data) => {
        setIsVerified(data)
      })
  }

  //if the verify link expired, we allow the user to resend a mail
  function handleResend(){
    fetch('/api/user/reverif')
      .then(response => {
        if(response.ok){
          return response.json()
        } 
      })
  }

  //Return an array of categories from the post object. Used to show the small category pin and
  // to filter the posts from the selection in the searchbar. Called when displaying a specific post.
  function handleCategories(objCategories){
    const categories = []
    objCategories.forEach(objCategory => {
      categories.push(objCategory.category)
    });
    return categories
  }

  //At the initialization, get all the posts liked by the current user so that the states of the board is as the user left it.
  async function postsIdsLikedbyUser(){
    const response = await fetch('api/like/get')
      response.json()
        .then((data) => {
          //object array [{1: postId},...] I need an array of the values postId now. That is why in the forEach I add post[1]
          data.forEach(post => {
            setLikedPost(likedPost => [...likedPost, post[1]])
          });
        })
  }

  //Check here if clicked on the trash can or like button to not zoom for each action done on a card.
  //If the user clicked anywhere else on the card, then it is zoomed with the clicked card datas. 
  function handleZoomPost(post, e){ 
    if(e.target.id != `like_${post.id}` && e.target.id != `can_${post.id}`
    && e.target.id != `thumb_${post.id}` && e.target.id != `delete_${post.id}` && e.target.id != `div_${post.id}`){ //check the id of the element clicked to not open up the zoomed post
      navigate(({search:`?${createSearchParams({id: post.id})}`}))
      setZoom(true)
      setZoomPost(post)
    }
  }

  //We check if there is a parameter in the url.
  // If there is an 'id' parameter: we get the post details with fetch and zoom with these datas.
  async function checkURL(){
    const searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('id')){
      const response = await fetch("/api/post/get", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'id' :searchParams.get('id')})
      })
      response.json()
      .then((data) => {
        setZoomPost(data)
        setZoom(true)
      })
    }
  }

  return (
    <div className="d-flex" style={{overflowX:'hidden'}}>
      <div className=" d-flex flex-column on-bot">
        <div><Searchbar changeFocusCat={focusCat => setFocusCat(focusCat)} changeSearch={search => setSearch(search)}/></div>
        {!isVerified && <div className="alert alert-warning alert-dismissible" role="alert">
          Your account is not yet verified. Please check your mailbox or send another <a href="" onClick={handleResend}>activation link</a>.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        <div className="card-group d-flex flex-row justify-content-center" style={{width: "100vw"}}>
            <div className="d-flex flex-wrap justify-content-center" style={{width: "90%"}}>
                {posts?.map((post) => (
                  <div id="card" key={post.id}><Post  id={post.id}
                                            title={post.title}
                                            userLastName={post.user.lastname}
                                            userDepartment={post.user.department}
                                            categories={handleCategories(post.categories)}
                                            body={post.body}
                                            display_date={post.start_display_date}
                                            end_date={post.delete_date}
                                            nbrLike={post.postsLikes.length}
                                            likedPost = {likedPost}
                                            userRole= {userRole}
                                            ownerId = {post.user.id}
                                            focusCat = {focusCat}
                                            focusText = {search}

                                            onClick={(e) => handleZoomPost(post, e)}
                                            zoomLiked={zoomPost? likeOnBoard2(zoomPost.id, post.id) : null} //if there are no posts zoomed, send null
                                            zoomSupprId={zoomedSupprId}
                  /></div>
                ))}
            </div>
        </div>
        {(isVerified && (userRole.includes('ROLE_DEPARTMENT_ADMIN') || userRole.includes('ROLE_ADMIN')))  && 
          <div className="fixed-bottom d-flex justify-content-end m-1"><AddBtn/></div>}
      </div>
      {zoomPost && zoom && <ZoomPost 
                      id={zoomPost.id}
                      title={zoomPost.title}
                      userLastName={zoomPost.user.lastname}
                      userDepartment={zoomPost.user.department}
                      categories={handleCategories(zoomPost.categories)}
                      body={zoomPost.body}
                      display_date={zoomPost.start_display_date}
                      end_date={zoomPost.delete_date}
                      nbrLike={zoomPost.postsLikes.length}
                      likedPost = {likedPost}
                      userRole= {userRole}
                      ownerId = {zoomPost.user.id}
                      display={(zoom) => setZoom(zoom)}
                      onLike = {setZoomLike}
                      supprId={setZoomedSupprId}
                    />}
    </div>
  );
};

export default Board;
