<template>
  <div 
    :style="bgObject" 
    class="login-container">
    <div class="login" >
      <div class="title"><span>中智诚集团-资金管理系统登录</span></div>
      <el-form 
        ref="loginForm" 
        :model="loginForm" 
        :rules="loginRules" 
        class="login-form" 
        auto-complete="on" 
        label-position="left"
        size="small">
        <el-form-item prop="username">
          <span class="svg-container svg-container_login">
            <i class="el-icon-fa-user"></i>
          </span>
          <el-input 
            v-model="loginForm.username" 
            name="username" 
            type="text" 
            auto-complete="on" 
            placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-fa-lock"></i>
          </span>
          <el-input 
            v-model="loginForm.password" 
            type="password" 
            name="password" 
            auto-complete="on" 
            placeholder="请输入密码"
            @keyup.enter.native="handleLogin"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button 
            :loading="loading" 
            type="danger" 
            style="width:100%;line-height: 26px;font-size: 18px;" 
            @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
import img_bg from '@/assets/images/bg.jpg';

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!/^[a-zA-Z.0-9_]+$/.test(value)) {
        callback(new Error('请输入正确的用户名'));
      } else {
        callback();
      }
    };
    return {
      img_bg,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      loading: false,
      bgObject: {
        backgroundImage: 'url(' + img_bg + ')',
        backgroundColor: '#f9f9f9',
        backgroundSize: 'cover',
        backgroundPosition: 'fixed'
      }
    };
  },
  methods: {
    handleLogin() {
      if (this.loading) return false;
      this.loading = true;

      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.mshowLoading('登录中...');
          this.$store
            .dispatch('Login', this.loginForm)
            .then(() => {
              this.loading = false;
              this.mhideLoading();
              this.$message.success('登录成功');
              this.$router.push({
                path: '/'
              });
            })
            .catch(() => {
              this.loading = false;
              this.mhideLoading();
            });
        } else {
          this.loading = false;
          return false;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;

  .login {
    margin: 150px auto 0 auto;
    min-height: 420px;
    max-width: 420px;
    padding: 40px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: rgba(45, 58, 75, 0.7);
  }
  .title {
    position: relative;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  .title span {
    width: 85%;
    display: inline-block;
    position: absolute;
    background: #303133;
    left: -48px;
    padding: 12px 50px 12px 48px;
    top: 20px;
    border-radius: 0 5px 5px 5px;
  }
  .title span:before,
  .title span:after {
    content: "";
    position: absolute;
  }
  .title span:before {
    height: 0;
    width: 0;
    border-bottom: 8px solid black;
    border-left: 8px solid transparent;
    top: -8px;
    left: 0;
  }

  .login-form {
    margin-top: 100px;
    .el-input {
      display: inline-block;
      height: 40px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 0;
        color: #ffffff;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #5D5549 inset !important;
          box-shadow: 0 0 0px 1000px #5D5549 inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    input::-webkit-input-placeholder {
      color: #ffffff;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #ffffff;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #ffffff;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #ffffff;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #ffffff;
      vertical-align: middle;
      width: 30px;
      display: inline-block;

      i::before {
        font-size: 18px;
      }
    }
  }
}
</style>
