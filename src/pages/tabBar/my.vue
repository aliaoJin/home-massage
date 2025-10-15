<template>
    <view class="user-center">
        <!-- 头部登录/注册区域 -->
        <view class="header">
            <view class="avatar">
                <image src="https://origin.picgo.net/2025/10/15/-1cc7ddcbdce8589fa.png" mode="aspectFill"></image>
            </view>
            <view class="login-register">
                <text class="title">登录/注册</text>
                <text class="sub-title">期待为您服务</text>
            </view>
        </view>

        <!-- 功能按钮区域 -->
        <view class="function-buttons">
            <div class="tag-item" @click="handleBecomePartner">
                <image src="https://origin.picgo.net/2025/10/15/haoyourenzheng-copy597db2a812eb9888.png" mode="aspectFit"></image>
                <text>成为合伙人</text>
            </div>
            <div class="tag-item" @click="handleCollect">
                <image src="https://origin.picgo.net/2025/10/15/shoucang248d6921646d6b2f.png" mode="aspectFit"></image>
                <text>收藏</text>
            </div>
            <div class="tag-item" @click="handleCustomerService">
                <image src="https://origin.picgo.net/2025/10/15/pinglun9d16cf8557adc039.png" mode="aspectFit"></image>
                <text>客服</text>
            </div>
        </view>

        <!-- 列表区域 -->
        <view class="list">
            <view class="list-item" @click="handleMyEvaluation">
                <image src="https://origin.picgo.net/2025/10/15/pinglun1be322905c2bfa65e.png" mode="aspectFit"></image>
                <text>我的评价</text>
                <nut-icon name="right" size="10"></nut-icon>
            </view>
            <view class="list-item" @click="handleFeedback">
                <image src="https://origin.picgo.net/2025/10/15/dianzan157d22665d4241ff.png" mode="aspectFit"></image>
                <text>意见反馈</text>
                <nut-icon name="right" size="10"></nut-icon>
            </view>
            <view class="list-item" @click="handleAddressManagement">
                <image src="https://origin.picgo.net/2025/10/15/dingwei492e614750eeca54.png" mode="aspectFit"></image>
                <text>地址管理</text>
                <nut-icon name="right" size="10"></nut-icon>
            </view>
            <view class="list-item" @click="handleRecommendOrBecomeTechnician">
                <image src="https://origin.picgo.net/2025/10/15/huiyuan1fff973dd7ea6af6.png" mode="aspectFit"></image>
                <text>推荐/成为技师</text>
                <nut-icon name="right" size="10"></nut-icon>
            </view>
            <view class="list-item" style="margin-bottom: 0rpx; border-bottom: none" @click="handleSetting">
                <image src="https://origin.picgo.net/2025/10/15/shezhi8f1e5aa57a9f0def.png" mode="aspectFit"></image>
                <text>设置</text>
                <nut-icon name="right" size="10"></nut-icon>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';

// 处理成为合伙人点击事件
const handleBecomePartner = () => {
    uni.showToast({
        title: '点击了成为合伙人',
        icon: 'none',
    });
};

// 处理收藏点击事件
const handleCollect = () => {
    uni.showToast({
        title: '点击了收藏',
        icon: 'none',
    });
};

// 处理客服点击事件
const handleCustomerService = () => {
    uni.showToast({
        title: '点击了客服',
        icon: 'none',
    });
};

// 处理我的评价点击事件
const handleMyEvaluation = () => {
    uni.navigateTo({
        url: '/pages/myEvaluation/myEvaluation',
    });
};

// 处理意见反馈点击事件
const handleFeedback = () => {
    uni.navigateTo({
        url: '/pages/feedback/feedback',
    });
};

// 处理地址管理点击事件
const handleAddressManagement = () => {
    uni.navigateTo({
        url: '/pages/addressManagement/addressManagement',
    });
};

// 处理推荐/成为技师点击事件
const handleRecommendOrBecomeTechnician = () => {
    uni.navigateTo({
        url: '/pages/recommendOrBecomeTechnician/recommendOrBecomeTechnician',
    });
};

// 处理设置点击事件
const handleSetting = () => {
    uni.navigateTo({
        url: '/pages/setting/setting',
    });
};
</script>

<style scoped>
.user-center {
    padding: 20rpx;
}

.header {
    display: flex;
    align-items: center;
    margin-bottom: 30rpx;
}

.avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20rpx;
}

.avatar image {
    width: 100%;
    height: 100%;
}

.login-register .title {
    font-size: 36rpx;
    font-weight: bold;
    margin-bottom: 10rpx;
    display: block;
}

.login-register .sub-title {
    font-size: 24rpx;
    color: #999;
}

.function-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30rpx;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.tag-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20rpx;
    border-radius: 10rpx;
}

.tag-item image {
    width: 40rpx;
    height: 40rpx;
    margin-bottom: 10rpx;
}

.tag-item text {
    font-size: 24rpx;
}

.list {
    background-color: #fff;
    border-radius: 10rpx;
    padding: 10rpx;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30rpx;
    border-bottom: 1rpx solid #f5f5f5;
    margin-bottom: 30rpx;
}

.list-item image:first-child {
    width: 40rpx;
    height: 40rpx;
    margin-right: 20rpx;
}

.list-item text {
    font-size: 28rpx;
    flex: 1;
}

.list-item image:last-child {
    width: 30rpx;
    height: 30rpx;
}
</style>
