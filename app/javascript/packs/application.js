import "bootstrap";
import initNavbar from "../components/navbar";
import "./card-dragula.js";
import InitSource from  "./card-source";
import InitMedicament from  "./card-medicament"
import '../components/select2';

initNavbar();
InitMedicament();
InitSource(InitMedicament);


