// Local Storage
const user = {
    id: "1234",
    name: "Naganandhini",
    age: 24 
};

// Store the user object in local storage after converting it to a JSON string
localStorage.setItem("userDetail", JSON.stringify(user));

// Store a sample string in local storage
localStorage.setItem("sample1", "sample Data");

console.log("--------LOCAL STORAGE-------");

// Retrieve and parse the stored user object from local storage
console.log(JSON.parse(localStorage.getItem("userDetail")));

// Remove the item with the key "sample1" from local storage
localStorage.removeItem("sample1");

// Clear all items from local storage
// localStorage.clear();


// Session Storage
const sessionUser = {
    id: "5678",
    name: "John Doe",
    age: 30
};

// Store the user object in session storage after converting it to a JSON string
sessionStorage.setItem("sessionUserDetail", JSON.stringify(sessionUser));

// Store a sample string in session storage
sessionStorage.setItem("sample2", "sample Session Data");

console.log("--------SESSION STORAGE-------");

// Retrieve and parse the stored user object from session storage
console.log(JSON.parse(sessionStorage.getItem("sessionUserDetail")));

// Remove the item with the key "sample2" from session storage
sessionStorage.removeItem("sample2");

// Clear all items from session storage
sessionStorage.clear();


//Cookies
document.cookie = "sessionID=Abc123; expires=Thu, 21 Oct 2025 07:28:00 UTC; path=/";
document.cookie = "theme = dark"
const cookies = document.cookie

console.log("--------COOKIES-------");
console.log(cookies)
//get cookie
const splitCookie = document.cookie.split(";")
splitCookie.forEach((cookie)=>console.log(cookie))

//delete cookie
document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" // if path is given, should be mentioned same exact path

console.log(document.cookies)


//IndexDB
const request = window.indexedDB.open("myDB1", "1")


request.onupgradeneeded = (event) => {
    const db = event.target.result;
  
    // Creating an object store (similar to a table)
    const userStore = db.createObjectStore('users', { keyPath: 'id' });
  
    // Storing a string value
    userStore.put({ id: 1, name: 'John Doe' });
  
    // Storing an array
    userStore.put({ id: 2, emails: ['john@example.com', 'johnny@example.com'] });
  
    // Storing a nested object
    userStore.put({
      id: 3,
      profile: {
        name: 'Jane Smith',
        age: 30,
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA'
        }
      }
    });
  };

  