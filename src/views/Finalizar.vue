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
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      enderecos: [],
      endereco_entrega: undefined,
    };
  },

  async created() {
    this.getEnderecos();
  },

  methods: {
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
  },
};
</script>

<style>
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