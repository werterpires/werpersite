import { CreatePersonDto } from '../../shared/people/types';
import { IOccupationPermission } from '../../shared/sharedTypes';

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
