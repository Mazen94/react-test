import { categorySelector } from '../selectors';

describe('[Selector] Category', () => {
  it('should return the correct value', () => {
    const state = {
      categories: [
        { name: 'test', id: 1 },
        { name: 'test2', id: 2 },
      ],
    };
    // @ts-ignore
    expect(categorySelector(state)).toBe(state.categories);
  });
});
