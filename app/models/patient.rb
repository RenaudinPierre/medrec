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
    against: [:first_name, :last_name, :birthdate, :entrancedate ],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }

  def create_historique_medicamenteux
    board = Board.create(patient: self, name: "Historique médicamenteux")
    source = SourceDrug.create!(name: 'Patient', final_source: false)
    final_source = SourceDrug.create!(name: 'BMO', final_source: true)
    BoardSource.create!(board: board, source: source)
    BoardSource.create!(board: board, source: final_source)
    Drug.create!(source_id: source.id, morning: 1, lunch: 1, evening: 1, night: 0, position: 1)
  end

  def create_conciliation_entree
    board = Board.create(patient: self, name: "Conciliation d'entrée")
    divergence_source = SourceDivergence.create!(name: 'Divergences', final_source: false)
    BoardSource.create!(board: board, source: divergence_source)
    final_source = SourceDrug.create!(name: 'Ordonnance Final', final_source: true)
    BoardSource.create!(board: board, source: final_source)
  end

  def create_conciliation_sortie
    board = Board.create(patient: self, name: "Conciliation de sortie")
    divergence_source = SourceDivergence.create!(name: 'Divergences', final_source: false)
    BoardSource.create!(board: board, source: divergence_source)
    final_source = SourceDrug.create!(name: 'Ordonnance Final', final_source: true)
    BoardSource.create!(board: board, source: final_source)
  end
end
