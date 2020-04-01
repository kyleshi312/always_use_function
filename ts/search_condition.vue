<template>
    <div>
        
    </div>
</template>
<script lang="ts">
export default {
    data (){
        return {

        }
    },
    clearRequest(){
         this.updateSearch()
    },
     searchRequest() {
        //  ******************处理搜索条件 start*******************
        //  ******************处理搜索条件 end*******************
         this.updateSearch()
         this.getpage()
     },
    getpage(){
        Object.assign(this.pagerequest, this.$route.query)
        // 搜索字段举例，1^2,,1^1,1^0
        if('DeclarePayType' in this.$route.query){
            const DeclarePayType = decodeURIComponent(this.$route.query.DeclarePayType.toString()).split(',')
            this.DeclarePayType = DeclarePayType
            this.pagerequest['DeclarePayType'] = DeclarePayType
            this.pagerequest.DeclarePayType = DeclarePayType
        }
        if('TaxAddressId' in this.$route.query){
            this.TaxAddressId = parseInt(this.$route.query.TaxAddressId.toString())
        }
    },
     updateSearch(){
       let obj = {}
        // ****将object对象转化为vue-router传递的query参数，
        // ****以便记忆搜索条件，
        // ****在点击搜索按钮或是清除搜索条件时，
        // ****需要及时更新url——也就是query对象
        // ****在将url转化到搜索条件对应的input或是select展示时，需要特别处理特殊字段，例如：1^2,,1^1,1^0
       for(var n in this.pagerequest){
         if(n === 'DeclarePayType'){
           // 因为参数是类似1^0，所以需要码
           obj[n] = encodeURIComponent(this.pagerequest[n])
         }else
         if(this.pagerequest[n]){
           obj[n] = this.pagerequest[n]
         }else {
           delete obj[n]
         }
       }
       this.$router.push({
         path: '/taxdeclaration',
         query: obj
       })
     } 
}
</script>