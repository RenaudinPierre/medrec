class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  before_action :new_patient, only: [:home]

  def home
    @user = User.new
  end
end
