function AddMedicament() {
  const btn_medicament = document.querySelector('.btn-add-medicament');
  const card_source = document.querySelector('.card-source-invisible');

  if (btn_medicament) {
    btn_medicament.addEventListener('click', function(f) {
      f.preventDefault();
      console.log("je suis ici");

      const element_medicament = `<div class="card-medicament">Je suis un médicament</div>`;
      card_source.insertAdjacentHTML("beforeend", element_medicament);
    });
  }
}



export default AddMedicament;
