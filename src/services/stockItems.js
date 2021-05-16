import { stockItems } from '../../fixture/stockItems';

// eslint-disable-next-line import/prefer-default-export
export async function fetchStockItemList() {
  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: stockItems,
  }), 1));
}
