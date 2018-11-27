class BoardsController < ApplicationController
  def show
    @patient = Patient.find(params[:id])
    @board = Board.find(params[:id])
  end
end
