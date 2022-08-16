import {
  clear,
  getItem,
  init,
  InitOptions,
  removeItem,
  setItem,
} from 'node-persist';
import { StorageDatum } from '../interfaces';

export default class Storage {
  static readonly globalStorage = new Storage();

  private options: InitOptions = {};
  private initialized = false;
  private initPromise: Promise<void>;

  constructor() {
    this.initPromise = new Promise((resolve) => {
      init().then((options) => {
        this.options = options;
        resolve();
      });
    });
  }

  async set(key: string, value: unknown, ttl?: number) {
    const obj: StorageDatum = {
      data: value,
      timestamp: new Date().getTime(),
      ttl,
    };

    return setItem(key, obj);
  }

  async get(key: string) {
    const { ttl, timestamp, data } = (await getItem(key)) as StorageDatum;
    if (data) {
      // if not ttl => return obj
      if (!ttl) {
        return data;
      }
      // check ttl
      const now = new Date().getTime();
      if (now - timestamp < ttl) {
        return data;
      }
      await removeItem(key);
    }

    return undefined;
  }

  async remove(key: string) {
    if (await getItem(key)) {
      await removeItem(key);
    }
  }

  async clear() {
    await clear();
  }

  getOptions() {
    return { ...this.options };
  }

  isInitialized() {
    return this.initialized;
  }

  waitForInitialization() {
    return this.initPromise;
  }

  static getGlobalStorage() {
    return Storage.globalStorage;
  }
}
