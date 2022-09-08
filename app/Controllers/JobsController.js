import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function drawJobs() {
  let template = ''
  appState.jobs.forEach(job => template += job.jobCardTemplate)
  setHTML('listings', template)
}


export class JobsController {
  constructor() {

    appState.on('jobs', drawJobs)
  }

  showJobs() {
    drawJobs()

  }
  addJob() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // Service.addCar(formData)

      jobsService.addJob(formData)

      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error('addJob', error)
    }
  }
}