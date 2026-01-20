// fetch('https://pokeapi.co/api/v2/pokemon/spongebob')
// .then(response=>
//     response.json())
// .then(data=>console.log(data.weight))
// .catch(err=>{
//     console.log("Cannot fetch Data");
// })

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response=>{
//     if(!response.ok){
//         throw new Error("COuld no fetch the resource...")
//     }
//     return response.json();
// })
// .then(data=>console.log(data.weight))
// .catch(err=>{
//     console.log(err);
// })

//Using async - await 
// fetchdata();
// async function fetchdata(){
//     try{
//         const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//         if(!reponse.ok){
//             throw new Error("Could not find !")
//         }
//         const data=await reponse.json();
//         console.log(data.height);
//     }
//     catch(error){
//         console.log(error)
//     }

// }


async function fetchdata() {
    const pokemonname=document.getElementById("pName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
    try{
        if(!response.ok){
            throw new Error("Could not find the pokemon"); 
        }
        const data=await response.json();
        // console.log(data);
        const pokmonSprite=data.sprites.front_default;
        const imgElement = document.getElementById("pokemonspirte");
        imgElement.src=pokmonSprite;
        imgElement.style.display="block";
        // 🔁 Reset animation
        imgElement.classList.remove("show");
        void imgElement.offsetWidth; // force reflow

        // ▶ Trigger animation
        imgElement.classList.add("show");

    }
    catch(error){
        console.log(error)
    }
}