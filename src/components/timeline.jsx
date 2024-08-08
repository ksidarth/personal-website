import React, { Component } from 'react'

const Timeline = () => {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline" id = "timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">history</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-0">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>Quantitative Analyst Intern at <a href="https://www.pnc.com/" className="highlight-underline" style={{color:'#5892f2'}}>PNC Bank</a><span> May 2024 - August 2024</span></h2>
                        <p>
                          At PNC, I helped develop ML Algorithms to model delinquency and default trends in customers. I designed and developed programs 
                          using Python and SQL to use techniques such as Gradient Boosted Classifiers to analyze and predict processed data. I worked with libraries such as 
                          PyCaret, PySpark, and XGBoost to tune and develop these models. 
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-device-laptop" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Project Management Co-op at <a href="https://siphoxhealth.com/" className="highlight-underline" style={{color:'#5892f2'}}>SiPhox Health</a> <span>June 2023 - May 2024</span></h2>
                        <p>
                          At SiPhox, I was a part of a one year old team attempting to bring at-home blood testing to America and Canada.
                          I completed a variety of projects, applying my skills in Fullstack Development, Data Analysis, and Product Design to real products.
                          In the lab, I would fix and develop software for Linear Dipping Stations as well as write batch scripts for ease-of-use.
                          I would also work as a sales rep and account manager periodically, bringing in ~$5000 dollars in sales. 
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                     <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>TA at <a href="https://www.northeastern.edu/" className="highlight-underline" style={{color:'#5892f2'}}>Northeastern University</a> <span>Jan. 2024 - April 2024</span></h2>
                        <p> At Northeastern University, I guided students in their first internship search for CS1210. I held resume reviews and mock technical interviews.
                          I also set up and carried out a feedback system for students to gauge the realism of mock interviews. 
                             </p>  
                      </div>
                    </div>
                  </article>


                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                      <i className="icon-user" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer Intern at <a href="https://www.innocuous.ai/" className="highlight-underline" style={{color:'#5892f2'}}>Innocuous AI</a> <span>October 2022 - December 2022</span></h2>
                        <p> My first professional experience in technical development was at the startup Innocuous AI, where I worked with low-code solutions
                          like Wix and Wordpress to increase user engagement in the website. I would also help manage ad campaigns within Meta and Twitter ads manager. 
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                      <i className="icon-book" />
                      </div>
                      <div className="timeline-label">
                        <h2>Tutor at <a href="https://junilearning.com/" className="highlight-underline" style={{color:'#5892f2'}}>Juni Learning</a> <span> Jan 2022 - Aug 2022</span></h2>
                        <p> I was a private tutor at Juni Learning, specializing in teaching the fundamentals of 
                          Algorithms and Data Structures to high school students. 
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i className="icon-food" />
                      </div>
                      <div className="timeline-label">
                        <h2>Waitstaff at <a href="https://eventtemps.net/" className="highlight-underline" style={{color:'#5892f2'}}>Event Temps</a> <span> 2021 - 2023</span></h2>
                        <p>During my first few years of college, I regularly worked as a waitstaff at events for Harvard Medical School, 
                          Northeastern, and other nearby Universities. 
                        </p>
                      </div>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

export default Timeline;
