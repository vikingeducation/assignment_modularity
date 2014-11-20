source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.7'
# Use Postgres as the database for Active Record
gem 'pg'
# Use Figaro to load ENV variables for given environment
gem 'figaro', '1.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Use Foundation for styling
gem 'foundation-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
gem 'unicorn'

group :development, :test do
  gem 'factory_girl_rails'
  gem 'rspec-rails', '~> 3.0.0.beta'
  gem 'capybara', '~> 2.4.3'  # To simulate user interaction with browser
  gem 'capybara-webkit'  # For pages with JavaScript - so they load in real webpage
  gem 'database_cleaner'  # To clean database after capybara-webkit messes it up
  gem 'debugger'
  gem 'launchy'
end

gem 'rack-cors',
  :require => 'rack/cors'

gem 'rails_12factor', group: :production # To make app work on Heroku

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

