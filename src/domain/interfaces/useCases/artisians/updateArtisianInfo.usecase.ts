export default interface IUpdateArtisianInfoUseCase {
  execute(): void

  encryptPassword(): void
}