export interface IBillingAddress{

    doorNumber:string;
    
    city:string;
    
    zip:number
    
    }
    
    export class User {
    
    userName:string;
    
    email:string;
    
    phoneNumber:string;
    
    billingAddres:IBillingAddress
    
    }