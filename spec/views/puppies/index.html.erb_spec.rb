require 'rails_helper'

RSpec.describe "puppies/index", :type => :view do
  before(:each) do
    assign(:puppies, [
      Puppy.create!(),
      Puppy.create!()
    ])
  end

  it "renders a list of puppies" do
    render
  end
end
