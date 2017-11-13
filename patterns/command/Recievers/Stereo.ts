export class Stereo {
  public on(): void {
    console.log('Stereo on')
  }
  public off(): void {
    console.log('Stereo off')
  }
  public setCd(): void {
    console.log('Stereo set cd')
  }
  public setDvd(): void {
    console.log('Stereo set dvd')
  }
  public setRadio(): void {
    console.log('Stereo set radio')
  }
  public setVolume(level: number): void {
    console.log(`Stereo set volume to ${level}`)
  }
}
