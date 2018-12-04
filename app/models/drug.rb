class Drug < ApplicationRecord
  belongs_to :source

  # validates :name, presence: true
  validates :morning, presence: true
  validates :lunch, presence: true
  validates :evening, presence: true
  validates :night, presence: true
  validates :position, presence: true, uniqueness: { scope: :source }

  def equal(drug)
    self.name = drug.name
    self.morning = drug.morning
    self.lunch = drug.lunch
    self.evening = drug.evening
    self.night = drug.night
    self.comment = drug.comment
    self.position = drug.position
  end

  # def equal?(drug)
  #   if drug.name == drug.name && drug.morning == drug.morning && drug.lunch == drug.lunch && drug.evening == drug.evening && drug.nigth == drug.night
  #     divergence = false
  #   else
  #     divergence = true
  #   end
  # end
end
