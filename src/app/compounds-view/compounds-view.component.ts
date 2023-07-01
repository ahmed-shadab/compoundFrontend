import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compounds-view',
  templateUrl: './compounds-view.component.html',
  styleUrls: ['./compounds-view.component.css'],
})
export class CompoundsViewComponent implements OnInit {
  title = 'compound';
  compounds = null;
  loading = true;
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/compound').subscribe((value: any) => {
      this.loading = false;
      this.compounds = value;
    });
  }
  execute(compound: any) {
    this.route.navigate([`/compound/${compound.id}`], {
      queryParams: {
        id: compound.id,
        strImageSource: compound.strImageSource,
        CompoundName: compound.CompoundName,
        CompoundDescription: compound.CompoundDescription,
      },
    });
  }
}
