class Patient < ApplicationRecord
  has_many :pharmacist_patients
  has_many :users, through: :pharmacist_patients
  has_many :boards

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :birthdate, presence: true
  validates :entrancedate, presence: true
  validates :birthdate, uniqueness: { scope: [:first_name, :last_name] }

  after_create :create_historique_medicamenteux
  after_create :create_conciliation_entree
  after_create :create_conciliation_sortie

  def create_historique_medicamenteux
    Board.create(patient: self, name: "historique_medicamenteux")
  end

  def create_conciliation_entree
    Board.create(patient: self, name: "conciliation_entree")
  end

  def create_conciliation_sortie
    Board.create(patient: self, name: "conciliation_sortie")
  end
end
