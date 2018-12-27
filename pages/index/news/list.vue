<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container message-box">
      <el-tabs v-model="tab">
        <el-tab-pane 
          :label="`未读消息(${unreadPage.count})`" 
          class="unread-box" 
          name="unread">
          <el-table 
            v-loading="unreadLoading" 
            :data="unreadList" 
            :show-header="false" 
            element-loading-text="拼命加载中" 
            element-loading-spinner="el-icon-loading" 
            element-loading-background="rgba(0, 0, 0, 0.5)">
            <el-table-column
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span 
                  class="message-content" 
                  @click="handleRead(scope.$index, scope.row)">{{ scope.row.content }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="send_datetime" 
              width="180">
            </el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button 
                  :disabled="unreadLoading" 
                  size="mini" 
                  @click="handleRead(scope.$index, scope.row)">
                  查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div
            v-if="unreadReady && unreadPage.count" 
            class="news-list-footer">
            <el-pagination  
              :current-page="unreadPage.page" 
              :page-sizes="pageSetting.size" 
              :page-size="unreadPage.limit" 
              :total="unreadPage.count" 
              :layout="pageSetting.layout" 
              background
              @size-change="handleUnreadSizeChange" 
              @current-change="handleUnreadCurrentChange">
            </el-pagination>
            <el-button
              type="success"
              size="mini"
              @click="tagReadAll">全部标记为已读</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane 
          :label="`已读消息(${readPage.count})`" 
          name="read">
          <template v-if="tab == 'read'">
            <el-table 
              v-loading="readLoading" 
              :data="readList" 
              :show-header="false" 
              element-loading-text="拼命加载中" 
              element-loading-spinner="el-icon-loading" 
              element-loading-background="rgba(0, 0, 0, 0.5)">
              <el-table-column
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <span 
                    class="message-content" 
                    @click="handleDetailRead(scope.$index, scope.row)">{{ scope.row.content }}</span>
                </template>
              </el-table-column>
              <el-table-column 
                prop="send_datetime" 
                width="180"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button 
                    :disabled="readLoading" 
                    size="mini" 
                    @click="handleDetailRead(scope.$index, scope.row)">
                    查看</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div
              v-if="readReady && readPage.count">
              <el-pagination  
                :current-page="readPage.page" 
                :page-sizes="pageSetting.size" 
                :page-size="readPage.limit" 
                :total="readPage.count" 
                :layout="pageSetting.layout" 
                background
                @size-change="handleReadSizeChange" 
                @current-change="handleReadCurrentChange">
              </el-pagination>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getUnreadNewsList, getReadNewsList, setReadNews } from '@/api/news';
import newsTypeListJson from '@/api/newsTypelist';

export default {
  data() {
    return {
      tab: 'unread',
      unreadReady: false,
      unreadLoading: false,
      unreadList: [],
      unreadPage: {
        page: 1,
        limit: 10,
        count: 0
      },
      readReady: false,
      readLoading: false,
      readList: [],
      readPage: {
        page: 1,
        limit: 10,
        count: 0
      }
    };
  },
  created() {
    this.getUnreadList();
    this.getReadList();
  },
  methods: {
    getUnreadList() {
      this.unreadLoading = true;
      const params = {
        page: this.unreadPage.page,
        limit: this.unreadPage.limit
      };
      getUnreadNewsList(params)
        .then(res => {
          const data = res.data;
          this.unreadPage.count = parseInt(data.count);
          this.$store.dispatch('SetUnreadNewsAmount', parseInt(data.count));
          this.unreadList = data.data;
          this.unreadReady = true;
          this.unreadLoading = false;
        })
        .catch(() => {
          this.unreadLoading = false;
        });
    },
    getReadList() {
      this.readLoading = true;
      const params = {
        page: this.readPage.page,
        limit: this.readPage.limit
      };
      getReadNewsList(params)
        .then(res => {
          const data = res.data;
          this.readPage.count = parseInt(data.count);
          this.readList = data.data;
          this.readReady = true;
          this.readLoading = false;
        })
        .catch(() => {
          this.readLoading = false;
        });
    },
    handleUnreadSizeChange(val) {
      this.unreadPage.limit = parseInt(val);
      this.getUnreadList();
    },
    handleUnreadCurrentChange(val) {
      this.unreadPage.page = parseInt(val);
      this.getUnreadList();
    },
    handleReadSizeChange(val) {
      this.readPage.limit = parseInt(val);
      this.getReadList();
    },
    handleReadCurrentChange(val) {
      this.readPage.page = parseInt(val);
      this.getReadList();
    },
    handleRead(index, news) {
      let uuids = [];
      uuids.push(this.unreadList[index].uuid);
      this.mshowLoading('正在获取消息...');
      setReadNews({
        news_uuids: uuids
      })
        .then(() => {
          this.$store.dispatch('SetUnreadNewsAmount', --this.unreadPage.count);
          const item = this.unreadList.splice(index, 1);
          this.readList = item.concat(this.readList);
          if (this.readList.length > this.readPage.limit) {
            this.readList.pop();
          }
          ++this.readPage.count;

          if (
            newsTypeListJson[news.business_type] &&
            newsTypeListJson[news.business_type][news.business_son_type]
          ) {
            this.$router.push({
              name:
                newsTypeListJson[news.business_type][news.business_son_type],
              params: {
                uuid: news.business_uuid
              }
            });
          } else {
            this.$message.warning('查看失败，请联系管理员添加对应的模块链接');
          }

          this.mhideLoading();
        })
        .catch(() => {
          this.mhideLoading();
        });
    },
    handleDetailRead(index, news) {
      if (
        newsTypeListJson[news.business_type] &&
        newsTypeListJson[news.business_type][news.business_son_type]
      ) {
        this.$router.push({
          name: newsTypeListJson[news.business_type][news.business_son_type],
          params: {
            uuid: news.business_uuid
          }
        });
      } else {
        this.$message.warning('查看失败，请联系管理员添加对应的模块链接');
      }
    },
    tagReadAll() {
      if (this.unreadLoading || this.readLoading) return false;

      this.unreadLoading = true;
      this.readLoading = true;
      let uuids = [];
      for (let i = 0; i < this.unreadList.length; i++) {
        uuids.push(this.unreadList[i].uuid);
      }

      this.mconfirm(
        '确定将当前未读消息列表里面展示的' +
          this.unreadList.length +
          '条未读消息标记为已读吗？'
      )
        .then(() => {
          this.mshowLoading('正在标记已读消息...');
          setReadNews({
            news_uuids: uuids
          })
            .then(() => {
              this.unreadLoading = false;
              this.readLoading = false;

              this.getUnreadList();
              this.getReadList();

              this.mhideLoading();
              this.$message.success('标记已读消息成功');
            })
            .catch(() => {
              this.unreadLoading = false;
              this.readLoading = false;
              this.mhideLoading();
            });
        })
        .catch(() => {
          this.unreadLoading = false;
          this.readLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-table {
  width: 100%;
  margin-bottom: 30px;
}
.message-content {
  cursor: pointer;
}

.unread-box .message-content {
  color: #333;
  font-weight: bold;
}

.news-list-footer {
  display: flex;
  justify-content: space-between;
}
</style>
