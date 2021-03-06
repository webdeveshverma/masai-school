function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());



// Global State Management

// Patterns:
// Flux: Actions -> Dispatcher -> Store -> View
// MVC - Model, View, Controller

// Actions:
// Always object!
// { type: "ADD_COUNT", payload: 1 }
// { type: "DEC_COUNT", payload: 1 }
// { type: "ADD_TODO",  payload: { title: "Learn Redux", status: false} }

// DISPATCH:
// Always a function.
// dispatch({ type: "ADD_COUNT", payload: 1 })
// dispatch({ type: "ADD_COUNT", payload: 1 })

// Store:
// Anything!
// { count: 0, todos: [] }

// View:
// Wherever you are seeing the UI, console/browser....

// Reducer function:
// Always:
// Store:{ count: 0, todos: [] }
// Action: { type: "ADD_COUNT", payload: 1 }
// WE give this to store
const reducer = (store, action) => {
    if (action.type === "ADD_COUNT") {
      store.count = store.count + action.payload;
    }
  
    if (action.type === "DEC_COUNT") {
      store.count = store.count - action.payload;
    }
  
    if (action.type === "TOGGLE_THEME") {
      store.theme = store.theme === "light" ? "dark" : "light";
    }
  };