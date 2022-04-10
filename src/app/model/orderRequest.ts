/**
 * Car Rental Webservice
 * This is backend web service for the Car Rental application. For further information, please visit our [Wiki](https://se-2022.atlassian.net/wiki/)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * New order object
 */
export interface OrderRequest { 
    car_id: number;
    location_of_rental_id: number;
    location_of_return_id: number;
    date_of_booking: string;
    date_of_rental: string;
    date_of_return: string;
    method_of_payment: OrderRequest.MethodOfPaymentEnum;
    card_number: string;
    card_security_code: string;
    valid_until: string;
    first_name: string;
    last_name: string;
    email: string;
    order_status: OrderRequest.OrderStatusEnum;
}
export namespace OrderRequest {
    export type MethodOfPaymentEnum = 'DINERS_CLUB' | 'VISA' | 'MASTERCARD' | 'AMERICAN_EXPRESS';
    export const MethodOfPaymentEnum = {
        DinersClub: 'DINERS_CLUB' as MethodOfPaymentEnum,
        Visa: 'VISA' as MethodOfPaymentEnum,
        Mastercard: 'MASTERCARD' as MethodOfPaymentEnum,
        AmericanExpress: 'AMERICAN_EXPRESS' as MethodOfPaymentEnum
    };
    export type OrderStatusEnum = 'CREATED' | 'CANCELED' | 'ACTIVE' | 'RETURNED';
    export const OrderStatusEnum = {
        Created: 'CREATED' as OrderStatusEnum,
        Canceled: 'CANCELED' as OrderStatusEnum,
        Active: 'ACTIVE' as OrderStatusEnum,
        Returned: 'RETURNED' as OrderStatusEnum
    };
}

