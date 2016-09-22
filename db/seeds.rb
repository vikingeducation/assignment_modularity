# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).


# ----------------------------------------
# Clean Database
# ----------------------------------------

if Rails.env == 'development'
  puts 'Cleaning Database'
  Rake::Task['db:migrate:reset'].invoke
else
  Puppy.destroy_all
  Breed.destroy_all
end


# ----------------------------------------
# Config Variables
# ----------------------------------------


breeds = ["Affenpinscher", "Airedale Terrier", "Akita", "Alaskan Malumute", 
  "Autstralian Cattle Dog", "Australian Shepherd", "Basenji", "Bassett Hound", "Beagle", 
  "Doberman Pinscher", "German Shepherd", "Golden Retriever", "Labrador Retriever",
  "Poodle", "Rottweiler", "Brittany", "Collie", "Cocker Spaniel", "Keeshond", "Shiba Inu",
  "Schnauzer", "Pomeranian", "Schipperke", "Border Collie", "Collie", "Vizsla", 
  "Weimeraner", "Pug", "Afghan Hound", "American Eskimo", "Bernese Mountain Dog", 
  "Bichon Frise", "Bloodhound", "Borzoi", "Border Terrier", "Boxer", "Welsh Corgi",
  "Chihuahua", "Shar Pei", "Dalmation", "Dachshund", "Springer Spaniel", "Irish Setter",
  "Bulldog", "Greyhound", "Jack Russell Terrier", "Maltese", "Mastiff", "Newfoundland", 
  "Pekingese"].uniq.sort

dogs = ["Lucy", "King", "Jesse", "Grace", "Shazi", "Oscar", "Graham", "Emma"]




# ----------------------------------------
# Create Breeds
# ----------------------------------------

puts 'Creating Breeds'

breeds.each do |breed|
  Breed.create!(name: breed)
end




# ----------------------------------------
# Create Puppies
# ----------------------------------------

puts 'Creating Puppies'


dogs.each do |dog|
  Puppy.create!(name: dog, breed: Breed.all.sample)
end




# ----------------------------------------
# Finished Seeding
# ----------------------------------------

puts 'Done!'












