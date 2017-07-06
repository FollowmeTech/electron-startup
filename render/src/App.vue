<template>
    <div class="app">
        <div class="nav">
            <header>广告位招租 <i class="fa fa-spinner fa-pulse fa-fw"></i></header>
            <ul class="menu">
                <li class="menu-item">
                    <a href="javascript:;" @click="section('Index')"><i class="fa fa-home fa-fw"></i> 主页</a>
                </li>
                <li class="menu-item has-sub">
                    <a href="javascript:;" @click="select(1)" :class="{showactive:collapse_all}">分类1</a>
                    <collapse-transition>
                        <ul class="submenu" v-show="collapse_all || current_index==1">
                            <li class="menu-item">
                                <a href="javascript:;" @click="section('Section1')"><i class="fa fa-qrcode fa-fw"></i> 菜单1</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" @click="section('Section2')"><i class="fa fa-picture-o fa-fw"></i> 菜单2</a>
                            </li>
                        </ul>
                    </collapse-transition>
                </li>
            </ul>
            <footer>
                <a class="about" href="#">关于</a>
                <a data-openexternal="true" class="github" href="https://github.com/fmfe/electron-startup"><i class="fa fa-github"></i> Github <i class="fa fa-code-fork"></i></a>
            </footer>
        </div>
        <div class="main">
            <transition name="fade" mode="out-in">
                <component v-bind:is="view"></component>
            </transition>
        </div>
    </div>
</template>
<script>
    import '@assets/normalize.css';
    import '@assets/global.css'
    import '@assets/font-awesome/less/font-awesome.less';
    import CollapseTransition from '@components/collapse-transition';
    import Index from '@page/index.vue';
    import Section1 from '@page/section/section1.vue';
    import Section2 from '@page/section/section2.vue';
    import linksex from '@utils/openexlink.js';

    export default {
        components: {
            CollapseTransition,
            Index,
            Section1,
            Section2
        },
        data() {
            return {
                current_index: -1,
                collapse_all: false,
                view: 'Index'
            };
        },
        mounted() {
            linksex.linksinit();
        },
        methods: {
            select(i) {
                this.current_index = this.current_index == i ? -1 : i;
            },
            section(i) {
                this.view = i;
            }
        }
    };

</script>
<style lang="less">
    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
        transform: translate3d(10px, 0, 0);
        visibility: hidden;
    }

    .main {
        padding: 10px;
        position: relative;
    }

    @import './app.less';
</style>