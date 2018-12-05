
// const boardId = () => {
//   document.querySelector('.board-container').dataset.id;
// };

const saveSource = (allSources) => {

  let data = { sources: []};
  let allDrugs = document.querySelectorAll(".card-medicament");
  allSources.forEach((sourceElem) => {
    let sourceType = sourceElem.querySelector('p').innerText;
    if (sourceType === "Divergences") {
      sourceType = "SourceDivergence"
    } else {
      sourceType = "SourceDrug"
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

    if (sourceType === "SourceDrug") {
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
          let drugComment = medicamentCard.querySelector('#drug_comment').value;
          if (medicamentCard.querySelector('.select2-selection__rendered').getAttribute('title') != null) {
            drugName = medicamentCard.querySelector('.select2-selection__rendered').getAttribute('title');
          } else {
            drugName = "";
          }
          drugs.push({ name: drugName, morning: drugMorning, lunch: drugLunch, evening: drugEvening, night: drugNight, comment: drugComment, position: position });

        }
      });
    } else {
      let invisibleCards = sourceElem.querySelectorAll(".card-invisible");
      invisibleCards.forEach((invisibleCard, i) => {
        let medicamentCard = invisibleCard.querySelector('.card-medicament');
        if (medicamentCard) {
          let position = (i + 1);
          let divErrorType = medicamentCard.querySelector('#divergence_error_type').innerText;
          let divCorrection = medicamentCard.querySelector('#divergence_correction').innerText;
          let divCharacter = medicamentCard.querySelector('#divergence_character').innerText;
          divergences.push({ error_type: divErrorType, correction: divCorrection, character: divCharacter, position: position })
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
