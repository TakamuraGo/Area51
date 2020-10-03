// interface Notify{
//     //variable que sea de tipo clase??
//     dish: Dish;
//     status:boolean;
// }

// export interface DishStructure extends Ingredients{
//     name:string;
//     ingredients:Ingredients;

//     getIngredients(): string[];
//     prepare(): boolean;
//     //metodo de tipo interface?????
//     notify(): Notify;
// }
export interface Dish extends Ingredients{
    name: string;
    ingredients: Ingredients[];
}


export interface Ingredients{
    name:string;
    qty:number;
}

// export class Dish implements DishStructure{
//     name: string;
//     ingredients: Ingredients;
//     /**
//      *
//      */
//     constructor() {
//         this.name ='generico'
//     }
//     getIngredients(): string[] {
//         return [''];
//     }
//     prepare(): boolean {
//         return true;
//     }
//     notify(): Notify {
//         return {
//             dish : {} as DishStructure,
//             status:true
//         }
//     }

    
// }