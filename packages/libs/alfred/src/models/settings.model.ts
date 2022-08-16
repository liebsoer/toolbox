import { getPassword, setPassword } from 'keychain';
import { SETTINGS_KEY } from '../constants/STORAGE.constant';
import Storage from './storage.model';
import Workflow from './workflow.model';

export default class Settings {
  set(key: string, value: string) {
    const settings = Storage.globalStorage.get(SETTINGS_KEY) || {};
    settings[key] = value;
    Storage.globalStorage.set(SETTINGS_KEY, settings);
  }

  get(key: string) {
    const settings = Storage.globalStorage.get(SETTINGS_KEY);
    if (settings) {
      return settings[key];
    }
    return undefined;
  }

  remove(key: string) {
    const settings = Storage.globalStorage.get(SETTINGS_KEY);
    if (settings) {
      delete settings[key];
    }
  }

  clear() {
    Storage.globalStorage.remove(SETTINGS_KEY);
  }

  setPassword(username: string, password: string) {
    setPassword(
      {
        account: username,
        service: Workflow.globalWorkflow.name,
        password,
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

  getPassword(username: string, callback: (err: Error, data: unknown) => void) {
    getPassword(
      {
        account: username,
        service: Workflow.globalWorkflow.name,
      },
      callback
    );
  }
}
