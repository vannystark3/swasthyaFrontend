import React from 'react';
import './Contact.css';
import mem1 from '../assets/aditya.png';
import mem2 from '../assets/abhishek.png';
import mem3 from '../assets/shaggy.png';
import mem4 from '../assets/rahul.jpg';

const members = [
  {
    name: "Aditya Khurana",
    role: "Lead Developer",
    image: mem1,
    link: "https://www.linkedin.com/in/aditya-khurana-/"
  },
  {
    name: "Abhishek Sharma",
    role: "Backend Developer & Product Strategist",
    image: mem2,
    link: "https://www.linkedin.com/in/abhishek-sharma-60b85a30b/"
  },
  {
    name: "Shagun Rana",
    role: "UI/UX Designer",
    image: mem3,
    link: "https://www.linkedin.com/in/shagun-rana-0a4a22241/"
  },
  {
    name: "Rahul Sharma",
    role: "Database Engineer",
    image: mem4,
    link: "https://www.linkedin.com/in/rahul-sharma-533262351/"
  }
];

export default function Team() {
  return (
    <section className="team" id="team">
      <h2 className="section-title">Team Vortex</h2>
      <div className="team-grid">
        {members.map((member, idx) => (
          <a
            key={idx}
            href={member.link}
            className="team-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={member.image} alt={member.name} />
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
