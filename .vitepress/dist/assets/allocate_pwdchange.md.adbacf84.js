import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19f61efe.js";const h=JSON.parse('{"title":"密码修改","description":"","frontmatter":{},"headers":[],"relativePath":"allocate/pwdchange.md","filePath":"allocate/pwdchange.md"}'),l={name:"allocate/pwdchange.md"},o=p(`<h1 id="密码修改" tabindex="-1">密码修改 <a class="header-anchor" href="#密码修改" aria-label="Permalink to &quot;密码修改&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">baseurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://27.115.19.21:8022/airimp/index.php&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apiurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/User/changepassword&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;POST&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">token</span><span style="color:#E1E4E8;">: token,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">userid</span><span style="color:#E1E4E8;">: userId,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">password</span><span style="color:#E1E4E8;">: oldPassword,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">newpassword</span><span style="color:#E1E4E8;">: newPassword,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">baseurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://27.115.19.21:8022/airimp/index.php&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apiurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/User/changepassword&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;POST&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">token</span><span style="color:#24292E;">: token,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">userid</span><span style="color:#24292E;">: userId,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">password</span><span style="color:#24292E;">: oldPassword,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">newpassword</span><span style="color:#24292E;">: newPassword,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{h as __pageData,_ as default};
