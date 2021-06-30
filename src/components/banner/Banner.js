import React, { useState, useEffect } from "react";
import img from "../../assets/img/img.png";
import "./banner.css";

function Banner() {
  const [user, setuser] = useState([
    {
      dob: "21-12-1995",
      email: "nomaanakhtar1995@gmail.com",
    },
  ]);

  useEffect(() => {}, []);
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
          <div class="row justify-content-center ">
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-5 ">
              <div class="row">
                <div class="col-xl-3 col-md-3  col-sm-3">
                  <img className="user_img" src={img} alt="" />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                  <div class="tool">
                    <h2 className="headerName">I'm Noman AKhtar</h2>
                    <span class="tooltext">Hello !</span>
                  </div>

                  <h2>
                    <u>Computer Science and Engineering</u>
                  </h2>
                  <div class="row">
                    <span class="col-md-2 col-sm-2 ">
                      <h2>dob</h2>
                    </span>
                    <span class="col-md-2 col-sm-2">
                      <h2>-</h2>
                    </span>
                    <span class="col-xl-5  col-md-5 col-sm-5">
                      <h2>21-12-1995</h2>
                    </span>
                  </div>
                  <div class="row">
                    <span class="col-md-2 col-sm-2 ">
                      <h2>phone</h2>
                    </span>
                    <span class="col-md-2 col-sm-2">
                      <h2>-</h2>
                    </span>
                    <span class="col-xl-5  col-md-5 col-sm-5">
                      <h2>8669103110</h2>
                    </span>
                  </div>
                  <div class="row">
                    <span class="col-md-2">
                      <h2>Email</h2>
                    </span>
                    <span class="col-md-2">
                      <h2>-</h2>
                    </span>
                    <span class="col-xl-5  col-md-5 col-sm-5">
                      <h2>nomaanakhtar1995@gmail.com</h2>
                    </span>
                  </div>
                  <div class="row">
                    <span class="col-md-2 col-sm-2">
                      <h2>website</h2>
                    </span>
                    <span class="col-md-2 col-sm-2">
                      <h2>-</h2>
                    </span>
                    <span class="col-xl-5  col-md-5 col-sm-5">
                      <h2>wwww.nomaanakhtar.in</h2>
                    </span>
                  </div>
                  <div class="row">
                    <span class="col-md-2 col-sm-2">
                      <h2>github</h2>
                    </span>
                    <span class="col-md-2 col-sm-2">
                      <h2>-</h2>
                    </span>
                    <span class="col-xl-5 col-md-5 col-sm-5">
                      <h2>
                        <a href="#">https://github.com/nomaana/</a>
                      </h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
