# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_26_125809) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_sources", force: :cascade do |t|
    t.bigint "board_id"
    t.bigint "source_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_sources_on_board_id"
    t.index ["source_id"], name: "index_board_sources_on_source_id"
  end

  create_table "boards", force: :cascade do |t|
    t.string "name"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_boards_on_patient_id"
  end

  create_table "divergences", force: :cascade do |t|
    t.integer "position"
    t.string "error_type"
    t.string "correction"
    t.string "character"
    t.bigint "source_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["source_id"], name: "index_divergences_on_source_id"
  end

  create_table "drugs", force: :cascade do |t|
    t.string "name"
    t.float "morning"
    t.float "lunch"
    t.float "evening"
    t.float "night"
    t.text "comment"
    t.integer "position"
    t.bigint "source_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["source_id"], name: "index_drugs_on_source_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "birthdate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sources", force: :cascade do |t|
    t.string "name"
    t.boolean "final_source"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_patients", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_user_patients_on_patient_id"
    t.index ["user_id"], name: "index_user_patients_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "board_sources", "boards"
  add_foreign_key "board_sources", "sources"
  add_foreign_key "boards", "patients"
  add_foreign_key "divergences", "sources"
  add_foreign_key "drugs", "sources"
  add_foreign_key "user_patients", "patients"
  add_foreign_key "user_patients", "users"
end
