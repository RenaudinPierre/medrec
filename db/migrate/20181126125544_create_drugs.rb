class CreateDrugs < ActiveRecord::Migration[5.2]
  def change
    create_table :drugs do |t|
      t.string :name
      t.float :morning
      t.float :lunch
      t.float :evening
      t.float :night
      t.text :comment
      t.integer :position
      t.references :source, foreign_key: true

      t.timestamps
    end
  end
end
