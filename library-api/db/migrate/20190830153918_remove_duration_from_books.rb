class RemoveDurationFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :duration, :string
  end
end
