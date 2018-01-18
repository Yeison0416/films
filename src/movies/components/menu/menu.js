export class Menu {
  constructor (node, data, callback) {
    this.node = node
    this.data = data
    this.callback = callback
    this.elements = {}
    this.setframeworkMenu()
    this.setlistButtons(data)
    this.setEvents()
  }

  static get templates () {
    return {
      frameworkMenu: (
        `<ul class="Menu__container-ButtonsMenu"></ul>
        <button class="Menu__buttonReset">reset</button>`
      ),
      listbutton: (
        `<li class="Menu__style-listbuttons">
          <input type="button" value="" class="Menu__buttons"></input>
        </li>`
      )
    }
  }

  setframeworkMenu () {
    this.node.innerHTML = Menu.templates.frameworkMenu
    this.elements.ButtonsContainer = document.querySelector('.Menu__container-ButtonsMenu')
    this.elements.ButtonReset = document.querySelector('.Menu__buttonReset')
  }

  setlistButtons (data) {
    var arrayCategoriasData = data.map(c => c.category.toUpperCase())
    /* eslint-disable */
    Array.prototype.unique = function (a) {
      return function () { return this.filter (a) } } (function (a,b,c) { return c.indexOf(a,b+1) < 0
      })
    /* eslint-disable */
    this.elements.filteredCategories = arrayCategoriasData.unique()
    const filteredCategoriesToArray = Array.apply(null, this.elements.filteredCategories)
    const buttonHtml = Menu.templates.listbutton
    const arrayButtonsHtml = new Array(filteredCategoriesToArray.length)
    const buttonsHtml = arrayButtonsHtml.fill(buttonHtml).join('')
    this.elements.ButtonsContainer.innerHTML = buttonsHtml
    this.elements.Buttons = document.querySelectorAll('.Menu__buttons')
    this.elements.Buttons.forEach((element, index) => {
      this.elements.Buttons[index].value = this.elements.filteredCategories[index]
    })
  }

  setEvents (data) {
    this.elements.ButtonsContainer.addEventListener('click', this.selectCategory.bind(this))
    this.elements.ButtonReset.addEventListener('click', this.ShowAllCategories.bind(this))
  }

  selectCategory (event) {
    const clickedElement = event.target
    const tag_clicked = clickedElement.nodeName
    const elementsButtonsToArray = Array.apply(null, this.elements.Buttons)
    if(tag_clicked == 'INPUT') {
      const index = elementsButtonsToArray.indexOf(clickedElement)
      const categorytoShow = this.elements.Buttons[index].value
      this.callback(categorytoShow)
    }
  }

  ShowAllCategories (event) {
    const clickedElement = event.target
    const tag_clicked = clickedElement.nodeName
    if(tag_clicked == 'BUTTON') {
      const ShowAllCategories = "ShowAllCategories"
      this.callback(ShowAllCategories)
    }
  }
}
