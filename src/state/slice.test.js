import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import locales from '../locales.json';

import reducer, {
  setAccessToken,
  setSignProgress,
  setMobileOpen,
  setLocale,
  setContacts,
  setContactDetail,
  clearContactDetail,
  loadSignProgressStatus,
  loadContacts,
  loadContactDetail,
} from './slice';

import {
  signProgressStatus,
  errorSignProgressStatus,
} from '../../fixture/dashboard';

import { testDate } from '../../fixture/datetime';

import { token } from '../../fixture/authentication';

import {
  contactList,
  contactDetail1,
} from '../../fixture/contacts';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

jest.mock('../services/dashboard');
jest.mock('../services/contacts');

describe('reducer', () => {
  context('when the application first loaded', () => {
    const initialState = {
      accessToken: null,
      signProgressStatus: {
        signWait: null,
        signProgress: null,
        confirmWait: null,
        confirmComplete: null,
      },
      localeText: {},
      locale: '',
      mobileOpen: false,
      contacts: [],
      documents: [],
      contactDetail: {
        name: '',
        phoneNumber: '',
        email: '',
      },
    };

    it('returns the initialStates', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setAccesstoken', () => {
    it('can set access token state', () => {
      const initailState = {
        accesstoken: null,
      };

      const state = reducer(initailState, setAccessToken(token));

      expect(state.accessToken).toBe(token);
    });
  });

  describe('setSignProgress', () => {
    it('can set sign progress state', () => {
      const initialState = {
        signProgressStatus: {
          signWait: null,
          signProgress: null,
          confirmWait: null,
          confirmComplete: null,
        },
      };

      const signProgressData = {
        signWait: 1,
        signProgress: 2,
        confirmWait: 3,
        confirmComplete: 4,
      };

      const state = reducer(initialState, setSignProgress(signProgressData));

      expect(state.signProgressStatus).toEqual(signProgressData);
    });
  });

  describe('setMobileOpen', () => {
    it('can set mobiel open state', () => {
      const initailState = {
        mobileOpen: false,
      };

      const state = reducer(initailState, setMobileOpen(true));

      expect(state.mobileOpen).toBe(true);
    });
  });

  describe('setLocale', () => {
    const initialState = {
      localeText: {},
      locale: '',
    };
    context('with valid locale request', () => {
      it('set requested locale info', () => {
        const testLocales = ['ko', 'en'];

        testLocales.forEach((testLocale) => {
          const state = reducer(initialState, setLocale(testLocale));

          expect(state.locale).toBe(testLocale);
          expect(state.localeText.title).toBe(locales[testLocale].title);
        });
      });
    });

    context('with invalid locale request', () => {
      it('set default locale info', () => {
        const testLocale = 'not exist locale';
        const defaultLocale = 'en';

        const state = reducer(initialState, setLocale(testLocale));

        expect(state.locale).toBe(defaultLocale);
        expect(state.localeText.title).toBe(locales[defaultLocale].title);
      });
    });
  });

  describe('setContacts', () => {
    it('set contacts state', () => {
      const initialState = {
        contacts: [],
      };

      const state = reducer(initialState, setContacts(contactList));

      expect(state.contacts).toBe(contactList);
    });
  });

  describe('setContactDetail', () => {
    it('set contact detail state', () => {
      const initialState = {
        contactDetail: {
          name: '',
          phoneNumber: '',
          email: '',
        },
      };

      const { contactDetail } = reducer(initialState, setContactDetail(contactDetail1));

      expect(contactDetail.name).toBe(contactDetail1.name);
      expect(contactDetail.phoneNumber).toBe(contactDetail1.phoneNumber);
      expect(contactDetail.email).toBe(contactDetail1.email);
    });
  });

  describe('clearContactDetail', () => {
    it('cleaning contact detail state', () => {
      const initialState = {
        contactDetail: {
          name: 'fake',
          phoneNumber: 'fake',
          email: 'fake',
        },
      };

      const { contactDetail } = reducer(initialState, clearContactDetail());

      expect(contactDetail.name).toBe('');
      expect(contactDetail.phoneNumber).toBe('');
      expect(contactDetail.email).toBe('');
    });
  });
});

describe('async reducer', () => {
  let store;

  describe('loadSignProgressStatus', () => {
    context('when fetch data success', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('can get sign progress status', async () => {
        await store.dispatch(loadSignProgressStatus(testDate));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setSignProgress(signProgressStatus));
      });
    });

    context('when fetch data fail', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('can get sign progress status', async () => {
        await store.dispatch(loadSignProgressStatus(new Date()));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setSignProgress(errorSignProgressStatus));
      });
    });
  });

  describe('loadContacts', () => {
    context('when fetch data success', () => {
      // given
      beforeEach(() => {
        store = mockStore({
          contactId: 1,
          internalUserId: 1,
        });
      });

      it('can get contacts data', async () => {
        // when
        await store.dispatch(loadContacts());

        const actions = store.getActions();

        // then
        expect(actions[0]).toEqual(setContacts(contactList));
      });
    });

    context('when fetch data fail', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('can get sign progress status', async () => {
        await store.dispatch(loadContacts(true));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setContacts('error'));
      });
    });
  });

  describe('loadContactDetail', () => {
    context('when fetch data success', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('can get contact detail data from API server', async () => {
        await store.dispatch(loadContactDetail(contactDetail1.id));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setContactDetail({
          name: contactDetail1.name,
          phoneNumber: contactDetail1.phoneNumber,
          email: contactDetail1.email,
        }));
      });
    });

    context('when fetch data fail', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('set error state to contact detail', async () => {
        const errorId = 'notExistId';

        await store.dispatch(loadContactDetail(errorId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setContactDetail({
          name: 'error',
          phoneNumber: 'error',
          email: 'error',
        }));
      });
    });
  });
});
