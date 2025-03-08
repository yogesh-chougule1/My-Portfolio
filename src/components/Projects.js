import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projectList = [
    { title: "Payment Checkout Aggregator", description: "Streamlines diverse payment modes, ensuring seamless integration with leading gateways for a flawless payment experience." },
    { title: "Eduqfix Education Portal", description: "An intuitive dashboard delivering seamless digital solutions, efficient data management, and real-time customization." },
    { title: "DIY Forms", description: "A seamless platform enabling merchants to effortlessly create and fully customize forms with complete control." },
    { title: "Pay Direct Portal", description: "A seamless, user-focused platform for efficient fee payments with instant redirection to Qfix Checkout for secure processing." },
    { title: "Eduqfix Forms & PDF Receipts", description: "A tailored platform that streamlines user data collection, providing a seamless and efficient digital solution. Customizable receipts with dynamic content & adaptable templates for merchants." },
    { title: "Mahindra Finance Web App", description: "A streamlined platform for managing loans, payments, and financial services with real-time updates." }
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;