<template>
  <section v-if="carrinho.itens.length == 0" class="carrinho-vazio">
    <i class="fa-solid fa-cart-arrow-down carrinho-icon-vazio"></i>
    <span
      style="
        text-align: center;
        font-size: 1.5em;
        color: #8529ad;
        font-weight: bold;
        margin-top: 5px;
      "
    >
      Seu Carrinho está vazio!
    </span>
    <span style="text-align: center; font-size: 1.3em; margin-top: 5px"
      >Volte à tela inicial para adicionar produtos ao Carrinho!</span
    >
    <button
      id="button-voltar"
      @click.stop.prevent="$router.push({ name: 'Home' })"
    >
      VOLTAR A TELA INICIAL
    </button>
  </section>
  <section v-else id="carrinho-estrutura">
    <div class="carrinho-itens-est">
      <h2 class="carrinho-titulo">Seu Carrinho:</h2>
      <div class="carrinho-itens">
        <div
          class="carrinho-iten"
          v-for="(item, index) in carrinho.itens"
          :key="index"
        >
          <div class="img-and-details">
            <img
              :src="item.imagem"
              style="width: 100px; display: inline-block"
              alt="Tênis"
            />
            <div class="iten-details">
              <h2 class="item-titulo" style="display: block">
                {{ item.nome }}
              </h2>
              <div class="item-tamanho" style="display: block">
                <span>Tamanho:</span> {{ item.tamanho }}
              </div>
              <div class="item-tamanho" style="display: block">
                <span>Cor:</span> {{ item.cor }}
              </div>
              <div class="item-tamanho" style="display: block">
                <span>Preço:</span>
                <span class="preco-item">
                  R$
                  {{ item.valor_unitario }}</span
                >
              </div>
            </div>
          </div>
          <div class="quantidade-item-est">
            <span class="quantidade-titulo">Quantidade</span>
            <div class="quantidade-agregadores">
              <button class="agregadores-button agregar" @click="item.qtd += 1">
                <i class="fa-solid fa-plus"></i>
              </button>
              <span class="span-qtd">{{ item.qtd }}</span>
              <button
                class="agregadores-button diminuir"
                :class="{ 'dim-lixeira': item.qtd > 1 ? false : true }"
                @click="item.qtd -= 1"
              >
                <i v-if="item.qtd > 1" class="fa-solid fa-minus"></i>
                <i v-else class="fa-solid fa-trash-can lixeira"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carrinho-infos-est">
      <h2 class="carrinho-titulo">Valores:</h2>
      <div class="carrinho-infos">
        <div class="total-carrinho">
          <span>Total:</span>
          <span class="total-preco"
            >R$ {{ Number(carrinho.preco_total).toFixed(2) }}</span
          >
        </div>
        <button class="button-finalizar">FINALIZAR COMPRA</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["carrinho"]),
  },
};
</script>

<style>
</style>
