class Board < ApplicationRecord
  belongs_to :patient
  validates :name, presence: true
  has_many :board_sources
  has_many :sources, through: :board_sources

  def height
    height = 0
    self.sources.each do |source|
      source.drugs.each do |drug|
        height = drug.position if height < drug.position
      end
    end
    return height
  end

  def final
    return self.sources.where(final_source: true).first
  end

  def divergence
    return self.sources.where(type: 'SourceDivergence').first
  end
end
