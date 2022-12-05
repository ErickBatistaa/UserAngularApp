import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../model/user-model';
import { UsersService } from '../shared/users-services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  constructor(
    public service: UsersService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.getUserList();
  }

  populateForm(selectedData: UserModel) {
    this.service.formData = Object.assign({}, selectedData);
  }

  onDelete(userId: number) {
    if(confirm('Você quer mesmo deletar esse usuário ?')) {
      this.service.deleteUser(userId)
        .subscribe(
          res => {
            this.service.getUserList();
            this.toastr.error('Usuário deletado com sucesso !');
          },
          err => { console.log(err) }
        )
    }
  }
}
