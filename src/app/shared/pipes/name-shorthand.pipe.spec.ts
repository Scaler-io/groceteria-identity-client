import { NameShorthandPipe } from './name-shorthand.pipe';

describe('NameShorthandPipe', () => {
  it('create an instance', () => {
    const pipe = new NameShorthandPipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe should fetch and capitalize first letter of the given string', () => {
    const expectedResult = 'S';
    const pipe = new NameShorthandPipe();
    expect(pipe.transform('Sharthak')).toBe(expectedResult);
  });
});
