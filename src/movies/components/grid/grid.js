export class Grid {
  constructor (node, data) {
    this.node = node
    this.elements = {}
    this.setframeworkGrid(data)
    this.setListImage(data)
  }

  static get templates () {
    return {
      frameworkGrid: (
        `<li class="Grid__list-images">
          <img class="Grid__image" src="">
        </li>`
      )
    }
  }

  setframeworkGrid (data) {
    const listHtml = Grid.templates.frameworkGrid
    const arraylistHtml = new Array(data.length)
    const listsHtml = arraylistHtml.fill(listHtml).join('')
    this.node.innerHTML = listsHtml
  }

  setListImage (data) {
    this.elements.images = this.node.querySelectorAll('.Grid__image')
    this.elements.images.forEach((element, index) => {
      this.elements.images[index].src = data[index].url
    })
  }
}
