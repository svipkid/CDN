# CDN
img

---
<!-- 
```
cd '路径'
git init
git add .
git commit -m '描述信息'
git remote add origin [~/.ssh/config配置的Host别名]:svipkid/CDN.git
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
ssh-add ~/.ssh/svipkid_rsa
-->
##### custom.css
- butterfly主题自定义css
- 头像下面的aside:按钮设置圆角
- 全局md按钮设置圆角

##### flink.min.css
- butterfly主题友情链接css
- 友链设置路径：根目录/source/_data/link.yml
