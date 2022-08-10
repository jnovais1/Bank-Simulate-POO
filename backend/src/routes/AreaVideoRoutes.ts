import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaVideoController } from "../Modules/Areas/area_video/CreateAreaVideo/CreateAreaVideoController";
import { DeleteAreaVideoByIDController } from "../Modules/Areas/area_video/DeleteAreaVideo/DeleteAreaVideoController";
import { ReadAreaVideoController } from "../Modules/Areas/area_video/ReadAreaVideo/ReadAreaVideoController";
import { UpdateAreaVideoController } from "../Modules/Areas/area_video/UpdateAreaVideo/UpdateAreaVideoController";

const areaVideoRoutes = Router();

const createAreaVideoController = new CreateAreaVideoController();
const readAreaVideoById = new ReadAreaVideoController();
const deleteAreaVideoByID = new DeleteAreaVideoByIDController();
const updateAreaVideo = new UpdateAreaVideoController();

areaVideoRoutes.get('/:id', readAreaVideoById.handle);
areaVideoRoutes.post('/:id/:id2', ensureAuthenticateUser, createAreaVideoController.handle);
areaVideoRoutes.put('/:id', ensureAuthenticateUser, updateAreaVideo.handle);
areaVideoRoutes.delete('/:id/:id2', ensureAuthenticateUser, deleteAreaVideoByID.handle);

export { areaVideoRoutes };