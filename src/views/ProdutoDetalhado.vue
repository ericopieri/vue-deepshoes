<template>
  <div id="product-detail-estrutura">
    <section id="products-details-estrutura">
      <div class="product-image">
        <img src="../assets/tenis/tenis6.jpg" alt="tenis1.jpg" />
      </div>
      <div class="products-details">
        <h2 class="product-title">Tênis Nike</h2>
        <span class="product-price">R$ 580,00</span>
        <span class="product-description"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          deleniti dolorem itaque sunt, iure amet voluptate libero, quo ipsam
          beatae impedit accusamus a, assumenda quod architecto tempore soluta
          laborum tempora! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores quasi voluptatum ducimus culpa itaque unde qui,
          cupiditate porro sit perferendis, fugit hic, magnam repellendus dolor
          quia sunt illo fugiat et?</span
        >
        <ul id="product-medidas">
          <li class="medida-item">36</li>
          <li class="medida-item">37</li>
          <li class="medida-item">38</li>
          <li class="medida-item">39</li>
          <li class="medida-item">40</li>
        </ul>
        <button class="button-comprar">Comprar</button>
      </div>
    </section>
    <section id="produtos-relacionados">
      <h2 style="text-align: center; margin: 15px 0 15px 0; color: grey">
        Quem procura este item, também se interessa por
        <i class="fa-solid fa-arrow-down"></i>
      </h2>
      <Carousel
        id="carrosel-produtos-relacionados"
        :perPage="4"
        :navigationEnabled="true"
        :paginationEnabled="false"
      >
        <Slide
          class="carrosel-relacionados-item"
          v-for="(produtoRelacionado, index) in produtosRelacionados"
          :key="index"
          ><img
            :src="produtoRelacionado.img"
            class="img-produto-relacionado"
            alt="tenis"
          />
          <h3 class="produto-rel-titulo">{{ produtoRelacionado.titulo }}</h3>
          <span class="produto-rel-preco"
            >R$ {{ produtoRelacionado.preco }}</span
          >
          <button class="button-vermais-relacionado">Ver +</button>
        </Slide>
      </Carousel>
    </section>

    <section id="box-avaliacoes">
      <span class="titulo-avaliacoes" style="position: absolute; color: grey">
        Avaliação do Produto:
      </span>
      <div class="avaliacoes">
        <span style="display: block; text-align: center" class="span-avaliacoes"
          >Quantos % dos Compradores recomendam este produto?</span
        >
        <div class="est-porcentagem">
          <div class="porcentagem">
            <div class="porcentagem-modulo">10%</div>
          </div>
        </div>
      </div>
    </section>

    <section id="box-comentarios">
      <span class="titulo-comentarios" style="color: grey"> Comentários </span>
      <div
        v-for="(comentario, index) in comentarios"
        :key="index"
        class="box-comentario"
      >
        <div class="avaliacao-comentario-div">
          Avaliação:
          <span
            class="avaliacao-comentario"
            :class="{ verdinho: comentario.nota > 5 }"
            >{{ comentario.nota }}/10</span
          >
        </div>
        <div class="comentario-conteudo">{{ comentario.conteudo }}</div>
        <div class="user-comentario-div">
          <span class="usuario-comentario">{{ comentario.user }}</span>
          <span class="dia-publicacao">{{
            new Date().toLocaleDateString()
          }}</span>
          <span
            class="recomendacao"
            :class="{ recomendado: comentario.recomendou }"
            >{{
              comentario.recomendou
                ? `Recomendou este Produto!`
                : "Não recomendou este Produto!"
            }}
            <i
              v-if="comentario.recomendou"
              class="fa-solid fa-thumbs-up icon-recomendou"
            ></i>
            <i v-else class="fa-solid fa-thumbs-down icon-recomendou"></i
          ></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produtosRelacionados: [
        {
          titulo: "Tênis Olympikus",
          img: require("../assets/tenis/tenis1.jpg"),
          preco: 255,
        },
        {
          titulo: "Tênis Adidas",
          img: require("../assets/tenis/tenis2.jpg"),
          preco: 350,
        },
        {
          titulo: "Tênis Qix",
          img: require("../assets/tenis/tenis3.jpg"),
          preco: 390,
        },
        {
          titulo: "Tênis Adidas",
          img: require("../assets/tenis/tenis4.jpg"),
          preco: 240,
        },
        {
          titulo: "Tênis Vans",
          img: require("../assets/tenis/tenis5.jpg"),
          preco: 320,
        },
        {
          titulo: "Tênis Nike",
          img: require("../assets/tenis/tenis7.jpg"),
          preco: 510,
        },
      ],
      comentarios: [
        {
          user: "Michael Jackson",
          conteudo:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
          recomendou: true,
          nota: 10,
        },
        {
          user: "Thomas Shelby",
          conteudo:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          recomendou: false,
          nota: 4.5,
        },
      ],
    };
  },
};
</script>

