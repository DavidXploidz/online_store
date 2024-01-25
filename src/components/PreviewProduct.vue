<template>
  <div class="preview grid-preview">
    <!-- Contenido del componente -->
    <figure class="preview__figure" v-bind:class="product.gender === 'man' ? 'preview__figure--alt' : '' ">
      <img class="preview__img" :src="product.image" :alt="product.name">
      <i class="preview__icon-gender" v-bind:class="product.gender === 'man' ? 'bx bx-male' : 'bx bx-female' "></i>
      <!-- <figcaption>This is an image of the clothes.</figcaption> -->
    </figure>
    <aside>
      <div class="preview__content">
        <h3 class="preview__title">{{ product.name }} <span>{{ product.brand }}</span></h3>
        <p class="preview__description">{{ product.description }}</p>
        <p class="preview__price"><i class='bx bxs-badge-dollar' ></i>{{ product.price }}</p>
        <AddCart  :stock="product.pieces" @piecesCart="checkOnPieces" :resetCount="resetCount" :product="product" :pieces="pieces"></AddCart>
      </div>
    </aside>
  </div>
</template>

<script>
import AddCart from './AddCart.vue';

export default {

  name: 'PreviewProduct',
  props: ["product"],
  components: {
    AddCart,
  },
  data() {
    return {
      // Datos del componente
      pieces: null,
      resetCount: null,
    };
  },
  methods: {
    checkOnPieces(data){
      this.pieces = data;
    },
  },
};
</script>

<style>
  /* Estilos del componente */
  .grid-preview{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 3rem;
  }
  .preview__content{
    display: grid;
    gap: .5rem;
    grid-template-areas: 
      'title'
      'description'
      'price'
    ;
    text-align: center;
  }
  @media (min-width: 768px){ 
    .preview__content{
      text-align: left;
    }
  }
  .preview__figure{
    position: relative;
    max-height: 30rem;
    box-shadow: 5px 5px 3px var(--secondary), -5px -5px 10px var(--secondary-alt);
  }
  .preview__figure--alt{
    box-shadow: 5px 5px 3px var(--tertiary), -5px -5px 10px var(--tertiary-alt);
  }
  .preview__img{
    aspect-ratio: 16 / 9;
    object-fit: cover;
    height: 100%;
  }
  .preview__title{
    grid-area: title;
    font-size: var(--step-3);
    color: var(--black-secondary);
    font-weight: 600;
    font-family: var(--font-titles);
  }
  .preview__description{
    grid-area: description;
    font-size: var(--step-1);
    font-weight: 400;
    color: var(--black-secondary);
  }
  .preview__price{
    grid-area: price;
    color: var(--red);
    font-size: var(--step-5);
    font-weight: bold;
  }
  .preview__icon-gender{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3.2rem;
    filter: drop-shadow(5px 5px 10px var(--black));
  }
  .bx-male{
    color: var(--tertiary);
  }
  .bx-female{
    color: var(--secondary);
  }
</style>