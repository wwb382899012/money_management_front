<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="还款调拨审核" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>还款调拨审核</span>
            </div>
            <el-form 
              ref="reviewTransfer" 
              :model="reviewTransfer" 
              :rules="rules" 
              label-width="120px" 
              label-position="left" 
              size="small">
              <div class="form-line">
                <el-form-item 
                  label="还款资金交易编号" 
                  prop="repay_transfer_num">
                  <el-input 
                    v-model="reviewTransfer.repay_transfer_num" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款编号" 
                  prop="order_num">
                  <el-input 
                    v-model="reviewTransfer.order_num" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="指令状态" 
                  prop="repay_transfer_status">
                  <el-input 
                    v-model="repayTransferStatusJson[reviewTransfer.repay_transfer_status]" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="还款状态" 
                  prop="repay_status">
                  <el-input 
                    v-model="repayPayStatusJson[reviewTransfer.repay_status]" 
                    disabled></el-input>
                </el-form-item>
              </div>

              <el-card 
                v-if="reviewTransfer.orderDetail && reviewTransfer.orderDetail.length"
                class="box-card box-card-inside">
                <div 
                  slot="header" 
                  class="box-card-header">
                  <span>还款指令</span>
                </div>
                <div class="text item">
                  <el-table :data="reviewTransfer.orderDetail">
                    <el-table-column 
                      label="操作"
                      width="60px">
                      <template slot-scope="scope">
                        <el-button 
                          :disabled="loading" 
                          size="mini" 
                          type="text" 
                          @click="triggerCheckRepayOrder(scope.row.id)">详情</el-button>
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="order_num" 
                      label="还款编号"
                      width="220">
                    </el-table-column>
                    <el-table-column 
                      prop="out_order_num" 
                      label="外部指令号"
                      width="100">
                    </el-table-column>
                    <el-table-column 
                      prop="system_flag" 
                      label="系统来源"
                      width="100">
                    </el-table-column>
                    <el-table-column  
                      label="本金回款"
                      width="150">
                      <template slot-scope="scope">
                        {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="require_repay_date" 
                      label="要求还款日"
                      width="100">
                    </el-table-column>
                    <el-table-column 
                      prop="repay_desc" 
                      label="还款说明"
                      show-overflow-tooltip>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>

              <el-card class="box-card box-card-inside">
                <div 
                  slot="header">
                  <span>还款现金流表</span>
                </div>
                <div class="text item">
                  <el-table :data="reviewTransfer.cashDetail">
                    <el-table-column 
                      label="选项"
                      width="50px">
                      <template slot-scope="scope">
                        <el-checkbox 
                          :value="scope.row.checked"
                          disabled></el-checkbox>
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="repay_date" 
                      label="要求还款日"
                      width="110px">
                    </el-table-column>
                    <el-table-column 
                      prop="real_repay_date" 
                      label="还款日期"
                      width="100px">
                    </el-table-column>
                    <el-table-column label="事项">
                      <template slot-scope="scope">
                        {{ cashFlowTypeJson[scope.row.cash_flow_type] }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="金额"
                      width="150px">
                      <template slot-scope="scope">
                        {{ [scope.row.amount, reviewTransfer.currency] | filterCent2YuanCurrencyAmount }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="实际金额"
                      width="150px">
                      <template slot-scope="scope">
                        {{ filterCent2YuanCurrencyAmount([scope.row.real_amount, reviewTransfer.currency]) }}
                      </template>
                    </el-table-column>
                    <el-table-column label="状态">
                      <template slot-scope="scope">
                        {{ scope.row.cash_flow_type == 1 ? '已支付' : repayStatusJson[scope.row.cash_status] }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="说明" 
                      prop="info">
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>

              <div class="form-line">
                <el-form-item 
                  label="贷款方" 
                  prop="repay_main_body">
                  <el-input 
                    v-model="reviewTransfer.repay_main_body" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方" 
                  prop="collect_main_body">
                  <el-input 
                    v-model="reviewTransfer.collect_main_body" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行名称" 
                  prop="repay_account_uuid">
                  <el-input 
                    v-model="reviewTransfer.repay_bank_name" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方银行名称" 
                  prop="collect_account_uuid">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_name" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行账号" 
                  prop="repay_bank_account">
                  <el-input 
                    v-model="reviewTransfer.repay_bank_account" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方银行账号" 
                  prop="collect_bank_account">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_account" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div 
                v-if="reviewTransfer.real_pay_type == 2" 
                class="form-line">
                <el-form-item 
                  label="实付类型" 
                  prop="real_pay_type">
                  <el-input 
                    v-model="realPayTypeJson[reviewTransfer.real_pay_type]" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="加密狗密码" 
                  prop="jmgPassWord">
                  <el-input 
                    v-model="reviewTransfer.jmgPassWord" 
                    type="password" 
                    placeholder="请输入加密狗密码"></el-input>
                </el-form-item>
              </div>
              <el-form-item 
                v-else 
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
              <div class="form-line">
                <el-form-item 
                  label="还款币种" 
                  prop="currency">
                  <el-input 
                    v-model="reviewTransfer.currencyStr"
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="还款金额" 
                  prop="repay_amount">
                  <el-input 
                    v-model="reviewTransfer.repay_amount_str" 
                    disabled
                    type="number" 
                    placeholder="请输入还款金额">
                    <template slot="append">元</template>
                  </el-input>
                </el-form-item>
              </div>

              <el-form-item 
                label-width="0" 
                prop="review_comments">
                <el-input 
                  v-model="reviewTransfer.review_comments" 
                  type="textarea" 
                  placeholder="请输入审核意见"></el-input>
              </el-form-item>
              <el-form-item 
                class="form-footer" 
                label-width="0">
                <el-button 
                  v-if="reviewTransfer.repay_transfer_status == '2' || (reviewTransfer.repay_transfer_status == '3' && reviewTransfer.repay_status == '3')"
                  :disabled="loading" 
                  size="medium" 
                  type="success" 
                  @click="resolveTransfer('reviewTransfer')">{{ reviewTransfer.repay_status == '3' ? '重试' : '通过' }}</el-button>
                <el-button 
                  v-if="reviewTransfer.repay_transfer_status == '2' || (reviewTransfer.repay_transfer_status == '3' && reviewTransfer.repay_status == '3')"
                  :disabled="loading" 
                  size="medium" 
                  type="warning" 
                  @click="rejectTransfer('reviewTransfer')">驳回</el-button>
                <tp-historyback
                  name="repayTransferList"
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
        </el-tab-pane>
        <el-tab-pane 
          label="借款调拨详情" 
          name="second">
          <transfer-detail 
            v-if="reviewTransfer.loan_transfer_uuid" 
            :uuid="reviewTransfer.loan_transfer_uuid"></transfer-detail>
          <span v-else>获取原借款调拨详情失败</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import {
  getRepayTransferDetail,
  repayTransferFlowResolve,
  bankRepayTransferFlowResolve,
  repayTransferFlowReject,
  repayTransferRetry
} from '@/api/repay';

import '@/utils/Syunew6';
import getUkeyPwd from '@/api/ukey';

import TransferDetail from '../../loan/transfer/detail.vue';

export default {
  components: {
    TransferDetail
  },
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
      loading: false,
      reviewTransfer: {
        id: '',
        uuid: '',
        repay_transfer_num: '',
        order_num: '',
        repay_transfer_status: '',
        repay_status: '',
        repay_main_body_uuid: '',
        repay_main_body: '',
        repay_account_uuid: '',
        repay_bank_name: '',
        repay_bank_account: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        real_pay_type: '',
        currency: '',
        currencyStr: '',
        repay_amount: '',
        repay_amount_str: '',

        loan_transfer_uuid: '',

        review_comments: '',
        jmgPassWord: ''
      },
      rules: {
        jmgPassWord: [
          {
            required: true,
            message: '请输入加密狗密码',
            trigger: 'blur'
          }
        ],
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ]
      },
      repayTransferStatusJson: {
        0: '待资金专员审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        4: '权签人驳回',
        20: '已完结'
      },
      repayStatusJson: {
        1: '未提交',
        2: '待审核',
        3: '已支付',
        10: '待确认'
      },
      activeName: 'first'
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'repayTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getRepayTransferDetail({
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

      this.initUkey();
    }
  },
  methods: {
    // 格式化详情数据
    formatDetailData() {
      let orderDetail = [];
      if (this.reviewTransfer.orderDetail) {
        for (let i = 0; i < this.reviewTransfer.orderDetail.length; i++) {
          if (
            this.reviewTransfer.orderDetail[i].repay_order_status != 2 &&
            this.reviewTransfer.orderDetail[i].repay_order_status != 4
          ) {
            orderDetail.push(this.reviewTransfer.orderDetail[i]);
          }
        }
      }
      this.reviewTransfer.orderDetail = orderDetail;

      this.reviewTransfer.repay_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.repay_bank_account
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

      this.sortCashFlowList();
    },

    // 还款现金流表排序并勾选
    sortCashFlowList() {
      this.reviewTransfer.cashDetail.sort((cashFlow1, cashFlow2) => {
        if (cashFlow1.repay_date == cashFlow2.repay_date) {
          return (
            Number(cashFlow1.cash_flow_type) - Number(cashFlow2.cash_flow_type)
          );
        }

        return (
          new Date(cashFlow1.repay_date).getTime() -
          new Date(cashFlow2.repay_date).getTime()
        );
      });

      let date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      let todayTimestamp = date.getTime();

      for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
        if (
          this.reviewTransfer.cashDetail[i].cash_status == 2 &&
          this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
          todayTimestamp <=
            new Date(
              this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
            ).getTime()
        ) {
          this.reviewTransfer.cashDetail[i].checked = true;
          this.reviewTransfer.cashDetail[i + 1].checked = true;

          this.reviewTransfer.repay_amount =
            Number(this.reviewTransfer.cashDetail[i].real_amount) +
            Number(this.reviewTransfer.cashDetail[i + 1].real_amount);
          this.reviewTransfer.repay_amount_str = this.filterCent2YuanNoThousandCurrencyAmount(
            this.reviewTransfer.repay_amount
          );
          break;
        }
      }
    },

    // 通过还款调拨审核
    resolveTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm(
            this.reviewTransfer.real_pay_type == '2' &&
            this.reviewTransfer.repay_status == '3'
              ? '确定要重新发起还款吗?'
              : '确定要通过还款调拨审核吗?'
          )
            .then(() => {
              this.mshowLoading(
                this.reviewTransfer.real_pay_type == '2' &&
                this.reviewTransfer.repay_status == '3'
                  ? '正在重新发起还款...'
                  : '正在通过还款调拨审核...'
              );

              if (this.reviewTransfer.real_pay_type == 2) {
                if (!this.$store.getters.username) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning(
                    this.reviewTransfer.real_pay_type == '2' &&
                    this.reviewTransfer.repay_status == '3'
                      ? '重新发起还款失败!'
                      : '通过还款调拨审核失败！'
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
                // 获取还款调拨审核参数
                const params = {
                  instance_id: this.reviewTransfer.id,
                  main_body_uuid: this.reviewTransfer.repay_main_body_uuid,
                  info: this.reviewTransfer.review_comments,
                  params: {}
                };

                bankRepayTransferFlowResolve(params)
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('通过还款调拨审核成功');
                    this.$router.replace({
                      name: 'repayTransferList'
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
    resolveYQTransfer() {
      // 获取还款调拨审核参数
      const params = {
        instance_id: this.reviewTransfer.id,
        main_body_uuid: this.reviewTransfer.repay_main_body_uuid,
        info: this.reviewTransfer.review_comments,
        params: {
          real_pay_type: this.reviewTransfer.real_pay_type,
          jmgUserName: this.$store.getters.username,
          jmgPassWord: this.reviewTransfer.jmgPassWord
        }
      };

      repayTransferFlowResolve(params)
        .then(() => {
          this.loading = false;
          this.mhideLoading();
          if (
            this.reviewTransfer.real_pay_type == '2' &&
            this.reviewTransfer.repay_status == '3'
          ) {
            this.$message.success('重新发起还款成功');
          } else {
            this.$message.success('通过还款调拨审核成功');
          }
          this.$router.replace({
            name: 'repayTransferList'
          });
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },
    retryYQTransfer() {
      // 获取还款调拨审核参数
      const params = {
        uuid: this.reviewTransfer.uuid,
        ukPwd: this.reviewTransfer.jmgPassWord
      };

      repayTransferRetry(params)
        .then(() => {
          this.loading = false;
          this.mhideLoading();
          this.$message.success('重新发起还款成功');
          this.$router.replace({
            name: 'repayTransferList'
          });
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },

    rejectTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewTransfer.review_comments &&
        this.reviewTransfer.review_comments.length <= 100
      ) {
        this.isReject = false;

        this.mconfirm('确定要驳回还款调拨审核吗?')
          .then(() => {
            this.mshowLoading('正在驳回还款调拨审核...');

            // 获取驳回参数

            repayTransferFlowReject({
              instance_id: this.reviewTransfer.id,
              info: this.reviewTransfer.review_comments,
              main_body_uuid: this.reviewTransfer.repay_main_body_uuid,
              params: {}
            })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('还款调拨驳回成功');
                this.$router.replace({
                  name: 'repayTransferList'
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
        this.$message.warning('请填写驳回原因');
        return false;
      }
    },

    // 查看还款指令详情
    triggerCheckRepayOrder(uuid) {
      this.$router.push({
        name: 'repayOrderDetail',
        params: {
          uuid
        }
      });
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

                if (this.reviewTransfer.jmgPassWord != UK_Data.return_value) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('加密狗密码错误！');

                  return;
                } else {
                  // if (
                  //   this.reviewTransfer.real_pay_type == '2' &&
                  //   this.reviewTransfer.repay_status == '3'
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

        if (this.reviewTransfer.jmgPassWord != password) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('加密狗密码错误！');

          return;
        } else {
          // if (
          //   this.reviewTransfer.real_pay_type == '2' &&
          //   this.reviewTransfer.repay_status == '3'
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
