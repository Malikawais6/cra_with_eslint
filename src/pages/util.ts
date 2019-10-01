export const extractModuleNameFromPath = (path: string): string => {
  const name: string = path.split("/")[1];

  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const extractModuleUrlFromPath = (path: string): string => {
  return path.split("/")[1];
};
