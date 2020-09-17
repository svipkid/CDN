# CDN
img

---
<!-- 
```
cd '路径'
git init
git add .
git commit -m '描述信息'
git remote add origin git@github.com:svipkid/CDN.git
git pull origin master
第一次 git push --set-upstream origin master -f
git push origin master
```
-->
<!-- git add . && git commit -m update && git pull origin master && git push origin master -->
<!-- github -->
<!--
第2次建立密钥，需要加入ssh-agent

git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

ssh-keygen -C "your.email@example.com"     公钥生成后填写到个人公钥
ssh -T git@github.com    首次建立信任

将新生成的key添加到ssh-agent中:
eval "$(ssh-agent -s)"

输入如上代码会输出：
Agent pid XXX

然后再输入：
ssh-add ~/.ssh/id_rsa
-->
##### flink-pjax.zip
- 和flink.min.css一起使用
- 解压路径themes/butterfly/layout，覆盖flink.pug

##### custom.css
- butterfly主题自定义css
- 头像下面的aside:按钮设置圆角
- 全局md按钮设置圆角

##### flink.min.css
- butterfly主题友情链接css
- 友链设置路径：根目录/source/_data/link.yml
```
class1:
  class_name: 友情链接1
  class_desc: 副标题描述支持html标签
  link_list:
    1:
      name: name
      link: https://antmoe.com
      avatar: http://mrdavid.test.upcdn.net/CDN/img/portrait.png
      descr: 文字信息
      # 边框大小 默认为0 
      width: 0px
      # 边框样式 默认 solid
      style: solid
      # 边框颜色 默认淡蓝色 #49b1f5
      color: "0"
      # 自动旋转 可选值 flash（闪现） link_custom（单色呼吸灯） link_custom1（彩色呼吸灯）
      custom: link_custom1
      # 动画时长设定，默认为0
      time: 4s
      # name的颜色
      namecolor: "#ff9191"
      # descr的颜色
      descolor: "#ff9191"
      # 背景颜色
      background: "0"
      # 鼠标悬停旋转角度
      rotate: 360deg
      # 自动旋转 latuo左旋转 rauto右旋转
      autorotate: lauto
      # 旋转的周期（时长）
      autotime: 2s
      #移除此链接的权重 0为否 非0为移除
      remove: 0
```