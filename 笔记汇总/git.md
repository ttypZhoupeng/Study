# 1. Git 

Git/SVN 版本控制系统

Git 分布式版本控制系统  少量程序员
SVN 集中式版本控制系统

## 1.1. Git 安装

    勾选，use Git from window command promt

## 1.2. VScode terminal

    Ctrl + `

## 1.3. git init

    初始化仓库 repo

## 1.4. git remote add [origin] [仓库地址]

    添加一个远程连接

    git remote -v

## 1.5. git add

尽量多做

    git add .  
    
    把我们当前目录下面的所有文件，添加到***待提交***中,暂时还没生成版本

## 1.6. git commit -m ""

尽量多做

    git commit -m ""

    可以简单的理解为保存代码版本

    git log / git reflog

## 1.7. git reset [版本编号] [--hard]

    跳转到某个版本（状态、state）

## 1.8. git pull/git push

    git pull [远程连接名字] master:master
                           远程   本地      

    git push [远程连接名字] master:master
                           本地   远程 
                           
                           master 


    git pull origin master