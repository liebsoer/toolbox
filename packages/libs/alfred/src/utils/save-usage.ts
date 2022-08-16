import { USAGE_KEY } from '../constants/STORAGE.constant';
import { Storage } from '../models';
export default function saveUsage(query, itemTitle) {
  if (!query) {
    const usage = Storage.globalStorage.get(USAGE_KEY) || {};

    const count = usage[itemTitle] || 0;
    usage[itemTitle] = count + 1;

    Storage.globalStorage.set(USAGE_KEY, usage);
  }
}
