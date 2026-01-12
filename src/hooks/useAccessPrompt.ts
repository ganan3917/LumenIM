export const useAccessPrompt = () => {
  // 3秒后获取用户浏览器权限
  setTimeout(() => {
    window['$notification'].create({
      title: '友情提醒',
      content: '本站用于游戏爱好者学习和交流之用，请勿上传或发布违法信息，包括但不限于文字、图片、视频等。网络非违法之地，请遵守所在国家的法律法规。遵守聊天平台的社区规范。文明思辨，理性发言，共同维护健康的网络沟通环境。',
      duration: 30000
    })
  }, 3000)
}
