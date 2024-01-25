<template>
  <nav class="nav-bar">
    <router-link class="nav-bar__link" to="/new-merch">Newest</router-link>
    <router-link class="nav-bar__link" to="/hombre">Men</router-link>
    <router-link class="nav-bar__link" to="/mujer">Women</router-link>
    <!-- <router-link class="nav-bar__link" to="/rebajas">Sales</router-link> -->
  </nav>
</template>

<script>
export default {
  name: 'NavigationBarComponent',
  components: 'NavigationBarComponent',
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
.nav-bar{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  flex-grow: 1;
}
.nav-bar__link{
  color: var(--white);
  text-decoration: none;
  padding: 5px 7px;
  position: relative;
}
.nav-bar__link:hover::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 30px;
  height: 2px;
  background-color: var(--white);
  width: 100%;
}
</style>