import React, { FunctionComponent, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';

//Form to add a post
const AddPost: FunctionComponent = () => {
  const [title, setTitle] = useState<String>('')
  const [maxLengthTitle, setMaxLength] = useState<number>(35)
  const [text, setText] = useState<String>('')
  const [categories, setCategories] = useState<Array<String>>([,])
  const [now, setNow] = useState<boolean>(false)
  const [suppr, setSuppr] = useState<boolean>(false)
  const [start, setStart] = useState<Date>()
  const [end, setEnd] = useState<Date|null>()
  const [posting, setPosting] = useState<boolean>(false)
  const navigate = useNavigate();

  //function that add all the selected categories into an array
  function handleCategories(event){
    const boxValue = event.target.value //we get the box value
    if(event.target.name !== "categories"){ //If not unique and optional (urgent and important)
      if(event.target.checked && !categories.includes(boxValue)){ //if checked and not already in the categories array, we add it
        setCategories(prep=> [...prep, boxValue])
      }
      else if(!event.target.checked && categories.includes(boxValue)){ //if unchecked and in the categories array, we remove it
        setCategories(categories.filter(category => category !== boxValue))
      }
    }
    else{ //If it is a unique and not optional category (meeting, information, event, request)
      const changeCategories = categories.slice(1) //in the categories array, we change the value of the unique category by the new one
      setCategories([event.target.value, ...changeCategories])
    }
  }

  //if we click on now, the display date will be effective right away and the post will be visible as soon as the user go back on the
  //noticeboard. We get the current date in milliseconds and format it so that it matches the datetime format of sql.
  //Also, if the button Now is checked, we remove the datetime input so that the user understand that they can't chose several dates
  function handleNow(event){
    if(event.target.checked){
      setNow(true)
      let currentDate = new Date()
      let startTime = currentDate.getDate() + "-"
                      + (currentDate.getMonth() +1) + "-"
                      + currentDate.getFullYear() + " "
                      + currentDate.getHours() + ":"
                      + currentDate.getMinutes() + ":"
                      + currentDate.getSeconds()
      setStart(startTime)
    } 
    else setNow(false)
  }

  //If a post suppression date is chosen, then the post will be deleted as soon as the date is reach and someone log in the board.
  //But if the undefined suppression date is checked, then the post will be visible as long as no one manually delete it.
  //In this case, send 'null' to the db and hide the datetime input.
  function handleSuppr(event){
    if(event.target.checked){
      setSuppr(true)
      setEnd(null)
    } 
    else setSuppr(false)
  }

  //Send the post to the db
  function sendPost(post){
    setPosting(true)
    fetch("/api/post/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    })
      .then(() => { //once sent, go back to the board
        navigate("/")
      })
  }

  //Load the form data in a variable and send it to the db 
  function handleSubmit(event){
    event.preventDefault()
    if(title.length===0 || text.length === 0){
      alert("The title and the body are needed")
    }
    else{
      if(now){
        setStart(Date.now())
      }
      let fData = {
        'title' : title,
        'body' : text,
        'categories': categories,
        'displayTime' : start,
        'suppressionTime' : end 
      }
      sendPost(fData)
    }
  }

  return (
    <div id="createForm" className="text-center d-flex flex-column justify-content-center align-item-center row mt-3">
        <div>
            <h1 className="title text-center">Create your post</h1>
        </div>
        <form method="post" className="col-md-8 align-self-center">
            <div className="mb-3">
              <label htmlFor="title" className="form-label" >Title</label>
              <input type="email" className="form-control" id="title" name="title" placeholder="My title" maxLength={maxLengthTitle} onChange={(e) => setTitle(e.target.value)}/><div><p className="int-fontSize">Character remaining {maxLengthTitle - title.length}</p></div>
            </div>
            <div className="mb-3">
                <label htmlFor="tinyTextarea" className="form-label">Text</label>
                <div className="alert alert-warning alert-dismissible" role="alert" style={{fontSize:'0.8em'}}>
                  <p className="int-fontSize">*Images' names can't have special characters</p>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <Editor
                    id="tinyTextarea"
                    apiKey='p9pxhyk7tgn0cvgpyxtvd40bdlej0ynbemvt61nsz9mde7ba'
                    initialValue="Write your text here"
                    init={{
                        height: 800,
                        menubar: false,
                        plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar1: '| blocks |' +
                        'bold italic underline forecolor' ,
                        toolbar2: 'alignleft aligncenter alignright | link image | help |' ,
                        images_upload_url: "/api/image/upload",
                        image_title: true,
                        automatic_uploads: true,
                        image_advtab: false,
                        image_uploadtab: true,
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                      }}
                    onEditorChange={(content, editor) => {setText(content)}}/>
            </div>
            <div id="categories" className="d-flex flex-collumn row justify-content-between mt-3 border border-dark rounded">
              <div id="unique" className="d-flex justify-content-between">
                <div className="option">
                  <input type="radio" id="information" name="categories" value="Information"  onChange={handleCategories}/>
                  <label htmlFor="information">Information</label>
                </div>
                <div className="option">
                  <input type="radio" id="meeting" name="categories" value="Meeting notice" onChange={handleCategories}/>
                  <label htmlFor="meeting">Meeting Notice</label>
                </div>
                <div className="option">
                  <input type="radio" id="event" name="categories" value="Event" onChange={handleCategories}/>
                  <label htmlFor="event">Event</label>
                </div>
                <div className="option">
                  <input type="radio" id="request" name="categories" value="Request" onChange={handleCategories}/>
                  <label htmlFor="request">Request</label>
                </div>
              </div>
              <div className="d-flex flex-row justify-centent-center align-item-center">
                <div className="option">
                  <input type="checkbox" id="important" name="important" value="Important" onChange={handleCategories}/>
                  <label htmlFor="important">Important</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="urgent" name="urgent" value="Urgent" onChange={handleCategories}/>
                  <label htmlFor="urgent">Urgent</label>
                </div>
              </div>
            </div>
            <div className="displayTime d-flex flex-column justify-content-between mt-3 p-2 border border-dark rounded w-100">
                <div className="font-weight-bold"><p>Select when your post will appear on the board:</p> </div>
                <div className="d-flex flex-row justify-content-center align-item-center">
                    <label htmlFor="now">Now</label>
                    <input type="checkbox" id="now" name="now" value="now" onChange={handleNow}/>
                </div>
                <div>
                  {!now && <div>
                    <input type="datetime-local" id="start" name="start" 
                    min={new Date().toISOString().slice(0, -8)}
                    onChange={(e) => setStart(e.target.value)}/>
                  </div>}
                </div>                 
            </div>
            <div className="displayTime d-flex flex-column justify-content-between mt-3 p-2 border border-dark rounded w-100">
                <div className="font-weight-bold"><p>Select suppression date: </p></div>
                <div className="d-flex flex-row justify-content-center align-item-center">
                    <label htmlFor="undefined">Undefined suppression date</label>
                    <input type="checkbox" id="undefined" name="undefined" value="undefined" onChange={handleSuppr}/>
                </div>
                <div>
                  {!suppr && <div>
                    <input type="datetime-local" id="end" name="end" min={start} onChange={(e) => setEnd(e.target.value)}/>
                  </div>}
                </div>                 
            </div>                 
            <input type="submit" value="Post" className="btn btn-primary m-5" onClick={handleSubmit}/>
        </form>
        {posting && (<p  className="text-success">... Save post</p>)}
        <div><Link to="/">Back to notice board</Link></div>
  </div>
  );
};

export default AddPost;