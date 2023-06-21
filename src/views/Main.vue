<template>
  <a-layout id="components-layout-demo-responsive">
<!--    侧边导航部分-->
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" >
        <img src="../../public/img/logo.gif" alt="logo">
      </div>
      <a-menu theme="dark" mode="inline" :defaultOpenKeys="expansion" :default-selected-keys="selectKeys">
        <a-menu-item key="/Main/Home">
          <router-link to="/Main/Home" tag="div">
            <span class="nav-text">首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/Main/ProManagement">
          <router-link to="/Main/ProManagement" tag="div">
            <span class="nav-text">商品管理</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="订单管理">
          <span slot="title"><span>订单管理</span><a-icon type="caret-down"/></span>
          <a-menu-item key="/Main/OrderManagement">
            <router-link to="/Main/OrderManagement" tag="div">
              <span>订单管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Main/AfterSale">
            <router-link to="/Main/AfterSale" tag="div">
              <span>售后管理</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/Main/DataStatistics">
          <router-link to="/Main/DataStatistics" tag="div">
            <span>售后管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="评价管理">
          <router-link to="/Main/EvaluatePage" tag="div">
            <span>评价管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="平台管理">
          <router-link to="/Main/platformPage" tag="div">
            <span>平台管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="7">
          <span class="nav-text">用户管理</span>
        </a-menu-item>
        <a-menu-item key="8">
          <span class="nav-text">权限管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
<!--      头部部分样式-->
      <a-layout-header>
        <div class="box">
<!--          <a-icon type="caret-down" />-->
          <a-icon type="zoom-in" />
          <a-icon type="setting" />
          <a-icon type="bell" />
          <span>小杨</span>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()"><a-icon type="caret-down" style="color: #333333"/></a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a-button>却换账号</a-button>
              </a-menu-item>
              <a-menu-item key="1">
                <a-button>退出登录</a-button>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
<!--      内容部分样式-->
      <a-layout-content>
        <div :style="{ padding: '0 24px 24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'Main_',
  data () {
    return {
      selectKeys: [],
      expansion: []
    }
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    }
  },
  mounted () {
    this.selectKeys = [`${this.$route.path}`]
    console.log(this.selectKeys)
    if (this.$route.meta.module) {
      // 把对应的路由的地址赋给导航栏展开的配置:defaultOpenKeys
      this.expansion = [`${this.$route.meta.module}`]
      console.log(this.$route.meta.module)
    }
  }
}
</script>

<style lang="scss" scoped>
//logo盒子样式
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.7);
  margin: 16px;
}

//主体部分样式
#components-layout-demo-responsive{
  height: 100vh;
  //侧边栏样式
  ::v-deep .ant-layout-sider-children{
    background: white;
    .ant-menu{
      background: white;
      span{
        color: black;
      }
      .ant-menu-item{
        position: relative;
        span{
          color: black;
        }
      }
      .nav-text{
        color: black;
        span{
          color: black;
        }
      }
    }
  }
  //顶部部分样式
  ::v-deep .ant-layout-header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background: white;
    padding: 0;
    margin: 20px 16px 0;
    .box {
      border-top-right-radius: 15px;
      float: right;
      padding: 0 24px;
      background: white;
      font-size: 18px;
    }
    .anticon {
      margin: 0 20px;
    }
  }
  //内容部分样式
  ::v-deep .ant-layout-content {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: 0 16px 20px;
    height: 100%;
    &>div{
      height: 100%;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
  //logo图片样式
  .logo {
    height: 80px;
    background: white;
    img {
      height: 80%;
      width: 80%;
      margin-left: 10%;
      margin-top: 5px;
    }
  }
}
::v-deep .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
  background: #f0f0f0;
  .nav-text{
    color: red!important;
  }
  //position: relative;
}
//::v-deep .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected::after {
//  position: absolute;
//  top: 0;
//  right: 0;
//  background: #d83030;
//  height: 100%;
//  width: 2px;
//}
::v-deep .ant-menu-dark.ant-menu-inline .ant-menu-item::after, .ant-menu-dark.ant-menu-vertical .ant-menu-item::after, .ant-menu-dark.ant-menu-vertical-left .ant-menu-item::after, .ant-menu-dark.ant-menu-vertical-right .ant-menu-item::after {
  background: red;
  width: 2px;
}
</style>
