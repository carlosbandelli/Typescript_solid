import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { Menssaging } from "./services/menssaging";
import { Persistency } from "./services/persistency";


const shoppingCart = new ShoppingCart();
const menssaging = new Menssaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, menssaging, persistency);

shoppingCart.addItem(new Product('Cup', 10));
shoppingCart.addItem(new Product('Shoes', 1000));
shoppingCart.addItem(new Product('Socks', 500));
shoppingCart.addItem(new Product('Sunglasses', 5000));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
