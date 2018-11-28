class BoardsController < ApplicationController
  before_action :new_patient, only: [:show]

  def show
    @board = Board.find(params[:id])
  end
end
