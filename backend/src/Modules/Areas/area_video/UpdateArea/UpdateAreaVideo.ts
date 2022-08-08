import { isDataView } from "util/types";
import { prisma } from "../../../../database/PrismaClient";

interface IUpdateAreaVideo {
    area_id: number;
    video_id: number[];
    order: number;
    user_id: number;
}
export class UpdateAreaVideo {
    async execute({ area_id, video_id, order, user_id }: IUpdateAreaVideo) {
        const UpdateAreaVideo = await prisma.area_video.deleteMany({
            where: { area_id }
        });
        console.log(UpdateAreaVideo)
        const UpdatedAreaVideo = await prisma.area_video.create({
            data: {
                area_id,
                video_id,
                order,
                user_id
            }
        });
        return(UpdatedAreaVideo);
    }
}