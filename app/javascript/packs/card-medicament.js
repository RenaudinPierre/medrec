import InitDragula from "./card-dragula";

function InitMedicament() {
  document.querySelectorAll('.btn-add-medicament').forEach(btnClick);
}

const AddMedicaments = (event) => {
  event.preventDefault();
  let card_drugs_sources = document.querySelectorAll('.card-source-invisible');
  const number_sources = card_drugs_sources.length;
  const max_card_in_source = card_drugs_sources[0].querySelectorAll('.card-invisible').length;
  let my_btn_id = event.currentTarget.id.slice(-1);
  let pas =0;
  for (pas = 1; pas < number_sources + 1 ; pas++) {
    let element = "";
    if (pas ==  my_btn_id ) {
      element = `<div class="card-invisible" id="source_${pas}_card_${max_card_in_source + 1}"><div class="card-medicament" style="background-color: blue;">Medicament</div></div>`;
    } else {
      element = `<div class="card-invisible" id="source_${pas}_card_${max_card_in_source + 1}"></div>`;
    }
    console.log(`${element}`);
    card_drugs_sources[pas - 1].insertAdjacentHTML("beforeend", element);
  }
  InitDragula();
};

const btnClick = (btn) => {
  btn.addEventListener("click", AddMedicaments);
};

export default InitMedicament;
