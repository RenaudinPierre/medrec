class CreateUserPatients < ActiveRecord::Migration[5.2]
  def change
    create_table :user_patients do |t|
      t.references :user, foreign_key: true
      t.references :patient, foreign_key: true

      t.timestamps
    end
  end
end
