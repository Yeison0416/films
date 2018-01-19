import { Menu } from './components/menu/menu.js'
import { Grid } from './components/grid/grid.js'
import data from './movies_data.js'

/* eslint-disable */
const menu = new Menu (document.querySelector('.Menu'), data, 
function (category) {
    grid.selectCategory(category)
})
const grid = new Grid (document.querySelector('.Grid'), data, (cardclicked) =>{
    console.log(cardclicked)
})
/* eslint-disable */
