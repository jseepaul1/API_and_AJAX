var form = document.getElementById("my_form")

// addEventListener() method attaches an event handler to an element without overwriting existing event handlers
form.addEventListener('submit', function(e) {
// e.preventDefault() is a method that stops the default nature of javascript.
    e.preventDefault()
// this is getting element by id in the form
    var search = document.getElementById("search_data").value
    var original_data = search.split(' ').join('')
    document.getElementById("response").innerHTML = ""
// fetch grabs data from this specific url
    fetch("https://api.github.com/users/"+original_data)
    .then( (response) => response.json() )
    .then( (data) => { console.log(data)
// the keys in the api object is used to access the data
        document.getElementById("response").innerHTML = `
        <a target="_blank" href="$https://www.github.com/${original_data}"> 
        <div class="name">Name: ${data.name}</div>
        <div class="public_repos">Public Repos: ${data.public_repos}</div>
        <div class="email">Email: ${data.email}</div>
        <div class="url"> URL: ${data.url}</div>
        <img src=${data.avatar_url}/> 
        </a>
        `
    })
})