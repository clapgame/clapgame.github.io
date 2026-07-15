import"./modulepreload-polyfill-B5Qt9EMX.js";function j(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var T=j();function ae(n){T=n}var $={exec:()=>null};function z(n){let e=[];return t=>{let s=Math.max(0,Math.min(3,t-1)),r=e[s];return r||(r=n(s),e[s]=r),r}}function u(n,e=""){let t=typeof n=="string"?n:n.source,s={replace:(r,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(x.caret,"$1"),t=t.replace(r,l),s},getRegex:()=>new RegExp(t,e)};return s}var ye=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:z(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:z(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:z(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:z(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:z(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:z(n=>new RegExp(`^ {0,${n}}>`))},Re=/^(?:[ \t]*(?:\n|$))+/,$e=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Se=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,I=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Te=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,N=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,oe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ce=u(oe).replace(/bull/g,N).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ze=u(oe).replace(/bull/g,N).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),O=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ae=/^[^\n]+/,G=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_e=u(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",G).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Pe=u(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,N).getRegex(),v="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",X=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Le=u("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n+|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n+|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n+|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",X).replace("tag",v).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),he=n=>u(O).replace("hr",I).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list",n).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex(),Ie=he(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Ee=he(/ {0,3}(?:[*+-]|\d{1,9}[.)])[ \t]+[^ \t\n]/),Ce=u(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ee).getRegex(),W={blockquote:Ce,code:$e,def:_e,fences:Se,heading:Te,hr:I,html:Le,lheading:ce,list:Pe,newline:Re,paragraph:Ie,table:$,text:Ae},ee=u("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",I).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex(),Be={...W,lheading:ze,table:ee,paragraph:u(O).replace("hr",I).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ee).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex()},qe={...W,html:u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",X).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:u(O).replace("hr",I).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ce).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ve=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ze=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,pe=/^( {2,}|\\)\n(?!\s*$)/,De=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,A=/[\p{P}\p{S}]/u,Z=/[\s\p{P}\p{S}]/u,F=/[^\s\p{P}\p{S}]/u,Me=u(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Z).getRegex(),ue=/(?!~)[\p{P}\p{S}]/u,Qe=/(?!~)[\s\p{P}\p{S}]/u,He=/(?:[^\s\p{P}\p{S}]|~)/u,je=u(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ye?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ge=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ne=u(ge,"u").replace(/punct/g,A).getRegex(),Oe=u(ge,"u").replace(/punct/g,ue).getRegex(),ke="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ge=u(ke,"gu").replace(/notPunctSpace/g,F).replace(/punctSpace/g,Z).replace(/punct/g,A).getRegex(),Xe=u(ke,"gu").replace(/notPunctSpace/g,He).replace(/punctSpace/g,Qe).replace(/punct/g,ue).getRegex(),We=u("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,F).replace(/punctSpace/g,Z).replace(/punct/g,A).getRegex(),Fe=u(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,A).getRegex(),Ue="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Je=u(Ue,"gu").replace(/notPunctSpace/g,F).replace(/punctSpace/g,Z).replace(/punct/g,A).getRegex(),Ke=u(/\\(punct)/,"gu").replace(/punct/g,A).getRegex(),Ve=u(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ye=u(X).replace("(?:-->|$)","-->").getRegex(),et=u("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ye).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),C=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,tt=u(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",C).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fe=u(/^!?\[(label)\]\[(ref)\]/).replace("label",C).replace("ref",G).getRegex(),de=u(/^!?\[(ref)\](?:\[\])?/).replace("ref",G).getRegex(),nt=u("reflink|nolink(?!\\()","g").replace("reflink",fe).replace("nolink",de).getRegex(),te=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,U={_backpedal:$,anyPunctuation:Ke,autolink:Ve,blockSkip:je,br:pe,code:Ze,del:$,delLDelim:$,delRDelim:$,emStrongLDelim:Ne,emStrongRDelimAst:Ge,emStrongRDelimUnd:We,escape:ve,link:tt,nolink:de,punctuation:Me,reflink:fe,reflinkSearch:nt,tag:et,text:De,url:$},rt={...U,link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",C).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",C).getRegex()},M={...U,emStrongRDelimAst:Xe,emStrongLDelim:Oe,delLDelim:Fe,delRDelim:Je,url:u(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",te).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:u(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",te).getRegex()},st={...M,br:u(pe).replace("{2,}","*").getRegex(),text:u(M.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},E={normal:W,gfm:Be,pedantic:qe},P={normal:U,gfm:M,breaks:st,pedantic:rt},it={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ne=n=>it[n];function m(n,e){if(e){if(x.escapeTest.test(n))return n.replace(x.escapeReplace,ne)}else if(x.escapeTestNoEncode.test(n))return n.replace(x.escapeReplaceNoEncode,ne);return n}function re(n){try{n=encodeURI(n).replace(x.percentDecode,"%")}catch{return null}return n}function se(n,e){let t=n.replace(x.findPipe,(i,l,a)=>{let c=!1,o=l;for(;--o>=0&&a[o]==="\\";)c=!c;return c?"|":" |"}),s=t.split(x.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(x.slashPipe,"|");return s}function R(n,e,t){let s=n.length;if(s===0)return"";let r=0;for(;r<s&&n.charAt(s-r-1)===e;)r++;return n.slice(0,s-r)}function ie(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&x.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function lt(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])t++;else if(n[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function at(n,e=0){let t=e,s="";for(let r of n)if(r==="	"){let i=4-t%4;s+=" ".repeat(i),t+=i}else s+=r,t++;return s}function le(n,e,t,s,r){let i=e.href,l=e.title||null,a=n[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:l,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,c}function ot(n,e,t){let s=n.match(t.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(i=>{let l=i.match(t.other.beginningSpace);if(l===null)return i;let[a]=l;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var B=class{options;rules;lexer;constructor(n){this.options=n||T}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:ie(e[0]),s=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:s}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],s=ot(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=R(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:R(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:R(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=R(e[0],`
`).split(`
`),s="",r="",i=[];for(;t.length>0;){let l=!1,a=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))a.push(t[c]),l=!0;else if(!l)a.push(t[c]);else break;t=t.slice(c);let o=a.join(`
`),p=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${o}`:o,r=r?`${r}
${p}`:p;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,i,!0),this.lexer.state.top=h,t.length===0)break;let g=i.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let d=g,f=d.raw+`
`+t.join(`
`),y=this.blockquote(f);i[i.length-1]=y,s=s.substring(0,s.length-d.raw.length)+y.raw,r=r.substring(0,r.length-d.text.length)+y.text;break}else if(g?.type==="list"){let d=g,f=d.raw+`
`+t.join(`
`),y=this.list(f);i[i.length-1]=y,s=s.substring(0,s.length-g.raw.length)+y.raw,r=r.substring(0,r.length-d.raw.length)+y.raw,t=f.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),s=t.length>1,r={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");let i=this.rules.other.listItemRegex(t),l=!1;for(;n;){let c=!1,o="",p="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let h=at(e[2].split(`
`,1)[0],e[1].length),g=n.split(`
`,1)[0],d=!h.trim(),f=0;if(this.options.pedantic?(f=2,p=h.trimStart()):d?f=e[1].length+1:(f=h.search(this.rules.other.nonSpaceChar),f=f>4?1:f,p=h.slice(f),f+=e[1].length),d&&this.rules.other.blankLine.test(g)&&(o+=g+`
`,n=n.substring(g.length+1),c=!0),!c){let y=this.rules.other.nextBulletRegex(f),K=this.rules.other.hrRegex(f),V=this.rules.other.fencesBeginRegex(f),Y=this.rules.other.headingBeginRegex(f),we=this.rules.other.htmlBeginRegex(f),me=this.rules.other.blockquoteBeginRegex(f);for(;n;){let D=n.split(`
`,1)[0],_;if(g=D,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),_=g):_=g.replace(this.rules.other.tabCharGlobal,"    "),V.test(g)||Y.test(g)||we.test(g)||me.test(g)||y.test(g)||K.test(g))break;if(_.search(this.rules.other.nonSpaceChar)>=f||!g.trim())p+=`
`+_.slice(f);else{if(d||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||V.test(h)||Y.test(h)||K.test(h))break;p+=`
`+g}d=!g.trim(),o+=D+`
`,n=n.substring(D.length+1),h=_.slice(f)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(l=!0)),r.items.push({type:"list_item",raw:o,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),r.raw+=o}let a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c of r.items){this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]);let o=c.tokens[0];if(c.task&&(o?.type==="text"||o?.type==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),o.raw=o.raw.replace(this.rules.other.listReplaceTask,""),o.text=o.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(c.raw);if(p){let h={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};c.checked=h.checked,r.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=h.raw+c.tokens[0].raw,c.tokens[0].text=h.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(h)):c.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):c.tokens.unshift(h)}}else c.task&&(c.task=!1);if(!r.loose){let p=c.tokens.filter(g=>g.type==="space"),h=p.length>0&&p.some(g=>this.rules.other.anyLine.test(g.raw));r.loose=h}}if(r.loose)for(let c of r.items){c.loose=!0;for(let o of c.tokens)o.type==="text"&&(o.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=ie(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:R(e[0],`
`),href:s,title:r}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=se(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:R(e[0],`
`),header:[],align:[],rows:[]};if(t.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<t.length;l++)i.header.push({text:t[l],tokens:this.lexer.inline(t[l]),header:!0,align:i.align[l]});for(let l of r)i.rows.push(se(l,i.header.length).map((a,c)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[c]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:R(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=R(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=lt(e[2],"()");if(i===-2)return;if(i>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),le(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return le(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,l,a=r,c=0,o=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(o.lastIndex=0,e=e.slice(-1*n.length+r);(s=o.exec(e))!==null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(l=[...i].length,s[3]||s[4]){a+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+c);let p=[...s[0]][0].length,h=n.slice(0,r+s.index+p+l);if(Math.min(r,l)%2){let d=h.slice(1,-1);return{type:"em",raw:h,text:d,tokens:this.lexer.inlineTokens(d)}}let g=h.slice(2,-2);return{type:"strong",raw:h,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let s=this.rules.inline.delLDelim.exec(n);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,l,a=r,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*n.length+r);(s=c.exec(e))!==null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(l=[...i].length,l!==r))continue;if(s[3]||s[4]){a+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a);let o=[...s[0]][0].length,p=n.slice(0,r+s.index+o+l),h=p.slice(r,-r);return{type:"del",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,s;if(e[2]==="@")t=e[0],s="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},b=class Q{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||T,this.options.tokenizer=this.options.tokenizer||new B,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:x,block:E.normal,inline:P.normal};this.options.pedantic?(t.block=E.pedantic,t.inline=P.pedantic):this.options.gfm&&(t.block=E.gfm,this.options.breaks?t.inline=P.breaks:t.inline=P.gfm),this.tokenizer.rules=t}static get rules(){return{block:E,inline:P}}static lex(e,t){return new Q(t).lex(e)}static lexInline(e,t){return new Q(t).inlineTokens(e)}lex(e){e=e.replace(x.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(x.tabCharGlobal,"    ").replace(x.spaceLine,""));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=t.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let l=e;if(this.options.extensions?.startBlock){let a=1/0,c=e.slice(1),o;this.options.extensions.startBlock.forEach(p=>{o=p.call({lexer:this},c),typeof o=="number"&&o>=0&&(a=Math.min(a,o))}),a<1/0&&a>=0&&(l=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(l))){let a=t.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i),s=l.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let s=e,r=null;if(this.tokens.links){let o=Object.keys(this.tokens.links);if(o.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)o.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)i=r[2]?r[2].length:0,s=s.slice(0,r.index+i)+"["+"a".repeat(r[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,a="",c=1/0;for(;e;){if(e.length<c)c=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}l||(a=""),l=!1;let o;if(this.options.extensions?.inline?.some(h=>(o=h.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let h=t.at(-1);o.type==="text"&&h?.type==="text"?(h.raw+=o.raw,h.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,s,a)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,s,a)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let p=e;if(this.options.extensions?.startInline){let h=1/0,g=e.slice(1),d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},g),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(p=e.substring(0,h+1))}if(o=this.tokenizer.inlineText(p)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(a=o.raw.slice(-1)),l=!0;let h=t.at(-1);h?.type==="text"?(h.raw+=o.raw,h.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},q=class{options;parser;constructor(n){this.options=n||T}space(n){return""}code({text:n,lang:e,escaped:t}){let s=(e||"").match(x.notSpaceStart)?.[0],r=n.replace(x.endingNewline,"")+`
`;return s?'<pre><code class="language-'+m(s)+'">'+(t?r:m(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:m(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,s="";for(let l=0;l<n.items.length;l++){let a=n.items[l];s+=this.listitem(a)}let r=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<n.rows.length;r++){let i=n.rows[r];t="";for(let l=0;l<i.length;l++)t+=this.tablecell(i[l]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${m(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let s=this.parser.parseInline(t),r=re(n);if(r===null)return s;n=r;let i='<a href="'+n+'"';return e&&(i+=' title="'+m(e)+'"'),i+=">"+s+"</a>",i}image({href:n,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let r=re(n);if(r===null)return m(t);n=r;let i=`<img src="${n}" alt="${m(t)}"`;return e&&(i+=` title="${m(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:m(n.text)}},J=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},w=class H{options;renderer;textRenderer;constructor(e){this.options=e||T,this.options.renderer=this.options.renderer||new q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new J}static parse(e,t){return new H(t).parse(e)}static parseInline(e,t){return new H(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let l=r,a=this.options.extensions.renderers[l.type].call({parser:this},l);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){t+=a||"";continue}}let i=r;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let s="";for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=a||"";continue}}let l=i;switch(l.type){case"escape":{s+=t.text(l);break}case"html":{s+=t.html(l);break}case"link":{s+=t.link(l);break}case"image":{s+=t.image(l);break}case"checkbox":{s+=t.checkbox(l);break}case"strong":{s+=t.strong(l);break}case"em":{s+=t.em(l);break}case"codespan":{s+=t.codespan(l);break}case"br":{s+=t.br(l);break}case"del":{s+=t.del(l);break}case"text":{s+=t.text(l);break}default:{let a='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}},L=class{options;block;constructor(n){this.options=n||T}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?b.lex:b.lexInline}provideParser(n=this.block){return n?w.parse:w.parseInline}},ct=class{defaults=j();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=w;Renderer=q;TextRenderer=J;Lexer=b;Tokenizer=B;Hooks=L;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let s of n)switch(t=t.concat(e.call(this,s)),s.type){case"table":{let r=s;for(let i of r.header)t=t.concat(this.walkTokens(i.tokens,e));for(let i of r.rows)for(let l of i)t=t.concat(this.walkTokens(l.tokens,e));break}case"list":{let r=s;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(i=>{let l=r[i].flat(1/0);t=t.concat(this.walkTokens(l,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let i=e.renderers[r.name];i?e.renderers[r.name]=function(...l){let a=r.renderer.apply(this,l);return a===!1&&(a=i.apply(this,l)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[r.level];i?i.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){let r=this.defaults.renderer||new q(this.defaults);for(let i in t.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let l=i,a=t.renderer[l],c=r[l];r[l]=(...o)=>{let p=a.apply(r,o);return p===!1&&(p=c.apply(r,o)),p||""}}s.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new B(this.defaults);for(let i in t.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let l=i,a=t.tokenizer[l],c=r[l];r[l]=(...o)=>{let p=a.apply(r,o);return p===!1&&(p=c.apply(r,o)),p}}s.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new L;for(let i in t.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let l=i,a=t.hooks[l],c=r[l];L.passThroughHooks.has(i)?r[l]=o=>{if(this.defaults.async&&L.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await a.call(r,o);return c.call(r,h)})();let p=a.call(r,o);return c.call(r,p)}:r[l]=(...o)=>{if(this.defaults.async)return(async()=>{let h=await a.apply(r,o);return h===!1&&(h=await c.apply(r,o)),h})();let p=a.apply(r,o);return p===!1&&(p=c.apply(r,o)),p}}s.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(l){let a=[];return a.push(i.call(this,l)),r&&(a=a.concat(r.call(this,l))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return b.lex(n,e??this.defaults)}parser(n,e){return w.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let s={...t},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let l=r.hooks?await r.hooks.preprocess(e):e,a=await(r.hooks?await r.hooks.provideLexer(n):n?b.lex:b.lexInline)(l,r),c=r.hooks?await r.hooks.processAllTokens(a):a;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let o=await(r.hooks?await r.hooks.provideParser(n):n?w.parse:w.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(o):o})().catch(i);try{r.hooks&&(e=r.hooks.preprocess(e));let l=(r.hooks?r.hooks.provideLexer(n):n?b.lex:b.lexInline)(e,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let a=(r.hooks?r.hooks.provideParser(n):n?w.parse:w.parseInline)(l,r);return r.hooks&&(a=r.hooks.postprocess(a)),a}catch(l){return i(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+m(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},S=new ct;function k(n,e){return S.parse(n,e)}k.options=k.setOptions=function(n){return S.setOptions(n),k.defaults=S.defaults,ae(k.defaults),k};k.getDefaults=j;k.defaults=T;k.use=function(...n){return S.use(...n),k.defaults=S.defaults,ae(k.defaults),k};k.walkTokens=function(n,e){return S.walkTokens(n,e)};k.parseInline=S.parseInline;k.Parser=w;k.parser=w.parse;k.Renderer=q;k.TextRenderer=J;k.Lexer=b;k.lexer=b.lex;k.Tokenizer=B;k.Hooks=L;k.parse=k;k.options;k.setOptions;k.use;k.walkTokens;k.parseInline;w.parse;b.lex;const ht=`# 《资》规则手册

本手册说明当前网页实现中的《资》规则。它分为两部分：

1. 游戏本身的规则：不依赖网页，也可以用纸笔记录双方状态并裁判。
2. 网页操作规则：说明当前界面如何显示信息、如何出招、如何选择目标。

## 第一部分：游戏规则

### 1. 游戏目标

《资》是二人同时出招的拍手游戏。双方各选一个种族，拥有自己的建筑、兵、资源和状态。

任意一方在回合结算后没有任何建筑时失败。若结算后只剩一方存活，该方获胜。

### 2. 基本概念

- \`资\`：资源。许多建造、造兵、解咒需要花费资。
- \`建筑\`：包括一本、二本、三本和各种种族建筑。建筑数量可以为 0 或正数。
- \`本\`：一本、二本、三本都是建筑。升本会新增更高本，不会自动移除低本。
- \`当前本数\`：看现存最高本。若三本存在就是三本；否则看二本；否则看一本；都没有则为零本。
- \`兵\`：每种兵有存活数和死亡数。被杀或作为攻击/技能费用消耗时通常进入死亡池。
- \`可杀兵\`：除 \`兽兵\`、\`风骑\` 外的所有兵。敌方单位击杀、击杀所有兵、射、咒、网、喷等单位目标只处理可杀兵。
- \`兵咒\`：被咒的兵不能再造。兵咒不阻止已有兵攻击、被回复、被变出、被击杀。
- \`建筑咒\`：被咒的建筑不能再造。建筑咒不使已有建筑失效。
- \`归墟\`：使已有建筑失效，但不摧毁建筑。失效建筑仍然算存在，仍计入是否失败和当前本数；但作为生产建筑时不工作。
- \`全防\`：本回合防住所有对方攻击。

### 3. 回合流程

每回合双方同时选择一个动作，然后同时亮出。

结算顺序为：

1. 双方支付动作费用，并把建造、造兵、回复、变、攻击等动作排入结算。
2. 建造立即完成。若建造的是全防建筑，本回合立刻获得全防。
3. 攻击者支付攻击费用：使用哪个兵攻击，就先消耗 1 个该兵并放入死亡池。
4. 判断攻击是否被防御或全防挡住。
5. 若有未被挡住的攻击：
   - 只有一个未被挡住的攻击：该攻击胜出。
   - 两个未被挡住的攻击优先级不同：优先级高者胜出。
   - 两个未被挡住的攻击优先级相同：双方攻击抵消，均不产生攻击效果。
6. \`回\`、\`变\`等技能在胜出攻击实际造成效果前结算。
7. 胜出攻击若需要目标，由攻击者按该攻击的目标规则选择目标，然后结算效果。
8. 狙击倒计时减少，检查失败与胜利，回合数加 1。

若攻击被防住、被更高优先级攻击压过，或同级抵消，攻击效果不发生；攻击费用通常仍已支付。\`网\`的蜘蛛有特殊返还规则，见攻击表。

### 4. 种族与通用费用

| 种族 | 工人 | 升本费用 | 回本费用 | 额造附加费 | 解兵咒 | 解建筑咒 | 解归墟 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 主城 | 农民 | 2 | 4 | +2 | 5 | 不可解 | 12 |
| 墓地 | 侍僧 | 3 | 不可回本 | 不可额造 | 5 | 7 | 12 |
| 大厅 | 苦工 | 2 | 4 | +2 | 5 | 7 | 12 |
| 暗夜 | 小精灵 | 2 | 5 | +2 | 5 | 不可解 | 12 |

说明：

- \`升本\`：从一本升二本、从二本升三本。升本新增更高本，不消耗低本。
- \`回本\`：只有当前零本且仍有至少一个非本建筑时，才能重建一本。墓地不能回本。
- \`额造\`：某兵本来需要生产建筑，但生产建筑不存在或被归墟失效时，主城、大厅、暗夜可以支付基础造兵费加额造附加费来造兵。墓地没有额造。
- 解建筑咒只有墓地、大厅可以做。主城、暗夜的建筑若被建筑咒影响，当前实现中没有解建筑咒动作。

### 5. 建筑

建造非本建筑时，若该建筑需要工人，则必须有至少 1 个本族工人。

主城、墓地、暗夜建造需要工人的建筑时，工人会被消耗并进入死亡池。大厅建造需要苦工的建筑时，只检查苦工数量，不消耗苦工。

\`科技\`表示最低当前本数。科技 0 表示无本也满足科技要求。

| 种族 | 建筑 | 费用 | 科技 | 工人 | 可重复 | 建造当回合全防 |
| --- | --- | ---: | ---: | --- | --- | --- |
| 通用 | 一本 | 回本费用 | 0 | 无 | 否 | 否 |
| 通用 | 二本 | 升本费用 | 当前一本 | 无 | 否 | 否 |
| 通用 | 三本 | 升本费用 | 当前二本 | 无 | 否 | 否 |
| 主城 | 塔 | 1 | 0 | 农民 | 是 | 是 |
| 主城 | 步兵营 | 1 | 0 | 农民 | 否 | 否 |
| 主城 | 战神营 | 0 | 2 | 农民 | 否 | 是 |
| 主城 | 祭坛 | 2 | 0 | 农民 | 否 | 否 |
| 主城 | 牧师营 | 1 | 2 | 农民 | 否 | 是 |
| 墓地 | 坟场 | 0 | 2 | 侍僧 | 否 | 是 |
| 墓地 | 亡灵城 | 0 | 3 | 侍僧 | 否 | 是 |
| 大厅 | 兽兵营 | 2 | 0 | 苦工 | 否 | 否 |
| 大厅 | 灵祭 | 2 | 2 | 苦工 | 否 | 否 |
| 大厅 | 兽栏 | 1 | 2 | 苦工 | 否 | 是 |
| 暗夜 | 月亮井 | 1 | 1 | 无 | 是 | 否 |
| 暗夜 | 天神营 | 2 | 0 | 小精灵 | 否 | 否 |
| 暗夜 | 战争古树 | 1 | 0 | 小精灵 | 否 | 否 |

主城还有一个特殊状态 \`战号\`：花 1 资获得。获得后，农民可以使用攻击 \`打\`。战号不是普通建筑，不会被建筑攻击摧毁。

### 6. 兵

| 种族 | 兵 | 费用 | 生产要求 |
| --- | --- | ---: | --- |
| 主城 | 农民 | 1 | 一本 |
| 主城 | 步兵 | 1 | 步兵营 |
| 主城 | 战神 | 2 | 战神营 |
| 主城 | 牧师 | 1 | 牧师营 |
| 主城 | 猎人 | 1 | 三本 |
| 主城 | 英雄 | 首个 2，之后 3 | 祭坛 |
| 墓地 | 小鬼 | 1 | 无 |
| 墓地 | 侍僧 | 2 | 无 |
| 墓地 | 战士 | 2 | 坟场 |
| 墓地 | 弓手 | 2 | 坟场 |
| 墓地 | 巫师 | 3 | 亡灵城 |
| 墓地 | 蜘蛛 | 4 | 亡灵城 |
| 墓地 | 冰龙 | 6 | 亡灵城 |
| 大厅 | 苦工 | 2 | 一本 |
| 大厅 | 风骑 | 3 | 兽栏 |
| 大厅 | 萨满 | 4 | 兽栏 |
| 大厅 | 兽兵 | 2 | 兽兵营 |
| 大厅 | 巫医 | 2 | 灵祭 |
| 大厅 | 投石车 | 5 | 三本 |
| 暗夜 | 小精灵 | 1 | 一本 |
| 暗夜 | 弓箭手 | 1 | 战争古树 |
| 暗夜 | 女猎手 | 2 | 战争古树 |
| 暗夜 | 天使 | 1 | 天神营 |
| 暗夜 | 天神 | 2 | 天神营 |
| 暗夜 | 奇美拉 | 4 | 三本 |

规则细节：

- 只有本族兵可以直接造。大厅通过萨满变出的外族兵不能再造。
- 若生产要求的建筑存在且未归墟，按基础费用造兵。
- 若生产要求不存在或被归墟，主城、大厅、暗夜可以额造；墓地不能额造。
- 兵咒会禁止造对应兵，包括正常造和额造。
- \`兽兵\`、\`风骑\`不能被敌方单位击杀，也不能作为普通单位目标被选择；但它们自己出攻击时仍会作为攻击费用进入死亡池。

### 7. 非攻击动作

#### 资

获得 1 点资。被狙击时不能出资。

#### 建造、升本、回本

按建筑表和费用表执行。建造带全防的建筑时，本回合获得全防。

升二本、升三本亮招名均显示为 \`升本\`，并注明升至几本。回一本显示为 \`回本\`。

#### 战号

主城专属。若尚未获得战号且有至少 1 资，可以花 1 资获得战号。获得后永久允许农民使用 \`打\`。

#### 解咒与解归墟

- 解兵咒：花 5 资，解除一种己方兵的兵咒。
- 解建筑咒：只有墓地、大厅可以做，花 7 资，解除一个己方建筑的建筑咒。
- 解归墟：花 12 资，解除己方所有归墟建筑的失效状态。

#### 回

\`回\`复活己方死亡池中的 1 个可见兵。

可用来源：

- 牧师：消耗 1 个牧师，牧师进入死亡池。
- 巫医：消耗 1 个巫医，巫医进入死亡池。
- 月亮井：暗夜有 1 个未归墟的月亮井时可用，消耗 1 个此类月亮井。

若目标死亡池中确有至少 1 个该兵，复活 1 个；否则只支付来源费用，不复活。

兵咒不阻止回。兽兵、风骑若在死亡池中，也可以被回。

#### 变

大厅专属。若有存活萨满，可以消耗 1 个萨满使用 \`变\`。

结算效果：

- 萨满从存活区移除，但不进入萨满死亡池。
- 选择场上任意一方已有的 1 种存活非萨满兵。
- 自己获得 1 个该兵。目标方不失去该兵。
- 若获得的是非大厅兵，该兵会作为大厅的外族兵被记录。
- 本回合获得全防。

被变出的兵之后若被杀死，进入其变化后兵种的死亡池，不记作萨满死亡。

### 8. 防御

防御共有 6 种。防御只防对应手势的攻击；全防防所有攻击。

| 防御 | 手势 | 防住的攻击 |
| --- | --- | --- |
| 防1 | 小臂交叉于胸前，双手握拳 | 击、打、刺 |
| 防2 | 小臂交叉于胸前，双手掌展开 | 拍、猎 |
| 防3 | 小臂一上一下横于腹前，双手握拳 | 砍、劈、斩 |
| 防4 | 小臂平行竖于胸前，双手握拳 | 攻、射、投 |
| 防5 | 双手掌展开并交叉叠置于胸前 | 狙、网 |
| 防6 | 双手掌心相对于胸前，手指方向向前 | 咒、魔、喷、归墟 |

防御没有费用。即使对方没有对应兵，也可以选择防御。

### 9. 攻击总表

攻击需要消耗 1 个对应兵。除 \`网\`特殊返还外，攻击兵会进入死亡池。

| 兵 | 攻击 | 优先级 | 防御 | 目标 | 效果 |
| --- | --- | ---: | --- | --- | --- |
| 小鬼 | 击 | 1 | 1 | 1 建筑 | 摧毁目标建筑 1 个 |
| 农民 | 打 | 2 | 1 | 1 建筑 | 摧毁目标建筑 1 个；需要战号 |
| 侍僧 | 拍 | 3 | 2 | 1 建筑 | 摧毁目标建筑 1 个 |
| 天使 | 拍 | 3 | 2 | 1 建筑 | 摧毁目标建筑 1 个 |
| 步兵 | 砍 | 4 | 3 | 1 建筑和 1 附属兵 | 摧毁目标建筑 1 个，并可击杀 1 个附属兵 |
| 猎人 | 狙 | 5 | 5 | 无 | 使对方此后五回合无法攻击和资 |
| 弓箭手 | 狙 | 5 | 5 | 无 | 同猎人狙 |
| 兽兵 | 劈 | 6 | 3 | 2 兵 | 击杀至多 2 个可杀兵 |
| 战士 | 斩 | 7 | 3 | 1 建筑 | 摧毁目标建筑 1 个，并对目标施加建筑咒 |
| 女猎手 | 猎 | 7 | 2 | 1 建筑 | 摧毁目标建筑 1 个，并使对方此后五回合无法攻击和资 |
| 战神 | 攻 | 8 | 4 | 1 建筑 | 摧毁目标建筑 1 个，并对目标施加建筑咒 |
| 天神 | 攻 | 8 | 4 | 1 建筑 | 同战神攻 |
| 弓手 | 射 | 9 | 4 | 1 种兵 | 击杀 1 个该种可杀兵，并施加兵咒 |
| 风骑 | 刺 | 10 | 1 | 1 建筑和 1 兵 | 摧毁目标建筑 1 个，并击杀 1 个可杀兵 |
| 巫师 | 咒 | 11 | 6 | 1 种兵 | 击杀所有该种可杀兵，并施加兵咒 |
| 英雄 | 魔 | 11 | 6 | 1 建筑 | 摧毁目标建筑 1 个，并击杀所有可杀兵 |
| 蜘蛛 | 网 | 12 | 5 | 1 兵 | 击杀 1 个可杀兵；蜘蛛按特殊规则返回或消耗 |
| 奇美拉 | 喷 | 13 | 6 | 2 建筑或喷回零本，另可选 1 兵 | 摧毁建筑，或摧毁对方所有本；另可击杀 1 个可杀兵 |
| 投石车 | 投 | 14 | 4 | 2 建筑 | 摧毁至多 2 个建筑，并击杀所有可杀兵 |
| 冰龙 | 归墟 | 15 | 6 | 无 | 击杀所有可杀兵，并使所有可归墟建筑失效 |

### 10. 攻击胜负、优先级和防御

每个攻击先看是否被对方防住：

- 若对方出对应防御，攻击被防住。
- 若对方本回合全防，攻击被防住。
- 被防住的攻击不参与优先级比较。

未被防住的攻击再比优先级：

- 只有一个未被防住的攻击：它结算。
- 两个未被防住的攻击优先级不同：高优先级攻击结算，低优先级攻击无效果。
- 两个未被防住的攻击优先级相同：双方攻击抵消，均无攻击效果。

### 11. 目标选择总规则

只有胜出的攻击需要选择目标。攻击被防住、被高优先级压过、同级抵消时不选目标。

#### 建筑目标

非本建筑可以被选择，即使该建筑当前不存在；不存在的目标称为空目标。

本位目标有特殊限制：

- 若对方有三本，最初只能选择三本作为当前有效本目标；选中三本后，二本才可作为下一个低本目标。
- 若对方有二本而没有三本，二本是当前有效本目标；三本作为更高本的空目标也可能被选择。
- 若对方只有一本，一本是当前有效本目标；二本、三本作为更高本的空目标也可能被选择。
- 若对方零本，三个本都只能作为空目标。

重复选择同一建筑是允许的。若该建筑数量不足，前面的命中摧毁存在的建筑，超出的命中为空攻击。

#### 兵目标

普通兵目标只能选择可杀兵。\`兽兵\`、\`风骑\`不能作为普通兵目标。

选择一个没有存活个体的兵，是空攻击。选择同一兵多次时，按结算时剩余数量逐次判断；超过存活数的部分为空攻击。

#### 可少选目标

多目标攻击若场上实际有效目标不足，可以少选。少选不算空攻击；只有主动选择了不存在或数量不足的目标，才算空攻击。

\`射\`和\`咒\`例外：只要存在任意存活可杀兵，或存在任意未被兵咒的可杀兵种，就必须选择 1 种兵。只有在没有任何存活可杀兵且所有可选可杀兵种都已经被兵咒时，才允许不选目标；此时攻击注释为无事发生。

### 12. 砍与附属兵

\`砍\`指定 1 个建筑，并可能指定 1 个该建筑的附属兵。被指定的建筑可以是任意建筑名，包括当前不存在的建筑。不存在的建筑不会被摧毁，但仍可产生“空砍了某建筑”的结果。

砍的附属兵不是建造要求，而是“能被砍带走的兵”。当前附属关系如下：

| 附属建筑 | 附属兵 |
| --- | --- |
| 主城一本 | 农民 |
| 暗夜三本 | 奇美拉 |
| 步兵营 | 步兵 |
| 战神营 | 战神 |
| 牧师营 | 牧师 |
| 祭坛 | 英雄 |
| 坟场 | 战士、弓手 |
| 亡灵城 | 巫师、蜘蛛、冰龙 |
| 灵祭 | 巫医 |
| 兽栏 | 萨满 |
| 天神营 | 天使、天神 |
| 战争古树 | 弓箭手、女猎手 |

不能作为砍附属兵目标的兵包括：猎人、小鬼、侍僧、苦工、兽兵、风骑、投石车、小精灵，以及任何没有列在上表中的兵。

砍的实体裁判规则如下：

- 若指定建筑存在，摧毁该建筑 1 个；若指定建筑不存在，建筑部分为空砍。
- 若指定建筑在上表中有附属兵，并且这些附属兵中至少有 1 个存活可杀兵，则必须同时指定恰好 1 个该建筑的附属兵；这个附属兵可以是当前没有存活个体的附属兵。
- 若指定建筑在上表中有附属兵，但这些附属兵全都没有存活可杀兵，则可以不指定附属兵，也可以指定 1 个该建筑的附属兵作为空砍。
- 若指定建筑没有附属兵，则不能指定附属兵。
- 若指定了附属兵，且该兵有存活可杀个体，则击杀 1 个该兵；否则该兵部分为空砍。

砍最多只处理 1 个附属兵，不会自动杀死该建筑下的每一种附属兵。

若指定的是外族附属建筑：

- 若该兵对应的附属建筑不属于防守方种族，则不会摧毁防守方当前种族的同名或同本建筑。
- 农民和奇美拉的附属建筑是带种族的本：外族农民对应 \`主城一本\`，外族奇美拉对应 \`暗夜三本\`。
- 例：大厅玩家有外族奇美拉。指定砍 \`暗夜三本\` 并指定附属兵 \`奇美拉\`，会视为空砍暗夜三本，并砍奇美拉；不会摧毁大厅三本。

### 13. 特殊攻击细则

#### 狙与猎

\`狙\`不选目标，只施加狙击状态。

\`猎\`选择 1 个建筑，摧毁该建筑，并施加狙击状态。

狙击状态持续五回合。被狙击者在倒计时大于 0 时不能出 \`资\`，也不能使用任何攻击。其他动作仍可按条件使用。若再次被狙击，倒计时刷新到至少 5。

#### 斩、攻、射、咒的咒

\`斩\`、\`攻\`对目标建筑施加建筑咒。\`天神营\`免疫建筑咒。

\`射\`、\`咒\`对目标兵施加兵咒。即使目标本来已经有咒，再次施加时仍按命中/空命中正常结算，只是状态仍然只需要解一次。

#### 咒

\`咒\`选择一种兵：

- 若该兵有存活个体，杀死所有该种可杀兵，并施加兵咒。
- 若该兵没有存活个体，施加兵咒，但不杀兵。
- 若合法不选目标，则无事发生。

#### 魔、投、归墟

\`魔\`和\`投\`的“所有兵”指所有可杀兵。即使实际没有杀到兵，效果仍视为攻击了所有兵。

\`归墟\`无需选目标。它杀死对方所有可杀兵，并使对方所有可归墟建筑失效。\`天神营\`不受归墟失效影响。

#### 网

蜘蛛使用 \`网\`时先进入死亡池。

- 若网被防5或全防挡住，蜘蛛消耗，不返回。
- 若网遇到更高优先级攻击并被压过，蜘蛛消耗，不返回。
- 若网胜出并正常进入目标选择，蜘蛛返回。
- 若双方都是网且同级抵消，双方蜘蛛都返回。
- 网胜出后可以击杀 1 个可杀兵；若不选目标且合法，则无事发生，蜘蛛仍返回。

#### 喷

奇美拉的\`喷\`有两种建筑选择方式：

1. 选择至多 2 个建筑，按普通建筑攻击结算。
2. 选择“喷回零本”，摧毁对方所有本，但不摧毁非本建筑。

此外，喷还可以选择至多 1 个可杀兵作为兵目标。若场上没有可杀兵，可以不选兵。

### 14. 建筑咒、归墟和天神营免疫

\`天神营\`有两种免疫：

- 不会被建筑咒影响。
- 不会被归墟失效。

天神营仍然可以被建筑攻击摧毁。

归墟不摧毁建筑，不改变建筑数量。被归墟的本仍然算存在，并仍用于当前本数和科技判断；但作为生产建筑时不工作。

## 第二部分：网页操作规则

### 1. 开始一局

在创建本地游戏界面选择规则\`资\`，点击开始。

选择规则\`资\`时，\`测试模式\`右侧还会显示\`对局回放\`按钮。该按钮用于选择本地保存的
\`.zilog\`对局记录；选择成功后直接进入只读回放界面，初始为暂停状态。选择其他规则时
不显示此按钮。

进入种族选择卡片后：

- \`玩家种族\`和\`电脑种族\`各有五个选项：\`随机\`、\`主城\`、\`墓地\`、\`大厅\`、\`暗夜\`。
- 每组同时只会选中一个，默认都是\`随机\`。
- 点击\`开始\`后，随机选项会各自随机成具体种族，并进入战斗界面。
- 点击\`返回\`回到本地游戏创建界面。

### 2. 战斗界面结构

界面分三行：

1. 上方：电脑状态区。
2. 中间：桌面区，显示双方上一回合或当前回合亮出的招、回合数、胜利信息。
3. 下方：玩家状态区。

状态区从左到右大致为：

- 种族/本位卡片：显示种族和玩家名，旁边是三本、二本、一本。
- 建筑区：显示本种族建筑和特殊状态。
- 兵区：显示本种族兵。
- 命令区：包含攻击、防御、技能三个行动按钮，以及\`资\`按钮。

### 3. 状态卡片怎么看

- 深色卡片表示该建筑/兵/状态存在或开启。
- 浅色卡片表示不存在或关闭。
- 多个可存在的建筑或兵，右下角直接显示存活数量；数量为 0 时不显示。
- 死亡兵在左下角显示骷髅图标和死亡数量；死亡数量为 0 时不显示。
- 被咒或被归墟的卡片会呈现黑白/灰化效果。
- 左上角绿色加号表示当前可以建造或造兵。
- 左上角两个绿色加号表示该兵当前可以额造。
- 左上角灰色加号加\`解咒\`表示当前可以点击解该建筑/兵的咒。
- 种族大格左上角灰色加号加\`解归墟\`表示当前可以解归墟。

### 4. 直接点击类动作

不需要先按行动按钮的动作包括：

- \`资\`：点击右侧资卡片，或按空格。
- 建筑/升本/回本：有绿色加号时点击对应建筑或本位；点击种族大格也会作为当前可行的升本/回本快捷方式。
- 造兵：有绿色加号或双绿色加号时点击对应兵。
- 解咒：有\`解咒\`提示时点击对应建筑或兵。
- 解归墟：有\`解归墟\`提示时点击种族大格。
- 战号：主城可购买战号时，点击战号格。

出招一旦提交就不可撤销。若该回合需要后续选择攻击目标，只有目标选择可以取消重选。

### 5. 行动按钮

命令区有三个小按钮：

- 剑：攻击。
- 盾：防御。
- 星芒：技能。

点击一个按钮会进入对应模式；再次点击同一按钮会取消该模式。按住键盘 \`A\` 会临时同时打开攻击、防御、技能，松开后关闭。

被狙击时，攻击按钮变为准星并显示倒计时；此时不能打开攻击，也不能出资。

### 6. 攻击操作

点击剑按钮后，可攻击的己方兵左上角显示剑图标和招式名。点击该兵即可提交该攻击。

若攻击不需要目标，例如\`狙\`、\`归墟\`，亮招后会直接结算。

若玩家攻击胜出且需要目标，界面会进入目标选择阶段：

- 对方可选目标左上角出现准星。
- 已选次数会显示在准星右侧。
- 玩家按提示选择目标。
- 目标选择完成后，在自己的出招框内点击\`确认\`。
- 点击\`取消\`只清空当前目标选择，不撤销已经提交的攻击。

电脑攻击胜出时，电脑会自动选择目标。

### 7. 攻击目标选择操作

#### 建筑目标

点击对方建筑或本位即可选择建筑目标。可以重复点击同一个目标来表示多次攻击同一处。

在目标选择阶段，点击对方种族大格有快捷效果：

- 一般攻击：选择对方当前存在且尚未被选中的最高本。
- 奇美拉喷：选择“喷回零本”。

种族大格本身不会显示选中次数；选中的次数显示在实际本位格上，或以喷回零本方式记录。

#### 兵目标

点击对方兵卡片选择兵目标。不能被选择的兵不会显示准星。

\`兽兵\`、\`风骑\`不会作为普通兵目标显示准星。

#### 砍的目标

步兵出\`砍\`时，游戏规则要求指定 1 个建筑，并按情况指定 1 个该建筑的附属兵。网页为了让玩家能输入外族附属建筑，提供两种点击方式：

- 点建筑：表示指定砍该建筑。之后如果需要附属兵，界面只允许选择该建筑的附属兵。
- 点附属兵：这是网页输入快捷方式，不是额外的游戏规则。它等价于指定该兵对应的附属建筑，并同时指定该兵为附属兵目标。

这个快捷方式主要用于外族兵：网页不会显示外族建筑，所以无法直接点击那个不存在的外族建筑。例如大厅有萨满变出的奇美拉时，点击奇美拉等价于指定砍\`暗夜三本\`并指定附属兵\`奇美拉\`，即空砍暗夜三本并砍奇美拉。若先点附属兵，就不能再点建筑。

#### 喷回零本

奇美拉出\`喷\`时，点击对方种族大格表示喷回零本。喷回零本会清空对方所有本，但保留非本建筑。

### 8. 防御操作

点击盾按钮后，对方可以防御的攻击来源兵会显示盾图标和防御编号。点击其中一个兵，即提交对应防御。亮招时的招名会按当前可防攻击改写为\`防击·打\`、\`防归墟\`等显示。

防御看的是编号，不看对方是否真的有该兵，也不要求对方真的出了该兵。例如点击对方某个对应防6的兵，就是出防6；如果对方实际出了归墟，也能防住。

### 9. 技能操作

点击星芒按钮后，技能来源会显示星芒和技能名。

可见技能来源：

- 牧师：\`回\`
- 巫医：\`回\`
- 月亮井：\`回\`
- 萨满：\`变\`

点击技能来源后，再选择目标：

- 回：点击己方死亡池中有数量的兵。
- 变：点击任意一方场上已有的存活非萨满兵。

技能目标本身不会再显示星芒提示；进入目标阶段后直接点击目标即可。

### 10. 大厅外族兵翻页

大厅通过萨满变出外族兵后，兵区会出现翻页条。

- 原生大厅兵在第一页。
- 外族兵按记录顺序分页，每页最多 6 种。
- 左右细条按钮用于翻页。
- 按钮底部数字表示该方向还可以翻几页。
- 悬停翻页按钮会显示目标方向所有页面的兵种预览，包括兵种名、存活数、死亡数。
- 外族兵不能被造，因此不会出现造兵加号；但它们可以攻击、被回、被变、被杀、被咒、被解咒、被选为防御来源提示或攻击目标。

### 11. 出招框、回合与胜利显示

桌面中间显示当前回合数。双方出招框默认显示种族；每回合亮招动画后显示双方招式。

有注释的招式会在招式正下方显示注释，例如目标选择提示、升本目标、全防、攻击结果。

游戏结束时，中间区域显示胜利者、\`胜利\`、\`再来一局\`和\`保存回放\`按钮。
\`保存回放\`位于\`再来一局\`旁边；普通模式和测试模式都可以将刚结束的完整对局下载为
\`.zilog\`文件。点击\`再来一局\`会回到种族选择卡片，而不是沿用上一局种族。

### 12. 设置

桌面左上角按钮返回创建游戏界面。右上角按钮打开设置。

与《资》相关的设置包括\`己方出招位置\`：

- 右侧：玩家出招框在右边。
- 左侧：玩家出招框在左边。

该设置只改变桌面上双方出招框的位置，不改变规则。

### 13. 对局回放

回放界面为只读状态，中央回合数下方有三个按钮：

- \`上一回合\`：跳到上一回合已经结算后的状态。
- \`播放\` / \`暂停\`：从当前位置按设置中的动画速度播放或暂停。
- \`下一回合\`：跳到下一回合已经结算后的状态。

回放载入后不会自动播放。按下\`播放\`后，每回合仍按\`·\`、\`··\`、亮招的节奏显示；
回放结束后再次播放会从开局重新开始。左上角返回按钮退出回放并回到创建本地游戏界面。
`,xe=document.getElementById("zi-rules");if(!xe)throw new Error("Missing Zi rules mount element.");const be=k.parse(ht,{async:!1});if(typeof be!="string")throw new Error("Zi rules Markdown rendering did not complete synchronously.");xe.innerHTML=be;
