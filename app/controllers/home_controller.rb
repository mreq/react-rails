class HomeController < ApplicationController
  def index
    @fruits = %w[apple banana pear]
  end
end
