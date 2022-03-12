import{e as n}from"./app.1cb6ce62.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u57FA\u4E8E-echarts-\u7684\u7EC4\u4EF6\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-echarts-\u7684\u7EC4\u4EF6\u5C01\u88C5" aria-hidden="true">#</a> \u57FA\u4E8E echarts \u7684\u7EC4\u4EF6\u5C01\u88C5</h1><p>\u7531\u4E8E echarts \u5728\u4F7F\u7528\u65F6\u90FD\u9700\u8981\u521D\u59CB\u5316\uFF0C\u4EE5\u53CA\u6CE8\u518C resize \u4E8B\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u90FD\u8981\u5199\u8FD9\u4E9B\u4EE3\u7801\uFF0C\u6240\u4EE5\u5C01\u88C5 echarts \u7EC4\u4EF6\u66F4\u65B9\u4FBF\u8C03\u7528\u3002</p><p>\u4ECE\u5916\u90E8\u4F20\u5165<strong>echart \u914D\u7F6E</strong>\u5E76\u5728\u7EC4\u4EF6\u5916\u6DFB\u52A0<strong>\u5BBD\u9AD8\u6837\u5F0F</strong>\uFF0C\u5373\u53EF\u5C55\u793A\u7EDF\u8BA1\u56FE\u8868\u3002</p><p><em>echarts \u56FE\u8868\u5C55\u793A\u4E00\u5B9A\u9700\u8981\u9650\u5B9A div \u5BBD\u9AD8\uFF0C\u5426\u5219\u4E0D\u4F1A\u663E\u793A</em>\u3002</p><h2 id="echart-\u6309\u9700\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#echart-\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> echart \u6309\u9700\u5F15\u5165</h2><p>echarts \u4F9D\u8D56\u5E93\u6BD4\u8F83\u5927\uFF0C\u907F\u514D\u5360\u7528\u8FC7\u591A\u7A7A\u95F4\uFF0C\u4F7F\u7528\u6309\u9700\u5F15\u5165\u662F\u6BD4\u8F83\u597D\u7684\u9009\u62E9\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165 echarts \u6838\u5FC3\u6A21\u5757\uFF0C\u6838\u5FC3\u6A21\u5757\u63D0\u4F9B\u4E86 echarts \u4F7F\u7528\u5FC5\u987B\u8981\u7684\u63A5\u53E3\u3002</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&quot;echarts/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165\u67F1\u72B6\u56FE\u56FE\u8868\uFF0C\u56FE\u8868\u540E\u7F00\u90FD\u4E3A Chart</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BarChart<span class="token punctuation">,</span> PieChart<span class="token punctuation">,</span> LineChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/charts&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165\u63D0\u793A\u6846\uFF0C\u6807\u9898\uFF0C\u76F4\u89D2\u5750\u6807\u7CFB\uFF0C\u6570\u636E\u96C6\uFF0C\u5185\u7F6E\u6570\u636E\u8F6C\u6362\u5668\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u540E\u7F00\u90FD\u4E3A Component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  TitleComponent<span class="token punctuation">,</span>
  LegendComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  DatasetComponent<span class="token punctuation">,</span>
  TransformComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/components&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6807\u7B7E\u81EA\u52A8\u5E03\u5C40\uFF0C\u5168\u5C40\u8FC7\u6E21\u52A8\u753B\u7B49\u7279\u6027</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LabelLayout<span class="token punctuation">,</span> UniversalTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/features&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165 Canvas \u6E32\u67D3\u5668\uFF0C\u6CE8\u610F\u5F15\u5165 CanvasRenderer \u6216\u8005 SVGRenderer \u662F\u5FC5\u987B\u7684\u4E00\u6B65</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/renderers&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6CE8\u518C\u5FC5\u987B\u7684\u7EC4\u4EF6</span>
echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  DatasetComponent<span class="token punctuation">,</span>
  TransformComponent<span class="token punctuation">,</span>
  LegendComponent<span class="token punctuation">,</span>
  BarChart<span class="token punctuation">,</span>
  PieChart<span class="token punctuation">,</span>
  LineChart<span class="token punctuation">,</span>
  LabelLayout<span class="token punctuation">,</span>
  UniversalTransition<span class="token punctuation">,</span>
  CanvasRenderer<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> echarts<span class="token punctuation">;</span>
</code></pre></div><p>\u5982\u679C\u6253\u5305\u65B9\u5F0F\u4F7F\u7528 vite\uFF0C\u53EF\u4EE5\u5728 vite.config.js \u4E2D\u52A0\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u5206\u5757\u6253\u5305\uFF0C\u51CF\u5C0F index \u6587\u4EF6\u4F53\u79EF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6253\u5305\u4F18\u5316\uFF0C\u5206\u5757\u6253\u5305\uFF0C\u51CF\u5C0Findex\u6587\u4EF6\u4F53\u79EF</span>
        <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">echarts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;echarts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5C01\u88C5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C01\u88C5\u7EC4\u4EF6</h2><p>echarts-box.vue</p><p>\u5C55\u793Aecharts\u7684div\u4F7F\u7528\u968F\u673Aid\u3002</p><p>\u4E3A\u4E86\u517C\u5BB9\u4E00\u4E9B\u7A7A\u6570\u636E\u60C5\u51B5\uFF0C\u65E0\u914D\u7F6E\u6216\u65E0\u63A5\u53E3\u6570\u636E\u65F6\uFF0C\u663E\u793A\u6682\u65E0\u6570\u636E\u3002</p><p>\u5916\u5C42\u518D\u5305\u88F9\u4E00\u5C42div\uFF0C\u9ED8\u8BA4\u5BBD\u9AD8\u5747\u4E3A100%\uFF0C\u4F7F\u7528\u65F6\u5019\u9700\u8981\u52A0\u4E0A\u5177\u4F53\u7684\u5BBD\u9AD8\u6837\u5F0F\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module-box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element-loading-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6B63\u5728\u52A0\u8F7D\u4E2D<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!loading &amp;&amp; !showChart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-data abs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6682\u65E0\u6570\u636E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-box<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&quot;./echarts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chart</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showChart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">initChart</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>showChart <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>showChart <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resizeHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">initResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resizeHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resizeHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;chart&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>showChart <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">destroyResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9500\u6BC1echarts\u5B9E\u4F8B</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">destroyResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token selector">.module-box </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.chart-box </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.no-data </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><p>\u8C03\u7528\u7EC4\u4EF6\u7684initChart\u65B9\u6CD5\uFF0C\u4F20\u5165echarts\u914D\u7F6E\uFF0C\u5373\u53EF\u5C55\u793Aecharts\u56FE\u8868\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>echarts-box</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>echarts-box</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//echarts\u914D\u7F6E</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>echart<span class="token punctuation">.</span><span class="token function">initChart</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
</code></pre></div>`,21);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
