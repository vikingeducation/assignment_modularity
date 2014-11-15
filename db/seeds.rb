# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
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

breeds.each do |breed|
  Breed.create(name: breed)
end

dogs = ["Lucy", "King", "Jesse", "Grace", "Shazi", "Oscar", "Graham", "Emma"]

dogs.each do |dog|
  Puppy.create(name: dog, breed: Breed.all.sample)
end