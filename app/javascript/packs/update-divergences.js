import ejs from 'ejs';
import 'select2';

function InitDivergences() {
   if (document.querySelector('.card-final') != null) {
    document.querySelector('.btn-check-divergence').addEventListener("click", CheckDrugs);
   }
}

function isUniq(a) {
  // console.log(a);
  if (a.length < 2 || a[0].length < 2) {
    return false;
  } else {
    const height = a[0].length;
    for(var h = 0; h < height; h++) {
      for(var i = 1; i < a.length; i++) {
        if(a[0][h] != a[i][h]) {
          // console.log(i);
            return false;
        }
      }
    }
    return true;
  }
}


const CheckDrugs = (event) => {
  event.preventDefault();
  const card_final = document.querySelectorAll('.board-container-final .card-invisible');
  // destroy former result
  card_final.forEach((a_final_card, i) => {
    a_final_card.innerHTML = "";
  });
  const card_divergences = document.querySelectorAll('.board-container-divergence .card-source-divergence .card-invisible-divergence');
  if (card_divergences != null){
    card_divergences.forEach((div_card, i) => {
      if (div_card.querySelector('.no-divergence') != null) {
        div_card.classList.remove('no-divergence');
      }
    });
  }
  const card_sources = document.querySelectorAll('.board-container .card-source');
    // console.log(card_divergences);
  // const number = card_sources.length;
  const max_card_in_source = card_final.length;
  let pas_vertical = 0;
  for (pas_vertical = 0; pas_vertical < max_card_in_source; pas_vertical++) {
    // Selecting elements
    let drugs = [];
    // let invisibleCards = card_sources.querySelectorAll('.card-invisible');
    let invisibleCards = document.querySelectorAll(`div[id$='_card_${pas_vertical + 1}']`);
    // console.log(invisibleCards);
    invisibleCards.forEach((invisibleCard, i) => {
      console.log("bonjur");
      if ((document.querySelector('.sortie') != null && i!= 1) || (document.querySelector('.sortie') === null)) {
        let medicamentCard = invisibleCard.querySelector('.card-medicament');
        // console.log(i);
        if (medicamentCard && i!= invisibleCards.length - 1) {
          let drugMorning = medicamentCard.querySelector('#drug_morning').value;
          let drugLunch = medicamentCard.querySelector('#drug_lunch').value;
          let drugEvening = medicamentCard.querySelector('#drug_evening').value;
          let drugNight = medicamentCard.querySelector('#drug_night').value;
          let drugName = null;
          if (medicamentCard.querySelector('.select2-selection__rendered').getAttribute('title') != null) {
            drugName = medicamentCard.querySelector('.select2-selection__rendered').getAttribute('title');
          } else {
            drugName = "";
          }
          // console.log([drugName, drugMorning, drugLunch, drugEvening, drugNight]);
          drugs.push([drugName, drugMorning, drugLunch, drugEvening, drugNight]);
        }
      }
    });
    console.log(drugs)
    // console.log(drugs.length)
    let text_in_div_card = "";
    if (isUniq(drugs)) {
      text_in_div_card = `<p>Pas de divergence</p>`;
      if (document.querySelector('.historique') === null) {
        card_divergences[pas_vertical].classList.add('no-divergence');
      }
      else {
        document.querySelector('.historique').classList.add('no-divergence');
      }
      const template = require('./../templates/new_card_with_contempt.ejs');
      let element = template({
        drugName: drugs[0][0],
        drugMorning: drugs[0][1],
        drugLunch: drugs[0][2],
        drugEvening: drugs[0][3],
        drugNight: drugs[0][4]
      });
      card_final[pas_vertical].insertAdjacentHTML("beforeend", element);
      $('.api-card-drugs').select2({
        ajax: {
          url: '/drugs/search',
          dataType: 'json'
        }
      });
      card_final[pas_vertical].classList.add('card');
      card_final.forEach((card) => {
        card.classList.add('card');
      });
    } else {
      // card_divergences[pas_vertical].classList.add('divergence');
      if (document.querySelector('.historique') === null) {
        const template = require('./../templates/new_divergence.ejs');
        text_in_div_card = template();
      }
    }
    if (document.querySelector('.historique') === null) {
      card_divergences[pas_vertical].innerHTML = text_in_div_card;
    }
  }
}


export default InitDivergences;
