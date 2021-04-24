import React from 'react';

import { render } from '@testing-library/react';

import SignProgressbox from './SignProgressBox';

describe('SignProgressBox', () => {
  const testTitle = 'testbox';
  const testLocaleText = 'ko';

  function renderSignProgressbox(title, content, localeText) {
    return render((
      <SignProgressbox
        title={title}
        content={content}
        localeText={localeText}
      />
    ));
  }

  context('with data error', () => {
    const errorContent = 'error';

    it('renders the error message', () => {
      const { container } = renderSignProgressbox(testTitle, errorContent, testLocaleText);

      expect(container).toHaveTextContent('Error');
    });
  });
});
