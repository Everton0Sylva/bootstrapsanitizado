import { ApiServiceAdmIndicator } from './adm-d-indicator-api.service';

export const xcibInaClientsPct = ApiServiceAdmIndicator.getData('Inactive Clients').rdataserver;

export const xcibBloClientsPct = ApiServiceAdmIndicator.getData('Blocked Clients').rdataserver;

export const xcibBloUsersPct = ApiServiceAdmIndicator.getData('Blocked Users from Active Clients').rdataserver;

export const xcibBloConsumersPct = ApiServiceAdmIndicator.getData('Blocked Consumers from Active Clients').rdataserver;

export const xaucActiveUsersQtd = ApiServiceAdmIndicator.getData('aucActiveUsersQtd').rdataserver;

export const xtmMsgTraffickedQtd = ApiServiceAdmIndicator.getData('tmMsgTraffickedQtd').rdataserver;
