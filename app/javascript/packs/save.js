const boardId = () => {
  document.querySelector('.board-container').dataset.id;
};

const saveSource = (allSources) => {

  let data = { sources: []};
  let allDrugs = document.querySelectorAll(".card-medicament");

  allSources.forEach((sourceElem) => {
    let sourceId = sourceElem.dataset.id;
    let sourceName = sourceElem.querySelector('p').innerText;
    let sourceFinal = null;
    let drugs = [];
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
        let drugMorning = invisibleCard.querySelector('#drug_morning').value;
        let drugLunch = invisibleCard.querySelector('#drug_lunch').value;
        let drugEvening = invisibleCard.querySelector('#drug_evening').value;
        let drugNight = invisibleCard.querySelector('#drug_night').value;
        let drugId = invisibleCard.dataset.id;
        let drugName = null;
        if (document.querySelector('.select2-selection__rendered').getAttribute('title') != null) {
          drugName = document.querySelector('.select2-selection__rendered').getAttribute('title');
        } else {
          drugName = "";
      }
      drugs.push({ id: drugId, name: drugName, morning: drugMorning, lunch: drugLunch, evening: drugEvening, night: drugNight, position: position, source_id: sourceId });
      }
    });
    data.sources.push({ id: sourceId, name: sourceName, final_source: sourceFinal, type: 'SourceDrug', drugs: drugs });
  })
  console.log(data);

  //   fetch(`/boards/${boardId()}/sync`, {
  //      method: "PUT",
  //      headers: {
  //        "Content-Type": "application/json"
  //      },
  //      body: JSON.stringify({ source: { name: `${sourceName}`, final_source: `${sourceFinal}`, type: 'SourceDrug' }})
  //    })
  //      .then((data) => {
  //        console.log(data);
  //      });
  // }

const saveAll = () => {
  const btnSave = document.querySelector('#save-all');
  const allSources = document.querySelectorAll(".card-source");
  btnSave.addEventListener('click', function(e) {
    e.preventDefault();
    saveSource(allSources);
  });
}

export default saveAll;
