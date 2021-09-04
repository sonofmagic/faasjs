import { FuncWarpper } from '@faasjs/test'
import Func from '../index.func'

describe('index', function () {
  test('should work', async function () {
    const func = new FuncWarpper(Func)

    const { statusCode, data } = await func.JSONhandler()

    expect(statusCode).toEqual(200)
    expect(data).toEqual('Hello, world')
  });
});
