class RefactorPinsAndBoardPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :name
    remove_column :pins, :detail
    add_column :board_pins, :title, :string
    add_column :board_pins, :detail, :string
  end
end
