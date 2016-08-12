// model/item.ts

export class Item {
  constructor(name: string, price: string, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.revenue = 0;
  };


   name: string;
   id: number;
   price: string;
   revenue: number;
}
