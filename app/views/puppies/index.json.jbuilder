json.array!(@puppies) do |puppy|
  json.extract! puppy, :id
  json.url puppy_url(puppy, format: :json)
end
