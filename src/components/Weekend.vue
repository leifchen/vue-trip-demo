<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li 
        class="item border-bottom" 
        v-for="item of recommendList" 
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg',
          title: '福州打卡',
          desc: '大美福州，必游之处'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f6/82acfa5c7f472c.jpg_r_640x214_508da3cb.jpg',
          title: '熊孩子玩乐',
          desc: '与数千种海洋动物亲切对话，看人鲨共舞惊心动魄、梦幻美人鱼婀娜多姿、海狮幽默的表演'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-heght: .4rem
      color: #ccc
      ellipsis()
</style>