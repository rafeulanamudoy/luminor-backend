import mongoose from "mongoose"

export type IProfessionalProfile={
    name:{
        firstName:string,
        lastName:string
    },
    phoneNumber:string
    retiredProfessional:mongoose.Schema.Types.ObjectId;
    location:string;
    bio:string;
    description:string;
    skills:string;
    availability:boolean;
    projects:[preferredProjects:string,hourlyRate:string,workSample?:string]
}