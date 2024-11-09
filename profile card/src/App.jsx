import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="content">
            <img
              src="https://media.istockphoto.com/id/1968122539/photo/confident-young-entrepreneur-with-a-beard-smiling-outdoors-modern-office-building-background.jpg?s=612x612&w=0&k=20&c=X1HVO9R2D1rzbZ1olrTagmygBscQyNYjJk9EJJTas4w="
              alt="mainimg"
            />
            <h3>Ricky Park</h3>
            <h5>Los Angeles</h5>
            <p>Full Stack Developer with 5 years of experience</p>
            <button className="btn1">Message</button>
            <button className="btn2">Following</button>
          </div>

          <div className="skills-section">
            <h5>SKILLS</h5>
            <div className="skills-grid">
              <span>JavaScript</span>
              <span>React</span>
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>SQL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
