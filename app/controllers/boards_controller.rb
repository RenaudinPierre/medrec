class BoardsController < ApplicationController
  before_action :new_patient, only: [:show]

  def show
    @board = Board.find(params[:id])
    # @drug = Drug.new
    # if @board.name == "Historique médicamenteux" && @board.sources.length == 0
    #   @board.sources = Source.create(name: "Patient", final_source: false)
    # else
      # Chercher BMO dans @board.name == "Historique médicamenteux"
    # end
  end
end
