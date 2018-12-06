import swal from 'sweetalert';
// const boardId = () => {
//   document.querySelector('.board-container').dataset.id;
// };

const saveSource = (allSources) => {

  let data = { sources: []};
  let allDrugs = document.querySelectorAll(".card-medicament");
  allSources.forEach((sourceElem) => {
    let sourceType = sourceElem.querySelector('.source-title').innerText;
    if (sourceType === "Divergences") {
      sourceType = "SourceDivergence"
    } else {
      sourceType = "SourceDrug"
    }


    let sourceName = sourceElem.querySelector('.source-title').innerText;
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
      let invisibleCards = sourceElem.querySelectorAll(".card-invisible-divergence");
      invisibleCards.forEach((invisibleCard, i) => {
        let divergenceCard = invisibleCard.querySelector('.form-divergence');
        if (divergenceCard) {
          let position = (i + 1);
          let divErrorType = divergenceCard.querySelector('#divergence_error_type').options[divergenceCard.querySelector('#divergence_error_type').selectedIndex].text;
          let divCorrection = divergenceCard.querySelector('#divergence_correction').options[divergenceCard.querySelector('#divergence_correction').selectedIndex].text;;
          let divCharacter = divergenceCard.querySelector('#divergence_character').options[divergenceCard.querySelector('#divergence_character').selectedIndex].text;;
          divergences.push({ error_type: divErrorType, correction: divCorrection, character: divCharacter, position: position })
          console.log(divergences)
        }
      })
    };
    data.sources.push({ name: sourceName, final_source: sourceFinal, type: sourceType, drugs: drugs, divergences: divergences });
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
      console.log(data)
      swal(` ${document.querySelector('.name-board').innerText} sauvegardé!`);
      // alert(`${document.querySelector('.name-board').innerText} sauvegardé`)
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
