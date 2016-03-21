require 'rails_helper'

RSpec.describe "breeds/show", :type => :view do
  before(:each) do
    @breed = assign(:breed, Breed.create!(:name => 'foo'))
  end

  it "renders attributes in <p>" do
    render
  end
end
