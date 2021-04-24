import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import { signProgressStatus } from '../../../fixture/dashboard';

import { testLocaleText } from '../../../fixture/locales';

import { setMobileOpen } from '../../state/slice';

import DashboardPage from './DashboardPage';

function renderDashboardPage() {
  return render((
    <DashboardPage localeText={testLocaleText} />
  ));
}

jest.mock('react-redux');

describe('DashboardPage', () => {
  const dispatch = jest.fn();

  const title = '전자 서명 시스템 (e-Signature System)';
  const signProgressList = ['서명 대기중', '서명 진행중', '승인 대기중', '승인 완료'];
  const sideBarMenus = ['내 문서', '템플릿', '대량전송', '설정'];

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      signProgressStatus: given.signProgressStatus,
      mobileOpen: given.mobileOpen,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders the default components', () => {
    given('signProgressStatus', () => signProgressStatus);
    given('mobileOpen', () => false);

    const { container } = renderDashboardPage();

    expect(container).toHaveTextContent(title);
    signProgressList.forEach((signProgress) => {
      expect(container).toHaveTextContent(signProgress);
    });
  });

  context('when desktop mode', () => {
    given('signProgressStatus', () => signProgressStatus);
    given('mobileOpen', () => false);

    it('renders the sidebar menu', () => {
      const { container } = renderDashboardPage();

      sideBarMenus.forEach((sideBarMenu) => {
        expect(container).toHaveTextContent(sideBarMenu);
      });
    });
  });

  context('when mobile mode', () => {
    given('signProgressStatus', () => signProgressStatus);
    given('mobileOpen', () => true);

    it('does not render the sidebar menu', () => {
      const hiddenMenuRole = 'presentation';

      const { queryByRole } = renderDashboardPage();

      expect(queryByRole(hiddenMenuRole)).not.toBeNull();
    });

    it('can listen the open menu event', () => {
      const menuButtonTestId = 'hamburger-button';

      const { getByTestId } = renderDashboardPage();
      fireEvent.click(getByTestId(menuButtonTestId));

      expect(dispatch).toBeCalledWith(setMobileOpen(false));
    });
  });
});
