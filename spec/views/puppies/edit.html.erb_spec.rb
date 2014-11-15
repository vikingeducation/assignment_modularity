require 'rails_helper'

RSpec.describe "puppies/edit", :type => :view do
  before(:each) do
    @puppy = assign(:puppy, Puppy.create!())
  end

  it "renders the edit puppy form" do
    render

    assert_select "form[action=?][method=?]", puppy_path(@puppy), "post" do
    end
  end
end
