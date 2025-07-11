const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 10000);
    });
  },
};

async function getPersonsInfo(name) {
  console.log("inside fn");
  const people = await server.getPeople();
  console.log("after await");
  const person = people.find((person) => {
    return person.name === name;
  });
  return person;
}

console.log("start");
const p = getPersonsInfo("Thor");
console.log("call end ", p);

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }

//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404

async function loadJson(url) {
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
      alert(error);
  }
}

const getFruit = async(name) => {
    fruits = {
        apple: "🍎",
        berry: "🍓",
        pineapple: "🍍"
    };
    console.log('inside getFruit()');

    return fruits[name];
};

getFruit('apple');

// Trick to run concurrently, without suspending at each iteration
fruits = ['apple', 'berry', 'pineapple'];

const smoothie = fruits.map(async v => {
    const emoji = await getFruit(v);
    return emoji;
});