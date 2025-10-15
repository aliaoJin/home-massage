<template>
    <view class="container">
        <navBar :navBarStyle="navBarStyle">
            <template #content>
                <view class="navbar-conten">
                    <view class="address-container">
                        <uni-icons type="location-filled" size="24" color="#000"></uni-icons>
                        <text class="address-text" @click="goToAddressDetail">上海闵行</text>
                        <uni-icons type="arrowright" size="15" color="#000"></uni-icons>
                    </view>
                </view>
            </template>
        </navBar>
        <view class="content-box" :style="{ paddingTop: `${globalData.navHeight}px` }">
            <!-- 搜索栏 -->
            <uni-search-bar placeholder="搜索技师姓名" @input="onSearchInput"></uni-search-bar>
            <!-- 轮播组件 -->
            <div style="padding: 10px">
                <uni-swiper-dot :showIndicator="true" :current="current" :mode="mode" :dots-styles="dotsStyles" @clickItem="onClickIndicator">
                    <swiper class="banner-swiper" :current="current" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :vertical="vertical" @change="onChange">
                        <swiper-item v-for="(item, index) in bannerList" :key="index">
                            <image class="banner-image" :src="item.image" mode="aspectFill" @click="onBannerClick(item)"></image>
                        </swiper-item>
                    </swiper>
                </uni-swiper-dot>
            </div>

            <!-- 筛选栏 -->
            <view class="filter-bar">
                <uni-data-select v-model="filterData.project" :localdata="projectOptions" placeholder="项目"></uni-data-select>
                <uni-data-select v-model="filterData.time" :localdata="timeOptions" placeholder="时间"></uni-data-select>
                <uni-data-select v-model="filterData.gender" :localdata="genderOptions" placeholder="性别"></uni-data-select>
            </view>
            <!-- 技师列表 -->
            <view class="technician-list">
                <view class="technician-item" v-for="(item, index) in technicianList" :key="index" @click="onTechnicianList(item)">
                    <div>
                        <image class="technician-avatar" :src="item.avatar" mode="aspectFill"></image>
                    </div>
                    <div>
                        <view class="technician-info">
                            <div>
                                <div class="flex-row" style="margin-bottom: 10rpx">
                                    <div class="t-name">{{ item.name }}</div>
                                    <div><uni-icons type="location-filled" size="16" color="#000"></uni-icons>{{ item.distance }}km</div>
                                </div>
                                <div class="flex-row serviceDesc">{{ item.serviceDesc }}</div>
                            </div>
                            <div class="flex-row tag-time">
                                <div class="tag-time-title">最早可约</div>
                                <div class="tag-time-num" style="padding: 0rpx 10rpx">{{ item.appointmentTime }}</div>
                            </div>
                        </view>
                        <div class="flex-row" style="justify-content: space-between">
                            <div style="font-size: 26rpx">服务单数:10</div>
                            <nut-button type="success" custom-color="#f54f5c" size="small" @click="handleOrder(item.id)">去下单</nut-button>
                        </div>
                    </div>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import { onPageScroll, onThemeChange } from '@dcloudio/uni-app';
import navBar from '@/components/navBar.vue';
import { ref, reactive, inject } from 'vue';
import { getdeviceInfo } from '@/utils/deviceInfo';
import { onLoad } from '@dcloudio/uni-app';
const imgUrl = inject('imgUrl');
const navBarStyle = reactive({ backgroundColor: '#ffffff' });
const { globalData } = reactive(getdeviceInfo());
onPageScroll((e) => {
    if (e.scrollTop > 10) {
        navBarStyle.backgroundColor = '#ffffff';
    } else {
        navBarStyle.backgroundColor = '#ffffff';
    }
});

onLoad((option: any) => {});
function onTechnicianList(params: any) {
    uni.navigateTo({
        url: '/subPack/home/index?id=' + params.id,
    });
}
function goToAddressDetail(params: any) {}
const technicianList = ref([
    {
        id: 1,
        avatar: 'https://origin.picgo.net/2025/10/15/a0616d7bcf9e0c7eaf3acd895429b15d7b97d10394c6d-lmTsU6_fw1200webp881740b370f22540.webp',
        name: '霞霞',
        distance: 2.67,
        appointmentTime: '16:00',
        serviceDesc: '正规按摩 绿色服务',
        serviceCount: 11,
    },
    {
        id: 2,
        avatar: 'https://origin.picgo.net/2025/10/15/c7f1ae30088ed046883a217867f6ba1f0529926eb7c9b-2pxwXf_fw1200webpfcb806b0cda3e7e8.webp',
        name: '潇潇Bess',
        distance: 5.82,
        appointmentTime: '16:00',
        serviceDesc: '从事相关行业多年，擅长精油spa，采耳等。活泼开朗，选我定会开心！',
        serviceCount: 0,
    },
    {
        id: 4,
        avatar: 'https://origin.picgo.net/2025/10/15/fc38ca17aa426fb7ceedbdc43ec1a04e1941957f8d0fb-xjHZKo_fw1200webp82f14964dc7694ec.webp',
        name: '小华',
        distance: 5.83,
        appointmentTime: '16:00',
        serviceDesc: '正规按摩 正规按摩 绿色服务',
        serviceCount: 4,
    },
]);
// https://origin.picgo.net/2025/10/15/fc38ca17aa426fb7ceedbdc43ec1a04e1941957f8d0fb-xjHZKo_fw1200webp82f14964dc7694ec.webp
// https://origin.picgo.net/2025/10/15/a0616d7bcf9e0c7eaf3acd895429b15d7b97d10394c6d-lmTsU6_fw1200webp881740b370f22540.webp

