---
title: LaTeX编写基础知识
description: 关于LaTeX
published: 2025-06-16
tags:
  - 排版
category: 知识
---

# LaTeX

LaTeX是一种基于ΤΕΧ的排版系统，由美国计算机学家**莱斯利·兰伯特**（Leslie Lamport）在20世纪80年代初期开发。利用这种格式可以生成**复杂表格**和**数学公式**，这个笔记的**重点**就是教你**如何利用LaTeX排版数学公式**

你也想写出这样的公式？是的，你没有看错。上面这些公式并不是图片，而是用一种更为优雅的方式产生——LaTeX

你可以通过LaTeX代码优雅的写出这些高印刷质量的公式，就像这样

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}
```

不要害怕，这其实很简单，只需要花费一点时间看完这篇笔记，你也可以优雅的写出这些数学公式

首先推荐一个网站[**在线LaTeX公式编辑器**](https://www.latexlive.com/)你可以一边学习，一边在这里测试你学到的东西，这样可以帮助你更快，更轻松的理解LaTeX

那我们开始吧！

## 一些简单的公式

输入 `f(x) = a+b`

显示：

像这样简单的公式只需要像平时一样用键盘输入即可

## 运算符号与字母

你的键盘并不能打出乘号，除号，点乘 等符号你可以使用LaTeX代码打出这些符号

LaTeX代码如下,除号用\div表示，乘号用\times表示，点乘用\codt表示，而加号，减号，等于号可以用键盘打出，那么就不需要用LaTeX来表示了

```latex
x-2\div 3\times 4=y + x\cdot y
```

除了基本运算符号，还有更多符号在最后的参考里，具体按照自己需求查看

- **常用数学符号**

  | Property | LaTeX       | 符号      | LaTeX   | 符号    | LaTeX       |
  | -------- | ----------- | --------- | ------- | ------- | ----------- |
  | +        | +           | ≈         | \approx | ⇀(向量) | \vec{}      |
  | -        | -           | Δ         | \Delta  | ∑       | \sum        |
  | ×        | \times      | ∞         | \infty  | ∫       | \int        |
  | ÷        | \div        | α         | \alpha  | ∮       | \oint       |
  | ±        | \pm         | β         | \beta   | ∬       | \iint       |
  | ⋃        | \cup        | γ         | \gamma  | ∭       | \iiint      |
  | ⋂        | \cap        | τ         | \tau    | ∯       | \oiint      |
  | ∁        | \complement | φ         | \varphi | ∰       | \oiiint     |
  | <        | <           | λ         | \lambda | lim     | \lim        |
  | >        | >           | ρ         | \rho    | ⋁       | \bigvee     |
  | =        | =           | π         | \pi     | ⋀       | \bigwedge   |
  | ≤        | \le         | ξ         | \xi     | ⋃       | \bigcup     |
  | ≥        | \ge         | ν         | \nu     | ⋂       | \bigcap     |
  | ⊆        | \subseteq   | μ         | \mu     | ∏       | \prod       |
  | ∈        | \in         | η         | \eta    | ∐       | \coprod     |
  | ∅        | \emptyset   | ψ         | \Psi    | ∂       | \partial    |
  | ∵        | \because    | Ω         | \Omega  | ∅       | \phi        |
  | ∴        | \therefore  | ·（点乘） | \cdot   | ε       | \varepsilon |
  | ∀        | \forall     | ℏ         | \hbar   | σ       | \sigma      |
  | ∃        | \exists     | δ         | \delta  | Φ       | \Phi        |
  |          |             | ω         | \omega  | ∇       | \nabla      |

- 上下标

`_{}`表示下标，`{}`括号里写下标内容、`^{}`表示上标，`{}`括号里写上标内容，但上下标内容只有一个字符时，可以不用大括号括起来；单引号’表示求导。

```latex
a_{ij}^{2} + b^3_{2}=x^{t} + y' + x''_{12}
```



```latex
_{a}^{b}x
```



如何把上下标放在正上下方呢? 可以用`\limits_{}^{}`,前一个括号里是下标，后一个括号里是上标，`\limits`这个符号是用来表示数学里的范围，不是所有的符号在运算中需要范围，所以这种方式只对一些有可能需要定义范围的特定的符号有效(例如，`\int`，`\prod`，`\bigcap`，`\bigcup`，`\sum`，`\oint`，`\lim`，`\coprod`)

```latex
\int\limits_{a}^{b}
```



还有一种其方法适用于所有符号,但这种方式并不兼容所有可以使用LaTeX的软件

```latex
\sideset{1}{1}X_a^b
```



## 根号分式

```latex
\sqrt{x} + \sqrt{x^{2}+\sqrt{y}} = \sqrt[3]{k_{i}} - \frac{x}{m}
```



`\sqrt{}`表示平方根，括号里写根号下的内容

`\sqrt[n]{}`表示n次方根，[]里填写数字是几就为代表根式是几次方根

\frac{}{}表示分式,前一个括号里是分子，后一个括号里是分母。也可以使用\cfrac{}{}，区别在于比前者字号稍大

## 向量

`\vec`表示向量，`\overrightarrow`表示箭头向右的向量，`\overleftarrow`表示箭头向左的向

```latex
\vec{a} + \overrightarrow{AB} + \overleftarrow{DE}
```



## 积分、极限、求和、乘积

`\int`表示积分，`\lim`表示极限， `\sum`表示求和，`\prod`表示乘积

```latex
\lim_{x \to \infty} x^2_{22} - \int_{1}^{5}x\mathrm{d}x + \sum_{n=1}^{20} n^{2} = \prod_{j=1}^{3} y_{j}  + \lim_{x \to -2} \frac{x-2}{x}
```



## 空格与换行

### 空格

| 名称         | 代码        | 描述         |
| ------------ | ----------- | ------------ |
| 两个quad空格 | `a\qquad b` | 两个m的宽度  |
| quad空格     | `a\quad b`  | 一个m的宽度  |
| 大空格       | `a\ b`      | 1/3m宽度     |
| 中等空格     | `a\;b`      | 2/7m宽度     |
| 小空格       | `a\,b`      | 1/6m宽度     |
| 紧贴         | `a\!b`      | 缩进1/6m宽度 |

### 换行

LaTeX是默认不换行的，如果换行必须在特殊条件下用`\\`表示换行

```latex
\begin{equation}
\begin{aligned}
abc\\ 
def\\
\end{aligned}
\end{equation}
```



## 矩阵

```latex
\begin{pmatrix}  
  a_{11} & \cdots & a_{1n} \\  
  \vdots & \ddots & \vdots \\  
  a_{m1} & \cdots & a_{mn}  
