import { Navbar, About, Projects, Skills, Hero, Footer } from './components/index.js';

function App() {

  return (
    <div className="bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div >
  )
}

export default App
