import LogoSection from "./sections/LogoSection"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Showcase/>
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>

    </>
  )
}

export default App