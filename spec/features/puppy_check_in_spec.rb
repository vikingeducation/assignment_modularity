require 'rails_helper'

describe "Puppy Check In" do
  let!(:breed) { FactoryGirl.create(:breed) }
  let(:puppy) { FactoryGirl.create(:puppy) }

  specify "puppy must have valid breed id" do
    nonexistant_breed_id = Breed.last.id + 1
    new_pup = FactoryGirl.build(:puppy, breed_id: nonexistant_breed_id)
    expect(new_pup.save).to eq(false)
  end


end