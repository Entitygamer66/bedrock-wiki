import{_ as l,c as r,a as e,w as o,d as s,e as n,r as t,o as c}from"./404.md.3f1f215e.js";const v=JSON.parse('{"title":"On First World Load","description":"","frontmatter":{"title":"On First World Load","category":"On Event Systems","mentions":["BedrockCommands","zheaEvyline","SmokeyStack","cda94581"],"nav_order":6,"tags":["system"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Tick Json","slug":"tick-json","link":"#tick-json","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":2,"title":"Folder Structure","slug":"folder-structure","link":"#folder-structure","children":[]}],"relativePath":"commands/on-first-world-load.md"}'),d={name:"commands/on-first-world-load.md"},p=n('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This system will run your desired commands on the event that the world is loaded for the first time.</p><blockquote><p>Note: a <a href="/commands/mcfunctions.html">Function</a> Pack is required to achieve this system since it is the <code>tick.json</code> file which allows us to run commands as soon as the world is initialised.</p></blockquote><h2 id="tick-json" tabindex="-1">Tick Json <a class="header-anchor" href="#tick-json" aria-hidden="true">#</a></h2>',5),u=n(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">values</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">on_join</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-hidden="true">#</a></h2>`,2),m=n(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">scoreboard objectives add world dummy</span></span>
<span class="line"><span style="color:#C3E88D;">scoreboard players add world initialised 0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">execute if score world initialised 0 run say New world created!</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">scoreboard players set world initialised 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Here we have used an <code>execute - say</code> command as an example but you can use any command you prefer and as many as you require.</p><p>Just make sure to follow the given order and properly use the <code>execute if score</code> command as shown to run the commands you need.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><ul><li><strong><code>initialised=0</code></strong> this means the world has just initialised and we are yet to run the initlisation commands.</li><li><strong><code>initialised=1</code></strong> this means the world has been initialised and we have already run the initialisation commands.</li></ul><p>An objective of the name <code>world</code> is added for us to save scores to it so that we can track whether the world has been initialised or not. This also allows us to structure our commands to only execute at world initialisation.</p><p>Following the creation of the objective, a score of <code>0</code> is added to the FakePlayer name <code>initialised</code>. This will register it to the objective and enable us to use the <code>execute if score</code> command structure to run our desired commands.</p><p>Finally the score for <code>initialised</code> is set to 1 after all the commands are run in order to prevent it from executing more than once.</p><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-hidden="true">#</a></h2>`,9);function h(y,b,_,f,w,C){const a=t("CodeHeader"),i=t("FolderView");return c(),r("div",null,[p,e(a,null,{default:o(()=>[s("BP/functions/tick.json")]),_:1}),u,e(a,null,{default:o(()=>[s("BP/functions/initialise.mcfunction")]),_:1}),m,e(i,{paths:["BP","BP/functions","BP/pack_icon.png","BP/manifest.json","BP/functions/initialise.mcfunction","BP/functions/tick.json"]},null,8,["paths"]),s(" ## notes on Compatibbility The Scoreboard names (world in this case) may end up being used by other people. appending and _ and a set of randomly generated characters after world would be a choice that reduces the probability of colisions. Similar techniques can be employed for the filenames in the .mcfunction files. ")])}const k=l(d,[["render",h]]);export{v as __pageData,k as default};