export interface IRole {
  roleId: number;
  roleName: string;
  roleDescription: string;
}

export interface IUser {
  userId: number;
  personId: number;
  passwordHash: string;
  active: boolean;
  person: IPerson;
}

export interface IPerson {
  personId: number;
  name: string;
  surname: string | null;
  personType: 'f' | 'j';
  cpf: string | null;
  cnpj: string | null;
  birthDate: string | null;
  address: string | null;
  number: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  complement: string | null;
  neighborhood: string | null;
  email: string | null;
  phone: string | null;
  cellphone: string | null;
}

export interface IUserFromJwt {
  userId: number;
  name: string;
  active: boolean;
  companies: number[];
  roles: ERoles[];
  subscription: number;
  ocupationsPermissions: IOccupationPermission[];
}

export interface IOccupationPermission {
  occupationId: number;
  permissionId: number;
}

export enum ERoles {
  SUPERADMIN = 'superadmin',
  SUBSCRIBER = 'subscriber',
  MANAGER = 'manager',
  AGENT = 'agent',
}
