export default class Card {
  constructor (contentData) {
    this.node = this.buildUI(contentData)
    this.setEvents()
  }

  buildUI (contentData) {
    return this.generateDOM(
      `<li class="Grid__list-images" data-category="">
        <img class="Grid__image" src="">
        <div class="Grid__informationcard">
          <h1>Category :${contentData.category}</h1>
          <h1>Title : ${contentData.title}</h1>
          <h1>year : ${contentData.year}</h1>
          <h1>Director : ${contentData.director}</h1>
        </div>
      </li>`
    )
  }

  generateDOM (text) {
    /* eslint-disable */
    const domParser = new DOMParser()
    /* eslint-disable */
    return domParser.parseFromString(text, 'text/html').body.children[0]
  }

  setEvents () {
    this.node.addEventListener('click', this.rotateCard.bind(this))
  }

  rotateCard () {
    this.node.classList.toggle('Grid__list-images--rotatecard')
  }
}
