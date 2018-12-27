<template>
  <div class="content-container form-dialog-box">
    <el-form 
      ref="updateRedemption" 
      :model="updateRedemption" 
      :rules="rules" 
      label-width="100px" 
      label-position="left" 
      size="small">
      <div class="form-line">
        <el-form-item 
          label="赎回日期" 
          prop="repay_date">
          <el-date-picker 
            v-model="updateRedemption.repay_date" 
            align="right" 
            type="date" 
            placeholder="选择日期" 
            value-format="yyyy-MM-dd"
            disabled>
          </el-date-picker>
        </el-form-item>
        <el-form-item 
          label="事项" 
          prop="cash_flow_type">
          <el-select 
            v-model="updateRedemption.cash_flow_type" 
            placeholder="选择事项"
            filterable
            disabled>
            <el-option 
              :value="2" 
              label="本金回款"></el-option>
            <el-option 
              :value="3" 
              label="利息回款"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form-line">
        <el-form-item 
          label="金额" 
          prop="amount">
          <el-input 
            v-model="updateRedemption.amount" 
            type="number" 
            placeholder="请输入金额"
            disabled>
            <template slot-scope="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item 
          label="实际金额" 
          prop="real_amount">
          <el-input 
            :disabled="updateRedemption.cash_flow_type == 2"
            v-model="updateRedemption.real_amount" 
            type="number" 
            placeholder="请输入实际">
            <template slot-scope="append">元</template>
          </el-input>
        </el-form-item>
      </div>
      <el-form-item 
        label="说明" 
        prop="info">
        <el-input 
          v-model="updateRedemption.info" 
          type="textarea" 
          placeholder="请输入说明"></el-input>
      </el-form-item>
      <el-form-item 
        v-if="updateRedemption.cash_flow_type == 2"
        label="银行流水号" 
        prop="bank_water">
        <el-input 
          v-model="updateRedemption.bank_water" 
          placeholder="请输入银行流水号"></el-input>
      </el-form-item>
      <el-form-item 
        v-if="updateRedemption.cash_flow_type == 2"
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
          :disabled="loading" 
          size="medium" 
          type="primary" 
          @click="submitForm('updateRedemption')">保存</el-button>
        <el-button 
          :disabled="loading" 
          size="medium" 
          type="default" 
          @click="$emit('closeDialog')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { validate2Decimal } from '@/utils/validate';

export default {
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    currentRedemption: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkMoney = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位小数的正数值'));
      }

      if (value) {
        let len = (value + '').length;
        let valArr = (value + '').split('.');
        if (valArr[1]) {
          if (valArr[1] == '00') {
            len = len - 3;
          }

          if (valArr[1] == '0') {
            len = len - 2;
          }

          if (/^[1-9]0$/.test(valArr[1])) {
            len = len - 1;
          }
        } else {
          if ((value + '').indexOf('.') > -1) {
            len = len - 1;
          }
        }

        if (len > 10) return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };

    return {
      loading: false,
      index: '',
      updateRedemption: {
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
      rules: {
        real_amount: [
          {
            required: true,
            message: '请输入金额',
            trigger: 'blur'
          },
          {
            validator: checkMoney,
            trigger: 'blur'
          }
        ],
        bank_img_file_uuid: [
          {
            required: true,
            message: '请上传银行回单截图',
            trigger: 'change'
          }
        ]
      },
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created() {
    Object.assign(this.updateRedemption, this.currentRedemption);
    this.updateRedemption.amount = (
      Number(this.updateRedemption.amount) / 100
    ).toFixed(2);
    this.updateRedemption.real_amount = (
      Number(this.updateRedemption.real_amount) / 100
    ).toFixed(2);

    this.updateRedemption.cash_flow_type = Number(this.updateRedemption.cash_flow_type);

    if (this.updateRedemption.bank_img_file_uuid) {
      let imgList = this.updateRedemption.bank_img_file_uuid.split(
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
    // 保存更新
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      let bank_img_file_uuid = '';
      for (let i = 0; i < this.receiptFileList.length; i++) {
        bank_img_file_uuid += !i
          ? this.receiptFileList[i].uuid
          : ',' + this.receiptFileList[i].uuid;
      }
      this.updateRedemption.bank_img_file_uuid = bank_img_file_uuid;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let cashFlow = Object.assign({},this.currentRedemption);

          if (cashFlow.cash_flow_type == 2) {
            cashFlow.bank_water = this.updateRedemption.bank_water;
            cashFlow.bank_img_file_uuid = this.updateRedemption.bank_img_file_uuid;
            cashFlow.info = this.updateRedemption.info;
            cashFlow.is_delete = '1';
            cashFlow.audit = '2';
          } else if (cashFlow.cash_flow_type == 3) {
            cashFlow.real_amount = this.filterYuan2CentAmount(this.updateRedemption.real_amount);
            cashFlow.change_amount = this.filterYuan2CentAmount(this.updateRedemption.real_amount) - this.filterYuan2CentAmount(this.updateRedemption.amount);
            cashFlow.info = this.updateRedemption.info;
            cashFlow.is_delete = '1';
            cashFlow.audit = '2';
          } 

          this.$emit('expireFlowReceiptSuccess', this.currentIndex, cashFlow);
          this.loading = false;
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
      this.updateRedemption.bank_img_file_uuid = uuids;
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
