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
    create_sourcedrugs_with_array(["Patient", "BMO"], board)
    Drug.create!(source_id: board.sources.find_by(name: "Patient").id, morning: 1, lunch: 1, evening: 1, night: 0, position: 1)
  end

  def create_conciliation_entree
    board = Board.create(patient: self, name: "Conciliation d'entrée")
    create_sourcedrugs_with_array(["BMO", "Ordonnance Hôpital", "Ordonnance Finale"], board)
    divergence_source = SourceDivergence.create!(name: 'Divergences', final_source: false)
    BoardSource.create!(board: board, source: divergence_source)
  end

  def create_conciliation_sortie
    board = Board.create(patient: self, name: "Conciliation de sortie")
    create_sourcedrugs_with_array(["BMO", "Ordonnance Hôpital", "Ordonnance de sortie", "Ordonnance Finale"], board)
    divergence_source = SourceDivergence.create!(name: 'Divergences', final_source: false)
    BoardSource.create!(board: board, source: divergence_source)
  end

  def update
    bmo_hist = self.boards.find_by(name: "Historique médicamenteux").sources.find_by(name: "BMO")
    self.boards.find_by(name: "Conciliation d'entrée").sources.find_by(name: "BMO").equal(bmo_hist)
    self.boards.find_by(name: "Conciliation de sortie").sources.find_by(name: "BMO").equal(bmo_hist)
  end

  def create_sourcedrugs_with_array(array, board)
    array.each do |name|
      source = SourceDrug.create!(name: name, final_source: name == array.last)
      BoardSource.create!(board: board, source: source)
    end
  end
end

