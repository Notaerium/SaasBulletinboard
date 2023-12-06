import React, { FunctionComponent} from "react";
import {useNavigate} from 'react-router-dom';

//add button bottom right of the screen
const AddBtn: FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateAddPost = () => {
    navigate('/create_post')
  }

  return (
    <footer>
       <button type="button" className="btn btn-secondary add" onClick={navigateAddPost}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
            </svg>
        </button>
    </footer>
  );
};

export default AddBtn;
