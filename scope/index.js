const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'CardiB' }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment

    // On line 3, we assign variable personA to 'Paul'.
    // On line 4, we assign variable personB to 'Ben'.
    // On line 5, we assign variable personC to 'Tom'.
    // On line 7, we declare a function called changePerson().
    // On line 28, we invoke our changePerson() function.
    // We jump up to line 8, inside changePerson.
    // Our if conditional checks to see if PersonA is equal to 'Paul'.
    // If it is equal to 'Paul', on line 9 we assign person to 'CardiB'.
    // On line 10, we invoke beautifyPerson().
    // On line 14, we hop inside beautifyPerson() and console.log personB.
    // PersonB is equal to 'Ben' because personB has not been reassigned.
    // We next run our if conditional on line 16. 
    // If personB includes 'B', we reassign personB to person in the global scope, 
    // and reassign personC in global scope to personB.
    // On line 19 we console.log personC, which is now assigned to CardiB.
    // We are now finished with beautifyPerson() execution, and
    // we exit out to line 23.
    // We reassign personC to personA, in the global scope. 
    // On line 25, we console.log personC.
    // PersonC is equal to 'CardiB', because we reassigned its
    // value in the global scope on line 18.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 }, 
      { 'D': 30 }
    ];

    return result;

    // Annotation:
    // Log A is 75 because the number variable on line 71 is functionally scoped.
    // Log B is 64 because line 80 reassigns the functionally scoped variable on line 71 is reassigned.
    // Log C is 64 because the functionally scoped variable on line 71 has been reassigned
    // by the function newNumber() on line 79.
    // Log D is 30 because it is called in the global scope, and the globally scoped number variable on 
    // line 71 has not been reassigned.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];

    return result;

    // Annotation:
    // Log A is equal to 'Yo' because our greeting variable on line 116 hasn't
    // been reassigned.
    // Log B is equal to 'Hey' because line 125 reassigns our variable on line 116.
    // Log C is equal to 'Hey' because our greeting variable on line 116 was reassigned
    // by newPhrase() on line 125.
    // Log D is equal to 'Hello' because our greeting variable on line 113
    // has not been reassigned.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit()

    // Log D: fruit

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      console.log('A: ', shoe)
      var shoe = 'boot';
    }

    console.log('B: ', shoe)
    // Log B: shoe
    putOnShoe();
    console.log('C: ', shoe)
    // Log C: shoe

    const result = [
      { 'B': 'flipflop' },
      { 'A': 'undefined' },
      { 'C': 'flipflop' }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
}

module.exports = scope;