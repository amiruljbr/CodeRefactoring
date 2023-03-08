class Order {
  constructor(customer, items) {
    this.customer = customer;
    this.items = items;
    this.totalPrice = 0;
  }

  calculateTotalPrice() {
    this.items.forEach(item => {
      this.totalPrice += item.price;
      if (item.type === 'taxable') {
        this.totalPrice *= 1.1;
      }
      if (item.type === 'discounted') {
        this.totalPrice *= 0.9;
      }
    });
  }

  printInvoice() {
    console.log(`Customer Name: ${this.customer.name}`);
    console.log(`Customer Address: ${this.customer.address}`);
    console.log('--------------------------');
    this.items.forEach(item => {
      console.log(`Item Name: ${item.name}`);
      console.log(`Item Price: ${item.price}`);
      console.log(`Item Type: ${item.type}`);
      console.log('--------------------------');
    });
    console.log(`Total Price: ${this.totalPrice}`);
  }
}

const customer = {
  name: 'John Doe',
  address: '123 Main St',
};

const items = [
  {
    name: 'Shirt',
    price: 20,
    type: 'normal',
  },
  {
    name: 'Book',
    price: 10,
    type: 'taxable',
  },
  {
    name: 'Shoes',
    price: 50,
    type: 'discounted',
  },
];

const order = new Order(customer, items);
order.calculateTotalPrice();
order.printInvoice();