import { filter as fuzzyFilter, FilterOptions } from 'fuzzy';

export default function filter<T>(
  query: string,
  list: T[],
  keyBuilder?: (input: T) => string
) {
  if (!query) {
    return list;
  }

  const options: FilterOptions<T> = {
    extract: keyBuilder,
  };

  return fuzzyFilter<T>(query, list, options).map((item) => item.original);
}
