class Board < ApplicationRecord
  belongs_to :patient
  validates :name, presence: true
  has_many :board_sources
  has_many :sources, through: :board_sources

  def height
    height = 0
    self.sources.each do |source|
      if source.type == "SourceDrug"
        source.drugs.each do |drug|
          height = drug.position if height < drug.position
        end
      end
    end
    return height
  end

  def bmo
    return self.sources.find_by(name: "BMO")
  end

  def final
    return self.sources.find_by(final_source: true)
  end

  def divergence
    return self.sources.where(type: "SourceDivergence").first
  end

  def sourcedrugs
    return self.sources.where(type: "SourceDrug", final_source: false)
  end

  def nb_source_final
    if self.name == "Historique médicamenteux"
      return self.sources.length
    else
      return self.sources.length - 1
    end
  end

  def type_conciliation
    return "entree" if self.name == "Conciliation d'entrée"
    return "sortie" if self.name == "Conciliation de sortie"
  end
end
