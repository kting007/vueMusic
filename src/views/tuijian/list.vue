<template>
    <div class="list-wrapper">
        <div class="lists">
            <div class="list" v-for="item in listDatas">
                <div class="left">
                    <img v-lazy="item.imgurl"/>
                </div>
                <div class="right">
                    <div class="name" v-html="item.creator.name"></div>
                    <p class="desc" v-html="item.dissname"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list.vue",
        components:{

        },
        data(){
            return{
                listDatas:[],
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            //获取列表数据

            getData(){
                let params={
                    g_tk: 1928093487,
                    inCharset: 'utf-8',
                    outCharset: 'utf-8',
                    notice: 0,
                    platform: 'yqq',
                    hostUin: 0,
                    sin: 0,
                    ein: 29,
                    sortId: 5,
                    needNewCode: 0,
                    categoryId: 10000000,
                    rnd: Math.random(),
                    format: 'json'
                }
                this.http.get('http://localhost:3000/api/getDiscs',params).then((res)=>{
                    if(res.data.code===0){
                        this.listDatas = res.data.data.list;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .list-wrapper{
        width: 100%;
        height: calc(100% - 88px);
        overflow-y: auto;
        .lists{
            height: auto;
            width: 100%;
            .list{
                height: 83px;
                width: 100%;
                padding:20px;
                display: flex;
                align-items: center;
                color: @common-color;
                .left{
                    width: 80px;
                    height: 63px;
                    margin-right: 20px;
                    img{
                        display: block;
                        width: 80px;
                        height: 63px;
                    }
                }
                .right {
                    display: flex;
                    width: calc(100% - 100px);
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                    line-height: 20px;
                    overflow: hidden;
                    font-size: @font-size-medium;
                    text-align: left;
                    font-size: 14px;
                        .name {
                            margin-bottom: 10px;
                            color: @color-text;
                            margin-bottom: 10px;
                        }.desc {
                            color: @color-text-d;
                        }
                    }
                }
            }
    }
</style>