import React from 'react'
import WorkImage from '../../components/WorkImage'
import WorkContentContainer from '../../components/WorkContentContainer'
import swimlane1 from '../../../public/work/swimlane.png'
import swimlane2 from '../../../public/work/swimlane_black-and-white.png'
import swimlane3 from '../../../public/work/swimlane_cut.png'
import swimlane4 from '../../../public/work/swimlane_final_page.png'

const Swimlane = () => {
  return (<>
    <WorkContentContainer>
      <h1 className='text-9xl font-bold'>SWIMLANE</h1>
      <br />
      <br />
      <h1 className='text-xl font-bold '>
        SRF Play Swimlane gestaltung durch Bildbearbeitung auf Photoshop.
      </h1>
      <br />
      <h1 >
        Play SRF bietet zahlreiche Serien an, wobei unsere Eigenproduktionen oft mit einer Swimlane auf der Website ausgestattet sind. Für die neue Serie SRF Kehrseite, die ehemalige Sportlerinnen und Sportler in ihrem heutigen Alltag zeigt, wurde ein solches Bildkonzept entwickelt. Ich stellte die aktuellen Bilder und Sportmomente der Personen frei und machte sie schwarz-weiß, sodass die Photoshop-Dateien klare Ebenen hatten, um den Hintergrund leicht zu entfernen oder das Bild schwarz-weiß zu machen.
      </h1>
      <br />
      <br />
      <p>Vorgehensweise</p>
      <WorkImage title='BILD DER LANGLÄUFERIN HÄCKI' description='Zu Beginn hatte ich das Originalbild eines Sportmoments der Langläuferin Häcki. Für diese Swimlane war es wichtig von den vorkommenden Sportlern jeweils ein Bild eines Sportmoments sowie ein Bild ihres heutigen Ichs gegenüberzustellen; wie das ganze aussieht, kann man unter der finalen Version sich ansehen.'
        img={swimlane1}
      />
      <WorkImage
        img={swimlane2}
        title='SCHWARZ WEISS BILD DER LANGLÄUFERIN HÄCKI'
        description='Das Bildkonzept von Kehrseite waren Schwarzweisse Bilder, mittles Collage. So habe ich mittels Gradient Map dem Bild ein kräftiges schwarzweiss verliehen.'
      />
      <WorkImage
        img={swimlane3}
        title=''
        description=''
      />
    </WorkContentContainer>
  </>)
}

export default Swimlane
