import { stockItems } from '../../fixture/stockItems';

export async function fetchStockItemList() {
  return new Promise((resolve, _) => setTimeout(() =>
    resolve({
      result: true,
      data: stockItems,
    }), 500));
}
