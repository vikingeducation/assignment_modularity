class CreatePuppies < ActiveRecord::Migration
  def change
    create_table :puppies do |t|
      t.string :name, null: false
      t.belongs_to :breed, null: false
      t.timestamps
    end
  end
end
