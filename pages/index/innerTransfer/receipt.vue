<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-form 
        ref="reviewInnerTransfer" 
        :model="reviewInnerTransfer" 
        :rules="rules" 
        label-width="140px" 
        label-position="left"
        size="small">
        <el-form-item 
          class="el-form-item-width-half" 
          label="调拨主体" 
          prop="main_body_uuid">
          <el-input 
            v-model="reviewInnerTransfer.main_body_name" 
            disabled></el-input>
        </el-form-item>
        <div class="form-line">
          <el-form-item 
            label="付款银行名称" 
            prop="pay_bank_name">
            <el-input 
              v-model="reviewInnerTransfer.pay_bank_name" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="收款银行名称" 
            prop="collect_bank_name">
            <el-input 
              v-model="reviewInnerTransfer.collect_bank_name" 
              disabled></el-input>
          </el-form-item>
        </div>
        <div class="form-line">
          <el-form-item 
            label="付款银行账号" 
            prop="pay_bank_account">
            <el-input 
              v-model="reviewInnerTransfer.pay_bank_account_str" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="收款银行账号" 
            prop="collect_bank_account">
            <el-input 
              v-model="reviewInnerTransfer.collect_bank_account_str" 
              disabled></el-input>
          </el-form-item>
        </div>
        <div class="form-line">
          <el-form-item 
            label="币种" 
            prop="currency">
            <el-input 
              v-model="reviewInnerTransfer.currencyStr" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="金额" 
            prop="amount">
            <el-input 
              v-model="reviewInnerTransfer.formatAmount" 
              placeholder="请输入金额" 
              disabled>
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
        </div>
        <div class="form-line">
          <el-form-item 
            label="实付类型" 
            prop="real_pay_type">
            <el-input
              v-model="realPayTypeJson[reviewInnerTransfer.real_pay_type]" 
              disabled>
            </el-input>
          </el-form-item>
        </div>
        <el-form-item
          v-if="reviewInnerTransfer.real_pay_type == 2"
          label="付款备注"
          prop="pay_remark">
          <el-input 
            v-model="reviewInnerTransfer.pay_remark" 
            disabled></el-input>
        </el-form-item>
        <div class="form-line">
          <el-form-item 
            label="要求调拨日期" 
            prop="hope_deal_date">
            <el-input
              v-model="reviewInnerTransfer.hope_deal_date"
              disabled>
            </el-input>
          </el-form-item>
          <el-form-item 
            label="实际调拨日期" 
            prop="real_deal_date">
            <el-input
              v-model="reviewInnerTransfer.real_deal_date"
              disabled>
            </el-input>
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
            action=""></el-upload>
          <el-input 
            v-else 
            value="无" 
            disabled></el-input>
        </el-form-item>
        <div class="form-line">
          <el-form-item label="指令状态">
            <el-input 
              v-model="innerTransferStatusJson[reviewInnerTransfer.transfer_status]" 
              disabled></el-input>
          </el-form-item>
          <el-form-item label="调拨状态">
            <el-input 
              v-model="payStatusJson[reviewInnerTransfer.pay_status]" 
              disabled></el-input>
          </el-form-item>
        </div>
        <div class="form-line">
          <el-form-item label="指令到达时间">
            <el-input 
              v-model="reviewInnerTransfer.create_time" 
              disabled></el-input>
          </el-form-item>
          <el-form-item label="指令更新时间">
            <el-input 
              v-model="reviewInnerTransfer.update_time" 
              disabled></el-input>
          </el-form-item>
        </div>
        <el-form-item 
          label="调拨说明" 
          prop="special_require">
          <el-input 
            v-if="reviewInnerTransfer.special_require" 
            v-model="reviewInnerTransfer.special_require" 
            type="textarea" 
            placeholder="请输入其他说明"
            disabled></el-input>
          <el-input 
            v-else 
            value="无" 
            disabled></el-input>
        </el-form-item>
        <el-form-item 
          class="el-form-item-width-half"
          label="银行流水号" 
          prop="bank_water">
          <el-input 
            v-model="reviewInnerTransfer.bank_water" 
            placeholder="请输入银行流水号"></el-input>
        </el-form-item>
        <el-form-item 
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
            v-if="reviewInnerTransfer.transfer_status == '20' && reviewInnerTransfer.need_ticket_back == '1'"
            :disabled="loading" 
            size="medium" 
            type="success" 
            @click="resolveInnerTransfer('reviewInnerTransfer')">提交</el-button>
          <tp-historyback 
            name="innerTransferList"
            size="medium"></tp-historyback>
        </el-form-item>

        <el-card class="box-card">
          <div slot="header">
            <span>操作日志</span>
          </div>
          <div>
            <el-table 
              v-if="reviewInnerTransfer.node_list" 
              :data="reviewInnerTransfer.node_list">
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
    </div>
  </div>
