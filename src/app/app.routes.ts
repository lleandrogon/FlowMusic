import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AcessoriosComponent } from './components/acessorios/acessorios.component';
import { AmplificadoresComponent } from './components/amplificadores/amplificadores.component';
import { CordasComponent } from './components/cordas/cordas.component';
import { PercussaoComponent } from './components/percussao/percussao.component';
import { TeclasComponent } from './components/teclas/teclas.component';
import { SoproComponent } from './components/sopro/sopro.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CompraEfetuadaComponent } from './components/compra-efetuada/compra-efetuada.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
    },
    {
        path: "campo-acessorios",
        component: AcessoriosComponent
    },
    {
        path: "campo-amplificadores",
        component: AmplificadoresComponent
    },
    {
        path: "campo-cordas",
        component: CordasComponent
    },
    {
        path: "campo-percussao",
        component: PercussaoComponent
    },
    {
        path: "campo-teclas",
        component: TeclasComponent
    },
    {
        path: "campo-sopro",
        component: SoproComponent
    },
    {
        path: "carrinho",
        component: CarrinhoComponent
    },
    {
        path: "compra-efetuada",
        component: CompraEfetuadaComponent
    }
];
