

const bandName = document.getElementById('name');
const bandPhoto = document.getElementById('photo');
let bandData;

let bands = [];

fetchData();

console.log(bandData);


function fetchData(){

    fetch('http://localhost:3000/bands')
    .then((response) => {
      console.log(response.status)
          return response.json();
        
        })
        .then(data => {
            console.log(data);
            //check did data actually come back?
            if(data) {
                bandData = data;
                //[ {id: 1, name: "Beatles", year: 1970} ,{id: 2, name: "Imagine Dragons", year: 1970}, {id: 3, name: "Prince", year: 1980}"];
                let beatles = data.find(band => band.name === "Beatles");
                
                if(beatles) {
                    bandName.innerText = beatles.name;        
                }
                else{
                    bandName.innerText = data[0].name;
                }  
            }
            else {
                bandName.innerText = "No bands here, there was an error from the API";
            } 
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
