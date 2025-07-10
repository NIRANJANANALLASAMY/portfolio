import React, { useState } from 'react';
import '../style/project.css';

// Card images and popup screenshots
import pro1p from '../assets/pro1p.png'; // Card image for id:1
import pro1 from '../assets/pro1.png';
import pro11 from '../assets/pro11.png';
import pro12 from '../assets/pro12.png';
import pro13 from '../assets/pro13.png';
import pro14 from '../assets/pro14.png';
import pro15 from '../assets/pro15.png';

import pro2p from '../assets/pro2p.jpeg'; // Card image for id:2
import pro21 from '../assets/pro21.png';
import pro22 from '../assets/pro22.jpg';
import pro23 from '../assets/pro23.png';
import pro24 from '../assets/pro24.png';

import pro3p from '../assets/pro3p.jpeg'; // Card image for id:3
import pro31 from '../assets/pro31.jpg';
import pro32 from '../assets/pro32.jpg';
import pro33 from '../assets/pro33.jpg';

const projects = [
  {
    id: 1,
    title: "Loom Hub",
    description: "A Automated Stock Management System.",
    details: [
      "📦 <b>Stock Management System — Project Description</b><br>The Stock Management System is a software application designed to help businesses efficiently track, manage, and control their inventory.It automates the process of recording stock levels, monitoring incoming and outgoing goods, and maintaining updated inventory data. This project ensures accuracy in stock information, reduces human errors, and provides real-time insights to support decision-making.<br><br><b>Key Features:</b><ul><li>Add, update, and delete stock items.</li><li>Track stock quantities, categories, and locations.</li><li>Record purchases, sales, and returns.</li><li>Alert when stock falls below minimum thresholds.</li></ul><br><b>Objective:</b> The main goal of the system is to streamline inventory management, minimize wastage and overstocking, and improve operational efficiency for businesses such as warehouses, retail shops, or supply chains.<br><br><b>Technology Stack:</b> HTML, CSS, JavaScript, React, Node.js, MongoDB<br><br><b>Benefits:</b><ul><li>✅ Real-time inventory tracking</li><li>✅ Improved accuracy and transparency</li><li>✅ Easy to use and scalable for future needs</li><li>✅ Time-saving and cost-effective</li></ul>"
    ],
    cardImage: pro1p,
    screenshots: [pro11, pro1, pro12, pro13, pro14, pro15],
    github: "https://github.com/NIRANJANANALLASAMY/StockManagement.git"
  },
  {
    id: 2,
    title: "Travel Planner",
    description: "A simple CRUD app for daily tasks.",
    details: [
      "🌏 <b>Travel Planner Website — Project Description</b><br>The Travel Planner Website is an interactive web application designed to help users plan, organize, and book their travel experiences seamlessly. It provides information about destinations, trip packages, activities, and volunteer opportunities, all in one place. The platform also allows users to register, log in, explore local events, and contact the organizers easily.<br><br><b>Key Features:</b><ul><li>User-friendly interface with Home, About, Packages, and Contact sections.</li><li>Categorized trip packages: tours, volunteering activities, and local events.</li><li>Add-to-cart functionality for choosing and booking packages.</li><li>Secure user authentication (registration & login system).</li><li>Contact section with address, email, social media links, and feedback form.</li><li>Responsive and visually appealing design with a dark/light theme option.</li></ul><br><b>Objective:</b> The goal of the project is to simplify travel planning and promote unique experiences, including volunteering and cultural immersion, making it easy for users to discover and book meaningful trips.<br><br><b>Technology Stack:</b> React.js, Node.js, Express, MongoDB<br><br><b>Benefits:</b><ul><li>✅ Centralized platform for travel planning</li><li>✅ Encourages sustainable and volunteer tourism</li><li>✅ Secure and smooth booking process</li><li>✅ Engaging user experience and mobile-friendly design</li></ul>"
    ],
    cardImage: pro2p,
    screenshots: [pro21, pro22, pro23, pro24],
    github: "https://github.com/NIRANJANANALLASAMY/Travel-Planner.git"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Live weather updates using OpenWeather API.",
    details: [
      "🚗 <b>E‑Challan Generation System  — Project Description</b><br>The E‑Challan Generation System is a web‑based application developed to simplify and digitize the process of issuing challans (penalties) for vehicle parking. This system allows authorized personnel or customers to record parking details and generate an e‑challan instantly, eliminating manual paperwork and reducing errors. It also provides a secure way for customers to retrieve and view their challan details online.<br><br><b>Key Features:</b><ul><li>Challan form for entering vehicle details, parking area, and violation information.</li><li>Automatic e‑challan generation with unique ID.</li><li>Database to store and retrieve challan records.</li><li>User‑friendly interface with Home, About, Challan Form, and View Challan pages.</li><li>Search functionality to check challan status by ID or vehicle number.</li></ul><br><b>Objective:</b> The main aim of the project is to digitize and streamline the process of managing parking violations, making it transparent, efficient, and easy for both authorities and vehicle owners.<br><br><b>Technology Stack:</b> HTML, CSS, MongoDB, React<br><br><b>Benefits:</b><ul><li>✅ Faster challan generation and reduced paperwork</li><li>✅ Easy retrieval and tracking of challans</li><li>✅ Improved transparency and accountability</li><li>✅ Accessible from any device with internet</li></ul>"
    ],
    cardImage: pro3p,
    screenshots: [pro31, pro32, pro33],
    github: "https://github.com/NIRANJANANALLASAMY/E-Challan-System.git"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-section"><br></br>
      <h2><br></br>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="project-card animated-card"
            tabIndex={0}
          >
            <img src={proj.cardImage} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <button onClick={() => setActiveProject(proj)}>View More</button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="modal-content custom-centered large-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setActiveProject(null)}>&times;</span>
            <h2>{activeProject.title}</h2>
            <div className="screenshots-grid">
              {activeProject.screenshots.map((src, idx) => (
                <img key={idx} src={src} alt={`screenshot ${idx + 1}`} />
              ))}
            </div>
            <ul>
              {activeProject.details.map((point, idx) => (
                <div
                  key={idx}
                  className="project-details-html"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </ul>
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
