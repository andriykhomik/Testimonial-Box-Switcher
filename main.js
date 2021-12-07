const testimonial = document.querySelector('.testimonial');
const testimonialContainer = document.querySelector('.testimonial-container');
const progressBar = document.querySelector('.progress-bar');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role')

const textLorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    '            Cumque dolorum eum hic iste laudantium mollitia nobis nostrum\n' +
    '            possimus recusandae soluta. Laboriosam libero nemo porro quaerat.\n' +
    '            Atque consequatur debitis, dolor, dolores doloribus ea facere\n' +
    '            fugiat harum illo impedit ipsa itaque nam nulla odit officiis\n' +
    '            pariatur quam saepe sed ut velit voluptate!'

getUsers();

let idx = 0;

async function getUsers(){
    const data = await fetch('https://randomuser.me/api?results=20');
    const response = await data.json();
    const {results} = response;

    rendering(results);
    setInterval(()=> rendering(results), 10000);
}


function rendering(users){

    const { name, email, picture} = users[idx];

    progressBar.style.animation = `grow  ${10}s linear infinite` ;

    testimonial.innerText = textLorem;
    userImage.src = picture.medium;
    username.innerHTML = `${name.first} ${name.last}`;
    role.innerText = email;

    testimonialContainer.style.display = 'block';


    idx++

    if (idx === users.length){
        idx = 0;
    }
}

