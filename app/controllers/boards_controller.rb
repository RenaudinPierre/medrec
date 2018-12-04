class BoardsController < ApplicationController
  before_action :new_patient, only: [:show, :print]

  def show
    @board = Board.find(params[:id])
    @board.patient.update if (@board.name != "Historique médicamenteux")
    @drug = Drug. new
    @divergence = Divergence.new
    @collection_error_type = [
      ['', 0],
      ['poursuivi', 1],
      ['suspendu', 2],
      ['médicament arrêté documenté', 3],
      ['médicament modifié documenté', 4],
      ['médicament substitué documenté', 5],
      ['médicament ajouté documenté', 6],
      ['médicament arrêté non documenté', 7],
      ['médicament modifié non documenté', 8],
      ['médicament substitué non documenté', 9],
      ['médicament ajouté non documenté', 10]
    ]
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
