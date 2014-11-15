require 'rails_helper'

RSpec.describe "puppies/new", :type => :view do
  before(:each) do
    assign(:puppy, Puppy.new())
  end

  it "renders new puppy form" do
    render

    assert_select "form[action=?][method=?]", puppies_path, "post" do
    end
  end
end
