<template>
  <div class="LogIn">
<!--    <img src="../assets/image/lonInBgc.png" alt="">-->
    <div class="main">
      <div class="Controls">
        <h2 class="welcome">WELCOME</h2>
        <h3 class="title">欢迎登录后台管理系统</h3>
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(255,0,0,1);font-size: 18px" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(255,0,0,1);font-size: 18px" />
            </a-input>
          </a-form-item>
          <a-form-item class="more">
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: false,
          },
        ]"
            >
              记住密码
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
          </a-form-item>
          <a-form-item>
            <a-button type="danger" html-type="submit" class="login-form-button">
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'LogIn',
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (values.userName === 'wei' && values.password === 'ws20040810') {
            console.log('Received values of form: ', values)
            this.$router.push({
              path: '/Main'
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .LogIn {
   height: 100vh;
   width: 100vw;
   //background: pink;
   background-image: url('../../public/img/lonInBgc.png');
   background-size: 100% 100%;
   .main {
     position: absolute;
     top: 50%;
     left: 50%;
     height: 700px;
     width: 1200px;
     //margin: 0 auto;
     margin-left: -600px;
     margin-top: -350px;
     background-image: url('../../public/img/logInMain.gif');
     background-size: 100% 100%;
     //transform: translate(-10px, -10px);
     .Controls{
       margin-top: 52px;
       margin-left: 71px;
       padding: 56px 71px;
       width: 501px;
       height: 595px;
       background-color: #ffffff;
       box-shadow: 7px 11px 37px 1px
       rgba(0, 123, 237, 0.4);
       border-radius: 10px;
       .welcome {
         width: 216px;
         height: 31px;
         font-family: TsangerXWZ;
         font-size: 42px;
         font-weight: 600;
         font-stretch: normal;
         line-height: 45px;
         letter-spacing: 0px;
         color: #d83030;
       }
       .title{
         font-family: SourceHanSansCN-Bold;
         font-size: 28px;
         font-weight: 600;
         font-stretch: normal;
         line-height: 36px;
         margin-bottom: 60px;
         color: #808080;
       }
       ::v-deep .ant-input{
         border-bottom: 1px solid #d6d6d6;
       }
       ::v-deep .ant-form-item-children {
         display: flex;
         justify-content: space-between;
         a{
           color: red;
         }
       }
       ::v-deep #normal_login_userName, ::v-deep #normal_login_password{
         height: 50px;
         padding-left: 40px;
         border: 0;
         border-bottom: 1px solid #d6d6d6;
       }
      .login-form-button{
        height: 40px;
        margin-top: 60px;
      }
     }
   }
 }
 #components-form-demo-normal-login .login-form-button {
   width: 100%;
 }
</style>
