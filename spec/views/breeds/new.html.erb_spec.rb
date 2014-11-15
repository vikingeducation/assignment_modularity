require 'rails_helper'

RSpec.describe "breeds/new", :type => :view do
  before(:each) do
    assign(:breed, Breed.new())
  end

  it "renders new breed form" do
    render

    assert_select "form[action=?][method=?]", breeds_path, "post" do
    end
  end
end
