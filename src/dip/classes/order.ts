import { MenssagingProtocol } from "./interfaces/menssaging-protocol";
import { OrderStatus } from "./interfaces/order-status";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";


export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly menssaging: MenssagingProtocol,
    private readonly persistency: PersistencyProtocol,
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.menssaging.sendMessage(`The order with total of ${this.cart.totalWithDiscount()} was received.`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
