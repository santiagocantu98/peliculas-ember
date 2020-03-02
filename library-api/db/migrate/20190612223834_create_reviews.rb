class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :user
      t.text :body
      t.references :book, foreign_key: { on_delete: :cascade}

      t.timestamps
    end
  end
end
