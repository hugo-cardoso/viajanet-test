import * as httpService from './httpService';

import MOCK from '@/promotionsMock';

export const getAirlinePromotions = () => {
  return new Promise(resolve => resolve(MOCK));
};