<!--
 * @Description: 
-->
<script lang="ts">
  import {
    defineComponent,
    onMounted,
    reactive,
    ref,
    h
  } from 'vue'
  import lottie from 'lottie-web';
  export default defineComponent({
    props: {
      options: {
        type: Object,
        required: true
      },
      height: Number,
      width: Number,
    },
    emits: ['animCreated'],
    setup(props, context) {
      // fetch('src/assets/lottie/65358-loading-dino.json')
      //   .then(data => {
      //     const anim = lottie.loadAnimation({
      //       container: document.querySelector('.bodymovin') as HTMLElement,
      //       renderer: 'svg',
      //       loop: true,
      //       autoplay: true,
      //       // animationData: animationData,
      //       path: 'src/assets/lottie/65358-loading-dino.json',
      //     })
      //   })
      // fetch('src/assets/lottie/65358-loading-dino.json')
      //   .then(data => {
      // const animation = (window as any).bodymovin.loadAnimation({
      //   container: document.querySelector('.bodymovin'),
      //   renderer: 'svg',
      //   loop: true,
      //   autoplay: true,
      //   path: 'src/assets/lottie/65358-loading-dino.json',
      // });
      // animation.playCount = 800;
      // })
      const lavContainer = ref < any > (null)
      const style = reactive({
        width: props.width ? `${props.width}px` : '100%',
        height: props.height ? `${props.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      })
      onMounted(() => {
        const anim = lottie.loadAnimation({
          container: lavContainer.value,
          renderer: 'svg',
          loop: props.options.loop !== false,
          autoplay: props.options.autoplay !== false,
          animationData: props.options.animationData,
          rendererSettings: props.options.rendererSettings
        })
        context.emit('animCreated', anim)
      })
      return {
        lavContainer,
        style
      }
      // return () => h(
      //   'div', {
      //     style: style,
      //     ref: lavContainer
      //   }
      // )
    },
    render() {
      const {
        style
      } = this
      return h( 
        'div',
        {
          style: style,
          ref: 'lavContainer'
        }
      )
    }
  })
</script>

<style scoped>

</style>