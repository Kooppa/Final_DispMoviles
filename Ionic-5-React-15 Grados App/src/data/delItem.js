
async function delItem(id, url = 'https://localhost:7163/api/Item/DeleteItemById') {
    // Default options are marked with *
    let last = '?id='+ id
    url = url + last
    console.log(url);
    const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    // //   mode: 'cors', // no-cors, *cors, same-origin
    // //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // //   credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
     }
    // //   redirect: 'follow', // manual, *follow, error
    // //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    
    let jsonResponse = await response.json();
    console.log("fetch repsonse: ",jsonResponse);
    return jsonResponse; // parses JSON response into native JavaScript objects
  }

export default delItem