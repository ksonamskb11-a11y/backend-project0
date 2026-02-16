import mongoose, {Schema} from 'mongoose';

const adminSchema = new Schema({
    adminName:{
        type: String,
        required: [true, 'Admin Name is required'],
        trim: true,
        upperCase: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: [true, 'Email must be Unique'],
        lowerCase: true,
    },
    password:{
        type: String,
        required: [true, 'Pass is required']
    },
    image:{
        type: String
    },
    isActive:{
        type: Boolean,
        default: false,
    }
}, 
{timestamps:true}
);

export const Admin = mongoose.model('Admin', adminSchema);