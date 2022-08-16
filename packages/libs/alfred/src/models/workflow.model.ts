import { ICONS } from '../constants';
import { SUB_ACTION_SEPARATOR } from '../constants/FILTER.constant';
import { ItemFeedback } from '../interfaces';
import { clearItemsData, saveItemData } from '../utils';
import Item from './item.model';
import Storage from './storage.model';

export default class Workflow {
  static readonly globalWorkflow = new Workflow();

  private _items: ItemFeedback[] = [];
  private _name = 'AlfredWfNodeJs';

  clearItems() {
    this._items = [];
    clearItemsData;
  }

  addItem(item: Item) {
    saveItemData(item);

    if (item.hasSubItems) {
      item.autocomplete = `${item.title}${SUB_ACTION_SEPARATOR}`;
    }

    this._items.push(item.feedback());
  }

  feedback() {
    const usage = Storage.globalStorage.get('usage') || {};
    const items = [...this._items];

    for (const item of items) {
      const { title } = item;
      item.count = usage[title] ? 0 - usage[title] : 0;
    }

    items.sort((item1, item2) => item1.count - item2.count);

    for (const item of items) {
      delete item.count;
    }

    return JSON.stringify({ items });
  }

  info(title: string, subtitle: string) {
    this.clearItems();
    this.addItem(
      new Item({
        title,
        subtitle,
        icon: { path: ICONS.INFO },
      })
    );

    return this.feedback();
  }

  warning(title: string, subtitle: string) {
    this.clearItems();
    this.addItem(
      new Item({
        title,
        subtitle,
        icon: { path: ICONS.WARNING },
      })
    );

    return this.feedback();
  }

  error(title: string, subtitle: string) {
    this.clearItems();
    this.addItem(
      new Item({
        title,
        subtitle,
        icon: { path: ICONS.WARNING },
      })
    );

    return this.feedback();
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}
