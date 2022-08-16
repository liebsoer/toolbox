import { IconType, ItemModType } from '../types';
import ItemMod from './item-mod.interface';

export default interface ItemData {
  uid?: string;
  title?: string;
  subtitle?: string;
  arg?: string;
  icon?: {
    path: IconType;
  };
  valid?: boolean;
  autocomplete?: string;
  type?: string;
  quicklookurl?: string;
  text?: string;
  mods?: {
    [key in ItemModType]: ItemMod;
  };
  data?: {
    [key: string]: unknown;
  };
  hasSubItems?: boolean;
}
