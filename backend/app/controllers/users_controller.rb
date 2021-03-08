class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, only: [:id, :username]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [:companies, :watchlists, :investments]
    end

    def create

    end
end
