class BoardsController < ApplicationController
  before_action :new_patient, only: [:show, :print]

  def show
    @board = Board.find(params[:id])
    @drug = Drug.new
    @divergence = Divergence.new
  end


  def print
    @board = Board.find(params[:board_id])
    @drug = Drug.new
    @divergence = Divergence.new

    if @board.name == "Historique médicamenteux"
      render "print_historique_medicamenteux"
    elsif @board.name == "Conciliation d'entrée"
      render "print_conciliation_entree"
    elsif @board.name == "Conciliation de sortie"
      render "print_conciliation_sortie"
    end
  end

end
