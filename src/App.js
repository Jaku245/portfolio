import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
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
import sneakerama from './Assets/sneakerama.jpg';
import sevaImage from './Assets/seva.jpg';
import tstoreImage from './Assets/tstore.jpg';
import buildPortfolioImage from './Assets/buildportfolio.jpg';
import triplifyImage from './Assets/triplify.jpg';

import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

var Carousel = require('react-responsive-carousel').Carousel;

function App() {

  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [message, setMessage] = useState('');
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [find, setFind] = useState('');
  const [isFindValid, setIsFindValid] = useState(true);
  const notify = () => toast.success("Thanks! Email received.");


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

  useEffect(() => {
    blinkingPointer();
    type();
  }
    // eslint-disable-next-line
    , [])

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

  // eslint-disable-next-line
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = () => {
    if (name === '') {
      setIsNameValid(false);
      return;
    }
    if (emailRegex.test(email) === false || email === '') {
      setIsEmailValid(false);
      return;
    }
    if (message === '') {
      setIsMessageValid(false);
      return;
    }
    if (find === '') {
      setIsFindValid(false);
      return;
    }

    const templateId = 'template_hddk0c2';
    sendFeedback(templateId, { message: message, from_name: name, reply_to: email, find: find })
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      "service_83loam3",
      templateId,
      variables
    ).then(res => {
      if (res.status === 200){
        notify();
        setEmail('');
        setName('');
        setMessage('');
        setFind('');
      }
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const scrollToView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
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
              // <div>
              //   Download my <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:c1900522-4300-469f-9ba8-cb3b3a2f2c56' target='_blank' rel="noopener noreferrer" className='info-resume-link'>resume</a>
              // </div>
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
              <p className="about-me-namaste">नमस्ते!<span className="about-me-namaste-translation"> (Namaste!)</span></p>
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
              <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
                <a href='https://github.com/Jaku245/sneakerama-github' target='_blank' rel="noopener noreferrer">
                  <div className="project-image">
                    <img src={sneakerama} alt="Sneakerama" />
                    <div className="projects-details">
                      <p className="projects-details-header">Sneakerama</p>
                      <p className="projects-details-description">One stop store for all the sneaker-heads.</p>
                    </div>
                  </div>
                </a>
                <a href='https://github.com/Jaku245/SEVA/tree/front-end' target='_blank' rel="noopener noreferrer">
                  <div className="project-image">
                    <img src={sevaImage} alt="SEVA" />
                    <div className="projects-details">
                      <p className="projects-details-header">SEVA</p>
                      <p className="projects-details-description">All the essential services at your door step.</p>
                    </div>
                  </div>
                </a>
                <a href='https://github.com/Jaku245/TSTore' target='_blank' rel="noopener noreferrer">
                  <div className="project-image">
                    <img src={tstoreImage} alt="TStore" />
                    <div className="projects-details">
                      <p className="projects-details-header">TStore</p>
                      <p className="projects-details-description">Be in the latest T-trend all the time.</p>
                    </div>
                  </div>
                </a>
                <a href='https://github.com/Jaku245/BuildPortfolio' target='_blank' rel="noopener noreferrer">
                  <div className="project-image">
                    <img src={buildPortfolioImage} alt="BuildPortfolio" />
                    <div className="projects-details">
                      <p className="projects-details-header">BuildPortfolio</p>
                      <p className="projects-details-description">Your own portfolio is one step away.</p>
                    </div>
                  </div>
                </a>
                <a href='https://github.com/Jaku245/Triplify' target='_blank' rel="noopener noreferrer">
                  <div className="project-image">
                    <img src={triplifyImage} alt="Triplify" />
                    <div className="projects-details">
                      <p className="projects-details-header">Triplify</p>
                      <p className="projects-details-description">Make your tavel experience smooth and hassle free.</p>
                    </div>
                  </div>
                </a>
              </Carousel>
            </div>
          </div>
          <div className='contact-section sticky-section contact-wrapper'>
            <div className="contact" id="contact">
              <div className="contact-header">Get in touch!</div>
              <p className="contact-description">Nothing wrong in saying "Hello".</p>
              {/* <p className="contact-description">Nothing wrong in saying "Hello". If you have any inquiry or project in mind, let's do it !!</p> */}
              <p className="contact-input-label">Name / Company</p>
              <input type="text" placeholder="John Doe" className={isNameValid ? "contact-input" : "contact-input contact-input-invalid"} value={name} onChange={(e) => {
                setName(e.target.value);
                if (e.target.value === '') {
                  setIsNameValid(false);
                } else {
                  setIsNameValid(true);
                }
              }} />
              <p className="contact-input-label">Email</p>
              <input type="email" placeholder="hello@example.com" className={isEmailValid ? "contact-input" : "contact-input contact-input-invalid"} value={email} onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value === '') {
                  setIsEmailValid(false);
                } else {
                  setIsEmailValid(true);
                }
              }} />
              <p className="contact-input-label">Message</p>
              <textarea placeholder="I heard you were the best!" className={isMessageValid ? "contact-textarea" : "contact-textarea contact-input-invalid"} rows="3" value={message} onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value === '') {
                  setIsMessageValid(false);
                } else {
                  setIsMessageValid(true);
                }
              }}></textarea>
              <p className="contact-input-label">How did you find me?</p>
              <input type="text" placeholder="I saw you on social media." className={isFindValid ? "contact-input" : "contact-input contact-input-invalid"} value={find} onChange={(e) => {
                setFind(e.target.value);
                if (e.target.value === '') {
                  setIsFindValid(false);
                } else {
                  setIsFindValid(true);
                }
              }} />
              <div className="contact-submit" onClick={() => handleSubmit()}>Submit</div>
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
      <ToastContainer />
    </>
  );
}

export default App;
