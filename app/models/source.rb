class Source < ApplicationRecord
  has_many :board_sources
  has_many :boards, through: :board_sources
  validates :name, presence: true
  validates :type, presence: true
  validates :final_source, presence: true
end
