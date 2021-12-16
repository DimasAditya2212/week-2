let name1 = 'deby'
let name2 = 'andreiy'
let name3 = 'titin'
let name4 = 'clarence'

//array
// index pada array dimulai dari 0
let names = [name1, name2, name3, name4]

console.log(names)


let people1 = {
    name: 'dimas',
    email: "dimas@gmail.com",
    address: 'komp abri sukasari',
    height: 170
}

let people2 = {
    name: 'dhio',
    email: "dhios@gmail.com",
    address: 'bekasi',
    height: 176
}

console.log(people1)
console.log(people2)
console.log(people2.address)
console.log(people2['name'])

let allDataPeople = [
    people1, 
    {
        name: 'deby',
        email: 'deby@gmail.com',
        address: 'jepang',
        height: 150
    },
    people2,
    {
        name: 'clarence',
        email: 'clarence@gmail.com',
        address: 'bogor',
        height: 160
    }
]

console.log(allDataPeople)

blogs = []
function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let blog = {
        Title: title,
        Content: content,
        Author: 'Dimas Aditya',
        Image: image,
        postAt: new Date()
    }
    blogs.push(blog)
    manipulationForm()
    inputEmpty()
}

function manipulationForm() {
    let containerContent = document.getElementById('contents')
    containerContent.innerHTML = ''

    for(let i = 0; i < blogs.length; i++){
        containerContent.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].Image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].Title}</a
            >
          </h1>
          <div class="detail-blog-content">
          ${getFullTime(blogs[i].postAt)}
          | ${blogs[i].Author}
          </div>
          <p>
          ${blogs[i].Content}
          </p>
        </div>
      </div>`
    }
}

let inputEmpty = () => {
  document.getElementById('input-blog-title').value = '' 
  document.getElementById('input-blog-content').value = ''
  document.getElementById('input-blog-image').files = ''
}



let getFullTime = (time) => {

  let month = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

  return result
}