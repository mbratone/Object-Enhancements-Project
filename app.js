// ES5 version
function createInstructor(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName
    };
  }
  
   // ES2015 version
  function createInstructor(firstName, lastName) {
    return {
      firstName,
      lastName
    };
  }
  

  // ES5 version
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!";

// ES2015 version
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};


// ES5 version
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  
  // ES2015 version
  const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  };
  

  // ES2015 version
function createAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        return noise;
      }
    };
  }
  
  // Example usage:
  const d = createAnimal("dog", "bark", "Woooof!");
  console.log(d.bark()); // Output: "Woooof!"
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
  console.log(s.bleet()); // Output: "BAAAAaaaa"
  