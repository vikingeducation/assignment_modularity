module PuppiesHelper

  def breed_array
    array = []
    Breed.all.each do |breed|
      array << [breed.name, breed.id]
    end
    return array
  end
  
end
