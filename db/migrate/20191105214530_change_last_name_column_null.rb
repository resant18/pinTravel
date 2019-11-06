class ChangeLastNameColumnNull < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :last_name, :string, null: true
  end
end
