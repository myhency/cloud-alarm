import { testDate } from '../../../fixture/datetime';

import { signProgressStatus } from '../../../fixture/dashboard';

export async function fetchSignProgressStatus(date) {
  // TODO: IMPL
  if (date === testDate) {
    return {
      result: true,
      data: signProgressStatus,
    };
  }
  return {
    result: false,
    data: null,
  };
}

export async function aaa() {
  // TODO: delete or IMPL
}
