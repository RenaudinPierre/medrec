import InitDragula from "./card-dragula";

function InitSource(callbackMed) {
  const btn_source = document.querySelector('.btn-add-source');

  if (btn_source) {
    btn_source.addEventListener('click', function(e) {
      e.preventDefault();
      var sourceName = prompt("Nom de la source?");
      if (sourceName != null) {
        AddSource(sourceName);
        callbackMed();
        }
    });
  }

}

function AddSource(sourceName) {
  let card_sources = document.querySelectorAll('.card-source');
  const number = card_sources.length;
  const max_card_in_source = card_sources[0].querySelectorAll('.card-invisible').length;
  console.log(`${max_card_in_source}`);
  const element_source = `<div class="card-source"><p>${sourceName}</p><div class="card-source-invisible"></div><a class="btn-add-medicament" id="btn_source_${number + 1}" href="">+</a></div>`; //${number + 1}</div>`;
  card_sources[card_sources.length-1].insertAdjacentHTML("afterend", element_source);
  card_sources = document.querySelectorAll('.card-source');
  const last_card = card_sources[card_sources.length-1]
  last_card.setAttribute("id", `source_${number + 1}`);
  let pas =0;
  for (pas = 0; pas < max_card_in_source ; pas++) {
    let element = `<div class="card-invisible" id="source_${number + 1}_card_${pas + 1}"></div>`;
    last_card.querySelector('.card-source-invisible').insertAdjacentHTML("beforeend", element);
  }
    InitDragula();

    // POST /boards/2/sources => body: { source: { name: 'fdsjklfdsjl' }
    // const board_id = document.querySelector('.board-container').dataset.id;
    // fetch(`/boards/${board_id}/sources`, {
    //    method: "POST",
    //    headers: {
    //      "Content-Type": "application/json"
    //    },
    //    body: JSON.stringify({ source: { name: `${sourceName}`, final_source: false, type: 'SourceDrug' }})
    //  })
    //    .then((data) => {
    //      console.log(data); // Look at local_names.default
    //    });
}


export default InitSource;

