class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  public display(): void {
    console.log("Display product");
  }
}
/**Book class extends the Product class */
class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string
  ) {
    super(id, price, description);
  }

  public display(): void {
    console.log("Display product from child class");
  }
}
