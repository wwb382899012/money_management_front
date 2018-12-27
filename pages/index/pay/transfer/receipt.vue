<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>付款调拨上传流水</span>
        </div>
        <el-form 
          ref="reviewTransfer" 
          :model="reviewTransfer" 
          :rules="rules" 
          label-width="140px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half"
            label="系统来源" 
            prop="system_flag">
            <el-input 
              v-model="reviewTransfer.system_flag" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="资金交易编号" 
              prop="transfer_num">
              <el-input 
                v-model="reviewTransfer.transfer_num" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="付款类别" 
              prop="transfer_pay_type">
              <el-input 
                v-model="reviewTransfer.transfer_pay_type" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方" 
              prop="pay_main_body">
              <el-input 
                v-model="reviewTransfer.pay_main_body" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方" 
              prop="collect_main_body">
              <el-input 
                v-model="reviewTransfer.collect_main_body" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行名称" 
              prop="pay_bank_name">
              <el-input 
                v-model="reviewTransfer.pay_bank_name" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方银行名称" 
              prop="collect_bank_name">
              <el-input 
                v-model="reviewTransfer.collect_bank_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-model="reviewTransfer.pay_bank_account_str" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-model="reviewTransfer.collect_bank_account_str" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              class="el-form-item-width-half" 
              label="实付类型" 
              prop="real_pay_type">
              <el-input 
                v-model="realPayTypeJson[reviewTransfer.real_pay_type]" 
                disabled></el-input>
            </el-form-item>
            <el-form-item
              v-if="reviewTransfer.real_pay_type == 2"
              label="付款备注"
              prop="pay_remark">
              <el-input 
                v-model="reviewTransfer.pay_remark" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-input 
                v-if="reviewTransfer.currency"
                v-model="reviewTransfer.currencyStr" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item
              label="收款行行号"
            >
              <el-input 
                v-if="reviewTransfer.collect_bank_link_code"
                v-model="reviewTransfer.collect_bank_link_code" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款金额" 
              prop="amount">
              <el-input 
                v-if="reviewTransfer.amount"
                v-model="reviewTransfer.formatAmount" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item
              label="收款行省市"
            >
              <el-input 
                v-model="reviewTransfer.collect_city_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <el-input 
              v-if="reviewTransfer.bs_background" 
              v-model="reviewTransfer.bs_background" 
              disabled></el-input>
            <el-input 
              v-else 
              value="无" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="指令发起人" 
              prop="order_create_people">
              <el-input 
                v-model="reviewTransfer.order_create_people" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="要求付款日" 
              prop="require_pay_datetime">
              <el-input 
                v-if="reviewTransfer.require_pay_datetime" 
                v-model="reviewTransfer.require_pay_datetime"
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
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
              action=""></el-upload>
            <span 
              v-else 
              class="sub-text">无</span>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="指令状态">
              <el-input 
                v-model="payTransferStatusJson[reviewTransfer.transfer_status]" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="付款状态">
              <el-input 
                v-model="payStatusJson[reviewTransfer.pay_status]" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item label="指令到达时间">
              <el-input 
                v-model="reviewTransfer.create_time" 
                disabled></el-input>
            </el-form-item>
            <el-form-item label="指令更新时间">
              <el-input 
                v-model="reviewTransfer.update_time" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
            class="el-form-item-width-half"
            label="银行流水号" 
            prop="bank_water">
            <el-input 
              v-model="reviewTransfer.bank_water" 
              placeholder="请输入银行流水号"></el-input>
          </el-form-item>
          <el-form-item 
            :class="{ 'limit-file-upload': receiptFileList >= 3 }"
            label="回单截图" 
            prop="bank_img_file_uuid">
            <el-upload 
              ref="receiptUpload" 
              :file-list="receiptFileList" 
              :before-upload="beforeReceiptUpload"
              :on-success="handleReceiptUploadSuccess" 
              :on-error="handleReceiptUploadError" 
              :on-preview="handlePictureCardPreview"
              :on-remove="handlePictureCardRemove"
              :limit="3"
              accept="jpg,jpeg,gif,png" 
              action="/api/upload" 
              list-type="picture-card">
              <div 
                id="file-paste" 
                contenteditable 
                @click.prevent.stop 
                @paste="handleFilePaste">
                <span class="sub-text">截图后此处粘贴</span>
                <span class="sub-text">最多上传三张</span>
              </div>
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
                alt="">
              <div style="text-align:center;"><el-button @click="openInNewPage(dialogImageUrl)">查看原图</el-button></div>
            </el-dialog>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewTransfer.transfer_status == '19' || reviewTransfer.need_ticket_back == '1'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveTransfer('reviewTransfer')">提交</el-button>
            <tp-historyback
              name="payTransferList"
              size="medium"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-table 
                v-if="reviewTransfer.node_list" 
                :data="reviewTransfer.node_list">
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
import { getPayTransferDetail, payTransferFlowResolve } from '@/api/pay';

