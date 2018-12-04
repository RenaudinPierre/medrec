class SourceDrug < Source
  has_many :drugs, foreign_key: :source_id

  def equal(source)
    self.name = source.name
    self.final_source = source.final_source
    self.drugs.destroy_all
    source.drugs.each do |drug|
      Drug.create!(name: drug.name, source: self, morning: drug.morning, lunch: drug.lunch, evening: drug.evening, night: drug.night, comment: drug.comment, position: drug.position)
    end
  end
end
