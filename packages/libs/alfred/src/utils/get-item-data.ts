import { STORAGE_KEY } from '../constants/STORAGE.constant';
import { Storage } from '../models';

export default function getItemData(itemTitle: string) {
  itemTitle = typeof itemTitle === 'string' ? itemTitle.normalize() : itemTitle;
  const wfData = Storage.globalStorage.get(STORAGE_KEY);
  return wfData ? wfData[itemTitle] : undefined;
}
