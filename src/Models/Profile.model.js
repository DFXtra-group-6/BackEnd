import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    user: { type: String, default: 'Hulk Hogan' },
    name: { type: String },
    pronouns: { type: String },
    tagline: { type: String },
    overview: { type: String },
    socials: {
        youtube: { type: String, default: 'https://youtube.com' },
        github: { type: String, default: 'https://github.com' },
        linkedin: { type: String, default: 'https://linkedin.com' }
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

        identity: { type: Boolean, default: false },
        disclosure: { type: Boolean, default: false },
        credit: { type: Boolean, default: false },
        rightToWork: { type: Boolean, default: false },
        education: { type: Boolean, default: false }
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