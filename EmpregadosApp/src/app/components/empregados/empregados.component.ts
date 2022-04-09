import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Empregado } from 'src/app/Empregado';
import { EmpregadosService } from 'src/app/empregados.service';

@Component({
  selector: 'app-empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.css']
})
export class EmpregadosComponent implements OnInit {
  //variável que representará o formulário
  formulario: any;
  tituloFormulario!: string;

  //armazenará todas os empregados lidos do BD
  empregados!: Empregado[];

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  //criar variáveis para form de exclusão
  nome!: string;
  id!: number;

  modalRef!: BsModalRef;

  //Injetar serviço no construtor
  constructor(private empregadosService: EmpregadosService, private modalService: BsModalService) { }

  ngOnInit(): void {
    //onde os componentes são inicializados

    this.empregadosService.GetAll().subscribe(resultado => {
      this.empregados = resultado;
    });
  }

  ExibirFormularioCadastro(): void{

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.tituloFormulario = 'Novo(a) Empregado(a)';
    this.formulario = new FormGroup({
      //FormControls: são os inputs. O formGroup agrupa todos
      agencia: new FormControl(3306),
      matricula: new FormControl(null),
      nome: new FormControl(null),
      dataNascimento: new FormControl(null),
      funcao: new FormControl(null),
      escolaridade: new FormControl(null),
    });
  }

  EnviarFormulario(): void{
    //variável que armazenará os dados do formulário
    const empregado : Empregado = this.formulario.value;

    //Por aproveitar o form para cadastro e atualização, será verificado se o ID do empregado é maior que zero
    //Se sim, significa que não será cadastro, e sim atualização. Senão, será cadastro o funcionário
    if(empregado.id > 0){
      this.empregadosService.AtualizarEmpregado(empregado).subscribe(resultado => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Empregado atualizado com sucesso!');
        this.empregadosService.GetAll().subscribe(registros => {
          this.empregados = registros;
        });  
      });
    } else {
      //subscribe => executa a função | resultado <- atributo que receberá algo do servidor
      this.empregadosService.SetEmpregado(empregado).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Empregado inserido com sucesso!');
        this.empregadosService.GetAll().subscribe(registros => {
          this.empregados = registros;
        });
      });
    }
  }

  ExibirFormularioAtualizacao(id: number): void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.empregadosService.GetId(id).subscribe(resultado => {
      this.tituloFormulario = `Atualizar ${resultado.nome}`;

      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        agencia: new FormControl(resultado.agencia),
        matricula: new FormControl(resultado.matricula),
        nome: new FormControl(resultado.nome),
        dataNascimento: new FormControl(resultado.dataNascimento),
        escolaridade: new FormControl(resultado.escolaridade),
        funcao: new FormControl(resultado.funcao)
      });
    });
  }

  ExibirConfirmacaoExclusao(id: number, nome: string, conteudoModal: TemplateRef<any>): void{
    //O conteudo do HTML aparece em uma caixinha (modal)
    this.modalRef = this.modalService.show(conteudoModal);
    this.id = id;
    this.nome = nome;
  }

  ExcluirEmpregado(id: number){
    this.empregadosService.DeletarEmpregado(id).subscribe(resultado => {
      this.modalRef.hide();
      alert("Empregado(a) deletado(a) com sucesso!");
      this.empregadosService.GetAll().subscribe(registros => {
        this.empregados = registros;
      });
    });
  }

  Voltar(): void{
    //seta os valores das visibilidades
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }
}
