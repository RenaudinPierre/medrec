import dragula from 'dragula';

function InitDragula() {
  const card_drugs_sources = document.querySelectorAll('.card-source-invisible');
  const number_sources = card_drugs_sources.length ;
  const max_card_source = card_drugs_sources[0].querySelectorAll('.card-invisible').length;
  console.log("je suis dans InitDragula");
  console.log(`${number_sources}`);

  createSelectors(number_sources, max_card_source);

  function createSelectors(number_sources, max_card_source) {
    const options =  {
      isContainer: function (el) {
        return false; // only elements in drake.containers will be taken into account
      },
      moves: function (el, source, handle, sibling) {
        return true; // elements are always draggable by default
      },
      accepts: function (el, target, source, sibling) {
        return true; // elements can be dropped in any of the `containers` by default
      },
      invalid: function (el, handle) {
        return false; // don't prevent any drags from initiating by default
      },
      direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
      copy: false,                       // elements are moved by default, not copied
      copySortSource: false,             // elements in copy-source containers can be reordered
      revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
      removeOnSpill: false,              // spilling will `.remove` the element, if this is true
      mirrorContainer: document.body,    // set the element that gets mirror elements appended
      ignoreInputTextSelection: true     // allows users to select input text, see details below
    };
    let card_number = 0;
    for (card_number = 1; card_number < max_card_source + 1; card_number++) {
      let drug_cards = [];
      let source_number = 0;
      for ( source_number = 1; source_number < number_sources + 1; source_number++) {
        drug_cards.push(document.getElementById(`source_${source_number}_card_${card_number}`));
      }
    dragula(drug_cards).on('drag', function (el) {
      el.className = el.className.replace('ex-moved', '');
    }).on('drop', function (el) {
      el.className += ' ex-moved';
    }).on('over', function (el, container) {
      container.className += ' ex-over';
    }).on('out', function (el, container) {
      container.className = container.className.replace('ex-over', '');
    });


    console.log(drug_cards);
    }
  };
}



export default InitDragula;
