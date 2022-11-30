
async function addCar(name, directory, url = 'https://localhost:7163/api/Car/PostCar') {
    // Default options are marked with *
    let data = {
        name: name,
        ItemType: 0,
        email: 0,
        phone: 0,
        directory: directory,
        class: "Admin"
        }
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    
    let jsonResponse = await response.json();
    console.log("fetch repsonse: ",jsonResponse);
    return jsonResponse; // parses JSON response into native JavaScript objects
  }

export default addCar