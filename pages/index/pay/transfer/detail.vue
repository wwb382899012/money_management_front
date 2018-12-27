<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>付款调拨详情</span>
        </div>
        <el-form 
          ref="detailTransfer" 
          :model="detailTransfer" 
          label-width="120px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="系统来源" 
            prop="system_flag">
            <div 
              class="sub-text" 
              v-text="detailTransfer.system_flag" 
            ></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="资金交易编号" 
              prop="transfer_num">
              <div 
                class="sub-text" 
                v-text="detailTransfer.transfer_num" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="付款类别" 
              prop="transfer_pay_type">
              <div 
                class="sub-text" 
                v-text="detailTransfer.transfer_pay_type" 
              ></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方" 
              prop="pay_main_body">
              <div 
                class="sub-text" 
                v-text="detailTransfer.pay_main_body" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="收款方" 
              prop="collect_main_body">
              <div 
                class="sub-text" 
                v-text="detailTransfer.collect_main_body" 
              ></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行名称" 
              prop="pay_bank_name">
              <div
                v-if="detailTransfer.pay_bank_name"
                class="sub-text" 
                v-text="detailTransfer.pay_bank_name" 
              ></div>
              <span 
                v-else 
                class="sub-text">无</span>
            </el-form-item>
            <el-form-item 
              label="收款方银行名称" 
              prop="collect_bank_name">
              <div
                class="sub-text" 
                v-text="detailTransfer.collect_bank_name ? detailTransfer.collect_bank_name : '无'" 
              ></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行账号" 
              prop="pay_bank_account">
              <div
                class="sub-text" 
              >
                {{ detailTransfer.pay_bank_account ? filterBankAccount(detailTransfer.pay_bank_account) : '无' }}
              </div>
            </el-form-item>
            <el-form-item 
              label="收款方银行账号" 
              prop="collect_bank_account">
              <div
                class="sub-text" 
              >
                {{ detailTransfer.collect_bank_account ? filterBankAccount(detailTransfer.collect_bank_account) : '无' }}
              </div>
            </el-form-item>
          </div>
          <el-form-item 
            label="实付类型" 
            prop="real_pay_type">
            <div 
              class="sub-text" 
              v-text="realPayTypeJson[detailTransfer.real_pay_type]" 
            ></div>
          </el-form-item>
          <el-form-item 
            v-if="detailTransfer.real_pay_type == 2"
            label="付款备注" 
            prop="pay_remark">
            <div 
              class="sub-text" 
              v-text="detailTransfer.pay_remark" 
            ></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <div 
                class="sub-text" 
                v-text="detailTransfer.currencyStr" 
              ></div>
            </el-form-item>
            <el-form-item
              label="收款行行号">
              <div class="sub-text">{{ detailTransfer.collect_bank_link_code ? detailTransfer.collect_bank_link_code : '-' }}</div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款金额" 
              prop="amount">
              <div 
                class="sub-text" 
                v-text="detailTransfer.formatAmount"></div>
            </el-form-item>
            <el-form-item
              label="收款行省市">
              <div 
                class="sub-text" 
                v-text="detailTransfer.collect_city_name" 
              ></div>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <div 
              class="sub-text" 
              v-text="detailTransfer.bs_background ? detailTransfer.bs_background : '无'" 
            ></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="指令发起人" 
              prop="order_create_people">
              <div 
                class="sub-text" 
                v-text="detailTransfer.order_create_people" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="要求付款日" 
              prop="require_pay_datetime">
              <div
                class="sub-text"
                v-text="detailTransfer.require_pay_datetime ? detailTransfer.require_pay_datetime : '无'">
              </div>
            </el-form-item>
          </div>
          <el-form-item 
            label="附件" 
            prop="contact_annex">
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
            v-if="detailTransfer.bank_img_file_uuid" 
            label="银行流水号" 
            prop="bank_water">
            <div 
              class="sub-text" 
              v-text="detailTransfer.bank_water ? detailTransfer.bank_water : '无'" 
            ></div>
          </el-form-item>
          <el-form-item 
            v-if="detailTransfer.bank_img_file_uuid" 
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
          <div class="form-line">
            <el-form-item 
              label="指令状态">
              <div 
                class="sub-text" 
                v-text="payTransferStatusJson[detailTransfer.transfer_status]" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="付款状态">
              <div 
                class="sub-text" 
                v-text="payStatusJson[detailTransfer.pay_status]" 
              ></div>
            </el-form-item>
          </div>
          <div class="form-line last-form-line">
            <el-form-item 
              label="指令到达时间">
              <div 
                class="sub-text" 
                v-text="detailTransfer.create_time" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="指令更新时间">
              <div 
                class="sub-text" 
                v-text="detailTransfer.update_time" 
              ></div>
            </el-form-item>
          </div>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <tp-historyback 
              name="payTransferList"
              type="primary" 
              size="medium" 
              style="width: 100px;"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-table 
                v-if="detailTransfer.node_list" 
                :data="detailTransfer.node_list">
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
import { getPayTransferDetail } from '@/api/pay';

export default {
  data() {
    return {
      loading: false,
      detailTransfer: {
        uuid: '',
        system_flag: '',
        transfer_num: '',
        transfer_pay_type: '',
        pay_main_body: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        is_financing: '',
        financing_dict_key: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        special_require: '',
        bank_water: '',
        bank_img_file_uuid: '',
        transfer_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        review_comments: '',
        contact_annex: '',
        node_list: []
      },
      payTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        19: '待上传回单',
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
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'payTransferList'
      });
    } else {
      this.detailTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getPayTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.detailTransfer, res.data);

          this.formatDetailData();

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  methods: {
    formatDetailData() {
      this.detailTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.detailTransfer.amount,
        this.detailTransfer.currency
      ]);

      this.detailTransfer.currencyStr = this.mformatCurrencyStr(
        this.detailTransfer.currency
      );

      if (this.detailTransfer.node_list) {
        this.detailTransfer.node_list = this.detailTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailTransfer.node_list = [];
      }

      if (this.detailTransfer.require_pay_datetime == '0000-00-00') {
        this.detailTransfer.require_pay_datetime = '';
      }

      if (this.detailTransfer.contact_annex) {
        try {
          this.detailTransfer.contact_annex = JSON.parse(
            this.detailTransfer.contact_annex
          );
          for (let i = 0; i < this.detailTransfer.contact_annex.length; i++) {
            this.fileList.push({
              name: this.detailTransfer.contact_annex[i].name,
              url: this.detailTransfer.contact_annex[i].url
            });
          }
        } catch (e) {}
      }

      if (this.detailTransfer.bank_img_file_uuid) {
        let imgList = this.detailTransfer.bank_img_file_uuid.split(',');
        for (let i = 0; i < imgList.length; i++) {
          this.receiptFileList.push({
            name: '回单' + i,
            uuid: imgList[i],
            url: '/api/download?uuid=' + imgList[i]
          });
        }
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
