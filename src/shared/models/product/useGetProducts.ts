import { useQuery } from '@tanstack/react-query';
import axios from '@/shared/utils/axios';

export default function useGetProducts({
  keyword,
  categoryId,
  order = 'recent',
}: {
  keyword?: string;
  categoryId?: number;
  order?: string;
}) {
  return useQuery({
    queryKey: ['products', keyword, categoryId, order],
    queryFn: async () => {
      const categoryParam = categoryId ? `&category=${categoryId}` : '';
      const keywordParam = keyword ? `&keyword=${keyword}` : '';
      const { data } = await axios.get(
        `products?order=${order}${keywordParam}${categoryParam}`,
      );
      return data.list;
    },
  });
}
