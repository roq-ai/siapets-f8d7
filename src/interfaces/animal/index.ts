import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnimalInterface {
  id?: string;
  microchip_number: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AnimalGetQueryInterface extends GetQueryInterface {
  id?: string;
  microchip_number?: string;
  user_id?: string;
}
