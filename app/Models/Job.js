
export class Job {
  /**
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string}} data
   */
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get JobCardTemplate() {
    return/*html*/`
    <div class="col-md-4 col-lg-3">
      <div class="card">
        <div class="card-body">
          <h3>${this.company} | ${this.jobTitle}</h3>
          <p>${this.hours}hrs /week</p>
          <p> <Strong>${this.rate} /year</Strong></p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
`
  }

  get JobFormTemplate() {
    return /*html*/ `
  
  `

  }
  get AddCartTemplte() {
    return/*html*/`
<div>
  <button class="btn btn-outline-light" data-bs-toggle="offcanvas" data-bs-target="#apple">Add Job</button>
</div>
`

  }



}
{/*
<div class="col-md-4 col-lg-3">
  <div class="card">
    <div class="card-body">
      <h3>Microsoft | CEO</h3>
      <p>80 hrs /week</p>
      <p> <Strong>160 billion /year</Strong></p>
      <p>Description</p>
    </div>
  </div>
</div> 
*/}