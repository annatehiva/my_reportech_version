import React from 'react'
import './style/Navbar.css'

function Navbar() {

    return (
        <>
      <header id="nav-wrapper">
    <nav id="nav">
      <div className="nav left">
        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Logo Here</a></h1></span>
        <button id="menu" className="btn-nav"><span className="fa fa-bars"></span></button>
      </div>
      <div class="nav right">
        {/* <a href="#home" class="nav-link active"><span class="nav-link-span"><span class="u-nav">Home</span></span></a> */}
        <a href="#about" className="nav-link"><span className="nav-link-span"><span className="u-nav">femmes</span></span></a>
        <a href="#work" className="nav-link"><span className="nav-link-span"><span className="u-nav">santé</span></span></a>
        <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">écologie</span></span></a>
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