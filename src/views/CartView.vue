<template>
  <div class="container section">
    <h1 class="main-title">Your shopping cart {{ $store.getters.getCart.length > 0 ? '' : 'is empty!' }}</h1>

    <section class="cart-section" v-if="$store.getters.getCart.length > 0 ">
      <!-- List products -->
      <ListItemsComponent></ListItemsComponent>
      <!-- Summary  -->
      <SummaryComponent></SummaryComponent>
    </section>

    <section class="empty-cart" v-else>
      <figure>
        <img class="empty-cart__img" src="../assets/svg/add_cart_ilustration.svg" alt="icon cart ilustration">
      </figure>
    </section>
  </div>
</template>

<script>
import ListItemsComponent from '@/components/ListItemsComponent.vue';
import SummaryComponent from '@/components/SummaryComponent.vue';

export default {
  name: 'CartView',
  components:{
    ListItemsComponent,
    SummaryComponent
  },
  data() {
    return {
      // Datos del componente
      carrito: [],
      empty: false,
    };
  },
  methods: {
    // Métodos del componente
  },
};
</script>

<style>
/* Estilos del componente */
.cart-section{
  display: grid;
  gap: 1rem;
}
@media (min-width: 768px){ 
  .cart-section{
    grid-template-columns: 1fr 35%;
    grid-template-rows: repeat(2, 250px);
  }
}
.empty-cart{
  position: relative;
  text-align: center;
}
.empty-cart__img{
  max-height: 30rem;
  margin-inline: auto;
}
</style>