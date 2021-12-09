var Pagination={
            template:`<div class="main">
                <div>共{{total}}条</div>
                <button class="first" @click="First" v-bind:disabled="a">{{first}}</button>
                <button class="prev" @click="Prev" :disabled="b">{{prev}}</button>
                <ul>
                    <li v-for="item in list" @click="buttonPage(item)" :class="{active:currentPage==item}">{{item}}</li>
                </ul>
                <button class="next" @click="Next" :disabled="c">{{next}}</button>
                <button class="last" @click="Last" :disabled="d">{{last}}</button>
                <input :value="value" @input="change" />
                <button  @click="just">跳转</button>
            </div>`,
            data(){
                return{
                    // name:"哈哈子"
                    first:'首页',
                    last:"尾页",
                    prev:"上一页",
                    next:"下一页",
                    a:false,
                    b:false,
                    c:false,
                    d:false,
                    page:1,
                    pageSize:10,
                    total:0,//总数
                    list:[], //页数
                    currentPage:1 ,//当前页
                    li:1,
                    value:1,
                    input:0
                }
            },
            props:["config"],
            created(){
                this.total = this.config.total
                this.pageSize = this.config.pageSize
                this.li = Math.ceil(this.total/this.pageSize);
                if(this.li==1){
                    this.a=true
                    this.b=true
                    this.c=true
                    this.d=true
                }
                for(var i=1;i<=this.li;i++){
                    this.list.push(i)
                }
                console.log(this.currentPage)
                this.value = this.currentPage
                this.input = this.currentPage
                if(this.currentPage == 1){
                    this.a=true
                    this.b=true
                    this.c=false
                    this.d=false
                }else if(this.currentPage==this.li){
                    this.a=false
                    this.b=false
                    this.c=true
                    this.d=true
                }else{
                    this.a=false
                    this.b=false
                    this.c=false
                    this.d=false
                }
            },
            methods:{
                change(val){
                    this.input=parseInt(val.target.value);
                },
                just(){
                    if(this.input<=this.li && this.input>0 && this.input!=NaN){
                        this.buttonPage(this.input);
                    }else{
                        this.value=""
                    }
                },
                First(){
                    // console.log("First")
                    this.buttonPage(1);
                },
                Last(){
                    // console.log("Last")
                    this.buttonPage(this.li);
                },
                Prev(){
                    // console.log("Prev")
                    if(this.currentPage>1){
                        this.buttonPage(this.currentPage-1);
                    }
                    
                },
                Next(){
                    // console.log("Next")
                    if(this.currentPage<this.li){
                        this.buttonPage(this.currentPage+1);
                    }
                    
                },
                buttonPage(val){
                    // console.log(val)
                    if(val == 1){
                        this.a=true
                        this.b=true
                        this.c=false
                        this.d=false
                    }else if(val==this.li){
                        this.a=false
                        this.b=false
                        this.c=true
                        this.d=true
                    }else{
                        this.a=false
                        this.b=false
                        this.c=false
                        this.d=false
                    }
                    this.value = val
                    this.currentPage = val
                    this.input = val
                    
                    this.$emit("currentPage",val)
                    //ajax请求数据
                }
                
            }
        }