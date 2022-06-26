import { createFlagSelector } from '../selectors';

describe('[Selector] Flags', () => {
  it('should return the correct value', () => {
    const selector = createFlagSelector('test');
    const state = {
      flags: {
        test: true,
      },
    };
    // @ts-ignore
    expect(selector(state)).toBe(true);
  });

  it('should return the correct value', () => {
    const selector = createFlagSelector('test');
    const state = {
      flags: {
        test: false,
      },
    };
    // @ts-ignore
    expect(selector(state)).toBe(false);
  });

  it('should return the correct value', () => {
    const selector = createFlagSelector('test');
    const state = {
      flags: {
        test: undefined,
      },
    };
    // @ts-ignore
    expect(selector(state)).toBe(false);
  });
});
