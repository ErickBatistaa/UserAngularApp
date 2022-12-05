import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../model/user-model';
import { UsersService } from '../shared/users-services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(
    public service: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.userId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.getUserList();
        this.toastr.success('Submitted successfully', 'Usuário cadastrado com sucesso!')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.getUserList();
        this.toastr.info('Updated successfully', 'Usuário atualizado com sucesso!')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UserModel();
  }
}
