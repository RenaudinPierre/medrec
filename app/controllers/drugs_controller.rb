require 'open-uri'

class DrugsController < ApplicationController
  def search
    url = "https://open-medicaments.fr/api/v1/medicaments?query=#{params[:q]}"

    data_string = open(url).read
    data = JSON.parse(data_string)
    data.each do |d|
      d["id"] = d.delete("codeCIS")
      d["text"] = d.delete("denomination")
    end
    render json: { results: data }
  end

  # def create
  #   @board = Board.find(params[:board_id])
  #   @board.drugs.create(drug_params)
  #   head :created
  # end

  def drug_params
    params.require(:drug).permit(:name, :morning, :lunch, :evening, :night, :comment, :position)
  end
end
