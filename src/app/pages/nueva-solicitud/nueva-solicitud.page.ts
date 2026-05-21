import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IonContent, IonIcon, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    arrowBackOutline, cartOutline, medkitOutline, peopleOutline,
    documentTextOutline, carOutline, ellipsisHorizontalCircleOutline,
    micOutline, calendarOutline, timeOutline,
} from 'ionicons/icons';

export type CategoriaId =
    'compras' | 'medicinas' | 'compania' | 'tramites' | 'traslados' | 'otros';

export interface CategoriaMeta {
    label: string;
    icon: string;
    placeholder: string;
}
export const CATEGORIA_META: Record<CategoriaId, CategoriaMeta> = {
    compras: { label: 'Compras', icon: 'cart-outline', placeholder: 'Escriba aquí lo que necesita comprar...' },
    medicinas: { label: 'Medicinas', icon: 'medkit-outline', placeholder: 'Escriba aquí los medicamentos que necesita...' },
    compania: { label: 'Compañía', icon: 'people-outline', placeholder: 'Describa el tipo de compañía que necesita...' },
    tramites: { label: 'Trámites', icon: 'document-text-outline', placeholder: 'Describa el trámite que necesita gestionar...' },
    traslados: { label: 'Traslados', icon: 'car-outline', placeholder: 'Indique el destino y motivo del traslado...' },
    otros: { label: 'Otros', icon: 'ellipsis-horizontal-circle-outline', placeholder: 'Describa con detalle en qué necesita ayuda...' },
};

const DEFAULT_CATEGORIA: CategoriaId = 'otros';

@Component({
    selector: 'app-nueva-solicitud',
    templateUrl: './nueva-solicitud.page.html',
    styleUrls: ['./nueva-solicitud.page.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IonContent, IonIcon, IonHeader, IonToolbar],
})
export class NuevaSolicitudPage implements OnInit {


    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);


    categoriaMeta: CategoriaMeta = CATEGORIA_META[DEFAULT_CATEGORIA];
    categoriaId: CategoriaId = DEFAULT_CATEGORIA;


    readonly form = new FormGroup({
        descripcion: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(10)],
        }),
        fecha: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        hora: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
    });


    get descripcionCtrl() { return this.form.controls.descripcion; }
    get fechaCtrl() { return this.form.controls.fecha; }
    get horaCtrl() { return this.form.controls.hora; }


    constructor() {
        addIcons({
            arrowBackOutline, cartOutline, medkitOutline, peopleOutline,
            documentTextOutline, carOutline, ellipsisHorizontalCircleOutline,
            micOutline, calendarOutline, timeOutline,
        });
    }


    ngOnInit(): void {
        this.route.queryParams
            .pipe(takeUntilDestroyed())   // evita memory leak
            .subscribe(params => {
                const id = (params['categoria'] ?? DEFAULT_CATEGORIA) as CategoriaId;
                this.categoriaId = CATEGORIA_META[id] ? id : DEFAULT_CATEGORIA;
                this.categoriaMeta = CATEGORIA_META[this.categoriaId];
            });
    }


    volver(): void {
        this.router.navigate(['/categoria-vecinos']);
    }

    enviarSolicitud(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const payload = {
            categoria: this.categoriaId,
            ...this.form.getRawValue(),
        };

        console.log(payload);
        this.router.navigate(['/tabs/inicio']);
    }
}