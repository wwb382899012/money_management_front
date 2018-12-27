<template>
  <div class="content-container form-dialog-box detail-form-box">
    <el-form 
      ref="detailRepayCashFlow" 
      :model="detailRepayCashFlow" 
      label-width="120px" 
      label-position="left" 
      size="small">
      <el-form-item 
        label="事项" 
        prop="cash_flow_type">
        <div
          class="sub-text">
          {{ cashFlowTypeJson[detailRepayCashFlow.cash_flow_type] }}
        </div>
      </el-form-item>
      <div class="form-line">
        <el-form-item 
          label="贷款方" 
          prop="repay_main_body">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.repay_main_body }}
          </div>
        </el-form-item>
        <el-form-item 
          label="借款方" 
          prop="collect_main_body">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.collect_main_body }}
          </div>
        </el-form-item>
      </div>
      <div class="form-line">
        <el-form-item 
          label="贷款方银行名称" 
          prop="repay_account_uuid">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.repay_bank_name }}
          </div>
        </el-form-item>
        <el-form-item 
          label="借款方银行名称" 
          prop="collect_account_uuid">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.collect_bank_name }}
          </div>
        </el-form-item>
      </div>
      <div class="form-line">
        <el-form-item 
          label="贷款方银行账号" 
          prop="repay_bank_account">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.repay_bank_account }}
          </div>
        </el-form-item>
        <el-form-item 
          label="借款方银行账号" 
          prop="collect_bank_account">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.collect_bank_account }}
          </div>
        </el-form-item>
      </div>
      <el-form-item 
        label="实付类型" 
        prop="real_pay_type">
        <div
          class="sub-text">
          {{ realPayTypeJson[detailRepayCashFlow.real_pay_type] }}
        </div>
      </el-form-item>
      <div class="form-line">
        <el-form-item 
          label="还款币种" 
          prop="currency">
          <div
            class="sub-text">
            人民币
          </div>
        </el-form-item>
        <el-form-item 
          label="还款金额" 
          prop="repay_amount">
          <div
            class="sub-text">
            {{ detailRepayCashFlow.repay_amount }}
          </div>
        </el-form-item>
      </div>
      <el-form-item 
        v-if="detailRepayCashFlow.bank_img_file_uuid" 
        label="银行流水号" 
        prop="bank_water">
        <div 
          class="sub-text" 
          v-text="detailRepayCashFlow.bank_water ? detailRepayCashFlow.bank_water : '无'"></div>
      </el-form-item>
      <el-form-item 
        v-if="detailRepayCashFlow.bank_img_file_uuid" 
        label="回单截图" 
        prop="bank_img_file_uuid">
        <el-upload 
          ref="receiptUpload" 
          :file-list="receiptFileList" 
          :on-preview="handlePictureCardPreview" 
          class="no-upload-text" 
          action=""
          list-type="picture-card"
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
        label="说明" 
        prop="info"
        class="last-form-line">
        <div
          class="sub-text">
          {{ detailRepayCashFlow.info }}
        </div>
      </el-form-item>
      <el-form-item 
        class="form-footer" 
        label-width="0">
        <el-button 
          :disabled="loading" 
          size="medium" 
          type="default" 
          @click="$emit('closeDialog')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    currentRepayCashFlow: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      detailRepayCashFlow: {
        forcast_repay_date: '',
        repay_date: '',
        cash_flow_type: '',
        info: '',
        currency: 'CNY',
        repay_amount: '',
        repay_type: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        repay_main_body_uuid: '',
        repay_main_body: '',
        repay_bank_name: '',
        repay_bank_account: '',
        real_pay_type: ''
      },
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created() {
    if (this.currentRepayCashFlow) {
      Object.assign(this.detailRepayCashFlow, this.currentRepayCashFlow);
      this.detailRepayCashFlow.repay_amount = this.filterCent2YuanCurrencyAmount(
        [
          this.detailRepayCashFlow.repay_amount,
          this.detailRepayCashFlow.currency
        ]
      );

      if (this.detailRepayCashFlow.bank_img_file_uuid) {
        let imgList = this.detailRepayCashFlow.bank_img_file_uuid.split(',');
        for (let i = 0; i < imgList.length; i++) {
          this.receiptFileList.push({
            name: '回单' + i,
            uuid: imgList[i],
            url: '/api/download?uuid=' + imgList[i]
          });
        }
      }
    }
  },
  methods: {
    // 预览下载文件
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
