export interface IPostParams {
  id: number;
  title: string;
  content: string;
}

export interface IPostDto {
  readonly id: number;
  readonly title: string;
  readonly content: string;
}

class PostDto implements IPostDto {
  readonly id: number;
  readonly title: string;
  readonly content: string;

  constructor(params: IPostParams) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
  }
}

export default PostDto;
