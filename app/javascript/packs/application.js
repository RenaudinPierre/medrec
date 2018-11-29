import "bootstrap";
import initNavbar from "../components/navbar";
import "dragula/dist/dragula.css";
import "./card-dragula.js";
import InitSource from  "./card-source";
import InitMedicament from  "./card-medicament"
import InitDragula from "./card-dragula";
import '../components/select2';

initNavbar();
InitMedicament(InitDragula);
InitSource(InitMedicament,InitDragula);

