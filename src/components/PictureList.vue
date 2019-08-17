<template>
  <div class="pic_container">
    <div class="button_box">
      <button @click="timeSort">按时间排序</button>
      <button @click="classifySort">按分类排序</button>
      <button @click="reset">重置</button>
      <template v-for="item in classifyItem">
        <span class="classifyitem" v-bind:key="item" v-on:click="selectClassify(item)">{{item}}</span>
      </template>
    </div>
    <ul id="#container" class="pic_ul" @dragstart="ondragstart" @dragover="ondragover">
      <li v-for="picItem in piclist" v-bind:key="picItem.id" draggable="true" >
        <div class="pic_img">
          <img src />
        </div>
        <div class="pic_name">{{picItem.name}}</div>
        <div class="pic_classify">
          分类：<input type="text" v-model="picItem.classify"> 
        </div>
        <div class="pic_ctime">{{picItem.createTime}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PictureList",
  data() {
    return {
      piclist: this.$store.state.piclist,
      showClassifyEdit:true,
      classifyList: "",
      draging: "",
    };
  },
  methods: {
    // 时间倒序
    timeSort: function() {
      sortTime(this.piclist);
    },
    // 分类排序
    classifySort: function() {
      sortClassify(this.piclist);
    },
    // 分类选择
    selectClassify: function(classifyName) {
      const oldList = this.$store.state.piclist;
      const newList = new Array();
      oldList.map(item => {
        if (item.classify === classifyName) {
          newList.push(item);
        }
      });
      return (this.piclist = newList);
    },
    // 重置
    reset: function() {
      return (this.piclist = this.$store.state.piclist);
    },
    // 拖动点击
    ondragstart: function(event) {
      this.draging = event.target;
    },
    // 拖动处理
    ondragover: function(event) {
      event.preventDefault();
      var target = event.target;
      if (target.nodeName === "LI" && target !== this.draging) {
        if (_index(this.draging) < _index(target)) {
          target.parentNode.insertBefore(this.draging, target.nextSibling);
        } else {
          target.parentNode.insertBefore(this.draging, target);
        }
      } else if (
        target.parentNode.tagName === "LI" &&
        target.parentNode !== this.draging
      ) {
        if (_index(this.draging) < _index(target.parentNode)) {
          target.parentNode.parentNode.insertBefore(
            this.draging,
            target.parentNode.nextSibling
          );
        } else {
          target.parentNode.parentNode.insertBefore(
            this.draging,
            target.parentNode
          );
        }
      }
    }
  },
  computed: {
    classifyItem: function() {
      const itemlist = new Set();
      this.$store.state.piclist.map(item => {
        itemlist.add(item.classify);
      });
      return (this.classifyList = itemlist);
    }
  }
};

function sortTime(listInfo) {
  listInfo.sort(function(a, b) {
    return (
      Date.parse(b.createTime.replace(/-/g, "/")) -
      Date.parse(a.createTime.replace(/-/g, "/"))
    );
  });
}

function sortClassify(listInfo) {
  listInfo.sort(function(a, b) {
    return a.classify.localeCompare(b.classify, "zh");
  });
}
//获取元素在父元素中的index
function _index(el) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  // .previousElementSibling 表示el元素的前一个元素
  while (el && (el = el.previousElementSibling)) {
    index++;
  }
  return index;
}

// function PictureListInfo(dataList) {
//   this.name = dataList.name;
//   this.img = dataList.img;
//   this.classify = dataList.classify;
//   this.createTime = dataList.createTime;
// }

// const picItem = new PictureListInfo({
//   name: "第一个图片",
//   img: "123456",
//   classify: "第一个分类",
//   createTime: "2019-08-16"
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button_box {
  padding: 10px;
}
.classifyitem {
  margin: 0 20px;
  border: 1px solid #efefef;
  padding: 5px 10px;
  border-radius: 5px;
}
.pic_container {
  width: 800px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0 auto;
}
.pic_ul {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.pic_ul li {
  list-style: none;
  flex-basis: auto;
  width: 180px;
  margin: 9px;
  justify-content: space-around;
  border: 1px solid #ccc;
  cursor: move;
}
.pic_img {
  width: 100%;
  height: 100px;
  background: #efefef;
}
.pic_img img {
  width: 100%;
}
.pic_name {
  width: 100%;
  text-align: center;
}
.pic_classify {
  width: 100%;
  text-align: center;
  padding: 5px 10px;
}
.pic_classify input{
  width: 50%;
}
.pic_ctime {
  width: 100%;
  text-align: center;
}
</style>
