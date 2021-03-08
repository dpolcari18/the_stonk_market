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
        user = User.new(username: params[:username], first_name: params[:first_name], last_name: params[:last_name])

        if user.save
            render json: {
                status: "success", 
                user: user
            }
        else
            render json: {
                status: "error",
                errors: user.errors.full_messages
            }
        end
    end
end
