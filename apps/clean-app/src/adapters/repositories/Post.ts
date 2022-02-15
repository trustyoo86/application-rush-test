import { IPostDto } from '@domains/dto/PostDto';
import { IPostRepository } from '@domains/useCases/repositories/Post';

class PostRepository implements IPostRepository {
  posts: IPostDto[] = [
    {
      id: 0,
      title: 'test',
      content: 'test content',
    },
  ];

  async getPosts(): Promise<IPostDto[]> {
    return this.posts;
  }

  async insertPost(title: string, content: string): Promise<boolean> {
    const id = this.posts.length;

    this.posts.push({
      id,
      title,
      content,
    });

    return true;
  }
}

export default PostRepository;
