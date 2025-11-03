import data from "../content/data.json";

export const getData = (name: string) => {
  return data[name as keyof typeof data] || null;
};
