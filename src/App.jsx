// import './App.css'
import Header from './components/Header'
import Home from './screens/Home'
import Footer from './components/Footer'
import WelcomeCard from './components/WelcomeCard'
import CompaniesCard from './components/CompaniesCard'
import StatsCard from './components/StatsCards'
import Team from './components/Team'
import ParticleBkg from './components/ParticleBkg'
import Gallery from './components/Gallery'
import ContactForm from './components/Contact'
import Pillars from './components/Pillars'
import Events from './components/Events'

function App() {

  return (

      // <div className="bg-gradient-to-r from-black via-[#391772] to-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflox-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <div className="bg-gradient-to-r from-[#5C198D] via-black to-[#AB69D9] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflox-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ParticleBkg />

        <Header/>

        <section id="home" className="snap-start">
          <Home />
        </section>

        {/* Welcome */}
        <section id="welcome" className="snap-center">
          <WelcomeCard />
        </section>

        {/* Pillars */}
        <section id="welcome" className="snap-center">
          <Pillars/>
        </section>

        {/* Events */}
        <section id="welcome" className="snap-center">
          <Events/>
        </section>

        {/* Stats */}
        <section id="stats" className="snap-start">
          <StatsCard />
        </section>

        {/* Companies */}
        <section id="companies" className="snap-center">
          <CompaniesCard />
        </section>
        
        {/* Team */}
        <section id="team" className="snap-start">
          <Team />
        </section>

        <section id="gallery" className='snap-start'>
          <Gallery />
        </section>

        {/* Contact Form */}
        <section id="contact" className='snap-start'>
          <ContactForm/>
        </section>

        {/* Footer */}
        <section id="footer" className="snap-start">
          <Footer />
        </section>

      </div>
  )
}

export default App
