class CompaniesController < ApplicationController
    def show
        company = Company.find_by(id: params[:id])
        render json: company
    end 

    def index 
        companies = Company.all
        render json: companies, except: [:created_at, :updated_at]
    end
end
