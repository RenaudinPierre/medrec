import "bootstrap";
import initNavbar from "../components/navbar";
import InitSource from  "./card-source";
import InitMedicament from  "./card-medicament"
import InitDragula from "./card-dragula";
import '../components/select2';

initNavbar();
InitSource(InitDragula);
InitMedicament(InitDragula);

import "./card-dragula.js";
