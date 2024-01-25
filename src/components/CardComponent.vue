<template>
  <li class="card" v-for="product in products" :key="product.id" v-bind:class="product.gender !== 'man' ? 'card--pink' : '' ">
    <router-link :to="`/product/details/${product.id}/${product.name}/${product.brand}`">
      <p class="card__brand"><i class='bx bxs-purchase-tag'></i> <span>{{ product.brand }}</span></p>
      <picture class="card__img">
        <img :src="product.image" :alt="product.name">
      </picture>
      <section class="card__content">
        <h3 class="card__title" v-bind:class="product.gender !== 'man' ? 'card__title--pink' : '' ">{{ product.name }}</h3>
        <p class="card__price"><i class='bx bxs-badge-dollar'></i> {{ product.price }}</p>
      </section>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['products'],
  data() {
    return {
      // Datos del componente
    };
  },
  methods: {
    // Métodos del componente
  },
};
</script>

<style>
/* Estilos del componente */
.card{
    --rounded-card: .5rem;
    --space-content: 1rem;
    border-radius: var(--rounded-card);
    background-color: var(--tertiary-alt);
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    position: relative;
    transition: transform 100ms ease;
  }
  .card:hover{
    transform: translateY(-10px);
  }
  .card--pink{
    background-color: var(--secondary-alt);
  }
  .card__img{
    position: relative;
    overflow: hidden;
  }
  .card__img::after{
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,.3);
    border-top-right-radius: var(--rounded-card);
    border-top-left-radius: var(--rounded-card);
  }
  .card__img img{
    aspect-ratio: 9 / 16;
    object-fit: cover;
    border-top-right-radius: var(--rounded-card);
    border-top-left-radius: var(--rounded-card);
    max-height: 15rem;
    width: 100%;
    transform: scale(1.1);
    transition: transform 100ms ease;
  }
  .card__img:hover img{
    transform: scale(1);
  }
  .card__content{
    padding: var(--space-content);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card__brand{
    position: absolute;
    top: var(--space-content);
    right: var(--space-content);
    color: var(--white);
    z-index: 1;
    font-family: var(--font-titles);
    font-size: var(--step-0);
  }
  .card__title{
    font-size: var(--step-1);
    color: var(--tertiary);
    font-family: var(--font-titles);
    font-weight: 500;
    /* text-shadow: 1px 1px 2px var(--black-secondary); */
  }
  .card__title--pink{
    color: var(--secondary);
  }
  .card__price{
    font-family: var(--font-titles);
    font-weight: bold;
    color: var(--red);
    font-size: var(--step-2);
  }
</style>