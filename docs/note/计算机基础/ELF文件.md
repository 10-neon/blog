# ELF格式介绍

## 对象文件有三种类型

1. 可重定位文件(Relocatable Object File)
2. 可执行文件(Executable Object File)
3. 共享目标文件(Shared Object File)
::: details
 可重定位文件: 汇编语言编译后的`.o`文件, 可以被链接器和其他.o链接成可执行文件或共享目标文件。`ar`工具可以把多个`.o`归档为`.a`静态库文件。

 可执行文件: 链接器链接后生成的可执行文件。

 共享目标文件: 链接器链接后生成的动态库文件，`.so`文件。
    链接编辑器（Link Editor）
    动态链接器（Dynamic Linker）
通过`file`命令可以通过查看ELF文件头输出ELF的文件类型。
:::
## ELF视图
ELF有两种视图，一种是文件视图，一种是段视图。分别对应两种场景：
a) 组成不同的可重定位文件，以参与可执行文件或者可被共享的对象文件的链接构建；
b) 组成可执行文件或者可被共享的对象文件，以在运行时内存中进程映像的构建。
使用`readelf -h ./a.o`可以查看ELF文件头信息


# 参考文档
https://refspecs.linuxfoundation.org/elf/elf.pdf
https://www.cnblogs.com/xmphoenix/archive/2011/10/23/2221879.html
https://linuxtools-rst.readthedocs.io/zh-cn/latest/tool/readelf.html
