var app = new Vue({
  el: '#app',
  data : {
    maximum: 50,
    products: null,
    cart: []
  },
  mounted: function() {
    // Melakukan Fetch API
    fetch('https://hplussport.com/api/products/order/price')
    // Ketika mendapatkan data langsung mengubah data menjadi response json
    .then(response => response.json())
    .then(data => {
      this.products = data;
    });
  },
  methods: {
    addItem: function (product) {
      this.cart.push(product);
    }
  }
});