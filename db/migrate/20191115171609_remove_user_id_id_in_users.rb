class RemoveUserIdIdInUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :user_id_id
  end
end
