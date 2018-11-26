class CreateDivergences < ActiveRecord::Migration[5.2]
  def change
    create_table :divergences do |t|
      t.integer :position
      t.string :error_type
      t.string :correction
      t.string :character
      t.references :source, foreign_key: true

      t.timestamps
    end
  end
end
