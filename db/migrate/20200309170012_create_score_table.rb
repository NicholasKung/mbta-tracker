class CreateScoreTable < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :first, null: false
      t.integer :second, null: false
      t.integer :third, null: false

      t.belongs_to :user

      t.timestamps null:false
    end
  end
end
