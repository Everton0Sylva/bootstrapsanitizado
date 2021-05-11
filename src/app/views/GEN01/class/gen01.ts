export interface Gen01Interface {
		id?: number;
		name?:string;
 }
export interface Gen01ArrayInterface {
		results:Gen01Interface[];
		count: number;
}
export class Gen01 implements Gen01Interface{
		id?: number;
		name?:string;
 }

