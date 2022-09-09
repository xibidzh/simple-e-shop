class ProductService {
  constructor(products = []) {
    this.products = products;
  }

  filterBy(search = "") {
    if (!search.trim()) return this.products;

    return this.products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  get(index) {
    return this.products[index];
  }

  getById(id) {
    return this.products.find((product) => {
      return product.id === id;
    });
  }
}

// class ProductService {
//   constructor(products = []) {
//     this.products = products;
//   }

//   filterBy(search = "") {
//     if (!search.trim()) return this.products;

//     return this.products.filter((product) => {
//       return product.title.toLowerCase().includes(search.toLowerCase());
//     });
//   }

//   get(index) {
//     return this.products[index];
//   }

//   getById(id) {
//     return this.products.find((product) => {
//       return product.id === id;
//     });
//   }

//   toHTML() {
//     const toHTMLCard = (product) => `<div>${product.title}</div>`;

//     return this.products.map(toHTMLCard).join("");
//   }
// }
