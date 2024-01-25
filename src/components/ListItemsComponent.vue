<template>
  <ul class="cart-section__list">
    <li class="cart" v-for="item in $store.getters.getCart" v-bind:key="item.id">
      <figure class="cart__figure" v-bind:class="item.gender === 'man' ? 'cart__figure--alt' : '' ">
        <img class="cart__img" :src="item.image" :alt="item.name">
      </figure>
      <div class="cart__content">
        <h3 class="cart__title">{{ item.name }} - {{ item.brand }}</h3>
        <p class="cart__description">{{ item.description }}</p>
        <p class="cart__price">
          <i class='bx bx-dollar' ></i>{{ item.price }} 
          <span class="cart__pieces cart__pieces--ml" v-if="editItem.id === item.id && editItem.edit">Quantity: <input type="number" :value="item.pieces" v-on:change="handleNewQuatityItem" min="1" :max="stockItem"></span>
          <span class="cart__pieces" v-else>x {{ item.pieces }}</span>
        </p>
      </div>
      <div class="cart__btns">
        <button class="cart__btn cart__btn--trash" v-on:click="handleRemoveItemCart(item.id)" title="Remove"><i class='bx bx-trash'></i></button>
        <button class="cart__btn cart__btn--edit" v-if="editItem.id === item.id && editItem.edit" v-on:click="handleUpdateItem(item.id)" title="Update"><i class='bx bx-save'></i></button>
        <button class="cart__btn cart__btn--save" v-else v-on:click="handleEditItem(item.id)" title="Edit"><i class='bx bx-pencil'></i></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: 'ListItemsComponent',
  data() {
    return {
      //Datos del componente
      editItem: {},
      updatedItem: {},
      recoveredItem: {},
      newQuantity: null,
      stockItem: null,
    };
  },
  methods: {
    //Funcion para remover un item de un carrito
    handleRemoveItemCart(id){
      // Obtener el nuevo cart 
      this.$store.state.copyCart = this.$store.getters.getCart.filter(item => item.id !== id);

      // Almacenar el nuevo cart
      localStorage.setItem('cart', JSON.stringify(this.$store.state.copyCart));

      // Mostrar alerta 
      toast.error("Item Removed!", {
        autoClose: 2000,
        theme: "light",
        position: "bottom-center",
      });

      // Mandar llamar mi vuex evento global
      this.$store.dispatch('removeItemCartAction');
    },
    async handleEditItem(id){
      this.editItem = {
        id: id,
        edit: true,
      }
      try{
        const response = await fetch(`https://my-json-server.typicode.com/DavidXploidz/online_store/clothes/${id}`);
        const data = await response.json();
        this.stockItem = data.pieces;
      }catch(error){
        console.error('Error al obtener datos de la API:', error);
      }
    },
    handleUpdateItem(id){
      //Deshabilitar edicion
      this.editItem = {
        id: id,
        edit: false,
      }

      //Recuperar items
      this.cart = this.$store.getters.getCart;
      const index = this.cart.findIndex(item => item.id === id);

      if(index !== -1) {
        //Actualizar el objeto encontrado de acuerdo a su indice en el arreglo original
        this.cart[index].pieces = this.newQuantity;

        //Guardar de nuevo en localStorage
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }

      //Mostrar alerta
      toast.info("Quantity Updated!", {
        autoClose: 2000,
        theme: "light",
        position: "bottom-center",
      });
    },
    handleNewQuatityItem(event){
      const number = parseInt(event.target.value);
      if(number < 1){
        this.newQuantity = 1;
        return;
      }
      if(number >= this.stockItem && this.stockItem){
        //Mostrar alerta de falta de stock
        toast.info(`Only ${this.stockItem} available !`, {
          autoClose: 2000,
          theme: "light",
          position: "bottom-center",
        });
      }
      this.newQuantity = number;
    },
  },
};
</script>

<style>
/* Estilos del componente */
.cart-section__list{
  list-style: none;
  display: grid;
  row-gap: 1rem;
  padding: 1rem;
  border-radius: .5rem;
}
.cart{
  display: grid;
  grid-template-columns: 100px 1fr 50px;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px dashed var(--gray);
  padding-bottom: 1rem;
}
.cart__content{
  display: grid;
  row-gap: 5px;
}
.cart__title{
  font-weight: 600;
  font-size: clamp(1rem, 0.913rem + 0.4348vw, 1.25rem);
}
.cart__description{
  color: var(--gray);
}
.cart__price{
  color: var(--red);
  font-weight: 500;
}
.cart__pieces{
  color: var(--black-secondary);
}
.cart__pieces input{
  width: 60px;
  height: 30px;
  color: var(--black-secondary);
  box-shadow:  inset 0 0 3px var(--gray);
  padding-left: .5rem;
  padding-right: .5rem;
  border-radius: 5px;
  border: none;
}
.cart__pieces input:focus{
  outline: none;
}
.cart__pieces--ml{
  margin-left: 20px;
}
.cart__figure{
  position: relative;
}
.cart__figure::after{
  content: '';
  position: absolute;
  background-color: var(--secondary);
  top: -.225rem;
  left: -.225rem;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(2px);
}
.cart__figure--alt::after{
  background-color: var(--tertiary);
}
.cart__btns{
  display: grid;
  row-gap: .5rem;
}
.cart__btn{
  background-color: var(--red-secondary);
  border: none;
  color: var(--red);
  padding: .725rem;
  border-radius: .5rem;
  display: grid;
  place-items: center;
  justify-content: flex-end;
  margin-left: auto;
  font-size: 18px;
}
.cart__btn:hover{
  cursor: pointer;
}
.cart__btn--trash{
  background-color: var(--red-secondary);
  color: var(--red);
}
.cart__btn--edit, .cart__btn--save{
  background-color: var(--purple-alt);
  color: var(--purple);
}
</style>