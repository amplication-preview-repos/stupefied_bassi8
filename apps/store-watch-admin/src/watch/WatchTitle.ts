import { Watch as TWatch } from "../api/watch/Watch";

export const WATCH_TITLE_FIELD = "name";

export const WatchTitle = (record: TWatch): string => {
  return record.name?.toString() || String(record.id);
};
