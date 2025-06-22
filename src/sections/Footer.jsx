import { useRef } from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  const footerRef = useRef(null);

  const handleMouseMove = (e) => {
    const footer = footerRef.current;
    if (!footer) return;

    const rect = footer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    footer.style.setProperty("--start", `${angle}deg`);
  };

  // Updated to include Threads icon
  const getSocialIcon = (name) => {
    switch(name) {
      case 'fb':
        return <i className="fab fa-facebook-f"></i>;
      case 'insta':
        return <i className="fab fa-instagram"></i>;
      case 'threads':
        return (
          <svg viewBox="0 0 24 24" className="threads-icon" width="20" height="20">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        );
      case 'linkedin':
        return <i className="fab fa-linkedin-in"></i>;
      case 'twitter':
        return <i className="fab fa-twitter"></i>;
      case 'github':
        return <i className="fab fa-github"></i>;
      default:
        return <i className="fas fa-share-alt"></i>;
    }
  };

  return (
    <footer ref={footerRef} onMouseMove={handleMouseMove} className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              href={img.url}
              key={img.url}
              rel="noopener noreferrer"
            >
              {getSocialIcon(img.name)}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} SupunPrabodha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;