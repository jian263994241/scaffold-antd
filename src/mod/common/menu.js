const menuList = {
  'index': {
    name: '首页',
    link: '/',
    path: '/'
  },
  'seller-center': {
    name: '卖家商城',
    link: '/seller-center/account/my',
    path:'/seller-center/:subpath',
    children: [
      {name: '商户入驻', link: '/seller-center/shop/set-up', icon: 'inbox'},
      {
        name: '账户管理',
        icon: 'user',
        children: [
          {name: '我的账户', link: '/seller-center/account/my'},
          {name: '账户提现', link: '/seller-center/account/presentation'},
        ]
      },
      { name: '我的银行卡', link: '/seller-center/bank-card', icon: 'credit-card' },
    ]
  },
  'buyer-center': {
    name: '买家商城',
    link: '/buyer-center/account/my',
    path: '/buyer-center/:subpath',
    children: [
      {
        name: '账户管理',
        icon: 'user',
        children: [
          {name: '我的账户', link: '/buyer-center/account/my'},
          {name: '我的账户(未开户)', link: '/buyer-center/account/my2'},
          {name: '账户充值', link: '/buyer-center/account/recharge'},
          {name: '账户提现', link: '/buyer-center/account/presentation'},
        ]
      },
      { name: '我的银行卡', link: '/buyer-center/bank-card', icon: 'credit-card' },
      { name: '我的购物车', link: '/buyer-center/shopping-cart', icon: 'shopping-cart' }
    ]
  },
  'backstage-management': {
    name: '平台商城后台管理',
    link: '/backstage-management/ledger',
    path: '/backstage-management/:subpath',
    children: [
      {name: '分账管理', link: '/backstage-management/ledger', icon: 'share-alt'},
      {name: '对账管理', link: '/backstage-management/checking', icon: 'profile'}
    ]
  }
};

export default menuList;
