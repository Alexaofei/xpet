import http from '@/utils/http';

export const getList = () => {
  return http({ url: '/resource/marketing/promotionActivity/list' });
};
