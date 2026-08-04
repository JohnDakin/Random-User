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
    console.log(data);

    let randomUserImage = data.results[0].picture.large;
    let randomUserNameObject = data.results[0].name; 
    let htmlImage = document.getElementById("randomUserImage");
    let htmlGender = document.getElementById("userGender");
    let htmlUsername = document.getElementById("userName");
    let loginDetail = document.getElementById("loginDetail");
    let loginDetailObject = data.results[0].login;
    console.log(loginDetailObject);

    loginDetail.innerHTML = "";
    
    for(let detail in loginDetailObject){
      loginDetail.innerHTML += `<p>${detail}: ${loginDetailObject[detail]}</p>`
    }


    htmlImage.src =  randomUserImage;
    htmlUsername.innerText = `Username: ${randomUserNameObject.title}. ${randomUserNameObject.first} ${randomUserNameObject.last}`;

    htmlImage.style.display = "block";
    htmlGender.innerText  = `Gender: ${data.results[0].gender.charAt(0).toUpperCase() + data.results[0].gender.slice(1)}`;


  }catch(error){
    console.log("Error",error.message);
  }
  
}

getRandomUser(url);