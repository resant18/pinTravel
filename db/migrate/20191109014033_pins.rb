class Pins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :name, default: ''
      t.string :detail, default: ''
      t.decimal :lat, default: 0.0
      t.decimal :lng, default: 0.0
      t.integer :board_id, null: false

      t.timestamps
    end
    add_index :pins, :board_id    
  end
end
