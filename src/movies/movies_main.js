import { Menu } from './components/menu/menu.js'
import { Grid } from './components/grid/grid.js'
import data from './movies_data.js'

/* eslint-disable */
const menu = new Menu (document.querySelector('.Menu'), data)
const grid = new Grid (document.querySelector('.Grid'), data)
/* eslint-disable */
