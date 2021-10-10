import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-add-wine-modal',
  templateUrl: 'add-wine-modal.component.html',
  styleUrls: ['./add-wine-modal.component.scss']
})
export class AddWineModalComponent implements OnInit {

  submitForm: FormGroup;

  wine = new Wine();

  ngOnInit(): void {
    let name = new FormControl(this.wine.name, Validators.required);
    let producer = new FormControl(this.wine.producer, Validators.required);
    let type = new FormControl(this.wine.type, Validators.required);
    let rating = new FormControl(this.wine.rating, [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)]);
    let notes = new FormControl(this.wine.notes, Validators.required);
    let description = new FormControl(this.wine.description, [Validators.required, Validators.maxLength(10)]);
  

    
    this.submitForm = new FormGroup({
      name: name,
      producer: producer,
      type: type,
      rating: rating,
      notes: notes,
      description: description
    })}

    submit(formValues: any) {
      if (this.submitForm.valid) {
        //this.dataService.addWine(new Wine());
        console.log(formValues.value)
      }
    }

}