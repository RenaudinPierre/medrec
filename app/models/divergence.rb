class Divergence < ApplicationRecord
  belongs_to :source

  validates :position, presence: true
  validates :position, presence: true, uniqueness: { scope: :source }


  # def divergences
  #   if drug.name == drug.name && drug.morning == drug.morning && drug.lunch == drug.lunch && drug.evening == drug.evening && drug.nigth == drug.night
  #     "Pas de divergence"
  #     questionnaire hidden
  #   elsif divergence.error_type == poursuivi || divergence.error_type == suspendu
  #       divergence.correction = "Pas de divergence"
  #   else
  #     if divergence.error_type == "médicament arrêté documenté" || divergence.error_type == "médicament modifié documenté"  || divergence.error_type == "médicament substitué documenté"  || divergence.error_type == "médicament ajouté documenté"
  #       divergence.correction = "Divergence intentionnelle"
  #     else
  #       divergence.character hidden:false
  #     end
  #   end
  # end
end





