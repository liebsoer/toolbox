import { exec } from 'child_process';
import { format } from 'util';
import toUndefinedIfNull from './to-undefined-if-null';
/**
 * Set wf variable
 * @param key variable name
 * @param value variable value
 * @param callback callback(err)
 */
export function set(key, value, callback) {
  if (key !== undefined && value !== undefined) {
    // set variable to plist
    const setCommand = format(
      '/usr/libexec/PlistBuddy -c "Set :variables:%s "%s"" info.plist',
      key,
      value
    );
    exec(setCommand, (err) => {
      // if variable is not in plist => add it to plist
      if (err) {
        const addCommand = format(
          '/usr/libexec/PlistBuddy -c "Add :variables:%s string "%s"" info.plist',
          key,
          value
        );
        exec(addCommand, (e) => {
          if (callback) {
            callback(toUndefinedIfNull(e));
          }
        });
      } else if (callback) {
        callback(undefined);
      }
    });
  }
}

/**
 * @param key variable name
 * @param callback callback(err, value)
 * @return wf variable
 */
export function get(key, callback) {
  const getCommand = format(
    '/usr/libexec/PlistBuddy -c "Print :variables:%s" info.plist',
    key
  );
  exec(getCommand, (err, stdout) => {
    if (err) {
      callback(err);
    } else {
      const value = stdout.trim();
      callback(undefined, value);
    }
  });
}

/**
 * Remove a variable from wf variables
 * @param key variable name
 * @param callback callback(err)
 */
export function remove(key, callback) {
  const getCommand = format(
    '/usr/libexec/PlistBuddy -c "Delete :variables:%s" info.plist',
    key
  );
  exec(getCommand, (err) => {
    if (callback) {
      callback(toUndefinedIfNull(err));
    }
  });
}

/**
 * Use with caution!!!
 * clear all workflow variables
 * @param callback callback(err)
 */
export function clear(callback) {
  const clearCommand =
    '/usr/libexec/PlistBuddy -c "Delete :variables" info.plist';
  exec(clearCommand, (err) => {
    if (callback) {
      callback(toUndefinedIfNull(err));
    }
  });
}
