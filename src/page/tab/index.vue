<template>
    <transition name="page-move">
        <cube-page type="button-view" title="tab">
            <div slot="content" class="tab-content">
                <cube-tab-bar v-model="selectedLabel"
                        show-slider
                        :use-transition="disabled"
                        ref="tabNav"
                        :data="tabLabels">
                    </cube-tab-bar>
                    <div class="tab-slide-container">
                    <cube-slide
                      ref="slide"
                      :loop="loop"
                      :initial-index="initialIndex"
                      :auto-play="autoPlay"
                      :show-dots="showDots"
                      :options="slideOptions"
                      @scroll="scroll"
                      @change="changePage"
                    >
                        <!-- 关注 -->
                      <cube-slide-item>
                        <cube-scroll :data="followersData" :options="scrollOptions">
                          <ul class="list-wrapper">
                            <li v-for="(item, index) in followersData" class="list-item" :key="index">
                              <div class="top flex">
                                <span class="avatar"><img :src="item.avatar"  width="100%"></span>
                                <span class="time grow flex text-left">{{resolveTitle(item)}}</span>
                              </div>
                              <div class="middle is-bold line-height">{{item.question}}</div>
                              <div>{{resolveQuestionFollowers(item)}}</div>
                            </li>
                          </ul>
                        </cube-scroll>
                      </cube-slide-item>
                      <!-- 推荐 -->
                      <cube-slide-item>
                        <cube-scroll :data="recommendData" :options="scrollOptions">
                          <ul class="list-wrapper">
                            <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                              <div class="top is-black is-bold line-height">
                                {{item.question}}
                              </div>
                              <div class="middle is-grey line-height">{{item.content}}</div>
                              <div>{{resolveQuestionFollowers(item)}}</div>
                            </li>
                          </ul>
                        </cube-scroll>
                      </cube-slide-item>
                      <cube-slide-item>
                        <cube-scroll :data="hotData" :options="scrollOptions">
                          <ul class="list-wrapper">
                            <li v-for="(item, index) in hotData" class="list-item" :key="index">
                              <div class="hot-title">
                                <span class="hot-sequence">{{item.sequence}}</span>
                                <span></span>
                                {{item.label}}
                              </div>
                              <div class="hot-content is-bold is-black">{{item.question}}</div>
                            </li>
                          </ul>
                        </cube-scroll>
                      </cube-slide-item>
                    </cube-slide>
                </div>
            </div>
        </cube-page>
    </transition>
</template>
<script>
    import CubeView from '@/components/cube-view.vue'
    import CubePage from '@/components/cube-page.vue'
    import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from '@/data/tab-bar'
    export default {
        name: 'tab',
        components: {
            CubeView,
            CubePage
        },
        data () {
            return {
                toastTxt: 'cube toast content',
                selectedLabel: '推荐',
                disabled: false,
                tabLabels: [{
                  label: '关注'
                }, {
                  label: '推荐'
                }, {
                  label: '热榜'
                }],
                loop: false,
                autoPlay: false,
                showDots: false,
                slideOptions: {
                    listenScroll: true,
                    probeType: 3,
                    directionLockThreshold: 0
                },
                scrollOptions: {
                    directionLockThreshold: 0
                },
                followersData: FOLLOWERS_DATA,
                recommendData: RECOMMEND_DATA,
                hotData: HOT_DATA
            }
        },
        computed: {
            initialIndex () {
                let index = 0
                index = this.findIndex(this.tabLabels, item => item.label === this.selectedLabel)
                return index
            }
        },
        methods: {
            showToast () {
                this.$createToast({
                    txt: this.toastTxt
                }).show()
            },
            resolveTitle (item) {
                return `${item.name}关注了问题 · ${item.postTime} 小时前`
            },
            resolveQuestionFollowers (item) {
                return `${item.answers} 赞同 · ${item.followers} 评论`
            },
            changePage (current) {
                this.selectedLabel = this.tabLabels[current].label
            },
            scroll (pos) {
                const x = Math.abs(pos.x)
                const tabItemWidth = this.$refs.tabNav.$el.clientWidth
                const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
                const deltaX = x / slideScrollerWidth * tabItemWidth
                this.$refs.tabNav.setSliderTransform(deltaX)
            },
            findIndex(ary, fn) {
                if (ary.findIndex) {
                    return ary.findIndex(fn)
                }
                /* istanbul ignore next */
                let index = -1
                /* istanbul ignore next */
                ary.some(function (item, i, ary) {
                    const ret = fn.call(this, item, i, ary)
                    if (ret) {
                        index = i
                        return ret
                    }
                })
                /* istanbul ignore next */
                return index
            }
        }
    }
</script>
<style lang="scss" scoped>
    .cube-tab-bar{
        padding: 10px 0;
    }  
    .avatar{
        width: 20px;
        height: 20px;
        overflow:hidden;
        border-radius: 50%;
        margin-left: 16px;
    } 
    .list-item>div{
        padding: 10px 0;
    }   
</style>
