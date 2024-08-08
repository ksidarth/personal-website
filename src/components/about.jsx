import React, { Component } from 'react'

const About = () => {
    return (
      <div id='about'>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Intro</span>
                    <h2 className="colorlib-heading">About Me</h2>
                    <p> Hey, I am currently entering my Senior Year at Northeastern University, studying CS and Business Administration with a concentration in FinTech.
                        <br></br>
                        Recently, I worked at PNC Bank as a Quantitative Analyst Intern, helping to design and develop ML Algorithms.  
                        </p><p>
                        I enjoy running, basketball, guitar, sports betting algorithms and robotics.  
                        </p>
                    <p>Open to opportunities full-time for Spring and Summer 2025. 
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading">Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Science</h3>
                    <p>I have experience modeling and analyzing complex trends in real-world data. I have also build several pipelines in the professional setting to accurately pre-process data.
                        Most importantly, I have an aptitude for condensing findings and presenting understandable results.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Product-Minded Development
                    </h3>
                    <p>During my experience at SiPhox I accrued an understanding of how to develop with a customer focused mindset. This comes from a personal 
                        interest in UX design and customer behavior trends.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-group-outline" />
                </span>
                <div className="desc">
                    <h3>Teamwork</h3>
                    <p>I have worked with teams with a diverse set of backgrounds, such as Data Scientists, Software Developers, Marketing Consultants, Silicon Photonic Engineers, and Graphic Designers.
                        I have learned how to adapt and mesh with a variety of different people, and am always looking to work in environments with that same variety. 
                    </p>
                </div>
                </div>
            </div>
            
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div> */}
           
            </div>
        </div>
        </section>
      </div>
    )
}

export default About;