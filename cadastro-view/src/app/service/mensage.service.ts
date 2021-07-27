import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(public toastr: ToastrService) {
    }

    info(message: string): void {
        this.toastr.info(message);
    }

    success(message: string): void {
        this.toastr.success(message, 'Tudo OK!');
    }

    error(message: string): void {
        this.toastr.error(message
            || 'Ocorreu um erro desconhecido. Por favor, contate o administrador.', 'Oops!');
    }

    warning(title: string, text: string, preConfirm: () => Promise<any>): any {
        return Swal.fire({
            text: text,
            title: title,
            icon: 'warning',
            focusCancel: true,
            reverseButtons: true,
            showCancelButton: true,
            cancelButtonText: 'Não',
            confirmButtonText: 'Sim',
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            confirmButtonColor: 'primary',
            preConfirm: preConfirm
        });
    }

    catchError = (errorObj: { message: any; }) => this.error(errorObj?.message);

}
