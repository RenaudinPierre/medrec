class SourcesController < ApplicationController
  skip_before_action :verify_authenticity_token

  # POST /boards/:board_id/sources
  def create
    @board = Board.find(params[:board_id])
    @board.sources.create(source_params)
    render json: @board.to_json
  end

  def source_params
    params.require(:source).permit(:name, :type, :final_source)
  end
end
