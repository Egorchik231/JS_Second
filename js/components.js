const searchSpace = {
    name: 'search-space',
    props: [],
    data(){
        return {
            search_str : '',
        }
    },
    methods:{

    },

    template: `
                <form action="#" class="search-form">
                    <label>
                        <input type="text" class="search-field" v-model="search_str">
                    </label>
                    <button class="btn-search" type="submit" @click="$root.filter(search_str)">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`
}


Vue.component('cartel',{
    props: ['filtered', 'products', 'goodsincart'],
    components: {
      searchSpace,
    },

    data(){
      return {
          isVisible: false
      }
    },

    methods: {
        removeFromCart(product){
            if (product.quantity > 1){
                product.quantity--
            }
            else{
                this.goodsincart.splice(this.goodsincart.indexOf(product), 1);
            }

        },

    },


    computed: {


    },

    template:
           `<div>
<search-space></search-space>
<div class="cart">
            <button class="btn-cart" type="button" @click="isVisible = !isVisible">Корзина</button>
            <div class="cart-block" v-show="isVisible">
                <p :class="goodsincart.length === 0 ? 'No-Data' : 'invisible'"> Корзина Пуста</p>
                <div class="cart-item" v-for="product of goodsincart" :key="product.id_product">
                    <div class="product-bio">
                        <img :src="product.img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{product.product_name}}</p>
                            <p class="product-quantity">Количество: {{product.quantity}}</p>
                            <p class="product-single-price">{{product.price}} за ед.</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{product.quantity*product.price}} ₽</p>
                        <button class="del-btn" :key="product.id_product" @click="removeFromCart(product)">&times;</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
`



})