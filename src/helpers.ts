export const getShortAddress = (address: string) => {
  const first = address.slice(0, 5);
  const last = address.slice(address.length - 4, address.length);
  return `${first}...${last}`;
};
