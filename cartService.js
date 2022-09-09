// ====================
/*
 * 1. Add Product
 * 2. Remove product
 * 3. Clear cart
 * 4. Get All Information
 */
/*

*/

class CartService {
  constructor() {
    this.cart = {};
  }

  add(product) {
    const key = product.id;
    if (this.cart[key]) {
      this.cart[key].amount++;
      return;
    }
    this.cart[key] = {
      title: product.title,
      price: product.price,
      // id: product.id,
      amount: 1,
    };
  }

  remove(productId) {
    if (this.cart[productId].amount === 1) {
      delete this.cart[productId];
    } else {
      this.cart[productId].amount--;
    }
  }

  clear() {
    this.cart = {};
  }

  getInfo() {
    const items = Object.keys(this.cart).map((id) => {
      return {
        id,
        ...this.cart[id],
      };
    });
    const totalPrice = items.reduce((sum, item) => {
      return (sum += item.amount * item.price);
    }, 0);

    return {
      items: items,
      totalPrice: totalPrice,
    };
  }
}
