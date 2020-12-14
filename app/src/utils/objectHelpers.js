export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObgProps
) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObgProps };
    }
    return u;
  });
};