\end{pmatrix}
```



是不是看傻了，没关系，我们只需要把代码拆开一部分一部分看就可以

如果我们把中间的内容去掉，替换成x，你会发现这其实就是一个括号里放了一个x，那这个x其实就代表那些矩阵，但这个括号可不是一般的括号

```latex
\begin{pmatrix}  
x
\end{pmatrix}
```



然后我们输入第一行矩阵，显示如右。注意，这里的`&`起到空格的作用，只在矩阵可行。在LaTeX中如果只输入空格是不会有空格的效果的，当然这个方法并不标准，是我自己摸索出来的，标准的空格如下，但比较麻烦。

- 标准的空格

```latex
\begin{pmatrix}  
 a_{11} & \cdots & a_{1n}
\end{pmatrix}
```



再输入第二行矩阵，注意，第一行尾部要添加\来表示换行。显示如右

```latex
\begin{pmatrix}  
  a_{11} & \cdots & a_{1n} \\  
  \vdots & \ddots & \vdots 
\end{pmatrix}
```



最后一行矩阵同上方法，即可得到开头那个整的矩阵。**再次提醒要用`\\`换行！！！**

**示例：**

```latex
\begin{matrix} 
a & b \\
c & d
\end{matrix}
```

```latex
\begin{pmatrix} 
a & b \\
c & d
\end{pmatrix}
```

```latex
\begin{bmatrix} 
a & b \\
c & d
\end{bmatrix}
```

```latex
\begin{Bmatrix} 
a & b \\
c & d
\end{Bmatrix}
```

```latex
\begin{vmatrix} 
a & b \\
c & d
\end{vmatrix}
```

```latex
\begin{Vmatrix} 
a & b \\
c & d
\end{Vmatrix}
```

**使用\left \right关键词**

```latex
\left(
\begin{matrix} 
a & b \\
c & d
\end{matrix}
\right)
```

```latex
\left[
\begin{matrix} 
a & b \\
c & d
\end{matrix}
\right]
```



## 公式编号

代码如下，其实只需要在你的公式后添加`\tag{}`，括号里填写编号。

```latex
f(x) = \log_{a}{b}-c \tag{1.1}
```



## 多行公式/三角函数

`\sin`是正弦 `\cos`是余弦 `\tan`是正切

```latex
\begin{split}
\cos 2x 
&= \cos^2x - \sin^2x \\
&=2\cos^2x-1
\end{split}
```



同样是换行，但想要达到这种等号对齐的效果必须在每个要对其的等于号前加上&

(这是&的第二个用法)

## 方程组

是不是对这个方程组很熟悉，没错这就是开头那个，前面学了那么多你应该知道大概要怎么做了吧，不过还欠点火候，我们还有最后一点东西没学完

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}
```



