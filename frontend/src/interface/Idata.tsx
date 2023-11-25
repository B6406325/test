export interface MemberInterface{
    ID?:number;
    Username?: string;
    Email?: string;
    Password?: string;
    Status?: string;
    Payment?: string;
}

export interface MovieInterface{
    ID?:number;
    MovieName?: string;
    Duration?: Date;
    Description?: string;
    Director?: string;
    Cast?: string;
    ImageUrl?: string;
    VideoUrl?: string;
    CategoriesID?: number;
    Categories?: CategoriesInterface;
}

export interface CategoriesInterface{
    ID?:number;
    CateName?: string;
}

export interface ImageUpload {
    uid: string
    lastModified: number
    lastModifiedDate: string
    name: string
    size: number
    type: string
    percent: number
    originFileObj: OriginFileObj
    error: Error
    response: string
    status: string
    thumbUrl: string
  }
  
  export interface OriginFileObj {
    uid: string
  }
  
  export interface Error {
    status: number
    method: string
    url: string
  }