import React from "react";
import "./experence.css";
function Expirence({ expirence }) {
  console.log(expirence, "test");
  return (
    <div>
      <section id="Experince" class="counts">
        <div className="main_text">
          <div class="section-title">
            <h2>Expirence</h2>
          </div>
        </div>
        {expirence.map((value) => (
          <div class="container" data-aos="fade-up">
            <div class="col">
              <div class="col-md-6 col-xl-12">
                <div class="count-box">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  <h4>{value.companyName}</h4>
                  <h3>{value.year}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Expirence;
