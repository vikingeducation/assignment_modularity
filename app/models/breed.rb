class Breed < ActiveRecord::Base
  has_many :puppies
  validates_presence_of :name
end
