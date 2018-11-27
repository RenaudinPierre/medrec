function AddSource() {
  const btn_source = document.querySelector('.btn-add-source');
  const card_source = document.querySelector('.card-source');

  if (btn_source) {
    btn_source.addEventListener('click', function(e) {
      e.preventDefault();
      console.log("je suis ici");

      const element = `<div class="card-source">Hello</div>`;
      card_source.insertAdjacentHTML("afterend", element);
    });
  }
}



export default AddSource;
