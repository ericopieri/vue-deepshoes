<template>
  <section v-if="!(cart.items.length > 0)" class="carrinho-vazio">
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
          v-for="(item, index) in cart.items"
          :key="index"
        >
          <div class="img-and-details">
            <img
              :src="item.img"
              style="width: 100px; display: inline-block"
              alt="Tênis"
            />
            <div class="iten-details">
              <h2 class="item-titulo" style="display: block">
                {{ item.titulo }}
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
                  R$ {{ item.preco.toFixed(2).replace(".", ",") }}</span
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
            >R$ {{ cart.totalPrice.toFixed(2).replace(".", ",") }}</span
          >
        </div>
        <button class="button-finalizar">FINALIZAR COMPRA</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cart: {
        items: [
          {
            titulo: "Tênis Olympikus",
            img: require("../assets/tenis/tenis1.jpg"),
            preco: 255,
            cor: "Branco",
            tamanho: 40,
            qtd: 6,
          },
          {
            titulo: "Tênis Nike",
            img: require("../assets/tenis/tenis6.jpg"),
            preco: 580,
            cor: "Branco",
            tamanho: 41,
            qtd: 5,
          },
          {
            titulo: "Tênis Adidas",
            img: require("../assets/tenis/tenis2.jpg"),
            preco: 350,
            cor: "Preto",
            tamanho: 42,
            qtd: 2,
          },
        ],
        totalPrice: 1185,
      },
    };
  },
};
</script>

<style>
.button-finalizar {
  display: block;
  font-size: 1.1em;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  padding: 15px 0;
  margin-top: 25px;
  background: green;
  color: white;
  font-weight: bold;
  border: none;
  width: 100%;
}

.total-preco {
  color: green;
  font-weight: bold;
}

.total-carrinho {
  font-size: 1.3em;
}

.total-carrinho {
  display: flex;
  justify-content: space-between;
}

.carrinho-infos-est {
  width: calc(1000px - 600px - 25px);
  margin-left: 25px;
}

.carrinho-infos {
  margin-top: 25px;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  align-self: flex-start;
}

.lixeira {
  color: white;
}

.dim-lixeira {
  background: red !important;
  border: 1px solid red !important;
}

.diminuir:hover {
  color: red;
  border: 1px solid red;
}

.agregar:hover {
  border: 1px solid green;
  color: green;
}

.span-qtd {
  margin: 0 13px;
}

.agregadores-button {
  transition: 0.2s;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  background: none;
  cursor: pointer;
}

.quantidade-agregadores {
  margin-top: 7px;
}

.quantidade-titulo {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-weight: bold;
}

.img-and-details {
  align-items: center;
  display: flex;
}

.quantidade-item-est {
  align-self: auto;
  color: grey;
}

.preco-item {
  color: green;
}

.item-tamanho {
  font-style: italic;
  font-size: 0.9em;
  color: grey;
}

.item-tamanho span {
  font-weight: bold;
}

.item-titulo {
  font-size: 1.2em;
  font-weight: bold;
}

.iten-details {
  margin-left: 15px;
}

.carrinho-itens .carrinho-iten {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
}

.carrinho-itens .carrinho-iten + .carrinho-iten {
  margin-top: 12px;
}

.carrinho-itens {
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.carrinho-itens-est {
  width: 600px;
}

.carrinho-titulo {
  color: #8529ad;
}

.carrinho-icon-vazio {
  text-align: center;
  color: #8529ad;
  font-size: 6em;
}

#button-voltar {
  width: 380px;
  display: inline-block;
  margin-top: 5px;
  text-align: center;
  background: transparent;
  border: 1px solid #8529ad;
  color: #8529ad;
  border-radius: 5px;
  padding: 7px 0;
  font-size: 1.3em;
  cursor: pointer;
}

.carrinho-vazio {
  display: flex;
  margin-top: 40px;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#carrinho-estrutura {
  width: 1000px;
  margin: 40px auto;
  display: flex;
}
</style>