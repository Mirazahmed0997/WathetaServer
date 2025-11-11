import { model, Schema } from "mongoose";
import { Ioffers } from "./WathetaOffers.interface";


const offersSchema = new Schema<Ioffers>({

    title: {type:String, required: true, unique:true},
    description: {type: String},
    price:{type:Number}

},
{
    timestamps:true,
})

export const Offers = model<Ioffers>("Offers", offersSchema)