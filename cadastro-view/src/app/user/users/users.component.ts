import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  products: User[] = [];
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: UserService) { }

  ngOnInit(): void {
    this.service.listAll().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

  onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onEdit(user: User): void {
    console.log(user);
  }

  onRemove(user: User): void {
    console.log(user);
  }

}
