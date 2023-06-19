import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I am Hamza Ismail. I am a full expert in Front-end Web Designing
              using HTML, CSS, BOOTSTRAP, and JavaScript and in Back-end
              development using Php, and Laravel, MYSQL. I have completed many
              more projects. I have 6 years of experience and full grip Front
              end and Backend web development.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                alt="profile"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>UI Designer &amp; Web Developer.</h3>
              <p className="fst-italic">
                As an UI (User Interface) designer, I'm focused on creating
                visually appealing and user-friendly interfaces for digital
                products such as websites, mobile apps, and software
                applications. On the other hand, as a web developer i'm expert
                in specializing in creating websites and web applications. They
                possess technical skills in programming languages such as HTML,
                CSS, and JavaScript, and are proficient in frameworks and tools
                relevant to web development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span
                      >10 July 1995</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Website:</strong> <span>
                        <a href="https://hamzaismailportfolio.netlify.app/">Website</a></span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+92 316 5100 411</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Punjab, Pakistan</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {/* <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Age:</strong> <span>27
                      </span>
                    </li> */}
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</
                      strong>
                      <span>Graduation 
                        in Computer Science and Technology</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:
                        </strong>
                      <span>malikhamzaismail786@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong>
                     
                      <span>
                        <a href="https://www.fiverr.com/code_wallet/be-your-frontend-web-developer-using-html-css-bootstrap-js">
                          Available
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                For the last 6 years, I have been working as a FRONT END Web
                developer, BACK END Web developer having a strong command of any
                design format conversion into Html, CSS, Bootstrap, React. I can
                proudly assist you with Html5, Css3, Bootstrap, JavaScript,
                React js. Responsive Web templates, Mobile templates, front-end
                development, and all front-end related technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
    </>
  );
};

export default About;
