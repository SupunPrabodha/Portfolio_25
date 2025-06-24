import React, { useRef, useEffect } from 'react';

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);

  useEffect(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
    ];

    // Fallback to ensure content displays if IntersectionObserver fails
    const ensureVisibility = () => {
      projects.forEach((project) => {
        if (project) {
          project.style.opacity = '1';
        }
      });
    };

    // Set timeout as fallback to ensure display after 1 second
    const timeoutId = setTimeout(ensureVisibility, 1000);

    // IntersectionObserver for lazy loading enhancement
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      projects.forEach((project) => {
        if (project) {
          project.style.opacity = '0'; // Initial state for observed elements
          observer.observe(project);
        }
      });

      return () => {
        projects.forEach((project) => {
          if (project) {
            observer.unobserve(project);
          }
        });
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      ensureVisibility();
    }

    return () => clearTimeout(timeoutId);
  }, []);

  // Define social links for each project
  const projectLinks = [
    {
      github: 'https://github.com/SupunPrabodha/FitFlow.lk.git',
      linkedin: 'https://www.linkedin.com/posts/supun-prabodha-liyanage_webdevelopment-mernstack-gymmanagement-activity-7331211026870280193-jYi0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1TzToBue565T0O3TZSm7ZtRsVSRNykOLc',
    },
    {
      github: 'https://github.com/SupunPrabodha/SeatReserve.git',
      linkedin: 'https://www.linkedin.com/posts/supun-prabodha-liyanage_webdevelopment-java-oop-activity-7340983497441931264-iX3b?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1TzToBue565T0O3TZSm7ZtRsVSRNykOLc',
    },
    {
      github: 'https://github.com/SupunPrabodha/WealthWave.git',
      linkedin: 'https://www.linkedin.com/posts/supun-prabodha-liyanage_mobiledevelopment-kotlin-androidstudio-activity-7334953999428632579-CSQ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1TzToBue565T0O3TZSm7ZtRsVSRNykOLc',
    },
    {
      github: 'https://github.com/SupunPrabodha/VOTE_SPHERE.git',
      linkedin: 'https://www.linkedin.com/posts/supun-prabodha-liyanage_webdevelopment-php-mysql-activity-7339320527011909632-DIFF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1TzToBue565T0O3TZSm7ZtRsVSRNykOLc',
    },
    {
      github: 'https://github.com/SupunPrabodha/SFitMarket_UI.git',
      linkedin: 'https://www.linkedin.com/posts/supun-prabodha-liyanage_uidesign-mobileapp-uxdesign-activity-7329898733637132290-9iZW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1TzToBue565T0O3TZSm7ZtRsVSRNykOLc',
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase bg-black text-white py-16 md:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Portfolio Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - FitFlow.lk */}
          <div
            ref={project1Ref}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform relative card card-border timeline-card"
          >
            <div className="glow absolute inset-0 rounded-xl"></div>
            <div className="image-wrapper overflow-hidden rounded-lg relative z-10">
              <img
                src="/images/project1.png"
                alt="FitFlow"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="text-content mt-4 relative z-10">
              <h2 className="text-2xl font-semibold text-white mb-2">
                FitFlow.lk - Gym Management System
              </h2>
              <p className="text-white text-lg">
                A robust MERN stack application developed as part of SLIIT's 2nd Year, 2nd Semester ITP project. This gym management system integrates AI-driven workout plans, JWT-based authentication, inventory tracking, and a responsive chatbot to enhance user experience and operational efficiency.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href={projectLinks[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white text-lg"></i>
              </a>
              <a
                href={projectLinks[0].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* Project 2 - SeatReserve */}
          <div
            ref={project2Ref}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform relative card card-border timeline-card"
          >
            <div className="glow absolute inset-0 rounded-xl"></div>
            <div className="image-wrapper overflow-hidden rounded-lg bg-gray-800 relative z-10">
              <img
                src="/images/project2.png"
                alt="SeatReserve"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              SeatReserve - Bus Ticket Reservation System
            </h2>
            <p className="text-white text-lg mt-2">
              An efficient bus ticket reservation platform designed to streamline booking processes. This project showcases backend integration and user-friendly interface design, catering to real-time seat availability and payment processing.
            </p>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href={projectLinks[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white text-lg"></i>
              </a>
              <a
                href={projectLinks[1].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* Project 3 - WealthWave */}
          <div
            ref={project3Ref}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform relative card card-border timeline-card"
          >
            <div className="glow absolute inset-0 rounded-xl"></div>
            <div className="image-wrapper overflow-hidden rounded-lg bg-gray-800 relative z-10">
              <img
                src="/images/project3.png"
                alt="WealthWave"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              WealthWave - Personal Finance Tracker
            </h2>
            <p className="text-white text-lg mt-2">
              A personal finance management tool built to help users track expenses, budgets, and investments. This project leverages modern web technologies to provide insightful financial analytics and secure data handling.
            </p>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href={projectLinks[2].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white text-lg"></i>
              </a>
              <a
                href={projectLinks[2].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* Project 4 - VOTE SPHERE */}
          <div
            ref={project4Ref}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform relative card card-border timeline-card"
          >
            <div className="glow absolute inset-0 rounded-xl"></div>
            <div className="image-wrapper overflow-hidden rounded-lg bg-gray-800 relative z-10">
              <img
                src="/images/VOTE SPHERE.png"
                alt="VOTE SPHERE"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              VOTE SPHERE - Voting System for Reality Shows
            </h2>
            <p className="text-white text-lg mt-2">
              An interactive web application for managing reality show votes online, developed using HTML, CSS, JavaScript, and PHP. The system provides an intuitive interface for users and administrators to manage accounts, reality shows, voting, and deadlines.
            </p>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href={projectLinks[3].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white text-lg"></i>
              </a>
              <a
                href={projectLinks[3].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* Project 5 - SFitMarket */}
          <div
            ref={project5Ref}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform relative card card-border timeline-card"
          >
            <div className="glow absolute inset-0 rounded-xl"></div>
            <div className="image-wrapper overflow-hidden rounded-lg bg-gray-800 relative z-10">
              <img
                src="/images/SFitMarket.png"
                alt="SFitMarket"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              SFitMarket - UI Prototype
            </h2>
            <p className="text-white text-lg mt-2">
              SFitMarket is a mobile app UI prototype designed as part of my 2nd-year, 2nd-semester project for the Mobile Application Development (MAD) module. The app targets fitness enthusiasts, providing a seamless platform to shop for supplements, fitness accessories, clothes, shoes, and more.
            </p>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href={projectLinks[4].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white text-lg"></i>
              </a>
              <a
                href={projectLinks[4].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;