class Source < ApplicationRecord
  has_many :board_sources
  has_many :boards, through: :board_sources

  has_many :divergences
  validates :name, presence: true
  validates :type, presence: true
  validates :final_source, inclusion: { in: [true, false] }
end
