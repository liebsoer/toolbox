import { ItemData, ItemMod } from '../interfaces';
import { IconType, ItemModType } from '../types';
import { removeEmptyProperties } from '../utils';
import ItemFeedback from '../interfaces/item-feedback.interface';
import { ICONS } from '../constants';

export default class Item implements ItemData {
  uid = '';
  title = '';
  subtitle = '';
  arg = '';
  icon: {
    path: IconType;
  };
  valid = true;
  autocomplete = '';
  type = '';
  quicklookurl = '';
  text = '';
  mods: {
    [key in ItemModType]: ItemMod;
  };
  data = {};
  hasSubItems: false;

  constructor(data: ItemData) {
    removeEmptyProperties(data);

    for (const [key, value] of Object.entries(data)) {
      this[key] = value;
    }
  }

  feedback() {
    const item = removeEmptyProperties({
      uid: this.uid,
      arg: this.arg,
      valid: this.valid === true ? 'YES' : 'NO',
      autocomplete: this.autocomplete,
      title: this.title,
      subtitle: this.subtitle,
      type: this.type,
      icon: this.icon,
      quicklookurl: this.quicklookurl,
      text: this.text,
      mods: this.mods,
    } as ItemFeedback) as ItemFeedback;

    return item;
  }
}
