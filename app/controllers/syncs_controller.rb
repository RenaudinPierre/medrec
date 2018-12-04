class SyncsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    bcc = BoardComponentsCreator.new(params)
  end
end
