import { NextFunction, Request, Response } from "express"
import { catchAsynch } from "../../Utils/CatchAsync"
import { sendResponse } from "../../Utils/sendResponse"
import httpStatus from "http-status-codes"
import { offersService } from "./WathetaOffers.service"
import { Offers } from "./WathetaOffers.model"





const createOffers= catchAsynch( async (req:Request,res:Response,next:NextFunction)=>
    {
        const Offers = await offersService.createOffers(req.body)
          
    
            // res.status(httpStatus.CREATED).json({
            //     message: "User successfully created"
            // })
            sendResponse(res,{
                success:true,
                statusCode:httpStatus.CREATED,
                message:"Offer Created successfully",
                data:Offers,
            })
    })



    const getOffers= catchAsynch( async (req:Request,res:Response,next:NextFunction)=>
        {
            const offers = await offersService.getAllOffers()
              
        
                // res.status(httpStatus.CREATED).json({
                //     message: "User successfully created"
                // })
                sendResponse(res,{
                    success:true,
                    statusCode:httpStatus.CREATED,
                    message:"Get all offers successfully",
                    data:offers,
                })
        })
    
    
        const updateOffers = catchAsynch(
            async (req: Request, res: Response, next: NextFunction) => {
              const { id } = req.params; // ✅ get division ID from URL
              const payload = req.body;  // ✅ get update data from request body
          
              // ✅ call service with both id and payload
              const updatedOffers = await offersService.updateOffer(id as string, payload);
          
              // ✅ send proper response
              sendResponse(res, {
                success: true,
                statusCode: httpStatus.OK, // use 200 for update
                message: "Offers updated successfully",
                data: updatedOffers,
              });
            }
          );
    
        const deleteOffers = catchAsynch(
            async (req: Request, res: Response, next: NextFunction) => {
              const { id } = req.params; // ✅ get division ID from URL
          
              const deletedOffer = await offersService.deleteOffer(id as string);
          
              // ✅ send proper response
              sendResponse(res, {
                success: true,
                statusCode: httpStatus.OK, // use 200 for update
                message: "Division deleted successfully",
                data: deletedOffer,
              });
            }
          );
          


export const offersControllers={
    createOffers
}