class SourceDivergence < Source
  has_many :divergences, foreign_key: :source_id
end
