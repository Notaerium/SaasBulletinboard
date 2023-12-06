import React, { FunctionComponent} from "react";

const Footer: FunctionComponent = () => {

  return (
    <footer>
        <div className="d-flex bg-dark text-light w-100 fixed-bottom justify-content-between">
            <div >On demonstration purpose only. Made with Symfony 6.3 and Reactjs 18.2</div>
            <div className="d-flex flex-row me-2">
                <div className="me-2">Vinh PARNEIX</div> 
                <a href="https://github.com/Notaerium">My github</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;