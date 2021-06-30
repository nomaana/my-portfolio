import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <section id="about" class="about section-bg">
        <div class="container" data-aos="fade-up">
          <div className="about_text">
            <div class="section-title">
              <h2>About Me</h2>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="content col-xl-5 d-flex align-items-stretch">
              <div class="content">
                <p>
                  Hi! I am Noman AKhtar.A 25 year old technology Lover.
                  Passionate problem solver, Quick Learner, always looking for
                  opportunities to showcase my skills. JavaScript , MERN Stack
                  Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