这就是这个方程组的代码，不用担心，它并不复杂，我们还是用之前的方法，来一部分一部分看他

```latex
f(x) = \begin{cases}

\end{cases}
```



`\begin{cases} \end{cases}` 其实就是一个花括号的格式，只需要在里面填写方程和条件然后用\换行把每个方程分开即可，这样就可以得到那个方程组。让我们来看下一步

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 

\end{cases}
```

现在我们把第一个方程放在括号里了，这里要注意在方程后添加条件先在方程后写&然后再写条件

（这是&的第三种用法）

我们在第一个方程后添加\换行，然后写入第二行方程，如下

```latex
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c} & x<3 \\
\pi & x=3 \\
\end{cases}
```

同上方式，你就可以写出那个完整的方程组了。

好的，现在你已经可以通过LaTeX写出绝大多数数学公式了，它一定会成为你数理学习路上的好帮手

## 狄拉克符号

**方法一**

```latex
\left \langle \psi \right | 
\left| \psi  \right \rangle 
\left \langle \psi | \psi \right \rangle
```

`\left \langle $\psi$ \right |` 

`\left | $\psi$ \right \rangle` 

`\left \langle $\psi$ | $\psi$ \right \rang`

这种方式会看起来比较复杂

**方法二**

```latex
\bra{\psi} 
\ket{\psi} 
\braket{\phi|\psi}
```

这是标准的写法，使用起来也非常简单，推荐使用这样的写法

## 字体

例如我们数学中的傅里叶变换和拉普拉斯变换,你知道这些符号都是怎么打出来的吗？

其实它们都是换了字体的大写F和L，我们在数学和物理的学习中也是会经常用到这些符号

 \mathscr{L}  \mathcal{L}

 \mathscr{L}  \mathcal{F}

这里使用的字体是德文尖角体，这个字体用\mathfrak{}。除此之外，你还发现了什么，没错，与之前不同的是这里的字是蓝色的。LaTeX可以定义字的颜色，你只需要在字前加一个\color{}括号里输入颜色名称即可，代码如下

```latex
\color{Blue}\mathfrak{ABCDEFGHRGKLMNOPQRSTUVWXYZ} \\ 
\color{Blue}\mathfrak{abcdefghrgklmnopqrstuvwxyz}
```

你可能会疑惑，你并不知道所有颜色的名称，而且并不是所有颜色都有名称，那么我们如何让字显示出我们想要的颜色？用我们常说的RGB，也就是三原色，理论上它们可以搭配出成千上万种颜色，总有一款是你喜欢的那么如何用LaTeX表示三原色呢？用`\color[RGB]{0,0,0}`最大值为225，最小值为0，值越大颜色占比越多，第一个数代表红色的值，第二个数代表绿色的值，第三个数代表蓝色的值，其实是按照RGB的顺序来的，R代表Red（红色），G代表Green（绿色），B代表Blue（蓝色）。

在一堆字里，我只想定义个别字的颜色怎么办我们可以把字用{}括号括起来

```latex
\color{red}{abc}
或者
{\color{Blue}abc}
两者没有区别（为了比较明显我把两种方式的字设成了不同颜色）
```

## 大小

LaTeX不仅可以定义字体，颜色，还可以定义字的大小。虽然这在数学公式中并不一定能用上，但我还是提一嘴，以备不时之需

一号 \Huge 

二号 \huge 

三号 \LARGE 

四号 \Large

小四号 \large 

五号(默认) 

小五号\small 

六号 \footnotesize 

除了字体大小还有字体的样式，放在下面提供参考

```latex
\begin{array}{l} 
  {\displaystyle \int f^{-1}(x-x_a)dx} \\
  {\textstyle \int f^{-1}(x-x_a)dx} \\
  {\scriptstyle \int f^{-1}(x-x_a)dx}\\
  {\scriptscriptstyle \int f^{-1}(x-x_a)dx}
