class Puppy < ActiveRecord::Base
  belongs_to :breed
  validates_associated :breed
  validates_presence_of :breed, :name
end
