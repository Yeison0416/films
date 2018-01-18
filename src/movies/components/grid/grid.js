export class Grid {
  constructor (node, data, category) {
    this.node = node
    this.elements = {}
    this.setframeworkGrid(data)
    this.setListImage(data)
    this.setEvents(data)
  }
/* eslint-disable */
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

  setframeworkGrid (data) {
    const listHtml = Grid.templates.frameworkGrid
    const arraylistHtml = new Array(data.length)
    const listsHtml = arraylistHtml.fill(listHtml).join('')
    this.node.innerHTML = listsHtml
    this.elements.cards = document.querySelectorAll('.Grid__list-images')
    this.elements.cards.forEach((element, index) => {
      this.elements.cards[index].dataset.category = data[index].category.toUpperCase()
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
      if (this.elements.cards[index].dataset.category !== category) {
        this.elements.cards[index].classList.add(Grid.states.notshowgrid)
      }
      if(category == "ShowAllCategories") {
        this.elements.cards[index].classList.remove(Grid.states.notshowgrid)
      }
    })
  }

  setEvents () {
    this.node.addEventListener('click', this.RotateCard.bind(this))
  }

  RotateCard () {
    const clickedElement = event.target
    const tag_clicked = clickedElement.nodeName
    console.log(tag_clicked)
    
    // if (tag_clicked == "IMG"  || tag_clicked == "DIV") {
    //   this.node.classList.toggle('RotateCard')
    // }
    
    // 
    // console.log(IndexCard)
    
    
  }
  /* eslint-disable */

}