<style>
.icon-recomendou {
  font-size: 1.2em;
}

.verdinho {
  color: green !important;
}

.titulo-comentarios {
  position: absolute;
  padding: 5px 30px;
  background: white;
  font-size: 1.5em;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
}

.titulo-avaliacoes {
  font-size: 1.5em;
  top: 0;
  padding: 5px 30px;
  background: white;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.dia-publicacao {
  font-size: 0.8em;
}

.usuario-comentario {
  color: rgb(32, 32, 32);
  font-size: 1em;
  font-style: italic;
  font-weight: bold;
  margin-right: 10px;
}

.user-comentario-div {
  margin-top: 15px;
}

.recomendado {
  color: rgb(0, 138, 0) !important;
}

.recomendacao {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  color: red;
}

.avaliacao-comentario-div {
  font-style: italic;
  color: grey;
  font-size: 0.9em;
}

.comentario-conteudo {
  margin-top: 10px;
  font-size: 1em;
  width: 850px;
  display: block;
}

.box-comentario:last-child {
  border: none;
  padding: 0;
}

.box-comentario {
  padding-bottom: 40px;
  font-size: 1.2em;
  border-bottom: 1px solid lightgrey;
}

.box-comentario + .box-comentario .avaliacao-comentario-div {
  margin-top: 40px;
}
.avaliacao-comentario {
  color: red;
}

#box-comentarios {
  position: relative;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding-bottom: 15px;
  padding: 40px;
  border: 1px solid #e0e0e0;
  width: 1100px;
  margin: 15px auto 0 auto;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
}

.button-vermais-relacionado {
  font-size: 1.3em;
  padding: 7px 30px;
  border: 1px solid #8529ad;
  border-radius: 10px;
  background: #8529ad;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.button-vermais-relacionado:hover {
  transform: scale(1.05);
}

.span-avaliacoes {
  font-size: 1.8em;
  font-weight: bold;
  font-style: italic;
  color: rgb(53, 53, 53);
}

.est-porcentagem {
  margin: 0 auto;
  margin-top: 15px;
  border: 1px solid grey;
  border-radius: 4px;
  width: 650px;
  height: 25px;
}

.porcentagem-modulo {
  position: absolute;
  top: calc(100% + 5px);
  left: 100%;
  transform: translateX(-50%);
}

.est-porcentagem .porcentagem {
  position: relative;
  height: 100%;
  width: 40%;
  background: yellow;
}

#box-avaliacoes {
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  padding: 40px 0 55px 0;
  position: relative;
  margin: 80px auto 60px auto;
  width: 1400px;
}

.produto-rel-preco {
  font-size: 1.05em;
  color: green;
}
.img-produto-relacionado {
  width: 100%;
}
.carrosel-relacionados-item {
  transition: 0.2s;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  padding: 15px;
  max-width: 250px;
}

.carrosel-relacionados-item:hover {
  transform: scale(1.02);
}
#produtos-relacionados {
  overflow: visible;
  margin-top: 15px;
}

#carrosel-produtos-relacionados {
  margin: 0 auto;
  max-width: 1500px;
}

#product-detail-estrutura {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
}
#products-details-estrutura {
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  border: 1px solid #e0e0e0;
  background: rgba(0, 0, 0, 0.001);
  border-radius: 8px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
}
.product-image {
  padding: 15px;
  width: 500px;
}
.product-image img {
  width: 100%;
}
.products-details {
  border-radius: 5px;
  padding: 30px 60px 30px 15px;
  flex: 1;
}
.products-details h2 {
  font-size: 2em;
}
.products-details .product-price {
  display: block;
  margin: 15px 0;
  font-size: 2em;
  color: green;
  font-weight: bold;
}
.products-details .product-description {
  font-size: 1.1em;
}
#product-medidas {
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  gap: 5px;
}
#product-medidas .medida-item {
  border-radius: 50%;
  background: yellow;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
  color: rgb(0, 0, 0);
  font-size: 1.3em;
}
.button-comprar {
  cursor: pointer;
  transition: 0.2s;
  background: #8529ad;
  color: white;
  margin-top: 20px;
  border: 1px solid #8529ad;
  border-radius: 5px;
  padding: 5px 60px;
  font-size: 1.6em;
}
.button-comprar:hover {
  background: none;
  color: #8529ad;
}
</style>
