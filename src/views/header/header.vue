<template>
    <div class="header">
        <img src="../../assets/img/logo.png">
        <div class="name">
            小王子 Music
        </div>
        <nav class="nav">
            <div v-for="(item, index) in menus"  @click="switchMenu(item, index)" :class="currentMenu === index?'active':''">
                {{item.name}}
            </div>
        </nav>
        <el-carousel :interval="4000" type="card"  height="150px">
            <el-carousel-item v-for="item in pics" :key="item.src">
                    <img :src="item.src">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "header",
        coponents:{},
        data(){
            return{
                pics: [
                    {

                        src: require('../../assets/img/pic1.png'),
                    },
                    {
                        src:require('../../assets/img/pic2.png'),
                    },
                    {
                        src:require('../../assets/img/pic3.png'),
                    },
                    {
                        src:require('../../assets/img/pic4.png'),
                    },
                    {
                        src:require('../../assets/img/pic5.png'),
                    },
                    {
                        src:require('../../assets/img/pic6.png'),
                    },
                ],
                currentMenu: 0,
                menus:[
                    {name:'推荐',url:''},
                    {name:'歌手',url:''},
                    {name:'排行',url:''},
                    {name:'搜索',url:''},
                ],

            }
        },
        mounted() {
        },
        methods:{
            //切换导航栏
            switchMenu(item, index){
                this.currentMenu = index;
            },

        }
    }
</script>

<style lang="less" scoped>
.header{
    height: 290px;
    line-height: 42PX;
    width: 100%;
    text-align:center;
    img{
       display: inline-block;
        width: 30px;
        height: 32px;
    }
    .name{
        width: 114px;
        display: inline-block;
        font-size: 18px;
        text-align: center;
        color: @common-ye;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__item{
        img{
            width: 100%;
            height: 100%;
        }
    }
    /deep/ .el-carousel__button {
        display: block;
        opacity: .48;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #FFF;
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
    }
    .nav{
        width: 100%;
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-around;
        padding: 0 20px;
        div{
            width: 40px;
            color: @common-color;
        }
        .active{
            color: @common-ye;
            border-bottom: 1px solid @common-ye;
        }
    }
}
</style>