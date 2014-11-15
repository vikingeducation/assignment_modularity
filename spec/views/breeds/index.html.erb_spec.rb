require 'rails_helper'

RSpec.describe "breeds/index", :type => :view do
  before(:each) do
    assign(:breeds, [
      Breed.create!(),
      Breed.create!()
    ])
  end

  it "renders a list of breeds" do
    render
  end
end
