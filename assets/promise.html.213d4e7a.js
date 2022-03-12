import{e as n}from"./app.1cb6ce62.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u671F\u7EA6-promise" tabindex="-1"><a class="header-anchor" href="#\u671F\u7EA6-promise" aria-hidden="true">#</a> \u671F\u7EA6\uFF08Promise\uFF09</h1><h2 id="\u4E32\u884C\u671F\u7EA6" tabindex="-1"><a class="header-anchor" href="#\u4E32\u884C\u671F\u7EA6" aria-hidden="true">#</a> \u4E32\u884C\u671F\u7EA6</h2><p><strong>\u4F7F\u7528\u573A\u666F</strong>\uFF1A\u9700\u8981\u6279\u91CF\u8FDB\u884C\u4E00\u7EC4\u8BF7\u6C42\uFF0C\u7531\u4E8E\u540E\u53F0\u9650\u5236\uFF0C\u4E0D\u53EF\u5E76\u53D1\u6267\u884C\uFF0C\u53EA\u80FD\u6309\u987A\u5E8F\u4E00\u4E2A\u4E2A\u6267\u884C\uFF0C\u540C\u65F6\u663E\u793A\u8BF7\u6C42\u8FDB\u5EA6\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetchSequentially</span><span class="token punctuation">(</span><span class="token parameter">ids</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> doneCount <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">function</span> <span class="token function">fetchOne</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        doneCount<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5DF2\u5B8C\u6210: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>doneCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ids<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token comment">//fetch() \u5047\u5B9A\u4E00\u4E2A\u5F02\u6B65API\u8BF7\u6C42</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u6784\u9020\u671F\u7EA6\u94FE</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">//\u4EE5\u4E00\u4E2A\u7ACB\u5373\uFF08\u4EE5undefined\u503C\uFF09\u5151\u73B0\u7684\u671F\u7EA6\u5F00\u59CB</span>

    <span class="token comment">//\u6839\u636E\u4F20\u5165\u7684\u8BF7\u6C42\u53C2\u6570\u6784\u5EFA\u4EFB\u610F\u957F\u5EA6\u7684\u671F\u7EA6</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> id <span class="token keyword">of</span> ids<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetchOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u8BF7\u6C42\u5168\u90E8\u7ED3\u675F</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token function">fetchSequentially</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5E76\u884C\u671F\u7EA6" tabindex="-1"><a class="header-anchor" href="#\u5E76\u884C\u671F\u7EA6" aria-hidden="true">#</a> \u5E76\u884C\u671F\u7EA6</h2><p><strong>Promise.all()</strong></p><p>promise.all \u63A5\u6536\u4E00\u7EC4 promise\uFF0C\u5E76\u53D1\u6267\u884C\u6240\u6709\u671F\u7EA6\uFF0C\u5F53\u5168\u90E8\u5151\u73B0\uFF08fulfilled\uFF09\u8FD4\u56DE\u7ED3\u679C\u6570\u7EC4\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A promise \u5931\u8D25\uFF0C\u7ACB\u5373\u8FD4\u56DE\u7ED3\u679C\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  p2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,8);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
