<template>
  <header class="header">
    <div class="header__container container">
      <span class="header__logo"><router-link class="nav-bar__link" to="/"><i class='bx bxs-store-alt'></i></router-link></span>
      <span class="header__ham"><i class='bx bx-menu-alt-right'></i></span>
      <div class="header__menu">
        <NavigationBarComponent></NavigationBarComponent>
        <OptionsComponent></OptionsComponent>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationBarComponent from './NavigationBarComponent.vue';
import OptionsComponent from './OptionsComponent.vue';
export default {
  name: 'HeaderComponent',
  components: {
    NavigationBarComponent,
    OptionsComponent
  },
  data() {
    return {
      // Datos del componente
      pieces: null,
      itemsNum: null,
    };
  },
  methods: {
    // Métodos del componente
  },
};
</script>

<style>
/* Estilos del componente */
  .header{
    background-color: var(--black);
    padding-block: 2rem;
  }
  .header__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo{
    color: var(--white);
    font-size: 3rem;
  }
  .header__ham{
    display: block;
    color: var(--white);
    font-size: 3rem;
    grid-area: h-ham;
    justify-self: flex-end;
  }
  .header__menu{
    display: none;
  }
  @media (min-width: 768px){ 
    .header__ham{
      display: none;
    }
    .header__menu{
      display: flex;
      flex-grow: 1;
    }
  }
</style>