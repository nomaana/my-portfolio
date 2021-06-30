import React from "react";
import "./Education.css";
function Education({ education }) {
  console.log(education, "ters");
  return (
    <div>
      <section id="services" class="services section-bg ">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Education</h2>
          </div>

          <div class="row">
            <div class="col-md-6 col-xl-12 ">
              {education.map((value) => (
                <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i class="icofont-computer"></i>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <h4>{value.collegeName}</h4>
                  <h4>{value.year}</h4>
                  <p>{value.percent}</p>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
