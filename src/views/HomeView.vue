<template>
  <div class="home">
    <main class="main">
      <figure class="main__figure">
        <img :src="mainItem.image" :alt="mainItem.name">
      </figure>
      <section class="main__content">
        <h1 class="main__title">{{ mainItem.name }} {{ mainItem.brand }}</h1>
        <p class="main__text">{{ mainItem.description }}</p>
      </section>
      <h2 class="main__price">{{ localePrices(mainItem.price) }}</h2>
      <img class="main__bg" src="../assets/svg/bg_gradient_item.svg" alt="bg gradient item">
    </main>
  </div>
</template>

<script>
import { localePrices } from '../helpers/formatPrice'

  export default {
    name: 'HomeView',
    data(){
      return{
        items: [],
        mainItem: {},
      }
    },
    components: {
      
    },
    mounted(){
      this.getItems();
    },
    methods:{
      localePrices,
      async getItems(){
        try {
          const response = await fetch('http://localhost:3000/clothes?_page=1&_limit=10');
          const data = await response.json();
          this.items = data;
          this.mainItem = data[data.length - 1];
          console.log(this.mainItem);
        } catch (error) {
          console.log(error);
        }
      },
    }
  }
</script>

<style>
.main{
  position: relative;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  overflow: clip;
  height: calc(100dvh - 129.333px);
}
.main__bg{
  grid-area: 4 / 1 / 6 / 6;
  z-index: 2;
  align-self: flex-end;
}
.main__content{
  grid-area: 2 / 1 / 3 / 6;
  padding: 1rem;
  z-index: 3;
  align-self: center;
  text-align: center;
}
.main__figure{
  grid-area: 3 / 3 / 6 / 6;
  z-index: 1;
}
@media (min-width: 768px){ 
  .main__content{
    grid-area: 1 / 3 / 4 / 6;
    align-self: flex-start;
    text-align: start;
  }
  .main__figure{
    grid-area: 1 / 1 / 6 / 3;
  }
  .main__bg{
    align-self: center;
  }
}
.main__title{
  font-size: var(--step-6);
  font-weight: 500;
  font-family: var(--font-titles);
}
.main__text{
  font-size: var(--step-2);
  color: var(--gray-500);
  max-width: 450px;
}
.main__price{
  font-size: var(--step-5);
  font-weight: 700;
  color: var(--red);
  grid-area: 3 / 1 / 4 / 3;
  z-index: 4;
  padding-inline: 1rem;
  align-self: end;
}
@media (min-width: 768px){ 
  .main__price{
    grid-area: 3 / 5 / 4 / 6;
    align-self: center;
  }
}
.main__figure{
  position: relative;
}
</style>