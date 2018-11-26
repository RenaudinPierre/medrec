class BoardsController < ApplicationController
  def show
    @patient = Patient.find(params[:patient_id])
    @board = Board.find(params[:id])
  end

  def create
  end
end
