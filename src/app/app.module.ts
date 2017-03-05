import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {PackagesComponent} from "./packages.component";


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        PackagesComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
