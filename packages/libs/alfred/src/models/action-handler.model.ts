import { EventEmitter } from 'events';
import { SUB_ACTION_SEPARATOR } from '../constants/FILTER.constant';
import { getItemData, saveUsage } from '../utils';

export default class ActionHandler {
  static readonly globalHandler = new ActionHandler();

  private readonly eventEmitter = new EventEmitter();

  /**
   * Register action handler
   */
  onAction(action: string, handler: (...args: unknown[]) => void) {
    if (!action || !handler) {
      return;
    }
    this.eventEmitter.on(`action-${action}`, handler);
  }

  /**
   * Register menu item selected handler
   */
  onMenuItemSelected(action: string, handler: (...args: unknown[]) => void) {
    if (!action || !handler) {
      return;
    }
    this.eventEmitter.on(`menuItemSelected-${action}`, handler);
  }

  /**
   * Handle action by delegate to registered action/menuItem handlers
   */
  handle(action: string, query: string) {
    if (!query || query.indexOf(SUB_ACTION_SEPARATOR) === -1) {
      // handle action
      this.eventEmitter.emit(`action-${action}`, query);
    } else {
      // handle sub action
      const tmp = query.split(SUB_ACTION_SEPARATOR);
      const selectedItemTitle = tmp[0].trim();
      query = tmp[1].trim();

      saveUsage(query, selectedItemTitle);

      this.eventEmitter.emit(
        `menuItemSelected-${action}`,
        query,
        selectedItemTitle,
        getItemData(selectedItemTitle)
      );
    }
  }

  /**
   * Unregister all action handlers
   */
  clear() {
    this.eventEmitter.removeAllListeners();
  }
}
