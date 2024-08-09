import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },

    {
      id: 2,
      day: "Tuesday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00 AM - 11:00 PM",
    },
  ];
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" srcset="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            {hours.map((element) => {
              return (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              );
            })}
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              
              <FaPhone />
              <span>+351 8950879790</span>
            </div>
            <div>
<MdEmail/>
<span>CasadaSaude@gmail.com</span>            </div>
            <div>
              <FaLocationArrow/>
              <span>Rua Diário de Notícias
2500-176 Caldas da Rainha,Portugal</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
