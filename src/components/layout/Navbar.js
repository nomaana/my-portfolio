import React from "react";

function Navbar() {
  return (
    <div id="header" class="fixed-top">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-5  d-flex align-items-center">
            {/* <a href="index.html" class="logo mr-auto">
              <img src="../../assets/img/logo.png" alt=""></img>
            </a> */}

            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Education</a>
                </li>
                <li>
                  <a href="#Experince"> Experince</a>
                </li>
                <li>
                  <a href="#team">skills</a>
                </li>
                <li>
                  <a href="#team">My Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
