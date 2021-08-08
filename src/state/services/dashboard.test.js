import { fetchSignProgressStatus } from './dashboard';

import { signProgressStatus } from '../../fixture/dashboard';

describe('fetchSignProgressStatus', () => {
  it('request sign progress data to API server', async () => {
    const { result, data } = await fetchSignProgressStatus();

    expect(result).toBe(true);
    expect(data).toBe(signProgressStatus);
  });
});
