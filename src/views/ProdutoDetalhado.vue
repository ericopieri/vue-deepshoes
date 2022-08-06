<template>
  <div id="product-detail-estrutura">
    <section id="products-details-estrutura">
      <div class="product-image">
        <img src="../assets/tenis/tenis1.jpg" alt="tenis1.jpg" />
      </div>
      <div class="products-details">
        <h2 class="product-title">Produto</h2>
        <span class="product-price">R$ 350,00</span>
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
  </div>
</template>

<script>
export default {};
</script>

<style>
#product-detail-estrutura {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
}
#products-details-estrutura {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background: rgba(0, 0, 0, 0.02);
  width: 1300px;
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
  padding: 30px 10px;
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