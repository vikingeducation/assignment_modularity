require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AJAXPuppyHq
  class Application < Rails::Application
    config.middleware.use Rack::Cors do
      allow do
        origins '*'
        resource '*',  headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                       methods: [:get, :post, :delete],
                       expose: ["Access-Control-Allow-Headers"]
      end
    end
  end
end
