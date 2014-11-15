require "rails_helper"

RSpec.describe PuppiesController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/puppies").to route_to("puppies#index")
    end

    it "routes to #new" do
      expect(:get => "/puppies/new").to route_to("puppies#new")
    end

    it "routes to #show" do
      expect(:get => "/puppies/1").to route_to("puppies#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/puppies/1/edit").to route_to("puppies#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/puppies").to route_to("puppies#create")
    end

    it "routes to #update" do
      expect(:put => "/puppies/1").to route_to("puppies#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/puppies/1").to route_to("puppies#destroy", :id => "1")
    end

  end
end
