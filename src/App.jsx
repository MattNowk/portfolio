import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollRail from './components/ScrollRail.jsx'
import SectionTopButton from './components/SectionTopButton.jsx'
import Accueil from './sections/Accueil.jsx'
import APropos from './sections/APropos.jsx'
import Parcours from './sections/Parcours.jsx'
import Projets from './sections/Projets.jsx'
import Contact from './sections/Contact.jsx'
import { SECTIONS, SECTION_IDS } from './data/sections.js'
import { useScrollSpy } from './hooks/useScrollSpy.js'

function App() {
  const { activeIndex, progress, markers, isDeepInSection } = useScrollSpy(SECTION_IDS)
  const activeSection = SECTIONS[activeIndex]

  return (
    <>
      <Header activeId={activeSection.id} />
      <main>
        <Accueil />
        <APropos />
        <Parcours />
        <Projets />
        <Contact />
      </main>
      <Footer />
      <ScrollRail activeIndex={activeIndex} progress={progress} markers={markers} />
      <SectionTopButton section={activeSection} isVisible={isDeepInSection} />
    </>
  )
}

export default App
