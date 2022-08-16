export default function updateArg(
  data: string | { arg: object; variables?: object }
) {
  if (typeof data === 'string') {
    return data;
  }

  return JSON.stringify({
    alfredworkflow: {
      arg: data.arg,
      variables: data.variables,
    },
  });
}
