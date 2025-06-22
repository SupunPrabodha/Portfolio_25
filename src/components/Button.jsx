import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const Button = ({ text, className, id, href, download }) => {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);

  // Animation setup
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const arrow = arrowRef.current;
    const text = textRef.current;

    const tl = gsap.timeline({ paused: true });
    
    tl.to(button, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(button, {
      boxShadow: "0 0 15px rgba(99, 102, 241, 0.7)",
      duration: 0.3
    }, 0)
    .to(text, {
      x: -5,
      duration: 0.2
    }, 0);

    if (arrow) {
      tl.to(arrow, {
        x: 10,
        duration: 0.4,
        ease: "back.out(2)"
      }, 0)
      .to(arrow, {
        rotate: 45,
        duration: 0.3
      }, 0.1);
    }

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      button.removeEventListener("mouseenter", () => tl.play());
      button.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    // Download functionality
    if (download && href) {
      const link = document.createElement('a');
      link.href = href;
      link.download = 'Supun_Prabodha_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Click animation
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    } 
    // Scroll to section functionality
    else if (id) {
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        
        // Smooth scroll with GSAP
        gsap.to(window, {
          scrollTo: {
            y: targetPosition,
            autoKill: false
          },
          duration: 1,
          ease: "power2.inOut"
        });

        // Click animation
        gsap.to(buttonRef.current, {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1
        });
      }
    }
  };

  return (
    <a
      ref={buttonRef}
      onClick={handleClick}
      className={`${className ?? ""} relative overflow-hidden group rounded-lg transition-all duration-300 flex items-center justify-center px-8 py-4 cursor-pointer`}
      href={download ? href : `#${id}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-500"></div>
      
      {/* Content */}
      <span ref={textRef} className="relative z-10 text-white font-bold text-lg tracking-wide transition-transform">
        {text}
      </span>
      
      {/* Arrow - only show if not download button */}
      {!download && (
        <div ref={arrowRef} className="ml-3 transition-all duration-400">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M5 12H19M12 5l7 7-7 7"/>
          </svg>
        </div>
      )}
      
      {/* Click feedback */}
      <div className="absolute inset-0 opacity-0 group-active:opacity-100 bg-white/20 transition-opacity duration-100"></div>
    </a>
  );
};

export default Button;