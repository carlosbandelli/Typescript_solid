type CartItem = { name: string; price: number };
type orderStatus = 'open' | 'closed';
export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: orderStatus = 'open';
  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): orderStatus {
    return this._orderStatus;
  }
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`The order with total of ${this.total()} was received.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Menssage sent:', msg);
  }

  saveOrder(): void {
    console.log('Order saved sucessfully');
  }

  clear(): void {
    console.log('Cart cleared');
    this._items.length = 0;
  }

}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Shoes', price: 1000 });
shoppingCart.addItem({ name: 'Socks', price: 500 });
shoppingCart.addItem({ name: 'Sunglasses', price: 5000 });



console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);


