<template>
  <section class="container section">
    <!-- Contenido del componente -->
    <SpinnerComponent v-if="loading"></SpinnerComponent>
    <PreviewProduct :product="product"></PreviewProduct>
  </section>
</template>

<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import PreviewProduct from '@/components/PreviewProduct.vue';

export default {
  name: 'SingleView',
  props: ['id'],
  components:{
    SpinnerComponent,
    PreviewProduct
  },
  data() {
    return {
      // Datos del componente
      product: {},
      loading: false,
      flag: false,
    };
  },
  mounted() {
    // Realizar la llamada a la API aquí
    this.getProduct();
  },
  methods: {
    // Métodos del componente
    async getProduct(){
      try{
        this.loading = true;
        const response = await fetch(`http://localhost:3000/clothes/${this.id}`);
        const data = await response.json();
        this.product = data;
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