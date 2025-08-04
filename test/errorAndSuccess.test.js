import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { Router } from '@vaadin/router';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen', () => {
  it('should render heading and description', () =>
    fixture(html`<loan-success></loan-success>`).then(el => {
      const heading = el.shadowRoot.querySelector('h2');
      const paragraph = el.shadowRoot.querySelector('p');

      expect(heading).to.exist;
      expect(paragraph).to.exist;
    }));

  it('should render a button with correct class and label', () =>
    fixture(html`<loan-success></loan-success>`).then(el => {
      const button = el.shadowRoot.querySelector('lion-button');

      expect(button).to.exist;
      expect(button.classList.contains('home-btn')).to.be.true;
    }));

  it('should navigate to home / on button click', () =>
    fixture(html`<loan-success></loan-success>`).then(el => {
      const routerStub = sinon.stub(Router, 'go');
      const button = el.shadowRoot.querySelector('lion-button');

      button.click();

      expect(routerStub.calledOnceWith('/')).to.be.true;
      routerStub.restore();
    }));
});

describe('error screen', () => {
  it('should render heading, paragraph, and button', () =>
    fixture(html`<loan-error></loan-error>`).then(el => {
      const heading = el.shadowRoot.querySelector('h2');
      const paragraph = el.shadowRoot.querySelector('p');
      const button = el.shadowRoot.querySelector('lion-button');

      expect(heading).to.exist;
      expect(paragraph).to.exist;
      expect(button).to.exist;
    }));

  it('should navigate to home / on button click', () =>
    fixture(html`<loan-error></loan-error>`).then(el => {
      const routerStub = sinon.stub(Router, 'go');
      const button = el.shadowRoot.querySelector('lion-button');

      button.click();

      expect(routerStub.calledOnceWith('/')).to.be.true;
      routerStub.restore();
    }));
});
