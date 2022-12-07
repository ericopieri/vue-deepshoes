<template>
  <div id="estrutura-cadastro-produtos">
    <div id="container-cadastro-produtos">
      <div id="container-form-cadastro">
        <h1 style="text-align: center; font-size: 1.5em">
          INFORMAÇÕES DO PRODUTO
        </h1>
        <form action="" id="form-cadastro-produto">
          <label for="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            v-model="novoProduto.nome"
          />
          <label for="desc">Descrição:</label>
          <input
            type="text"
            name="desc"
            placeholder="Descrição"
            v-model="novoProduto.descricao"
          />
          <label for="genero">Genero:</label>
          <select name="genero" id="marca-select" v-model="novoProduto.genero">
            <option value="Indefinido">Indefinido</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
          <label for="preco">Preço:</label>
          <input
            type="text"
            name="preco"
            placeholder="Preço"
            v-model="novoProduto.valor_unitario"
            v-mask="'##.##'"
          />
          <label for="qtd_estoque">Quantidade em Estoque:</label>
          <input
            type="number"
            name="qtd_estoque"
            placeholder="Quantidade em Estoque"
            v-model="novoProduto.qtd_estoque"
          />
          <label for="marca">Marca:</label>
          <select name="marca" id="marca-select" v-model="novoProduto.marca">
            <option :value="marca.id" v-for="marca of marcas" :key="marca.id">
              {{ marca.descricao }}
            </option>
          </select>
          <label for="tamanho">Tamanho:</label>
          <select
            name="tamanho"
            id="marca-select"
            v-model="novoProduto.tamanho"
          >
            <option
              v-for="tamanho of tamanhos"
              :key="tamanho.id"
              :value="tamanho.id"
            >
              {{ tamanho.descricao }}
            </option>
          </select>
          <label for="cor">Cor:</label>
          <select name="cor" id="marca-select" v-model="novoProduto.cor">
            <option v-for="cor of cores" :key="cor.id" :value="cor.id">
              {{ cor.descricao }}
            </option>
          </select>
          <p class="error-produto" v-show="hasError">
            Ocorreu um erro! Confira os campos e tente novamente!
          </p>
          <button
            id="button-finalizar-cadastro"
            @click.stop.prevent="enviarProduto"
          >
            Finalizar Cadastro
          </button>
        </form>
      </div>
      <div id="container-upload-foto">
        <img
          src="../assets/interrogacao.jpg"
          id="foto-produto-upload"
          alt=""
          ref="image_produto_div"
        />
        <div id="div-input-text">
          <input type="file" name="file" id="upload-produto" />
          <button
            id="button-upload-produto"
            @click="$refs.input_imagem_produto.click()"
          >
            Upload imagem
          </button>
          <span>Adicione uma imagem com dimensão 300x300</span>
        </div>
      </div>
    </div>
    <input
      type="file"
      v-show="false"
      @change="changeImagem"
      ref="input_imagem_produto"
    />
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      marcas: [],
      tamanhos: [],
      cores: [],
      novoProduto: {
        marca: 1,
        tamanho: 1,
        genero: "Indefinido",
        cor: 1,
      },
    };
  },

  created() {
    this.getMarcas();
    this.getTamanhos();
    this.getCores();
  },

  methods: {
    async getMarcas() {
      const { data } = await api.get("api/marcas/");

      this.marcas = data;
    },

    async getTamanhos() {
      const { data } = await api.get("api/tamanhos/");

      this.tamanhos = data;
    },

    async getCores() {
      const { data } = await api.get("api/cores/");

      this.cores = data;
    },

    changeImagem() {
      const file = this.$refs.input_imagem_produto.files[0];
      const reader = new FileReader();
      const _this = this;

      reader.onload = (result) => {
        const imagem = reader.result.split(",")[1];
        _this.$refs.image_produto_div.src = reader.result;

        console.log(result);

        _this.novoProduto.imagem = imagem;
      };
      reader.readAsDataURL(file);
    },

    async enviarProduto() {
      this.hasError = false;

      try {
        const { data } = await api.post("api/produtos/", this.novoProduto);
        this.$router.push({
          name: "ProdutoDetalhado",
          params: { id: data.id },
        });
      } catch (e) {
        this.hasError = true;
      }
    },
  },
};
</script>

<style></style>
