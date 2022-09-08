import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawHouses() {
  console.log('hello world controller')
  let template = ''
  appState.houses.forEach(h => template += h.HouseCardTemplate)
  setHTML('listings', template)
}
export class HousesController {
  showHouses() {
    _drawHouses()
  }
}