class Drug < ApplicationRecord
  belongs_to :source

  # validates :name, presence: true
  validates :morning, presence: true
  validates :lunch, presence: true
  validates :evening, presence: true
  validates :night, presence: true
  validates :position, presence: true, uniqueness: { scope: :source }
end
