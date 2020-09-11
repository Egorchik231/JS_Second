const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    goodsincart: [],
    filtered: [],
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
  },
  methods: {
    filter(search_str){
      let regexp = new RegExp(search_str, 'i')
      this.filtered = this.products.filter(el => regexp.test(el.product_name))
    },
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },
    created() {
      this.getJson(`${API + this.catalogUrl}`)
          .then(data => {
            for (let el of data) {
              this.products.push(el);
              this.filtered.push(el);
            }
          });
    },
    addProduct(product){
      let productID = product.id_product
      let find = this.goodsincart.find(product => product.id_product === productID)
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
        this.goodsincart.push(Item)
      }
    }

  },

  mounted(){
    this.created()
    console.log(this.products)
    console.log(this.filtered)
  }
});
