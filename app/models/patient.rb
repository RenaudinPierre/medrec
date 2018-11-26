class Patient < ApplicationRecord
  has_many :pharmacist_patients
  has_many :users, through: :pharmacist_patients
  has_many :boards

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :birthdate, presence: true
  validates :entrancedate, presence: true
  validates :birthdate, uniqueness: { scope: [:first_name, :last_name] }
end
