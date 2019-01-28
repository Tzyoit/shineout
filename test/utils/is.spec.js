import * as is from '../../src/utils/is'

describe('is.js[isArray]', () => {
  test('should return true if array', () => {
    expect(is.isArray([])).toBeTruthy()
    // eslint-disable-next-line
    expect(is.isArray(new Array())).toBeTruthy()
  })
  test('should return false if not array/array like', () => {
    const test = [
      new Set(),
      new Date(),
      { length: 1 },
    ]
    test.forEach(value => {
      expect(is.isArray(value)).toBeFalsy()
    })
  })
})

describe('is.js[isUndef-isNotUndef]', () => {
  test('should return true if a undefined', () => {
    const test = [null, undefined]
    test.forEach(value => {
      expect(is.isUndef(value)).toBeTruthy()
      expect(is.isNotUndef(value)).toBeFalsy()
    })
  })
  test('should return false if a false like', () => {
    const test = [false, Object.create(null), 0, '']
    test.forEach(value => {
      expect(is.isUndef(value)).toBeFalsy()
      expect(is.isNotUndef(value)).toBeTruthy()
    })
  })
  test('should return false if a plain/refer object', () => {
    expect(is.isUndef(1)).toBeFalsy()
    expect(is.isUndef({})).toBeFalsy()

    expect(is.isNotUndef(1)).toBeTruthy()
    expect(is.isNotUndef({})).toBeTruthy()
  })
})

describe('is.js[isNan]', () => {
  test('should return true if a NaN', () => {
    expect(is.isNan(NaN)).toBeTruthy()
    expect(is.isNan(Number('a'))).toBeTruthy()
  })
  test('should return false if not a NaN', () => {
    const test = [true, false, {}, null, Number.MAX_VALUE, Number.MIN_VALUE]
    test.forEach(value => {
      expect(is.isNan(value)).toBeFalsy()
    })
  })
})

describe('is.js[isFunc]', () => {
  test('should return true if a func', () => {
    const test = [
      function() {},
      () => {},
      Date.constructor,
      class Test {},
    ]
    test.forEach(value => {
      expect(is.isFunc(value)).toBeTruthy()
    })
  })
  test('should return false if not a func', () => {
    const test = [true, false, {}, null]
    test.forEach(value => {
      expect(is.isFunc(value)).toBeFalsy()
    })
  })
})

describe('is.js[isNumber]', () => {
  test('should be correct', () => {
    const test = [1, Number(1), Number.MAX_VALUE, Number.MIN_VALUE]
    test.forEach(value => {
      expect(is.isNumber(value)).toBeTruthy()
    })
    expect(is.isNumber({})).toBeFalsy()
    expect(is.isNumber(null)).toBeFalsy()
  })
})

describe('is.js[isObject]', () => {
  test('should be correct', () => {
    expect(is.isObject({})).toBeTruthy()
    expect(is.isObject(new Date())).toBeTruthy()
    expect(is.isObject(false)).toBeFalsy()
    expect(is.isObject(() => {})).toBeFalsy()
    expect(is.isObject(class Test {})).toBeFalsy()
    expect(is.isObject(null)).toBeFalsy()
  })
})

describe('is.js[isString]', () => {
  test('should be correct', () => {
    expect(is.isString('')).toBeTruthy()
    expect(is.isString('abc')).toBeTruthy()
    expect(is.isString(null)).toBeFalsy()
    expect(is.isString({})).toBeFalsy()
    // eslint-disable-next-line
    expect(is.isString(new String(''))).toBeFalsy()
  })
})

describe('is.js[isDate]', () => {
  test('should be correct', () => {
    expect(is.isDate(new Date())).toBeTruthy()
    expect(is.isDate(new Date('333'))).toBeTruthy()
    expect(is.isDate(Date)).toBeFalsy()
    expect(is.isDate('2019.1.1')).toBeFalsy()
  })
})

describe('is.js[isError]', () => {
  test('should be correct', () => {
    expect(is.isError(new Error())).toBeTruthy()
    expect(is.isError({})).toBeFalsy()
    expect(is.isEmpty(Error)).toBeFalsy()
  })
})

describe('is.js[isRegexp]', () => {
  test('should be correct', () => {
    expect(is.isRegexp(/hello/)).toBeTruthy()
    expect(is.isRegexp(new RegExp('hello'))).toBeTruthy()
    expect(is.isRegexp('hello')).toBeFalsy()
    expect(is.isRegexp({})).toBeFalsy()
  })
})

describe('is.js[isMap-isSet]', () => {
  test('shoule be correct', () => {
    expect(is.isMap(new Map())).toBeTruthy()
    expect(is.isSet(new Set())).toBeTruthy()
    expect(is.isSet([])).toBeFalsy()
    expect(is.isMap({})).toBeFalsy()
  })
})

describe('is.js[isPromise]', () => {
  test('should be correct', () => {
    const promise = new Promise((resolve, reject) => {
      resolve(1)
    })
    expect(is.isPromise(promise)).toBeTruthy()
    expect(is.isPromise(promise.then())).toBeTruthy()
    expect(is.isPromise(Promise)).toBeFalsy()
  })
})

describe('is.js[isInPath]', () => {
  test('should be correct', () => {
    expect(is.isInPath('a', 'a.b')).toBeTruthy()
    expect(is.isInPath('a', 'a[1]')).toBeTruthy()
    expect(is.isInPath('b', 'a.c')).toBeFalsy()
    expect(is.isInPath('', 'a.b')).toBeFalsy()
    expect(is.isInPath('a', '')).toBeFalsy()
  })
})

describe('is.js[isEmpty]', () => {
  test('should be correct', () => {
    expect(is.isEmpty(null)).toBeTruthy()
    expect(is.isEmpty({})).toBeTruthy()
    expect(is.isEmpty([])).toBeTruthy()
    expect(is.isEmpty(0)).toBeFalsy()
    expect(is.isEmpty([0])).toBeFalsy()
    expect(is.isEmpty([undefined])).toBeFalsy()
  })
})

describe('is.js[isMergeable]', () => {
  test('should be correct', () => {
    expect(is.isMergeable({})).toBeTruthy()
    expect(is.isMergeable(new Date())).toBeFalsy()
    expect(is.isMergeable(null)).toBeFalsy()
    expect(is.isMergeable(1)).toBeFalsy()
    expect(is.isMergeable([])).toBeFalsy()
  })
})

describe('is.js[isBuffer]', () => {
  test('should be correct', () => {
    function Fun() {}
    Fun.isBuffer = () => true
    expect(is.isBuffer(new Fun())).toBeTruthy()
    expect(is.isBuffer({})).toBeFalsy()
  })
})

describe('is.js[isOne-isPercent-isInseparable]', () => {
  test('should be correct', () => {
    expect(is.isInseparable(() => {})).toBeTruthy()
    expect(is.isInseparable(new Set())).toBeTruthy()
    expect(is.isPercent('100%')).toBeTruthy()
    expect(is.isPercent('1%')).toBeTruthy()
    expect(is.isOne(1) && is.isOne('1.0')).toBeTruthy()

    expect(is.isOne('11')).toBeFalsy()
    expect(is.isOne('0')).toBeFalsy()
    expect(is.isPercent('%')).toBeFalsy()
    expect(is.isPercent('100')).toBeFalsy()
    expect(is.isPercent('%323')).toBeFalsy()
    expect(is.isInseparable({})).toBeFalsy()
  })
})
