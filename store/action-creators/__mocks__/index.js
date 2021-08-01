module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  loadAllProducts: jest.fn().mockReturnValue({ type: 'mock' }),
};
