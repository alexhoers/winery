import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-collapsible-well',
    template: `
    <div class="row"> 
            <div class="col-6 col-lg-3 white">
                <img src="/assets/icons/chevron-down.svg" [ngClass]="{'start': !visible, 'end': visible}" (click)="toggleContent()" width="30" height="30"> 
                {{ date | date:'medium' }} 
            </div>
            <div class="col-6 col-lg-3 white">
                {{title}} 
            </div>
            <div class="col-3 white">
                test {{ visible }}
            </div>
            <div class="col-3 white">

        </div>
            <div (click)="toggleContent()"  [ngClass]="{'box': visible, 'boxclicked': !visible}">
                <ng-content> </ng-content>
            </div>
        </div>
        
    
    `,
    styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent {
    @Input() title: string;
    @Input() date: Date;
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
        
    }
}