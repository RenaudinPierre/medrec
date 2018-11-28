function InitSource(callback) {
  const btn_source = document.querySelector('.btn-add-source');

  if (btn_source) {
    btn_source.addEventListener('click', function(e) {
      e.preventDefault();

      let card_sources = document.querySelectorAll('.card-source');
      const number = card_sources.length;
      const max_card_in_source = card_sources[0].querySelectorAll('.card-medicament').length;
      console.log(`${max_card_in_source}`);
      const element_source = `<div class="card-source"><div class="card-source-invisible"></div><a class="btn-add-medicament" href="">+</a></div>`; //${number + 1}</div>`;
      card_sources[card_sources.length-1].insertAdjacentHTML("afterend", element_source);
      card_sources = document.querySelectorAll('.card-source');
      const last_card = card_sources[card_sources.length-1]
      last_card.setAttribute("id", `source_${number + 1}`);
      let pas =0;
      for (pas = 0; pas < max_card_in_source ; pas++) {
        let element = `<div class="card-medicament" id="source_${number + 1}_card_${pas + 1}">${pas + 1}</div>`;
        last_card.querySelector('.card-source-invisible').insertAdjacentHTML("beforeend", element);
      }
      console.log("je suis ici");
      console.log(callback);

      callback();
    });
  }

}



export default InitSource;

