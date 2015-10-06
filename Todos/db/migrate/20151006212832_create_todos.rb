class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :body
      t.boolean :done
      t.timestamps null: false
    end
  end
end
