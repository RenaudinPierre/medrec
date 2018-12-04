
// const boardId = () => {
//   document.querySelector('.board-container').dataset.id;
// };

const saveSource = (allSources) => {

  let data = { sources: []};
  let allDrugs = document.querySelectorAll(".card-medicament");
  allSources.forEach((sourceElem) => {
    let sourceType = sourceElem.querySelector('p').innerText;
    if (sourceType === "Divergences") {
      sourceType = "sourceDivergence"
    } else {
      sourceType = "sourceDrug"
    }


    let sourceName = sourceElem.querySelector('p').innerText;
    let sourceFinal = null;
    let drugs = [];
    let divergences = [];
    if (sourceElem.querySelector(".card-final") === null ) {
      sourceFinal = false;
    } else {
      sourceFinal = true;
    }

    if (sourceType === "sourceDrug") {
      let invisibleCards = sourceElem.querySelectorAll(".card-invisible");
      invisibleCards.forEach((invisibleCard, i) => {
        let medicamentCard = invisibleCard.querySelector('.card-medicament');
        if (medicamentCard) {
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
          drugs.push({ name: drugName, morning: drugMorning, lunch: drugLunch, evening: drugEvening, night: drugNight, position: position });

        }
      });
    } else {
      let invisibleCards = sourceElem.querySelectorAll(".card-invisible");
      invisibleCards.forEach((invisibleCard, i) => {
        let medicamentCard = invisibleCard.querySelector('.card-medicament');
        if (medicamentCard) {
          let position = (i + 1);
          let divErrorType = medicamentCard.querySelector('#divergence_error_type').value;
          let divCorrection = medicamentCard.querySelector('#divergence_correction').value;
          let divCharacter = medicamentCard.querySelector('#divergence_character').value;
          divergences.push({ error_type: divErrorType, correction: divCorrection, character: divCharacter })
        }
      })
    };
    data.sources.push({ name: sourceName, final_source: sourceFinal, type: sourceType, drugs: drugs, divergences: divergences });
    console.log(data)
  })
  const boardId = document.querySelector('.board-container').dataset.id;
  fetch(`/boards/${boardId}/syncs`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(data)
     })
     .then((data) => {
     });
}


const saveAll = () => {
  const btnSave = document.querySelector('#save-all');
  if (btnSave) {
    btnSave.addEventListener('click', function(e) {
      const allSources = document.querySelectorAll(".card-source, .card-source-divergence");
      e.preventDefault();
      saveSource(allSources);
    });
  }
}



export default saveAll;
