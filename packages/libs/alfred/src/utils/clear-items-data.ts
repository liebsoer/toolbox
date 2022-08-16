import { STORAGE } from '../constants';
import { Storage } from '../models';

export default function clearItemsData() {
  return Storage.globalStorage.remove(STORAGE.STORAGE_KEY);
}
