class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # def self.cors_allowed_actions
  #   @cors_allowed_actions ||= []
  # end
 
  # def self.cors_allowed_actions=(arr)
  #   @cors_allowed_actions = arr
  # end
 
  # def self.allow_cors(*methods)
  #   self.cors_allowed_actions += methods
  #   before_filter :cors_before_filter, :only => methods
  #   protect_from_forgery with: :null_session, :only => methods
  # end

  protect_from_forgery with: :null_session
end