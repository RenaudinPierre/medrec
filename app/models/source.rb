class Source < ApplicationRecord
  has_many :board_sources
  has_many :boards, through: :board_sources

  has_many :divergences
  validates :name, presence: true
  validates :type, presence: true
  validates :final_source, inclusion: { in: [true, false] }

  def have_drug?(position)
    return self.drugs.where(position: position).exists?
  end

  def have_divergence?(position)
    return self.divergences.where(position: position).exists?
  end

  def find_drug(position)
    return self.drugs.find_by(position: position)
  end

  def find_drug_id(position)
    return self.drugs.find_by(position: position).id
  end

  def find_divergence(position)
    return self.divergences.find_by(position: position)
  end

  def find_divergence_id(position)
    return self.divergences.find_by(position: position).id
  end
end
