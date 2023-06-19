import React from "react";

const Services = () => {
    return(
        <>
        {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <h4 className="text-center mb-3">We serve the following <b>Services</b></h4>
        </div>

        <div className="row">
        <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon">
            <img src="assets/img/services-icon/ui-design-icon.PNG" className="img-fluid"
             alt="" style={{height: '2rem', width:"2rem"}}  />
              {/* <i className="bi bi-binoculars"></i> */}
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                UI Designer
                {/* </a> */}
                </h4>
            <p className="description">We design user interfaces (UI) for you</p>
          </div>
        <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up">
          
            <div className="icon">
              {/* <i className="bi bi-briefcase"></i> */}
              <img src="assets/img/services-icon/frontend-icon.PNG" className="img-fluid" 
              alt="" style={{height: '2rem', width:"2rem"}}  />
              </div>
            <h4 className="title">
              {/* <a href=""> */}
                Frontend Developer
                {/* </a> */}
                </h4>
            <p className="description">We design your website by using technologies html, css, javascript, bootstrap, tailwind css, react js.</p>
          </div>
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-down" data-aos-delay="100">
            <div className="icon">
            <img src="assets/img/services-icon/backend-icon.PNG" className="img-fluid" 
            alt="" style={{height: '2rem', width:"2rem"}}  />
              {/* <i className="bi bi-card-checklist"></i> */}
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Backend Developer
                {/* </a> */}
                </h4>
            <p className="description">We develop web app with backend techniques like Php, laravel.</p>
          </div>
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon">
              {/* <i className="bi bi-bar-chart"></i> */}
              <img src="assets/img/services-icon/react.PNG" className="img-fluid" 
              alt="" style={{height: '2rem', width:"2rem"}}  />
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                React Js
                {/* </a> */}
                </h4>
            <p className="description">The JavaScript Library</p>
          </div>
          
          
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon">
              {/* <i className="bi bi-bar-chart"></i> */}
              <img src="assets/img/services-icon/bootstrap.PNG" className="img-fluid" 
              alt="" style={{height: '2rem', width:"2rem"}}  />
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Bootstrap
                {/* </a> */}
                </h4>
            <p className="description">Frontend Framework including HTML, CSS, Javascript</p>
          </div>
          
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
            <img src="assets/img/services-icon/tailwind.PNG" className="img-fluid" alt="" style={{height: '2rem', width:"2rem"}}  />
              {/* <i className="bi bi-brightness-high"></i> */}
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Tailwind CSS
                {/* </a> */}
                </h4>
            <p className="description">Frontend Framework including HTML, CSS, Javascript</p>
          </div>


          
          
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon">
              {/* <i className="bi bi-bar-chart"></i> */}
              <img src="assets/img/services-icon/graphics-icon.PNG" className="img-fluid" alt="" style={{height: '2rem', width:"2rem"}}  />
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Graphics Designing
                {/* </a> */}
                </h4>
            <p className="description">We develop numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</p>
          </div>
          
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
            <img src="assets/img/services-icon/wordpress-icon.PNG" className="img-fluid" alt="" style={{height: '2rem', width:"2rem"}}  />
              {/* <i className="bi bi-brightness-high"></i> */}
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Wordpress
                {/* </a> */}
                </h4>
            <p className="description">In Wordpress, we have ability to upload theme, customization, subdomian, plugin installation and handling.</p>
          </div>

          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon">
              {/* <i className="bi bi-bar-chart"></i> */}
              <img src="assets/img/services-icon/php.PNG" className="img-fluid" alt="" style={{height: '2rem', width:"2rem"}}  />
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Php
                {/* </a> */}
                </h4>
            <p className="description">Backend Language that makes website dynamic</p>
          </div>
          
          <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
            <img src="assets/img/services-icon/laravel.PNG" className="img-fluid" alt="" style={{height: '2rem', width:"2rem"}}  />
              {/* <i className="bi bi-brightness-high"></i> */}
            </div>
            <h4 className="title">
              {/* <a href=""> */}
                Laravel
                {/* </a> */}
                </h4>
            <p className="description">The Php Framework. To be website functional</p>
          </div>


          {/* <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="600">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title">
            // <a href="">
            Eiusmod Tempor
            // </a>
            </h4>
            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div> */}
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
        </>
    );
}

export default Services;
