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
        resource '*',  headers: :any,
                       methods: [:get, :post, :delete, :options, :head],
                       expose: ["Access-Control-Allow-Headers"]
      end
    end

    config.action_dispatch.default_headers = {
      'Access-Control-Allow-Headers' => %w{Origin X-Requested-With Content-Type Accept}.join(",")
    }
  end
end
