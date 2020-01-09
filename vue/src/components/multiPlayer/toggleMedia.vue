<script>
import ImgPlayer from './imgPlayer.vue'
import VideoPlayer from './videoPlayer.vue'
import TextShow from './textShow.vue'
export default {
    props: {
        data: {
            type: Object,
            default: ''
        }
    },
    functional: true,
    render (createElement, context) {

        // return createElement(
        //     d,
        //     context.data,
        //     context.children
        // )
        function get() {
			var data = context.props.data;

			console.log("smart-component/type:" + data.type);
			//判断是哪一种类型的组件
			switch (data.type) {
				case 'img':
					return ImgPlayer;
				case 'video':
					return VideoPlayer;
				case 'text':
					return TextShow;
				default:
					console.log("data 类型不合法：" + data.type);
			}
		}

		return createElement(
			get(),
			{
				props: {
					data: context.props.data
				}
			},
			context.children
		)

    }
}
</script>