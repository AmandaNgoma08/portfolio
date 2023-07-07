
// $(document).on('ready', function() {
//     $(".background").slick({
//       dots: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrow:false,
//       fade:true,
//     });

// })
const activeImage = document.querySelector('.active-image')
const projects = document.querySelectorAll('.projects')
const activeLink = document.querySelector('.active-link')
const activeHeading = document.querySelector('.active-heading')
const items= document.querySelectorAll('.my-card')
const disp = document.querySelector('#mobi')
// const  p = (x)=>console.log(x)
// p(items)

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('hover',()=>{
    const card_img = document.querySelector("")
  })
  
}
const projectsArr = [ {
  img:'./img/Mobi Truck 1 1.png',
  name:'The Mobi Project',
  link:'',
},
{
  img:'./img/banner.png',
  name:'The Bad Rabbits Project',
  link:'',
},
{
  img:'./img/Group 8 2.png',
  name:'The Tigzozo Project',
  link:'',
},
{
  img:'./img/Rectangle 4.png',
  name:'The Nowalls Project',
  link:'',
},
{
  img:'./img/laptop.png',
  name:'The Resellme Project',
  link:'',
},{
  img:'./img/banner 3.png',
  name:'The Nyamatusi Project',
  link:'',
},{
    img:'./img/bottom bread group.png',
    name:'The Bakers Inn Project',
    link:'',
},] 


const projectElements = [...projects]
console.log(projectElements)

projectElements.addEventListener('click', (event)=>{
  console.log(event)

})
