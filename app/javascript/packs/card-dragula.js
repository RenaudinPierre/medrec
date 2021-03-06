import dragula from 'dragula';
import "dragula/dist/dragula.css";
import 'select2';

var drake = null;

function InitDragula() {
  const card_drugs_sources = document.querySelectorAll('.card-source-invisible');
  const number_sources = card_drugs_sources.length ;
  // console.log(card_drugs_sources)
  if (card_drugs_sources.length !== 0) {
   const max_card_source = card_drugs_sources[0].querySelectorAll('.card-invisible').length;
   createSelectors(number_sources, max_card_source);
  }
  // console.log(card_drugs_sources);
  // console.log("je suis dans InitDragula");
  // console.log(max_card_source);
  // console.log(number_sources);



  function createSelectors(number_sources, max_card_source) {
    if (drake !== null) {
      drake.destroy();
    }
    let card_number = 0;
    drake = dragula( {
      accepts: function (el, target, source, sibling) {
        if (sibling !== null){
          // console.log("entre dans if");
          return false;
        } else {
          return true;
        }
      },
      copy: true,
      revertOnSpill: true
    }).on('drag', function (el) {
      el.className = el.className.replace('ex-moved', '');
    }).on('drop', function (el) {
      el.className += ' ex-moved';
      $('.api-card-drugs').select2({
        ajax: {
          url: '/drugs/search',
          dataType: 'json'
        }
      });
    }).on('cloned', function (clone, original, type) {
      clone.querySelector('.select2').remove();
      clone.querySelector('.api-card-drugs').classList.remove('select2-hidden-accessible');
      clone.querySelector('.api-card-drugs').removeAttribute('data-select2-id');
    }).on('over', function (el, container) {
      container.className += ' ex-over';
    }).on('out', function (el, container) {
      container.className = container.className.replace('ex-over', '');
    });
    for (card_number = 1; card_number < max_card_source + 1; card_number++) {
      let drug_cards = [];
      let source_number = 0;
      for ( source_number = 1; source_number < number_sources + 1; source_number++) {
        // drug_cards.push(document.getElementById(`source_${source_number}_card_${card_number}`));
        drake.containers.push(document.getElementById(`source_${source_number}_card_${card_number}`));
      }
      // console.log(drug_cards);
    }
  };
}


export default InitDragula;
