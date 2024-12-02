"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRoute = void 0;
const express_1 = __importDefault(require("express"));
const client_controller_1 = require("./client.controller");
const multer_1 = require("../../middlewares/multer");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const client_validation_1 = require("./client.validation");
const router = express_1.default.Router();
exports.ClientRoute = router;
router.post("/signUp", (0, validateRequest_1.default)(client_validation_1.ClientValidation.signUpZodSchema), client_controller_1.ClientController.createClient);
router.get("/", client_controller_1.ClientController.getClients);
router.patch("/profile/:id", multer_1.multerUpload.single("projectListing"), (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT), client_controller_1.ClientController.updateSingleClient);
router.get("/:id", client_controller_1.ClientController.getClientById);
