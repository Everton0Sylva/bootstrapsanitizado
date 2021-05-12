export interface SaleInterface {
	id?: number;
	created?: string;
	updated?: string;
	quantity?: string;
	gen01seller_id?: any;
	gen01product_id?: any;

}
export interface SaleArrayInterface {
	results: SaleInterface[];
	count: number;

}
export class Sale implements SaleInterface {
	id?: number;
	created?: string;
	updated?: string;
	quantity?: string;
	gen01seller_id?: any;
	gen01product_id?: any;
}
