<template>
  <div class="content-container form-dialog-box detail-form-box">
    <el-form 
      ref="detailCashFlow" 
      :model="detailCashFlow" 
      label-width="100px" 
      label-position="left" 
      size="small">
      <div class="form-line">
        <el-form-item 
          label="赎回日期" 
          prop="repay_date">
          <div 
            class="sub-text" 
            v-text="detailCashFlow.repay_date" 
          ></div>
        </el-form-item>
        <el-form-item 
          label="事项" 
          prop="cash_flow_type">
          <div 
            class="sub-text" 
          >本金回款</div>
        </el-form-item>
      </div>
      <div class="form-line">
        <el-form-item 
          label="金额" 
          prop="amount">
          <div 
            class="sub-text"
          >{{ [detailCashFlow.amount, currency] | filterCent2YuanCurrencyAmount }}</div>
        </el-form-item>
        <el-form-item 
          label="实际金额" 
          prop="real_amount">
          <div 
            class="sub-text"
          >{{ [detailCashFlow.real_amount, currency] | filterCent2YuanCurrencyAmount }}</div>
        </el-form-item>
      </div>
      <el-form-item 
        label="说明" 
        prop="info">
        <div 
          class="sub-text"
        >{{ detailCashFlow.info ? detailCashFlow.info : '-' }}</div>
      </el-form-item>
      <el-form-item 
        :class="detailCashFlow.bank_img_file_uuid ? '' : 'last-form-line'" 
        label="银行流水号"
        prop="bank_water">
        <div 
          class="sub-text"
        >{{ detailCashFlow.bank_water ? detailCashFlow.bank_water : '-' }}</div>
      </el-form-item>
      <el-form-item 
        v-if="detailCashFlow.bank_img_file_uuid" 
        class="last-form-line"
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
    currentIndex: {
      type: Number,
      default: 0
    },
    currentRedemption: {
      type: Object,
      default: null
    },
    currency: {
      type: String,
      default: 'CNY'
    }
  },
  data() {
    return {
      loading: false,
      index: '',
      detailCashFlow: {
        uuid: '',
        repay_date: '',
        cash_flow_type: '',
        amount: '',
        real_amount: '',
        change_amount: 0,
        info: '',
        bank_water: '',
        bank_img_file_uuid: ''
      },
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created() {
    Object.assign(this.detailCashFlow, this.currentRedemption);

    if (this.detailCashFlow.bank_img_file_uuid) {
      let imgList = this.detailCashFlow.bank_img_file_uuid.split(
        ','
      );
      for (let i = 0; i < imgList.length; i++) {
        this.receiptFileList.push({
          name: '回单' + i,
          uuid: imgList[i],
          url: '/api/download?uuid=' + imgList[i]
        });
      }
    }
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>