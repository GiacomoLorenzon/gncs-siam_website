import React from "react";
import "../assets/styles/Main.scss";

interface ScheduleProps {
  mode: "light" | "dark";
}

const Speakers: React.FC<ScheduleProps> = ({ mode }) => {
  const speakers = [
    {
      name: "Dr. Alice Smith",
      img: "https://via.placeholder.com/150",
      bio: "Professor at University X, works on probabilistic AI and optimization.",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    },
    {
      name: "Dr. John Doe",
      img: "https://via.placeholder.com/150",
      bio: "Researcher at Lab Y, focusing on differential geometry in ML.",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    },
    {
      name: "Dr. Maria Rossi",
      img: "https://via.placeholder.com/150",
      bio: "Postdoc at Institute Z, specialized in diffusion models.",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    },
    {
      name: "Dr. Kenji Tanaka",
      img: "https://via.placeholder.com/150",
      bio: "Scientist at Company Q, focusing on Bayesian deep learning.",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    },
    {
      name: "Dr. Elisa Nguyen",
      img: "https://via.placeholder.com/150",
      bio: "Assistant Professor at Tech University, expert in optimization theory.",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    },
  ];

  return (
    <div className={`speakers-section ${mode}`} id="speakers">
      <h2>Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((s, i) => (
          <div key={i} className="speaker-card">
            <div className="top">
              <img src={s.img} alt={s.name} className="speaker-img" />
              <div className="bio">
                <h3>{s.name}</h3>
                <p>{s.bio}</p>
              </div>
            </div>
            <div className="abstract">
              <h4>Abstract</h4>
              <p>{s.abstract}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="contributed">
        <h2>Contributed talks</h2>
        <ul>
          <li><strong>Dr. Alice Smith:</strong> Understanding Langevin Dynamics in ML</li>
          <li><strong>Dr. John Doe:</strong> Curvature-aware Optimization in Neural Networks</li>
          <li><strong>Dr. Maria Rossi:</strong> Flow-matching in Generative Models</li>
          <li><strong>Dr. Kenji Tanaka:</strong> Bayesian Deep Learning for Uncertainty Quantification</li>
          <li><strong>Dr. Elisa Nguyen:</strong> Geometry of Loss Landscapes</li>
        </ul>
      </div>
      <div className="contributed">
        <h2>Organisers</h2>
        <h3>Main</h3>
        <ul>
          <li><strong>Dr. Alice Smith:</strong> Understanding Langevin Dynamics in ML</li>
          <li><strong>Dr. John Doe:</strong> Curvature-aware Optimization in Neural Networks</li>
          <li><strong>Dr. Maria Rossi:</strong> Flow-matching in Generative Models</li>
          <li><strong>Dr. Kenji Tanaka:</strong> Bayesian Deep Learning for Uncertainty Quantification</li>
          <li><strong>Dr. Elisa Nguyen:</strong> Geometry of Loss Landscapes</li>
        </ul>
        <h3>Contributing</h3>
        <ul>
          <li><strong>Dr. Alice Smith:</strong> Understanding Langevin Dynamics in ML</li>
          <li><strong>Dr. John Doe:</strong> Curvature-aware Optimization in Neural Networks</li>
          <li><strong>Dr. Maria Rossi:</strong> Flow-matching in Generative Models</li>
          <li><strong>Dr. Kenji Tanaka:</strong> Bayesian Deep Learning for Uncertainty Quantification</li>
          <li><strong>Dr. Elisa Nguyen:</strong> Geometry of Loss Landscapes</li>
        </ul>
      </div>
    </div>
  );
};

export default Speakers;
