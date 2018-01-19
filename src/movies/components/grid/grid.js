import Card from '../card/card.js'

export class Grid {
  constructor (node, data, callback) {
    this.node = node
    this.callback = callback
    this.elements = {}
    this.buildUI(data)
    this.setListImage(data)
  }
  buildUI (data) {
    const cards = data.map((element) => {
      return new Card(element)
    })

    cards.forEach((card) => {
      this.node.appendChild(card.node)
    })

    this.elements.cards = document.querySelectorAll('.Grid__list-images')
    this.elements.cards.forEach((element, index) => {
      this.elements.cards[index].dataset.category = data[index].category.toUpperCase()
    })
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
          <div class="Grid__informationcard">information image</div>
        </li>`
      )
    }
  }

  setListImage (data) {
    this.elements.images = this.node.querySelectorAll('.Grid__image')
    this.elements.images.forEach((element, index) => {
      this.elements.images[index].src = data[index].url
    })
  }

  selectCategory (category) {
    this.elements.cards.forEach((element, index) => {
      this.elements.cards[index].classList.remove('Grid__list-images--rotatecard')
      this.elements.cards[index].classList.remove(Grid.states.notshowgrid)
      if (this.elements.cards[index].dataset.category !== category) {
        this.elements.cards[index].classList.add(Grid.states.notshowgrid)
      }
      if (category === 'ShowAllCategories') {
        this.elements.cards[index].classList.remove(Grid.states.notshowgrid)
      }
    })
  }
}
