import { Router } from "express";
import { verifyAuth } from "../../middlewares/CheckAuth";
import { Role } from "../User/User.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import { offersControllers } from "./Watheta.controllers";



const router =Router()

// router.post('/create',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),offersControllers.createOffers)
router.post('/create',offersControllers.createOffers)
// router.patch('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),validateRequest(updateDivisionZodSchema),divisionControllers.updateDivision)
// router.delete('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),divisionControllers.deleteDivision)
// router.get('/',divisionControllers.getDivision)

export const OffersRoute= router
