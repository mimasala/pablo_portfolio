import NavBar from '../components/NavBar'
import pablo from '../../public/work/pablo_about_me.avif'

const description = "Ich bin Pablo, 18 Jahre alt und lerne als Mediamatiker beim SRF. Mit meinem humorvollen und freigeistigen Charakter gehe ich motiviert durch das Leben. In meiner Freizeit spiele ich leidenschaftlich gern Fussball, lebe meine Kreativität aus und tauche mit Begeisterung in Bücher ein. Die Verbindung von Technik und Kreativität fasziniert mich besonders und treibt mich an, immer wieder Neues zu entdecken. Ich freue mich darauf, meine Fähigkeiten weiter auszubauen und spannende Projekte zu realisieren."

const About = () => {
  return (<>
    <NavBar />
    <div className='w-screen hidden lg:flex justify-center items-center pt-20'>
      <div className='p-8 xl:w-2/3'>
        <div className='w-full flex'>
          <div className='w-1/2'>
            <h1 className='text-8xl font-bold'>ABOUT ME</h1>
          </div>
          <div className='w-1/2 font-bold'>
            {description}
          </div>
        </div>
        <div className='mt-8'>
          <img src={pablo} />
        </div>
      </div>
    </div>
    <div className='lg:hidden w-full px-8 overflow-x-hidden'>
      <h1 className='text-3xl font-bold mt-20'>ABOUT ME</h1>
      <p className='font-bold my-2'>
        {description}
      </p>
      <img src={pablo} />
    </div>
  </>)
}

export default About
