// import './App.css'
import Header from './components/Header'
import Home from './screens/Home'
import Footer from './components/Footer'
import WelcomeCard from './components/WelcomeCard'
import CompaniesCard from './components/CompaniesCard'
import StatsCard from './components/StatsCards'
import Team from './components/Team'
import ParticleBkg from './components/ParticleBkg'


function App() {

  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflox-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <ParticleBkg />

      <Header/>

      <section id="home" className="snap-start">
        <Home />
      </section>

      {/* Welcome */}
      <section id="welcome" className="snap-center">
        <WelcomeCard />
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
      
      {/* Footer */}
      <section id="footer" className="snap-start">
        <Footer />
      </section>

    </div>
  )
}

export default App
