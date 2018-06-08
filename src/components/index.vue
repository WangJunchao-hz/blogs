<template>
  <section class="am-container am-cf">
    <div class="left am-fl">
      <div class="am-panel">
        <div class="am-panel-hd">
          <h3 class="am-panel-title">近期文章</h3>
        </div>
        <ul class="am-list">
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。每个人都有一个死角， 自己走不出来，别人也闯不进去。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">HTML</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">我把最深沉的秘密放在那里。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">性能优化</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">我把最深沉的秘密放在那里。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">性能优化</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">我把最深沉的秘密放在那里。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">性能优化</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">我把最深沉的秘密放在那里。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">性能优化</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。每个人都有一个死角， 自己走不出来，别人也闯不进去。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">HTML</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。每个人都有一个死角， 自己走不出来，别人也闯不进去。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">HTML</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。每个人都有一个死角， 自己走不出来，别人也闯不进去。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">HTML</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。每个人都有一个死角， 自己走不出来，别人也闯不进去。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">HTML</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
          <li class="content-box">
            <div class="info-box">
              <div class="info-row title-row"><a class="title" href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。每个人都有一个死角， 自己走不出来，别人也闯不进去。</a></div>
              <div class="info-row meta-row">
                <span class="am-badge am-badge-primary am-radius">HTML</span>
                <span class="am-badge am-radius">2018-6-8 10:42:34</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right am-fr">
      <div class="fixed-box">
        <div class="am-panel am-panel-success">
          <div class="am-panel-hd">
            <h3 class="am-panel-title">标签</h3>
          </div>
          <div class="am-panel-bd">
            <span class="am-badge am-badge-success am-radius">HTML</span>
            <span class="am-badge am-badge-primary am-radius">CSS</span>
            <span class="am-badge am-badge-secondary am-radius">JS</span>
            <span class="am-badge am-badge-success am-radius">性能优化</span>
            <span class="am-badge am-badge-warning am-radius">移动端</span>
            <span class="am-badge am-badge-danger am-radius">面试题</span>
          </div>
        </div>
      </div>
    </div>
    <v-load v-show="isLoading"></v-load>
  </section>
</template>

<script>
  import Loading from "./loading";
  export default {
    name: 'index',
    data() {
      return {
          isLoading:false,
          articleLists:[{
            "id":"201867175313",
            "title":"js对象和继承",
            "date":"2018-6-7 18:04:55",
            "url":"",
            "root_url":"https://juejin.im/entry/59b27a7af265da065352af31",
            "label":"JS"
          }]
      }
    },
    components: {
      'v-load': Loading
    },
    mounted() {
      this.getArticleLists();
    },
    methods:{
      getArticleLists() {
        this.$http.get('../../static/api/article_list.json').then(function (res) {
          console.log(res);
        },function (err) {
          console.log(err);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section{
    position: relative;
  }
  .content-box{
    padding: 1.167rem 2rem;
  }
  .title-row{
    margin: .5rem 0 .8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title{
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
  }
  .title:visited{
    color: #909090;
  }
  .title:hover{
    text-decoration: underline;
  }
  .title:active{
    color: #909090;
  }
  .meta-row{
    font-size: 1rem;
    color: #8f969c;
  }
  .am-list>li{
    border-color: #f6f6f6;
  }
  section{
    margin-top: 2rem;
  }
  .left{
    width: 78%;
  }
  .right{
    width: 20%;
  }
  .fixed-box{
    position: fixed;
    width: 20rem;
  }
  .am-panel-bd .am-badge{
    font-size: 1.4rem;
    cursor: pointer;
  }
  .am-panel-bd .am-badge-primary:hover{
    background-color: #0c79b1;
  }
  .am-panel-bd .am-badge-secondary:hover{
    background-color: #19a7f0;
  }
  .am-panel-bd .am-badge-success:hover{
    background-color: #4aaa4a;
  }
  .am-panel-bd .am-badge-warning:hover{
    background-color: #e0690c;
  }
  .am-panel-bd .am-badge-danger:hover{
    background-color: #d7342e;
  }
</style>
