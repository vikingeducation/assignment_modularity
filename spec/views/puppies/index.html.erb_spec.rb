require 'rails_helper'

RSpec.describe "puppies/index", :type => :view do
  before(:each) do
    assign(:puppies, [
      FactoryGirl.create(:puppy),
      FactoryGirl.create(:puppy)
    ])
  end

  it "renders a list of puppies" do
    render
  end
end
