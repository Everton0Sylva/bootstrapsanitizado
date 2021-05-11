import { ApiServiceCliIndicator } from './cli-d-indicator-api.service';

export const ccibInaClientsPct = ApiServiceCliIndicator.getData('Inactive Clients').rdataserver;

export const ccibBloClientsPct = ApiServiceCliIndicator.getData('Blocked Clients').rdataserver;

export const ccibBloUsersPct = ApiServiceCliIndicator.getData('Blocked Users from Active Clients').rdataserver;

export const ccibBloConsumersPct = ApiServiceCliIndicator.getData('Blocked Consumers from Active Clients').rdataserver;

export const caucActiveUsersQtd = ApiServiceCliIndicator.getData('aucActiveUsersQtd').rdataserver;

export const ctmMsgTraffickedQtd = ApiServiceCliIndicator.getData('tmMsgTraffickedQtd').rdataserver;
