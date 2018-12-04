class BoardComponentsCreator
  attr_reader :params

  def intialize(params)
    @params = params
    process
  end

  private

  def process
    clear_board
    create_sources_with_cards
  end

  def clear_board
    board.sources.destroy_all
  end

  def create_sources_with_cards
    params[:sources].each do |source_params|
      source = Source.create!(name: name, final_source: final_source)

      source_params[:drugs].each do |drug_params|
      end
    end
  end

  def board
    @board ||= Board.find(params[:id])
  end
end
