import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,      
    },
    created: {
        type: Date,
        default: Date.now,
    }
});

interface IUser {
    email: string;
    password: string;
    phone: string;
    create: Date;
}

export interface IUserModel extends IUser, mongoose.Document { }

export const User = mongoose.model<IUserModel>("User", UserSchema);