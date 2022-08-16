document.querySelector("#button").addEventListener("click", apiRequest);

//document.getElementById("getButton").addEventListener("click", test);

function test() {
    console.log('this event listener is working')
}
async function apiRequest() {
  const alienName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://trekki-alien-api.herokuapp.com/api/${alienName}`
    );
    const data = await response.json();
    console.log(data);

    document.getElementById("alienName").innerHTML = data.speciesName;
    document.getElementById("alienWorld").innerHTML = data.homeworld;
    document.getElementById("alienFeatures").innerHTML = data.features;
    document.getElementById("alienFacts").innerHTML = data.interestingFact;
    document.getElementById("alienExamples").innerHTML = data.notableExamples;

    document.getElementById("alienImage").src = data.image, 
    document.getElementById("alienCaption").innerText = data.speciesName;
  } catch(err) {
    console.log(err);
  }
}
