class Divergence < ApplicationRecord
  belongs_to :source

  validates :position, presence: true
  validates :character, presence: true
  validates :position, presence: true, uniqueness: { scope: :source }
end
