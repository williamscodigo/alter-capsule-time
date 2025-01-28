
import React from "react";
import redPanda from "../assets/img/RedPanda.png";
import wolf from "../assets/img/Wolf.png";
import blackJaguar from "../assets/img/BlackJaguar.png";

const AboutUs: React.FC = () => {
  const users = [
    {
      username: "Kristin Denny",
      github: "https://github.com/kristin-denny",
      email: "kristingdenny@gmail.com",
      image: redPanda,
    },
    {
      username: "Jose W Rivas",
      github: "https://github.com/williamscodigo",
      email: "williamscodigo@gmail.com",
      image: wolf,
    },
    {
      username: "Michael Wahba",
      github: "https://github.com/mwahba624",
      email: "mwahba624@gmail.com",
      image: blackJaguar,
    },
  ];

  const aboutSectionStyle: React.CSSProperties = {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#474e5d",
    color: "white",
    marginTop: "20px",
  };

  const cardStyle: React.CSSProperties = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "8px",
  };

  const containerStyle: React.CSSProperties = {
    padding: "16px",
  };

  const buttonStyle: React.CSSProperties = {
    border: "none",
    outline: "0",
    display: "inline-block",
    padding: "8px",
    color: "white",
    backgroundColor: "#000",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: "#555",
  };
  const emailLink: React.CSSProperties = {
    color: "#1a73e8",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div>
      <div style={aboutSectionStyle}>
        <h1 style={{ fontWeight: "bold", marginBottom: "15px", fontSize: "20px"}}>About Us</h1>
        <p>At our core, we are a team of passionate individuals dedicated to innovation, collaboration, and excellence. With diverse expertise and a shared vision, we strive to create solutions that are not only functional but also impactful.</p>
      </div>

      <h2 style={{ textAlign: "center", fontSize: "30px", fontStyle: "bold", margin: "10px 0" }}>Our Team</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.username}
            style={{
              ...cardStyle,
              width: "300px",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={user.image}
              alt={user.username}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={containerStyle}>
              <h2>{user.username}</h2>
              <p style={{ color: "grey" }}>Team Member</p>
              <a href={`mailto:${user.email}`} style={emailLink}>
                {user.email}
              </a>
              <a href={user.github} target="_blank" rel="noopener noreferrer"> {/* noopener noreferrer is a security measure */}
                <button
                  style={{ ...buttonStyle, ...buttonHoverStyle }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor =
                      "#555")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor =
                      "#000")
                  }
                >
                  Github Profile
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;