import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { AdminServices } from './admin.service';

const blockedUserByAdmin = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  await AdminServices.blockedUserByAdminIntoDB(req.user, userId);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: 200,
  });
});
const deletedBlogByAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await AdminServices.deletedBlogByAdminIntoDB(req.user, id);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});
export const AdminControllers = {
  blockedUserByAdmin,
  deletedBlogByAdmin,
};
