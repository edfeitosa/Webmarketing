import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Insert } from '../../model/insert';
import { InsertService } from '../../services/insert.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public formInsert: Insert = new Insert();

  constructor(
    private routes: Router,
    private insertService: InsertService
  ) { }

  ngOnInit() {
    let control: FormControl = new FormControl('', Validators.requiredTrue);
    this.form.addControl(this.formInsert.mensagem, control);
  }

  onSubmit() {
    console.log(this.formInsert);
    this.insertService.insertCrud(this.formInsert)
    .subscribe(
      retorno => {
        console.log("Chegou aqui");
      },
      error => console.log(error)
    );
  }

}
