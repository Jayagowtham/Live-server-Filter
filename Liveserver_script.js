const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

// Event listener for when type name first words - the results should pop according with it.
 
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()


    // clear results from anything
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML =`
            <img src="${user.picture.large}" alt="${user.name.first}"

            <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li) 
           
    })    
}

// event Listener function used for that filter searching.
function filterData(searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}