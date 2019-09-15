// 提示框配置
export const popToast =({ that, msg }) =>{
  return that.$toast({
      message:msg,
      duration:2000,
      position:'bottom'
  })
}
