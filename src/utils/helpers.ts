export const convertMapToObject = (
  map: Map<string, { key: string; value: string }>
) => {
  const obj: { [key: string]: string } = {};

  map.forEach(({ key, value }) => {
    obj[key] = value;
  });

  return obj;
};
