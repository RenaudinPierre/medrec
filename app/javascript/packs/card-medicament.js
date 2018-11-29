function InitMedicament(callback) {
  const btn_medicament = document.querySelector('.btn-add-medicament');

  if (btn_medicament) {
    btn_medicament.addEventListener('click', function(f) {
      f.preventDefault();
      let card_drugs_sources = document.querySelectorAll('.card-source-invisible');
      const number_sources = card_drugs_sources.length;
      // console.log(`${number_sources}`);
      const max_card_in_source = card_drugs_sources[0].querySelectorAll('.card-invisible').length;
      let pas =0;
      for (pas = 0; pas < number_sources ; pas++) {
        let element = `<div class="card-invisible" id="source_${pas + 1}_card_${max_card_in_source + 1}"></div>`;
        console.log('bonjour');
        card_drugs_sources[pas].insertAdjacentHTML("beforeend", element);
      }

      console.log(callback);

      callback();
    });
  }
}



export default InitMedicament;
