<div class="container-login">
          <span id="login-titulos">
            <h1>Já tem uma conta?</h1>
            <span>Faz teu login aqui embaixo!</span>
          </span>
          <form action="" id="form-login">
            <div class="login-input">
              <label for="email">
                E-mail:
              </label>
              <input type="text" placeholder="Digite seu e-mail:">
            </div>
            <div class="login-input">
              <label for="senha">
                Senha:
              </label>
              <input type="password" placeholder="Digite sua senha:">
            </div>
            <button id="button-logar" @click.stop.prevent="login">Entrar</button>
          </form>
          <span>Não tem uma conta?</span>
        </div>