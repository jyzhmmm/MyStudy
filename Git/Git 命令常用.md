ctrl L 清屏
1. 设置用户签名：
 git config --global user.name xxx
  git config --global user.email xxx

  首次使用必须设置下用户签名，否则无法提交代码

2. 初始化本地库：
git init
git status  查看项目状态
cat 文件名 查看文件信息
git add 提交到暂存区
git rm --cached 文件名  删除暂存区文件
git commit -m '日志信息'文件名

3. 查看版本信息
git reflog 查看提交到本地库文件版本信息
git log 查看本地库文件详细信息
git reset --hard 版本号     穿越版本信息，更改当前位置是哪个版本

4. 分支操作
git branch 创建分支
git branch -v 查看分支
git checkout 分支名    切换分支
git merge 分支名    把指定分支合并到当前分支下

5. 别名
git remote -v     查看别名
git remote add 别名 远程地址      添加别名
git push 远程库别名 文件       推送到远程库
git pull 远程库别名 文件       拉取到本地库
git clone 远程地址         克隆远程库