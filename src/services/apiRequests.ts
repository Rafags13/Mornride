import api from "./api";

export function getData(route: string, params?: any) {
  return api.get(route, {params});
}

export function postData(route: string, body: any) {
  return api.post(route, body);
}