import { ItemMod } from '.';
import { ItemModType } from '../types';

export default interface ItemFeedback {
  uid: string;
  arg: string;
  valid: 'YES' | 'NO';
  autocomplete: string;
  title: string;
  subtitle: string;
  type: string;
  icon: {
    path: string;
  };
  quicklookurl: string;
  text: string;
  mods: {
    [key in ItemModType]: ItemMod;
  };
  count?: number;
}
