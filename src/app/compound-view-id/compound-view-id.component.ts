import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-compound-view-id',
  templateUrl: './compound-view-id.component.html',
  styleUrls: ['./compound-view-id.component.css'],
})
export class CompoundViewIdComponent implements OnInit, DoCheck {
  loading = false;
  compound: any = {};
  updateValue: any = false;
  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    console.log(this.router.snapshot.queryParams);
    this.compound = this.router.snapshot.queryParams;
    this.loading = false;
  }
  ngDoCheck() {}
  update() {
    this.updateValue = !this.updateValue;
  }
  updateData() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let description = (<HTMLInputElement>document.getElementById('description'))
      .value;
    let id = Number(this.compound.id);
    let source = (<HTMLInputElement>document.getElementById('source')).value;
    this.http
      .patch('https://compound-backend.onrender.com/compound', {
        id: id,
        CompoundName: name,
        CompoundDescription: description,
        strImageSource: source,
      })
      .subscribe(() => {
        console.log('data updated');
        this.route.navigate(['..']);
      });
  }
}
