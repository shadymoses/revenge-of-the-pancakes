import makeAMove from '../make-a-move'

describe('make-a-move', () => {
  it('returns an array of moves resultign in resolution', () => {
    expect(makeAMove('--')).toEqual(['++'])
    expect(makeAMove('+-+-+-')).toEqual([
      '--+-+-',
      '+++-+-',
      '----+-',
      '+++++-',
      '------',
      '++++++',
    ])
  })
})
