import "./App.css";
import VeltToolbar from "./components/VeltToolbar";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">AI Vision</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>The Future of AI is Here</h1>
        <p>
          Transform your business with cutting-edge artificial intelligence
          solutions
        </p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Smart Automation</h3>
            <p>Automate complex tasks with our AI-powered solutions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Get powerful insights from your data</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security for your peace of mind</p>
          </div>
        </div>
      </section>
      <VeltToolbar />
    </div>
  );
};

export default App;
