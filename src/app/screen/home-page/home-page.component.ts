import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  myForm = this.fb.group({
    "search": [, Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  search() {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    // Send to page of search results

  }

}
