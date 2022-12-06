<template>
  <div class="finalizar-est">
    <h2 class="titulo-finalizar">
      Finalização do seu Carrinho <i class="fa-solid fa-circle-check"></i>
    </h2>

    <section class="endereco-est">
      <h3 class="titulo-enderecos-finalizar">
        Escolha um endereço para a entrega do pedido!
      </h3>
      <div class="est-enderecos" v-if="enderecos.length">
        <div
          class="box-endereco box-endereco-finalizar"
          v-for="(endereco, index) of enderecos"
          :data-id="String(endereco.id)"
          @click="changeEndereco(endereco.id)"
          :key="index"
        >
          <p>
            {{ endereco.logradouro }}, {{ endereco.numero }} -
            {{ endereco.complemento }}
          </p>
          <p>
            {{ endereco.bairro }} - {{ endereco.municipio }},
            {{ endereco.estado }}
          </p>
          <p>{{ endereco.referencia }}</p>
        </div>
      </div>
      <div class="sem-enderecos" v-else>
        <span class="sem-enderecos-span">
          Sem endereços cadastrados, vá até a página de cadastro de endereços e
          cadastre antes de tentar comprar produtos!
        </span>
        <button
          class="pagina-enderecos-button"
          @click="$router.push({ name: 'AdicionarEndereco' })"
        >
          Ir à página de Cadastro de Endereço
        </button>
      </div>
    </section>
    <h2 class="titulo-pagamento">
      Pagamento <i class="fa-solid fa-credit-card"></i>
    </h2>
    <section class="cartoes-est">
      <h3 class="titulo-enderecos-finalizar">Informações de cobrança</h3>
      <input
        type="text"
        class="input-dados margem-10px"
        placeholder="Número do Cartão"
      />
      <input type="text" class="input-dados margem-10px" placeholder="CVV" />
      <input type="text" class="input-dados margem-10px" placeholder="DD/MM" />
      <input
        type="text"
        class="input-dados margem-10px"
        placeholder="Nome Dono"
      />
      <select
        name="parcelas"
        id="parcelas"
        class="input-dados margem-10px"
        v-model="qtd_parcela"
      >
        <option value="1">
          1x de R$ {{ calcularValorParcela(1).toFixed(2) }}
        </option>
        <option value="2">
          2x de R$ {{ calcularValorParcela(2).toFixed(2) }}
        </option>
        <option value="3">
          3x de R$ {{ calcularValorParcela(3).toFixed(2) }}
        </option>
        <option value="4">
          4x de R$ {{ calcularValorParcela(4).toFixed(2) }}
        </option>
        <option value="5">
          5x de R$ {{ calcularValorParcela(5).toFixed(2) }}
        </option>
        <option value="6">
          6x de R$ {{ calcularValorParcela(6).toFixed(2) }}
        </option>
        <option value="7">
          7x de R$ {{ calcularValorParcela(7).toFixed(2) }}
        </option>
        <option value="8">
          8x de R$ {{ calcularValorParcela(8).toFixed(2) }}
        </option>
        <option value="9">
          9x de R$ {{ calcularValorParcela(9).toFixed(2) }}
        </option>
        <option value="10">
          10x de R$ {{ calcularValorParcela(10).toFixed(2) }}
        </option>
      </select>
    </section>
    <section class="finalizar-pagamento">
      <div class="precos-finalizar">
        <p class="preco-normal" v-show="!(carrinho.preco_total == preco_novo)">
          R$
          <span class="cortado">{{ this.carrinho.preco_total }}</span>
        </p>
        <p class="preco-normal verdinho">R$ {{ preco_novo }}</p>
        <p class="desconto">{{ descontoMenssagem }}</p>
      </div>
      <button class="button-finalizar-finalizar" @click="finalizarCarrinho">
        FINALIZAR CARRINHO
      </button>
    </section>
  </div>
</template>

