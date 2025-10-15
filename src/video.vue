<template>
    <view class="container">
        <scrollVideo ref="myvideo"></scrollVideo>
    </view>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import scrollVideo from '@/components/scrollVideo.vue';
import { getVideoDetails } from '@/api/apiv3';
const myvideo = ref();
const videoObj: any = ref('');
onLoad((opt: any) => {
    getVideoDetails({ id: 2 }).then((res: any) => {
        if (res.code == 200) {
            videoObj.value = {
                value: res.data.id,
                videoPath: res.data.video,
                title: res.data.title,
                des: res.data.description,
                isLike: res.data.is_liked,
                likeNum: res.data.count_liked,
                isCollect: res.data.is_collected,
                collectNum: res.data.collectNum,
                shareNum: res.data.shareNum,
            };
        }
    });
});
onMounted(() => {
    myvideo.value.initVideo(videoObj.value);
});
function back() {
    uni.navigateBack({
        delta: 1,
    });
}
</script>
<style lang="scss" scoped>
.video-fill {
    width: 100%;
    height: 100vh;
}
</style>
