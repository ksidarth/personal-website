import React, { useEffect, useRef } from 'react';

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Software Engineering Co-Op",
      company: "MORSE Corp",
      companyUrl: "https://www.morsecorp.com/",
      period: "January 2025 - June 2025",
      icon: "💻",
      description: "At MORSE, I built data quality tools for the US Department of Defense. I worked with a team to develop a Python-based data validation framework, which included a model inference engine, label prioritization system, label deduplication tool, and more.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Quantitative Analyst Intern",
      company: "PNC Bank",
      companyUrl: "https://www.pnc.com/",
      period: "May 2024 - August 2024",
      icon: "📊",
      description: "At PNC, I used machine learning techniques to analyze and predict outcomes from financial and consumer data. I developed programs in Python and SQL, applying methods like Gradient Boosted Classifiers to make sense of the processed data. I worked with libraries such as PyCaret, PySpark, and XGBoost to fine-tune these models. Additionally, I supported the C&IB team by setting up an SQL database for modeling prepayment curves, which helped simplify trade decisions.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Technical Project Management Co-op",
      company: "SiPhox Health",
      companyUrl: "https://siphoxhealth.com/",
      period: "June 2023 - May 2024",
      icon: "🔬",
      description: "At SiPhox, I was a part of a one year old team attempting to bring at-home blood testing to America and Canada. I completed a variety of projects, applying my skills in Fullstack Development, Data Analysis, and Product Design to real products. In the lab, I would fix and develop software for Linear Dipping Stations as well as write batch scripts for ease-of-use. I would also work as a sales rep and account manager periodically, bringing in ~$5000 dollars in sales.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Teaching Assistant",
      company: "Northeastern University",
      companyUrl: "https://www.northeastern.edu/",
      period: "Jan. 2024 - April 2024",
      icon: "🎓",
      description: "At Northeastern University, I guided students in their first internship search for CS1210. I held resume reviews and mock technical interviews. I also set up and carried out a feedback system for students to gauge the realism of mock interviews.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "Web Developer Intern",
      company: "Innocuous AI",
      companyUrl: "https://www.innocuous.ai/",
      period: "October 2022 - December 2022",
      icon: "🌐",
      description: "My first professional experience in technical development was at the startup Innocuous AI, where I worked with low-code solutions like Wix and Wordpress to increase user engagement in the website. I would also help manage ad campaigns within Meta and Twitter Ads Manager.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 6,
      title: "Tutor",
      company: "Juni Learning",
      companyUrl: "https://junilearning.com/",
      period: "Jan 2022 - Aug 2022",
      icon: "📚",
      description: "I was a private tutor at Juni Learning, specializing in teaching the fundamentals of Algorithms and Data Structures to high school students.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 7,
      title: "Waitstaff",
      company: "Event Temps",
      companyUrl: "https://eventtemps.net/",
      period: "2021 - 2023",
      icon: "🍽️",
      description: "During my first few years of college, I regularly worked as a waitstaff at events for Harvard Medical School, Northeastern, and other nearby Universities.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="timeline" ref={timelineRef} className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <span className="section-badge">History</span>
          <h2 className="timeline-title">Professional Timeline</h2>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((experience, index) => (
            <div key={experience.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-header-content">
                    <div className="timeline-icon">
                      <span className="icon-emoji">{experience.icon}</span>
                    </div>
                    <div className="timeline-meta">
                      <h3 className="timeline-job-title">{experience.title}</h3>
                      <div className="timeline-company">
                        at{' '}
                        <a 
                          href={experience.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="company-link"
                        >
                          {experience.company}
                        </a>
                      </div>
                      <span className="timeline-period">{experience.period}</span>
                    </div>
                  </div>
                  <p className="timeline-description">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          padding: 4rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .timeline-section.fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .timeline-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-top: 1rem;
          color: #1f2937;
        }

        .timeline-wrapper {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-wrapper::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 100%;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 2rem;
          width: 16px;
          height: 16px;
          background: white;
          border: 3px solid #667eea;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-content {
          width: 45%;
          position: relative;
        }

        .timeline-item.left .timeline-content {
          left: 0;
          text-align: right;
        }

        .timeline-item.right .timeline-content {
          left: 55%;
          text-align: left;
        }

        .timeline-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          position: relative;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 2rem;
          width: 0;
          height: 0;
          border: 12px solid transparent;
        }

        .timeline-item.left .timeline-card::before {
          right: -24px;
          border-left-color: white;
        }

        .timeline-item.right .timeline-card::before {
          left: -24px;
          border-right-color: white;
        }

        .timeline-header-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .timeline-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .icon-emoji {
          font-size: 1.5rem;
        }

        .timeline-meta {
          flex: 1;
        }

        .timeline-job-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
          color: #1f2937;
        }

        .timeline-company {
          font-size: 1rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .company-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .company-link:hover {
          color: #764ba2;
        }

        .timeline-period {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .timeline-description {
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .timeline-container {
            padding: 0 1rem;
          }

          .timeline-wrapper::before {
            left: 2rem;
          }

          .timeline-item::before {
            left: 2rem;
          }

          .timeline-content {
            width: 100%;
            left: 0 !important;
            text-align: left !important;
            padding-left: 4rem;
          }

          .timeline-card::before {
            display: none;
          }

          .timeline-header-content {
            flex-direction: column;
            text-align: left;
          }

          .timeline-icon {
            align-self: flex-start;
          }
        }

        @media (max-width: 480px) {
          .timeline-section {
            padding: 2rem 0;
          }

          .timeline-card {
            padding: 1.5rem;
          }

          .timeline-content {
            padding-left: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
