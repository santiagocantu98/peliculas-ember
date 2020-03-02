class AddUserIdToBooks < ActiveRecord::Migration[5.2]
  def up
    remove_column :reviews, :user
    add_reference :books, :user, foreign_key: true
  end

  def down
    add_column :reviews, :user, :string
    remove_reference :books, :user, foreign_key: true
  end

end
