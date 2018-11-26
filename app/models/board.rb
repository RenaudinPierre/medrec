class Board < ApplicationRecord
  belongs_to :patient
  has_many :board_source
end
