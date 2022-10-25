import{_ as o,c as r,a as e,w as a,e as n,r as p,o as c,d as t}from"./404.md.0f2b774b.js";const R='{"title":"Script API","description":"","frontmatter":{"title":"Script API","category":"Script API","tags":["experimental"],"mentions":["cda94581"]},"headers":[{"level":2,"title":"Using Scripts","slug":"using-scripts"},{"level":2,"title":"Reference Documentation","slug":"reference-documentation"}],"relativePath":"scripting/game-tests.md"}',i={},l=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The Script API requires you to activate <strong>&quot;Beta APIs&quot;</strong>, <strong>&quot;Enable GameTest Framework&quot;</strong>, or <strong>&quot;GameTest Framework&quot;</strong> in your world settings, and you must be using <strong>Minecraft 1.16.210.60 beta or above</strong>.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft beta 1.19.40.23</p></div><p>The Script API (formerly GameTests, and not to be confused with the <a href="/scripting/scripting-intro.html">Legacy Scripting API</a>) is a beta feature that allows for a new variety of creations, as well as unit tests (&quot;GameTests&quot;) to make it easier to test if game mechanics work. These are built with JavaScript files in the behavior pack folder.</p><h2 id="using-scripts" tabindex="-1">Using Scripts <a class="header-anchor" href="#using-scripts" aria-hidden="true">#</a></h2><p>In the behavior pack manifest, you need to add a <code>javascript</code> module (below 1.19.0) or <code>script</code> module (1.19.0+) and set an <code>entry</code> point for your GameTests.</p>',5),u=t("Minecraft 1.19.0+"),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;239c134f-67bf-4738-9bcc-8c69d31b1f72&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/gametests/Main.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1),d=t("Minecraft version below 1.19.0"),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;239c134f-67bf-4738-9bcc-8c69d31b1f72&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/gametests/Main.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Additionally, dependencies will need to be set based on modules used</p><p><strong>@minecraft/server</strong> - <code>b26a4d4c-afdf-4690-88f8-931846312678</code><br> AKA &quot;Minecraft&quot;, &quot;mojang-minecraft&quot;</p><p><strong>@minecraft/server-gametest</strong> - <code>6f4b6893-1bb6-42fd-b458-7fa3d0c89616</code><br> AKA &quot;GameTest&quot;, &quot;mojang-gametest&quot;</p><p><strong>@minecraft/server-ui</strong> - <code>2bd50a27-ab5f-4f40-a596-3641627c635e</code><br> Beta 1.18.20.21+ (Release 1.18.30+)<br> AKA &quot;mojang-minecraft-ui&quot;</p><p><strong>@minecraft/server-admin</strong> - <code>53d7f2bf-bf9c-49c4-ad1f-7c803d947920</code><br> BDS module for configuration of variables and secrets. Cannot be used on Minecraft clients.<br> Release 1.19.10+<br> AKA &quot;mojang-minecraft-server-admin&quot;</p><p><strong>@minecraft/server-net</strong> - <code>777b1798-13a6-401c-9cba-0cf17e31a81b</code><br> BDS module for executing HTTP-based requests. Cannot be used on Minecraft clients.<br> Release 1.19.10+<br> AKA &quot;mojang-net&quot;</p><p><strong>Version</strong></p><ul><li>Before 1.19.20 - <code>[ 0, 1, 0 ]</code></li><li>1.19.20+ - <code>&quot;1.0.0-beta&quot;</code></li></ul><p>As of release 1.19.30, you can also specify dependencies using <code>module_name</code>:</p>`,10),f=t("BP/manifest.json#dependencies[0]"),k=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;module_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0-beta&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>(Beta 1.19.40.23+) In order to use the <code>eval()</code> function or <code>Function()</code> constructor, specify in the manifest capabilities:</p>`,2),_=t("BP/manifest.json"),g=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;capabilities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;script_eval&quot;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The entry point contains scripts and/or imports to other script files.</p>`,2),h=t("BP/scripts/gametests/Main.js"),v=n(`<div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;./MyGameTest.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./OtherGameTest.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1),T=t("BP/scripts/gametests/MyGameTest.js"),q=n(`<div class="language-js line-numbers-mode"><pre><code><span class="token comment">// This file demonstrates that the code is working by</span>
<span class="token comment">// Spamming the chat with &quot;Hello World&quot;</span>
 
