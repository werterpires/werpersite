import { CreatePersonDto } from '../../shared/people/types';

export interface CreateSignerUserDto {
  name: string;
  surname: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  companyPerson: CreatePersonDto;
  personType: 'f';
  phone?: string;
  occupationsPermissions: IOccupationPermission[];
  signedTermsIds: number[];
}

export interface IOccupationPermission {
  occupationId: number;
  permissionId: number;
}
