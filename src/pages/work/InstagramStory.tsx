import WorkContentContainer from '../../components/WorkContentContainer'
import insta1 from '../../../public/work/insta-1.avif'
import insta2 from '../../../public/work/insta-2.avif'
import insta3 from '../../../public/work/insta-3.avif'
import insta4 from '../../../public/work/insta-4.avif'
import insta5 from '../../../public/work/insta-5.avif'
import WorkImage from '../../components/WorkImage'
import ProContra from '../../components/ProContra'
import ThreeColumnText from '../../components/ThreeColumnText'

const InstagramStory = () => {
  return (<>
    <WorkContentContainer>
      <h1 className='text-3xl lg:text-9xl font-bold'>INSTAGRAM STORY</h1>
      <br />
      <br />
      <h1 className='text-xl font-bold '>Guidelines und Vorlagen zur Gestaltung von Instagram Stories für den SRF Dachmarkenkanal</h1>
      <br />
      <h1 >
        Der SRF Dachmarke Instagram-Kanal srfschweizerradioundfernsehen hat sehr viel verschiedene Styles, wenn es zu den Insta-Storys kommt. Damit auch dieser Instagram-Kanal auf Frontify den Guides folgen kann, war es meine Aufgabe diese Guideline zu designen. Für diese Aufgabe konnte ich mehrere Routen ausarbeiten, wie das Design aussehen sollte, die jeweiligen Routen sollten jeweils auf Photoshop gemacht werden sowie auf Instagram selbst, sodass man die direkte Anwendung als Beispiel hat.
      </h1>
      <br />
      <br />
      <p>Vorgehensweise</p>
      <WorkImage title='Recherchieren' description='Als Erstes habe ich mir Instagram-Story-Beispiele angeschaut und deren Unterschiede. Auf den ersten Blick ist mir aufgefallen, dass das Design meist pro Story unterschiedlich ist und auch fern ab vom SRF-Design ist. Somit habe ich mich durch die Guidelines und Designs von anderen SRF Instagram Accounts gestöbert, um daraus selbst das Design für diesen Account zu erstellen.'
        image={insta1}
      />
      <WorkImage
        title='Grafik als Hintergrund'
        description='Die Aufgabe war es, einmal die Guidelines zu erstellen, mit einem Bild als Hintergrund und das Gleiche mit Grafik als Hintergrund. In diesem Beispiel war es wichtig, dass die SRF-Farben Rot, Weiss und Grau verwendet wurden, um mit diesen Farben drei unterschiedliche Versionen zu kreieren.'
        darken
        image={insta2}
      />
      <WorkImage
        title='Bild als Hintergrund'
        description='Die Aufgabe war es, einmal die Guidelines zu erstellen, mit einem Bild als Hintergrund und das Gleiche mit Grafik als Hintergrund. In diesem Beispiel war es wichtig, wie das Design aussieht, mit einem Bild als Hintergrund. Jedes Bild ist eine andere Version, da ich überall mit unterschiedlichen Typo-Varianten gespielt habe. Folglich habe ich mich mit meiner Praxisbildnerin zusammengesetzt, um uns für eine Route zu entscheiden, welche ich dann ausarbeitete.'
        image={insta3}
      />
      <p>Finale Version</p>
      <div className='p-1.5'>
        <img className='my-4' src={insta4} />
      </div>
      <ThreeColumnText
        one={<>
          Headlines schreiben wir Grossklein, Linksbündig und mir roter Hinterlegung. Der Copytext wird mit dem Schriftschnitt Regular in Dunkelgrau gesetzt. Dazu kommen noch die hervorgehobenen Wörter, welche wir immer Rot machen mit dem Schriftschnitt Heavy.
        </>}
        two={<>
          Headlines schreiben wir Grossklein, Linksbündig und Weiss oder Rot hinterlegt (je nach Hintergrundfarbe). Der Copytext wird mit dem Schriftschnitt Regular gesetzt. Die hervorgehobenen Wörter schreiben wir mit Schriftschnitt Heavy.
        </>}
        three={<>
          Headlines immer Grossklein und Linksbündig mit roter oder weisser Hinterlegung (je nach Hintergrundfarbe). Headlines lagern über die Farbfläche bis zur zweiten Zeile in der Mitte. Copytext Grossklein Regular, hervorgehobenes wird mit Schriftschnitt Heavy geschrieben. Split der Hintergrundfläche möglichst immer im unteren 1/3 oder 1/2.
        </>}
      ></ThreeColumnText>
      <br />
      <br />
      <img src={insta5} />
      <br />
      <ProContra
        pro={<>Ich hatte schnell verschiedene Ideen wie das Design aussehen sollte und konnte so auch effizient verschiedene unterschiedliche Routen ausarbeiten. Da ich mich mit Photoshop schon etwas besser auskenne, war für das Programm kein Hindernis, sondern die Arbeit in Photoshop lief sehr gut.</>}
        contra={<>Da ich noch nie so wirklich Instagram-Storys so vertieft gemacht habe, fand ich nicht auf Anhieb heraus, wie ich beispielsweise die Spezifische rote Farbe von SRF auf Instagram bringe, da es auf Insta nur eine gewisse Farbpalette hat. Ebenfalls Potenzial hat bei mir die Pixel bzw. Abstände waren manchmal unterschiedlich obwohl es das gleiche Design war einfach in einer anderen Farbe.</>}
      ></ProContra>
    </WorkContentContainer>
  </>)
}

export default InstagramStory
