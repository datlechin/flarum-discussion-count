(()=>{var t={n:n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return t.d(o,{a:o}),o},d:(n,o)=>{for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)};(()=>{"use strict";const n=flarum.core.compat["forum/app"];var o=t.n(n);const e=flarum.core.compat["common/extend"],r=flarum.core.compat["tags/components/TagLinkButton"];var a=t.n(r);const c=flarum.core.compat["tags/components/TagsPage"];var s=t.n(c);const i=flarum.core.compat["common/utils/classList"];var l=t.n(i);const u=flarum.core.compat["tags/common/helpers/tagIcon"];var f=t.n(u);const d=flarum.core.compat["common/components/Link"];var p=t.n(d);const g=flarum.core.compat["tags/common/utils/sortTags"];var v=t.n(g);o().initializers.add("datlechin/flarum-discussion-count",(function(){(0,e.override)(a().prototype,"view",(function(){var t=this.attrs.model,n=t&&t.description(),e=l()(["TagLinkButton","hasIcon",this.attrs.className,t.isChild()&&"child"]);return m(p(),{className:e,href:this.attrs.route,style:t?{"--color":t.color()}:"",title:n||""},f()(t,{className:"Button-icon"}),m("span",{className:"Button-label"},t?t.name():o().translator.trans("flarum-tags.forum.index.untagged_link")," (",t.discussionCount(),")"))})),(0,e.extend)(s().prototype,["oncreate"],(function(){var t=this.tags;document.querySelectorAll(".TagTile-info").forEach((function(n){var o=n.querySelector(".TagTile-name").innerText,e=t.find((function(t){return t.name()===o})),r=v()(e.children()||[]),a=e.discussionCount();n.querySelectorAll(".TagTile-children a").forEach((function(t){var n=t.innerText,o=r.find((function(t){return t.name()===n})),e=o.discussionCount();t.innerText=n+" ("+e+")"})),n.querySelector(".TagTile-name").innerText+=" ("+a+")"}))}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map