<template>
    <div>
        <button 
            v-for="tab in tabs" 
            :key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab"
            >
            {{tab}}
        </button>
        <keep-alive>
            <component
                v-bind:is="currentTabComponent"
                class="tab"
            ></component>
        </keep-alive>
        
    </div>
</template>

<script>
import tabArchive from './tab-archive'
import tabPosts from './tab-posts'
export default {
    data(){
        return{
            currentTab: 'Posts',
            tabs: ['Posts', 'Archive']
        }
    },
    computed:{
        currentTabComponent:function(){
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    components:{
        tabArchive,
        tabPosts
    }
}
</script>


<style scoped>
    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>