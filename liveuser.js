var result = document.getElementById('result')
var  filter = document.getElementById('filter')
var listItems=[]

getData()

filter.addEventListener('input',(e)  => filterData(e.target.value))

async function getData(){
    var res = await fetch("https://randomuser.me/api?results=50")
     

    var {results}= await res.json()

    //clear results

    results.innerhtml = ''
    results.forEach(user =>{

        var li= document.createElement('li')


        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt= "${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first}${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>
        
        `

        result.appendChild(li)
    } 
)

}
function filterData(searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }


        }
    )
}
