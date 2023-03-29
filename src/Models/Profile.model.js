import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    user: String,
    name: { type: String },
    pronouns: { type: String },
    tagline: { type: String },
    overview: { type: String },
    socials: {
        youtube: { type: String },
        github: { type: String },
        linkedin: { type: String }
    },
    experience: [
        {
            employer: { type: String },
            position: { type: String },
            dates: { type: String },
            skills: { type: String }
        }
    ],
    trainingProgress: [
        {
            name: { type: String },
            challenge: { type: String },
            result: { type: String }
        }
    ],
    feedback: [
        {
            user: { type: String },
            userRole: { type: String },
            text: { type: String }
        }
    ],
    personalityType: {
        code: { type: String },
        description: { type: String }
    },
    certifications: [
        { type: String }
    ],
    qualifications: [
        {
            institution: { type: String },
            level: { type: String },
            description: { type: String }
        }
    ],
    dueDiligenceChecks: {
        disclosure: { type: Boolean },
        identity: { type: Boolean },
        credit: { type: Boolean },
        rightToWork: { type: Boolean },
        education: { type: Boolean }
    },
    interests: [
        {
            name: { type: String },
            type: { type: String }
        }
    ],
    keyTools: [
        { type: String }
    ]
});

const Profile = mongoose.model(`Profile`, profileSchema);

export default Profile;