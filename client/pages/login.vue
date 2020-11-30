<template>
  <div>
    <section id="main" class="wrapper">
      <div class="inner" id="login-body">
        <div id="login-form">
          <TitleLarge class="mb-5" message="Folio Account" />
          <form>
            <div class="form-group">
              <label>Your email</label>
              <input
                name=""
                class="form-control bg-white"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="form-group">
              <label>Your password</label>
              <input
                class="form-control bg-white"
                placeholder="******"
                type="password"
              />
            </div>
            <div class="form-group"></div>
            <div class="form-group text-center">
              <button class="button special btn-block mb-3">
                Login
              </button>
              <button class="button btn-block mb-3">
                Sign up
              </button>
              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "common"
};
</script>

<style>
.wrapper {
  background-color: #eee;
}
#login-body {
  height: 70vh;
}
#login-form {
  width: 500px;
  margin: 0 auto;
}
</style>
