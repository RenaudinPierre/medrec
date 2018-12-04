class BoardComponentsCreator
  attr_reader :params

  def initialize(params)
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
      source = Source.create!(
        name: source_params[:name],
        final_source: source_params[:final_source],
        type: source_params[:type],
        boards: [board]
      )

      source_params[:drugs].each do |drug_params|
        Drug.create!(
          name: drug_params[:name],
          morning: drug_params[:morning],
          lunch: drug_params[:lunch],
          evening: drug_params[:evening],
          night: drug_params[:night],
          position: drug_params[:position],
          source: source
        )
      end
      source_params[:divergences].each do |divergences_params|
        divergence.create!(
          error_type: divergences_params[:error_type],
          character: divergences_params[:character],
          correction: divergences_params[:correction],
          position: divergences_params[:position],
          source: source
        )
      end
    end
  end

  def board
    @board ||= Board.find(params[:board_id])
  end
end
