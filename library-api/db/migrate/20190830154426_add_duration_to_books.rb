class AddDurationToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :duration, :integer
  end
end
