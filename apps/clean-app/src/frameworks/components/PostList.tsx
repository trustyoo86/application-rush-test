import { IPostVM } from '../vm/Post';

interface IProps {
  list: IPostVM[];
}

function PostList(props: IProps) {
  const { list } = props;

  return (
    <ul>
      {list.length &&
        list.map(post => (
          <li>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </li>
        ))}
    </ul>
  );
}

export default PostList;
