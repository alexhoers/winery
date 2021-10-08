import { Injectable } from "@angular/core";
import { User } from "src/app/shared/models/user";

@Injectable()
export class AuthService {
    currentUser: User;
    loginUser(email: string, password: string) {
        this.currentUser = new User({
            id: 1,
            email: "test@aleh.dk",
            firstName: "Alex",
            lastName: "Hørsholt"
        })
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}