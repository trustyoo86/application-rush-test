import { useCallback, useEffect } from 'react';

import di from '@di';
import { usePostListState } from '../hooks/postRecoil';
import PostList from './PostList';

function PostSection() {
  const [list, setList] = usePostListState();

  const getPosts = useCallback(async () => {
    const posts = await di.post.getPosts();
    setList(posts);
  }, []);

  const initEffect = useCallback(() => {
    getPosts();
  }, []);

  useEffect(initEffect, [initEffect]);

  return (
    <div>
      <PostList list={list} />
    </div>
  );
}

export default PostSection;
