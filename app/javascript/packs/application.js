import "bootstrap";
import initNavbar from "../components/navbar";
import InitSource from  "./card-source";
import InitMedicament from  "./card-medicament"
import InitDragula from "./card-dragula";

initNavbar();
InitSource(InitDragula);
InitMedicament(InitDragula);

import "./card-dragula.js";
