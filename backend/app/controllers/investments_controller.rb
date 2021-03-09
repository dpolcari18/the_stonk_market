class InvestmentsController < ApplicationController
    def update
        investment = Investment.find_by(id: params[:id])
        investment.update(quantity: params[:quantity])
        render json: investment
    end

    def destroy
        investment = Investment.find_by(id: params[:id])

    end
end
