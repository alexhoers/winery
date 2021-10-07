import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserRoutes } from './user.routes';
import { UserLoginComponent } from "./user-login.component";
import { FormsModule } from "@angular/forms";

// Feature module / lazily loaded module
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [
        UserLoginComponent
    ],
    providers: [

    ]
})
export class UserModule {

}