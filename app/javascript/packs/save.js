
// const boardId = () => {
//   document.querySelector('.board-container').dataset.id;
// };

const saveSource = (allSources) => {

  let data = { sources: []};
  let allDrugs = document.querySelectorAll(".card-medicament");
  allSources.forEach((sourceElem) => {
    console.log(allSources)
    let sourceName = sourceElem.querySelector('p').innerText;
    let sourceFinal = null;
    let drugs = [];
    console.log(sourceElem)
    if (sourceElem.querySelector(".card-final") === null ) {
      sourceFinal = false;
    } else {
      sourceFinal = true;
    }

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
    data.sources.push({ name: sourceName, final_source: sourceFinal, type: 'SourceDrug', drugs: drugs });
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
    const allSources = document.querySelectorAll(".card-source");
      e.preventDefault();
      saveSource(allSources);
    });
  }
}



export default saveAll;
