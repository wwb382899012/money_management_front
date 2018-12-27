<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>内部调拨审核</span>
        </div>
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
            <el-form-item 
              label="要求调拨日期" 
              prop="hope_deal_date">
              <el-input
                v-model="reviewInnerTransfer.hope_deal_date"
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
          <el-form-item 
            v-if="reviewInnerTransfer.real_pay_type == 2" 
            class="el-form-item-width-half" 
            label="加密狗密码" 
            prop="jmgPassWord">
            <el-input 
              v-model="reviewInnerTransfer.jmgPassWord" 
              type="password" 
              placeholder="请输入加密狗密码"></el-input>
          </el-form-item>
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
            <div 
              v-else 
              class="sub-text">无</div>
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
            label="处理意见" 
            prop="review_comments">
            <el-input 
              v-model="reviewInnerTransfer.review_comments" 
              placeholder="请输入处理意见" 
              type="textarea"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewInnerTransfer.transfer_status == '2' || (reviewInnerTransfer.transfer_status == '3' && reviewInnerTransfer.real_pay_type == '2' && reviewInnerTransfer.pay_status == '3')"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveInnerTransfer('reviewInnerTransfer')">{{ reviewInnerTransfer.transfer_status == '3' && reviewInnerTransfer.real_pay_type == '2' && reviewInnerTransfer.pay_status == '3' ? "重试" : "通过" }}</el-button>
            <el-button 
              v-if="reviewInnerTransfer.transfer_status == '2' || (reviewInnerTransfer.transfer_status == '3' && reviewInnerTransfer.real_pay_type == '2' && reviewInnerTransfer.pay_status == '3')"
              :disabled="loading" 
              size="medium" 
              type="danger" 
              @click="rejectInnerTransfer('reviewInnerTransfer')">驳回</el-button>
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
      </el-card>
    </div>
  </div>
</template>
<script>
import {
  getInnerTransferDetail,
  innerTransferFlowResolve,
  innerTransferFlowReject,
  innerTransferRetry
} from '@/api/innerTransfer';

import '@/utils/Syunew6';
import getUkeyPwd from '@/api/ukey';

