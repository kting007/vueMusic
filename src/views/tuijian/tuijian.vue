<template>
    <div class="pics">
        <el-carousel :interval="4000" type="card"  height="150px">
            <el-carousel-item v-for="item in pics" :key="item.src">
                <img :src="item.src">
            </el-carousel-item>
        </el-carousel>
        <div class="title">
            热门歌曲推荐
        </div>
        <song-list></song-list>
    </div>
</template>

<script>
    import songList from './list'
    export default {
        name: "tuijian",
        components:{songList},
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
            }
        }
    }
</script>

<style lang="less" scoped>
.pics{
    .title{
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: 14px;
        color: #ffcd32;
    }
}
</style>