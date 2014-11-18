require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AJAXPuppyHq
  class Application < Rails::Application
    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins '*'

        resource '/breeds',
          :headers => :any,
          :methods => [:get],
          :max_age => 1800

        resource '/puppies',
          :headers => :any,
          :methods => [:get, :post, :delete, :options, :head],
          :max_age => 1800
      end
    end
  end
end
