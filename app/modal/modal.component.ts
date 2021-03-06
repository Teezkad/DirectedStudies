import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: "modal",
    moduleId: module.id,
    templateUrl: "./modal.component.html"
})
export class ModalComponent {

    public qid: string;
    public frameworks: string;

    public constructor(private params: ModalDialogParams) {
        this.frameworks = "";
    }

    public sendMessage(){
        return this.frameworks;
    }
    public close(res: string) {
        this.params.closeCallback(res);
    }

}