require 'rails_helper'

RSpec.describe "puppies/show", :type => :view do
  before(:each) do
    @puppy = assign(:puppy, Puppy.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
