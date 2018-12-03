class SourceDivergence < Divergence
  has_many :divergences, foreign_key: :source_id
end
