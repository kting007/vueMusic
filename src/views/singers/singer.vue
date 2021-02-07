<template>
    <div>
        <div class="title">
            {{currentkind}}
        </div>
        <div class="list-Wrapper" v-for="item in singers">
            <div class="left">
                <img v-lazy="item.singer_pic"/>
            </div>
            <div class="right">
                <div>{{item.singer_name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "singer",
        components:{},
        data(){
            return{
                currentkind: '热门',
                singers:[]
            }
        },
        methods:{
            getSingers(){
                this.http.get('http://localhost:3000/api/getSingers',{}).then((res)=>{
                    if(res.data.code===0){
                        this.singers = res.data.singerList.data.singerlist;
                        ;
                    }
                })
            }
        },
        mounted() {
            this.getSingers()
        }
    }
</script>

<style lang="less" scoped>
    .title{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: rgba(255,255,255,0.5);
        background: #333;
        text-align: left;
        margin-top: 4px;
    }
    .list-Wrapper{
        height: auto;
        width: 100%;
        padding: 20px 0 0 30px;
        display: flex;
        justify-content: start;
        align-items: center;
        .left{
            width: 50px;
            height: 50px;
            margin-right: 20px;
            img{
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .right{
            color: rgba(255,255,255,0.5);
            font-size: 14px;
        }
    }

</style>