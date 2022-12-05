export class UserModel {
    userId: number=0;
    nome: string='';
    sobrenome: string='';
    email: string='';
    dataNascimento: string='';
    escolaridade: any = {infantil: 1, fundamental: 2, medio: 3, superior: 4};
}