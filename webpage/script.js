

const bandName = document.getElementById('name');
const bandPhoto = document.getElementById('photo');

let bands = [];

fetchData();


function fetchData(){

    fetch('http://localhost:3000/bands')
    .then((response) => {
      console.log(response.status)
          return response.json();
        
        })
        .then(data => {
                    console.log(data)
                    bandName.innerText = data.value
                    
        })
       
    }

// const fetchData = async() => (await fetch('http://localhost:3000/bands')).json();

// let getData = document.getElementById('toAppend');

// fetchData()
//   .then(data => {
//     for (let item of data) {
//       getData.innerHTML += `
      
//       <h1>Rock Bandzzz!!!</h1>
//       <div id="name">${bands.name}</div>
//       <div id="photo">${bands.photo_url}</div>
// `;
//     }
    
//   });