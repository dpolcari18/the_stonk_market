class InvestmentsController < ApplicationController
    def update
        investment = Investment.find_by(id: params[:id])
        investment.update(quantity: params[:quantity])
        render json: investment
    end

    def destroy
        investment = Investment.find_by(id: params[:id])
        investment.destroy
        render json: investment
    end

    def create
        investment = Investment.new(user_id: params[:user_id], company_id: params[:company_id], quantity: params[:quantity])
        
        investment.save
        render json: investment
    end
end
