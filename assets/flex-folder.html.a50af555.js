import{o,c as e,a as n,F as c,f as u,n as l,d as k,e as r,t as d}from"./app.1cb6ce62.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const h={data(){return{hidden:{left:!1,right:!1}}},computed:{getIconStyle(){return a=>({left:{false:"unfold-left",true:"fold-left"},right:{false:"unfold-right",true:"fold-right"}})[a][this.hidden[a]]}},methods:{setHidden(a){this.hidden[a]=!this.hidden[a]}}},v=n("h1",{id:"flex\u53CA\u4F38\u7F29\u5E03\u5C40\u5E94\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flex\u53CA\u4F38\u7F29\u5E03\u5C40\u5E94\u7528","aria-hidden":"true"},"#"),k(" flex\u53CA\u4F38\u7F29\u5E03\u5C40\u5E94\u7528")],-1),f=n("p",null,"\u4E00\u822C\u5C55\u793A\u5927\u5C4F\u9996\u9875\u4F1A\u5206\u4E3Aheader\u3001nav\u548Cmain\u4E09\u5757\u533A\u57DF\uFF0Cmain\u5219\u5305\u62EC\u5DE6\u4E2D\u53F3\u4E09\u90E8\u5206\uFF0C\u5DE6\u53F3\u9762\u677F\u53EF\u4F38\u7F29\u3002",-1),m=n("p",null,"\u6574\u4F53\u5E03\u5C40\u6837\u5F0F\u4F7F\u7528css flex\uFF0C\u5E76\u901A\u8FC7\u8BBE\u5B9A\u5BBD\u5EA6\u8FBE\u5230\u53EF\u4F38\u7F29\u6548\u679C\u3002",-1),y={class:"page-wrapper"},q=n("div",{class:"header"},[n("div",{class:"title-container"}," TITLE ")],-1),_={class:"nav"},w={class:"menu-list"},x={class:"menu-item"},b={class:"main"},S={class:"screen-wrapper"},I={class:"left-container"},j={class:"center-wrapper"},H=n("div",{class:"center-container"},[n("img",{src:"https://pic.rmb.bdstatic.com/84cb44574e34a00b62da54a18ca0d370.jpeg"})],-1),F={class:"right-container"},N=r(`<p>\u4E3B\u8981\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-wrapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ hide: hidden.left }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fold-icon left-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getIconStyle(<span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setHidden(<span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fold-icon right-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getIconStyle(<span class="token punctuation">&#39;</span>right<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setHidden(<span class="token punctuation">&#39;</span>right<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-wrapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ hide: hidden.right }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getIconStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//icon\u56FE\u6807</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token boolean">false</span><span class="token operator">:</span> <span class="token string">&#39;unfold-left&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">:</span> <span class="token string">&#39;fold-left&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token boolean">false</span><span class="token operator">:</span> <span class="token string">&#39;unfold-right&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">:</span> <span class="token string">&#39;fold-right&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> map<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>hidden<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setHidden</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u63A7\u5236\u5DE6\u53F3\u4E24\u4FA7\u9762\u677F\u663E\u9690</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>hidden<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>hidden<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9875\u9762\u6574\u4F53\u5E03\u5C40\u4F7F\u7528flex\uFF0Cheader\u548Cnav\u56FA\u5B9A\u5BBD\u5EA6\uFF0Cmain\u5360\u6EE1\u5269\u4F59\u7A7A\u95F4\u3002</p><p>\u6536\u7F29\u6309\u94AE\u653E\u5728main\u533A\u57DF\u7684center\u4E2D\u3002</p><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token selector">.page-wrapper </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token selector">.header </span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.nav </span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.main </span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> 
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token selector">.screen-wrapper </span><span class="token punctuation">{</span> <span class="token comment">//\u5360\u6EE1\u5143\u7D20\u7A7A\u95F4</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token selector">.left-wrapper,
      .right-wrapper </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">//\u6307\u5B9A\u5BBD\u5EA6</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.center-wrapper </span><span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0 16px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token selector">.center-container </span><span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.fold-icon </span><span class="token punctuation">{</span> <span class="token comment">//\u4F38\u7F29\u6309\u94AE\u6837\u5F0F\uFF0C\u5C45\u4E2D</span>
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
          <span class="token property">z-index</span><span class="token punctuation">:</span> 99<span class="token punctuation">;</span>
          <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>

          <span class="token selector"><span class="token parent important">&amp;</span>.left-icon,
          <span class="token parent important">&amp;</span>.right-icon </span><span class="token punctuation">{</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token selector"><span class="token parent important">&amp;</span>.left-icon </span><span class="token punctuation">{</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token selector"><span class="token parent important">&amp;</span>.right-icon </span><span class="token punctuation">{</span>
            <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F38\u7F29\u6837\u5F0F</p><p>\u901A\u8FC7\u8BBE\u5B9A\u5DE6\u53F3\u4E24\u4FA7\u6536\u8D77\u65F6\u5BBD\u5EA6\u4E3A0\uFF0Coverflow\u4E3Ahidden\uFF0C\u4EE5\u53CA\u52A0\u4E0A\u53D8\u5316\u7684\u6548\u679C\uFF0C\u8FBE\u5230\u4F38\u7F29\u6548\u679C\u3002</p><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token selector">.left-wrapper,
.right-wrapper </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>.hide </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.center-wrapper </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token selector">.center-container </span><span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.left-wrapper,
.right-wrapper,
.center-wrapper,
.fold-icon </span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div>`,9);function B(a,t,C,E,i,p){return o(),e(c,null,[v,f,m,n("div",y,[q,n("div",_,[n("div",w,[(o(),e(c,null,u(6,s=>n("div",{key:s,class:"menu"},[n("div",x," MENU "+d(s),1)])),64))])]),n("div",b,[n("div",S,[n("div",{class:l(["left-wrapper",{hide:i.hidden.left}])},[n("div",I,[(o(),e(c,null,u(3,s=>n("div",{key:s,class:"tile-wrapper"})),64))])],2),n("div",j,[n("div",{class:l(["fold-icon left-icon",p.getIconStyle("left")]),onClick:t[0]||(t[0]=s=>p.setHidden("left"))},null,2),n("div",{class:l(["fold-icon right-icon",p.getIconStyle("right")]),onClick:t[1]||(t[1]=s=>p.setHidden("right"))},null,2),H]),n("div",{class:l(["right-wrapper",{hide:i.hidden.right}])},[n("div",F,[(o(),e(c,null,u(3,s=>n("div",{key:s,class:"tile-wrapper"})),64))])],2)])])]),N],64)}var z=g(h,[["render",B]]);export{z as default};
