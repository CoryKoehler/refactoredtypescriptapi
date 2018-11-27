import { User } from '../models/user';

export class UserService { 

    public getUserByEmail (email: string): any {           
        User.findById(email, (err, user) => {
            if(err){
                throw new Error('Unable to find user: ${err}');
            }
            return user;
        });
    }

    public addUser (email: string, phone: string, password: string) {           
        var user = new User({  email, phone, password })
        user.save();
        if(user.errors){
            throw new Error('Unable to add user: ${err}');
        }    
    }
}