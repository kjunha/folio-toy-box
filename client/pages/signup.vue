<template>
  <section id="main" class="wrapper">
    <div class="inner" id="signup-body">
      <div id="signup-form">
        <span class="display-4 text-dark">Create New Account</span>
        <hr />
        <div class="d-flex justify-contetn-between">
          <div>
            <p>Already have an account? <a href="/login">Login here!</a></p>
            <form>
              <div class="form-group">
                <label>Name</label>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="confirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="conrifm"
                  placeholder="Confirmation"
                />
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
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div class="form-group text-center">
                <button class="button special btn-block mb-3">
                  Create Account
                </button>
              </div>
            </form>
          </div>
          <div class="ml-5" id="terms">
            <h3>terms and conditions</h3>
            <div class="card bg-white">
              <div class="card-body">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </div>
            </div>
          </div>
        </div>
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
#signup-form {
  width: 950px;
  margin: 0 auto;
}
#terms {
  width: 500px;
  height: 100%;
}
#terms .card {
  height: 500px;
  overflow: auto;
}
</style>
