<template>
  <aside class="options-aside">
    <button class="options-aside__btn" title="Favoritos"><i class="bx bx-heart"></i></button>
    <router-link to="/cart"><button class="options-aside__btn" title="Carrito de compras"><i class='bx bx-cart'></i>    <span class="text-white">{{ $store.state.numberCart === 0 ? carritoItems : $store.state.numberCart }}</span></button></router-link>
    <!-- <span class="text-white">{{ $store.state.numberCart }}</span> -->
  </aside>
</template>

<script>
export default {
  name: 'OptionsComponent',
  components: 'OptionsComponent',
  props: ["itemsNum"],
  data() {
    return {
      // Datos del componente
      carritoItems: 0,
    };
  },
  mounted(){
    this.getCartItems();
  },
  methods: {
    // Métodos del componente
    getCartItems(){
      if(this.$store.getters.getCart !== undefined){
        this.carritoItems = this.$store.getters.getCart.length; 
        return;
      }
    },
    
  },
};
</script>

<style>
.options-aside{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
.options-aside__btn{
  background-color: transparent;
  border: none;
  font-size: 1.8rem;
  color: var(--white);
  position: relative;
}
.options-aside__btn span{
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1rem;
  font-weight: 400;
}
.options-aside__btn:hover{
  transform: scale(1.1);
  cursor: pointer;
}
.text-white{
  color: var(--white);
}
</style>