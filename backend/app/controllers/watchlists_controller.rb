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
end
