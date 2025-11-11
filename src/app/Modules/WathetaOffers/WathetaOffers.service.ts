import AppError from "../../errorHelper/AppError"
import httpStatus  from 'http-status-codes';
import { Offers } from "./WathetaOffers.model";
import { Ioffers } from "./WathetaOffers.interface";





const createOffers= async(payload:Partial<Ioffers>)=>
{
    const {title,...rest}=payload
    const isExist= await Offers.findOne({title})
    if(isExist)
        {
            throw new AppError(httpStatus.BAD_REQUEST,"Division ALREADY EXIST")
        }  
           const offers=Offers.create(
            {
                
                title,
                ...rest
            }

        )

        return offers;
}



const getAllOffers=async ()=>
    {
        const offers= await Offers.find({})
        const totalOffer=await Offers.countDocuments()
        return {
            data:offers,
            meta:{
                total:totalOffer
            }
        }
    }



    const updateOffer = async (id: string, payload: Partial<Ioffers>) => {
        const isExist = await Offers.findById(id);
      
        if (!isExist) {
          throw new AppError(httpStatus.NOT_FOUND, "Offer not found");
        }
      
        const updatedOffer = await Offers.findByIdAndUpdate(id, payload, {
          new: true, // return the updated document
          runValidators: true, // run schema validators
        });
      
        return updatedOffer;
      };


    const deleteOffer = async (id: string) => {
        const isExist = await Offers.findById(id);
      
        if (!isExist) {
          throw new AppError(httpStatus.NOT_FOUND, "Offer not found");
        }
      
        const deletedOffer = await Offers.findByIdAndDelete(id)
        return deleteOffer
      };



export const offersService={
   createOffers,
   getAllOffers,
   updateOffer,
   deleteOffer
}