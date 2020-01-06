<template>
    <li class="menu-item menu-item3">
        <div class="menu-basechain">
        <span class="service menu_tit">服务信息</span>
        <div class="menu-basechain-sub menu_con">
            <div class="sub-item">
            <router-link to="/service/charge" class="menu-router">收费模式</router-link>
            </div>
            <div class="sub-item">
            <router-link to="/service/cooperation" class="menu-router">合作计划</router-link>
            </div>
        </div>
        </div>
    </li>

</template>
<script>
export default {
    mounted() {
        this.menuTittHover()
    },
    methods: {
        menuTittHover () {
            const $ = require('jquery')
            let timer1 = null
            let timer2 = null
            $('.menu_tit').mouseover(function () {
                clearTimeout(timer1)
                clearTimeout(timer2)
                $('.menu_con').removeClass('show-menu')
                $(this).siblings('.menu_con').addClass('show-menu')
            })

            $('.menu_tit').mouseout(function () {
                // const _t = this
                timer1 = setTimeout(function () {
                $('.menu_con').removeClass('show-menu')
                }, 500)
            })
            $('.menu_con').mouseover(function () {
                clearTimeout(timer1)
                clearTimeout(timer2)
                $(this).addClass('show-menu')
            })
            $('.menu_con').mouseout(function () {
                // const _t = this
                timer2 = setTimeout(function () {
                $('.menu_con').removeClass('show-menu')
                }, 500)
            })
        }
    }
}
</script>
<style>
    .show-menu {
        display: block;
    }

</style>
