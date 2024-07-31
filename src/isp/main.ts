/*
ISP (Interface Segregation Principle)
Principio da segregação de interface
Os clientes não devem ser forçados a depender de types,interfaces ou membros abstratos que não utilizam.
*/


import { FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { Menssaging } from "./services/menssaging";
import { Persistency } from "./services/persistency";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const menssaging = new Menssaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, menssaging, persistency);

shoppingCart.addItem(new Product('Cup', 10));
shoppingCart.addItem(new Product('Shoes', 1000));
shoppingCart.addItem(new Product('Socks', 500));
shoppingCart.addItem(new Product('Sunglasses', 5000));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);