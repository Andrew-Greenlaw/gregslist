
export class House {

  constructor(data) {
    this.bedroom = data.bedroom
    this.bathroom = data.bathroom
    this.levels = data.levels
    this.imgUrl = data.imgUrl || 'https://www.autolist.com/assets/listings/default_car.jpg'
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get HouseCardTemplate() {
    return/*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.bedroom} | ${this.bathroom} | ${this.levels} ${this.year}
          </h5>
          <p>
            <strong>$ ${this.price}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
`
  }
}