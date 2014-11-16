require 'rails_helper'

RSpec.describe Puppy, :type => :model do
  let(:subject) { FactoryGirl.build(:puppy) }

  it { is_expected.to be_valid }

  it "is invalid without name" do
    anon = FactoryGirl.build(:puppy, name: nil)
    expect(anon).not_to be_valid
  end

  it "is invalid without breed id" do
    expect(FactoryGirl.build(:puppy, breed: nil)).not_to be_valid
  end
end
