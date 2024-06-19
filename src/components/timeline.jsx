import React, { Component } from 'react'

const Timeline = () => {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline" id = "timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-device-laptop" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Project Management Co-op at SiPhox Health <span>June 2023-May 2024</span></h2>
                        <p>
                          At SiPhox I was a part of a one year old team attempting to bring at-home blood testing to America and Canada.
                          I completed a variety of projects, applying my skills in Fullstack Development, Data Analysis and Visualization, and Product Design to real products.
                          I would also work as a sales rep and account manager periodically. 
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
                        <h2>TA at Northeastern University <span>Jan. 2024- April 2024</span></h2>
                        <p> At Northeastern I guided students in their first internship search for CS1210. I held resume reviews and mock technical interviews.
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
                        <h2>Web Developer Intern at Innocuous AI <span>October 2022 - December 2022</span></h2>
                        <p> My first experience developing anything technical was at the startup Innocuous AI, where I worked with low-code solutions
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
                        <h2>Tutor at Juni Learning <span> Jan 2022 - Aug 2022</span></h2>
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
                        <h2>Waitstaff at Event Temps<span> 2021-2023</span></h2>
                        <p>During my first year of college, I regularly worked as a waitstaff at events for Harvard Medical School, 
                          Northeastern, and other nearby Boston colleges. 
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
