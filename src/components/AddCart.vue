<template>
    <section class="center" v-if="stock > 0" >
        <div class="buttons">
            <button v-on:click="handleMinusButton" class="button"><i class='bx bx-minus'></i></button>
            <p class="pieces">{{ piecesNum }}</p>
            <button v-on:click="handlePlusButton" class="button"><i class='bx bx-plus'></i></button>
            <p class="message" v-bind:class="showMessage ? 'visible' : '' ">{{ showMessage ? `Only ${stock} available` : '' }}</p>
        </div>
        <button class="button-cart" @click="addCart"><i class='bx bxs-cart'></i> Agregar al carrito</button>
    </section>
    <p class="main-title" v-else>Producto Agotado</p>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'AddCart',
    props: ['stock','resetCount','product','pieces'],
    data() {
        return {
        // Datos del componente
            piecesNum: 0,
            showMessage: false,
            arrayCart: [],
            copyArrayCart: [],
            cartValue: null,
        };
    },
    methods: {
    // Métodos del componente
        handleMinusButton(){
            this.piecesNum -= 1;
            this.listenChangeStock();
            if(this.piecesNum <= 0){
                this.piecesNum = 0;
            }
        },
        handlePlusButton(){
            if(this.piecesNum >= this.stock){
                this.showMessage = true;
                return;
            }
            this.piecesNum += 1;
            this.listenChangeStock();
        },
        listenChangeStock(){
            // Cantidad de piezas a agregar
            const dataToSend = this.piecesNum;
            this.$emit('piecesCart', dataToSend);
        },
        addCart(){
            // Validar piezas existentes
            if(this.validatePiecesNum()) return;

            const { id, name, brand, price, image, description, gender } = this.product;

            // Validar que el nuevo objeto ya existe en el carrito
            const itemBefore = this.$store.getters.getCart.find(item => item.id === id);
            if(itemBefore) return;
            
            const newObj = {
                id: id,
                name: name,
                brand: brand,
                price: price,
                pieces: this.piecesNum,
                image: image,
                description: description,
                gender: gender,
            };

            // Mutacion de el metodo addCart
            this.$store.state.item = newObj;
            this.$store.dispatch('addCartAction');

            this.resetCounter();
        },
        resetCounter(){
            // Resetear contador
            this.piecesNum = 0;
        },
        validatePiecesNum(){
            let alert = { };
            if(this.piecesNum === 0){
                alert = toast.error("Add a least one !", {
                    autoClose: 2000,
                    theme: "light",
                    position: "bottom-center",
                });
                return alert;
            }
            alert = toast.success("Added to your cart !", {
                autoClose: 2000,
                theme: "light",
            });
        }
    },
};
</script>

<style>
/* Estilos del componente */
.buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
    position: relative;
}
.button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--black-secondary);
    color: var(--white);
    height: 40px;
    width: 40px;
    padding: .225rem .625rem;
    font-size: var(--step-1);
    border-radius: 50%;
}
.button:hover{
    cursor: pointer;
    background-color: var(--black);
}
.pieces{
    font-size: var(--step-2);
    color: var(--black);
    font-weight: 600;
}
.message{
    position: absolute;
    opacity: 0;
    top: 0;
    right: -90%;
    background-color: var(--red);
    color: var(--white);
}
.message::after{
    content: '';
    height: 100%;
    width: 30px;
    position: absolute;
    left: -30px;
    top: 0;
    background-color: var(--red);
    clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
.message.visible{
    opacity: 1;
    padding: .5rem;
}
.button-cart{
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--primary);
    color: var(--black);
    min-height: 40px;
    padding: .225rem 1rem;
    font-size: var(--step-0);
    font-weight: 600;
    border-radius: .225rem;
    margin-top: 1rem;
}
.button-cart:hover{
    cursor: pointer;
    background-color: var(--primary-400);
}
.center{
    display: grid;
    justify-content: center;
}
@media (min-width: 768px){ 
    .center{
        justify-content: flex-start;
    }
}
</style>