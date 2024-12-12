import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-amplificadores',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './amplificadores.component.html',
  styleUrl: './amplificadores.component.css'
})
export class AmplificadoresComponent {
  produtos: Produto[] = [
    new Produto("Amplificador Para Baixo Rumble Stage 800 - Fender", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMtRUovNDo7EozZZbd1Qo25Vu6tjjIDPzquITr-C9eqeO0K3mSfisDuJBTKlvPWJJV_T7jTNcTig9tDNWQvCOjtuU2qz02LPsLveZ2oGM0cUzG43FIW1kD&usqp=CAE", 8000, ""),

    new Produto("Amplificador Para Guitarra Boss Katana KTN-100", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUK96YTXXJcLhXNn6wvBlBDvImfm87Yg80AnMFoEWM-oIx7kKTMyEdEATcNiJqX6tvb0c9fn2pPXlGhuIzye14nCiC4wsA8nX8Fob_dJk&usqp=CAE", 5500, ""),

    new Produto("Amplificador Para Baixo Bugera Bxd12 1000w", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUTm2KXwvxmqiqOCZFeFdV1rkC4NoiD1xo6u6g7EZ4lhvOU9dzGZCji3VVAUx7_62h2waxKdrKboST2p_2Dh0aU2CNAJQ7-B2XOCpTAZKulce4iVsvsZPY&usqp=CAE", 5400, ""),

    new Produto("Amplificador Para Guitarra 50W Fender Champion", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWasPywc33Y2M4Y0oQQ2fDapiYj3-yk-ggurKt2jyRfbor28OtHlSlfOy2xiXr6jPOJMhtJ3TSGGau_fDF7lzjpUJEr1PSec2qC6F33d6NKHJFVkgtSt1Y&usqp=CAE", 3600, ""),

    new Produto("Amplificador Para Guitarra 15w MG15GFX Marshall", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFO_ULltkdesyab7NXHPamSnHeAMqZ9Zhu-XhiYPKlo0KYq4xiqXDgN_lloq2WEmFdibzImzje6CmA6z5KpgdtRMs5Jelh_qUB9g-76dIQHW0XAXwFtPsfuA&usqp=CAE", 2200, ""),

    new Produto("Amplificador Baixo Borne GB400 Go Bass 120w", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSdKQSO7D2A5YV7GW2EWWelRbt-KI7x7tloeS7CXv_5xkKZg1fEoN4I22dgHM-1-L6ZPl2I73go2YTOAnoIdWeo93IOeIZweqOiDMuwwxOjHf2JnEQK0bejQ&usqp=CAE", 1700, ""),

    new Produto("Amplificador Guitarra Borne Vorax 2080 60w", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3y1YONMJCqftqk4lbNpYml0BFRsU9qvyzpyXoVTeuIX5s0ASrkiVjUNDdmOUWvYu8RfEZce10-Bw_EdLolamSJ0_HYM_CNCKEhlXvkf_6JNhQ5q5XqfV7&usqp=CAE", 1500, ""),

    new Produto("Amplificador Baixo Iron 150Cb 12 Polegadas - 80W", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSiHV9AiJt7hfZmK5bAVKvWIwouu71LgjP0Akm9c58kWdvYcUquj3b9_BnlUA4Ij9QGzkPPS1UBmUPnIHmoX_2edZKCoevD-mxemUk_58NhMO765npp_poW_w&usqp=CAE", 1100, ""),

    new Produto("Amplificador Peavey Guitarra Transtube Lacrado", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTO-3TwbYbW4Ad3HDYouCXfUfuT4F0hUsaNsHgcfgATI1qdBMv2QEZEaL_LEQKpDNLJtwyTpUD9AFAHvv5r9m4x7emC5MWAD0NqGQDKhUtnXNp_kNaWjIMjg&usqp=CAE", 1000, ""),

    new Produto("Amplificador Guitarra Meteoro Nitrous Drive 15w", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFxqi31mrHKgBRD2MXPHBk_oiPaEN7tXrxn2E4Lp1E2689YInZJFRCxcgrQEpECNmcLoPS8DkJPfngiTw9cgCG1NFwnqzhHTIOmdPFg_2S&usqp=CAE", 900, ""),

    new Produto("Amplificador Baixo 20W Impact Bass Cb60 Borne", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnS1s2ooCG8SLJmCk8Ct3IwLVH-mS0KlOSdS7I26WI6nMbdYQqhnNDl-SQeVeQtIqGO9RQVVmxbILeD4OQUAmMqDtyOSDxD7dME32ZsnmzDkZnKdId_6CE&usqp=CAE", 800, ""),

    new Produto("Amplificador Baixo Mackintec Bx30 Young 30w", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfhSHfF_ccxB9DRlH3ircZ80NbDV7W_PEDUzNCzn7W3OBtyb2EqTq_MmfWirEgRSS7Tf1xmRAli-giBtFxrCgXS1iKo3q4dyV9TNEaI1UwP16IVMq_6gGm&usqp=CAE", 700, ""),

    new Produto("Amplificador Guitarra Datrel Guitar 30 8 30w", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLWFL_zMr5Pxpf_HB4i0D_9NChcDYmGulZxXVGN5l_eyeQKJUFSF-_ICrBJbzisZm0vqWwVsbPT60u2G49QUfWolZHJCZYyrL5O3bd-up1TmoUo2XRH_ev&usqp=CAE", 500, ""),

    new Produto("Amplificador Sheldon Bss150 Para Baixo 15w", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGSPARAn5Xbcen6Vv5tGz67QSSKcY_-ROgubK7ws0gl_2DeAGFC7g8bzzH7kYduvGkWftXG8pH7Sp6GnFieA93Wo4rKnltSsJW25Qn_Q_JgcLxjmlVhpds&usqp=CAE", 400, ""),

    new Produto("Amplificador Guitarra Mackintec Maxx 15 Preto 6", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQn9XudRmoamAvILhKAWkklphdiqGW27TA5JSlgHlIPudj83bZlHIL3y_-9WbCVe7J0V9NHEvQHdTUUkcKhFR4s_3gi7Eob6l47lfabXwrnlmWqb5gqH-7c&usqp=CAE", 300, "")
  ]

  showMessage: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 100000}`;
    });
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
    this.exibirMensagemTemporaria();
  }

  private exibirMensagemTemporaria() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
}
