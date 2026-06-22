import ApiManager from "./models/apiManager.js"
import Renderer from "./view/renderer.js"
import PageController from "./controller/pageController.js"
import StorageManager from "./models/storageManager.js"


const apiManager = new ApiManager()
const renderer = new Renderer();
const storageManager = new StorageManager();

const pageController = new PageController(apiManager, renderer,storageManager);

const generateButton = document.getElementById("btn-generate")
const saveButton = document.getElementById("btn-save")
const loadButton = document.getElementById("btn-load")


generateButton.addEventListener("click", function () {
  pageController.generatePage()
})
saveButton.addEventListener("click", function () {
  pageController.saveCurrentPage()
})
loadButton.addEventListener("click", function () {
  const savedPagesSelect = document.getElementById("saved-pages-select")
  if (savedPagesSelect === null) {
    pageController.loadSavedPage("");
    return
  }

  pageController.loadSavedPage(savedPagesSelect.value);
})

pageController.renderSavedPagesList()
pageController.generatePage()


