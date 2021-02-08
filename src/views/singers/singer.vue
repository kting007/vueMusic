<template>
    <div class="main">
        <div class="title">
            {{currentkind}}
        </div>
        <div class="list-Wrapper" v-for="item in singers.hot.items">
            <div class="left">
                <img v-lazy="item.avatar"/>
            </div>
            <div class="right">
                <div>{{item.name}}</div>
            </div>
        </div>
        <div class="rightFast">
            <div v-for="item in commonRight">{{item.title}}</div>
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
                singers: {
                    hot: {
                        title: "热",
                        items: []
                    }
                },
                commonRight:[],
            }
        },
        methods:{

            getSingers(){
                let _this = this;
                let params={
                    g_tk: 1928093487,
                    inCharset: 'utf-8',
                    outCharset: 'utf-8',
                    notice: 0,
                    format: 'json',
                    channel: 'singer',
                    page: 'list',
                    key: 'all_all_all',
                    pagesize: 100,
                    pagenum: 1,
                    hostUin: 0,
                    needNewCode: 0,
                    platform: 'yqq'
            }
                this.http.get('http://localhost:3000/api/getSingers',params).then((res)=>{
                    if(res.data.code===0){
                        this.singers = {
                            hot: {
                                title: "热",
                                items: []
                            }};
                        let data = res.data.data.list;
                        data.forEach((item, index)=>{
                            if(index<10){
                                this.singers.hot.items.push({
                                    name: item.Fsinger_name,
                                    avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                                })
                            }
                            if (!_this.singers[item.Findex]) {
                                _this.singers[item.Findex] = {
                                    title: item.Findex,
                                    items: []
                                }
                            }
                            _this.singers[item.Findex].items.push({
                                name: item.Fsinger_name,
                                avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                            })
                        })

                        // 为了得到有序列表，我们需要处理 map
                        let ret = []
                        let hot = []
                        for (let key in _this.singers) {
                            let val = _this.singers[key]
                            if (val.title.match(/[a-zA-Z]/)) {
                                ret.push(val)
                            } else if (val.title === '热') {
                                hot.push(val)
                            }
                        }
                        ret.sort((a, b) => {
                            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                        })
                        this.commonRight = hot.concat(ret);
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
    .main{
        position: relative;
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
        .rightFast{
            position: absolute;
            z-index: 30;
            right: 0;
            top: 38%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 20px;
            padding: 20px 0;
            border-radius: 10px;
            text-align: center;
            background: rgba(0,0,0,0.3);
            font-family: Helvetica;
            div{
                padding: 3px;
                line-height: 1;
                color: rgba(255,255,255,0.5);
                font-size: 12px;
            }
            div:first-child{
                color: #ffcd32;
            }
        }
    }


</style>