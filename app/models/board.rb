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

  def final
    return self.sources.where(final_source: true).first
  end

  def divergence
    return self.sources.where(type: "SourceDivergence").first
  end

  def sourcedrugs
    return self.sources.where(type: "SourceDrug", final_source: false)
  end

  def nb_source_final
    if self.name == "Historique médicamenteux"
      return self.sources.length - 1
    else
      return self.sources.length - 2
    end
  end

  def update_divergence
    self.divergence.destroy_all
    divergences.each_with_index do |divergence, index|
      Divergence.create!(position: index, error_type: '', correction: '', character: 'Non pris en compte', source: self.divergence) if divergence
    end
  end

  private

  def divergences
    result_divergence = []
    sources = self.sources
    (1..self.height).each do |n|
      drugs_instances = sources.map { |source| source.drugs.where(position: n) }.reject { |c| c.empty? }
      array_of_drugs = drugs_instances.map { |drug| [drug.name, drug.morning, drug.lunch, drug.evening, drug.night] }
      array_of_drugs.uniq.length == 1 ? result_divergence << true : result_divergence << false
    end
    return result_divergence
  end
end
