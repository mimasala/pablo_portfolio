import WorkContentContainer from "../../components/WorkContentContainer";
import one from "../../../public/work/html_css-1.png";
import two from "../../../public/work/html_css-2.png";
import three from "../../../public/work/html_css-3.png";
import four from "../../../public/work/html_css-finale-version.png";
import WorkImage from "../../components/WorkImage";

const Befragungstool = () => {
  return (
    <>
      <WorkContentContainer>
        <h1 className="text-9xl font-bold">BEFRAGUNGS TOOL</h1>
        <br />
        <br />
        <h1 className="text-xl font-bold">
          UX-Anpassungen des Befragungstools Alchemer, sowie Anpassung ans SRF Design
        </h1>
        <br />
        <h1>
          Alchemer ist ein Programm, das von SRF verwendet wird, um Umfragen zu erstellen, die dann per E-Mail verschickt werden. Seit 2017 wurde das Design von Seiten SRF nicht mehr angepasst, jedoch gab es in der Zwischenzeit Möglichkeiten, das Design zu verbessern. Meine Aufgabe war es, das Design zu "updaten", also die UX dem aktuellen Stand von SRF anzunähern. Durch verschiedene Möglichkeiten wie CSS oder HTML konnte dies erreicht werden. Indem ich zuerst die Prototypen auf Figma erstellte, konnte ich mir einen Überblick über alle relevanten Punkte verschaffen. Mit diesem Grundgerüst sollte ich das Design erneuern.
        </h1>
        <br />
        <br />
        <WorkImage
          title="Dokumentation Alchemer"
          darken
          description="Für den Alchemer Auftrag habe ich zu Beginn eine PowerPoint aufgesetzt, welche mir als Dokumentation dient, sowie Nachschlageheft. In der Präsentation wurde viel Information notiert, wie zum Beispiel: Wo kann ich in Alchemer CSS Anpassungen tätigen? Welche Designs sind „veraltet“? Welche Befragungsitems sind die meistgebrauchten?"
          image={one}
        />
        <WorkImage
          title="Varianten Design"
          darken
          description={
            <>
              Während diesem Schritt habe ich auf Figma, dem Webseiten-Prototyping-Tool, die verschiedenen Designs für den neuen Look auf Alchemer ausgearbeitet. Wichtig hierbei war es, unterschiedliche Varianten zu erstellen, sodass man sich für eine Route entscheiden kann, zum Beispiel Route 3, aber auch noch Einfluss von Route 3 hat.
              <br />
              <br />
              Damit man so nah an eine richtige Webseite kommt, musste ich darauf achten, das Design responsive zu gestalten und für die Textabschnitte die richtigen Namen zu wählen.
            </>
          }
          image={two}
        />
        <WorkImage
          title="CSS Aktualisieren"
          darken
          description={
            <>
              Ist die Finale Route auf Figma ausgearbeitet, wie Font Styles und Text Abstände etc. ging es an die Umsetzung auf Alchemer. Grundlegende Änderungen habe ich schon im CSS vorgenommen, sodass ich weiss, wie das Tool Alchemer funktioniert. Dadurch, dass ich in Figma die Titel, Lead, Fliesstext usw. korrekt beschrieben habe, hatte ich einen Vorteil, alles richtig ins Alchemer CSS zu übertragen. Durch mehrere Feedbackrunden konnte ich gute Kritik von Alchemer Nutzern von SRF einholen, mit dem ich dann weiter das Design vollenden konnte.
            </>
          }
          image={three}
        />
        <br />
        <br />
        <p>Finale Version</p>
        <img src={four} alt="final version" />
        <br />
        <h1 className="text-9xl font-bold">PRO / CONTRA</h1>
        <br />
        <div className="flex space-x-16">
          <div className="w-2/5">
            <h1 className="text-xl">Das lief besonders gut.</h1>
            <p>
              Nicht aufgeben.
            </p>
          </div>
          <div className="w-2/5">
            <h1 className="text-xl">Hier habe ich noch Potenzial</h1>
            <p>
              Der Auftrag war mir schon früh nicht sympathisch, aber weil ich ohne Begeisterung hereinging, was mich so die ganze Arbeitsdauer verfolgte, dass ich weniger Spass daran hatte als an anderen Aufträgen. Ich war oft der Meinung, ich kam nicht wirklich voran, weil ich mir keine Mühe in diesem Auftrag gab. Irgendwann habe ich realisiert, dass man nicht immer einen Auftrag, bei dem man Spass hat, macht, sondern es auch einfach Aufträge gibt, die man Halt machen und dort durch muss. Ebenfalls war ich manchmal kurz vor der Verzweiflung, da Alchemer meiner Meinung nach kein gutes Programm ist.
            </p>
          </div>
        </div>
      </WorkContentContainer>
    </>
  );
};

export default Befragungstool;
