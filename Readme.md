## <a name='TOC'>🐼 Summary</a>

* [Rules](#rules)
* [Overview](#overview)
* [Story](#story)
* [Credits](#credits)

## <a name='overview'>🦊 Rules</a>

Hi, here are some rules to carry out this story oav;

* You **MUST** create a git repository named `codeflix-ts-exam`
* You **MUST** create a file called `.author` with your username followed by a newline:

```sh
~/codeflix/node-exam ❯❯❯ cat -e .author
majdi$
```

> Of course, you can talk about the subject with other developers, peer-learning is
> the key to be a better developer. Don't hesitate to ask questions or help people in Zoom but don't do any copy-paste ! (➡️ 0).

> Don't forget, there is no useless question :-)

## <a name='overview'>🐱 Overview</a>

The purpose of this challenge is to create some node program that will be use Node/Typescript bascis.

## <a name='ex01'>🐨 Ex01</a>

#### Hi, PWD

##### Description

```sh
~/codeflix/node-exam/ex01 ❯❯❯ npx ts-node mypwd.ts
```

The command will be display the current directory

> Take a look here for the context [**MAN PWD**](http://www.linux-france.org/article/man-fr/man1/pwd-1.html)

##### Usage

You MUST handle theses features : 

1/

```sh
~/codeflix/node-exam/ex01 ❯❯❯ npx ts-node mypwd.ts
/Users/majdi/workspace/codeflix/node-exam/ex01
```

## <a name='ex02'>🐨 Ex02</a>

#### Hi, CAT

##### Description

```sh
~/codeflix/node-exam/ex02 ❯❯❯ npx ts-node mycat.ts
```

The command will be copy and display what a user write on terminal

> Take a look here for the context [**MAN CAT**](http://www.linux-france.org/article/man-fr/man1/cat-1.html)

##### Usage

You MUST handle theses features : 

1/

```sh
~/codeflix/node-exam/ex02 ❯❯❯ npx ts-node mycat.ts
Hello World
Hello World
```

2/

```sh
~/codeflix/node-exam/ex02 ❯❯❯ npx ts-node mycat.ts a-simple-file.txt
This is the content of the file
```

3/

```sh
~/codeflix/node-exam/ex02 ❯❯❯ npx ts-node mycat.ts -e a-simple-file.txt
This is the content of the file$
```


## <a name='ex03'>🐨 Ex03</a>

#### Hi, CP

##### Description

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node mycp.ts
```

The command will be like the real `cp` command that copy files or directories.

> Take a look here for the context [**MAN CP**](http://www.linux-france.org/article/man-fr/man1/cp-1.html)

##### Usage

You MUST handle theses features : 

1/

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node mycp.ts file1 file2
~/codeflix/node-exam/ex03 ❯❯❯
```

> This will copy the `file1` into a `file2`.
> Note that you need to create the file2 if doesn't exist or you have to erase an existing file

2/

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node mycp.ts -r dir1 dir2
```

> This will copy a entier directory `dir1` into a `dir2`.

## <a name='ex04'>🐨 Ex04 // BONUS</a>

#### Hi, LS

##### Description

```sh
~/codeflix/node-exam/ex04 ❯❯❯ npx ts-node myls.ts
```

The command will be like the real `ls` command that copy files or directories.

> Take a look here for the context [**MAN LS**](http://www.linux-france.org/article/man-fr/man1/ls-1.html)

##### Usage

You MUST handle theses features : 

1/

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node myls.ts
myls.js
file1.txt
file2.txt
```

> This will list the files on the directory.

2/

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node myls.ts ~/Workspace
efrei-node.txt
efrei-python.md
```

> This will list the files on the directory Workspace

3/

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node myls.ts -a
myls.ts
file1.txt
file2.txt
.author
```

> This will list all the files with hidden ones.

4/

```sh
~/codeflix/node-exam/ex03 ❯❯❯ npx ts-node myls.ts -R ~/School
HTML5-CSS3

/Users/majdi/School/HTML5-CSS3:
MyCV

/Users/majdi/School/HTML5-CSS3/MyCV:
index.html main.css
```

> This will list recursively all the files on a directory

## <a name='credits'>🐵 Credits</a>

Craft with :heart: by Majdi in **Paris**.
