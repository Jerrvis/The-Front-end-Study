import {onBeforeUnmount, onMounted, reactive} from 'vue'

export default function(){
  // 实现鼠标打点
  let point = reactive({
    x:0,
    y:0
  })
  
  // 方法
  function savePoint(event){
      console.log(event.pageX,event.pageY)
      point.x = event.pageX
      point.y = event.pageY
  }
  onMounted(()=>{
    window.addEventListener('click',savePoint)
  })
  
  onBeforeUnmount(()=>{
    window.removeEventListener('click',savePoint)
  })

  return point
}

