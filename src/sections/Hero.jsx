import React, { useRef, useEffect } from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  const sectionRef = useRef(null);
  const buttonsRef = useRef([]);

  useGSAP(() => {
    // Only run animations when section is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Text animations
            gsap.fromTo(
              ".hero-text h1",
              { y: 50, opacity: 0, willChange: "transform, opacity" },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 0.8, // Slightly reduced duration for smoother performance
                ease: "power2.inOut" 
              }
            );
            gsap.fromTo(
              ".hero-description",
              { y: 50, opacity: 0, willChange: "transform, opacity" },
              { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                ease: "power2.inOut", 
                delay: 0.3 // Slightly reduced delay
              }
            );

            // Button animations
            gsap.from(buttonsRef.current, {
              y: 30,
              opacity: 0,
              duration: 0.6, // Slightly reduced duration
              stagger: 0.15,
              delay: 0.5, // Slightly reduced delay
              ease: "back.out(1.7)",
              willChange: "transform, opacity"
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "100px", // Trigger earlier for smoother start
        threshold: 0.2 // Start when 20% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback to ensure visibility if animations don't run
    const ensureVisibility = () => {
      gsap.set(".hero-text h1", { y: 0, opacity: 1 });
      gsap.set(".hero-description", { y: 0, opacity: 1 });
      gsap.set(buttonsRef.current, { y: 0, opacity: 1 });
    };
    const timeoutId = setTimeout(ensureVisibility, 500);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  // Function to add buttons to ref array
  const addToButtonsRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-8xl w-full md:px-10 px-5">
        <link rel="preload" href="/images/bg.png" as="image" />
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.png" alt="background" loading="lazy" />
        </div>
        <div className="hero-layout">
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1 className="md:text-4xl text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Hi, I'm
                </h1>
                <h1 className="md:text-8xl text-7xl">Supun Prabodha</h1>
                <h1>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    a{" "}
                  </span>
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <div className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                            <img
                              src={word.imgPath}
                              alt={word.text}
                              className="w-4/5 h-4/5 object-contain invert"
                              loading="lazy"
                            />
                          </div>
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
                            {word.text}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
              </div>
              <p className="hero-description text-white-50 md:text-xl relative z-10 pointer-events-none md:max-w-lg">
                Hi, I'm Supun Prabodha, a Full Stack Developer with a passion for turning ideas into reality. With over a year of experience in crafting scalable web and mobile applications, I excel in both front-end and back-end development. Skilled in technologies like MERN Stack, Java and modern frameworks, I create seamless user experiences and robust solutions that deliver results.
              </p>
              <div className="flex gap-4 relative md:z-auto z-20">
                <div ref={addToButtonsRef}>
                  <Button
                    text="See my Work"
                    id="work"
                    className="md:w-80 md:h-16 w-60 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  />
                </div>
                <div ref={addToButtonsRef}>
                  <Button
                    text="Download CV"
                    href="/cv.pdf"
                    download
                    className="md:w-80 md:h-16 w-60 h-12 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
                  />
                </div>
              </div>
            </div>
          </header>
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;