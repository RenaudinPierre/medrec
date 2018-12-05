import "bootstrap";
import initNavbar from "../components/navbar";
import "./card-dragula.js";
import InitSource from  "./card-source";
import InitMedicament from  "./card-medicament";
import InitDivergences from  "./update-divergences";
import '../components/select2';
import InitDragula from  "./card-dragula";
import saveAll from "./save";
import calendarPickr from "../components/calendar"

initNavbar();
InitMedicament();
InitSource(InitMedicament);
InitDivergences();
InitDragula();
saveAll();
calendarPickr();
