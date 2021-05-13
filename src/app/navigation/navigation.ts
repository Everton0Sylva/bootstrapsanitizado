import { IMenuItem } from "src/app/constants/_nav";

export const menuMain: IMenuItem[] = [
	{
	  icon: 'iconsminds-home-4',
	  label: 'HOME',
	  to: '/web/home',
	},
	{
	  icon: 'iconsminds-idea',
	  label: 'Gen01',
	  to: '/web/gen01',
	},
	{
	  id: 'cadastros',
	  icon: 'iconsminds-id-card',
	  label: 'CADASTROS',
	  subs: [
		{
		  icon: 'iconsminds-mine',
		  label: 'PRODUTOS',
		  to: '/web',
		},
		{
		  icon: 'iconsminds-hotel',
		  label: 'EMITENTE',
		  to: '/web',
		},
	  ]
	},
	{
	  id: 'emissao',
	  icon: 'iconsminds-financial',
	  label: 'EMISSÃO',
	  subs: [
		{
		  icon: 'iconsminds-right-2',
		  label: 'EMITIR NFE',
		  to: '/web',
		},
		{
		  icon: 'iconsminds-files',
		  label: 'ABERTAS',
		  to: '/web',
		},
		{
		  icon: 'iconsminds-letter-open',
		  label: 'EMITIDAS',
		  to: '/web',
		},
		{
		  icon: 'iconsminds-close',
		  label: 'CANCELADAS',
		  to: '/web',
		},
		{
		  icon: 'iconsminds-box-with-folders',
		  label: 'TODAS',
		  to: '/web',
		}
	  ]
	},
  
  ];