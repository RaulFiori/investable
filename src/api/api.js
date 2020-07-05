import Axios from 'axios';

const dashboardData = {
  userId: '5f01d9a0e331c00017764a50',
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

const userData = {
  name: 'João',
  age: 25,
  lastName: 'Paulo Machado',
  email: 'joaomachado@email.com.br',
  cpf: '357.424.128-02',
  rg: '12.569.054-5',
  risk: 'Intermediário',
  account: {
    bank: {
      name: 'Banco do Brasil',
      code: '001',
    },
    number: '34521-2',
    branch: '1532',
  },
};

const applyData = {
  userId: '5f01d9a0e331c00017764a50',
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
  categories: [
    {
      name: 'Renda Fixa',
      types: ['CDB', 'LCI', 'LCA', 'Tesouro Direto', 'Fundos'],
    },
    {
      name: 'Renda Variável',
      types: ['Fundos Multimercado', 'ETFs', 'Ações'],
    },
    {
      name: 'Previdência Privada',
      types: ['Previdência Fixa ou Variada'],
    },
  ],
};

class Api {
  constructor() {
    this.api = Axios.create({
      baseURL: `https://jsonbox.io/${process.env.REACT_APP_BOX_ID}`,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  getInvestments(userId) {
    return this.api
      .get('/invest', {
        params: {
          q: `userId:${userId}`,
        },
      })
      .then(response => {
        const [investments] = response.data;
        return investments;
      })
      .catch(console.error);
  }

  getProfile(userId) {
    return this.api
      .get(`/user/${userId}`)
      .then(({ data }) => data)
      .catch(console.error);
  }

  getDashboard(userId) {
    return this.api
      .get('/dashboard', {
        params: { q: `userId:${userId}` },
      })
      .then(response => {
        const [dashboard] = response.data;
        return dashboard;
      })
      .catch(console.error);
  }
}

export default Api;
