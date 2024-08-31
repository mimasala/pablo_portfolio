import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import WorkCard, { workCardProps } from '../components/WorkCard'
import insta from '../../public/work/insta_title_picture.png';
import swimlane from '../../public/work/swimlane_black-and-white.png'
import befragungstool from '../../public/work/html_css-2.png'
import mascot from '../../public/work/mascot.png'

const Index = () => {
  const workCards: workCardProps[] = [
    { title: "INSTAGRAM STORY", img: insta, href: "/work/instagram-story" },
    { title: "SWIMLANE", img: swimlane, href: "/work/swimlane" },
    { title: "BEFRAGUNGS- TOOL", img: befragungstool, darken: true, href: "/work/befragungstool" },
    { title: "MASCOT", img: mascot, href: "/work/mascot" },
  ]

  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <Hero />
      <div className='m-8'>
        <h1
          style={{ width: 1200 }}
          className='text-9xl font-bold'>SCHAUE DIR MEINE ARBEITEN AN!</h1>
      </div>
      <div className='flex space-x-5 scroll-mr-96 overflow-x-scroll my-8 no-scrollbar'>
        <div className='xl:ml-[30vw]'></div>
        {workCards.map(card => {
          return (<WorkCard title={card.title} img={card.img} darken={card.darken} href={card.href}></WorkCard>)
        })}
      </div>
    </div>
  )
}

export default Index
