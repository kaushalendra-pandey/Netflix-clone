import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {

    const [show,handleShow] = useState(false)

    useEffect( () => {
        window.addEventListener( 'scroll',() => {
            if(window.scrollY >100){
                handleShow(true)

            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    },[])

  return (
    <div className= {`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"
        alt="netflix logo"
      ></img>
    </div>
  );
};

export default Nav;
