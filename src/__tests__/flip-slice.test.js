import flipSlice from '../flip-slice'

describe('flipSlice', () => {
  it('reverses order of slice and polarity of each character in slice', () => {
    // flips first 3 items
    expect(flipSlice('---+-+', 3)).toBe('++++-+')
    // flips entire stack
    expect(flipSlice('---+-+')).toBe('-+-+++')
  })
})
