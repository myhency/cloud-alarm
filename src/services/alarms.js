import { alarms } from '../../fixture/alarms';

export async function fetchAlarmList() {
  return new Promise((resolve, _) => setTimeout(() =>
    resolve({
      result: true,
      data: alarms,
    }), 500));
}

export async function fetchAlarmDetail(id) {
  return null;
}