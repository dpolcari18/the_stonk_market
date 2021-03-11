class CompaniesController < ApplicationController
    def show
        company = Company.find_by(id: params[:id])
        render json: company, include: [:users]
    end 

    def index 
        companies = Company.all
        render json: companies, except: [:created_at, :updated_at]
    end
end
