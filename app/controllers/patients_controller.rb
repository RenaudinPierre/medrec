class PatientsController < ApplicationController
  def index
    if params[:query].present?
      # sql_query = " \
      #   patients.first_name @@ :query \
      #   OR patients.last_name @@ :query \
      #   OR patients.birthdate @@ :query \
      #   OR directors.entrancedate @@ :query \
      # "
      # @patients = Patient.where(sql_query, query: "%#{params[:query]}%")
      @patients = Patient.search_patients(params[:query])
    else
      @patients = Patient.all
    end
  end

  def new
    @patient = Patient.new
  end

  def create
    @patient = Patient.new(patient_params)

    if @patient.save
      redirect_to patients_path
    else
      render :new
    end

  end

  private

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :birthdate, :entrancedate)
  end

end
