import api from "./api";

export function getData(route: string) {
  return api.get(route);
}