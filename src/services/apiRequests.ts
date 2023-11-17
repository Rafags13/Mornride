import api from "./api";

export function getData(route: string, params?: any) {
  return api.get(route, {params});
}