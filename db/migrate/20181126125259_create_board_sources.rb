class CreateBoardSources < ActiveRecord::Migration[5.2]
  def change
    create_table :board_sources do |t|
      t.references :board, foreign_key: true
      t.references :source, foreign_key: true

      t.timestamps
    end
  end
end
