//import { Interface } from "readline"

export interface Ilogin{
    identifier:string,
    password:string
   }

export interface Iregister {
  username:string,
  email:string,
  password:string,
}

export interface Ievent{
 index:number
}

export interface PostType {
  post: {
    id: number;
    attributes: {
      title: string;
      content: string;
      isCommentable: boolean;
      slug: string;
    };
  };
}