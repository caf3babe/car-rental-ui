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
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent, HttpParameterCodec, HttpContext
} from '@angular/common/http';
import {CustomHttpParameterCodec} from '../encoder';
import {filter, flatMap, map, Observable, switchAll, switchMap} from 'rxjs';

// @ts-ignore
import {ApiError} from '../model/apiError';
// @ts-ignore
import {Order} from '../model/order';
// @ts-ignore
import {OrderRequest} from '../model/orderRequest';
// @ts-ignore
import {Response} from '../model/response';

// @ts-ignore
import {environment} from '../../environments/environment';
import {Configuration} from '../configuration';
import {AuthService} from "./auth.service";
import {LoginOrderRequest} from "../model/loginOrderRequest";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  protected basePath = 'http://localhost:1234';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(protected httpClient: HttpClient, protected authService: AuthService, @Optional() configuration: Configuration) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      this.basePath = environment.BASE_PATH
      this.configuration.basePath = this.basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }


  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        (value as any[]).forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key,
            (value as Date).toISOString().substr(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(
          httpParams, value[k], key != null ? `${key}.${k}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }

  /**
   * Create a new order
   * @param orderRequest
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createOrder(orderRequest: OrderRequest, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Order>;
  public createOrder(orderRequest: OrderRequest, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Order>>;
  public createOrder(orderRequest: OrderRequest, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Order>>;
  public createOrder(orderRequest: OrderRequest, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (orderRequest === null || orderRequest === undefined) {
      throw new Error('Required parameter orderRequest was null or undefined when calling createOrder.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (bearerAuth) required
    localVarCredential = this.configuration.lookupCredential('bearerAuth');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
    }

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }


    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.post<Order>(`${this.configuration.basePath}/order`,
      orderRequest,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Delete an order by id
   * @param id The id of the order to update
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteOrderById(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Response>;
  public deleteOrderById(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Response>>;
  public deleteOrderById(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Response>>;
  public deleteOrderById(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteOrderById.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (bearerAuth) required
    localVarCredential = this.configuration.lookupCredential('bearerAuth');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
    }

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }


    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.delete<Response>(`${this.configuration.basePath}/order/${encodeURIComponent(String(id))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Get all orders
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllOrders(observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Array<Order>>;
  public getAllOrders(observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Array<Order>>>;
  public getAllOrders(observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Array<Order>>>;
  public getAllOrders(observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (bearerAuth) required
    localVarCredential = this.configuration.lookupCredential('bearerAuth');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
    }

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }


    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<Array<Order>>(`${this.configuration.basePath}/order`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Get oder by id and last name
   * @param id The id of the order to retrieve
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getOrderById(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Order>;
  public getOrderById(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Order>>;
  public getOrderById(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Order>>;
  public getOrderById(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getOrderById.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (bearerAuth) required
    localVarCredential = this.configuration.lookupCredential('bearerAuth');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
    }

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }


    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<Order>(`${this.configuration.basePath}/order/${encodeURIComponent(String(id))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Update order by Id
   * @param id The id of the order to update
   * @param orderRequest
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateOrderById(id: string, orderRequest: OrderRequest, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Order>;
  public updateOrderById(id: string, orderRequest: OrderRequest, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Order>>;
  public updateOrderById(id: string, orderRequest: OrderRequest, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Order>>;
  public updateOrderById(id: string, orderRequest: OrderRequest, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateOrderById.');
    }
    if (orderRequest === null || orderRequest === undefined) {
      throw new Error('Required parameter orderRequest was null or undefined when calling updateOrderById.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (bearerAuth) required
    localVarCredential = this.configuration.lookupCredential('bearerAuth');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
    }

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }


    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.put<Order>(`${this.configuration.basePath}/order/${encodeURIComponent(String(id))}`,
      orderRequest,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Update order + car status per Id
   * @param id
   * @param status
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateStatusById(id: string, status: 'CREATED' | 'CANCELED' | 'ACTIVE' | 'RETURNED', observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Order>;
  public updateStatusById(id: string, status: 'CREATED' | 'CANCELED' | 'ACTIVE' | 'RETURNED', observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Order>>;
  public updateStatusById(id: string, status: 'CREATED' | 'CANCELED' | 'ACTIVE' | 'RETURNED', observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Order>>;
  public updateStatusById(id: string, status: 'CREATED' | 'CANCELED' | 'ACTIVE' | 'RETURNED', observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateStatusById.');
    }
    if (status === null || status === undefined) {
      throw new Error('Required parameter status was null or undefined when calling updateStatusById.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (bearerAuth) required
    localVarCredential = this.configuration.lookupCredential('bearerAuth');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
    }

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }


    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.put<Order>(`${this.configuration.basePath}/order/${encodeURIComponent(String(id))}/${encodeURIComponent(String(status))}`,
      null,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }


  /**
   * Creates Order and updates the corresponding Car status
   * @param orderRequest
   * @return Order.orderId
   */
  public createOrderUpdateCar(orderRequest: OrderRequest): Observable<String> { // todo make this return the id
    return this.createOrder(orderRequest)
      .pipe(
        switchMap(
          res => this.authService.loginOrder({order_id: res.orderId, last_name: res.last_name}
          ).pipe(
              switchMap(res2 => {
                this.configuration.credentials = this.authService.getCredentialsForToken(res2.token);
                return this.updateStatusById(res.orderId, Order.OrderStatusEnum.Active).pipe(
                  map(res3 => res3.orderId)
                )
              })
          )
        )
      );
  }

}
