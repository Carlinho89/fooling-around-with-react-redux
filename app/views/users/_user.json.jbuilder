json.extract! user, :id, :name, :admin, :email, :age, :created_at, :updated_at
json.url user_url(user, format: :json)
