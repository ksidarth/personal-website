import React, { Component } from 'react'
import Sidebar from "../components/sidebar"

const Blog = () => {
    return (
	<div id="colorlib-page">
	<div id="container-wrap">
	 <Sidebar></Sidebar>
      <div id="colorlib-main">
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta"> </span>
					<h2 className="colorlib-heading">Coming Soon!</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2024 </small> | <small> Political Commentary </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Street Fight</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Make website from scratch</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div> 
			</section>
      </div>
	  </div>
        </div>
    )
  }

export default Blog;
