class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :category_id, null: false
      t.integer :cover_id
      t.boolean :secret, default: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :boards, :name, unique: true
    add_index :boards, :category_id
    add_index :boards, :user_id
    add_reference :users, :user_id
  end
end
