<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>内部调拨详情</span>
        </div>
        <el-form 
          ref="detailInnerTransfer" 
          :model="detailInnerTransfer" 
          label-width="140px" 
          label-position="left"
          size="small">
          <el-form-item 
            label="调拨主体" 
            prop="main_body_uuid">
            <div 
              class="sub-text" 
              v-text="detailInnerTransfer.main_body_name" 
            ></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="付款银行名称" 
              prop="pay_bank_name">
              <div 
                class="sub-text" 
                v-text="detailInnerTransfer.pay_bank_name" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="收款银行名称" 
              prop="collect_bank_name">
              <div 
                class="sub-text" 
                v-text="detailInnerTransfer.collect_bank_name" 
              ></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款银行账号" 
              prop="pay_bank_account">
              <div 
                class="sub-text" 
              >
                {{ detailInnerTransfer.pay_bank_account | filterBankAccount }}
              </div>
            </el-form-item>
            <el-form-item 
              label="收款银行账号" 
              prop="collect_bank_account">
              <div 
                class="sub-text" 
              >
                {{ detailInnerTransfer.collect_bank_account | filterBankAccount }}
              </div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <div class="sub-text">
                人民币
              </div>
            </el-form-item>
            <el-form-item 
              label="金额" 
              prop="amount">
              <div 
                placeholder="请输入金额" 
                class="sub-text" 
              >
                {{ [detailInnerTransfer.amount, detailInnerTransfer.currency] | filterCent2YuanCurrencyAmount }}
              </div>
            </el-form-item>
          </div>
          <el-form-item 
            v-if="detailInnerTransfer.real_deal_date"
            label="实付类型" 
            prop="real_pay_type">
            <div 
              class="sub-text" 
              v-text="realPayTypeJson[detailInnerTransfer.real_pay_type]" 
            ></div>
          </el-form-item>
          <div 
            v-else
            class="form-line">
            <el-form-item 
              label="实付类型" 
              prop="real_pay_type">
              <div 
                class="sub-text" 
                v-text="realPayTypeJson[detailInnerTransfer.real_pay_type]" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="要求调拨日期" 
              prop="hope_deal_date">
              <div
                class="sub-text" 
                v-text="detailInnerTransfer.hope_deal_date"></div>
            </el-form-item>
          </div>
          <el-form-item
            v-if="detailInnerTransfer.real_pay_type == 2"
            label="付款备注"
            prop="pay_remark">
            <div
              class="sub-text" 
              v-text="detailInnerTransfer.pay_remark"></div>
          </el-form-item>
          <div
            v-if="detailInnerTransfer.real_deal_date"
            class="form-line">
            <el-form-item 
              label="要求调拨日期" 
              prop="hope_deal_date">
              <div
                class="sub-text" 
                v-text="detailInnerTransfer.hope_deal_date"></div>
            </el-form-item>
            <el-form-item 
              label="实际调拨日期" 
              prop="real_deal_date">
              <div
                class="sub-text" 
                v-text="detailInnerTransfer.real_deal_date"></div>
            </el-form-item>
          </div>
          <el-form-item 
            label="附件" 
            prop="annex_uuids">
            <el-upload 
              v-if="fileList.length" 
              ref="upload" 
              :file-list="fileList" 
              :auto-upload="false" 
              :on-preview="handleFilePreview" 
              class="no-upload-text"
              action=""
              disabled></el-upload>
            <div 
              v-else 
              class="sub-text">无</div>
          </el-form-item>
          <el-form-item 
            v-if="detailInnerTransfer.bank_img_file_uuid" 
            label="银行流水号" 
            prop="bank_water">
            <div 
              class="sub-text" 
              v-text="detailInnerTransfer.bank_water ? detailInnerTransfer.bank_water : '无'" 
            ></div>
          </el-form-item>
          <el-form-item 
            v-if="detailInnerTransfer.bank_img_file_uuid" 
            label="回单截图" 
            prop="bank_img_file_uuid">
            <el-upload 
              ref="receiptUpload" 
              :file-list="receiptFileList" 
              :on-preview="handlePictureCardPreview" 
              class="no-upload-text" 
              list-type="picture-card"
              action=""
              disabled>
            </el-upload>
            <el-dialog 
              v-if="dialogVisible"
              :append-to-body="true"
              :key="timestamp"
              :visible.sync="dialogVisible"
              class="preview-dialog"
              @close="timestamp = Date.now()">
              <img 
                :src="dialogImageUrl" 
                width="100%" 
                alt="回单截图">
              <div style="text-align:center;"><el-button @click="openInNewPage(dialogImageUrl)">查看原图</el-button></div>
            </el-dialog>
          </el-form-item>
          <el-form-item 
            label="调拨说明" 
            prop="special_require">
            <div 
              class="sub-text" 
              v-text="detailInnerTransfer.special_require ? detailInnerTransfer.special_require : '无'" 
            ></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item label="指令状态">
              <div class="sub-text">
                {{ innerTransferStatusJson[detailInnerTransfer.transfer_status] }}
              </div>
            </el-form-item>
            <el-form-item label="调拨状态">
              <div 
                class="sub-text" 
                v-text="payStatusJson[detailInnerTransfer.pay_status]" 
              ></div>
            </el-form-item>
          </div>
          <div 
            class="form-line last-form-line">
            <el-form-item 
              label="指令到达时间">
              <div 
                class="sub-text" 
                v-text="detailInnerTransfer.create_time" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="指令更新时间">
              <div 
                class="sub-text" 
                v-text="detailInnerTransfer.update_time" 
              ></div>
            </el-form-item>
          </div>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <tp-historyback
              name="innerTransferList"
              type="primary"
              size="medium"
              style="width:100px"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-table 
                v-if="detailInnerTransfer.node_list" 
                :data="detailInnerTransfer.node_list">
                <el-table-column 
                  label="操作人" 
                  prop="optor_name">
                </el-table-column>
                <el-table-column 
                  label="操作类型" 
                  prop="node_desc">
                </el-table-column>
                <el-table-column 
                  label="操作时间" 
                  prop="update_time">
                </el-table-column>
                <el-table-column label="处理意见">
                  <template slot-scope="scope">
                    {{ nodeStatusJson[scope.row.node_status] + (scope.row.deal_remark ? scope.row.deal_remark : '无') }}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getInnerTransferDetail } from '@/api/innerTransfer';

