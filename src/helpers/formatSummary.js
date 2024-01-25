export function summaryCart(cart) {
    // Lógica de formateo de dinero
    if(cart !== undefined){
        const totalPrice = cart.map((product) => product.pieces * product.price);
        const summary = totalPrice.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return summary.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        });
    }
}