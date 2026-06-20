import { getAllPageData } from "./models/apiManager.js"
import Renderer from "./view/renderer.js"
import PageController from "./controller/pageController.js"
import StorageManager from "./models/storage-manager.js"

const apiManager = {
  getAllPageData: getAllPageData
}

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
  pageController.loadSavedPage()
})


pageController.generatePage()