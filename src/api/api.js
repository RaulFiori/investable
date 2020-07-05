import Axios from 'axios';

class Api {
  constructor() {
    this.api = Axios.create({
      baseURL: '',
    });
  }

  getDashboard(userId) {
    // this.api.get()
    return {
      totalAmount: '42.598,17',
      income: '1.224, 57',
      incomeRate: '0,73',
      incomeRateCDI: '122',
      recomendedProducts: [
        {
          incomeRate: '7,5',
          type: 'CDB',
          from: 'BANCO PAN - JUL/2023',
        },
        {
          incomeRate: '7,5',
          type: 'LCI',
          from: 'BANCO PAN - JUL/2023',
        },
      ],
    };
  }
}

export default Api;
