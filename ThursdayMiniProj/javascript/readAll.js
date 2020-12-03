// fetch the data

function getData() {
    fetch('http://jsonplaceholder.typicode.com/comments')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    createPara(data);

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function createPara(data) {
    for (let i = 0; i < data.length; i++) {
        let para = document.createElement("P"); // Create a <p> element
        para.className = "myPara";
        para.innerText = `
        Id : ${(data[i].id)}
        Title: ${(data[i].title)}
        Body: ${(data[i].body)}
        UserID: ${(data[i].userId)}`
        let myDiv = document.getElementById("myDiv");
        myDiv.appendChild(para);
    }
}




getData();