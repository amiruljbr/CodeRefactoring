class Order {
  constructor() {
    this.items = [];
    this.customer = {
      name: '',
      address: '',
      phoneNumber: ''
    };
    this.total = 0;
  }

  addItem(item) {
    this.items.push(item);
    this.total += item.price;
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }

  getCustomerName() {
    return this.customer.name;
  }

  setCustomerName(name) {
    this.customer.name = name;
  }

  getCustomerAddress() {
    return this.customer.address;
  }

  setCustomerAddress(address) {
    this.customer.address = address;
  }

  getCustomerPhoneNumber() {
    return this.customer.phoneNumber;
  }

  setCustomerPhoneNumber(phoneNumber) {
    this.customer.phoneNumber = phoneNumber;
  }
}