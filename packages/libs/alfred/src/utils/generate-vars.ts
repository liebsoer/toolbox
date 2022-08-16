import updateArg from './update-arg';

export default function generateVars(
  data: string | { arg: object; variables?: object }
) {
  return updateArg(data);
}
