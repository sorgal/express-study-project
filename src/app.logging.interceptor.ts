import {
    CallHandler,
    Injectable,
    NestInterceptor,
    ExecutionContext
} from '@nestjs/common';
import { response } from 'express';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                tap((data) => {
                    return response.json({ status: 'success', data: data })
                }),
                catchError(err => {
                    return throwError({ status: 'error', data: err })
                })
            );
    }

}