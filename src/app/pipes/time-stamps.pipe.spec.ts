import { TimeStampsPipe } from './time-stamps.pipe';

describe('TimeStampsPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeStampsPipe();
    expect(pipe).toBeTruthy();
  });
});
