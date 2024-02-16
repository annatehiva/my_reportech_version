import React from 'react'
import './style/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {

    return (
        <>
        <header id="nav-wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Logo Here</a></h1></span>
            <button id="menu" class="btn-nav"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#fe206d" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
          </div>
          <div className="nav right">
            <a href="#about" className="nav-link"><span className="nav-link-span"><span className="u-nav">About</span></span></a>
            <a href="#work" className="nav-link"><span className="nav-link-span"><span className="u-nav">Work</span></span></a>
            <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
          </div>
        </nav>
      </header>
      <main>
        <section id="home">
    
        </section>
        <section id="about">
    
        </section>
        <section id="work">
    
        </section>
        <section id="contact">
    
        </section>
      </main>
      </>

    );
  }
  
  export default Navbar;