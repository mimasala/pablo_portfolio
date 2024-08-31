import WorkImage from '../../components/WorkImage';
import WorkContentContainer from '../../components/WorkContentContainer';
import swimlane1 from '../../../public/work/swimlane.avif';
import swimlane2 from '../../../public/work/swimlane_black-and-white.avif';
import swimlane3 from '../../../public/work/swimlane_cut.avif';
import swimlane4 from '../../../public/work/swimlane_final_page.avif';

const Swimlane = () => {
  return (
    <WorkContentContainer>
      <h1 className="text-9xl font-bold">SWIMLANE</h1>
      <br />
      <h1 className="text-xl font-bold">
        SRF Play Swimlane gestaltung durch Bildbearbeitung auf Photoshop.
      </h1>
      <br />
      <p>
        Play SRF bietet zahlreiche Serien an, wobei unsere Eigenproduktionen oft
        mit einer Swimlane auf der Website ausgestattet sind. Für die neue Serie
        SRF Kehrseite, die ehemalige Sportlerinnen und Sportler in ihrem
        heutigen Alltag zeigt, wurde ein solches Bildkonzept entwickelt. Ich
        stellte die aktuellen Bilder und Sportmomente der Personen frei und
        machte sie schwarz-weiß, sodass die Photoshop-Dateien klare Ebenen
        hatten, um den Hintergrund leicht zu entfernen oder das Bild
        schwarz-weiß zu machen.
      </p>
      <br />
      <br />
      <p>Vorgehensweise</p>
      <WorkImage
        title="BILD DER LANGLÄUFERIN HÄCKI"
        description="Zu Beginn hatte ich das Originalbild eines Sportmoments der Langläuferin Häcki. Für diese Swimlane war es wichtig, von den vorkommenden Sportlern jeweils ein Bild eines Sportmoments sowie ein Bild ihres heutigen Ichs gegenüberzustellen; wie das ganze aussieht, kann man unter der finalen Version sich ansehen."
        image={swimlane1}
      />
      <WorkImage
        image={swimlane2}
        title="SCHWARZ WEISS BILD DER LANGLÄUFERIN HÄCKI"
        description="Das Bildkonzept von Kehrseite waren Schwarzweisse Bilder, mittels Collage. So habe ich mittels Gradient Map dem Bild ein kräftiges schwarzweiss verliehen."
      />
      <WorkImage
        image={swimlane3}
        title="SCHWARZ WEISS BILD AUSGESCHNITTEN DER LANGLÄUFERIN"
        description="Das Bildkonzept basiert auf einer Collage für jedes Thumbnail; um diese Collage mit den Sportlern zu gestalten, musste also jedes Bild nochmals ausgeschnitten und auf Photoshop-Ebenen angelegt werden, die korrekte Beschriftung haben, sodass die Bilder schnell exportiert werden können. Das Ausschneiden ging am besten mit Onionskinning"
        darken
      />
      <br />
      <br />
      <p>Finale Version</p>
      <img src={swimlane4} alt="Swimlane Final Page" />
      <br />
      <h1 className="text-9xl font-bold">PRO / CONTRA</h1>
      <br />
      <div className="flex space-x-16">
        <div className="w-2/5">
          <h1 className="text-xl">Das lief besonders gut.</h1>
          <p>
            Dadurch, dass ich durch zufälliges Stolpern auf ein YouTube-Video das
            korrekte Anwenden von Gradient Maps herausfand, weiss ich nun, wie
            man ein Bild saftig Schwarz&Weiss machen kann.
          </p>
        </div>
        <div className="w-2/5">
          <h1 className="text-xl">Hier habe ich noch Potenzial</h1>
          <p>
            Zuerst versuchte ich die Bilder mittels KI freizustellen, jedoch sah
            man schnell, dass die Details ausgelassen werden und man dann per
            Brushtool nochmals darüber muss, was alles mühsam machte. Darum habe
            ich mir Tutorials angeschaut und kam auf dieses Onionskinning, bei
            dem man manuell aber sauber das Bild freistellt.
          </p>
        </div>
      </div>
    </WorkContentContainer>
  );
};

export default Swimlane;
