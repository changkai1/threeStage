<template>
    <div class="takeComment">
        <textarea name="textarea" v-model.trim="context" class="takeTextField" id="tijiaoText"></textarea>
        <div class="takeSbmComment">
            <input type="button" class="inputs" value="" @click="addWeibo" />
        </div>
    </div>
</template>

<script>
    // import Bus from "@/Bus"
    export default {
        name: "take-comment",
        data(){
            return {
                context:""
            }
        },
        methods:{
            addWeibo(){
                this.$http.post("http://127.0.0.1/addweibo",{
                    context:this.context
                }).then(({data})=>{
                    console.log(data);
                    this.$bus.$emit("getweibo");
                })
            }
        }
    }
</script>

<style scoped>

</style>
