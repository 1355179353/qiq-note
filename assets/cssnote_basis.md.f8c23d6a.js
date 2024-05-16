import{_ as s,o as n,c as a,O as l}from"./chunks/framework.16bbc80c.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cssnote/basis.md","filePath":"cssnote/basis.md"}'),p={name:"cssnote/basis.md"},e=l(`<h1>CSS基础</h1><h3 id="css-使用方法" tabindex="-1">css 使用方法 <a class="header-anchor" href="#css-使用方法" aria-label="Permalink to &quot;css 使用方法&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">外部：&lt;link rel=&quot;stylesheet&quot; href=&quot;&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    或</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @import url(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">内部：&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        选择器{</span></span>
<span class="line"><span style="color:#A6ACCD;">                属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="选择器类型" tabindex="-1">选择器类型 <a class="header-anchor" href="#选择器类型" aria-label="Permalink to &quot;选择器类型&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、标签选择器</span></span>
<span class="line"><span style="color:#A6ACCD;">    标签名{</span></span>
<span class="line"><span style="color:#A6ACCD;">            属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2、类选择器</span></span>
<span class="line"><span style="color:#A6ACCD;">    .类名{</span></span>
<span class="line"><span style="color:#A6ACCD;">            属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3、ID选择器</span></span>
<span class="line"><span style="color:#A6ACCD;">    #id名{</span></span>
<span class="line"><span style="color:#A6ACCD;">            属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4、复合选择器(标签选择器和类选择器或ID选择器组合)</span></span>
<span class="line"><span style="color:#A6ACCD;">示例：</span></span>
<span class="line"><span style="color:#A6ACCD;">   p.hehe{</span></span>
<span class="line"><span style="color:#A6ACCD;">            属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">    p#heh{</span></span>
<span class="line"><span style="color:#A6ACCD;">            属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5、组合选择器(集体声明，将多个选择器放在一起声明，使用逗号&quot;,&quot;隔开)</span></span>
<span class="line"><span style="color:#A6ACCD;">    h1,h2,.hehe,#heh{</span></span>
<span class="line"><span style="color:#A6ACCD;">        属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6、嵌套选择器(多层嵌套关系。&gt;表示父子关系，空格表示后代关系)</span></span>
<span class="line"><span style="color:#A6ACCD;">    div&gt;span{</span></span>
<span class="line"><span style="color:#A6ACCD;">        属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    div span{</span></span>
<span class="line"><span style="color:#A6ACCD;">        属性名：属性值</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>选择器优先级： !important &gt; 行内样式(权重 1000) &gt; ID 选择器(权重 100) &gt; 类选择器(权重 10) &gt; 标签选择器(权重 1)<br> 内外部样式加载顺序：就近原则<br> 原因：按照书写顺序依次加载，在<mark>优先级相同的前提下</mark>，后加载的会覆盖先加载的同名样式，所以里的越近越优先</p></div><h3 id="a-标签伪类选择器" tabindex="-1">a 标签伪类选择器 <a class="header-anchor" href="#a-标签伪类选择器" aria-label="Permalink to &quot;a 标签伪类选择器&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">四种状态。顺序从上到下</span></span>
<span class="line"><span style="color:#A6ACCD;">:link 未访问的链接</span></span>
<span class="line"><span style="color:#A6ACCD;">:visited  已访问的链接</span></span>
<span class="line"><span style="color:#A6ACCD;">:hover  鼠标悬浮在链接上</span></span>
<span class="line"><span style="color:#A6ACCD;">:active  选定的链接，被激活</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="伪元素选择器" tabindex="-1">伪元素选择器 <a class="header-anchor" href="#伪元素选择器" aria-label="Permalink to &quot;伪元素选择器&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::first-letter为第一个字符添加样式</span></span>
<span class="line"><span style="color:#A6ACCD;">::first-line为第一行添加样式</span></span>
<span class="line"><span style="color:#A6ACCD;">::before 在元素内容最前面添加内容，需要配合content一起使用</span></span>
<span class="line"><span style="color:#A6ACCD;">::after在元素内容最后面添加内容，需要配合content一起使用</span></span>
<span class="line"><span style="color:#A6ACCD;">示例：</span></span>
<span class="line"><span style="color:#A6ACCD;">    xx::before/after{</span></span>
<span class="line"><span style="color:#A6ACCD;">        content:&quot;哈哈哈&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,10),r=[e];function c(t,i,o,b,C,A){return n(),a("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
