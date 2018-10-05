const { expect } = require('chai');
const context = require('../context/index');

describe('CONTEXT', () => {
  it.skip('exerciseA', () => {
    const result = context.exerciseA();
    expect(result).to.equal('instance of ship');
  });
});