const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Full-Stack Developer", imgPath: "/images/ideas.svg" },
  { text: "Front-End Developer", imgPath: "/images/concepts.svg" },
  { text: "Back-End Developer", imgPath: "/images/designs.svg" },
  { text: "App Developer", imgPath: "/images/code.svg" },
  { text: "UI/UX Designer", imgPath: "/images/ideas.svg" },
  { text: "Full-Stack Developer", imgPath: "/images/concepts.svg" },
  { text: "App Developer", imgPath: "/images/designs.svg" },
  { text: "UI/UX Designer", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 13, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  { name: "HTML", category: "frontend", iconClass: "devicon-html5-plain colored" },
  { name: "CSS", category: "frontend", iconClass: "devicon-css3-plain colored" },
  { name: "JavaScript", category: "frontend", iconClass: "devicon-javascript-plain colored" },
  { name: "React.js", category: "frontend", iconClass: "devicon-react-original colored" },
  { name: "Tailwind CSS", category: "frontend", iconClass: "devicon-tailwindcss-plain colored" },
  { name: "Three.js", category: "frontend", iconClass: "devicon-threejs-original colored" },
  { name: "Node.js", category: "backend", iconClass: "devicon-nodejs-plain colored" },
  { name: "Express.js", category: "backend", iconClass: "devicon-express-original colored" },
  { name: "PHP", category: "backend", iconClass: "devicon-php-plain colored" },
  { name: "MongoDB", category: "backend", iconClass: "devicon-mongodb-plain colored" },
  { name: "MySQL", category: "backend", iconClass: "devicon-mysql-plain colored" },
  { name: "RESTful APIs", category: "backend", iconClass: "devicon-rest-plain colored" },
  { name: "Python", category: "languages", iconClass: "devicon-python-plain colored" },
  { name: "C", category: "languages", iconClass: "devicon-c-plain colored" },
  { name: "Java", category: "languages", iconClass: "devicon-java-plain colored" },
  { name: "C++", category: "languages", iconClass: "devicon-cplusplus-plain colored" },
  { name: "Kotlin", category: "languages", iconClass: "devicon-kotlin-plain colored" },
  { name: "R", category: "languages", iconClass: "devicon-r-plain colored" },
  { name: "Android Studio", category: "tools", iconClass: "devicon-android-plain colored" },
  { name: "Eclipse", category: "tools", iconClass: "devicon-eclipse-plain colored" },
  { name: "VS Code", category: "tools", iconClass: "devicon-vscode-plain colored" },
  { name: "Git", category: "tools", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", category: "tools", iconClass: "devicon-github-original colored" },
  { name: "Postman", category: "tools", iconClass: "devicon-postman-plain colored" },
  { name: "IntelliJ", category: "tools", iconClass: "devicon-intellij-plain colored" },
  { name: "Figma", category: "tools", iconClass: "devicon-figma-plain colored" },
  { name: "AWS", category: "tools", iconClass: "devicon-amazonwebservices-original colored" },
  { name: "Firebase", category: "tools", iconClass: "devicon-firebase-plain colored" },
];

const techStackImgs = []; // No local images, using CDN icons instead

const expCards = [
  {
    review: "Pursuing a degree with a focus on software engineering, actively engaging in various programming languages and technologies.",
    imgPath: "/images/sliit.png",
    logoPath: "/images/logos/sliit.png",
    title: "SLIIT - Bachelor of Science - BSc, Information Technology, specialize in Software Engineering",
    date: "Jul 2023 - Jul 2027",
    highlights: [
      "Sri Lanka Institute of Information Technology (SLIIT)",
      "Grade: 2nd year 2nd semester",
      "Skills: Python (Programming Language), Microsoft Office, Front-End Development, Problem Solving, PHP, SQL, English, Team Leadership, React.js, Presentations, Back-End Web Development, Information Technology, JavaScript, Kotlin, Machine Learning",
    ],
  },
  {
    review: "Completed schooling with leadership roles and diverse extracurricular activities, building a strong foundation in problem-solving and teamwork.",
    imgPath: "/images/richmond.png",
    logoPath: "/images/logos/richmond.png",
    title: "Richmond College - Galle",
    date: "2008 - 2021",
    highlights: [
      "Grade: 3 to 13",
      "Activities and societies: President Scout of 2nd Galle Richmond Scout Troop (2020), Treasurer of 2nd Galle Richmond Scout Troop (2020), Member of 2nd Galle Richmond Rover Scouts Troop, Member of Prefect Body (2015-2018), Member of UN Club, Member of Swimming Club (2014 - 2016)",
      "Skills: Problem Solving, Communication, Team Leadership, Creative Problem Solving",
    ],
  },
];

const expLogos = [
  { name: "sliit", imgPath: "/images/logos/sliit.png" },
  { name: "richmond", imgPath: "/images/logos/richmond.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review: "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review: "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/___supun_____/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/supun.prabodha.liyanage/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://www.threads.com/@___supun_____?xmt=AQF0absi7193GbiRxnjFtMwP--vjtnh-xGkZycITmOs70vI",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/supun-prabodha-liyanage/?originalSubdomain=lk",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};