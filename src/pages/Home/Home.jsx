
import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import Projects from "/src/components/Projects/Projects"
import Contact from "/src/components/Contact/Contact"
import Footer from "/src/components/Footer/Footer"

const Home = () => {
  return (
    <section className="Home">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}

export default Home