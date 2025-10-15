<template>
    <view class="order-page">
        <!-- 选项卡区域 -->
        <view class="tab-bar">
            <view class="tab-item" :class="{ active: activeTab === '全部' }" @click="switchTab('全部')"> 全部 </view>
            <view class="tab-item" :class="{ active: activeTab === '进行中' }" @click="switchTab('进行中')"> 进行中 </view>
            <view class="tab-item" :class="{ active: activeTab === '待评价' }" @click="switchTab('待评价')"> 待评价 </view>
            <view class="tab-item" :class="{ active: activeTab === '已取消' }" @click="switchTab('已取消')"> 已取消 </view>
        </view>

        <!-- 订单列表区域 -->
        <view class="order-list">
            <view class="order-item" v-for="(order, index) in orders" :key="index">
                <!-- 头部：头像、姓名、状态 -->
                <view class="order-header">
                    <image class="avatar" :src="order.avatar" mode="aspectFill"></image>
                    <text class="name">{{ order.name }}</text>
                    <text class="status">{{ order.status }}</text>
                </view>

                <!-- 服务信息：图片、名称、时长、预约时间、价格 -->
                <view class="service-info">
                    <image class="service-img" :src="order.serviceimg" mode="aspectFill"></image>
                    <view class="service-desc">
                        <text class="service-name">{{ order.service }}</text>
                        <text class="service-duration">{{ order.duration }}</text>
                        <text class="service-time">预约服务：{{ order.reserveTime }}</text>
                    </view>
                    <view class="service-price">
                        <text class="price">¥{{ order.price }}</text>
                        <text class="count">×{{ order.count }}</text>
                    </view>
                </view>

                <!-- 底部：车费、实付款 -->
                <view class="fee-info">
                    <text class="car-fee">含车费</text>
                    <text class="pay-amount">实付款 ¥{{ order.payAmount }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';

// 响应式：当前激活的选项卡
const activeTab = ref('全部');

// 切换选项卡（实际项目可结合接口筛选订单，此处简化）
const switchTab = (tab) => {
    activeTab.value = tab;
};

// 模拟订单数据（实际项目从接口获取）
const orders = [
    {
        avatar: 'https://origin.picgo.net/2025/10/15/fc38ca17aa426fb7ceedbdc43ec1a04e1941957f8d0fb-xjHZKo_fw1200webp82f14964dc7694ec.webp', // 头像占位图
        name: '池婷',
        service: '中式推拿-体验',
        duration: '40分钟',
        price: 258,
        count: 1,
        reserveTime: '2025-05-26 00:00',
        status: '已取消',
        payAmount: 0,
        serviceimg: 'https://origin.picgo.net/2025/10/15/9bfb1bd6a5195b745f4582a9470e440de71bae89a6e340-GCVAUR_fw1200webp906a728571d05709.webp',
    },
    {
        avatar: 'https://origin.picgo.net/2025/10/15/a0616d7bcf9e0c7eaf3acd895429b15d7b97d10394c6d-lmTsU6_fw1200webp881740b370f22540.webp', // 头像占位图
        name: '晴晴',
        service: '中式推拿-体验',
        duration: '40分钟',
        price: 258,
        count: 1,
        reserveTime: '2025-05-25 13:00',
        status: '进行中',
        payAmount: 0,
        serviceimg: 'https://origin.picgo.net/2025/10/15/81cc5075c1dcf92fe3b5e9208d6de7ff1f0e770d34686-sPldcc_fw1200webp9880bf91804684ee.webp',
    },
    {
        avatar: 'https://origin.picgo.net/2025/10/15/c7f1ae30088ed046883a217867f6ba1f0529926eb7c9b-2pxwXf_fw1200webpfcb806b0cda3e7e8.webp', // 头像占位图
        name: '晴晴',
        service: '中式推拿-体验',
        duration: '40分钟',
        price: 258,
        count: 1,
        reserveTime: '2025-05-25 13:00',
        status: '已完成',
        payAmount: 0,
        serviceimg: 'https://origin.picgo.net/2025/10/15/925878e953c268ec9a36ae360417e8635db4929dcede-Y8lGz3_fw1200webp3bcbcea0f63d58eb.webp',
    },
];
</script>

<style scoped>
.order-page {
    padding: 10px;
    /* background-color: #f5f5f5; */
}

/* 选项卡 */
.tab-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
}

.tab-item {
    padding: 5px 10px;
    font-size: 16px;
}

.tab-item.active {
    color: #000;
    font-weight: bold;
}

/* 订单列表 */
.order-list {
    display: flex;
    flex-direction: column;
    gap: 10px; /* 订单项之间的间距 */
}

.order-item {
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 20rpx;
}

/* 订单头部 */
.order-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

.name {
    font-size: 16px;
    font-weight: bold;
    flex: 1;
}

.status {
    color: #000;
    font-size: 14px;
}

/* 服务信息区域 */
.service-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
}

.service-img {
    width: 80px;
    height: 60px;
    border-radius: 4px;
    margin-right: 10px;
}

.service-desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px; /* 内部文字间距 */
}

.service-name {
    font-size: 15px;
    font-weight: 500;
}

.service-duration,
.service-time {
    font-size: 13px;
    color: #666;
}

.service-price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
}

.price {
    font-size: 16px;
    color: #f66c73;
}

.count {
    font-size: 13px;
    color: #666;
}

/* 车费与实付区域 */
.fee-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    color: #666;
}
</style>
>