// 筛选数据
const filterData = reactive({
    nearby: '',
    project: '',
    time: '',
    gender: '',
});

// 附近选项
const nearbyOptions = ref([
    { text: '附近1', value: 'near1' },
    { text: '附近2', value: 'near2' },
]);

// 项目选项
const projectOptions = ref([
    { text: '按摩', value: 'massage' },
    { text: 'SPA', value: 'spa' },
    { text: '推拿', value: 'tuina' },
]);

// 时间选项
const timeOptions = ref([
    { text: '上午', value: 'morning' },
    { text: '下午', value: 'afternoon' },
]);

// 性别选项
const genderOptions = ref([
    { text: '男', value: 'male' },
    { text: '女', value: 'female' },
]);

// 搜索输入事件
const onSearchInput = (e: any) => {
    console.log('搜索内容：', e.detail.value);
    // 可根据输入内容筛选技师列表等逻辑
};

// 处理下单
const handleOrder = (id: any) => {
    console.log('下单技师ID：', id);
    // 下单逻辑，如跳转订单页等
};
// 轮播图数据
const bannerList = ref([
    {
        id: 1,
        image: 'https://origin.picgo.net/2025/10/15/bannerb293beb7e1ecd4ca.webp',
        url: '/pages/index/index',
    },
]);

// 轮播配置
const current = ref(0);
const autoplay = ref(true);
const interval = ref(3000);
const duration = ref(500);
const circular = ref(true);
const vertical = ref(false);
const mode = ref('default');
const dotsStyles = ref({
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    color: '#FFFFFF',
    selectedBackgroundColor: '#007AFF',
    selectedBorderColor: '#FFFFFF',
    size: '12px',
});

// 轮播图切换事件
const onChange = (e: any) => {
    current.value = e.detail.current;
    console.log('轮播切换到第', current.value + 1, '张');
};

// 点击指示点事件
const onClickIndicator = (index: any) => {
    current.value = index;
    console.log('点击指示点，切换到第', index + 1, '张');
};

// 点击轮播图事件
const onBannerClick = (item: any) => {
    console.log('点击了轮播图:', item);
    // 跳转到对应页面
    uni.navigateTo({
        url: item.url,
    });
};
</script>
<style lang="scss" scoped>
.container {
    // background: linear-gradient(135deg, #abdcff, #0396ff);
    // .navbar-conten {
    //     display: flex;
    //     align-items: center;
    // }
    .address-container {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 8px;
    }
    .address-text {
        margin: 0 8px;
        font-size: 16px;
        color: #000;
    }
}
.banner-container {
    width: 100%;
    overflow: hidden;
}
.banner-swiper {
    width: 100%;
    height: 300rpx; /* 可以根据需要调整高度 */
}
.banner-image {
    width: 100%;
    height: 100%;
}
.cover-info {
    margin: 15px 0;
}
.cover-title {
    font-size: 20px;
    font-weight: bold;
    color: #007aff;
}
.cover-desc {
    font-size: 16px;
    color: #333;
}
.filter-bar {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
}
.filter-bar :deep(.uni-select) {
    border: none !important;
}
.technician-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.technician-item {
    display: flex;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
}
.technician-avatar {
    width: 80px;
    height: 80px;
    border-radius: 5px;
}
.technician-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 26rpx;
    margin-bottom: 15rpx;
}
.t-name {
    font-size: 30rpx;
    color: #000;
    font-weight: bold;
    margin-right: 20rpx;
}
.tag-time {
    gap: 15rpx;
    border-radius: 10rpx;
    border: 1rpx solid #f66c73;
    justify-content: space-between;
    padding: 0rpx;
    .tag-time-title {
        background-color: #f66c73;
        color: #fff;
        padding: 0rpx 10rpx;
        border-radius: 10rpx 0rpx 0rpx 10rpx;
    }
    .tag-time-num {
        // padding: 0rpx 10rpx;
    }
}
.serviceDesc {
    width: 315rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>
