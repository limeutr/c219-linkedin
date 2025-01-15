import React, { useState } from "react";

const About = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const handleDiplomaClick = (diplomaId) => {
    setSelectedDiploma(diplomaId === selectedDiploma ? null : diplomaId);
  };

  const handleModuleClick = (moduleId) => {
    setSelectedModule(moduleId === selectedModule ? null : moduleId);
  };

  const modules = {
    IT: [
      {
        id: "C218",
        name: "UI/UX Design for Apps",
        lecturer: "Azhar Kamar",
        description:
          "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
      },
      {
        id: "C346",
        name: "Mobile App Development",
        lecturer: "Derek Lee",
        description:
          "In this module, students will learn the basics of creating Android Applications.",
      },
    ],
    FT: [
      {
        id: "C237",
        name: "Software Application Development",
        lecturer: "Hannah Lim",
        description:
          "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
      },
      {
        id: "C372",
        name: "Payment Technologies",
        lecturer: "Magdalene Lim",
        description:
          "This module introduces students to different payment technologies and systems.",
      },
    ],
  };

  return (
    <div className="about-container">
      {/* Information Technology Diploma */}
      <div className="diploma-section">
        <h2
          onClick={() => handleDiplomaClick("IT")}
          onMouseEnter={() => setHoveredItem("IT")}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            color: hoveredItem === "IT" ? "green" : "black",
            textDecoration: hoveredItem === "IT" ? "underline" : "none",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          Information Technology
        </h2>
        {selectedDiploma === "IT" && (
          <div>
            {modules.IT.map((module) => (
              <div key={module.id} style={{ marginBottom: "20px" }}>
                <h3
                  onClick={() => handleModuleClick(module.id)}
                  onMouseEnter={() => setHoveredItem(module.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    color: hoveredItem === module.id ? "green" : "black",
                    textDecoration: hoveredItem === module.id ? "underline" : "none",
                    cursor: "pointer",
                    marginBottom: "10px",
                    fontSize: "1.25rem",
                  }}
                >
                  {module.name}
                </h3>
                <p>Lecturer: {module.lecturer}</p>
                {selectedModule === module.id && (
                  <p className="module-description">{module.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Financial Technology Diploma */}
      <div className="diploma-section">
        <h2
          onClick={() => handleDiplomaClick("FT")}
          onMouseEnter={() => setHoveredItem("FT")}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            color: hoveredItem === "FT" ? "green" : "black",
            textDecoration: hoveredItem === "FT" ? "underline" : "none",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          Financial Technology
        </h2>
        {selectedDiploma === "FT" && (
          <div>
            {modules.FT.map((module) => (
              <div key={module.id} style={{ marginBottom: "20px" }}>
                <h3
                  onClick={() => handleModuleClick(module.id)}
                  onMouseEnter={() => setHoveredItem(module.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    color: hoveredItem === module.id ? "green" : "black",
                    textDecoration: hoveredItem === module.id ? "underline" : "none",
                    cursor: "pointer",
                    marginBottom: "10px",
                    fontSize: "1.25rem",
                  }}
                >
                  {module.name}
                </h3>
                <p>Lecturer: {module.lecturer}</p>
                {selectedModule === module.id && (
                  <p className="module-description">{module.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
