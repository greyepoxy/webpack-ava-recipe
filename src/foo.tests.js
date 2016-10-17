import test from 'ava';
import { foo, bar } from './foo';

test('foo', t => {
    t.is(foo(), 'foo');
});

test('bar', async t => {
    const result = Promise.resolve(bar(5));

    t.is(await result, 'bar5');
});
