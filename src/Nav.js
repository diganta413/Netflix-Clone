import React,{useEffect,useState} from 'react'
import "./Nav.css";

function Nav() {
    const [scrolling,change]=useState(false);

    useEffect(() => {
      window.addEventListener("scroll",()=>{
          if(window.scrollY>200)
          {
              change(true);
          }
          else
          {
              change(false);
          }
      })  
    },[])

    return (
        <nav className={scrolling?"nav_bar_black":"nav_bar"}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="nav_logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="nav_avatar"/>
        </nav>
    )
}

export default Nav
