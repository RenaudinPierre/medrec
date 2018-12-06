class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  private

  def new_patient
    @patient = Patient.new
  end

  def hide_navbar
    @hide_navbar = true
  end
end
