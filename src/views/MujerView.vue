<template>
  <div class="container section">
    <!-- Contenido del componente -->
    <h1 class="main-title">Women</h1>
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
  name: 'MujerView',
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
    this.getWomanProducts();
  },
  methods: {
    // Métodos del componente
    async getWomanProducts(){
      try{
        this.loading = true;
        const response = await fetch('https://my-json-server.typicode.com/DavidXploidz/online_store/clothes?gender=woman');
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

<style scoped>
/* Estilos del componente */
</style>