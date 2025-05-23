"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllers = void 0;
const catchAsync_1 = __importDefault(require("../../uitls/catchAsync"));
const sendResponse_1 = __importDefault(require("../../uitls/sendResponse"));
const admin_service_1 = require("./admin.service");
const blockedUserByAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    yield admin_service_1.AdminServices.blockedUserByAdminIntoDB(req.user, userId);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'User blocked successfully',
        statusCode: 200,
    });
}));
const deletedBlogByAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield admin_service_1.AdminServices.deletedBlogByAdminIntoDB(req.user, id);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Blog deleted successfully',
        statusCode: 200,
    });
}));
exports.AdminControllers = {
    blockedUserByAdmin,
    deletedBlogByAdmin,
};
