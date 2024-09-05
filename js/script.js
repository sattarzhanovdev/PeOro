const $list = document.querySelector('.list')
const $rightList = document.querySelector('.right__list')
const $bars = document.querySelector('.bars')
const $sidebar = document.querySelector('.sidebar')
const $close = document.querySelector('.close')
const $sideList = document.querySelector('.side__list')

const navList = [
  {id: 1, title: 'Каталог и цены 2024', dropList: [
    {id:1, title: 'Платья'},
    {id:2, title: 'Блузки'},
    {id:3, title: 'Топы из экокожи'},
    {id:4, title: 'Двойки'},
    {id:5, title: 'Костюмы'},
    {id:6, title: 'Пальто'},
    {id:7, title: 'Брюки'},
    {id:8, title: 'Тренчи'},
  ]},
  {id: 2, title: 'О фабрике'},
  {id: 3, title: 'Контакты'},
  {id: 4, title: 'Кейсы'},
]

const rightList = [
  {id: 1, title: 'Как заказать'},
  {id: 2, title: 'Подробный прайс PDF'},
  {id: 3, title: 'Доставка и оплата'},
]

const listRightElements = rightList.map(item => {
  return `
    <li>
      <a href="" class="${item.dropList ? 'dropHover' : ''}">
        ${item.title}
      </a>
    </li>
  `
}).join('')

$rightList.innerHTML = listRightElements

const listElements = navList.map(item => {
  return `
    <li>
      <${item.dropList ? 'li' : 'a href=""'} class="${item.dropList ? 'dropHover' : ''}">
        ${item.title}
      </${item.dropList ? 'li' : 'a'}>
      ${item.dropList ? '<ul class="drop__side"></ul>' : ''}
    </li>
  `
}).join('')

const sideElements = navList.map(item => {
  return `
    <li>
      <${item.dropList ? 'li' : 'a href=""'} class="${item.dropList ? 'dropClick' : ''}">
        ${item.title}
      </${item.dropList ? 'li' : 'a'}>
      ${item.dropList ? '<ul class="drop__side"></ul>' : ''}
    </li>
  `
}).join('')

const $dropdown = document.querySelector('.dropdown')

const dropElements = navList[0].dropList.map(item => {
  return `
    <li>
      <a href="">
        ${item.title}
      </a>
    </li>
  `
}).join('')
    
$list.innerHTML = listElements
$sideList.innerHTML = sideElements
$dropdown.innerHTML = dropElements
const $dropHover = document.querySelector('.dropHover')
const $dropClick = document.querySelector('.dropClick')

$dropHover.addEventListener('mouseover', e => {
  $dropdown.setAttribute('style', 'display: flex')    
  for(let child of $sideList.children){
    child.children[1].innerHTML = dropElements
  }
})



let active = false
$dropClick.addEventListener('click', e => {
  active = !active
  if(active){
    for(let child of $sideList.children){
      child.children[1].innerHTML = dropElements
      child.children[1].setAttribute('style', 'display: flex')
    }
    
  }else{
    for(let child of $sideList.children){
      child.children[1].setAttribute('style', 'display: none')
    }
  }
})


$dropHover.addEventListener('mouseout', e => {
  $dropdown.setAttribute('style', 'display: none')    
})

$dropdown.addEventListener('mouseover', e => {
  $dropdown.setAttribute('style', 'display: flex')    
})

$dropdown.addEventListener('mouseout', e => {
  $dropdown.setAttribute('style', 'display: none')    
})



$bars.addEventListener('click', e => {
  $sidebar.classList.add('active__sidebar')
})


$close.addEventListener('click', e => {
  $sidebar.classList.remove('active__sidebar')
})
