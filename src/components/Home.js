import profile from "../asset/images/profilepic.png"
function Home() {
    return (
      <section className="home">
        <div className="home-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
          I am a passionate Software Engineer with 3.5+ years of experience in building scalable and high-performance web applications. I have contributed to dynamic financial and e-commerce platforms, delivering seamless user experiences and optimizing system efficiency for thousands of users.
          </p>
          <a href="/projects" className="btn">Explore My Work</a>
        </div>
        <div className="home-image">
          <img src={profile} alt="Profile" />
        </div>
      </section>
    );
  }
  
  export default Home;