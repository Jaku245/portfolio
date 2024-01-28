import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import portfolioImage from './Assets/jaimin_desai.jpg';
import reactImage from './Assets/react.png';
import angularImage from './Assets/angular.png';
import htmlImage from './Assets/html.png';
import cssImage from './Assets/css.png';
import vueImage from './Assets/vue.png';
import javaImage from './Assets/java.svg';
import pythonImage from './Assets/python.png';
import jsImage from './Assets/js.png';
import phoneImage from './Assets/phone.svg';
import emailImage from './Assets/email.svg';
import tempImage from './Assets/temp.jpg';
import { useState } from 'react';
var Carousel = require('react-responsive-carousel').Carousel;

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [find, setFind] = useState('');


  let data = ["Front End Developer.", "Full Stack Developer.", "Software Engineer."];
  let len = 0;
  let speed = 150;
  for (let i = 0; i < data.length; ++i) len += 2 * data[i].length;
  len += 4 * data.length;
  function type() {
    let p = 0;
    for (let i = 0; i < data.length; ++i) {
      let x = 0;
      while (x <= data[i].length) {
        let y = x;
        setTimeout(() => {
          document.getElementById('typewriter').innerHTML = `${data[i].substr(0, y)}`
        }, p * speed)
        ++x;
        ++p;
      }
      --x;
      p += 2;
      while (x >= 0) {
        let y = x;
        setTimeout(() => {
          document.getElementById('typewriter').innerHTML = `${data[i].substr(0, y)}`
        }, p * speed)
        --x;
        ++p;
      }
    }
    setTimeout(() => {
      type();
    }, len * speed);
  }

  function blinkingPointer() {
    setTimeout(() => {
      document.getElementById('check').style.borderRightColor = `red`;
    }, 500)
    setTimeout(() => {
      document.getElementById('check').style.borderRightColor = 'transparent'
    }, 1000)
    setTimeout(() => {
      blinkingPointer();
    }, 1000)

  }

  blinkingPointer();
  type();

  const skills = [
    {
      name: "React",
      image: reactImage,
      description: "Crafting dynamic interfaces with a modern hook-based architecture."
    },
    {
      name: "Angular",
      image: angularImage,
      description: "Building robust, feature-rich web applications with TypeScript and modular Angular architecture."
    },
    {
      name: "HTML",
      image: htmlImage,
      description: "Structuring information for clarity and accessibility."
    },
    {
      name: "CSS",
      image: cssImage,
      description: "Styling for visually appealing and responsive web applications."
    },
    {
      name: "Vue",
      image: vueImage,
      description: "Designing intuitive, performant interfaces with reactive data binding."
    },
    {
      name: "Java",
      image: javaImage,
      description: "Developing reliable and scalable backend systems and enterprise applications."
    },
    {
      name: "Python",
      image: pythonImage,
      description: "Efficient and readable code for backend, scripting, and data analysis."
    },
    {
      name: "JavaScript",
      image: jsImage,
      description: "Bringing interactivity to web applications with vanilla JS and modern frameworks."
    }
  ]

  const renderSkills = () => {
    return skills.map((skill, index) => {
      return (
        <div key={index} className="skill">
          <div className="upper-layer">
            <img src={skill.image} className="skill-image" alt={skill.name} />
          </div>
          <div className="lower-layer">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-description">{skill.description}</div>
          </div>
        </div>
      )
    })
  }

  const scrollToView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  const onChange = (value) => {
    console.log(value);
  }

  const onClickItem = (value) => {
    console.log(value);
  }

  const onClickThumb = (value) => {
    console.log(value);
  }

  return (
    <div className="main-container">
      <div className="info-wrapper">
        <div className="info">
          <p className='info-header' id="check">Hello. I'm a<br />
            <span className='info-header' id="typewriter">Front End Developer.</span>
          </p>
          <p className='info-summary'>My name's <strong>Jaimin Desai</strong>. I craft user interfaces using modern frontend web technologies.</p>
          <div className='lets-connect' onClick={() => scrollToView("contact")}>Let's connect!</div>
          <div className="info-links">
            <div className="info-socials">
              Find me at
              <a href='https://www.linkedin.com/in/jaimin--desai/' target='_blank' rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" className="social-icon" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href='https://github.com/Jaku245' target='_blank' rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" className="social-icon" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
              </a>
            </div>
            <div>
              Download my <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:228dc6d1-5ec8-460f-a661-760081638daa' target='_blank' rel="noopener noreferrer" className='info-resume-link'>resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-details">
        <div className='portfolio-section sticky-section portfolio-image-box'>
          <img src={portfolioImage} className='portfolio-image' alt='portfolio' />
          <div className='portfolio-image-overlay'></div>
        </div>
        <div className='portfolio-section sticky-section about-me-wrapper'>
          <div className="about-me">
            <div className="about-me-header">About Me</div>
            <p className="about-me-summary">I thrive on collaborating closely with design teams, meticulously translating their visions into pixel-perfect creations. My daily endeavors revolve around leveraging modern frontend technologies to give life to designers creative intentions.</p>
            <p className="about-me-sub-header">Technical</p>
            <p className="about-me-paragraph">Presently, my coding journey revolves around hacking away primarily with React, Vue, Angular, Node, Netlify, and delving into anything JavaScript/TypeScript, HTML, and CSS-related.</p>
            <p className="about-me-sub-header">Personal</p>
            <p className="about-me-paragraph">Hailing from India, I've made my home in Canada for some years. My diverse heritage fuels my commitment to regularly connect with family back home, even if it means struggling a bit with the timezone differences.</p>
            <p className="about-me-namaste">नमस्ते!</p>
          </div>
        </div>
        <div className='portfolio-section sticky-section skills-wrapper'>
          <div className="skills">
            {renderSkills()}
          </div>
        </div>
        {/* <div className='portfolio-section sticky-section testimonial-wrapper'>
          <div className="testimonial">
            <div>testimonial</div>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
          </div>
        </div> */}
        <div className='portfolio-section sticky-section projects-wrapper'>
          <div className="projects">
            <div className='projects-header'>Projects</div>
            <p className='projects-description'>Swipe or drag below to see a small selection of projects I've worked on.</p>
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div className="project-image">
                    <img src={tempImage} alt="project1" />
                    <div className="projects-details">
                      <p className="projects-details-header">Project 1</p>
                      <p className="projects-details-description">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                    </div>
                </div>
                <div className="project-image">
                    <img src={tempImage} alt="project1" />
                    <div className="projects-details">
                      <p className="projects-details-header">Project 2</p>
                      <p className="projects-details-description">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                    </div>
                </div>
                <div className="project-image">
                    <img src={tempImage} alt="project1" />
                    <div className="projects-details">
                      <p className="projects-details-header">Project 3</p>
                      <p className="projects-details-description">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                    </div>
                </div>
                <div className="project-image">
                    <img src={tempImage} alt="project1" />
                    <div className="projects-details">
                      <p className="projects-details-header">Project 4</p>
                      <p className="projects-details-description">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                    </div>
                </div>
            </Carousel>
          </div>
        </div>
        <div className='portfolio-section sticky-section contact-wrapper'>
          <div className="contact" id="contact">
            <div className="contact-header">Get in touch!</div>
            <p className="contact-description">Nothing wrong in saying "Hello". If you have any inquiry or project in mind, let's do it !!</p>
            <p>Name / Company</p>
            <input type="text" placeholder="John Doe" className="contact-input" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Email</p>
            <input type="email" placeholder="hello@example.comn" className="contact-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Message</p>
            <textarea placeholder="I heard you were the best!" className="contact-textarea" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <p>How did you find me?</p>
            <input type="text" placeholder="I saw you on social media." className="contact-input" value={find} onChange={(e) => setFind(e.target.value)} />
            <a href={"mailto:desaijaimin5@gmail.com?subject=Hello from " + name + "&body=" + message + " and " + find} className='contact-send-message-btn'>
              <div className="contact-submit">Submit</div>
            </a>
            <div className="contact-description contact-additional">
              <p>You can also</p>
              <a href='tel:+1-437-982-9484'><img src={phoneImage} alt="phone" className="contact-icon" /></a>
              <p>or</p>
              <a href='mailto:desaijaimin5@gmail.com'><img src={emailImage} alt="email" className="contact-icon" /></a>
              <p>anytime. I will do my best to answer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
