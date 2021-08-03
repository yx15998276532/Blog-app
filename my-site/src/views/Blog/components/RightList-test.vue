<template>
  <RightList :list="list" />
</template>

<script>
import RightList from "./RightList"
export default {
    components:{
            RightList
    },
    data(){
        return {
            list:[
                {id:0, name:'a', isSelect:false},
                {id:1, name:'b', isSelect:false, children:[
                    {name:"b-1", isSelect:false},
                    {name:"b-2", isSelect:false,children:[
                    {name:"b-2-1", isSelect:false},
                    {name:"b-2-2", isSelect:false},
                    {name:"b-2-3", isSelect:false},
                    ]},
                    {name:"b-3", isSelect:false},
                    {name:"b-4", isSelect:false},
                ]},
                {id:2, name:'c', isSelect:true},
                {id:3, name:'d', isSelect:false},
            ]
        }
    }

}
</script>

<style>

</style>