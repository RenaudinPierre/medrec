function InitMedicament(callback) {
  document.querySelectorAll('.btn-add-medicament').forEach(btnClick);
  callback();
}

const AddMedicaments = (event) => {
  event.preventDefault();
  let card_drugs_sources = document.querySelectorAll('.card-source-invisible');
  const number_sources = card_drugs_sources.length;
  const max_card_in_source = card_drugs_sources[0].querySelectorAll('.card-invisible').length;
  let my_btn_id = event.currentTarget.id.slice(-1);
  let pas =0;
  // console.log("dragula forever");
  // console.log(`${btn.id.slice(-1)}`);
  for (pas = 1; pas < number_sources + 1 ; pas++) {
    let element = "";
    if (pas ==  my_btn_id ) {
      element = `<div class="card-invisible" id="source_${pas}_card_${max_card_in_source + 1}"><div class="card-medicament">Medicament</div></div>`;
    } else {
      element = `<div class="card-invisible" id="source_${pas}_card_${max_card_in_source + 1}"></div>`;
    }
    console.log(`${element}`);
    card_drugs_sources[pas - 1].insertAdjacentHTML("beforeend", element);
  }
  //en fonction de l'id de l'element bouton
  // btn_source_1
  // console.log(`${btn.id.slice(-1)}`);
};

const btnClick = (btn) => {
  btn.addEventListener("click", AddMedicaments);
};

export default InitMedicament;

  // const btn_medicament = document.querySelector('.btn-add-medicament');

  //   btn_medicament.addEventListener('click', function(f) {
  //     f.preventDefault();
  //     let card_drugs_sources = document.querySelectorAll('.card-source-invisible');
  //     const number_sources = card_drugs_sources.length;
  //     // console.log(`${number_sources}`);
  //     const max_card_in_source = card_drugs_sources[0].querySelectorAll('.card-invisible').length;
  //     let pas =0;
  //     for (pas = 0; pas < number_sources ; pas++) {
  //       // let element = `<div class="card-invisible" id="source_${pas + 1}_card_${max_card_in_source + 1}"></div>`;
  //       // if pas =  button sur lequel j'ai appyae
  //       let element = `<div class="card-invisible" id="source_${pas + 1}_card_${max_card_in_source + 1}"><div class="card-medicament">Je suis un médicament</div></div>`;
  //       console.log('bonjour');
  //       card_drugs_sources[pas].insertAdjacentHTML("beforeend", element);
  //     }

  //     console.log(callback);

  //     callback();
  //   });
