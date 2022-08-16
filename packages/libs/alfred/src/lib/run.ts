import ActionHandler from '../models/action-handler.model';

export default function run(action: string, query: string) {
  ActionHandler.globalHandler.handle(action, query);
}
