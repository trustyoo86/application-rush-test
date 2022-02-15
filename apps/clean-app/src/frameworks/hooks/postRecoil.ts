import { IPostEntity } from '@domains/aggregates/interfaces/iPost';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const postList = atom<IPostEntity[]>({
  key: 'postList',
  default: [],
});

const postListState = selector({
  key: 'postListSelector',
  get: ({ get }) => get(postList),
});

export const useGetPostList = () => {
  return useRecoilValue(postListState);
};

export const usePostListState = () => {
  return useRecoilState(postList);
};