</template>
<script>
import {
  getInnerTransferDetail,
  innerTransferFlowResolve
} from '@/api/innerTransfer';

export default {
  data() {
    return {
      loading: false,
      reviewInnerTransfer: {
        uuid: '',
        main_body_uuid: '',
        pay_account_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        currency: 'CNY',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        hope_deal_date: '',
        real_pay_type: '',
        annex_uuids: '',
        special_require: '',
        node_list: [],
        bank_water: '',
        bank_img_file_uuid: '',
        review_comments: ''
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
      this.reviewInnerTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getInnerTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewInnerTransfer, res.data);

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
      // 格式化银行账号
      this.reviewInnerTransfer.pay_bank_account_str = this.filterBankAccount(
        this.reviewInnerTransfer.pay_bank_account
      );
      this.reviewInnerTransfer.collect_bank_account_str = this.filterBankAccount(
        this.reviewInnerTransfer.collect_bank_account
      );

      // 格式化金钱
      this.reviewInnerTransfer.formatAmount = this.filterCent2YuanNoCurrencyAmount(
        this.reviewInnerTransfer.amount
      );

      // 币种格式化
      this.reviewInnerTransfer.currencyStr = this.mformatCurrencyStr(
        this.reviewInnerTransfer.currency
      );

      // 格式化操作日志，去除当前审核节点
      if (this.reviewInnerTransfer.node_list) {
        this.reviewInnerTransfer.node_list = this.reviewInnerTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewInnerTransfer.node_list = [];
      }

      // 格式化附件参数
      if (this.reviewInnerTransfer.annex) {
        for (let i = 0; i < this.reviewInnerTransfer.annex.length; i++) {
          if (this.reviewInnerTransfer.annex[i]) {
            this.fileList.push({
              name: this.reviewInnerTransfer.annex[i].origin_name,
              uuid: this.reviewInnerTransfer.annex[i].uuid,
              url:
                '/api/download?uuid=' + this.reviewInnerTransfer.annex[i].uuid
            });
          }
        }
      }
    },

    // 提交银行流水
    resolveInnerTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.updateReceiptUuid();
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交内部调拨银行流水回单吗?')
            .then(() => {
              this.mshowLoading('正在提交内部调拨银行流水回单...');

              innerTransferFlowResolve({
                instance_id: this.reviewInnerTransfer.uuid,
                info: this.reviewInnerTransfer.review_comments,
                params: {
                  real_pay_type: this.reviewInnerTransfer.real_pay_type,
                  bank_water: this.reviewInnerTransfer.bank_water,
                  bank_img_file_uuid: this.reviewInnerTransfer
                    .bank_img_file_uuid
                }
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('内部调拨银行流水回单提交成功');
                  this.$router.replace({
                    name: 'innerTransferList'
                  });
                })
                .catch(() => {
                  this.mhideLoading();
                  this.loading = false;
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
      this.reviewInnerTransfer.bank_img_file_uuid = uuids;
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
