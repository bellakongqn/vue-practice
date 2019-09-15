<template>
    <div>
        <select
            :value="phoneInfo.areaCode"
            placeholder="区号"
            @change="handleAreaCodeChange"
        >
            <option value="+86">+86</option>
            <option value="+60">+60</option>
        </select>
        <input
            :value="phoneInfo.phone"
            type="number"
            placeholder="手机号"
            @input="handlePhoneChange"
        />
        <input
            :value="zipCode"
            type="number"
            placeholder="邮编"
            @input="handleZipCodeChange"
        />
        <span v-if="showMessage" style="color: red;">{{ message }}</span>
    </div>
</template>

<script>
export default {
    name: "PersonalInfo",
    //  mode 允许一个自定义组件在使用v-model时自定义prop 和 event
    //  一个组件上的v-model会把value作为prop并且把input用作event
    //  但是一些输入类型复选框之类的可能想通过value prop 达到不同的目的 ,使用modelk可以避免冲突
    model: {
        prop: "phoneInfo", // 默认 value
        event: "change" // 默认 input
    },
    // 监听手机号开启验证
    watch: {
            "phoneInfo.phone": function(val) {
            this.handleValidate(val);
            }
    },
    props: {
        phoneInfo: Object,
        zipCode: String,
        validate:Function,
        message:String,
        required:Boolean,
    },
    data(){
        return{
            showMessage:false
        }

    },
    methods:{
        handleAreaCodeChange(e){
        this.$emit("change", {
                ...this.phoneInfo,
                areaCode: e.target.value
        });
        },
        handlePhoneChange(e){
            this.$emit("change", {
                ...this.phoneInfo,
                phone: e.target.value
        });
        },
        handleZipCodeChange(e){
            this.$emit("update:zipCode", e.target.value);
        //  this.$emit("change", {
        //         zipCode: e.target.value
        // });
        },
        handleValidate(val) {
            const res = this.validate(val);
            this.showMessage = !res;
        }
        

    }

    
}
</script>

<style scoped>

</style>
