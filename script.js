const { ListGroup } = require("react-bootstrap");

async function getMatchData(){
    return await fetch ("https://api.cricapi.com/v1/countries?apikey=49eef27e-6ea7-4269-8091-0467416a658b&offset=0")
     .then(data => data,json())
     .then(data=>{
        if(data.status !="success") return;
        const matchesList=data.data;
        if(!matchList) return [];
        const relevantData=matchesList.map(match=>'${match.name}, ${match.status}');
        console.log({relevantData});
        document.getElementById("matches").innerHTML=relevantData.map(match=> '<li>${match}</li>').join('');
     return relevantData;
    })
    .catch(e=>console.log(e))
}