export default {
  data() {
    const checkComments = (rule, value, callback) => {
      if (this.isReject) {
        if (value == '') {
          return callback(new Error('请填写驳回原因'));
        }
        if (value.length > 100) {
          return callback(new Error('驳回原因长度不能超过100个字符'));
        }
      }

      if (this.isStop) {
        if (value == '') {
          return callback(new Error('请填写拒绝原因'));
        }
        if (value.length > 100) {
          return callback(new Error('驳回原因长度不能超过100个字符'));
        }
      }

      if (value.length > 100) {
        return callback(new Error('审核意见长度不能超过100个字符'));
      }

      callback();
    };
    return {
      isUkeyConnected: false,
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
        jmgPassWord: '',
        annex_uuids: '',
        special_require: '',
        node_list: [],
        review_comments: ''
      },
      rules: {
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ],
        jmgPassWord: [
          {
            required: true,
            message: '请输入加密狗密码',
            trigger: 'blur'
          }
        ]
      },
      innerTransferStatusJson: {
        0: '已保存',
        1: '待资金部负责人审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        5: '权签人驳回',
        20: '已完结'
      },
      password1: '',
      password2: '',
      fileList: []
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

          if (this.reviewInnerTransfer.real_pay_type == 2) {
            this.initUkey();
          }

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

    // 内部调拨审核或重新打款
    resolveInnerTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm(
            this.reviewInnerTransfer.real_pay_type == '2' &&
            this.reviewInnerTransfer.pay_status == '3'
              ? '确定要重新发起内部调拨付款吗?'
              : '确定要通过内部调拨审核吗?'
          )
            .then(() => {
              this.mshowLoading(
                this.reviewInnerTransfer.real_pay_type == '2' &&
                this.reviewInnerTransfer.pay_status == '3'
                  ? '正在重新发起内部调拨付款...'
                  : '正在提交内部调拨审核...'
              );

              if (this.reviewInnerTransfer.real_pay_type == 2) {
                if (!this.$store.getters.username) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning(
                    this.reviewInnerTransfer.real_pay_type == '2' &&
                    this.reviewInnerTransfer.pay_status == '3'
                      ? '重新发起付款失败!'
                      : '内部调拨审核失败！'
                  );

                  return;
                }

                getUkeyPwd({
                  user_account: this.$store.getters.username
                })
                  .then(res => {
                    if (
                      JSON.stringify(res.data) == '[]' ||
                      !res.data.readPwd_1 ||
                      !res.data.readPwd_2
                    ) {
                      this.$message.warning(
                        '用户未申请加密狗，请申请或更换用户后重试'
                      );
                      this.mhideLoading();
                      this.loading = false;
                      return;
                    }

                    const ukPwd1 = res.data.readPwd_1;
                    const ukPwd2 = res.data.readPwd_2;

                    this.readCheckPwd(ukPwd1, ukPwd2);
                  })
                  .catch(() => {
                    this.mhideLoading();
                    this.loading = false;
                  });
              } else {
                // 获取付款调拨审核参数
                const params = {
                  instance_id: this.reviewInnerTransfer.uuid,
                  main_body_uuid: this.reviewInnerTransfer.pay_main_body_uuid,
                  info: this.reviewInnerTransfer.review_comments,
                  params: {
                    real_pay_type: this.reviewInnerTransfer.real_pay_type
                  }
                };

                innerTransferFlowResolve(params)
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('内部调拨审核成功');
                    this.$router.replace({
                      name: 'innerTransferList'
                    });
                  })
                  .catch(() => {
                    this.loading = false;
                    this.mhideLoading();
                  });
              }
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
    // 银企打款
    resolveYQTransfer() {
      const params = {
        instance_id: this.reviewInnerTransfer.uuid,
        main_body_uuid: this.reviewInnerTransfer.main_body_uuid,
        info: this.reviewInnerTransfer.review_comments,
        params: {
          real_pay_type: this.reviewInnerTransfer.real_pay_type,
          jmgUserName: this.$store.getters.username,
          jmgPassWord: this.reviewInnerTransfer.jmgPassWord
        }
      };

      innerTransferFlowResolve(params)
        .then(() => {
          this.loading = false;
          this.mhideLoading();
          if (
            this.reviewInnerTransfer.real_pay_type == '2' &&
            this.reviewInnerTransfer.pay_status == '3'
          ) {
            this.$message.success('重新发起内部调拨付款成功');
          } else {
            this.$message.success('内部调拨审核成功');
          }
          this.$router.replace({
            name: 'innerTransferList'
          });
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },
    // 银企重新打款
    retryYQTransfer() {
      const params = {
        uuid: this.reviewInnerTransfer.uuid,
        ukPwd: this.reviewInnerTransfer.jmgPassWord
      };

      innerTransferRetry(params)
        .then(() => {
          this.loading = false;
          this.mhideLoading();
          this.$message.success('重新发起内部调拨付款成功');
          this.$router.replace({
            name: 'innerTransferList'
          });
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },

    // 驳回内部调拨
    rejectInnerTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewInnerTransfer.review_comments &&
        this.reviewInnerTransfer.review_comments.length <= 100
      ) {
        this.isReject = false;
        this.mconfirm('确定要驳回内部调拨审核吗?')
          .then(() => {
            this.mshowLoading('正在驳回内部调拨审核...');

            innerTransferFlowReject({
              instance_id: this.reviewInnerTransfer.uuid,
              info: this.reviewInnerTransfer.review_comments,
              main_body_uuid: this.reviewInnerTransfer.main_body_uuid,
              params: {
                real_pay_type: this.reviewInnerTransfer.real_pay_type
              }
            })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('内部调拨审核驳回成功');
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
        this.isReject = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    },

    // 银企操作
    initUkey() {
      //如果是IE10及以下浏览器，则跳过不处理，
      if (
        navigator.userAgent.indexOf('MSIE') > 0 &&
        !navigator.userAgent.indexOf('opera') > -1
      )
        return;
      try {
        const s_pnp = new SoftKey6W();
        s_pnp.Socket_UK.onopen = () => {
          this.isUkeyConnected = true; //代表已经连接，用于判断是否安装了客户端服务
        };

        //在使用事件插拨时，注意，一定不要关掉Sockey，否则无法监测事件插拨
        s_pnp.Socket_UK.onmessage = Msg => {
          const PnpData = JSON.parse(Msg.data);
          if (PnpData.type == 'PnpEvent') {
            //如果是插拨事件处理消息
            if (PnpData.IsIn) {
              this.$message.info('加密狗已被插入');
            } else {
              this.$message.info('加密狗已被拔出');
            }
          }
        };

        s_pnp.Socket_UK.onclose = function() {};
      } catch (e) {
        return false;
      }
    },
    readCheckPwd(password1, password2) {
      //如果是IE10及以下浏览器，则使用AVCTIVEX控件的方式
      if (
        navigator.userAgent.indexOf('MSIE') > 0 &&
        !navigator.userAgent.indexOf('opera') > -1
      )
        return this.Handle_IE10_ReadCheckPwd(password1, password2);

      //判断是否安装了服务程序，如果没有安装提示用户安装
      if (!this.isUkeyConnected) {
        this.mhideLoading();
        this.loading = false;
        this.$message.warning('未找到加密狗驱动，请安装驱动后重试');
        return false;
      }

      let DevicePath, ret, n, mylen, ID_1, ID_2, addr;
      try {
        let s_simnew1 = new SoftKey6W(); //创建UK类

        s_simnew1.Socket_UK.onopen = function() {
          s_simnew1.ResetOrder(); //这里调用ResetOrder将计数清零，这样，消息处理处就会收到0序号的消息，通过计数及序号的方式，从而生产流程
        };

        //写代码时一定要注意，每调用我们的一个UKEY函数，就会生产一个计数，即增加一个序号，较好的逻辑是一个序号的消息处理中，只调用我们一个UKEY的函数
        s_simnew1.Socket_UK.onmessage = Msg => {
          let UK_Data = JSON.parse(Msg.data);
          //alert(Msg.data);
          if (UK_Data.type != 'Process') return; //如果不是流程处理消息，则跳过
          switch (UK_Data.order) {
            case 0:
              {
                s_simnew1.FindPort(0); //发送命令取UK的路径
              }
              break;
            case 1:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('未发现加密狗，请插入后重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                DevicePath = UK_Data.return_value; //获得返回的UK的路径
                s_simnew1.GetID_1(DevicePath); //发送命令取ID_1
              }
              break;
            case 2:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                ID_1 = UK_Data.return_value; //获得返回的UK的ID_1
                s_simnew1.GetID_2(DevicePath); //发送命令取ID_2
              }
              break;
            case 3:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                ID_2 = UK_Data.return_value; //获得返回的UK的ID_2

                s_simnew1.ContinueOrder();
              }
              break;
            case 4:
              {
                //获取设置在锁中的用户名
                //先从地址0读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 0;
                s_simnew1.YRead(addr, 1, password1, password2, DevicePath); //发送命令取UK地址0的数据
              }
              break;
            case 5:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 6:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                mylen = UK_Data.return_value; //获得返回的数据缓冲区中数据

                //再从地址1读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 1;
                s_simnew1.YReadString(
                  addr,
                  mylen,
                  password1,
                  password2,
                  DevicePath
                ); //发送命令从UK地址1中取字符串
              }
              break;
            case 7:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (UK_Data.return_value !== this.$store.getters.username) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning(
                    '当前用户名和加密狗用户名不一致，请确认'
                  );
                  return false;
                }

                //获到设置在锁中的用户密码,
                //先从地址20读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 20;
                s_simnew1.YRead(addr, 1, password1, password2, DevicePath); //发送命令取UK地址20的数据
              }
              break;
            case 8:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 9:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                mylen = UK_Data.return_value; //获得返回的数据缓冲区中数据

                //再从地址21读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 21;
                s_simnew1.YReadString(
                  addr,
                  mylen,
                  password1,
                  password2,
                  DevicePath
                ); //发送命令从UK地址21中取字符串
              }
              break;
            case 10:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (
                  this.reviewInnerTransfer.jmgPassWord != UK_Data.return_value
                ) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('加密狗密码错误！');

                  return;
                } else {
                  // if (
                  //   this.reviewInnerTransfer.real_pay_type == '2' &&
                  //   this.reviewInnerTransfer.pay_status == '3'
                  // ) {
                  //   this.retryYQTransfer();
                  // } else {
                  //   this.resolveYQTransfer();
                  // }
                  this.resolveYQTransfer();
                }

                //所有工作处理完成后，关掉Socket
                s_simnew1.Socket_UK.close();
              }
              break;
          }
        };

        s_simnew1.Socket_UK.onclose = function() {};
        return true;
      } catch (e) {
        this.mhideLoading();
        this.loading = false;
        return false;
      }
    },
    Handle_IE10_ReadCheckPwd(password1, password2) {
      var DevicePath, ret, n, mylen;
      try {
        //建立操作我们的锁的控件对象，用于操作我们的锁
        var s_simnew1;
        //创建控件

        s_simnew1 = new ActiveXObject('Syunew6A.s_simnew6');

        //查找是否存在锁,这里使用了FindPort函数
        DevicePath = s_simnew1.FindPort(0);
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('未发现加密狗，请插入后重试');
          return false;
        }

        //'读取锁的ID
        let id =
          this.toHex(s_simnew1.GetID_1(DevicePath)) +
          this.toHex(s_simnew1.GetID_2(DevicePath));
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        //获取设置在锁中的用户名
        //先从地址0读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        ret = s_simnew1.YRead(0, 1, password1, password2, DevicePath);
        mylen = s_simnew1.GetBuf(0);
        //再从地址1读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        let username = s_simnew1.YReadString(
          1,
          mylen,
          password1,
          password2,
          DevicePath
        );
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        if (username !== this.$store.getters.username) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('当前用户名和加密狗用户名不一致，请确认');
          return false;
        }

        //获到设置在锁中的用户密码,
        //先从地址20读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        ret = s_simnew1.YRead(20, 1, password1, password2, DevicePath);
        mylen = s_simnew1.GetBuf(0);
        //再从地址21读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        let password = s_simnew1.YReadString(
          21,
          mylen,
          password1,
          password2,
          DevicePath
        );
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        if (this.reviewInnerTransfer.jmgPassWord != password) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('加密狗密码错误！');

          return;
        } else {
          // if (
          //   this.reviewInnerTransfer.real_pay_type == '2' &&
          //   this.reviewInnerTransfer.pay_status == '3'
          // ) {
          //   this.retryYQTransfer();
          // } else {
          //   this.resolveYQTransfer();
          // }
          this.resolveYQTransfer();
        }

        return true;
      } catch (e) {
        this.mhideLoading();
        this.loading = false;
        this.$message.warning('加密狗查询失败，请确认是否正确安装驱动');
      }
    },
    toHex(n) {
      let result = '';
      let start = true;
      let digitArray = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
      ];

      for (let i = 32; i > 0; ) {
        i -= 4;
        const digit = (n >> i) & 0xf;

        if (!start || digit != 0) {
          start = false;
          result += digitArray[digit];
        }
      }

      return result === '' ? '0' : result;
    }
  }
};
</script>
