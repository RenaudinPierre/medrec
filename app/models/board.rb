class Board < ApplicationRecord
  belongs_to :patient
  validates :name, presence: true
  has_many :board_sources
  has_many :sources, through: :board_sources
end
