class SyncsController < ApplicationController
  def create
    bcc = BoardComponentsCreator.new(params)
  end
end
