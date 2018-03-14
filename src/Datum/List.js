export default class {
  constructor(args = {}) {
    const {
      format, onChange, separator, value, prediction, distinct, disabled, limit,
    } = args

    this.distinct = distinct
    this.limit = limit
    this.separator = separator
    this.disabled = disabled || (() => false)
    this.initFormat(format)
    this.events = {}

    if (prediction) this.prediction = prediction
    if (separator && !format) {
      console.error('The separator parameter is not null, the format parameter can not be empty.')
    }

    this.setValue(value)
    this.onChange = onChange
  }

  get length() {
    return this.values.length
  }

  get values() {
    return this.$values
  }

  set values(values) {
    this.$values = values
    this.dispatch('change')
    if (this.onChange) {
      this.onChange(this.getValue())
    }
  }

  add(data) {
    if (!data) return

    let raws = Array.isArray(data) ? data : [data]
    raws = raws.filter((v) => {
      const disabled = this.disabled(v)
      if (disabled) return false
      if (this.distinct) return !this.check(v)
      return true
    })

    const values = []
    for (const r of raws) {
      const v = this.format(r)
      if (v) values.push(v)
    }

    this.values = this.values.concat(values)
  }

  set(value) {
    this.$values = []
    this.add(value)
  }

  check(raw) {
    for (let i = 0, count = this.values.length; i < count; i++) {
      if (this.prediction(this.values[i], raw)) return true
    }
    return false
  }

  clear() {
    this.values = []
  }

  dispatch(name, ...args) {
    const event = this.events[name]
    if (!event) return
    event.forEach(fn => fn(...args))
  }

  handleChange(...args) {
    this.dispatch('change', ...args)
    if (this.onChange) {
      this.onChange(this.getValue(), ...args)
    }
  }

  initFormat(f) {
    switch (typeof f) {
      case 'string':
        this.format = value => value[f]
        break
      case 'function':
        this.format = value => f(value)
        break
      default:
        this.format = a => a
        break
    }
  }

  prediction(value, data) {
    return value === this.format(data)
  }

  remove(value) {
    if (!value) return

    let raws = Array.isArray(value) ? value : [value]
    raws = raws.filter(r => !this.disabled(r))
    const values = []

    outer:
    for (const val of this.values) {
      for (let j = 0; j < raws.length; j++) {
        if (this.prediction(val, raws[j])) {
          raws.splice(j, 1)
          continue outer
        }
      }
      values.push(val)
    }

    this.values = values
  }

  listen(name, fn) {
    if (!this.events[name]) this.events[name] = []
    const events = this.events[name]
    if (fn in events) return
    events.push(fn)
  }

  unlisten(name, fn) {
    if (!this.events[name]) return
    this.events[name] = this.events[name].filter(e => e !== fn)
  }

  getValue() {
    if (this.limit === 1) return this.values[0]

    if (this.separator) return this.values.join(this.separator)
    return this.values
  }

  setValue(values = []) {
    if (this.limit === 1 && !Array.isArray(values)) {
      this.values = [values]
      return
    }

    if (Array.isArray(values)) {
      this.values = values
      return
    }

    if (typeof values === 'string') {
      if (this.separator) {
        this.values = values.split(this.separator).map(s => s.trim())
      } else {
        this.values = []
        console.error('The separator parameter is empty.')
      }
      return
    }

    console.error('Invalid values, expect Array of String.')
  }
}