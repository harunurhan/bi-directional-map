## BiDirectionalMap

Simple implementation of bi directional map (`key` <=> `value`) using 2 es6 `Map`s in typescript.

### Install

`npm install bi-directional-map`

### Usage

```typescript
import { BiDirectionalMap } from 'bi-directional-map/dist';

const map = new BiDirectionalMap<string, string>({ a: 'apple', b: 'banana' });

map.set('o', 'orange');
map.deleteKey('b');
map.deleteValue('apple');
map.size // 1
map.hasKey('a') // false
map.hasValue('banana') // false
```

Check [tests](./src/index.spec.ts) for more examples.