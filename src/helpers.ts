export const getShortAddress = (address: string) => {
  const first = address.slice(0, 5);
  const last = address.slice(address.length - 4, address.length);
  return `${first}...${last}`;
};

const mobileMaxWidth: number = 850;

export const checkOnMobileOnly = (): boolean => {
  return window.screen.width < mobileMaxWidth;
};

export const checkOnDesktopOnly = (): boolean => {
  return window.screen.width >= mobileMaxWidth;
};
