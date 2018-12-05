function InitDivergences() {
  if (document.querySelector('.board-container-divergence')) {
    document.querySelector('.btn-check-divergence').addEventListener("click", CheckDrugs);
  }
}

function isUniq(a) {
  { return true } if (a.first.length == 1);
  const height = a.first.length;
  for(var i = 0; i <= a.length; i++) {
      for(var j = i; j <= a.length; j++) {
          for(var h = 0; h <= height; h++) {
            if(i != j && a[i][h] != a[j][h]) {
                return false;
            }
          }
      }
  }
  return true;
}


const CheckDrugs = (event) => {
  event.preventDefault();
  const card_sources = document.querySelectorAll('.board-container .card-source');
  const card_divergences = document.querySelectorAll('.board-container-divergence .card-source-divergence .card-invisible-divergence');
  // console.log(card_divergences);
  // const number = card_sources.length;
  const max_card_in_source = card_sources[0].querySelectorAll('.card-invisible').length;
  let pas_vertical = 0;
  for (pas_vertical = 0; pas_vertical < max_card_in_source; pas_vertical++) {
    // Selecting elements
    let drugs = [];
    // let invisibleCards = card_sources.querySelectorAll('.card-invisible');
    let invisibleCards = document.querySelectorAll(`div[id$='_card_${pas_vertical}']`);
    invisibleCards.forEach((invisibleCard, i) => {
      let medicamentCard = invisibleCard.querySelector('.card-medicament');
      // console.log(i);
      if (medicamentCard && i!= invisibleCards.length - 1) {
        let position = (i + 1);
        let drugMorning = medicamentCard.querySelector('#drug_morning').value;
        let drugLunch = medicamentCard.querySelector('#drug_lunch').value;
        let drugEvening = medicamentCard.querySelector('#drug_evening').value;
        let drugNight = medicamentCard.querySelector('#drug_night').value;
        let drugName = null;
        if (document.querySelector('.select2-selection__rendered').getAttribute('title') != null) {
          drugName = document.querySelector('.select2-selection__rendered').getAttribute('title');
        } else {
          drugName = "";
        }
        // console.log([drugName, drugMorning, drugLunch, drugEvening, drugNight, position]);
        drugs.push([drugName, drugMorning, drugLunch, drugEvening, drugNight, position]);
      }
    });
    console.log(drugs)
    console.log(drugs.length)
    let element = "";
    if (drugs.length === 0 || isUniq(drugs)) {
      card_divergences[pas_vertical].classList.add('no-divergence');
      element = `<p>Pas de divergence</p>`;
    } else {
      card_divergences[pas_vertical].classList.add('divergence');
      const template = require('./../templates/new_divergence.ejs');
      element = template();
    }
    card_divergences[pas_vertical].innerHTML = element;
  }
}


export default InitDivergences;
