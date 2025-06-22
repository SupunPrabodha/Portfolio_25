import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";

const TechStack = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    // Animate section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" } // Reduced duration
    );

    // Animate each tech card with a smooth vertical slide-in
    const totalCards = Object.values(techStackIcons.reduce((acc, icon) => {
      acc[icon.category] = acc[icon.category] || [];
      acc[icon.category].push(icon);
      return acc;
    }, {})).flat().length;
    cardRefs.current.slice(0, totalCards).forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 }, // Reduced initial offset
        {
          y: 0,
          opacity: 1,
          duration: 0.6, // Reduced duration
          delay: 0.2 * (index % 7), // Reduced and capped delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );

      // Add mouse-move glow effect
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty("--start", angle + 60);
        card.style.setProperty("--glow-opacity", "0.7"); // Dynamic glow intensity
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--start", "0");
        card.style.setProperty("--glow-opacity", "0"); // Reset glow
      });
    });
  }, []);

  // Group icons by category
  const categories = {
    frontend: techStackIcons.filter((icon) => icon.category === "frontend"),
    backend: techStackIcons.filter((icon) => icon.category === "backend"),
    languages: techStackIcons.filter((icon) => icon.category === "languages"),
    tools: techStackIcons.filter((icon) => icon.category === "tools"),
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="app-showcase bg-black text-white py-16 md:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 ">
        <TitleHeader title="How I Can Contribute & My Key Skills" sub="🤝 What I Bring to the Table" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {Object.entries(categories).map(([category, icons], catIndex) => (
            <div
              key={category}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform relative card card-border timeline-card"
              style={{ "--glow-opacity": "0" }} // Custom property for glow
            >
              <div className="glow absolute inset-0 rounded-xl" style={{ opacity: "var(--glow-opacity, 0)" }}></div>
              <h2 className="text-2xl font-semibold text-white mb-4 capitalize">{category}</h2>
              <div className="grid grid-cols-1 gap-3">
                {icons.map((icon, index) => (
                  <div
                    key={icon.name}
                    ref={(el) => (cardRefs.current[catIndex * 10 + index] = el)}
                    className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-105 relative z-10"
                  >
                    <i className={`${icon.iconClass} text-3xl mr-4`}></i>
                    <p className="text-lg text-white">{icon.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
