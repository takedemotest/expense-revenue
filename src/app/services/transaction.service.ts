import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Transaction {
  _id?: string;
  type: string;
  amount: number;
  category: string;
  mainActivity: string;
  createdAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  count?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private url = 'https://takedemotest-github-io.onrender.com/api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(mainActivity?: string): Observable<ApiResponse<Transaction[]>> {
    let params = new HttpParams();
    if (mainActivity) {
      params = params.set('mainActivity', mainActivity);
    }
    return this.http.get<ApiResponse<Transaction[]>>(this.url, { params });
  }

  getFinancialSummary(mainActivity?: string): Observable<ApiResponse<any>> {
    let params = new HttpParams();
    if (mainActivity) {
      params = params.set('mainActivity', mainActivity);
    }
    return this.http.get<ApiResponse<any>>(`${this.url}/summary`, { params });
  }

  createTransaction(transaction: Transaction): Observable<ApiResponse<Transaction>> {
    return this.http.post<ApiResponse<Transaction>>(this.url, transaction);
  }

  deleteTransaction(id: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.url}/${id}`);
  }
}
