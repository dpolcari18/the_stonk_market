class CompaniesController < ApplicationController
    def show
        company = Company.find_by(id: params[:id])
        render json: company
    end 
end
