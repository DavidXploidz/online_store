<template>
    <aside class="cart-section__summary">
        <h3>Summary</h3>
        <div>
            <p>Subtotal <span>{{ summaryCart($store.getters.getCart) }}</span></p>
            <p>Estimated shipping and handling costs<span>Free</span></p>
            <hr>
            <p>Total<span>{{ summaryCart($store.getters.getCart) }}</span></p>
            <hr>
            <button class="btn-buy">Shop</button>
        </div>
    </aside>
</template>

<script>
import { summaryCart } from '../helpers/formatSummary';

export default {
  name: 'SummaryComponent',
  props: [],
  data() {
    return {
      // Datos del componente
    };
  },
  methods: {
    // Métodos del componente
    summaryCart,
  },
};
</script>

<style>
/* Estilos del componente */
.cart-section__summary{
  padding: 1rem;
  background-color: var(--gray-light);
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: .5rem;
  position: sticky;
  top: 1rem;
  z-index: 9;
}
.cart-section__summary h3{
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 1rem;
}
.cart-section__summary p{
  display: flex;
  justify-content: space-between;
  color: var(--black-secondary);
  font-size: 14px;
  margin-bottom: .5rem;
}
.cart-section__summary span{
  font-weight: 700;
}
.btn-buy{
  border: none;
  background-color: var(--black-secondary);
  color: var(--white);
  min-height: 40px;
  border-radius: 100vw;
  padding-inline: 3rem;
  width: 100%;
}
.btn-buy:hover{
  cursor: pointer;
  background-color: var(--black);
}
</style>