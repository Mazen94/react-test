import { FlagsReducer } from '../reducers';

describe('[Reducer] Flags', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(FlagsReducer(undefined, {})).toEqual({});
  });
  it('should return the initial state', () => {
    // @ts-ignore
    expect(FlagsReducer(undefined, { type: 'test' })).toEqual({});
  });
  it('should update the state', () => {
    // @ts-ignore
    expect(FlagsReducer({}, { type: 'test_LOADING', payload: { value: true } })).toEqual({
      test_LOADING: true,
    });
  });
});
