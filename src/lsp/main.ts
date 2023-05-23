/*
 Liskov substitution pronciple (Princípio da substituição de Liskov) -
 Se Φ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então Φ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

 Mais simples: Subtipos precisão ser substituíveis por seu tipos de base.
 Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal)
 deve servir como qualquer outro Animal.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
