export default function toUndefinedIfNull(variable: unknown) {
  return variable === null ? undefined : variable;
}
