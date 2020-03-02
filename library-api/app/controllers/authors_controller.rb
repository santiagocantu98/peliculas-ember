class AuthorsController < ApplicationController
    before_action :authenticate, only: [:create, :update, :destroy]

    def context
        {current_user: @current_user}
    end
end