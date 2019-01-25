import * as color from '../../src/utils/color'

describe('color.js[rgbToHex]', () => {
  it('should transform rgb to hex', () => {
    const rgbs = ['rgb(255, 255, 255)', 'rgb(255, 195, 49)', 'rgb(51, 171, 98)']
    const hexs = ['#ffffff', '#ffc331', '#33ab62']
    rgbs.forEach((rgb, index) => {
      expect(color.rgbToHex(rgb)).toBe(hexs[index])
    })
  })
  // it('input wrong rgb data', () => {
  //   expect(() => color.rgbToHex('rgb(255, 255, 300)')).toThrow()
  // })
})
describe('color.js[hexToHsl]', () => {
  it('should transform hex to hsl', () => {
    const hexs = ['#ffddee', 'eedd337f']
    const hsls = ['hsl(330, 100, 93)', 'hsla(54, 84, 56, 0.5)']
    hexs.forEach((hex, index) => {
      expect(color.hexToHsl(hex)).toBe(hsls[index])
    })
  })
  // it('input wrong hex data', () => {
  //   expect(() => color.hexToHsl('#fgqrrq')).toThrow()
  // })
})
describe('color.js[hexToRgb]', () => {
  it('should transform hex to rgb', () => {
    const rgbs = ['rgb(255, 255, 255)', 'rgb(255, 195, 49)', 'rgb(51, 171, 98)']
    const hexs = ['#ffffff', '#ffc331', '#33ab62']
    hexs.forEach((hex, index) => {
      expect(color.hexToRgb(hex)).toBe(rgbs[index])
    })
  })
  // it('input wrong hex data', () => {
  //   expect(() => color.hexToRgb('#fgqrrq')).toThrow()
  // })
})
describe('color.js[hslToHex]', () => {
  it('should transform hsl to hex (no alpha)', () => {
    const hsls = ['hsla(330, 100, 93, 0.5)', 'hsla(54 , 84, 56, 0.5)']
    const hexs = ['#ffdbed', '#edda30']
    hsls.forEach((hsl, index) => {
      expect(color.hslToHex(hsl, true)).toBe(hexs[index])
    })
  })
  it('should transform hsl to hex', () => {
    const hsls = ['hsl(330, 100, 93)', 'hsla(54 , 84, 56, 0.5)']
    const hexs = ['#ffdbed', '#edda307f']
    hsls.forEach((hsl, index) => {
      expect(color.hslToHex(hsl)).toBe(hexs[index])
    })
  })
})
describe('color.js[hslToRgb]', () => {
  it('should transform hsl to rgb', () => {
    const hsls = ['hsl(120, 40%, 50%)', 'hsl(200, 20%, 30%)', 'hsl(320, 45%, 55%)', 'hsl(360, 60%, 70%)']
    const rgbs = ['rgb(76, 178, 76)', 'rgb(61, 81, 91)', 'rgb(191, 88, 157)', 'rgb(224, 132, 132)']

    hsls.forEach((hsl, i) => {
      expect(color.hslToRgb(hsl)).toBe(rgbs[i])
    })
  })

  it('should transform hsl to rgb in boundary', () => {
    const hsls = ['hsl(0, 0, 0)', 'hsl(0, 100%, 0)', 'hsl(360, 100%, 100%)', 'hsl(360, 50%, 50%)']
    const rgbs = ['rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(191, 63, 63)']

    hsls.forEach((h, i) => {
      expect(color.hslToRgb(h)).toBe(rgbs[i])
    })
  })

  it('should transform hsl to rgb(no precent)', () => {
    expect(color.hslToRgb('hsl(250, 30, 40)')).toBe('rgb(81, 71, 132)')
    expect(color.hslToRgb('hsl(330, 60, 70)')).toBe('rgb(224, 132, 178)')
  })
})
describe('color.js[isDark]', () => {
  it('should get true when color is dark', () => {
    const test = [
      '#000',
      '111',
      'rgb(100, 100, 100)',
      'rgba(100, 100, 100, 0.5)',
      'hsl(300, 100, 5)',
      'hsla(300, 100, 5, 0.1)',
    ]
    test.forEach(value => {
      expect(color.isDark(value)).toBeTruthy()
    })
  })
})
describe('color.js[isLight]', () => {
  it('should get true when color is light', () => {
    const test = [
      '#eeeeee',
      'fff',
      'rgb(245, 245, 245)',
      'rgba(245, 245, 245, 0.5)',
      'hsl(100,   70, 80)',
      'hsla(100, 90, 90, 0.1)',
    ]
    test.forEach(value => {
      expect(color.isLight(value)).toBeTruthy()
    })
  })
})
describe('color.js[other]', () => {
  it('should get false when color is illegal', () => {
    const test = ['#ggg', 'rgb(100, 100)', 'hsld(300, 5)']
    test.forEach(value => {
      expect(color.isDark(value)).toBeFalsy()
      expect(color.isLight(value)).toBeFalsy()
    })
  })
})
