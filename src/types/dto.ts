export interface UserDTO {
    id: string
    username: string
    name: string
    registeredAt: string
  }
  
  export interface LoginDTO {
    username: string
    password: string
  }
  
  export interface RegisterDTO {
    username: string
    name: string
    password: string

  }
  
  export interface CredentialDTO {
    accessToken: string
  }
  
  export interface ContentDTO {
    id: number
    videoTitle: string
    videoUrl: string
    comment: string
    rating: number
    thumbnailUrl: string
    creatorName: string
    creatorUrl: string
    postedBy: UserDTO
    createdAt: string
    updatedAt: string
    VideoCode: string
    time :string
  }
  
  export interface ContentsDTO {
    data: ContentDTO[]
  }
  
  export interface ErrorDTO {
    statusCode: number
    message: string
    error: string
  }
  
  export interface CreateContentDTO {
    videoUrl: string
    comment: string
    rating: number
  }
  
  export interface EditContentDTO {
    comment: string
    rating: number
  }