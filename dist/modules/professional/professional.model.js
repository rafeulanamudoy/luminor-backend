"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetireProfessional = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const service_1 = require("../../enums/service");
const client_1 = require("../../enums/client");
// Define the main Professional schema
const RetireProfessionalSchema = new mongoose_1.default.Schema({
    retireProfessional: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User", // Refers to the User model (this can be customized)
        required: true,
    },
    // Retired Professional account fields
    dateOfBirth: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    linkedinProfile: { type: String },
    previousPositions: { type: [String], required: true },
    references: [
        {
            emailOrPhone: { type: String, required: true },
            name: { type: String, required: true },
        },
    ],
    educationalBackground: { type: String, required: true },
    relevantQualification: {
        type: String,
        required: true,
    },
    technicalSkill: { type: String, required: true },
    cvOrCoverLetter: {
        fileName: { type: String, default: null },
        filePath: { type: String, default: null },
        fileType: { type: String, default: null },
    },
    // Retired professional profile (optional)
    location: { type: String, default: null },
    bio: { type: String, default: null },
    description: { type: String, default: null },
    expertise: { type: [String], enum: service_1.ENUM_SERVICE_PREFERENCE, default: [] },
    industry: { type: [String], enum: client_1.ENUM_INDUSTRY_TYPE, defaul: [] },
    availability: { type: String, default: null },
    preferedProjects: { type: String, default: null },
    hourlyRate: { type: String, default: null },
    workSample: {
        fileName: { type: String, default: null },
        filePath: { type: String, default: null },
        fileType: { type: String, default: null },
    },
    reviews: [
        {
            user: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            rating: { type: Number, required: true, min: 1, max: 5 },
            feedBack: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    averageRating: { type: Number, default: 0 },
}, { timestamps: true });
exports.RetireProfessional = mongoose_1.default.model("RetireProfessional", RetireProfessionalSchema);