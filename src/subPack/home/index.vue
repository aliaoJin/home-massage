<template>
    <view class="container">
        <nut-swiper :init-page="0" auto-play="3000">
            <nut-swiper-item>
                <img class="swiper-img" mode="aspectFit" src="https://origin.picgo.net/2025/10/15/c7f1ae30088ed046883a217867f6ba1f0529926eb7c9b-2pxwXf_fw1200webpfcb806b0cda3e7e8.webp" />
            </nut-swiper-item>
            <nut-swiper-item>
                <img class="swiper-img" mode="aspectFit" src="https://origin.picgo.net/2025/10/15/c7f1ae30088ed046883a217867f6ba1f0529926eb7c9b-2pxwXf_fw1200webpfcb806b0cda3e7e8.webp" />
            </nut-swiper-item>
        </nut-swiper>
        <view class="content">
            <view class="brand">
                <div class="tag-item">
                    <image src="https://origin.picgo.net/2025/10/15/dianzan157d22665d4241ff.png" mode="aspectFit"></image>
                    <text>专业服务</text>
                </div>
                <div class="tag-item">
                    <image src="https://origin.picgo.net/2025/10/15/-copy-copy07ea56d6ce7a713f.png" mode="aspectFit"></image>
                    <text>真实评价</text>
                </div>
                <div class="tag-item">
                    <image src="https://origin.picgo.net/2025/10/15/-107084a8d3db89128.png" mode="aspectFit"></image>
                    <text>实名认证</text>
                </div>
                <div class="tag-item">
                    <image src="https://origin.picgo.net/2025/10/15/huiyuan1fff973dd7ea6af6.png" mode="aspectFit"></image>
                    <text>全程保障</text>
                </div>
            </view>
            <div style="background-color: #fff; padding: 15rpx 20rpx; border-radius: 0rpx 0rpx 25rpx 25rpx">
                <div class="flex-row" style="justify-content: space-between">
                    <div class="flex-row">
                        <div class="t-name" style="font-size: 30rpx; font-weight: bold; margin-right: 10rpx">露露</div>
                        <div><uni-icons type="location-filled" size="16" color="#000"></uni-icons>12 km</div>
                    </div>
                    <uni-icons type="heart" size="16" color="#000"></uni-icons>
                </div>
                <div style="margin-top: 20rpx; font-size: 26rpx; padding-bottom: 10rpx">从事相关行业多年，擅长精油spa，采耳等。活泼开朗，选我定会开心!</div>
            </div>
        </view>
        <!-- 服务项目 -->
        <div class="service-items">
            <div>服务项目</div>
            <view v-for="(item, index) in serviceList" :key="index" class="service-item">
                <view class="img-container">
                    <image :src="item.img" mode="aspectFill"></image>
                </view>
                <view class="content-service">
                    <div class="flex-row">
                        <view class="name">{{ item.name }}</view>
                        <view class="duration">{{ item.duration }}</view>
                    </div>

                    <view class="desc">{{ item.desc }}</view>

                    <div class="flex-row" style="justify-content: space-between; width: 230px; align-items: center">
                        <view class="price">¥{{ item.price }}</view>
                        <div class="flex-row" style="align-items: center">
                            <view class="count">{{ item.count }}</view>
                            <nut-button size="mini" type="primary" custom-color="#f54f5c" @click="addItem(index)">
                                <template #icon>
                                    <nut-icon name="uploader" />
                                </template>
                            </nut-button>
                        </div>
                    </div>
                </view>
            </view>
        </div>

        <view class="footer">
            <div class="flex-row">
                <div>合计：</div>
                <div style="color: #f54f5c">￥230</div>
            </div>
            <view class="footer-btn2" @click="onDialogVisible"> 立即下单 </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, inject, reactive, getCurrentInstance, type ComponentInternalInstance } from 'vue';
import { onLoad, onReady, onShareAppMessage, onShareTimeline, onShow } from '@dcloudio/uni-app';
import { setShareDate, setCacheInformation } from '@/common/setShare';
const imgUrl = inject('imgUrl');
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const storeList: any = ref([]);
const ruleForm = ref<any>(null);
const visibleDialog: any = ref(false);
const isBasicInfo: any = ref(false);
const formData: any = reactive({
    name: '',
    tel: '',
    remark: '',
    area: '',
    address: '',
});
let userInfo: any = reactive({
    avatarUrl: '',
    name: '',
    mobile: '',
    company_name: '',
    business_card: '',
});
const areaValue: any = ref('');
const isQuotation: any = ref(false);
const quotationRes: any = ref('');
const includeList: any = ref({
    include: [],
    notLike: [],
});
const PackageDetail: any = ref('');
const submit = () => {};

const currentTag: any = ref(0);
// 模拟服务项目数据
const serviceList = ref([
    {
        img: 'https://origin.picgo.net/2025/10/15/9bfb1bd6a5195b745f4582a9470e440de71bae89a6e340-GCVAUR_fw1200webp906a728571d05709.webp', // 请替换为实际图片地址
        name: '古法中式推拿',
        duration: '60分钟',
        desc: '古法中式推拿–通络培元',
        price: 258,
        count: 0,
    },
    {
        img: 'https://origin.picgo.net/2025/10/15/81cc5075c1dcf92fe3b5e9208d6de7ff1f0e770d34686-sPldcc_fw1200webp9880bf91804684ee.webp', // 请替换为实际图片地址
        name: '泰式纯享SPA',
        duration: '80分钟',
        desc: '泰式纯享SPA–放松身心 缓解疲劳',
        price: 369,
        count: 0,
    },
    {
        img: 'https://origin.picgo.net/2025/10/15/925878e953c268ec9a36ae360417e8635db4929dcede-Y8lGz3_fw1200webp3bcbcea0f63d58eb.webp', // 请替换为实际图片地址
        name: '泰式纯享SPA',
        duration: '80分钟',
        desc: '泰式纯享SPA–放松身心 缓解疲劳',
        price: 369,
        count: 0,
    },
]);

