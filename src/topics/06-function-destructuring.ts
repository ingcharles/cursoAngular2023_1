// export{};

export interface Product {
    description: string;
    price: number;
}
const phone: Product = {
    description: "Phone",
    price: 1000.02
}

const tablet: Product = {
    description: "Tablet",
    price: 2000
}
interface TaxCalculationOption{
    tax:number;
    products: Product[];
}

//function taxCalculations(options: TaxCalculationOption): number[] {
    // function taxCalculations(options: TaxCalculationOption): [number,number] {
        // function taxCalculations({tax, products}: TaxCalculationOption): [number,number] {
export function taxCalculations(options: TaxCalculationOption): [number,number] {
    const {tax, products} = options;
    let total = 0;

    // options.products.forEach(product => {
    //     total += product.price;
    // });
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}
const shoppingCart = [phone, tablet];

const tax = 0.15;

// const result = taxCalculations ({
//     //tax: tax,
//     tax,
//     products: shoppingCart
// });

// console.log('Total',result[0]);
// console.log('Tax',result[1]);
const [total, totalTax] = taxCalculations ({
        //tax: tax,
        tax,
        products: shoppingCart
    });
    
    // console.log('Total',total);
    // console.log('Tax',totalTax);