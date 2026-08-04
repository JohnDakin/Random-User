const url = "https://randomuser.me/api/";


async function getRandomUser(url){
  try{
    let response = await fetch(url);
    // console.log(response);

    if(!response.ok){
      throw new Error("Unable to fetch resource, Response: ", response.status)
    }

    let data = await response.json()
    // console.log(`${data.results[0].name.first} ${data.results[0].name.last} is ${data.results[0].gender} in gender`);
    // console.log(data.results[0].picture.large)

    let randomUserImage = data.results[0].picture.large;
    let randomUserNameObject = data.results[0].name; 
    let htmlImage = document.getElementById("randomUserImage");
    let htmlP = document.getElementById("userDetail");

    htmlImage.src =  randomUserImage;
    htmlImage.style.display = "block";
    htmlP.innerText  = `${randomUserNameObject.first} ${randomUserNameObject.last} is ${data.results[0].gender} in gender`;


  }catch(error){
    console.log("Error",error.message);
  }
  
}

getRandomUser(url);