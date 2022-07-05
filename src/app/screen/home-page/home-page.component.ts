import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  myForm = this.fb.group({
    "search": [, Validators.required]
  });
  constructor(private fb: FormBuilder,
              private rt: Router) { }

  ngOnInit(): void {
  }

  search() {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    // Transform form data to string without spaces
    // Send to page of search results
    this.rt.navigateByUrl('/results/' + this.myForm.value.search);
  }

}
