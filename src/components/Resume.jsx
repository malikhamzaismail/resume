import React from 'react';

const Resume = () => {
  return (
    <>
      {/* <!-- ======= Resume Section ======= --> */}
      <section id="resume" className="resume">
        <div className="container">

          <div className="section-title">
            <h2>Resume</h2>
            <p>In the era of Computer Science and Technology, I'm graduated in Computer Science and Technology from Taiyuan China.To continue my field, i have chosen web designing and web developing. My technical skills include proficiency in HTML, CSS, JavaScript, and other front-end development languages. I have experience in responsive design, ensuring that websites are optimized for various devices and screen sizes. Additionally, I am well-versed in using popular frameworks and libraries such as Bootstrap and jQuery to enhance the user interface and streamline development processes. </p>
            <br />
            <p>Furthermore, I am committed to continuous learning and improvement. I actively seek out new technologies, frameworks, and best practices to enhance my skills and deliver innovative solutions. I am excited about the ever-evolving nature of web development and thrive in fast-paced, dynamic environments.</p>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <br /><b><h6>Frontend:</h6></b>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <br />
                  <h6>Database:</h6>
                  <ul>
                    <li>MySQL</li>
                  </ul>
                  <br />
                  <h6>Backend:</h6>
                  <ul>
                    <li>PHP</li>
                  </ul>
                </div>
                <div className="col-6">
                  <br /><b><h6>Frontend Framework:</h6></b>
                  <ul>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>React Js</li>
                  </ul>
                  <br />
                  <h6>Backend Framework:</h6>
                  <ul>
                    <li>Laravel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Hamza Ismail</h4>
                <p><em>As a web developer, my goal is to design and create visually appealing, functional, and user-friendly websites that meet the needs of clients and provide an exceptional online experience of 5 years. With a strong background in web development and a passion for staying up-to-date with the latest trends and technologies, I am equipped to deliver high-quality websites that align with industry best practices.</em></p>
                <ul>
                  <li>Burewala, Punjab Pakistan</li>
                  <li>+92 316 5100 411</li>
                  <li>malikhamzaismail786@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Graduation in Computer Science &amp;  Technology</h4>
                <h5>2017 - 2021</h5>
                <p><em>North University of China, Taiyuan Shanxi China</em></p>
                <p> I am graduated in<strong> Computer Science and Technology CGPA: 3.65/5.00</strong> in <em>2021</em> From <i>North University of China, Taiyuan Shanxi China</i>
                <br/>
                <b>Final Year Project: Online Exam System</b>
                </p>
              </div>
              <div className="resume-item">
                <h4>Intermediate - Pre-Engineering</h4>
                <h5>2013 - 2016</h5>
                <p><em>Govt. Post Graduate College Burewala</em></p>
               <p> I have done my Intermediate with <strong>Grade B (Pre-Engineering)</strong> in <em>2016</em> From <i>Govt. Post Graduate College Burewala</i></p>
              </div>
              <div className="resume-item">
                <h4>Matriculation - Science Group</h4>
                <h5>2011 - 2013</h5>
                <p><em>Govt. High School Burewala</em></p>
                <p>I have completed my Matriculation with <strong>Grade A (Science Subjects)</strong> in <em>2013</em> From <i>Government High School Burewala</i></p>
              </div>
            </div>


            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>

              <div className="resume-item">
                <h4>React Js Developer</h4>
                <h5>2021 - Present</h5>
                {/* <p><em>Experion, New York, NY </em></p> */}
                <ul>
                  <li>Designed many webite using React</li>
                  <li> Figma to React Js - UI creation in figma and conversion into React js </li>
                  <li>With having full grip of React Js, JSX, Components, Routing, etc,..</li>
                </ul>
              </div>



              <div className="resume-item">
                <h4>Frontend Developer specialist</h4>
                <h5>2018 - Present</h5>
                {/* <p><em>Experion, New York, NY </em></p> */}
                <ul>
                  <li>UI design - User interface designing and development using html, css, javascript, bootstrap, tailwind css, react.</li>
                  <li> Figma to HTML - UI creation in figma and conversion into html, css, etc. </li>
                  <li>Supervise the assessment of all web design in order to ensure quality and accuracy of the design</li>
                </ul>
              </div>
              <hr />
              <div className="resume-item">
                <h4>Backend Developer specialist</h4>
                <h5>2021 - Present</h5>
                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                <ul>
                  <li>Design many of website using React </li>
                  <li>Using MySQL and PHP technologies</li>
                  <li>Recommended and consulted with clients on the most appropriate Wed Development</li>
                </ul>
              </div>
              <hr />
              <div className="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2018 - Present</h5>
                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                <ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                </ul>
              </div>
              <hr />
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End Resume Section --> */}
    </>
  );
}

export default Resume;
