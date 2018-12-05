class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :authenticate_user!

  protected

  def after_sign_in_path_for(resource)
    patients_path
  end

  private

  def new_patient
    @patient = Patient.new
  end
end
