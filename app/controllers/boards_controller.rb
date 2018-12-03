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
  end
end
