<template>
  <div id="estrutura-cadastro-produtos">
    <div id="container-cadastro-produtos">
      <div id="container-form-cadastro">
        <h1 style="text-align: center; font-size: 1.5em">
          INFORMAÇÕES DO PRODUTO
        </h1>
        <form action="" id="form-cadastro-produto">
          <label for="marca">Marca:</label>
          <select name="marca" id="marca-select">
            <option value="Marca1">Marca1</option>
            <option value="Marca2">Marca2</option>
            <option value="Marca3">Marca3</option>
            <option value="Marca4">Marca4</option>
          </select>
          <label for="modelo">Modelo:</label>
          <input type="text" name="modelo" placeholder="Modelo" />
          <label for="desc">Descrição::</label>
          <input type="text" name="desc" placeholder="Descrição" />
          <label for="preco">Preço:</label>
          <input type="text" name="preco" placeholder="Preço" />
          <button id="button-finalizar-cadastro">Finalizar Cadastro</button>
        </form>
      </div>
      <div id="container-upload-foto">
        <img src="../assets/tenis/tenis1.jpg" id="foto-produto-upload" alt="" />
        <div id="div-input-text">
          <input type="file" name="file" id="upload-produto" />
          <button id="button-upload-produto">Upload imagem</button>
          <span>Adicione uma imagem com dimensão 300x300</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>