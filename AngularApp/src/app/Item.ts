export abstract class Item{
    id: number;
    name: string;
    type: string;
    price: number;

    constructor(id: number, name: string, type: string, price: number){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

export class Tea extends Item {
    constructor(id: number, name: string, type:string, price: number){
        super(id, name, type, price);
    }
}