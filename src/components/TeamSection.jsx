import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sarah Thompson",
    role: "Head of Project Management",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Garcia",
    role: "Lead Software Engineer",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="text-center mb-12">
        <p className="text-sm text-blue-500 font-semibold uppercase mb-2">
          — Our Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet With Our Expert Team
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-xl mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
