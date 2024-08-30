import NavBar from '../components/NavBar'
import pablo from '../../public/work/pablo_about_me.png'


const About = () => {
  return (<>
    <NavBar />

    <div className='w-screen flex justify-center items-center pt-20'>
      <div className='sm:w-full sm:p-8 xl:w-2/3'>
        <div className='w-full flex'>
          <div className='xl:w-1/2 w-1/3'>
            <h1 className='xl:text-8xl md:text-5xl font-bold'>ABOUT ME</h1>
          </div>
          <div className='w-1/2 font-bold'>
            Ich bin Pablo, 18 Jahre alt und lerne als Mediamatiker beim SRF. Mit meinem humorvollen und freigeistigen Charakter gehe ich motiviert durch das Leben. In meiner Freizeit spiele ich leidenschaftlich gern Fussball, lebe meine Kreativität aus und tauche mit Begeisterung in Bücher ein. Die Verbindung von Technik und Kreativität fasziniert mich besonders und treibt mich an, immer wieder Neues zu entdecken. Ich freue mich darauf, meine Fähigkeiten weiter auszubauen und spannende Projekte zu realisieren.
          </div>
        </div>
        <div className='mt-8'>
          <img src={pablo} />
        </div>
      </div>
    </div>
  </>)
}

export default About
