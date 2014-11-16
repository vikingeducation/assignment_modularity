json.array!(@puppies) do |puppy|
  json.extract! puppy, :name, :breed, :id
  json.url puppy_url(puppy, format: :json)
end
