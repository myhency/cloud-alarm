import { stockItems } from '../../fixture/stockItems';

export default async function fetchStockItemList() {
  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: stockItems,
  }), 1));
}
