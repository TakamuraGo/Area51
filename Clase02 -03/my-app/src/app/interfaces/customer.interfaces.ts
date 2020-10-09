export type CustomerType = 'new' | 'regular' | 'vip';

export interface Customer {
    name:string;
    level :CustomerType;
}