\end{array}
```

## 化学方程式

以上内容足够你打出你所能在书本上见到的绝大多数**数学公式**，既然如此，我们不如再尝试一下**化学方程式**，让我们试试看吧！

```latex
SO_4^{2-}+Ba^{2+}\to BaSO_4\downarrow
```

这个是我用上述所学到的LaTeX知识所打出来的，而下面这个是我用扩展方法打出来的，两者字体和箭头略有不同。

```latex
\ce{SO4^2- + Ba^2+ -> BaSO4 v}
```

下面这个用扩展方法打出来的化学方程式中沉淀箭头由v代替，字母后的数字自动变为下标，多个上标符号在一块时不需要用{}括起来箭头被->代替,\ce表示启用化学的扩展方法

**参考：**

```latex
\ce{Zn^2+  
<=>[+ 2OH-][+ 2H+]  
\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}  
<=>[+ 2OH-][+ 2H+] 
\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}}
```

## 符号参考

- **希腊字母**

  | 小写 | LaTeX     | 读音                   | 大写 | LaTeX     | 读音        |
  | ---- | --------- | ---------------------- | ---- | --------- | ----------- |
  | α    | \alpha    | /ˈælfə/                | Γ    | \Gamma    | /ˈɡæmə/     |
  | β    | \beta     | /ˈbiːtə/, US: /ˈbeɪtə/ | Δ    | \Delta    | /ˈdɛltə/    |
  | γ    | \gamma    | /ˈɡæmə/                | Θ    | \Theta    | /ˈθiːtə/    |
  | δ    | \delta    | /ˈdɛltə/               | Λ    | \Lambda   | /ˈlæmdə/    |
  | ϵ    | \epsilon  | /ˈɛpsɪlɒn/             | Ξ    | \Xi       | /zaɪ, ksaɪ/ |
  | ε    | \epsilon  | /ˈɛpsɪlɒn/             | Π    | \Pi       | /paɪ/       |
  | ζ    | \zeta     | /ˈzeɪtə/               | Σ    | \Sigma    | /ˈsɪɡmə/    |
  | η    | \eta      | /ˈeɪtə/                | Υ    | \Upsilon  | /ˈʌpsɪlɒn/  |
  | θ    | \theta    | /ˈθiːtə/               | Φ    | \Phi      | /faɪ/       |
  | ϑ    | \vartheta | /ˈθiːtə/               | Ψ    | \Psi      | /psaɪ/      |
  | ι    | \iota     | /aɪˈoʊtə/              | Ω    | \Omega    | /oʊˈmeɪɡə/  |
  | κ    | \kappa    | /ˈkæpə/                | ω    | \omega    | /oʊˈmeɪɡə/  |
  | λ    | \lambda   | /ˈlæmdə/               | ψ    | \psi      | /psaɪ/      |
  | μ    | \mu       | /mjuː/                 | χ    | \chi      | /kaɪ/       |
  | ν    | \nu       | /njuː/                 | φ    | \varphi   | /faɪ/       |
  | ξ    | \xi       | /zaɪ, ksaɪ/            | ϕ    | \phi      | /faɪ/       |
  | ο    | \omicron  | /ˈɒmɪkrɒn/             | υ    | \upsilon  | /ˈʌpsɪlɒn/  |
  | π    | \pi       | /paɪ/                  | τ    | \tau      | /taʊ, tɔː/  |
  | ϖ    | \varpi    | /paɪ/                  | ς    | \varsigma | /ˈsɪɡmə/    |
  | ρ    | \rho      | /roʊ/                  | σ    | \sigma    | /ˈsɪɡmə/    |
  | ϱ    | \varrho   | /roʊ/                  |      |           |             |

  **注意:** MathJax支持的大写希腊字母有限，如需其他（如大写Alpha），可使用**罗马体**转换，如`\mathrm{A}`表示大写Alpha：A。

- **集合**

  | 图标 | LaTeX          | 图标 1 | LaTeX 1        |
  | ---- | -------------- | ------ | -------------- |
  | ∁    | \complement    | ⊏      | \sqsubset      |
  | ∅    | \emptyset      | ⊃      | \supset        |
  | ∅    | \varnothing    | ⋑      | \Supset        |
  | ∈    | \in            | ⊐      | \sqsupset      |
  | ∉    | \notin         | ⊆      | \subseteq      |
  | ∋    | \ni            | ⊈      | \nsubseteq     |
  | ∩    | \cap           | ⊊      | \subsetneq     |
  | ⋒    | \Cap           | ⊊      | \varsubsetneq  |
  | ⊓    | \sqcap         | ⊑      | \sqsubseteq    |
  | ⋂    | \bigcap        | ⊇      | \supseteq      |
  | ∪    | \cup           | ⊉      | \nsupseteq     |
  | ⋓    | \Cup           | ⊋      | \supsetneq     |
  | ⊔    | \sqcup         | ⊋      | \varsupsetneq  |
  | ⋃    | \bigcup        | ⊒      | \sqsupseteq    |
  | ⨆    | \bigsqcup      | ⫅      | \subseteqq     |
  | ⊎    | \uplus         | ⊈      | \nsubseteqq    |
  | ⨄    | \biguplus      | ⫋      | \subsetneqq    |
  | ∖    | \setminus      | ⫋      | \varsubsetneqq |
  | ∖    | \smallsetminus | ⫆      | \supseteqq     |
  | ×    | \times         | ⊉      | \nsupseteqq    |
  | ⊂    | \subset        | ⫌      | \supsetneqq    |
  | ⋐    | \Subset        | ⫌      | \varsupsetneqq |

- **希伯来字母**

  | 图标 | LaTeX   | 英文   |
  | ---- | ------- | ------ |
  | ℵ    | \aleph  | aleph  |
  | ℶ    | \beth   | beth   |
  | ℷ    | \gimel  | gimel  |
  | ℸ    | \daleth | daleth |

- **几何符号**

  | 图标 | LaTeX             | 图标 | LaTeX               |
  | ---- | ----------------- | ---- | ------------------- |
  | ∥    | \parallel         | ◊    | \lozenge            |
  | ∦    | \nparallel        | ⧫    | \blacklozenge       |
  | ∥    | \shortparallel    | ★    | \bigstar            |
  | ∦    | \nshortparallel   | ◯    | \bigcirc            |
  | ⊥    | \perp             | △    | \triangle           |
  | ∠    | \angle            | △    | \bigtriangleup      |
  | ∢    | \sphericalangle   | ▽    | \bigtriangledown    |
  | ∡    | \measuredangle    | △    | \vartriangle        |
  | 45∘  | 45^\circ          | ▽    | \triangledown       |
  | ◻    | \Box              | ▴    | \blacktriangle      |
  | ◼    | \blacksquare      | ▾    | \blacktriangledown  |
  | ⋄    | \diamond          | ◂    | \blacktriangleleft  |
  | ◊    | \Diamond \lozenge | ▸    | \blacktriangleright |

- **逻辑符号**

  | 图标 | LaTeX      | 图标 | LaTeX                |
  | ---- | ---------- | ---- | -------------------- |
  | ∀    | \forall    | ¬    | \neg                 |
  | ∃    | \exists    | ⧸R   | \not\operatorname{R} |
  | ∄    | \nexists   | ⊥    | \bot                 |
  | ∴    | \therefore | ⊤    | \top                 |
  | ∵    | \because   | ⊢    | \vdash               |
  | &    | \And       | ⊣    | \dashv               |
  | ∨    | \lor       | ⊨    | \vDash               |
  | ∨    | \vee       | ⊩    | \Vdash               |
  | ⋎    | \curlyvee  | ⊨    | \models              |
