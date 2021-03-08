class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :description
      t.string :symbol
      t.string :company_type
      t.string :currency

      t.timestamps
    end
  end
end
