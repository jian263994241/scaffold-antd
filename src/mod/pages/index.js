import LoginPage from './user/login';
import Index from './indexpage';
import BuyerCenterAccountMy from './buyer-center/account/my';
import BuyerCenterAccountMy2 from './buyer-center/account/my2';
import BuyerCenterRecharge from './buyer-center/account/recharge';
import BuyerCenterPresentation from './buyer-center/account/presentation';
import BuyerCenterBankCard from './buyer-center/bank-card';
import BuyerCenterShoppingCart from './buyer-center/shopping-cart';
import SellerCenterAccountMy from './seller-center/account/my';
import SellerCenterPresentation from './seller-center/account/presentation';
import SellerCenterBankCard from './seller-center/bank-card';
import SellerCenterShopSetUp from './seller-center/shop/set-up';
import BackstageManagementLedger from './backstage-management/ledger';
import BackstageManagementChecking from './backstage-management/checking';

const routes = [
  {path: '/',  component: Index, exact: true},
  {path: '/buyer-center/account/my',  component: BuyerCenterAccountMy},
  {path: '/buyer-center/account/my2',  component: BuyerCenterAccountMy2},
  {path: '/buyer-center/account/recharge',  component: BuyerCenterRecharge},
  {path: '/buyer-center/account/presentation',  component: BuyerCenterPresentation},
  {path: '/buyer-center/bank-card',  component: BuyerCenterBankCard},
  {path: '/buyer-center/shopping-cart',  component: BuyerCenterShoppingCart},
  {path: '/seller-center/account/my',  component: SellerCenterAccountMy},
  {path: '/seller-center/account/presentation',  component: SellerCenterPresentation},
  {path: '/seller-center/bank-card',  component: SellerCenterBankCard},
  {path: '/seller-center/shop/set-up',  component: SellerCenterShopSetUp},
  {path: '/backstage-management/ledger',  component: BackstageManagementLedger},
  {path: '/backstage-management/checking',  component: BackstageManagementChecking},
  {path: '/user/login',  component: LoginPage},
]


export default routes;
