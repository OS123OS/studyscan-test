(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.fV(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cy(b)
return new t(c,this)}:function(){if(t===null)t=A.cy(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cy(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
cD(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cA(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.cB==null){A.fK()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.c(A.d4("Return interceptor for "+A.h(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.bO
if(p==null)p=$.bO=A.cb(o)
q=r[p]}if(q!=null)return q
q=A.fO(a)
if(q!=null)return q
if(typeof a=="function")return B.t
t=Object.getPrototypeOf(a)
if(t==null)return B.j
if(t===Object.prototype)return B.j
if(typeof r=="function"){p=$.bO
if(p==null)p=$.bO=A.cb(o)
Object.defineProperty(r,p,{value:B.e,enumerable:false,writable:true,configurable:true})
return B.e}return B.e},
e7(a,b){return J.dS(a,b)},
T(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.W.prototype
return J.a8.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.a7.prototype
if(typeof a=="boolean")return J.aQ.prototype
if(Array.isArray(a))return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
if(typeof a=="symbol")return J.ab.prototype
if(typeof a=="bigint")return J.a9.prototype
return a}if(a instanceof A.k)return a
return J.cA(a)},
fE(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(Array.isArray(a))return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
if(typeof a=="symbol")return J.ab.prototype
if(typeof a=="bigint")return J.a9.prototype
return a}if(a instanceof A.k)return a
return J.cA(a)},
aE(a){if(a==null)return a
if(Array.isArray(a))return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
if(typeof a=="symbol")return J.ab.prototype
if(typeof a=="bigint")return J.a9.prototype
return a}if(a instanceof A.k)return a
return J.cA(a)},
fF(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.W.prototype
return J.a8.prototype}if(a==null)return a
if(!(a instanceof A.k))return J.M.prototype
return a},
fG(a){if(typeof a=="number")return J.X.prototype
if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.M.prototype
return a},
bm(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).C(a,b)},
dR(a,b){return J.aE(a).aj(a,b)},
dS(a,b){return J.fG(a).u(a,b)},
ci(a,b){return J.aE(a).v(a,b)},
z(a){return J.T(a).gj(a)},
bn(a){return J.aE(a).gG(a)},
dT(a){return J.T(a).gl(a)},
cJ(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.fF(a).ga_(a)},
cj(a,b,c){return J.aE(a).i(a,b,c)},
aF(a){return J.T(a).h(a)},
aM:function aM(){},
aQ:function aQ(){},
a7:function a7(){},
aa:function aa(){},
H:function H(){},
b2:function b2(){},
M:function M(){},
G:function G(){},
a9:function a9(){},
ab:function ab(){},
e:function e(a){this.$ti=a},
aP:function aP(){},
bw:function bw(a){this.$ti=a},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
X:function X(){},
W:function W(){},
a8:function a8(){},
Y:function Y(){}},A={ck:function ck(){},
D(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
bF(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d2(a,b,c){return A.bF(A.D(A.D(c,a),b))},
dw(a,b,c){return a},
cC(a){var t,s
for(t=$.R.length,s=0;s<t;++s)if(a===$.R[s])return!0
return!1},
cq(a,b,c,d){A.co(b,"start")
A.co(c,"end")
if(b>c)A.bk(A.C(b,0,c,"start",null))
return new A.ao(a,b,c,d.k("ao<0>"))},
aO(){return new A.b7("No element")},
aS:function aS(a){this.a=a},
bC:function bC(){},
aK:function aK(){},
q:function q(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
v:function v(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
a0:function a0(a,b){this.a=a
this.b=b},
ar:function ar(a,b){this.a=a
this.b=b},
a6:function a6(){},
ak:function ak(a,b){this.a=a
this.$ti=b},
dE(a){var t=A.dD(a)
if(t!=null)return t
return"minified:"+a},
hk(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
h(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aF(a)
return t},
b3(a){var t,s=$.cY
if(s==null)s=$.cY=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
b4(a){var t,s,r,q
if(a instanceof A.k)return A.u(A.a3(a),null)
t=J.T(a)
if(t===B.r||t===B.u||u.o.b(a)){s=B.f(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.u(A.a3(a),null)},
cZ(a){var t,s,r
if(a==null||typeof a=="number"||A.cv(a))return J.aF(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.K)return a.h(0)
if(a instanceof A.ax)return a.a3(!0)
t=$.dQ()
for(s=0;s<1;++s){r=t[s].av(a)
if(r!=null)return r}return"Instance of '"+A.b4(a)+"'"},
ea(){return Date.now()},
eb(){var t,s
if($.bB!==0)return
$.bB=1000
if(typeof window=="undefined")return
t=window
if(t==null)return
if(!!t.dartUseDateNowForTicks)return
s=t.performance
if(s==null)return
if(typeof s.now!="function")return
$.bB=1e6
$.cn=new A.bA(s)},
fC(a,b,c){if(a>c)return A.C(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.C(b,a,c,"end",null)
return new A.A(!0,b,"end",null)},
fv(a){return new A.A(!0,a,null,null)},
c(a){return A.p(a,new Error())},
p(a,b){var t
if(a==null)a=new A.ap()
b.dartException=a
t=A.fW
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
fW(){return J.aF(this.dartException)},
bk(a,b){throw A.p(a,b==null?new Error():b)},
cE(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.bk(A.eQ(a,b,c),t)},
eQ(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aq("'"+t+"': Cannot "+p+" "+m+l+o)},
o(a){throw A.c(A.B(a))},
E(a){var t,s,r,q,p,o
a=A.fT(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.a([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.bH(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
bI(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
d3(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cl(a,b){var t=b==null,s=t?null:b.method
return new A.aR(a,s,t?null:b.receiver)},
fX(a){if(a==null)return new A.bz(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.V(a,a.dartException)
return A.fu(a)},
V(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fu(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.c.H(s,16)&8191)===10)switch(r){case 438:return A.V(a,A.cl(A.h(t)+" (Error "+r+")",null))
case 445:case 5007:A.h(t)
return A.V(a,new A.aj())}}if(a instanceof TypeError){q=$.dG()
p=$.dH()
o=$.dI()
n=$.dJ()
m=$.dM()
l=$.dN()
k=$.dL()
$.dK()
j=$.dP()
i=$.dO()
h=q.A(t)
if(h!=null)return A.V(a,A.cl(t,h))
else{h=p.A(t)
if(h!=null){h.method="call"
return A.V(a,A.cl(t,h))}else if(o.A(t)!=null||n.A(t)!=null||m.A(t)!=null||l.A(t)!=null||k.A(t)!=null||n.A(t)!=null||j.A(t)!=null||i.A(t)!=null)return A.V(a,new A.aj())}return A.V(a,new A.ba(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.am()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.V(a,new A.A(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.am()
return a},
dA(a){if(a==null)return J.z(a)
if(typeof a=="object")return A.b3(a)
return J.z(a)},
f4(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.bM("Unsupported number of arguments for wrapped closure"))},
fw(a,b){var t=a.$identity
if(!!t)return t
t=A.fx(a,b)
a.$identity=t
return t},
fx(a,b){var t
switch(b){case 0:t=a.$0
break
case 1:t=a.$1
break
case 2:t=a.$2
break
case 3:t=a.$3
break
case 4:t=a.$4
break
default:t=null}if(t!=null)return t.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.f4)},
e0(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bD().constructor.prototype):Object.create(new A.a5(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cP(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dX(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cP(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dV)}throw A.c("Error in functionType of tearoff")},
dY(a,b,c,d){var t=A.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cP(a,b,c,d){if(c)return A.e_(a,b,d)
return A.dY(b.length,d,a,b)},
dZ(a,b,c,d){var t=A.cO,s=A.dW
switch(b?-1:a){case 0:throw A.c(new A.b6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
e_(a,b,c){var t,s
if($.cM==null)$.cM=A.cL("interceptor")
if($.cN==null)$.cN=A.cL("receiver")
t=b.length
s=A.dZ(t,c,a,b)
return s},
cy(a){return A.e0(a)},
dV(a,b){return A.aC(v.typeUniverse,A.a3(a.a),b)},
cO(a){return a.a},
dW(a){return a.b},
cL(a){var t,s,r,q=new A.a5("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.c(A.cK("Field name "+a+" not found."))},
cb(a){return v.getIsolateTag(a)},
fO(a){var t,s,r,q,p,o=$.dy.$1(a),n=$.ca[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cf[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.dv.$2(a,o)
if(r!=null){n=$.ca[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cf[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.ch(t)
$.ca[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cf[o]=t
return t}if(q==="-"){p=A.ch(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dB(a,t)
if(q==="*")throw A.c(A.d4(o))
if(v.leafTags[o]===true){p=A.ch(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dB(a,t)},
dB(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cD(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ch(a){return J.cD(a,!1,null,!!a.$it)},
fQ(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.ch(t)
else return J.cD(t,c,null,null)},
fK(){if(!0===$.cB)return
$.cB=!0
A.fL()},
fL(){var t,s,r,q,p,o,n,m
$.ca=Object.create(null)
$.cf=Object.create(null)
A.fJ()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dC.$1(p)
if(o!=null){n=A.fQ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fJ(){var t,s,r,q,p,o,n=B.l()
n=A.a2(B.m,A.a2(B.n,A.a2(B.h,A.a2(B.h,A.a2(B.o,A.a2(B.p,A.a2(B.q(B.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dy=new A.cc(q)
$.dv=new A.cd(p)
$.dC=new A.ce(o)},
a2(a,b){return a(b)||b},
eq(a,b){var t
for(t=0;t<a.length;++t)if(!J.bm(a[t],b[t]))return!1
return!0},
fz(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fT(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
O:function O(a,b){this.a=a
this.b=b},
bh:function bh(a){this.a=a},
bA:function bA(a){this.a=a},
al:function al(){},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aj:function aj(){},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a){this.a=a},
bz:function bz(a){this.a=a},
K:function K(){},
bo:function bo(){},
bp:function bp(){},
bG:function bG(){},
bD:function bD(){},
a5:function a5(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a},
ac:function ac(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a,b){this.a=a
this.b=b
this.c=null},
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
ax:function ax(){},
bf:function bf(){},
bg:function bg(){},
eS(a){return a},
cW(a){return new Float64Array(A.eS(a))},
J(a,b,c){var t
if(!(a>>>0!==a))if(b==null)t=a>c
else t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw A.c(A.fC(a,b,c))
if(b==null)return c
return b},
Z:function Z(){},
ag:function ag(){},
aU:function aU(){},
a_:function a_(){},
ae:function ae(){},
af:function af(){},
aV:function aV(){},
aW:function aW(){},
aX:function aX(){},
aY:function aY(){},
aZ:function aZ(){},
b_:function b_(){},
b0:function b0(){},
ah:function ah(){},
b1:function b1(){},
at:function at(){},
au:function au(){},
av:function av(){},
aw:function aw(){},
cp(a,b){var t=b.c
return t==null?b.c=A.aA(a,"cR",[b.x]):t},
d0(a){var t=a.w
if(t===6||t===7)return A.d0(a.x)
return t===11||t===12},
ec(a){return a.as},
fR(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
cz(a){return A.bS(v.typeUniverse,a,!1)},
Q(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.Q(a0,t,a2,a3)
if(s===t)return a1
return A.dc(a0,s,!0)
case 7:t=a1.x
s=A.Q(a0,t,a2,a3)
if(s===t)return a1
return A.db(a0,s,!0)
case 8:r=a1.y
q=A.a1(a0,r,a2,a3)
if(q===r)return a1
return A.aA(a0,a1.x,q)
case 9:p=a1.x
o=A.Q(a0,p,a2,a3)
n=a1.y
m=A.a1(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.cr(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.a1(a0,k,a2,a3)
if(j===k)return a1
return A.dd(a0,l,j)
case 11:i=a1.x
h=A.Q(a0,i,a2,a3)
g=a1.y
f=A.fr(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.da(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.a1(a0,e,a2,a3)
p=a1.x
o=A.Q(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.cs(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.c(A.aI("Attempted to substitute unexpected RTI kind "+a))}},
a1(a,b,c,d){var t,s,r,q,p=b.length,o=A.bT(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Q(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fs(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bT(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Q(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fr(a,b,c,d){var t,s=b.a,r=A.a1(a,s,c,d),q=b.b,p=A.a1(a,q,c,d),o=b.c,n=A.fs(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bd()
t.a=r
t.b=p
t.c=n
return t},
a(a,b){a[v.arrayRti]=b
return a},
dx(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.fI(t)
return a.$S()}return null},
fM(a,b){var t
if(A.d0(b))if(a instanceof A.K){t=A.dx(a)
if(t!=null)return t}return A.a3(a)},
a3(a){if(a instanceof A.k)return A.ct(a)
if(Array.isArray(a))return A.P(a)
return A.cu(J.T(a))},
P(a){var t=a[v.arrayRti],s=u.q
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
ct(a){var t=a.$ti
return t!=null?t:A.cu(a)},
cu(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.f2(a,t)},
f2(a,b){var t=a instanceof A.K?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ey(v.typeUniverse,t.name)
b.$ccache=s
return s},
fI(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bS(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fH(a){return A.S(A.ct(a))},
cx(a){var t
if(a instanceof A.ax)return A.fD(a.$r,a.P())
t=a instanceof A.K?A.dx(a):null
if(t!=null)return t
if(u.R.b(a))return J.dT(a).a
if(Array.isArray(a))return A.P(a)
return A.a3(a)},
S(a){var t=a.r
return t==null?a.r=new A.bR(a):t},
fD(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
t=A.aC(v.typeUniverse,A.cx(r[0]),"@<0>")
for(s=1;s<q;++s)t=A.df(v.typeUniverse,t,A.cx(r[s]))
return A.aC(v.typeUniverse,t,a)},
y(a){return A.S(A.bS(v.typeUniverse,a,!1))},
f1(a){var t=this
t.b=A.fq(t)
return t.b(a)},
fq(a){var t,s,r,q
if(a===u.K)return A.fb
if(A.U(a))return A.ff
t=a.w
if(t===6)return A.eZ
if(t===1)return A.dr
if(t===7)return A.f5
s=A.fo(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.U)){a.f="$i"+r
if(r==="d")return A.f9
if(a===u.m)return A.f8
return A.fe}}else if(t===10){q=A.fz(a.x,a.y)
return q==null?A.dr:q}return A.eX},
fo(a){if(a.w===8){if(a===u.S)return A.f6
if(a===u.i||a===u.H)return A.fa
if(a===u.N)return A.fd
if(a===u.y)return A.cv}return null},
f0(a){var t=this,s=A.eW
if(A.U(t))s=A.eM
else if(t===u.K)s=A.eJ
else if(A.a4(t)){s=A.eY
if(t===u.M)s=A.eF
else if(t===u.x)s=A.eL
else if(t===u.h)s=A.eB
else if(t===u.W)s=A.eI
else if(t===u.J)s=A.eD
else if(t===u.D)s=A.eG}else if(t===u.S)s=A.eE
else if(t===u.N)s=A.eK
else if(t===u.y)s=A.eA
else if(t===u.H)s=A.eH
else if(t===u.i)s=A.eC
else if(t===u.m)s=A.di
t.a=s
return t.a(a)},
eX(a){var t=this
if(a==null)return A.a4(t)
return A.fN(v.typeUniverse,A.fM(a,t),t)},
eZ(a){if(a==null)return!0
return this.x.b(a)},
fe(a){var t,s=this
if(a==null)return A.a4(s)
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.T(a)[t]},
f9(a){var t,s=this
if(a==null)return A.a4(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.T(a)[t]},
f8(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
dq(a){if(typeof a=="object"){if(a instanceof A.k)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
eW(a){var t=this
if(a==null){if(A.a4(t))return a}else if(t.b(a))return a
throw A.p(A.dm(a,t),new Error())},
eY(a){var t=this
if(a==null||t.b(a))return a
throw A.p(A.dm(a,t),new Error())},
dm(a,b){return new A.ay("TypeError: "+A.d6(a,A.u(b,null)))},
d6(a,b){return A.bv(a)+": type '"+A.u(A.cx(a),null)+"' is not a subtype of type '"+b+"'"},
w(a,b){return new A.ay("TypeError: "+A.d6(a,b))},
f5(a){var t=this
return t.x.b(a)||A.cp(v.typeUniverse,t).b(a)},
fb(a){return a!=null},
eJ(a){if(a!=null)return a
throw A.p(A.w(a,"Object"),new Error())},
ff(a){return!0},
eM(a){return a},
dr(a){return!1},
cv(a){return!0===a||!1===a},
eA(a){if(!0===a)return!0
if(!1===a)return!1
throw A.p(A.w(a,"bool"),new Error())},
eB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.p(A.w(a,"bool?"),new Error())},
eC(a){if(typeof a=="number")return a
throw A.p(A.w(a,"double"),new Error())},
eD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.w(a,"double?"),new Error())},
f6(a){return typeof a=="number"&&Math.floor(a)===a},
eE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.p(A.w(a,"int"),new Error())},
eF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.p(A.w(a,"int?"),new Error())},
fa(a){return typeof a=="number"},
eH(a){if(typeof a=="number")return a
throw A.p(A.w(a,"num"),new Error())},
eI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.w(a,"num?"),new Error())},
fd(a){return typeof a=="string"},
eK(a){if(typeof a=="string")return a
throw A.p(A.w(a,"String"),new Error())},
eL(a){if(typeof a=="string")return a
if(a==null)return a
throw A.p(A.w(a,"String?"),new Error())},
di(a){if(A.dq(a))return a
throw A.p(A.w(a,"JSObject"),new Error())},
eG(a){if(a==null)return a
if(A.dq(a))return a
throw A.p(A.w(a,"JSObject?"),new Error())},
du(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
fm(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.du(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.u(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dn(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", ",a=null
if(a2!=null){t=a2.length
if(a1==null)a1=A.a([],u.s)
else a=a1.length
s=a1.length
for(r=t;r>0;--r)a1.push("T"+(s+r))
for(q=u.Q,p="<",o="",r=0;r<t;++r,o=b){p=p+o+a1[a1.length-1-r]
n=a2[r]
m=n.w
if(!(m===2||m===3||m===4||m===5||n===q))p+=" extends "+A.u(n,a1)}p+=">"}else p=""
q=a0.x
l=a0.y
k=l.a
j=k.length
i=l.b
h=i.length
g=l.c
f=g.length
e=A.u(q,a1)
for(d="",c="",r=0;r<j;++r,c=b)d+=c+A.u(k[r],a1)
if(h>0){d+=c+"["
for(c="",r=0;r<h;++r,c=b)d+=c+A.u(i[r],a1)
d+="]"}if(f>0){d+=c+"{"
for(c="",r=0;r<f;r+=3,c=b){d+=c
if(g[r+1])d+="required "
d+=A.u(g[r+2],a1)+" "+g[r]}d+="}"}if(a!=null){a1.toString
a1.length=a}return p+"("+d+") => "+e},
u(a,b){var t,s,r,q,p,o,n=a.w
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=a.x
s=A.u(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(n===7)return"FutureOr<"+A.u(a.x,b)+">"
if(n===8){q=A.ft(a.x)
p=a.y
return p.length>0?q+("<"+A.du(p,b)+">"):q}if(n===10)return A.fm(a,b)
if(n===11)return A.dn(a,b,null)
if(n===12)return A.dn(a.x,b,a.y)
if(n===13){o=a.x
return b[b.length-1-o]}return"?"},
ft(a){var t=A.dD(a)
if(t!=null)return t
return"minified:"+a},
ez(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
ey(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bS(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aB(a,5,"#")
r=A.bT(t)
for(q=0;q<t;++q)r[q]=s
p=A.aA(a,b,r)
o[b]=p
return p}else return n},
ex(a,b){return A.dg(a.tR,b)},
ew(a,b){return A.dg(a.eT,b)},
bS(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.de(a,null,b,!1)
s.set(b,t)
return t},
aC(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.de(a,b,c,!0)
r.set(c,s)
return s},
df(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.cr(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
de(a,b,c,d){return A.eo(A.ei(a,b,c,d))},
I(a,b){b.a=A.f0
b.b=A.f1
return b},
aB(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.x(null,null)
t.w=b
t.as=c
s=A.I(a,t)
a.eC.set(c,s)
return s},
dc(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eu(a,b,s,c)
a.eC.set(s,t)
return t},
eu(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.U(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.a4(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.x(null,null)
r.w=6
r.x=b
r.as=c
return A.I(a,r)},
db(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.es(a,b,s,c)
a.eC.set(s,t)
return t},
es(a,b,c,d){var t,s
if(d){t=b.w
if(A.U(b)||b===u.K)return b
else if(t===1)return A.aA(a,"cR",[b])
else if(b===u.P||b===u.T)return u.U}s=new A.x(null,null)
s.w=7
s.x=b
s.as=c
return A.I(a,s)},
ev(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.x(null,null)
t.w=13
t.x=b
t.as=r
s=A.I(a,t)
a.eC.set(r,s)
return s},
az(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
er(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
aA(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.az(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.x(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
cr(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.az(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.I(a,p)
a.eC.set(r,o)
return o},
dd(a,b,c){var t,s,r="+"+(b+"("+A.az(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.x(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.I(a,t)
a.eC.set(r,s)
return s},
da(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.az(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.az(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.er(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.x(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.I(a,q)
a.eC.set(s,p)
return p},
cs(a,b,c,d){var t,s=b.as+("<"+A.az(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.et(a,b,c,s,d)
a.eC.set(s,t)
return t},
et(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bT(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.Q(a,b,s,0)
n=A.a1(a,c,s,0)
return A.cs(a,o,n,c!==n)}}m=new A.x(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.I(a,m)},
ei(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eo(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.ek(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.d8(a,s,m,l,!1)
else if(r===46)s=A.d8(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.N(a.u,a.e,l.pop()))
break
case 94:l.push(A.ev(a.u,l.pop()))
break
case 35:l.push(A.aB(a.u,5,"#"))
break
case 64:l.push(A.aB(a.u,2,"@"))
break
case 126:l.push(A.aB(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.em(a,l)
break
case 38:A.el(a,l)
break
case 63:q=a.u
l.push(A.dc(q,A.N(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.db(q,A.N(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.ej(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.d9(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.ep(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.N(a.u,a.e,n)},
ek(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d8(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.ez(t,p.x)[q]
if(o==null)A.bk('No "'+q+'" in "'+A.ec(p)+'"')
d.push(A.aC(t,p,o))}else d.push(q)
return n},
em(a,b){var t,s=a.u,r=A.d7(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aA(s,q,r))
else{t=A.N(s,a.e,q)
switch(t.w){case 11:b.push(A.cs(s,t,r,a.n))
break
default:b.push(A.cr(s,t,r))
break}}},
ej(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.d7(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.N(q,a.e,p)
r=new A.bd()
r.a=t
r.b=o
r.c=n
b.push(A.da(q,s,r))
return
case-4:b.push(A.dd(q,b.pop(),t))
return
default:throw A.c(A.aI("Unexpected state under `()`: "+A.h(p)))}},
el(a,b){var t=b.pop()
if(0===t){b.push(A.aB(a.u,1,"0&"))
return}if(1===t){b.push(A.aB(a.u,4,"1&"))
return}throw A.c(A.aI("Unexpected extended operation "+A.h(t)))},
d7(a,b){var t=b.splice(a.p)
A.d9(a.u,a.e,t)
a.p=b.pop()
return t},
N(a,b,c){if(typeof c=="string")return A.aA(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.en(a,b,c)}else return c},
d9(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.N(a,b,c[t])},
ep(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.N(a,b,c[t])},
en(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.c(A.aI("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.c(A.aI("Bad index "+c+" for "+b.h(0)))},
fN(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.n(a,b,null,c,null)
s.set(c,t)}return t},
n(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.U(d))return!0
t=b.w
if(t===4)return!0
if(A.U(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.n(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.n(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.n(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.n(a,b.x,c,d,e))return!1
return A.n(a,A.cp(a,b),c,d,e)}if(t===6)return A.n(a,q,c,d,e)&&A.n(a,b.x,c,d,e)
if(r===7){if(A.n(a,b,c,d.x,e))return!0
return A.n(a,b,c,A.cp(a,d),e)}if(r===6)return A.n(a,b,c,q,e)||A.n(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.n(a,k,c,j,e)||!A.n(a,j,e,k,c))return!1}return A.dp(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.dp(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.f7(a,b,c,d,e)}if(p&&r===10)return A.fc(a,b,c,d,e)
return!1},
dp(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.n(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.n(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.n(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.n(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.n(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
f7(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aC(a,b,s[p])
return A.dh(a,q,null,c,d.y,e)}return A.dh(a,b.y,null,c,d.y,e)},
dh(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.n(a,b[t],d,e[t],f))return!1
return!0},
fc(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.n(a,s[t],c,r[t],e))return!1
return!0},
a4(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.U(a))if(t!==6)s=t===7&&A.a4(a.x)
return s},
U(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.Q},
dg(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bT(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bd:function bd(){this.c=this.b=this.a=null},
bR:function bR(a){this.a=a},
bc:function bc(){},
ay:function ay(a){this.a=a},
cU(a,b){return new A.ac(a.k("@<0>").ac(b).k("ac<1,2>"))},
cV(a){var t,s
if(A.cC(a))return"{...}"
t=new A.b8("")
try{s={}
$.R.push(a)
t.a+="{"
s.a=!0
a.am(0,new A.by(s,t))
t.a+="}"}finally{$.R.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
j:function j(){},
aT:function aT(){},
by:function by(a,b){this.a=a
this.b=b},
cm(a,b,c){var t,s,r
if(a>4294967295)A.bk(A.C(a,0,4294967295,"length",null))
t=A.a(new Array(a),c.k("e<0>"))
t.$flags=1
s=t
if(a!==0&&b!=null)for(t=s.length,r=0;r<t;++r)s[r]=b
return s},
e8(a,b,c){var t,s,r=A.a([],c.k("e<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.o)(a),++s)r.push(a[s])
r.$flags=1
return r},
L(a,b){var t,s
if(Array.isArray(a))return A.a(a.slice(0),b.k("e<0>"))
t=A.a([],b.k("e<0>"))
for(s=J.bn(a);s.n();)t.push(s.gt())
return t},
d1(a,b,c){var t=J.bn(b)
if(!t.n())return a
if(c.length===0){do a+=A.h(t.gt())
while(t.n())}else{a+=A.h(t.gt())
while(t.n())a=a+c+A.h(t.gt())}return a},
bv(a){if(typeof a=="number"||A.cv(a)||a==null)return J.aF(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cZ(a)},
aI(a){return new A.aH(a)},
cK(a){return new A.A(!1,null,null,a)},
dU(a,b,c){return new A.A(!0,a,b,c)},
C(a,b,c,d,e){return new A.b5(b,c,!0,a,d,"Invalid value")},
d_(a,b,c){if(0>a||a>c)throw A.c(A.C(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.C(b,a,c,"end",null))
return b}return c},
co(a,b){if(a<0)throw A.c(A.C(a,0,null,b,null))
return a},
cS(a,b,c,d){return new A.aL(b,!0,a,d,"Index out of range")},
bb(a){return new A.aq(a)},
d4(a){return new A.b9(a)},
B(a){return new A.aJ(a)},
e6(a,b,c){var t,s
if(A.cC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.a([],u.s)
$.R.push(a)
try{A.fg(a,t)}finally{$.R.pop()}s=A.d1(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cT(a,b,c){var t,s
if(A.cC(a))return b+"..."+c
t=new A.b8(b)
$.R.push(a)
try{s=t
s.a=A.d1(s.a,a,", ")}finally{$.R.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fg(a,b){var t,s,r,q,p,o,n,m=a.gG(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.n())return
t=A.h(m.gt())
b.push(t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
s=b.pop()
r=b.pop()}else{q=m.gt();++k
if(!m.n()){if(k<=4){b.push(A.h(q))
return}s=A.h(q)
r=b.pop()
l+=s.length+2}else{p=m.gt();++k
for(;m.n();q=p,p=o){o=m.gt();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
l-=b.pop().length+2;--k}b.push("...")
return}}r=A.h(q)
s=A.h(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
cX(a,b,c,d){var t
if(B.d===c)return A.d2(B.c.gj(a),J.z(b),$.bl())
if(B.d===d){t=B.c.gj(a)
b=J.z(b)
c=J.z(c)
return A.bF(A.D(A.D(A.D($.bl(),t),b),c))}t=B.c.gj(a)
b=J.z(b)
c=J.z(c)
d=J.z(d)
d=A.bF(A.D(A.D(A.D(A.D($.bl(),t),b),c),d))
return d},
e9(a){var t,s,r=$.bl()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.o)(a),++s)r=A.D(r,J.z(a[s]))
return A.bF(r)},
l:function l(){},
aH:function aH(a){this.a=a},
ap:function ap(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aL:function aL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aq:function aq(a){this.a=a},
b9:function b9(a){this.a=a},
b7:function b7(a){this.a=a},
aJ:function aJ(a){this.a=a},
am:function am(){},
bM:function bM(a){this.a=a},
aN:function aN(){},
ai:function ai(){},
k:function k(){},
bE:function bE(){this.b=this.a=0},
b8:function b8(a){this.a=a},
fU(a){return Math.sin(a)},
fy(a){return Math.cos(a)},
r:function r(a,b,c){this.a=a
this.b=b
this.$ti=c},
cQ(a){var t,s,r=B.b.a6(a,0,new A.br()),q=B.b.a6(a,0,new A.bs()),p=A.L(a,u.X)
B.b.D(p,new A.bt(q/4,r/4))
for(t=0,s=1;s<4;++s){r=p[s]
q=p[t]
if(r.a+r.b<q.a+q.b)t=s}r=A.a([],u.O)
for(s=0;s<4;++s)r.push(p[B.c.M(t+s,4)])
return new A.bq(r[0],r[1],r[2],r[3])},
fA(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a2.length
if(a1<a3*a4*4)throw A.c(A.dU(a1,"rgba","zu kurz"))
a1=Math.max(1,B.a.p(Math.max(a3,a4)/400))
t=B.c.B(a3,a1)
s=B.c.B(a4,a1)
if(t<48||s<48)return null
r=t*s
q=new Uint8Array(r)
p=new Uint8Array(r)
o=new Uint8Array(r)
n=new Uint8Array(r)
m=a1*a1
for(l=0;l<s;++l)for(r=l*t,k=l*a1,j=0;j<t;++j){for(i=j*a1,h=0,g=0,f=0,e=0;e<a1;++e){d=((k+e)*a3+i)*4
for(c=0;c<a1;++c,d+=4){h+=a2[d]
g+=a2[d+1]
f+=a2[d+2]}}h=B.c.B(h,m)
g=B.c.B(g,m)
f=B.c.B(f,m)
b=r+j
q[b]=B.c.H(h*77+g*150+f*29,8)
if(h>g)a=h>f?h:f
else a=g>f?g:f
if(h<g)a0=h<f?h:f
else a0=g<f?g:f
p[b]=a-a0
o[b]=B.c.H(h-g+256,1)
n[b]=B.c.H(B.c.H(h+g,1)-f+256,1)}return A.eP(new A.bP(t,s,q,p,o,n),a1/a3,a1/a4,null)},
bi(a,b){var t,s,r=a.a,q=b.b,p=a.b,o=b.a,n=r*q-p*o
if(Math.abs(n)<0.000001)return null
t=a.c
s=b.c
return new A.r((t*q-p*s)/n,(r*s-t*o)/n,u.X)},
eP(a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i=a3.a,h=a3.b,g=A.aD(A.aD(a3.c,i,h),i,h),f=A.aD(A.aD(a3.d,i,h),i,h),e=A.eh(g,f,i,h),d=A.aD(a3.e,i,h),c=A.aD(a3.f,i,h),b=new A.bK(g,d,c),a=A.a([],u.E),a0=A.f_(e,i,h),a1=A.dt(new A.a0(a0,new A.bX())),a2=A.dt(new A.a0(a0,new A.bY()))
B.b.E(a,A.fi(a1,a2,e,i,h,a6))
for(d=A.dj(A.dk(e.d,i,h,1),i,h,6),c=d.length,t=0;t<d.length;d.length===c||(0,A.o)(d),++t){s=A.ds(d[t])
if(s!=null)a.push(s)}r=A.fk(g)
d=i*h
q=new Uint8Array(d)
for(p=0;p<d;++p)q[p]=g[p]>r?1:0
for(d=A.dj(A.dk(A.eT(q,i,h,2),i,h,2),i,h,3),c=d.length,t=0;t<d.length;d.length===c||(0,A.o)(d),++t){s=A.ds(d[t])
if(s!=null)a.push(s)}for(d=a.length,o=null,t=0;t<a.length;a.length===d||(0,A.o)(a),++t){n=A.fj(a[t])
if(n==null)continue
m=A.eU(n,e,b,i,h,a6)
if(m!=null)c=o==null||m>o.b
else c=!1
if(c)o=new A.bJ(n,m)}if(o==null)return null
l=A.fn(o.a,e,i,h)
d=A.a([],u.O)
for(c=l.length,k=u.X,t=0;t<l.length;l.length===c||(0,A.o)(l),++t){j=l[t]
d.push(new A.r(B.a.F((j.a+0.5)*a4,0,1),B.a.F((j.b+0.5)*a5,0,1),k))}return A.cQ(d)},
eh(c5,c6,c7,c8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c7*c8,c1=new Float32Array(c0),c2=new Float32Array(c0),c3=new Float32Array(c0),c4=new Int32Array(1024)
for(t=c8-1,s=c7-1,r=c6!=null,q=1;q<t;++q)for(p=q*c7,o=1;o<s;++o){n=p+o
m=n-c7
l=m+1
k=c5[l]
j=n+1
i=c5[j]
h=n+c7
g=h+1
f=c5[g]
e=m-1
d=c5[e]
c=n-1
b=c5[c]
a=h-1
a0=c5[a]
a1=k+2*i+f-d-2*b-a0
a2=a0+2*c5[h]+f-d-2*c5[m]-k
a3=a1*a1+a2*a2
if(r){l=c6[l]
j=c6[j]
g=c6[g]
e=c6[e]
c=c6[c]
a=c6[a]
a4=l+2*j+g-e-2*c-a
a5=a+2*c6[h]+g-e-2*c6[m]-l
a6=a4*a4+a5*a5
if(a6>a3){a3=a6
a2=a5
a1=a4}}a7=Math.sqrt(a3)
c1[n]=a1
c2[n]=a2
c3[n]=a7
m=a7>=1023?1023:B.a.au(a7)
c4[m]=c4[m]+1}a8=(c7-2)*(c8-2)
b0=0
b1=0
for(;;){if(!(b1<1024)){a9=0
break}b0+=c4[b1]
if(b0*2>=a8){a9=b1
break}++b1}b2=a9+0.5
b3=Math.max(6,2.5*b2)
b4=new Uint8Array(c0)
for(b5=0,q=1;q<t;++q)for(r=q*c7,o=1;o<s;++o){n=r+o
a7=c3[n]
if(a7<b3)continue
p=c1[n]
b6=Math.abs(p)
m=c2[n]
b7=Math.abs(m)
if(b7<=b6*0.4142){b8=n-1
b9=n+1}else if(b6<=b7*0.4142){b8=n-c7
b9=n+c7}else{l=n-c7
k=n+c7
if(p*m>0){b8=l-1
b9=k+1}else{b8=l+1
b9=k-1}}if(a7>=c3[b8]&&a7>c3[b9]){b4[n]=1;++b5}}return new A.bN(c1,c2,c3,b4,b5,b2,b3)},
f_(a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a8+B.a.a5(Math.sqrt(a8*a8+a9*a9))+2,a5=180*a4,a6=new Int32Array(a5)
for(t=a9-1,s=a8-1,r=a7.b,q=a7.a,p=a7.d,o=1;o<t;++o)for(n=o*a8,m=1;m<s;++m){l=n+m
if(p[l]===0)continue
k=Math.atan2(r[l],q[l])
j=B.a.p((k<0?k+3.141592653589793:k)*180/3.141592653589793)
for(i=-3;i<=3;++i){h=j+i
if(h<0)h+=180
if(h>=180)h-=180
g=h*a4+(B.a.p(m*$.cH()[h]+o*$.cI()[h])+a8)
a6[g]=a6[g]+1}}f=Math.max(14,B.a.p(0.08*Math.min(a8,a9)))
t=u.t
e=A.a([],t)
for(l=0;l<a5;++l)if(a6[l]>=f)e.push(l)
B.b.D(e,new A.c3(a6))
d=A.a([],u.w)
c=A.a([],t)
b=A.a([],t)
for(a5=e.length,a=0;a<e.length;e.length===a5||(0,A.o)(e),++a){l=e[a]
h=B.c.B(l,a4)
a0=B.c.M(l,a4)-a8
t=d.length
a2=0
for(;;){a1=!0
if(!(a2<t)){a1=!1
break}a3=Math.abs(h-c[a2])
if(a3<=4&&Math.abs(a0-b[a2])<=6)break
if(180-a3<=4&&Math.abs(a0+b[a2])<=6)break;++a2}if(a1)continue
d.push(new A.F($.cH()[h],$.cI()[h],a0))
c.push(h)
b.push(a0)
if(d.length>=48)break}return d},
fl(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j=a.b,i=-j,h=a.a,g=a.c,f=g*h,e=g*j,d=Math.sqrt(a1*a1+a2*a2),c=B.a.W(-d-2),b=B.a.a5(2*d+4)
g=b+1
t=new Int32Array(g)
s=new Int32Array(g)
r=Math.max(5,0.8*a0.r)
for(g=a1-3,q=a2-3,p=0,o=0,n=0;n<b;){m=c+n
l=f+m*i
k=e+m*h
if(l>=2&&k>=2&&l<=g&&k<=q){++o
if(A.dl(l,k,h,j,a0,a1,a2,r,2))++p}++n
t[n]=p
s[n]=o}return new A.be(a,c,t,s)},
dl(a,b,c,d,e,f,g,h,i){var t,s,r,q,p,o,n,m,l,k,j
for(t=-i,s=e.a,r=e.b,q=e.c,p=f-2,o=g-2;t<=i;++t){n=B.a.p(a+t*c)
m=B.a.p(b+t*d)
if(n<1||m<1||n>p||m>o)continue
l=m*f+n
k=q[l]
if(k<h)continue
j=s[l]*c+r[l]*d
if(j*j>=0.67*k*k)return!0}return!1},
fi(c4,c5,c6,c7,c8,c9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
if(c4.length<2||c5.length<2)return B.v
t=u.A
s=A.cU(t,u.I)
t=A.L(c4,t)
B.b.E(t,c5)
r=t.length
q=0
for(;q<t.length;t.length===r||(0,A.o)(t),++q){p=t[q]
s.Z(0,p,A.fl(p,c6,c7,c8))}o=new A.c6(c8,c7)
n=o.$2(c4,!0)
m=o.$2(c5,!1)
l=-0.1*c7
k=1.1*c7
j=-0.1*c8
i=1.1*c8
h=A.a([],u.V)
for(t=n.length,r=c7*c8,g=0.1*c8,f=0.1*c7,e=u.O,q=0;q<n.length;n.length===t||(0,A.o)(n),++q){d=n[q]
c=d.a
b=d.b
for(d=m.length,a=0;a<m.length;m.length===d||(0,A.o)(m),++a){a0=m[a]
a1=a0.a
a2=a0.b
a3=A.bi(c,a1)
a4=A.bi(c,a2)
a5=A.bi(b,a2)
a6=A.bi(b,a1)
if(a3==null||a4==null||a5==null||a6==null)continue
a7=A.a([a3,a4,a5,a6],e)
if(B.b.a4(a7,new A.c4(l,k,j,i)))continue
if(a4.a-a3.a<f||a5.a-a6.a<f)continue
if(a6.b-a3.b<g||a5.b-a4.b<g)continue
a8=A.cw(a7)/r
if(a8<0.06)continue
for(a9=1,b0=1,b1=0;b1<4;b1=b3){b2=a7[b1]
b3=b1+1
b4=a7[b3%4]
A:{if(0===b1){a0=c
break A}if(1===b1){a0=a2
break A}if(2===b1){a0=b
break A}a0=a1
break A}b5=s.Y(0,a0)
a0=b5.a
b6=a0.b
a0=a0.a
b7=-b2.a*b6+b2.b*a0
b8=-b4.a*b6+b4.b*a0
if(b7>b8){b9=b8
b8=b7
b7=b9}c0=(b8-b7)*0.06
c1=b5.aq(b7+c0,b8-c0)
c2=c1.a
c3=c1.b<0.5?0:c2
a9*=c3
if(c3<b0)b0=c3}if(b0<0.3)continue
h.push(new A.O(Math.pow(a8,0.5)*Math.pow(a9,0.25),a7))}}B.b.D(h,new A.c5())
t=A.a([],u.E)
for(s=A.cq(h,0,A.dw(24,"count",u.S),u.B),r=s.$ti,s=new A.v(s,s.gm(0),r.k("v<q.E>")),r=r.k("q.E");s.n();){b1=s.d
t.push((b1==null?r.a(b1):b1).b)}return t},
fj(a){var t,s,r,q,p,o,n
if(a.length!==4)return null
t=u.O
s=A.a([],t)
for(r=a.length,q=u.X,p=0;p<a.length;a.length===r||(0,A.o)(a),++p){o=a[p]
s.push(new A.r(o.a,o.b,q))}n=A.cQ(s)
if(!n.gao())return null
t=A.a([],t)
for(s=n.gL(),p=0;p<4;++p){o=s[p]
t.push(new A.r(o.a,o.b,q))}return t},
as(a,b){var t=Math.abs(a[0]-b[0])
return a.length>1?t+2*(Math.abs(a[1]-b[1])+Math.abs(a[2]-b[2])):t},
d5(a){var t,s=B.b.gV(a).length,r=A.a([],u.n)
for(t=0;t<s;++t)r.push(new A.bL(a,t).$0())
return r},
eU(f1,f2,f3,f4,f5,f6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=A.cw(f1)/(f4*f5)
if(f0<0.06)return e9
for(t=0;t<4;){s=f1[(t+3)%4]
r=f1[t];++t
q=f1[t%4]
p=r.a
o=s.a-p
n=r.b
m=s.b-n
l=q.a-p
k=q.b-n
j=Math.sqrt(o*o+m*m)*Math.sqrt(l*l+k*k)
if(j===0)return e9
if(Math.abs((o*l+m*k)/j)>0.77)return e9}i=new A.bZ(f1)
p=u.b
h=A.a([],p)
for(g=0;g<10;++g)for(n=0.12+g*0.084,f=0;f<10;++f){e=i.$2(n,0.12+f*0.084)
d=B.a.p(e.a)
c=B.a.p(e.b)
if(d<0||c<0||d>=f4||c>=f5)continue
h.push(f3.U(c*f4+d))}if(h.length<30)return e9
B.b.D(h,new A.c_())
b=A.d5(B.b.q(h,B.c.T(h.length*6,10)))
n=f1[0]
a=f1[1]
a0=f1[2]
a1=f1[3]
a2=(n.a+a.a+a0.a+a1.a)/4
a3=(n.b+a.b+a0.b+a1.b)/4
a4=Math.max(5,0.8*f2.r)
a1=u.n
a5=A.a([],a1)
a6=A.a([],a1)
a0=u.G
a7=A.a([],a0)
a8=A.a([],a0)
for(n=f4-3,a=f5-3,a9=0;a9<4;){s=f1[a9];++a9
r=f1[a9%4]
b0=s.I(r)
if(b0<8)return e9
a0=s.b
b1=r.b-a0
b2=-b1/b0
b3=s.a
b4=r.a-b3
b5=b4/b0
if((a2-b3)*b2+(a3-a0)*b5<0){b2=-b2
b5=-b5}b6=Math.max(12,B.a.B(b0,1.5))
b7=A.a([],p)
b8=A.a([],p)
for(b9=5*b2,c0=5*b5,c1=0,c2=0,c3=0,c4=0;c4<=b6;++c4){c5=0.06+0.88*c4/b6
c6=b3+b4*c5
c7=a0+b1*c5;++c3
if(c6<2||c7<2||c6>n||c7>a)continue;++c1
if(A.dl(c6,c7,b2,b5,f2,f4,f5,a4,3))++c2
if((c4&1)===1)continue
c8=B.a.p(c6+b9)
c9=B.a.p(c7+c0)
if(c8>=0&&c9>=0&&c8<f4&&c9<f5)b7.push(f3.U(c9*f4+c8))
d0=B.a.p(c6-b9)
d1=B.a.p(c7-c0)
if(d0>=0&&d1>=0&&d0<f4&&d1<f5)b8.push(f3.U(d1*f4+d0))}a5.push(c1===0?0:c2/c1)
a6.push(c1/c3)
a7.push(b7)
a8.push(b8)}p=A.a([],p)
for(n=a8.length,d2=0;d2<a8.length;a8.length===n||(0,A.o)(a8),++d2)B.b.E(p,a8[d2])
d3=p.length>=20?A.d5(p):e9
d4=new A.c1()
n=d3==null
d5=n?0:Math.max(20,2.5*d4.$2(p,d3))
d6=Math.max(20,2.5*d4.$2(B.b.q(h,B.c.T(h.length*6,10)),b))
d7=!n&&A.as(d3,b)>=15
d8=A.a([],a1)
for(p=2*d5,d9=1,e0=1,e1=0,a9=0;a9<4;++a9){if(a6[a9]<0.4){++e1
e2=0.45}else{e2=a5[a9]
if(d3!=null){e3=0
if(d7)for(n=a7[a9],a=n.length,d2=0;d2<n.length;n.length===a||(0,A.o)(n),++d2){e4=n[d2]
e5=A.as(e4,d3)
if(e5<=d5&&e5<0.6*A.as(e4,b))++e3}for(n=a8[a9],a=n.length,e6=0,d2=0;d2<n.length;n.length===a||(0,A.o)(n),++d2){e4=n[d2]
if(A.as(e4,d3)>p&&A.as(e4,b)>d6)++e6}n=a7[a9].length
e7=n===0?0:e3/n
n=a8[a9].length
e8=n===0?0:e6/n
e2*=(1-0.4*e7)*(1-0.3*e8)}}d8.push(e2)
d9*=e2
if(e2<e0)e0=e2}p=B.b.ar(d8,new A.c0())
if(e1>1||e0<0.3||p/4<0.5)return e9
return Math.pow(Math.min(f0,1),0.5)*Math.pow(d9,0.25)},
fn(c4,c5,c6,c7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c4[0],b8=c4[1],b9=c4[2],c0=c4[3],c1=(b7.a+b8.a+b9.a+c0.a)/4,c2=(b7.b+b8.b+b9.b+c0.b)/4,c3=A.a([],u.d)
for(b7=0.8*c5.r,b8=c5.c,b9=c5.a,c0=c5.b,t=c6-2,s=c7-2,r=u.i,q=u.n,p=0;p<4;){o=c4[p];++p
n=c4[p%4]
m=o.I(n)
l=o.b
k=n.b-l
j=-k/m
i=o.a
h=n.a-i
g=h/m
if((c1-i)*j+(c2-l)*g<0){j=-j
g=-g}f=A.a([],q)
e=A.a([],q)
d=A.a([],q)
c=Math.max(12,B.a.B(m,1.5))
for(b=0;b<=c;++b){a=0.08+0.84*b/c
a0=i+h*a
a1=l+k*a
a2=A.cm(9,0,r)
for(a3=0,a4=0,a5=-4;a5<=4;++a5){a6=B.a.p(a0+a5*j)
a7=B.a.p(a1+a5*g)
if(a6<1||a7<1||a6>t||a7>s)continue
a8=a7*c6+a6
a9=b8[a8]
b0=b9[a8]*j+c0[a8]*g
if(b0*b0<0.67*a9*a9)continue
a2[a5+4]=a9
if(a9>a3){a4=a5
a3=a9}}if(a3<Math.max(5,b7))continue
if(a4>-4&&a4<4){b1=a2[a4+3]
a9=a2[a4+4]
b2=a2[a4+5]
b3=b1-2*a9+b2
b4=b3<0?a4+B.a.F(0.5*(b1-b2)/b3,-0.5,0.5):a4}else b4=a4
f.push(a0+b4*j)
e.push(a1+b4*g)
d.push(a3)}c3.push(A.eV(f,e,d,m))}if(B.b.a4(c3,new A.c8()))return c4
b5=A.a([],u.O)
for(b7=c6*c6+c7*c7,p=0;p<4;++p){b8=c3[(p+3)%4]
b8.toString
b9=c3[p]
b9.toString
b6=A.bi(b8,b9)
if(b6==null)return c4
if(b6.I(c4[p])>0.03*Math.sqrt(b7))return c4
b5.push(b6)}return b5},
eV(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a.length
if(b<Math.max(8,a2*0.25))return null
t=A.cm(b,!0,u.y)
for(b=u.u,s=null,r=0;r<2;++r,t=l){for(q=a.length,p=0,o=0,n=0,m=0;m<q;++m){if(!t[m])continue
l=a1[m]
p+=l
o+=l*a[m]
n+=l*a0[m]}if(p===0)return s
o/=p
n/=p
for(k=0,j=0,i=0,m=0;m<q;++m){if(!t[m])continue
h=a[m]-o
g=a0[m]-n
l=a1[m]
f=l*h
k+=f*h
j+=l*g*g
i+=f*g}e=0.5*Math.atan2(2*i,k-j)
d=-Math.sin(e)
c=Math.cos(e)
q=o*d+n*c
s=new A.F(d,c,q)
l=A.a([],b)
for(m=0;m<a.length;++m)l.push(Math.abs(a[m]*d+a0[m]*c-q)<=1.5)
if(new A.a0(l,new A.c2()).gm(0)<8)return s}return s},
dj(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=b3*b4,a8=new Int32Array(a7),a9=new Int32Array(a7),b0=A.a([],u.r),b1=0.1*b3*b4
for(a7=b2.length,t=0,s=0;s<a7;++s){if(b2[s]===0||a8[s]!==0)continue;++t
a9[0]=s
a8[s]=t
for(r=b4,q=b3,p=1,o=0,n=0,m=0;p>0;){--p
l=a9[p];++o
k=B.c.M(l,b3)
j=B.c.B(l,b3)
if(k<q)q=k
if(k>n)n=k
if(j<r)r=j
if(j>m)m=j
for(i=-1;i<=1;++i){h=j+i
if(h<0||h>=b4)continue
for(g=h*b3,f=-1;f<=1;++f){e=k+f
if(e<0||e>=b3)continue
d=g+e
if(b2[d]!==0&&a8[d]===0){a8[d]=t
c=p+1
a9[p]=d
p=c}}}}if((n-q+1)*(m-r+1)>=b1&&o>=40)b0.push(new A.bh([t,n,m,q,r]))}B.b.D(b0,new A.bU())
b=A.a([],u.E)
for(a7=A.cq(b0,0,A.dw(b5,"count",u.S),u.e),g=a7.$ti,a7=new A.v(a7,a7.gm(0),g.k("v<q.E>")),a=u.X,a0=u.O,g=g.k("q.E");a7.n();){a1=a7.d
if(a1==null)a1=g.a(a1)
a2=A.a([],a0)
for(a3=a1.a,j=a3[4];j<=a3[2];++j){for(k=a3[3],a4=j*b3,a5=-1,a6=-1;k<=a3[1];++k)if(a8[a4+k]===a3[0]){if(a5<0)a5=k
a6=k}if(a5>=0){a2.push(new A.r(a5,j,a))
a2.push(new A.r(a6,j,a))}}b.push(A.eO(a2))}return b},
eO(a){var t,s,r,q,p,o,n,m,l,k
if(a.length<3)return a
t=u.X
s=A.L(a,t)
B.b.D(s,new A.bV())
r=new A.bW()
q=u.O
p=A.a([],q)
for(o=s.length,n=0;n<s.length;s.length===o||(0,A.o)(s),++n){m=s[n]
for(;;){l=p.length
if(!(l>=2&&r.$3(p[l-2],B.b.gK(p),m)<=0))break
p.pop()}p.push(m)}k=A.a([],q)
for(q=A.P(s).k("ak<1>"),s=new A.ak(s,q),s=new A.v(s,s.gm(0),q.k("v<q.E>")),q=q.k("q.E");s.n();){o=s.d
if(o==null)o=q.a(o)
for(;;){l=k.length
if(!(l>=2&&r.$3(k[l-2],B.b.gK(k),o)<=0))break
k.pop()}k.push(o)}t=A.L(B.b.i(p,0,p.length-1),t)
B.b.E(t,B.b.i(k,0,k.length-1))
return t},
ds(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a1.length<4)return null
for(t=0,s=0;r=a1.length,s<r;s=q){q=s+1
t+=a1[s].I(a1[q%r])}p=t*0.004
for(o=a1;r=o.length,r>24;){o=A.fp(a1,p)
p*=1.5}if(r<4)return null
for(n=r-3,m=r-2,l=r-1,k=u.O,j=-1,i=null,h=0;h<n;h=g)for(g=h+1,f=g;f<m;f=e)for(e=f+1,d=e;d<l;d=c)for(c=d+1,b=c;b<r;++b){a=A.a([o[h],o[f],o[d],o[b]],k)
a0=A.cw(a)
if(a0>j){i=a
j=a0}}return i},
fp(a,b){var t,s,r,q,p,o,n,m,l,k,j=a.length
if(j<=4)return a
for(t=0,s=-1,r=1;r<j;++r){q=a[0]
p=a[r]
o=q.a-p.a
n=q.b-p.b
m=q.$ti.c.a(o*o+n*n)
if(m>s){s=m
t=r}}j=J.aE(a)
l=A.c9(j.i(a,0,t+1),b)
q=u.X
j=A.L(j.q(a,t),q)
j.push(a[0])
k=A.c9(j,b)
j=A.L(J.cj(l,0,l.length-1),q)
B.b.E(j,J.cj(k,0,k.length-1))
return j},
c9(a,b){var t,s,r,q,p,o,n,m,l
if(a.length<3)return a
t=J.aE(a)
s=t.gV(a)
r=t.gK(a)
for(q=0,p=0,o=1;o<a.length-1;++o){n=A.eR(a[o],s,r)
if(n>p){p=n
q=o}}if(p<=b)return A.a([s,r],u.O)
m=A.c9(t.i(a,0,q+1),b)
l=A.c9(t.q(a,q),b)
t=A.L(J.cj(m,0,m.length-1),u.X)
B.b.E(t,l)
return t},
eR(a,b,c){var t=b.a,s=c.a-t,r=b.b,q=c.b-r,p=Math.sqrt(s*s+q*q)
if(p===0)return a.I(b)
return Math.abs((a.a-t)*q-(a.b-r)*s)/p},
cw(a){var t,s,r,q,p
for(t=a.length,s=0,r=0;r<t;){q=a[r];++r
p=a[r%t]
s+=q.a*p.b-p.a*q.b}return Math.abs(s)/2},
aD(a,b,c){var t,s,r,q,p,o,n,m=b*c,l=new Uint16Array(m)
for(t=b-1,s=0;s<c;++s){r=s*b
for(q=0;q<b;++q){for(p=0,o=-2;o<=2;++o)p+=a[r+B.c.F(q+o,0,t)]*B.i[o+2]
l[r+q]=p}}n=new Uint8Array(m)
for(m=c-1,s=0;s<c;++s)for(t=s*b,q=0;q<b;++q){for(p=0,o=-2;o<=2;++o)p+=l[B.c.F(s+o,0,m)*b+q]*B.i[o+2]
n[t+q]=p+128>>>8}return n},
fk(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.cm(256,0,u.S)
for(t=a.length,s=0;s<t;++s){r=a[s]
g[r]=g[r]+1}for(q=0,p=0;p<256;++p)q+=p*g[p]
for(o=0,n=0,m=0,l=127,k=0;k<256;++k){j=g[k]
n+=j
if(n===0)continue
i=t-n
if(i===0)break
o+=k*j
j=o/n-(q-o)/i
h=n*i*j*j
if(h>m){l=k
m=h}}return l},
dk(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=b-1,s=c-1,r=b*c,q=a,p=0;p<d;++p,q=o){o=new Uint8Array(r)
for(n=0;n<c;++n)for(m=n*b,l=n>0,k=n<s,j=0;j<b;++j){i=m+j
h=!0
if(q[i]===0)if(!(j>0&&q[i-1]!==0))if(!(j<t&&q[i+1]!==0))if(!(l&&q[i-b]!==0))h=k&&q[i+b]!==0
if(h)o[i]=1}}return q},
eT(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
for(t=c-1,s=b-1,r=b*c,q=a,p=0;p<d;++p,q=o){o=new Uint8Array(r)
for(n=1;n<t;++n)for(m=n*b,l=1;l<s;++l){k=m+l
if(q[k]!==0&&q[k-1]!==0&&q[k+1]!==0&&q[k-b]!==0&&q[k+b]!==0)o[k]=1}}return q},
dt(a){var t,s,r,q,p,o=u.S,n=A.cU(o,o),m=A.a([],u.w)
for(o=J.bn(a.a),t=new A.ar(o,a.b);t.n();){s=o.gt()
r=Math.atan2(s.b,s.a)*180/3.141592653589793
q=B.a.W((r<0?r+180:r)/4)
p=n.Y(0,q)
if(p==null)p=0
if(p>=5)continue
n.Z(0,q,p+1)
m.push(s)
if(m.length>=24)break}return m},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(){},
bs:function bs(){},
bt:function bt(a,b){this.a=a
this.b=b},
bu:function bu(){},
bP:function bP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
bX:function bX(){},
bY:function bY(){},
bN:function bN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c3:function c3(a){this.a=a},
c6:function c6(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(){},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
c_:function c_(){},
c1:function c1(){},
c0:function c0(){},
c8:function c8(){},
c2:function c2(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
fP(){var t,s=v.G,r=s.self,q=new A.cg()
if(typeof q=="function")A.bk(A.cK("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.eN,q)
t[$.cF()]=q
r.onmessage=t
s.self.postMessage({type:"ready"})},
cg:function cg(){},
dD(a){return v.mangledGlobalNames[a]},
fV(a){throw A.p(new A.aS("Field '"+a+"' has been assigned during initialization."),new Error())},
eN(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
fB(a,b,c){if(b<1||c<1||a.length<b*c*4)return null
return A.fA(a,b,c)},
fS(a){var t,s,r,q=u.n,p=A.a([],q)
for(t=a.gL(),s=0;s<4;++s){r=t[s]
B.b.E(p,A.a([r.a,r.b],q))}return p}},B={}
var w=[A,J,B]
var $={}
A.ck.prototype={}
J.aM.prototype={
C(a,b){return a===b},
gj(a){return A.b3(a)},
h(a){return"Instance of '"+A.b4(a)+"'"},
gl(a){return A.S(A.cu(this))}}
J.aQ.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gl(a){return A.S(u.y)},
$if:1,
$ibj:1}
J.a7.prototype={
C(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$if:1}
J.aa.prototype={$im:1}
J.H.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.b2.prototype={}
J.M.prototype={}
J.G.prototype={
h(a){var t=a[$.dF()]
if(t==null)t=a[$.cF()]
if(t==null)return this.aa(a)
return"JavaScript function for "+J.aF(t)}}
J.a9.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.ab.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.e.prototype={
aj(a,b){a.$flags&1&&A.cE(a,29)
a.push(b)},
E(a,b){var t,s
a.$flags&1&&A.cE(a,"addAll",2)
if(Array.isArray(b)){this.ab(a,b)
return}for(t=b.length,s=0;s<b.length;b.length===t||(0,A.o)(b),++s)a.push(b[s])},
ab(a,b){var t,s=b.length
if(s===0)return
if(a===b)throw A.c(A.B(a))
for(t=0;t<s;++t)a.push(b[t])},
ar(a,b){var t,s,r=a.length
if(r===0)throw A.c(A.aO())
t=a[0]
for(s=1;s<r;++s){t=b.$2(t,a[s])
if(r!==a.length)throw A.c(A.B(a))}return t},
al(a,b,c){var t,s,r=a.length
for(t=b,s=0;s<r;++s){t=c.$2(t,a[s])
if(a.length!==r)throw A.c(A.B(a))}return t},
a6(a,b,c){return this.al(a,b,c,u.z)},
v(a,b){return a[b]},
i(a,b,c){var t=a.length
if(b>t)throw A.c(A.C(b,0,t,"start",null))
if(c==null)c=t
else if(c<b||c>t)throw A.c(A.C(c,b,t,"end",null))
if(b===c)return A.a([],A.P(a))
return A.a(a.slice(b,c),A.P(a))},
q(a,b){return this.i(a,b,null)},
gV(a){if(a.length>0)return a[0]
throw A.c(A.aO())},
gK(a){var t=a.length
if(t>0)return a[t-1]
throw A.c(A.aO())},
a4(a,b){var t,s=a.length
for(t=0;t<s;++t){if(b.$1(a[t]))return!0
if(a.length!==s)throw A.c(A.B(a))}return!1},
D(a,b){var t,s,r,q,p
a.$flags&2&&A.cE(a,"sort")
t=a.length
if(t<2)return
if(b==null)b=J.f3()
if(t===2){s=a[0]
r=a[1]
if(b.$2(s,r)>0){a[0]=r
a[1]=s}return}q=0
if(A.P(a).c.b(null))for(p=0;p<a.length;++p)if(a[p]===void 0){a[p]=null;++q}a.sort(A.fw(b,2))
if(q>0)this.ag(a,q)},
a0(a){return this.D(a,null)},
ag(a,b){var t,s=a.length
for(;t=s-1,s>0;s=t)if(a[t]===null){a[t]=void 0;--b
if(b===0)break}},
h(a){return A.cT(a,"[","]")},
gG(a){return new J.aG(a,a.length,A.P(a).k("aG<1>"))},
gj(a){return A.b3(a)},
$id:1}
J.aP.prototype={
av(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.b4(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.bw.prototype={}
J.aG.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.c(A.o(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.X.prototype={
u(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gJ(b)
if(this.gJ(a)===t)return 0
if(this.gJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gJ(a){return a===0?1/a<0:a<0},
ga_(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
au(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.c(A.bb(""+a+".toInt()"))},
a5(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.c(A.bb(""+a+".ceil()"))},
W(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.c(A.bb(""+a+".floor()"))},
p(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.bb(""+a+".round()"))},
F(a,b,c){if(this.u(b,c)>0)throw A.c(A.fv(b))
if(this.u(a,b)<0)return b
if(this.u(a,c)>0)return c
return a},
a9(a,b){var t
if(b>20)throw A.c(A.C(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gJ(a))return"-"+t
return t},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
M(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
B(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a2(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.a2(a,b)},
a2(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.c(A.bb("Result of truncating division is "+A.h(t)+": "+A.h(a)+" ~/ "+A.h(b)))},
H(a,b){var t
if(a>0)t=this.ah(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ah(a,b){return b>31?0:a>>>b},
gl(a){return A.S(u.H)},
$ii:1}
J.W.prototype={
ga_(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
gl(a){return A.S(u.S)},
$if:1,
$ib:1}
J.a8.prototype={
gl(a){return A.S(u.i)},
$if:1}
J.Y.prototype={
u(a,b){var t
if(a===b)t=0
else t=a<b?-1:1
return t},
h(a){return a},
gj(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gl(a){return A.S(u.N)},
$if:1,
$ian:1}
A.aS.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bC.prototype={}
A.aK.prototype={}
A.q.prototype={
gG(a){var t=this
return new A.v(t,t.gm(t),A.ct(t).k("v<q.E>"))},
ap(a,b){var t,s,r,q=this,p=q.gm(q)
if(b.length!==0){if(p===0)return""
t=A.h(q.v(0,0))
if(p!==q.gm(q))throw A.c(A.B(q))
for(s=t,r=1;r<p;++r){s=s+b+A.h(q.v(0,r))
if(p!==q.gm(q))throw A.c(A.B(q))}return s.charCodeAt(0)==0?s:s}else{for(r=0,s="";r<p;++r){s+=A.h(q.v(0,r))
if(p!==q.gm(q))throw A.c(A.B(q))}return s.charCodeAt(0)==0?s:s}}}
A.ao.prototype={
gae(){var t=this.a.length,s=this.c
if(s>t)return t
return s},
gai(){var t=this.a.length,s=this.b
if(s>t)return t
return s},
gm(a){var t,s=this.a.length,r=this.b
if(r>=s)return 0
t=this.c
if(t>=s)return s-r
return t-r},
v(a,b){var t=this,s=t.gai()+b,r=t.gae()
if(s>=r)throw A.c(A.cS(b,t.gm(0),t,"index"))
return J.ci(t.a,s)}}
A.v.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=J.fE(r),p=q.gm(r)
if(s.b!==p)throw A.c(A.B(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.v(r,t);++s.c
return!0}}
A.ad.prototype={
gm(a){return this.a.length},
v(a,b){return this.b.$1(J.ci(this.a,b))}}
A.a0.prototype={
gG(a){return new A.ar(J.bn(this.a),this.b)}}
A.ar.prototype={
n(){var t,s
for(t=this.a,s=this.b;t.n();)if(s.$1(t.gt()))return!0
return!1},
gt(){return this.a.gt()}}
A.a6.prototype={}
A.ak.prototype={
gm(a){return this.a.length},
v(a,b){var t=this.a
return J.ci(t,t.length-1-b)}}
A.O.prototype={$r:"+(1,2)",$s:1}
A.bh.prototype={$r:"+label,maxX,maxY,minX,minY(1,2,3,4,5)",$s:2}
A.bA.prototype={
$0(){return B.a.W(1000*this.a.now())}}
A.al.prototype={}
A.bH.prototype={
A(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.aj.prototype={
h(a){return"Null check operator used on a null value"}}
A.aR.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.ba.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.bz.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.K.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dE(s==null?"unknown":s)+"'"},
gaw(){return this},
$C:"$1",
$R:1,
$D:null}
A.bo.prototype={$C:"$0",$R:0}
A.bp.prototype={$C:"$2",$R:2}
A.bG.prototype={}
A.bD.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dE(t)+"'"}}
A.a5.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a5))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dA(this.a)^A.b3(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.b4(this.a)+"'")}}
A.b6.prototype={
h(a){return"RuntimeError: "+this.a}}
A.ac.prototype={
Y(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.an(b)},
an(a){var t,s,r=this.d
if(r==null)return null
t=r[J.z(a)&1073741823]
s=this.a8(t,a)
if(s<0)return null
return t[s].b},
Z(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.a1(t==null?n.b=n.R():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.a1(s==null?n.c=n.R():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.R()
q=J.z(b)&1073741823
p=r[q]
if(p==null)r[q]=[n.S(b,c)]
else{o=n.a8(p,b)
if(o>=0)p[o].b=c
else p.push(n.S(b,c))}}},
am(a,b){var t=this,s=t.e,r=t.r
while(s!=null){b.$2(s.a,s.b)
if(r!==t.r)throw A.c(A.B(t))
s=s.c}},
a1(a,b,c){var t=a[b]
if(t==null)a[b]=this.S(b,c)
else t.b=c},
S(a,b){var t=this,s=new A.bx(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&1073741823
return s},
a8(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bm(a[s].a,b))return s
return-1},
h(a){return A.cV(this)},
R(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bx.prototype={}
A.cc.prototype={
$1(a){return this.a(a)}}
A.cd.prototype={
$2(a,b){return this.a(a,b)}}
A.ce.prototype={
$1(a){return this.a(a)}}
A.ax.prototype={
h(a){return this.a3(!1)},
a3(a){var t,s,r,q,p,o=this.af(),n=this.P(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
p=n[r]
m=a?m+A.cZ(p):m+A.h(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
af(){var t,s=this.$s
while($.bQ.length<=s)$.bQ.push(null)
t=$.bQ[s]
if(t==null){t=this.ad()
$.bQ[s]=t}return t},
ad(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.a(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
l[r]=s[t]}}l=A.e8(l,!1,u.K)
l.$flags=3
return l}}
A.bf.prototype={
P(){return[this.a,this.b]},
C(a,b){if(b==null)return!1
return b instanceof A.bf&&this.$s===b.$s&&J.bm(this.a,b.a)&&J.bm(this.b,b.b)},
gj(a){return A.cX(this.$s,this.a,this.b,B.d)}}
A.bg.prototype={
P(){return this.a},
C(a,b){if(b==null)return!1
return b instanceof A.bg&&this.$s===b.$s&&A.eq(this.a,b.a)},
gj(a){return A.cX(this.$s,A.e9(this.a),B.d,B.d)}}
A.Z.prototype={
gl(a){return B.w},
$if:1}
A.ag.prototype={}
A.aU.prototype={
gl(a){return B.x},
$if:1}
A.a_.prototype={
gm(a){return a.length},
$it:1}
A.ae.prototype={$id:1}
A.af.prototype={$id:1}
A.aV.prototype={
gl(a){return B.y},
i(a,b,c){return new Float32Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.aW.prototype={
gl(a){return B.z},
i(a,b,c){return new Float64Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.aX.prototype={
gl(a){return B.A},
i(a,b,c){return new Int16Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.aY.prototype={
gl(a){return B.B},
i(a,b,c){return new Int32Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.aZ.prototype={
gl(a){return B.C},
i(a,b,c){return new Int8Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.b_.prototype={
gl(a){return B.E},
i(a,b,c){return new Uint16Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.b0.prototype={
gl(a){return B.F},
i(a,b,c){return new Uint32Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.ah.prototype={
gl(a){return B.G},
gm(a){return a.length},
i(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.b1.prototype={
gl(a){return B.H},
gm(a){return a.length},
i(a,b,c){return new Uint8Array(a.subarray(b,A.J(b,c,a.length)))},
q(a,b){return this.i(a,b,null)},
$if:1}
A.at.prototype={}
A.au.prototype={}
A.av.prototype={}
A.aw.prototype={}
A.x.prototype={
k(a){return A.aC(v.typeUniverse,this,a)},
ac(a){return A.df(v.typeUniverse,this,a)}}
A.bd.prototype={}
A.bR.prototype={
h(a){return A.u(this.a,null)}}
A.bc.prototype={
h(a){return this.a}}
A.ay.prototype={}
A.j.prototype={
gG(a){return new A.v(a,a.length,A.a3(a).k("v<j.E>"))},
v(a,b){return a[b]},
gV(a){if(a.length===0)throw A.c(A.aO())
return a[0]},
gK(a){var t=a.length
if(t===0)throw A.c(A.aO())
return a[t-1]},
i(a,b,c){var t,s=a.length
if(c==null)c=s
A.d_(b,c,s)
A.d_(b,c,s)
t=A.a3(a).k("j.E")
t=A.L(A.cq(a,b,c,t),t)
return t},
q(a,b){return this.i(a,b,null)},
h(a){return A.cT(a,"[","]")}}
A.aT.prototype={
h(a){return A.cV(this)}}
A.by.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.h(a)
s.a=(s.a+=t)+": "
t=A.h(b)
s.a+=t}}
A.l.prototype={}
A.aH.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bv(t)
return"Assertion failed"}}
A.ap.prototype={}
A.A.prototype={
gO(){return"Invalid argument"+(!this.a?"(s)":"")},
gN(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gO()+r+p
if(!t.a)return o
return o+t.gN()+": "+A.bv(t.gX())},
gX(){return this.b}}
A.b5.prototype={
gX(){return this.b},
gO(){return"RangeError"},
gN(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.h(r):""
else if(r==null)t=": Not greater than or equal to "+A.h(s)
else if(r>s)t=": Not in inclusive range "+A.h(s)+".."+A.h(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.h(s)
return t}}
A.aL.prototype={
gX(){return this.b},
gO(){return"RangeError"},
gN(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t}}
A.aq.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b9.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b7.prototype={
h(a){return"Bad state: "+this.a}}
A.aJ.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bv(t)+"."}}
A.am.prototype={
h(a){return"Stack Overflow"},
$il:1}
A.bM.prototype={
h(a){return"Exception: "+this.a}}
A.aN.prototype={
gm(a){var t,s=this.gG(this)
for(t=0;s.n();)++t
return t},
v(a,b){var t,s
A.co(b,"index")
t=this.gG(this)
for(s=b;t.n();){if(s===0)return t.gt();--s}throw A.c(A.cS(b,b-s,this,"index"))},
h(a){return A.e6(this,"(",")")}}
A.ai.prototype={
gj(a){return A.k.prototype.gj.call(this,0)},
h(a){return"null"}}
A.k.prototype={$ik:1,
C(a,b){return this===b},
gj(a){return A.b3(this)},
h(a){return"Instance of '"+A.b4(this)+"'"},
gl(a){return A.fH(this)},
toString(){return this.h(this)}}
A.bE.prototype={
gak(){var t,s=this.b
if(s==null)s=$.cn.$0()
t=s-this.a
if($.cG()===1000)return t
return B.c.T(t,1000)}}
A.b8.prototype={
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.r.prototype={
h(a){return"Point("+A.h(this.a)+", "+A.h(this.b)+")"},
C(a,b){if(b==null)return!1
return b instanceof A.r&&this.a===b.a&&this.b===b.b},
gj(a){return A.d2(B.a.gj(this.a),B.a.gj(this.b),0)},
I(a){var t=this.a-a.a,s=this.b-a.b
return Math.sqrt(t*t+s*s)}}
A.bq.prototype={
gL(){var t=this
return A.a([t.a,t.b,t.c,t.d],u.O)},
gao(){var t,s,r,q,p,o,n,m,l,k=this.gL()
for(t=null,s=0;s<4;s=q){r=k[s]
q=s+1
p=k[q%4]
o=k[(s+2)%4]
n=p.a
m=p.b
l=(n-r.a)*(o.b-m)-(m-r.b)*(o.a-n)
if(Math.abs(l)<1e-9)return!1
if(t==null)t=J.cJ(l)
if(J.cJ(l)!==t)return!1}return!0},
h(a){var t=this.gL()
return"DocumentQuad("+new A.ad(t,new A.bu(),A.P(t).k("ad<1,an>")).ap(0,", ")+")"}}
A.br.prototype={
$2(a,b){return a+b.a}}
A.bs.prototype={
$2(a,b){return a+b.b}}
A.bt.prototype={
$2(a,b){var t=this.a,s=this.b
return B.a.u(Math.atan2(a.b-t,a.a-s),Math.atan2(b.b-t,b.a-s))}}
A.bu.prototype={
$1(a){return"("+B.a.a9(a.a,3)+", "+B.a.a9(a.b,3)+")"}}
A.bP.prototype={}
A.F.prototype={
ga7(){return Math.abs(this.b)>=Math.abs(this.a)}}
A.be.prototype={
aq(a,b){var t,s,r,q,p,o,n=b-a
if(n<4)return B.k
t=this.c
s=t.length-1
r=this.b
q=B.c.F(B.a.p(a)-r,0,s)
p=B.c.F(B.a.p(b)-r,0,s)
r=this.d
o=r[p]-r[q]
if(o<=0)return B.k
return new A.O((t[p]-t[q])/o,o/n)}}
A.bJ.prototype={}
A.bX.prototype={
$1(a){return a.ga7()}}
A.bY.prototype={
$1(a){return!a.ga7()}}
A.bN.prototype={}
A.c3.prototype={
$2(a,b){var t=this.a
return B.c.u(t[b],t[a])}}
A.c6.prototype={
$2(a,b){var t,s,r,q,p,o,n,m=this,l=A.a([],u.v),k=b?m.a:m.b,j=new A.c7(b,(b?m.b:m.a)/2)
for(t=0.12*k,s=0;s<a.length;s=r)for(r=s+1,q=r;q<a.length;++q){p=a[s]
o=a[q]
if(j.$1(p)>j.$1(o)){n=o
o=p
p=n}if(j.$1(o)-j.$1(p)<t)continue
if(Math.abs(p.a*o.a+p.b*o.b)<0.82)continue
l.push(new A.O(p,o))}return l}}
A.c7.prototype={
$1(a){var t=this.b,s=a.c,r=a.a,q=a.b
return this.a?(s-r*t)/q:(s-q*t)/r}}
A.c4.prototype={
$1(a){var t=this,s=a.a,r=!0
if(!(s<t.a))if(!(s>t.b)){s=a.b
s=s<t.c||s>t.d}else s=r
else s=r
return s}}
A.c5.prototype={
$2(a,b){return B.a.u(b.a,a.a)}}
A.bK.prototype={
U(a){var t=this.b,s=u.n,r=this.a
return t==null?A.a([r[a]],s):A.a([r[a],t[a],this.c[a]],s)}}
A.bL.prototype={
$0(){var t,s,r,q,p=A.a([],u.n)
for(t=this.a,s=t.length,r=this.b,q=0;q<t.length;t.length===s||(0,A.o)(t),++q)p.push(t[q][r])
B.b.a0(p)
return p[p.length/2|0]}}
A.bZ.prototype={
$2(a,b){var t,s=this.a,r=s[0],q=r.a,p=s[1]
q+=(p.a-q)*a
r=r.b
r+=(p.b-r)*a
p=s[3]
t=p.a
s=s[2]
p=p.b
return new A.r(q+(t+(s.a-t)*a-q)*b,r+(p+(s.b-p)*a-r)*b,u.X)}}
A.c_.prototype={
$2(a,b){return B.a.u(a[0],b[0])}}
A.c1.prototype={
$2(a,b){var t,s,r=A.a([],u.n)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.o)(a),++s)r.push(A.as(a[s],b))
B.b.a0(r)
t=r.length
return t===0?0:r[t/2|0]}}
A.c0.prototype={
$2(a,b){return a+b}}
A.c8.prototype={
$1(a){return a==null}}
A.c2.prototype={
$1(a){return a}}
A.bU.prototype={
$2(a,b){var t=b.a,s=a.a
return B.c.u((t[1]-t[3])*(t[2]-t[4]),(s[1]-s[3])*(s[2]-s[4]))}}
A.bV.prototype={
$2(a,b){var t=a.a,s=b.a
return t!==s?B.a.u(t,s):B.a.u(a.b,b.b)}}
A.bW.prototype={
$3(a,b,c){var t=a.a,s=a.b
return(b.a-t)*(c.b-s)-(b.b-s)*(c.a-t)}}
A.cg.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i=A.di(a.data),h=new A.bE()
$.cG()
o=$.cn.$0()
h.a=o
h.b=null
t=h
try{o=i.pixels
o=new Uint8Array(o,0)
s=A.fB(o,i.width,i.height)
o=v.G.self
n=i.id
if(s==null)r=null
else{r=A.a([],u.n)
for(m=A.fS(s),l=m.length,k=0;k<m.length;m.length===l||(0,A.o)(m),++k){q=m[k]
J.dR(r,q)}r=u.c.a(r)}o.postMessage({type:"result",id:n,quad:r,ms:t.gak()})}catch(j){p=A.fX(j)
r=v.G.self
r.postMessage({type:"error",id:i.id,error:A.h(p)})}}};(function aliases(){var t=J.H.prototype
t.aa=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_0
t(J,"f3","e7",0)
s(A,"fh","ea",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.ck,J.aM,A.al,J.aG,A.l,A.bC,A.aN,A.v,A.ar,A.a6,A.ax,A.K,A.bH,A.bz,A.aT,A.bx,A.x,A.bd,A.bR,A.j,A.am,A.bM,A.ai,A.bE,A.b8,A.r,A.bq,A.bP,A.F,A.be,A.bJ,A.bN,A.bK])
r(J.aM,[J.aQ,J.a7,J.aa,J.a9,J.ab,J.X,J.Y])
r(J.aa,[J.H,J.e,A.Z,A.ag])
r(J.H,[J.b2,J.M,J.G])
s(J.aP,A.al)
s(J.bw,J.e)
r(J.X,[J.W,J.a8])
r(A.l,[A.aS,A.ap,A.aR,A.ba,A.b6,A.bc,A.aH,A.A,A.aq,A.b9,A.b7,A.aJ])
r(A.aN,[A.aK,A.a0])
s(A.q,A.aK)
r(A.q,[A.ao,A.ad,A.ak])
r(A.ax,[A.bf,A.bg])
s(A.O,A.bf)
s(A.bh,A.bg)
r(A.K,[A.bo,A.bp,A.bG,A.cc,A.ce,A.bu,A.bX,A.bY,A.c7,A.c4,A.c8,A.c2,A.bW,A.cg])
r(A.bo,[A.bA,A.bL])
s(A.aj,A.ap)
r(A.bG,[A.bD,A.a5])
s(A.ac,A.aT)
r(A.bp,[A.cd,A.by,A.br,A.bs,A.bt,A.c3,A.c6,A.c5,A.bZ,A.c_,A.c1,A.c0,A.bU,A.bV])
r(A.ag,[A.aU,A.a_])
r(A.a_,[A.at,A.av])
s(A.au,A.at)
s(A.ae,A.au)
s(A.aw,A.av)
s(A.af,A.aw)
r(A.ae,[A.aV,A.aW])
r(A.af,[A.aX,A.aY,A.aZ,A.b_,A.b0,A.ah,A.b1])
s(A.ay,A.bc)
r(A.A,[A.b5,A.aL])
t(A.at,A.j)
t(A.au,A.a6)
t(A.av,A.j)
t(A.aw,A.a6)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",i:"double",dz:"num",an:"String",bj:"bool",ai:"Null",d:"List",k:"Object",h2:"Map",m:"JSObject"},mangledNames:{},types:["b(@,@)","b()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.O&&a.b(c.a)&&b.b(c.b),"5;label,maxX,maxY,minX,minY":a=>b=>b instanceof A.bh&&A.fR(a,b.a)}}
A.ex(v.typeUniverse,JSON.parse('{"b2":"H","M":"H","G":"H","h3":"Z","aQ":{"bj":[],"f":[]},"a7":{"f":[]},"aa":{"m":[]},"H":{"m":[]},"e":{"d":["1"],"m":[]},"aP":{"al":[]},"bw":{"e":["1"],"d":["1"],"m":[]},"X":{"i":[]},"W":{"i":[],"b":[],"f":[]},"a8":{"i":[],"f":[]},"Y":{"an":[],"f":[]},"aS":{"l":[]},"ao":{"q":["1"],"q.E":"1"},"ad":{"q":["2"],"q.E":"2"},"ak":{"q":["1"],"q.E":"1"},"aj":{"l":[]},"aR":{"l":[]},"ba":{"l":[]},"b6":{"l":[]},"ac":{"aT":["1","2"]},"Z":{"m":[],"f":[]},"ag":{"m":[]},"aU":{"m":[],"f":[]},"a_":{"t":["1"],"m":[]},"ae":{"j":["i"],"d":["i"],"t":["i"],"m":[]},"af":{"j":["b"],"d":["b"],"t":["b"],"m":[]},"aV":{"j":["i"],"d":["i"],"t":["i"],"m":[],"f":[],"j.E":"i"},"aW":{"j":["i"],"d":["i"],"t":["i"],"m":[],"f":[],"j.E":"i"},"aX":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"aY":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"aZ":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"b_":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"b0":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"ah":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"b1":{"j":["b"],"d":["b"],"t":["b"],"m":[],"f":[],"j.E":"b"},"bc":{"l":[]},"ay":{"l":[]},"aH":{"l":[]},"ap":{"l":[]},"A":{"l":[]},"b5":{"l":[]},"aL":{"l":[]},"aq":{"l":[]},"b9":{"l":[]},"b7":{"l":[]},"aJ":{"l":[]},"am":{"l":[]},"e5":{"d":["b"]},"eg":{"d":["b"]},"ef":{"d":["b"]},"e3":{"d":["b"]},"ed":{"d":["b"]},"e4":{"d":["b"]},"ee":{"d":["b"]},"e1":{"d":["i"]},"e2":{"d":["i"]}}'))
A.ew(v.typeUniverse,JSON.parse('{"aK":1,"a0":1,"ar":1,"a6":1,"a_":1,"aN":1}'))
var u=(function rtii(){var t=A.cz
return{C:t("l"),Z:t("h1"),G:t("e<d<d<i>>>"),E:t("e<d<r<i>>>"),b:t("e<d<i>>"),f:t("e<k>"),O:t("e<r<i>>"),v:t("e<+(F,F)>"),V:t("e<+(i,d<r<i>>)>"),r:t("e<+label,maxX,maxY,minX,minY(b,b,b,b,b)>"),s:t("e<an>"),w:t("e<F>"),u:t("e<bj>"),n:t("e<i>"),q:t("e<@>"),t:t("e<b>"),c:t("e<k?>"),d:t("e<F?>"),T:t("a7"),m:t("m"),g:t("G"),p:t("t<@>"),j:t("d<@>"),P:t("ai"),K:t("k"),X:t("r<i>"),L:t("h4"),F:t("+()"),B:t("+(i,d<r<i>>)"),e:t("+label,maxX,maxY,minX,minY(b,b,b,b,b)"),N:t("an"),R:t("f"),o:t("M"),A:t("F"),I:t("be"),y:t("bj"),i:t("i"),z:t("@"),S:t("b"),U:t("cR<ai>?"),D:t("m?"),Q:t("k?"),x:t("an?"),h:t("bj?"),J:t("i?"),M:t("b?"),W:t("dz?"),H:t("dz")}})();(function constants(){var t=hunkHelpers.makeConstList
B.r=J.aM.prototype
B.b=J.e.prototype
B.c=J.W.prototype
B.a=J.X.prototype
B.t=J.G.prototype
B.u=J.aa.prototype
B.j=J.b2.prototype
B.e=J.M.prototype
B.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.l=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.p=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.o=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.n=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.h=function(hooks) { return hooks; }

B.d=new A.bC()
B.i=t([1,4,6,4,1],u.t)
B.v=t([],u.E)
B.k=new A.O(0,0)
B.w=A.y("fY")
B.x=A.y("fZ")
B.y=A.y("e1")
B.z=A.y("e2")
B.A=A.y("e3")
B.B=A.y("e4")
B.C=A.y("e5")
B.D=A.y("k")
B.E=A.y("ed")
B.F=A.y("ee")
B.G=A.y("ef")
B.H=A.y("eg")})();(function staticFields(){$.bO=null
$.R=A.a([],u.f)
$.cY=null
$.bB=0
$.cn=A.fh()
$.cN=null
$.cM=null
$.dy=null
$.dv=null
$.dC=null
$.ca=null
$.cf=null
$.cB=null
$.bQ=A.a([],A.cz("e<d<k>?>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"h0","dF",()=>A.cb("_$dart_dartClosure"))
t($,"h_","cF",()=>A.cb("_$dart_dartClosure_dartJSInterop"))
t($,"hi","dQ",()=>A.a([new J.aP()],A.cz("e<al>")))
t($,"h6","dG",()=>A.E(A.bI({
toString:function(){return"$receiver$"}})))
t($,"h7","dH",()=>A.E(A.bI({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"h8","dI",()=>A.E(A.bI(null)))
t($,"h9","dJ",()=>A.E(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hc","dM",()=>A.E(A.bI(void 0)))
t($,"hd","dN",()=>A.E(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hb","dL",()=>A.E(A.d3(null)))
t($,"ha","dK",()=>A.E(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"hf","dP",()=>A.E(A.d3(void 0)))
t($,"he","dO",()=>A.E(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"hh","bl",()=>A.dA(B.D))
t($,"h5","cG",()=>{A.eb()
return $.bB})
t($,"hg","cH",()=>{var s,r=A.a([],u.n)
for(s=0;s<180;++s)r.push(A.fy(s*3.141592653589793/180))
return A.cW(r)})
t($,"hj","cI",()=>{var s,r=A.a([],u.n)
for(s=0;s<180;++s)r.push(A.fU(s*3.141592653589793/180))
return A.cW(r)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.Z,SharedArrayBuffer:A.Z,ArrayBufferView:A.ag,DataView:A.aU,Float32Array:A.aV,Float64Array:A.aW,Int16Array:A.aX,Int32Array:A.aY,Int8Array:A.aZ,Uint16Array:A.b_,Uint32Array:A.b0,Uint8ClampedArray:A.ah,CanvasPixelArray:A.ah,Uint8Array:A.b1})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a_.$nativeSuperclassTag="ArrayBufferView"
A.at.$nativeSuperclassTag="ArrayBufferView"
A.au.$nativeSuperclassTag="ArrayBufferView"
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.av.$nativeSuperclassTag="ArrayBufferView"
A.aw.$nativeSuperclassTag="ArrayBufferView"
A.af.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.fP
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=scan_worker.js.map
