"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paypalRoute = void 0;
const express_1 = __importDefault(require("express"));
const paypal_controller_1 = require("./paypal.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../enums/user");
const router = express_1.default.Router();
router.post("/paypal-payment-professional-to-client", (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT), paypal_controller_1.paypalController.paypalPayementClientToProfessional);
exports.paypalRoute = router;
