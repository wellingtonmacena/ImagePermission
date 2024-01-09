import { SendFilesService } from './../../services/send-files.service';
import { CommonModule } from '@angular/common';
import { FileModel } from 'src/app/models/FileModel';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ FormsModule, ReactiveFormsModule,CommonModule],
  standalone: true,
})
export class HomeComponent {
  @Input() btnText!: string;

  fileModelForm!: FormGroup;

  ngOnInit(): void {
    this.fileModelForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.fileModelForm.get('title')!;
  }

  get description() {
    return this.fileModelForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileModelForm.patchValue({ image: file });
  }

  submit() {
    if (this.fileModelForm.invalid) return;

    console.log('Enviou formulario');
    console.log(this.fileModelForm.value);
  }
}
