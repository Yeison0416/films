export class Grid {
  constructor (node, data, category) {
    this.node = node
    this.elements = {}
    this.setframeworkGrid(data)
    this.setListImage(data)
  }

  static get states () {
    return {
      notshowgrid: 'Grid__list-images--notshow'
    }
  }

  static get templates () {
    return {
      frameworkGrid: (
        `<li class="Grid__list-images" data-category="">
          <img class="Grid__image" src="">
        </li>`
      )
    }
  }
/* eslint-disable */
  setframeworkGrid (data) {
    const listHtml = Grid.templates.frameworkGrid
    const arraylistHtml = new Array(data.length)
    const listsHtml = arraylistHtml.fill(listHtml).join('')
    this.node.innerHTML = listsHtml
    this.elements.cards = document.querySelectorAll('.Grid__list-images')
    this.elements.cards.forEach((element, index) => {
      this.elements.cards[index].dataset.category = data[index].category
    })
  }

  setListImage (data) {
    this.elements.images = this.node.querySelectorAll('.Grid__image')
    this.elements.images.forEach((element, index) => {
      this.elements.images[index].src = data[index].url
    })
  }

  selectCategory (category) {
    this.elements.cards.forEach((element, index) => {
      this.elements.cards[index].classList.remove(Grid.states.notshowgrid)
      if (this.elements.cards[index].dataset.category.toUpperCase() !== category.toUpperCase()) {
        this.elements.cards[index].classList.add(Grid.states.notshowgrid)
      }
    })
  }
/* eslint-disable */
}
