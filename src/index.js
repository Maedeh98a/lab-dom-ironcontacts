// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
console.log(threeContacts);
threeContacts.forEach((contact) =>{
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
  <td>
  <img src="${contact.pictureUrl}"/>
  </td>
  <td> ${contact.name}</td>
  <td> ${contact.popularity.toFixed(2)}</td>
  <td>
    <button class="btn-delete"> Delete</button>
  </td>
  <td>
    <button class=" btn-like" >
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `
  // you should use the contactRow otherwise can't find it
  tableBody.appendChild(contactRow); 
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
   const deleteButton = contactRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", ()=> {
    contactRow.remove();

  })
  

  // ITERATION 3 - Like Buttons
  const likeButton = contactRow.querySelector(".btn-like");
  likeButton.addEventListener("click", ()=>{
    likeButton.classList.toggle("selected")
  })


})

buttonAddRandom.addEventListener("click", ()=>{
  const randomNumber = Math.floor(Math.random() * contacts.length)
  // const newArray = contacts.splice(0, 3)
  const randomNewContact = contacts[randomNumber];
  const randomNewRow = document.createElement("tr");
  randomNewRow.innerHTML = `
  <td>
    <img src="${randomNewContact.pictureUrl}" />
  </td>
  <td> ${randomNewContact.name} </td>
  <td> ${randomNewContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `
  const deleteButton = randomNewRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", ()=>{
    randomNewRow.remove();
  })

  const likeButton = randomNewRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () =>{
    likeButton.classList.toggle("selected")
  })
  tableBody.appendChild(randomNewRow)
})

// Bonus: ITERATION 4 - Add Random Contacts


