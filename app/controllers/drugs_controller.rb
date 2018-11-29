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
end
