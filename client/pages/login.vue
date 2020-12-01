<template>
  <section id="main" class="wrapper">
    <div class="inner" id="login-body">
      <div id="login-form">
        <TitleLarge class="mb-5" message="Folio Account" />
        <form>
          <div class="form-group">
            <label>Email</label>
            <input
              name=""
              class="form-control"
              placeholder="Email"
              type="email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" placeholder="******" type="password" />
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Remember Me
              </label>
            </div>
          </div>
          <div class="form-group text-center">
            <button class="button special btn-block mb-3">
              Login
            </button>
            <a href="/signup" class="button btn-block mb-3">
              Sign up
            </a>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  </section>
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
#login-form {
  width: 500px;
  margin: 0 auto;
}
</style>
