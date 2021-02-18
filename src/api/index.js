import request from '@/utils/request'

const apiUrl = window.ENC.api
export const setModel = data => request({
  data,
  method: 'post',
  url: `${apiUrl}/api/lf-tz-idmp/tz/v1/methanolPricePreview/insertPageMethanolPricePreview`
})
