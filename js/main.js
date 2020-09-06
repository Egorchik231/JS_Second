const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    search_str: '',
    filtered: [],
    cart_block: 'cart-block invisible',
    catalogUrl: '/catalogData.json',
    products: [],
    goodsInCart: [],
    imgCatalog: 'https://placehold.it/200x150',
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      let productID = product.id_product
      let find = this.goodsInCart.find(product => product.id_product === productID)
      if (find){
        find.quantity++
      }
      else{
        let Item = {
          img: 'https://placehold.it/50x100',
          id_product: productID,
          price: product.price,
          product_name: product.name,
          quantity: 1
        };
        this.goodsInCart.push(Item)
        this.goodss = [Item]
      }
    },
    removeFromCart(product){
      if (product.quantity > 1){
        product.quantity--
      }
      else{
        this.goodsInCart.splice(this.goodsInCart.indexOf(product), 1);
      }

    },
    filter(){
      let regexp = new RegExp(this.search_str, 'i')
      this.filtered = this.products.filter(el => regexp.test(el.product_name))
    }
  },
  created(){
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  }
});
