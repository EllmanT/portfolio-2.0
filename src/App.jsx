import LogoSection from "./sections/LogoSection"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import FeatureCards from "./sections/FeatureCards"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Showcase/>
    <LogoSection/>
    <FeatureCards/>

    </>
  )
}

export default App