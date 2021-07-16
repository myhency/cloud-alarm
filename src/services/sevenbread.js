/* eslint-disable import/prefer-default-export */
import { sevenBread } from '../../fixture/sevenbread';

export async function fetchSevenBreadList() {
  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: sevenBread,
  }), 500));
}