// 添加服务项目数量的方法
const addItem = (index: any) => {
    serviceList.value[index].count++;
};
const rules = reactive({
    address: { rules: [{ required: true, errorMessage: '小区不能为空' }] },
    name: { rules: [{ required: true, errorMessage: '姓名不能为空' }] },
    tel: {
        rules: [
            { required: true, errorMessage: '电话不能为空' },
            { format: 'number', errorMessage: '电话格式不正确' },
            {
                validateFunction: function (rule: any, value: any, data: any, callback: any) {
                    const reg_tel = /^1[3456789]\d{9}$/;
                    if (!reg_tel.test(value)) {
                        callback('电话格式不正确');
                    }
                    return true;
                },
            },
        ],
    },
});
onLoad((opt: any) => {});
onShow((opt: any) => {
    if (uni.getStorageSync('id')) {
        isBasicInfo.value = getIsBasicInfo();
    }
});

function getIsBasicInfo() {
    const res = uni.getStorageSync('userInfo');
    if (res.avatarUrl && res.business_card && res.company_name && res.mobile && res.name) {
        return false;
    } else {
        return true;
    }
}

function onBasicInfo() {
    uni.navigateTo({ url: '/subPack/account/index' });
}

function onDialogVisible() {
    visibleDialog.value = true;
}

function changeSwiper(e: any) {
    currentTag.value = e;
}
function onCaseDetalis(index: any) {
    uni.navigateTo({
        url: '/subPack/thali/realCase?index=' + index,
    });
}
function onMore(params: any) {
    if (params == 1) {
        uni.navigateTo({
            url: '/subPack/thali/realCase',
        });
    } else {
        uni.navigateTo({
            url: '/subPack/hallList/index',
        });
    }
}
function onTel() {
    uni.makePhoneCall({
        phoneNumber: '021-31599932',
    });
}
function goVrLink(params: any) {
    if (!params) return;
    uni.previewImage({ urls: [params], current: params });
    // uni.navigateTo({
    //     url: '/subPack/webView/index?travel_link=' + encodeURIComponent(JSON.stringify(params)),
    // });
}
</script>

<style lang="scss" scoped>
.container {
    // background: #f5f5f5;
    padding-bottom: 120rpx;
}
.nut-swiper-item {
    height: 800rpx;
}
.swiper-img {
    width: 750rpx;
    height: 500rpx;
}
.content {
    position: relative;
    font-size: 26rpx;
    top: -50rpx;
    border-radius: 25rpx;
    margin: 0rpx 20rpx;
    z-index: 10;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .goods_details {
        text-align: center;
        ::v-deep .rich-text-img {
            width: 710rpx !important;
        }
    }
    .banner-img {
        width: 100%;
        border-radius: 20rpx;
        height: 200rpx;
    }
    .poster-img {
        width: 100%;
        border-radius: 20rpx;
    }
}
.service-items {
    padding: 20rpx;
    border-radius: 20rpx;
    position: relative;
    top: -20rpx;
    margin: 0rpx 20rpx;
    background: #fff;
    margin-bottom: 15rpx;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .service-item {
        display: flex;
        align-items: center;
        margin-bottom: 30rpx;
        overflow: hidden;
        gap: 10px;
        margin-top: 30rpx;
    }
    .img-container {
        width: 180rpx;
        height: 180rpx;
    }
    .img-container image {
        width: 100%;
        height: 100%;
    }
    .content {
        flex: 1;
        padding: 20rpx;
    }
    .name {
        font-size: 32rpx;
        font-weight: bold;
        margin-bottom: 10rpx;
    }
    .duration {
        color: #666;
        font-size: 28rpx;
        margin-bottom: 10rpx;
        margin-left: 20rpx;
    }
    .desc {
        font-size: 28rpx;
        color: #666;
        margin-bottom: 20rpx;
    }
    .price {
        color: #f54f5c;
        font-size: 32rpx;
    }
    .count {
        font-size: 28rpx;
        margin-right: 20rpx;
    }
}
.brand {
    height: 40rpx;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 27rpx;
    padding: 30rpx 20rpx;
    border-radius: 25rpx 25rpx 0 0;
    background-color: #f78989;
    .tag-item {
        display: flex;
        align-items: center;
        color: #000;
    }
    .tag-item image {
        width: 40rpx;
        height: 40rpx;
        margin-right: 10rpx;
    }
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 12;
    background: #fff;
    bottom: 0rpx;
    left: 0rpx;
    right: 0rpx;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
    .footer-tel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 23rpx;
        position: relative;
        z-index: 99999;
    }
    .footer-btn1 {
        color: #e03c31;
        border: 1rpx solid #e03c31;
        width: 220rpx;
        text-align: center;
        padding: 15rpx 20rpx;
        border-radius: 10rpx;
        margin: 10rpx 0rpx;
        button {
            height: 70rpx;
            width: 260rpx;
            position: absolute;
            bottom: 35rpx;
            left: 160rpx;
            opacity: 0;
        }
    }
    .footer-btn2 {
        color: #fff;
        border: 1rpx solid #f54f5c;
        width: 220rpx;
        text-align: center;
        padding: 15rpx 20rpx;
        border-radius: 50rpx;
        background-color: #f54f5c;
        margin: 10rpx 0rpx;
    }
}
::v-deep .nut-dialog {
    width: 630rpx !important;
    min-height: 320rpx;
}
</style>
