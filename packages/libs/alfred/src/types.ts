import {
  ACCOUNT,
  BURN,
  CLOCK,
  COLOR,
  EJECT,
  ERROR,
  FAVORITE,
  GROUP,
  HELP,
  HOME,
  INFO,
  NETWORK,
  NOTE,
  SETTINGS,
  SWIRL,
  SWITCH,
  SYNC,
  TRASH,
  USER,
  WARNING,
  WEB,
} from './constants/ICONS.constant';

export type IconType =
  | typeof ACCOUNT
  | typeof BURN
  | typeof CLOCK
  | typeof COLOR
  | typeof EJECT
  | typeof ERROR
  | typeof FAVORITE
  | typeof GROUP
  | typeof HELP
  | typeof HOME
  | typeof INFO
  | typeof NETWORK
  | typeof NOTE
  | typeof SETTINGS
  | typeof SWIRL
  | typeof SWITCH
  | typeof SYNC
  | typeof TRASH
  | typeof USER
  | typeof WARNING
  | typeof WEB;

export type ItemModType = 'cmd' | 'alt' | 'ctrl' | 'shift';
