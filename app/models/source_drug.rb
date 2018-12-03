class SourceDrug < Source
  has_many :drugs, foreign_key: :source_id
end
