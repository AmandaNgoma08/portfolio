const items= document.querySelectorAll('.my-card')
const disp_img = document.querySelector('#mobi img')
const disp_text=document.querySelector('#mobi h3')
const disp_link=document.querySelector('#mobi a')

const  print = (x)=>console.log(x)

//print(items.length)
for (let i = 1; i < items.length; i++) {
    // display all items in items array
    const item = items[i]
    item.onmouseover= ()=>{
        const itemid=item.getAttribute('id')
        const itemimg = document.querySelector(`#${itemid} img`)
        print (itemimg)
        const text=document.querySelector(`#${itemid} h3`)
        print (text)
        const image_link=itemimg.getAttribute('src')
        disp_img.setAttribute('src',image_link)
        disp_text.textContent=text.textContent
        const item_link=item.getAttribute('link')
        print(`https://amandangoma08.github.io/${item_link}`)
        disp_link.setAttribute('href',`https://amandangoma08.github.io/${item_link}`)
    }

    
}