<script>
import { api } from "../axios/index";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      enderecos: [],
      descontoMenssagem: "",
      endereco_entrega: undefined,
      preco_novo: 0,
      qtd_parcela: "1",
    };
  },

  async mounted() {
    await this.getEnderecos();
    this.calcularNovoPreco();
  },

  methods: {
    ...mapActions(["UPDATE_CARRINHO", "GET_CARRINHO"]),

    calcularNovoPreco() {
      const qtd_itens = this.carrinho.itens.reduce((qtd_itens, item) => {
        return (qtd_itens += item.qtd_produto);
      }, 0);

      if (qtd_itens > 2 && qtd_itens <= 5) {
        this.descontoMenssagem = "Desconto de 10% aplicado!";
        this.preco_novo = (this.carrinho.preco_total * 0.9).toFixed(2);
        return;
      }

      if (qtd_itens > 5 && qtd_itens <= 10) {
        this.descontoMenssagem = "Desconto de 15% aplicado!";
        this.preco_novo = (this.carrinho.preco_total * 0.85).toFixed(2);
        return;
      }

      if (qtd_itens > 10) {
        this.descontoMenssagem = "Desconto de 25% aplicado!";
        this.preco_novo = (this.carrinho.preco_total * 0.75).toFixed(2);
        return;
      }

      this.descontoMenssagem =
        "Adicione mais itens no carrinho e ganhe descontos!";
      this.preco_novo = this.carrinho.preco_total;
    },

    calcularValorParcela(qtd_parcela) {
      return this.preco_novo / qtd_parcela;
    },

    async getEnderecos() {
      const { data } = await api.get("/api/enderecos");

      this.enderecos = data;
    },

    changeEndereco(id) {
      const boxEnderecos = document.querySelectorAll(".box-endereco-finalizar");

      boxEnderecos.forEach((boxEndereco) => {
        boxEndereco.classList.remove("ativo");
      });

      document
        .querySelector(`.box-endereco-finalizar[data-id='${id}']`)
        .classList.add("ativo");

      this.endereco_entrega = id;
    },

    async finalizarCarrinho() {
      const valor_parcela = (this.preco_novo / this.qtd_parcela).toFixed(2);
      const itens = this.carrinho.itens.map((item) => {
        return {
          produto: item.produto.id,
          qtd_produto: item.qtd_produto,
        };
      });

      try {
        await api.patch(`api/pedidos/${this.carrinho.id}/`, {
          itens: itens,
          finalizado: true,
          valor_parcela,
          qtd_parcela: this.qtd_parcela,
          preco_final: this.preco_novo,
          endereco_entrega: this.endereco_entrega,
        });
        this.$router.push({ name: "Carrinho" });
        await this.GET_CARRINHO();
      } catch (e) {
        console.error(e);
      }
    },
  },

  computed: {
    ...mapState(["carrinho"]),
  },
};
</script>

<style>
.desconto {
  margin-top: 5px;
}

.preco-normal + .preco-normal {
  margin-top: 5px;
}

.cortado {
  text-decoration: line-through;
}

.preco-normal {
  font-size: 1.2em;
  color: grey;
  font-weight: 700;
}

.verdinho {
  color: green;
}

.button-finalizar-finalizar {
  cursor: pointer;
  padding: 5px 30px;
  font-size: 1.2em;
  color: white;
  background: green;
  border: none;
}

.finalizar-pagamento {
  display: flex;
  justify-content: space-between;
  margin: 50px 0 20px 0;
  padding: 20px;
  width: 100%;
  background: rgb(242, 242, 242);
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
}

.cartoes-est {
  padding: 20px;
  width: 100%;
  background: rgb(242, 242, 242);
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
}

.titulo-pagamento {
  text-align: center;
  margin: 30px 0;
  color: #8529ad;
}

.pagina-enderecos-button {
  font-size: 1.35em;
  color: white;
  border: none;
  padding: 8px 0;
  border-radius: 5px;
  background: #8529ad;
  width: 390px;
  display: block;
  margin: 20px auto 0 auto;
}

.sem-enderecos-span {
  width: 100%;
  display: inline-block;
  color: red;
  text-align: center;
}

.ativo {
  border: 1px solid #8529ad;
}

.box-endereco-finalizar {
  cursor: pointer;
}

.box-endereco-finalizar + .box-endereco-finalizar {
  margin-top: 10px;
}

.titulo-enderecos-finalizar {
  text-align: center;
  margin-bottom: 20px;
}

.titulo-finalizar {
  color: #8529ad;
  text-align: center;
  margin-bottom: 30px;
}

.finalizar-est {
  width: 1000px;
  margin: 40px auto 0 auto;
}

.endereco-est {
  padding: 20px;
  width: 100%;
  background: rgb(242, 242, 242);
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
}
</style>