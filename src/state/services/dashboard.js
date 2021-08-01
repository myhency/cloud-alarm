import { signProgressStatus } from '../../../fixture/dashboard';

export async function fetchSignProgressStatus() {
  // TODO: IMPL
  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: signProgressStatus,
  }), 500));
}

export async function aaa() {
  // TODO: delete or IMPL
}
