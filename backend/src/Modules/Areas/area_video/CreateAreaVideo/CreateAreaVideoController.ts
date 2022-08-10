import { Request, Response } from "express";
import { CreateAreaVideo } from "./CreateAreaVideo";

export class CreateAreaVideoController { 
    async handle(req: Request, res: Response) {
        const { id, id2 } = req.params;
        const { user_id, order} = req.body;

        let area_id: number;
        area_id = Number(id);
        let video_id: number;
        video_id = Number(id2);

        const createAreaVideo = new CreateAreaVideo();
        const result = await createAreaVideo.execute({
            user_id,
            video_id,
            area_id,
            order
        });
        return res.json("Área cadastrada. " + result);
    }
}