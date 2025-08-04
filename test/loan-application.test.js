import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  it('should render and includes dash-board', () =>
    fixture(html`<loan-application></loan-application>`).then(el => {
      const dashboard = el.shadowRoot.querySelector('dash-board');

      expect(el).to.exist;
      expect(dashboard).to.exist;
    }));

  it('should default title and counter values', () =>
    fixture(html`<loan-application></loan-application>`).then(el => {
      expect(el.title).to.equal('Hey there');
      expect(el.counter).to.equal(5);
    }));

  it('should increment counter using increment method', () =>
    fixture(html`<loan-application></loan-application>`).then(el => {
      el.__increment();
      expect(el.counter).to.equal(6);
    }));
});
