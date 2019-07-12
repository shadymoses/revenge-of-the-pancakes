import flipPancakes from '../flip-pancakes'

const errMsg = 'Input strings should only contain the characters + or -'

describe('flip-pancakes', () => {
  test('bails on invalid strings', () => {
    expect(() => {
      flipPancakes('')
    }).toThrow(errMsg)
    expect(() => {
      flipPancakes()
    }).toThrow(errMsg)
    expect(() => {
      flipPancakes([])
    }).toThrow(errMsg)
    expect(() => {
      flipPancakes({})
    }).toThrow(errMsg)
    expect(() => {
      flipPancakes(true)
    }).toThrow(errMsg)
    expect(() => {
      flipPancakes(0)
    }).toThrow(errMsg)
    expect(() => {
      flipPancakes('--_+')
    }).toThrow(errMsg)
  })

  test('0 moves', () => {
    expect(flipPancakes('+')).toEqual({ moves: [], count: 0 })
    expect(flipPancakes('++')).toEqual({ moves: [], count: 0 })
    expect(flipPancakes('+++')).toEqual({ moves: [], count: 0 })
    expect(flipPancakes('++++++++++')).toEqual({ moves: [], count: 0 })
  })

  test('1 move strings', () => {
    expect(flipPancakes('-')).toEqual({ moves: ['+'], count: 1 })
    expect(flipPancakes('-+')).toEqual({
      moves: ['++'],
      count: 1,
    })
    expect(flipPancakes('--+')).toEqual({
      moves: ['+++'],
      count: 1,
    })
    expect(flipPancakes('---+')).toEqual({
      moves: ['++++'],
      count: 1,
    })
    expect(flipPancakes('----------+')).toEqual({
      moves: ['+++++++++++'],
      count: 1,
    })
  })

  test('2 move strings', () => {
    expect(flipPancakes('+-')).toEqual({ moves: ['--', '++'], count: 2 })
  })

  test('more move strings', () => {
    expect(flipPancakes('+--+-+')).toEqual({
      moves: ['---+-+', '++++-+', '-----+', '++++++'],
      count: 4,
    })
    expect(flipPancakes('---+-+-++')).toEqual({
      moves: ['++++-+-++', '-----+-++', '++++++-++', '-------++', '+++++++++'],
      count: 5,
    })
    expect(flipPancakes('+-+-+-')).toEqual({
      moves: ['--+-+-', '+++-+-', '----+-', '+++++-', '------', '++++++'],
      count: 6,
    })
    expect(flipPancakes('---+-+-++-------+-++++---+--+++')).toEqual({
      moves: [
        '++++-+-++-------+-++++---+--+++',
        '-----+-++-------+-++++---+--+++',
        '++++++-++-------+-++++---+--+++',
        '-------++-------+-++++---+--+++',
        '+++++++++-------+-++++---+--+++',
        '----------------+-++++---+--+++',
        '+++++++++++++++++-++++---+--+++',
        '------------------++++---+--+++',
        '++++++++++++++++++++++---+--+++',
        '-------------------------+--+++',
        '++++++++++++++++++++++++++--+++',
        '----------------------------+++',
        '+++++++++++++++++++++++++++++++',
      ],
      count: 13,
    })
  })
})
