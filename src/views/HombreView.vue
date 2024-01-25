<template>
  <div class="container section">
    <h1 class="main-title">Men</h1>
    <ul class="grid-list">
      <CardComponent :products="products"></CardComponent>
      <SpinnerComponent v-if="loading"></SpinnerComponent>
    </ul>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default {
  name: 'HombreView',
  components: {
    CardComponent,
    SpinnerComponent
  },
  data() {
    return {
      // Datos del componente
      products: null,
      loading: false,
    };
  },
  mounted() {
    // Realizar la llamada a la API aquí
    this.getManProducts();
  },
  methods: {
    // Métodos del componente
    async getManProducts(){
      try{
        this.loading = true;
        const response = await fetch('http://localhost:3000/clothes?gender=man');
        const data = await response.json();
        this.products = data;
        this.loading = false;
      }catch(error){
        console.error('Error al obtener datos de la API:', error);
      }
    },
  },
};
</script>

<style>
/* Estilos del componente */
</style>