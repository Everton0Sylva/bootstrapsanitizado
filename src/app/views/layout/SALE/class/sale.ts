export interface SaleInterface {
	id?: number;
	created?: string;
	updated?: string;
	quantity?: string;
	gen01seller_id?: number;
	gen01product_id?: number;

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
	gen01seller_id?: number;
	gen01product_id?: number;
}
