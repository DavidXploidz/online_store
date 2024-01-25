export function localePrices(price) {
    // Lógica de formateo de dinero
    if(price !== undefined){
        return price.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        });
    }
}