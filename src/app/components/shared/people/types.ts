export interface CreatePersonDto {
  name: string;
  personType: 'f' | 'j';

  surname?: string | null;
  cpf?: string | null;
  cnpj?: string | null;
  birthDate?: string | null;
  address?: string | null;
  number?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  complement?: string | null;
  neighborhood?: string | null;
  email?: string | null;
  phone?: string | null;
  cellphone?: string | null;
}
