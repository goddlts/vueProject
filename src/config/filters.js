import moment from 'moment';
import Vue from 'vue';

// 过滤器，格式化日期
Vue.filter('fmtdate', (date, fmrStr) => {
  return moment(date).format(fmrStr);
})