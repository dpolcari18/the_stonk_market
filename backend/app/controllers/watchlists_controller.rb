require 'pry'

class WatchlistsController < ApplicationController
    def destroy
        watchlist = Watchlist.find_by(id: params[:id])
        if watchlist.destroy
            render json: {
                status: "Success",
                watchlist: watchlist
            }
        else
            render json: {
                status: "Error",
                message: watchlist.errors.full_messages
            }
        end 
    end

    def create
       watchlist = Watchlist.new(user_id: params[:user_id], company_id: params[:company_id]) 

       if watchlist.save
            render json: {
                status: "success",
                watchlist: watchlist
            }
        else
            render json: {
                status: "error",
                errors: watchlist.errors.full_messages
            }
       end
    end
end
