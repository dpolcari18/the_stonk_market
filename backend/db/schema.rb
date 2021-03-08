# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_08_161142) do

  create_table "companies", force: :cascade do |t|
    t.string "description"
    t.string "symbol"
    t.string "company_type"
    t.string "currency"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "investments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_investments_on_company_id"
    t.index ["user_id"], name: "index_investments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_watchlists_on_company_id"
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

  add_foreign_key "investments", "companies"
  add_foreign_key "investments", "users"
  add_foreign_key "watchlists", "companies"
  add_foreign_key "watchlists", "users"
end
