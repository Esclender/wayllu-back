export default interface IRegisterArtisianUseCase {
  execute(): void

  encryptPassword(): void
}