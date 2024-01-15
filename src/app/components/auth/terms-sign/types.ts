import { ITermType } from '../../registers/types';
import { IRole } from '../../shared/sharedTypes';

export interface ITerm {
  termId: number;
  termTypeId: number;
  roleId: number;
  termText: string;
  termDescription: string;
  termVersion: number;
  termType: ITermType;
  role: IRole;
}

export interface ITermSign {
  termId: number;
  accept: boolean;
}
