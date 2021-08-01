import { documentList } from '../../../fixture/documents';

export async function fetchDocumentList() {
  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: documentList,
  }), 500));
}

export async function fetchDocumentDetail(id) {
  return null;
}
