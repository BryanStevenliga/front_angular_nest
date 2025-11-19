import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormGroup, FormControl } from '@angular/forms';

interface Categoria {
  id?: number,
  nombre: string;
  detalle?: string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

  private categoriaService = inject(CategoriaService)

  categorias: Categoria[]=[]
  dialog_visible: boolean=false;
  categoriaForm = new FormGroup({
        nombre: new FormControl(''),
        detalle: new FormControl('')
    });
  

  ngOnInit(): void {
    this.getCategorias()
  }

  getCategorias(){
    
    this.categoriaService.funListar().subscribe(
    (res:any)=>{
      this.categorias=res;
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }
  mostrarDialog(){

    this.dialog_visible=true
  }
  guardarCategoria() {
    // Verificar si el formulario es válido antes de enviar
    if (this.categoriaForm.valid) { 
        this.categoriaService.funGuardar(this.categoriaForm.value).subscribe({
            next: (res: any) => {
                // 1. Cierra el modal
                this.dialog_visible = false; 
                
                // 2. ¡LLAMA A LA FUNCIÓN DE LISTADO!
                this.getCategorias(); // Esto solicita la lista actualizada al backend
                
                // Opcional: Mostrar una notificación de éxito (PrimeNG Message o Toast)
            },
            error: (error: any) => {
                console.log("Error al guardar:", error);
            }
        });
    }
}}