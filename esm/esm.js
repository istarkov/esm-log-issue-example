const e=(function(){return this})(),{apply:t,defineProperty:r,has:n}=Reflect,{freeze:o}=Object,{type:l,versions:_}=process,{filename:a,id:u,parent:s}=module,c=n(_,"chakracore"),i=n(_,"electron"),p=i&&"renderer"===l;let d;u.startsWith("internal/")&&(d=w("internal/esm/loader"));const m=require("module"),{Script:f}=require("vm"),{createCachedData:h,runInNewContext:y,runInThisContext:b}=f.prototype,{sep:j}=require("path"),{readFileSync:g}=require("fs"),q=new m(u);let v,x,C,D,k;function w(e){try{return require("internal/bootstrap/loaders").NativeModule._source[e]}catch(e){}}function I(){return z(require,q,v,F),q.exports}function S(e,t){return I()(e,t)}function N(e,t){try{return g(e,t)}catch(e){}}q.filename=a,q.parent=s,"object"==typeof jest&&null!==jest&&global.jest!==jest&&(v=jest),d?(D=d,k={__proto__:null,filename:"esm.js"}):(C=__dirname+j+"node_modules"+j+".cache"+j+"esm",x=N(C+j+".data.blob"),D=N(__dirname+j+"esm"+j+"loader.js","utf8"),k={__proto__:null,cachedData:x,filename:a,produceCachedData:"function"!=typeof h});const T=new f("const __global__ = this;(function (require, module, __jest__, __shared__) { "+D+"\n});",k);let z,F;if(z=c||p?t(b,T,[{__proto__:null,filename:a}]):t(y,T,[{__proto__:null,global:e},{__proto__:null,filename:a}]),F=I(),C){const{dir:e}=F.package;e[C]||(e[C]={buffer:x,compile:{__proto__:null,esm:{changed:!1,scriptData:x,sourceType:1}},map:{__proto__:null}}),F.pendingScripts[C]={__proto__:null,esm:T}}r(S,F.symbol.package,{__proto__:null,value:!0}),r(S,F.customInspectKey,{__proto__:null,value:()=>"esm enabled"}),o(S),module.exports=S;