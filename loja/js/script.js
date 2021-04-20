var produtos = [
    {
        nome:'',
        src:'pexels-anderson-guerra-1115128.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-anderson-guerra-1115128.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-dominika-roseclay-912992.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-free-creative-stuff-1377034.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-kinkate-208052.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-kinkate-212236.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-madison-inouye-2622187.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-pixabay-354962.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-polina-tankilevitch-7382946.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-shiny-diamond-3373739.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-shiny-diamond-3373739.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-shiny-diamond-3373739.jpg',
        valor:''
    },
    {
        nome:'',
        src:'pexels-𝐕𝐞𝐧𝐮𝐬-𝐇𝐃-𝐌𝐚𝐤𝐞-𝐮𝐩-&-𝐏𝐞𝐫𝐟𝐮𝐦𝐞-1749452.jpg',
        valor:''
    }
]
// for(let i = 0;i < produtos.length ; i++){
//     let bannerUl = document.querySelector('.hi-slide ul')
//     let criaLi = document.createElement('li')
//     bannerUl.appendChild(criaLi)
//     let bannerLi = document.querySelectorAll('.hi-slide ul li')
//     let criaImg = document.createElement('img')
//         criaImg.src ="../img/Banner/"+produtos[i].src
//         bannerLi[i].appendChild(criaImg)
// }
var bannerImg = document.querySelectorAll('.hi-slide li img');
for(let i = 0;i < bannerImg.length ; i++){
    bannerImg[i].addEventListener('click', function(){
        let modalBanner = document.querySelector('.bannerModal').style.display = 'block';
        document.querySelector('.bannerModal .Modalbanner img').src = modalBanner[i].src
        document.querySelector('.desc h2').innerHTML = `Foto ${i+1}`
    })
}

document.querySelector('.desc .fa-times').onclick = ()=>{
    let modalBanner = document.querySelector('.bannerModal').style.display = 'none';
}