<span class="token comment">// Import world component from &quot;@minecraft/server&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@minecraft/server&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Import variables from other javascript file</span>
<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./OtherGameTest.js&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Spams the chat with &quot;Hello World&quot;</span>
world<span class="token punctuation">.</span>events<span class="token punctuation">.</span>tick<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// Runs command in overworld dimension</span>
	world<span class="token punctuation">.</span><span class="token function">getDimension</span><span class="token punctuation">(</span><span class="token string">&quot;overworld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">runCommand</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">say Hello World</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1),w=t("BP/scripts/gametests/OtherGameTest.js"),y=n(`<div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">defaultExport</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> export1 <span class="token operator">=</span> <span class="token string">&quot;export1&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>GameTests can be used with the <code>/gametest</code> command.</p><ul><li><code>/gametest runthis</code> - Runs the nearest GameTest in range.</li><li><code>/gametest runthese</code> - Runs all GameTests in range.</li><li><code>/gametest pos</code> - It tells you the relative coordinates of the nearest GameTest.</li><li><code>/gametest clearall [radius: int]</code> - Removes all GameTests in the specified radius.</li><li><code>/gametest run &lt;testName: GameTestName&gt; [rotationSteps: int]</code> - Creates and runs the specified GameTest.</li><li><code>/gametest runset [tagTag: GameTestTag] [rotationSteps: int]</code> - Creates and runs all GameTests with the specified tag.</li><li><code>/gametest create &lt;testName: string&gt; [width: int] [height: int] [depth: int]</code> - Creates a blank GameTest area with the specified dimensions.</li><li><code>/reload</code> - Reloads all function and script files from all behavior packs. (1.19+)</li></ul><h2 id="reference-documentation" tabindex="-1">Reference Documentation <a class="header-anchor" href="#reference-documentation" aria-hidden="true">#</a></h2><p>Official documentation on are hosted on Microsoft Learn and can be found here:</p><ul><li><a href="https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft" target="_blank" rel="noopener noreferrer"><code>@minecraft/server</code></a></li><li><a href="https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-gametest</code></a></li><li><a href="https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-ui</code></a></li><li><a href="https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-admin</code></a></li><li><a href="https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-net</code></a></li></ul><p>Official typescript declarations can be found here:</p><ul><li><a href="https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.11940b23" target="_blank" rel="noopener noreferrer"><code>@minecraft/server</code></a></li><li><a href="https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.11940b23" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-gametest</code></a></li><li><a href="https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.11940b23" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-ui</code></a></li><li><a href="https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.11940b23" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-admin</code></a></li><li><a href="https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.11940b23" target="_blank" rel="noopener noreferrer"><code>@minecraft/server-net</code></a></li></ul><p>These allow for enhanced auto-completions and validation when used inside of your editor.</p><ul><li>bridge. v2: ships with GameTest support built-in.</li><li>Visual Studio Code: install Node.js and npm, then run the following in command line:</li></ul><div class="language-"><pre><code>npm install @minecraft/server
npm install @minecraft/server-gametest
npm install @minecraft/server-ui
npm install @minecraft/server-admin
npm install @minecraft/server-net
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If you&#39;re having issues with the Script API, consider joining <strong>Bedrock Add-Ons</strong> for support, which you can find alongside a vast array of other resources on the <a href="/meta/useful-links.html#discord-links">Useful Links</a> page!</p>`,12);function A(j,S,I,P,C,G){const s=p("CodeHeader");return c(),r("div",null,[l,e(s,null,{default:a(()=>[u]),_:1}),m,e(s,null,{default:a(()=>[d]),_:1}),b,e(s,null,{default:a(()=>[f]),_:1}),k,e(s,null,{default:a(()=>[_]),_:1}),g,e(s,null,{default:a(()=>[h]),_:1}),v,e(s,null,{default:a(()=>[T]),_:1}),q,e(s,null,{default:a(()=>[w]),_:1}),y])}var N=o(i,[["render",A]]);export{R as __pageData,N as default};