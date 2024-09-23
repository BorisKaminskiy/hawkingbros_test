export interface IHeaderData {
  LogoImg: string
  UsedGuid: string
  UserName: string
}

export type TUserData = Omit<IHeaderData, 'LogoImg'>
