import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    const text_transform = (this.myForm.controls["search"].value! as string).replace(/\s/g, '%20');
    // Send to page of search results
    this.rt.navigateByUrl('/results/' + text_transform);
  }

}
