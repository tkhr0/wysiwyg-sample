class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.text :body
      t.text :draft

      t.timestamps
    end
  end
end
