
import './App.css'

function App() {
  return (
    <div className="vedic-container">
      {/* Header */}
      <header className="vedic-header">
        <div className="logo">VEDIC GROUP OF INSTITUTIONS</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Institutions</a>
          <a href="#">News</a>
          <a href="#">Achievements</a>
          <a href="#">Career</a>
          <a href="#">Student Login</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>

      {/* Banner */}
      <section className="hero">
        <h1>Indian Achievers Award 2023</h1>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="left">
          <h2>A Better Future Starts Here</h2>
          <p>
            Nurturing the youth with state-of-the-art facilities and relevant
            skill-set for a modern tech-driven society.
          </p>
          <button>Reach Us</button>
        </div>

        <div className="right">
          <div className="card">Primary School</div>
          <div className="card">Secondary School</div>
          <div className="card">Senior Secondary School</div>
          <div className="card">Higher Secondary</div>
          <div className="card">Degree College</div>
          <div className="card">Management</div>
        </div>
      </section>
    </div>
  )
}

export default App
