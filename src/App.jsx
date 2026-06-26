import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Security from './components/Security/Security.jsx'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Security />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
