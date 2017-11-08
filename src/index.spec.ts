import { BiDirectionalMap } from './index';

function expectAppleBanana(map: BiDirectionalMap<string, string>) {
  expect(map.hasKey('a')).toBe(true);
  expect(map.hasKey('b')).toBe(true);
  expect(map.hasValue('apple')).toBe(true);
  expect(map.hasValue('banana')).toBe(true);
  expect(map.hasKey('o')).toBe(false);
  expect(map.hasValue('orange')).toBe(false);
}

describe('BiDirectionalMap', () => {

  it('should create map with entry array', () => {
    const map = new BiDirectionalMap<string, string>([['a', 'apple'], ['b', 'banana']]);
    expectAppleBanana(map);
  });

  it('should create map with js object', () => {
    const map = new BiDirectionalMap<string, string>({ a: 'apple', b: 'banana' });
    expectAppleBanana(map);
  });

  it('should create map with es6 map', () => {
    const map = new BiDirectionalMap<string, string>(new Map([['a', 'apple'], ['b', 'banana']]));
    expectAppleBanana(map);
  });

  it('should create empty map', () => {
    const map = new BiDirectionalMap<string, string>();
    expect(map.size).toBe(0);
  });

  it('should set entries', () => {
    const map = new BiDirectionalMap<string, string>();
    map.set('a', 'apple');
    map.set('b', 'banana');
    expectAppleBanana(map);
  });
});
