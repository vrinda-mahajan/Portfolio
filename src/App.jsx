import "./App.css";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  Footer,
  LandingSection,
  Navbar,
  ProjectSection,
  SkillSection,
} from "./components";

function App() {
  return (
    <div id="home" className="App">
      <Navbar />
      <main className="portfolio-main">
        <LandingSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
