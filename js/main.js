
$(document).on('ready', function() {
    $(".background").slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow:false,
      fade:true,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'ease-in' 

    });

})
const projectContainer = document.querySelector('.project-container')
const activeImage = document.querySelector('.active-image')
const projects = document.querySelectorAll('.projects')
const activeLink = document.querySelector('.active-link')
const activeHeading = document.querySelector('.active-heading')


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

/*
const projectElements = [...projects]
console.log(projectElements)

projectContainer.addEventListener('click', (event)=>{

  if( event.target.classList.contains('projects')  ){
    console.log(event.target.dataSet.img)
    console.log('ndipokk')
   if(event.target.dataSet === 2){
    console.log('ndipo')
   }
  }

})
*/