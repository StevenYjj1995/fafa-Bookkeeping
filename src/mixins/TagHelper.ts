import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export class TagHelper extends Vue{
  createTag():void{
    const name =window.prompt('请输入标签名')
    if(name){
      if(name.indexOf(' ')>=0){
          return window.alert('标签名不能含有空格')
      }
      this.$store.commit('createTag',name)
    }else if(name===''){
      return window.alert('标签名不能为空')
    }
    else{
      return
    }

  }
}
export default TagHelper