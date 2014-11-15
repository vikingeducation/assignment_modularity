class CreatePuppies < ActiveRecord::Migration
  def change
    create_table :puppies do |t|
      t.string :name
      t.belongs_to :breed
      t.timestamps
    end
  end
end
