import { STORAGE } from '../constants';
import { Item, Storage } from '../models';

export default function saveItemData(item: Item) {
  if (item.data) {
    const wfData = Storage.globalStorage.get(STORAGE.STORAGE_KEY) || {};
    wfData[item.title] = item.data;
    Storage.globalStorage.set(STORAGE.STORAGE_KEY, wfData);
  }
}