export default {
  data() {
    return {
      loading: false,
      detailInnerTransfer: {
        uuid: '',
        main_body_uuid: '',
        pay_account_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        currency: 'CNY',
        amount: '',
        hope_deal_date: '',
        bank_water: '',
        bank_img_file_uuid: '',
        real_pay_type: '',
        annex_uuids: '',
        special_require: '',
        transfer_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        node_list: []
      },
      innerTransferStatusJson: {
        0: '已保存',
        2: '待权签人审核',
        3: '权签人审核通过',
        5: '权签人驳回',
        20: '已完结'
      },
      fileList: [],
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('缺少内部调拨ID，请输入正确的链接');
      this.$router.replace({
        name: 'innerTransferList'
      });
    } else {
      this.detailInnerTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getInnerTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.detailInnerTransfer, res.data);

          this.formatDetailData();

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  methods: {
    // 格式化详情数据
    formatDetailData() {
      // 格式化操作日志，去除当前审核节点
      if (this.detailInnerTransfer.node_list) {
        this.detailInnerTransfer.node_list = this.detailInnerTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailInnerTransfer.node_list = [];
      }

      // 格式化附件参数
      if (this.detailInnerTransfer.annex) {
        for (let i = 0; i < this.detailInnerTransfer.annex.length; i++) {
          if (this.detailInnerTransfer.annex[i]) {
            this.fileList.push({
              name: this.detailInnerTransfer.annex[i].origin_name,
              uuid: this.detailInnerTransfer.annex[i].uuid,
              url:
                '/api/download?uuid=' + this.detailInnerTransfer.annex[i].uuid
            });
          }
        }
      }

      // 格式化银行回单图片参数
      if (this.detailInnerTransfer.bank_img_file_uuid) {
        let imgList = this.detailInnerTransfer.bank_img_file_uuid.split(',');
        for (let i = 0; i < imgList.length; i++) {
          this.receiptFileList.push({
            name: '回单' + i,
            uuid: imgList[i],
            url: '/api/download?uuid=' + imgList[i]
          });
        }
      }
    },
    // 预览银行回单
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
