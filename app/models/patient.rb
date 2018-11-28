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

  include PgSearch
  pg_search_scope :search_patients,
    against: [ :first_name, :last_name, :birthdate, :entrancedate ],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }

  def create_historique_medicamenteux
    Board.create(patient: self, name: "Historique médicamenteux")
  end

  def create_conciliation_entree
    Board.create(patient: self, name: "Conciliation d'entrée")
  end

  def create_conciliation_sortie
    Board.create(patient: self, name: "Conciliation de sortie")
  end
end
