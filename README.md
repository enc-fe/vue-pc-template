# enc-vue-pc-template

### 1、日期时间处理使用了dayjs,不在建议手动封装；
  [dayjs官方文档](https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md)
  ```
  eg: dayjs().format('YYYY-MM-DD HH:mm:ss')
  ```

### 2、样式预处理器使用stylus及scss

### 3、加入git hooks工具husky
  [Husky地址](https://www.npmjs.com/package/husky)

### 4、建议使用小驼峰命名法

### 5、 使用standard做为eslint标准
 [standardjs](https://standardjs.com/#usage)

### 6、 建议打开vscode保存自动化格式功能
```
{
  "editor.codeActionsOnSave": {
    // 保存自动格式化
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
  ],
  "files.associations": {
    "*.vue": "vue"
  }
}
```