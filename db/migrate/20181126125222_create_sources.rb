class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :name
      t.boolean :final_source
      t.string :type

      t.timestamps
    end
  end
end
