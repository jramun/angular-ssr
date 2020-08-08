import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-base-edit-header',
  templateUrl: './base-edit-header.component.html',
  styleUrls: ['./base-edit-header.component.css']
})
export class BaseEditHeaderComponent implements OnInit {

  public constructor(private route: ActivatedRoute,
                     private router: Router) {
  }

  public ngOnInit(): void {
  }

  // ba zadan roye dokme back be in function miad k ino rout mikone b hamonjaeei kobod
  public onBack(): void {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