export default {
  data() {
    return {
      loading: false,
      reviewTransfer: {
        uuid: '',
        system_flag: '',
        transfer_num: '',
        transfer_pay_type: '',
        pay_main_body: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        real_pay_type: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        transfer_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        review_comments: '',
        contact_annex: '',
        node_list: [],
        bank_water: '',
        bank_img_file_uuid: ''
      },
      rules: {
        bank_img_file_uuid: [
          {
            required: true,
            message: '请上传银行回单截图',
            trigger: 'change'
          }
        ]
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
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getPayTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewTransfer, res.data);

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
      this.reviewTransfer.pay_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.pay_bank_account
      );
      this.reviewTransfer.collect_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.collect_bank_account
      );

      this.reviewTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.reviewTransfer.amount,
        this.reviewTransfer.currency
      ]);

      this.reviewTransfer.currencyStr = this.mformatCurrencyStr(
        this.reviewTransfer.currency
      );

      if (this.reviewTransfer.node_list) {
        this.reviewTransfer.node_list = this.reviewTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewTransfer.node_list = [];
      }

      if (this.reviewTransfer.require_pay_datetime == '0000-00-00') {
        this.reviewTransfer.require_pay_datetime = '';
      }

      if (this.reviewTransfer.contact_annex) {
        try {
          this.reviewTransfer.contact_annex = JSON.parse(
            this.reviewTransfer.contact_annex
          );
          for (let i = 0; i < this.reviewTransfer.contact_annex.length; i++) {
            this.fileList.push({
              name: this.reviewTransfer.contact_annex[i].name,
              url: this.reviewTransfer.contact_annex[i].url
            });
          }
        } catch (e) {}
      }
    },

    // 提交回单
    resolveTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.updateReceiptUuid();
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交银行流水回单吗?')
            .then(() => {
              this.mshowLoading('正在提交银行流水回单...');

              // 获取付款调拨审核参数
              const params = {
                instance_id: this.reviewTransfer.uuid,
                main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
                info: this.reviewTransfer.review_comments,
                params: {
                  real_pay_type: this.reviewTransfer.real_pay_type,
                  bank_water: this.reviewTransfer.bank_water,
                  bank_img_file_uuid: this.reviewTransfer.bank_img_file_uuid
                }
              };

              payTransferFlowResolve(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('提交银行流水回单成功');
                  this.$router.replace({
                    name: 'payTransferList'
                  });
                })
                .catch(() => {
                  this.loading = false;
                  this.mhideLoading();
                });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          this.loading = false;
          this.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    },

    // 上传回单
    handleFilePaste(event) {
      if (event.clipboardData && event.clipboardData.items) {
        const image = this.isImage(event.clipboardData.items);
        if (image) {
          event.preventDefault();
          const file = image.getAsFile();
          const uploadFile = {
            name: file.name,
            percentage: 0,
            raw: file,
            size: file.size,
            status: 'ready'
          };

          this.$refs.receiptUpload.uploadFiles.push(uploadFile);
          this.$refs.receiptUpload.submit();
        } else {
          event.preventDefault();
          return false;
        }
      }
    },
    handleReceiptUploadSuccess(res, file, fileList) {
      this.receiptFileList = fileList;
      if (res.code == '0' && res.data && res.data.uuid) {
        this.receiptFileList[this.receiptFileList.length - 1].uuid =
          res.data.uuid;
        this.receiptFileList[this.receiptFileList.length - 1].url =
          '/api/download?uuid=' + res.data.uuid;
      } else {
        this.receiptFileList.splice(-1, 1);
        this.$message.error('服务器繁忙，请重试！');
      }

      this.updateReceiptUuid();
    },
    handleReceiptUploadError() {
      this.$message.error('服务器繁忙，请重试！');
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlePictureCardRemove(file, fileList) {
      this.receiptFileList = fileList;
    },
    updateReceiptUuid() {
      let uuids = '';
      for (let i = 0; i < this.receiptFileList.length; i++) {
        uuids += i
          ? ',' + this.receiptFileList[i].uuid
          : this.receiptFileList[i].uuid;
      }
      this.reviewTransfer.bank_img_file_uuid = uuids;
    },
    beforeReceiptUpload(file) {
      if (this.receiptFileList.length >= 3) {
        this.$message.warning('单条银行流水最多上传三张回单截图');
        return false;
      }

      this.beforeImgUpload(file);
    }
  }
};
</script>
