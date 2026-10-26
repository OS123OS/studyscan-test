(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.jd(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eg(b)
return new s(c,this)}:function(){if(s===null)s=A.eg(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eg(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
el(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ei(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.ej==null){A.j_()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.eL("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d0
if(o==null)o=$.d0=A.dD(n)
p=q[o]}if(p!=null)return p
p=A.j4(a)
if(p!=null)return p
if(typeof a=="function")return B.w
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.d0
if(o==null)o=$.d0=A.dD(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
h1(a,b){return J.fL(a,b)},
af(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.aI.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.aH.prototype
if(typeof a=="boolean")return J.by.prototype
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aL.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.l)return a
return J.ei(a)},
aA(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aL.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.l)return a
return J.ei(a)},
a0(a){if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aL.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.l)return a
return J.ei(a)},
iU(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.aI.prototype}if(a==null)return a
if(!(a instanceof A.l))return J.a7.prototype
return a},
iV(a){if(typeof a=="number")return J.am.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.a7.prototype
return a},
cb(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.af(a).I(a,b)},
cc(a,b){if(typeof b==="number")if(Array.isArray(a)||A.j2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)},
fJ(a,b){return J.a0(a).aW(a,b)},
fK(a,b){return J.a0(a).a0(a,b)},
fL(a,b){return J.iV(a).C(a,b)},
dR(a,b){return J.a0(a).A(a,b)},
M(a){return J.af(a).gp(a)},
ai(a){return J.a0(a).gB(a)},
a3(a){return J.aA(a).gk(a)},
fM(a){return J.af(a).gt(a)},
er(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.iU(a).gan(a)},
fN(a,b,c){return J.a0(a).U(a,b,c)},
dS(a,b,c){return J.a0(a).l(a,b,c)},
aD(a){return J.af(a).i(a)},
bv:function bv(){},
by:function by(){},
aH:function aH(){},
aK:function aK(){},
U:function U(){},
bM:function bM(){},
a7:function a7(){},
T:function T(){},
aJ:function aJ(){},
aL:function aL(){},
i:function i(a){this.$ti=a},
bx:function bx(){},
cn:function cn(a){this.$ti=a},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
am:function am(){},
al:function al(){},
aI:function aI(){},
an:function an(){}},A={dX:function dX(){},
ew(a,b,c){if(t.U.b(a))return new A.b5(a,b.j("@<0>").G(c).j("b5<1,2>"))
return new A.a4(a,b.j("@<0>").G(c).j("a4<1,2>"))},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cF(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eJ(a,b,c){return A.cF(A.Q(A.Q(c,a),b))},
c8(a,b,c){return a},
ek(a){var s,r
for(s=$.ad.length,r=0;r<s;++r)if(a===$.ad[r])return!0
return!1},
cE(a,b,c,d){A.e1(b,"start")
A.e1(c,"end")
if(b>c)A.c9(A.P(b,0,c,"start",null))
return new A.aY(a,b,c,d.j("aY<0>"))},
bw(){return new A.aX("No element")},
Y:function Y(){},
bq:function bq(a,b){this.a=a
this.$ti=b},
a4:function a4(a,b){this.a=a
this.$ti=b},
b5:function b5(a,b){this.a=a
this.$ti=b},
b3:function b3(){},
N:function N(a,b){this.a=a
this.$ti=b},
bA:function bA(a){this.a=a},
cw:function cw(){},
h:function h(){},
u:function u(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
F:function F(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b){this.a=a
this.b=b},
aG:function aG(){},
aU:function aU(a,b){this.a=a
this.$ti=b},
bi:function bi(){},
fw(a){var s=A.fv(a)
if(s!=null)return s
return"minified:"+a},
j2(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aD(a)
return s},
bN(a){var s,r=$.eD
if(r==null)r=$.eD=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bO(a){var s,r,q,p
if(a instanceof A.l)return A.D(A.a1(a),null)
s=J.af(a)
if(s===B.v||s===B.x||t.J.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.D(A.a1(a),null)},
eE(a){var s,r,q
if(a==null||typeof a=="number"||A.e9(a))return J.aD(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a5)return a.i(0)
if(a instanceof A.ba)return a.aA(!0)
s=$.fI()
for(r=0;r<1;++r){q=s[r].be(a)
if(q!=null)return q}return"Instance of '"+A.bO(a)+"'"},
h4(){return Date.now()},
h6(){var s,r
if($.cv!==0)return
$.cv=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.cv=1e6
$.e0=new A.cu(r)},
h5(a){var s=a.$thrownJsError
if(s==null)return null
return A.aB(s)},
eF(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.y(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
fp(a,b){var s,r="index"
if(!A.fc(b))return new A.H(!0,b,r,null)
s=J.a3(a)
if(b<0||b>=s)return A.dW(b,s,a,r)
return new A.aT(null,null,!0,b,r,"Value not in range")},
iS(a,b,c){if(a>c)return A.P(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.P(b,a,c,"end",null)
return new A.H(!0,b,"end",null)},
iI(a){return new A.H(!0,a,null,null)},
iM(a){return a},
d(a){return A.y(a,new Error())},
y(a,b){var s
if(a==null)a=new A.R()
b.dartException=a
s=A.je
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
je(){return J.aD(this.dartException)},
c9(a,b){throw A.y(a,b==null?new Error():b)},
B(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.c9(A.hS(a,b,c),s)},
hS(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.aZ("'"+s+"': Cannot "+o+" "+l+k+n)},
z(a){throw A.d(A.E(a))},
S(a){var s,r,q,p,o,n
a=A.ja(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cH(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cI(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eK(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dY(a,b){var s=b==null,r=s?null:b.method
return new A.bz(a,r,s?null:b.receiver)},
ah(a){if(a==null)return new A.ct(a)
if(a instanceof A.aF)return A.a2(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a2(a,a.dartException)
return A.iG(a)},
a2(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.N(r,16)&8191)===10)switch(q){case 438:return A.a2(a,A.dY(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.a2(a,new A.aS())}}if(a instanceof TypeError){p=$.fy()
o=$.fz()
n=$.fA()
m=$.fB()
l=$.fE()
k=$.fF()
j=$.fD()
$.fC()
i=$.fH()
h=$.fG()
g=p.E(s)
if(g!=null)return A.a2(a,A.dY(s,g))
else{g=o.E(s)
if(g!=null){g.method="call"
return A.a2(a,A.dY(s,g))}else if(n.E(s)!=null||m.E(s)!=null||l.E(s)!=null||k.E(s)!=null||j.E(s)!=null||m.E(s)!=null||i.E(s)!=null||h.E(s)!=null)return A.a2(a,new A.aS())}return A.a2(a,new A.bS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aW()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a2(a,new A.H(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aW()
return a},
aB(a){var s
if(a instanceof A.aF)return a.b
if(a==null)return new A.bb(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bb(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fs(a){if(a==null)return J.M(a)
if(typeof a=="object")return A.bN(a)
return J.M(a)},
i8(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cP("Unsupported number of arguments for wrapped closure"))},
az(a,b){var s=a.$identity
if(!!s)return s
s=A.iN(a,b)
a.$identity=s
return s},
iN(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.i8)},
fU(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cC().constructor.prototype):Object.create(new A.aE(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ex(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fQ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ex(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fO)}throw A.d("Error in functionType of tearoff")},
fR(a,b,c,d){var s=A.ev
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ex(a,b,c,d){if(c)return A.fT(a,b,d)
return A.fR(b.length,d,a,b)},
fS(a,b,c,d){var s=A.ev,r=A.fP
switch(b?-1:a){case 0:throw A.d(new A.bP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fT(a,b,c){var s,r
if($.et==null)$.et=A.es("interceptor")
if($.eu==null)$.eu=A.es("receiver")
s=b.length
r=A.fS(s,c,a,b)
return r},
eg(a){return A.fU(a)},
fO(a,b){return A.bh(v.typeUniverse,A.a1(a.a),b)},
ev(a){return a.a},
fP(a){return a.b},
es(a){var s,r,q,p=new A.aE("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.bn("Field name "+a+" not found.",null))},
dD(a){return v.getIsolateTag(a)},
j4(a){var s,r,q,p,o,n=$.fq.$1(a),m=$.dC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fm.$2(a,n)
if(q!=null){m=$.dC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dK(s)
$.dC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dI[n]=s
return s}if(p==="-"){o=A.dK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ft(a,s)
if(p==="*")throw A.d(A.eL(n))
if(v.leafTags[n]===true){o=A.dK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ft(a,s)},
ft(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.el(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dK(a){return J.el(a,!1,null,!!a.$iC)},
j6(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dK(s)
else return J.el(s,c,null,null)},
j_(){if(!0===$.ej)return
$.ej=!0
A.j0()},
j0(){var s,r,q,p,o,n,m,l
$.dC=Object.create(null)
$.dI=Object.create(null)
A.iZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fu.$1(o)
if(n!=null){m=A.j6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iZ(){var s,r,q,p,o,n,m=B.n()
m=A.ay(B.o,A.ay(B.p,A.ay(B.j,A.ay(B.j,A.ay(B.q,A.ay(B.r,A.ay(B.t(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fq=new A.dF(p)
$.fm=new A.dG(o)
$.fu=new A.dH(n)},
ay(a,b){return a(b)||b},
hr(a,b){var s
for(s=0;s<a.length;++s)if(!J.cb(a[s],b[s]))return!1
return!0},
iP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ja(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
a9:function a9(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a},
cu:function cu(a){this.a=a},
aV:function aV(){},
cH:function cH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(){},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a){this.a=a},
ct:function ct(a){this.a=a},
aF:function aF(a,b){this.a=a
this.b=b},
bb:function bb(a){this.a=a
this.b=null},
a5:function a5(){},
ce:function ce(){},
cf:function cf(){},
cG:function cG(){},
cC:function cC(){},
aE:function aE(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cq:function cq(a,b){this.a=a
this.b=b
this.c=null},
a6:function a6(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
dH:function dH(a){this.a=a},
ba:function ba(){},
c1:function c1(){},
c2:function c2(){},
f2(a,b,c){},
hV(a){return a},
eB(a){return new Float64Array(A.hV(a))},
aa(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.fp(b,a))},
a_(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.iS(a,b,c))
if(b==null)return c
return b},
ap:function ap(){},
ao:function ao(){},
aQ:function aQ(){},
bD:function bD(){},
aq:function aq(){},
aO:function aO(){},
aP:function aP(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
aR:function aR(){},
bL:function bL(){},
b6:function b6(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
e3(a,b){var s=b.c
return s==null?b.c=A.bf(a,"ak",[b.x]):s},
eG(a){var s=a.w
if(s===6||s===7)return A.eG(a.x)
return s===11||s===12},
h7(a){return a.as},
j7(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
eh(a){return A.d9(v.typeUniverse,a,!1)},
ac(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ac(a1,s,a3,a4)
if(r===s)return a2
return A.eU(a1,r,!0)
case 7:s=a2.x
r=A.ac(a1,s,a3,a4)
if(r===s)return a2
return A.eT(a1,r,!0)
case 8:q=a2.y
p=A.ax(a1,q,a3,a4)
if(p===q)return a2
return A.bf(a1,a2.x,p)
case 9:o=a2.x
n=A.ac(a1,o,a3,a4)
m=a2.y
l=A.ax(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.e5(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ax(a1,j,a3,a4)
if(i===j)return a2
return A.eV(a1,k,i)
case 11:h=a2.x
g=A.ac(a1,h,a3,a4)
f=a2.y
e=A.iD(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eS(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ax(a1,d,a3,a4)
o=a2.x
n=A.ac(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.e6(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bp("Attempted to substitute unexpected RTI kind "+a0))}},
ax(a,b,c,d){var s,r,q,p,o=b.length,n=A.da(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ac(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.da(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ac(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iD(a,b,c,d){var s,r=b.a,q=A.ax(a,r,c,d),p=b.b,o=A.ax(a,p,c,d),n=b.c,m=A.iE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bX()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
fo(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iX(s)
return a.$S()}return null},
j1(a,b){var s
if(A.eG(b))if(a instanceof A.a5){s=A.fo(a)
if(s!=null)return s}return A.a1(a)},
a1(a){if(a instanceof A.l)return A.au(a)
if(Array.isArray(a))return A.K(a)
return A.e8(J.af(a))},
K(a){var s=a[v.arrayRti],r=t.x
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
au(a){var s=a.$ti
return s!=null?s:A.e8(a)},
e8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.i4(a,s)},
i4(a,b){var s=a instanceof A.a5?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hA(v.typeUniverse,s.name)
b.$ccache=r
return r},
iX(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iW(a){return A.ae(A.au(a))},
ef(a){var s
if(a instanceof A.ba)return A.iT(a.$r,a.aa())
s=a instanceof A.a5?A.fo(a):null
if(s!=null)return s
if(t.D.b(a))return J.fM(a).a
if(Array.isArray(a))return A.K(a)
return A.a1(a)},
ae(a){var s=a.r
return s==null?a.r=new A.d8(a):s},
iT(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
s=A.bh(v.typeUniverse,A.ef(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.eX(v.typeUniverse,s,A.ef(q[r]))
return A.bh(v.typeUniverse,s,a)},
L(a){return A.ae(A.d9(v.typeUniverse,a,!1))},
i3(a){var s=this
s.b=A.iB(s)
return s.b(a)},
iB(a){var s,r,q,p
if(a===t.K)return A.ie
if(A.ag(a))return A.ij
s=a.w
if(s===6)return A.i0
if(s===1)return A.fe
if(s===7)return A.i9
r=A.iz(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ag)){a.f="$i"+q
if(q==="e")return A.ic
if(a===t.m)return A.ib
return A.ii}}else if(s===10){p=A.iP(a.x,a.y)
return p==null?A.fe:p}return A.hZ},
iz(a){if(a.w===8){if(a===t.S)return A.fc
if(a===t.i||a===t.H)return A.id
if(a===t.N)return A.ih
if(a===t.y)return A.e9}return null},
i2(a){var s=this,r=A.hY
if(A.ag(s))r=A.hK
else if(s===t.K)r=A.hI
else if(A.aC(s)){r=A.i_
if(s===t.a3)r=A.hE
else if(s===t.aD)r=A.hJ
else if(s===t.cG)r=A.f0
else if(s===t.ae)r=A.hH
else if(s===t.dd)r=A.hD
else if(s===t.aQ)r=A.hF}else if(s===t.S)r=A.at
else if(s===t.N)r=A.e7
else if(s===t.y)r=A.f_
else if(s===t.H)r=A.hG
else if(s===t.i)r=A.hC
else if(s===t.m)r=A.f1
s.a=r
return s.a(a)},
hZ(a){var s=this
if(a==null)return A.aC(s)
return A.j3(v.typeUniverse,A.j1(a,s),s)},
i0(a){if(a==null)return!0
return this.x.b(a)},
ii(a){var s,r=this
if(a==null)return A.aC(r)
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.af(a)[s]},
ic(a){var s,r=this
if(a==null)return A.aC(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.af(a)[s]},
ib(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.l)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fd(a){if(typeof a=="object"){if(a instanceof A.l)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hY(a){var s=this
if(a==null){if(A.aC(s))return a}else if(s.b(a))return a
throw A.y(A.f7(a,s),new Error())},
i_(a){var s=this
if(a==null||s.b(a))return a
throw A.y(A.f7(a,s),new Error())},
f7(a,b){return new A.bd("TypeError: "+A.eN(a,A.D(b,null)))},
eN(a,b){return A.cl(a)+": type '"+A.D(A.ef(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.bd("TypeError: "+A.eN(a,b))},
i9(a){var s=this
return s.x.b(a)||A.e3(v.typeUniverse,s).b(a)},
ie(a){return a!=null},
hI(a){if(a!=null)return a
throw A.y(A.G(a,"Object"),new Error())},
ij(a){return!0},
hK(a){return a},
fe(a){return!1},
e9(a){return!0===a||!1===a},
f_(a){if(!0===a)return!0
if(!1===a)return!1
throw A.y(A.G(a,"bool"),new Error())},
f0(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.y(A.G(a,"bool?"),new Error())},
hC(a){if(typeof a=="number")return a
throw A.y(A.G(a,"double"),new Error())},
hD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.G(a,"double?"),new Error())},
fc(a){return typeof a=="number"&&Math.floor(a)===a},
at(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.y(A.G(a,"int"),new Error())},
hE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.y(A.G(a,"int?"),new Error())},
id(a){return typeof a=="number"},
hG(a){if(typeof a=="number")return a
throw A.y(A.G(a,"num"),new Error())},
hH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.G(a,"num?"),new Error())},
ih(a){return typeof a=="string"},
e7(a){if(typeof a=="string")return a
throw A.y(A.G(a,"String"),new Error())},
hJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.y(A.G(a,"String?"),new Error())},
f1(a){if(A.fd(a))return a
throw A.y(A.G(a,"JSObject"),new Error())},
hF(a){if(a==null)return a
if(A.fd(a))return a
throw A.y(A.G(a,"JSObject?"),new Error())},
fk(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.D(a[q],b)
return s},
it(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fk(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.D(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
f9(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.c([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.R,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.D(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.D(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.D(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.D(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.D(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
D(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.D(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.D(a.x,b)+">"
if(m===8){p=A.iF(a.x)
o=a.y
return o.length>0?p+("<"+A.fk(o,b)+">"):p}if(m===10)return A.it(a,b)
if(m===11)return A.f9(a,b,null)
if(m===12)return A.f9(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
iF(a){var s=A.fv(a)
if(s!=null)return s
return"minified:"+a},
hB(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hA(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d9(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bg(a,5,"#")
q=A.da(s)
for(p=0;p<s;++p)q[p]=r
o=A.bf(a,b,q)
n[b]=o
return o}else return m},
hz(a,b){return A.eY(a.tR,b)},
hy(a,b){return A.eY(a.eT,b)},
d9(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eW(a,null,b,!1)
r.set(b,s)
return s},
bh(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eW(a,b,c,!0)
q.set(c,r)
return r},
eX(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.e5(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eW(a,b,c,d){return A.hp(A.hj(a,b,c,d))},
Z(a,b){b.a=A.i2
b.b=A.i3
return b},
bg(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.J(null,null)
s.w=b
s.as=c
r=A.Z(a,s)
a.eC.set(c,r)
return r},
eU(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hw(a,b,r,c)
a.eC.set(r,s)
return s},
hw(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ag(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aC(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.J(null,null)
q.w=6
q.x=b
q.as=c
return A.Z(a,q)},
eT(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hu(a,b,r,c)
a.eC.set(r,s)
return s},
hu(a,b,c,d){var s,r
if(d){s=b.w
if(A.ag(b)||b===t.K)return b
else if(s===1)return A.bf(a,"ak",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.J(null,null)
r.w=7
r.x=b
r.as=c
return A.Z(a,r)},
hx(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=13
s.x=b
s.as=q
r=A.Z(a,s)
a.eC.set(q,r)
return r},
be(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ht(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bf(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.be(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.J(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.Z(a,r)
a.eC.set(p,q)
return q},
e5(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.be(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.J(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.Z(a,o)
a.eC.set(q,n)
return n},
eV(a,b,c){var s,r,q="+"+(b+"("+A.be(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.Z(a,s)
a.eC.set(q,r)
return r},
eS(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.be(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.be(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ht(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.J(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.Z(a,p)
a.eC.set(r,o)
return o},
e6(a,b,c,d){var s,r=b.as+("<"+A.be(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hv(a,b,c,r,d)
a.eC.set(r,s)
return s},
hv(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.da(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ac(a,b,r,0)
m=A.ax(a,c,r,0)
return A.e6(a,n,m,c!==m)}}l=new A.J(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.Z(a,l)},
hj(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hp(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hl(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eP(a,r,l,k,!1)
else if(q===46)r=A.eP(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a8(a.u,a.e,k.pop()))
break
case 94:k.push(A.hx(a.u,k.pop()))
break
case 35:k.push(A.bg(a.u,5,"#"))
break
case 64:k.push(A.bg(a.u,2,"@"))
break
case 126:k.push(A.bg(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hn(a,k)
break
case 38:A.hm(a,k)
break
case 63:p=a.u
k.push(A.eU(p,A.a8(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eT(p,A.a8(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hk(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eQ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hq(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.a8(a.u,a.e,m)},
hl(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eP(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hB(s,o.x)[p]
if(n==null)A.c9('No "'+p+'" in "'+A.h7(o)+'"')
d.push(A.bh(s,o,n))}else d.push(p)
return m},
hn(a,b){var s,r=a.u,q=A.eO(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bf(r,p,q))
else{s=A.a8(r,a.e,p)
switch(s.w){case 11:b.push(A.e6(r,s,q,a.n))
break
default:b.push(A.e5(r,s,q))
break}}},
hk(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eO(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a8(p,a.e,o)
q=new A.bX()
q.a=s
q.b=n
q.c=m
b.push(A.eS(p,r,q))
return
case-4:b.push(A.eV(p,b.pop(),s))
return
default:throw A.d(A.bp("Unexpected state under `()`: "+A.m(o)))}},
hm(a,b){var s=b.pop()
if(0===s){b.push(A.bg(a.u,1,"0&"))
return}if(1===s){b.push(A.bg(a.u,4,"1&"))
return}throw A.d(A.bp("Unexpected extended operation "+A.m(s)))},
eO(a,b){var s=b.splice(a.p)
A.eQ(a.u,a.e,s)
a.p=b.pop()
return s},
a8(a,b,c){if(typeof c=="string")return A.bf(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ho(a,b,c)}else return c},
eQ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a8(a,b,c[s])},
hq(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a8(a,b,c[s])},
ho(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bp("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bp("Bad index "+c+" for "+b.i(0)))},
j3(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.t(a,b,null,c,null)
r.set(c,s)}return s},
t(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ag(d))return!0
s=b.w
if(s===4)return!0
if(A.ag(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.t(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.t(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.t(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.t(a,b.x,c,d,e))return!1
return A.t(a,A.e3(a,b),c,d,e)}if(s===6)return A.t(a,p,c,d,e)&&A.t(a,b.x,c,d,e)
if(q===7){if(A.t(a,b,c,d.x,e))return!0
return A.t(a,b,c,A.e3(a,d),e)}if(q===6)return A.t(a,b,c,p,e)||A.t(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.L)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.t(a,j,c,i,e)||!A.t(a,i,e,j,c))return!1}return A.fb(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fb(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ia(a,b,c,d,e)}if(o&&q===10)return A.ig(a,b,c,d,e)
return!1},
fb(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.t(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.t(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.t(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.t(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.t(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
ia(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bh(a,b,r[o])
return A.eZ(a,p,null,c,d.y,e)}return A.eZ(a,b.y,null,c,d.y,e)},
eZ(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.t(a,b[s],d,e[s],f))return!1
return!0},
ig(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.t(a,r[s],c,q[s],e))return!1
return!0},
aC(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ag(a))if(s!==6)r=s===7&&A.aC(a.x)
return r},
ag(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.R},
eY(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
da(a){return a>0?new Array(a):v.typeUniverse.sEA},
J:function J(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bX:function bX(){this.c=this.b=this.a=null},
d8:function d8(a){this.a=a},
bW:function bW(){},
bd:function bd(a){this.a=a},
he(){var s,r,q
if(self.scheduleImmediate!=null)return A.iJ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.az(new A.cK(s),1)).observe(r,{childList:true})
return new A.cJ(s,r,q)}else if(self.setImmediate!=null)return A.iK()
return A.iL()},
hf(a){self.scheduleImmediate(A.az(new A.cL(a),0))},
hg(a){self.setImmediate(A.az(new A.cM(a),0))},
hh(a){A.hs(0,a)},
hs(a,b){var s=new A.d6()
s.aI(a,b)
return s},
io(a){return new A.bT(new A.w($.q,a.j("w<0>")),a.j("bT<0>"))},
hN(a,b){a.$2(0,null)
b.b=!0
return b.a},
dd(a,b){A.hO(a,b)},
hM(a,b){b.ag(a)},
hL(a,b){b.ah(A.ah(a),A.aB(a))},
hO(a,b){var s,r,q=new A.de(b),p=new A.df(b)
if(a instanceof A.w)a.az(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.aG(q,p,s)
else{r=new A.w($.q,t.W)
r.a=8
r.c=a
r.az(q,p,s)}}},
iH(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.q.aF(new A.dB(s))},
dT(a){var s
if(t.C.b(a)){s=a.gV()
if(s!=null)return s}return B.f},
i5(a,b){if($.q===B.d)return null
return null},
i6(a,b){if($.q!==B.d)A.i5(a,b)
if(b==null)if(t.C.b(a)){b=a.gV()
if(b==null){A.eF(a,B.f)
b=B.f}}else b=B.f
else if(t.C.b(a))A.eF(a,b)
return new A.I(a,b)},
e4(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.h9()
b.a6(new A.I(new A.H(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.av(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.Y()
b.W(p.a)
A.as(b,q)
return}b.a^=2
A.c7(null,null,b.b,new A.cT(p,b))},
as(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.ee(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.as(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.ee(m.a,m.b)
return}j=$.q
if(j!==k)$.q=k
else j=null
f=f.c
if((f&15)===8)new A.cX(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cW(s,m).$0()}else if((f&2)!==0)new A.cV(g,s).$0()
if(j!=null)$.q=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.j("ak<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.Z(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.e4(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.Z(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
iv(a,b){if(t.Q.b(a))return b.aF(a)
if(t.v.b(a))return a
throw A.d(A.cd(a,"onError",u.c))},
ip(){var s,r
for(s=$.aw;s!=null;s=$.aw){$.bm=null
r=s.b
$.aw=r
if(r==null)$.bl=null
s.a.$0()}},
iC(){$.ea=!0
try{A.ip()}finally{$.bm=null
$.ea=!1
if($.aw!=null)$.eo().$1(A.fn())}},
fl(a){var s=new A.bU(a),r=$.bl
if(r==null){$.aw=$.bl=s
if(!$.ea)$.eo().$1(A.fn())}else $.bl=r.b=s},
iy(a){var s,r,q,p=$.aw
if(p==null){A.fl(a)
$.bm=$.bl
return}s=new A.bU(a)
r=$.bm
if(r==null){s.b=p
$.aw=$.bm=s}else{q=r.b
s.b=q
$.bm=r.b=s
if(q==null)$.bl=s}},
jn(a){A.c8(a,"stream",t.K)
return new A.c4()},
ee(a,b){A.iy(new A.dy(a,b))},
fj(a,b,c,d){var s,r=$.q
if(r===c)return d.$0()
$.q=c
s=r
try{r=d.$0()
return r}finally{$.q=s}},
ix(a,b,c,d,e){var s,r=$.q
if(r===c)return d.$1(e)
$.q=c
s=r
try{r=d.$1(e)
return r}finally{$.q=s}},
iw(a,b,c,d,e,f){var s,r=$.q
if(r===c)return d.$2(e,f)
$.q=c
s=r
try{r=d.$2(e,f)
return r}finally{$.q=s}},
c7(a,b,c,d){if(B.d!==c){d=c.aX(d)
d=d}A.fl(d)},
cK:function cK(a){this.a=a},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
d6:function d6(){},
d7:function d7(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=!1
this.$ti=b},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dB:function dB(a){this.a=a},
I:function I(a,b){this.a=a
this.b=b},
bV:function bV(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
ar:function ar(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
w:function w(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a,b){this.a=a
this.b=b},
cZ:function cZ(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
bU:function bU(a){this.a=a
this.b=null},
c4:function c4(){},
db:function db(){},
d4:function d4(){},
d5:function d5(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
dZ(a,b){return new A.aM(a.j("@<0>").G(b).j("aM<1,2>"))},
eA(a){var s,r
if(A.ek(a))return"{...}"
s=new A.bQ("")
try{r={}
$.ad.push(a)
s.a+="{"
r.a=!0
a.a2(0,new A.cr(r,s))
s.a+="}"}finally{$.ad.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
j:function j(){},
O:function O(){},
cr:function cr(a,b){this.a=a
this.b=b},
ir(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.ey(String(s))
throw A.d(q)}q=A.dh(p)
return q},
dh(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.bY(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dh(a[s])
return a},
bY:function bY(a,b){this.a=a
this.b=b
this.c=null},
bZ:function bZ(a){this.a=a},
br:function br(){},
bt:function bt(){},
co:function co(){},
cp:function cp(a){this.a=a},
fV(a,b){a=A.y(a,new Error())
a.stack=b.i(0)
throw a},
e_(a,b,c){var s,r,q
if(a>4294967295)A.c9(A.P(a,0,4294967295,"length",null))
s=A.c(new Array(a),c.j("i<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
h2(a,b,c){var s,r,q=A.c([],c.j("i<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.z)(a),++r)q.push(a[r])
q.$flags=1
return q},
V(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.j("i<0>"))
s=A.c([],b.j("i<0>"))
for(r=J.ai(a);r.m();)s.push(r.gn())
return s},
eI(a,b,c){var s=J.ai(b)
if(!s.m())return a
if(c.length===0){do a+=A.m(s.gn())
while(s.m())}else{a+=A.m(s.gn())
while(s.m())a=a+c+A.m(s.gn())}return a},
h9(){return A.aB(new Error())},
cl(a){if(typeof a=="number"||A.e9(a)||a==null)return J.aD(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eE(a)},
fW(a,b){A.c8(a,"error",t.K)
A.c8(b,"stackTrace",t.l)
A.fV(a,b)},
bp(a){return new A.bo(a)},
bn(a,b){return new A.H(!1,null,b,a)},
cd(a,b,c){return new A.H(!0,a,b,c)},
P(a,b,c,d,e){return new A.aT(b,c,!0,a,d,"Invalid value")},
e2(a,b,c){if(0>a||a>c)throw A.d(A.P(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.P(b,a,c,"end",null))
return b}return c},
e1(a,b){if(a<0)throw A.d(A.P(a,0,null,b,null))
return a},
dW(a,b,c,d){return new A.bu(b,!0,a,d,"Index out of range")},
b_(a){return new A.aZ(a)},
eL(a){return new A.bR(a)},
eH(a){return new A.aX(a)},
E(a){return new A.bs(a)},
ey(a){return new A.cm(a)},
h0(a,b,c){var s,r
if(A.ek(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
$.ad.push(a)
try{A.ik(a,s)}finally{$.ad.pop()}r=A.eI(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ez(a,b,c){var s,r
if(A.ek(a))return b+"..."+c
s=new A.bQ(b)
$.ad.push(a)
try{r=s
r.a=A.eI(r.a,a,", ")}finally{$.ad.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ik(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.m(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
eC(a,b,c,d){var s
if(B.e===c)return A.eJ(B.b.gp(a),J.M(b),$.ca())
if(B.e===d){s=B.b.gp(a)
b=J.M(b)
c=J.M(c)
return A.cF(A.Q(A.Q(A.Q($.ca(),s),b),c))}s=B.b.gp(a)
b=J.M(b)
c=J.M(c)
d=J.M(d)
d=A.cF(A.Q(A.Q(A.Q(A.Q($.ca(),s),b),c),d))
return d},
h3(a){var s,r,q=$.ca()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.z)(a),++r)q=A.Q(q,J.M(a[r]))
return A.cF(q)},
o:function o(){},
bo:function bo(a){this.a=a},
R:function R(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aT:function aT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bu:function bu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aZ:function aZ(a){this.a=a},
bR:function bR(a){this.a=a},
aX:function aX(a){this.a=a},
bs:function bs(a){this.a=a},
aW:function aW(){},
cP:function cP(a){this.a=a},
cm:function cm(a){this.a=a},
n:function n(){},
A:function A(){},
l:function l(){},
c5:function c5(){},
cD:function cD(){this.b=this.a=0},
bQ:function bQ(a){this.a=a},
cs:function cs(a){this.a=a},
hP(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
dL(a,b){var s=new A.w($.q,b.j("w<0>")),r=new A.b1(s,b.j("b1<0>"))
a.then(A.az(new A.dM(r),1),A.az(new A.dN(r),1))
return s},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
jc(a){return Math.sin(a)},
iO(a){return Math.cos(a)},
f:function f(a,b,c){this.a=a
this.b=b
this.$ti=c},
dU(a){var s,r,q=B.c.a1(a,0,new A.ch()),p=B.c.a1(a,0,new A.ci()),o=A.V(a,t.X)
B.c.J(o,new A.cj(p/4,q/4))
for(s=0,r=1;r<4;++r){q=o[r]
p=o[s]
if(q.a+q.b<p.a+p.b)s=r}q=A.c([],t.O)
for(r=0;r<4;++r)q.push(o[B.b.M(s+r,4)])
return new A.cg(q[0],q[1],q[2],q[3])},
iQ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.length
if(a2<a4*a5*4)throw A.d(A.cd(a2,"rgba","zu kurz"))
a2=Math.max(1,B.a.q(Math.max(a4,a5)/400))
s=B.b.v(a4,a2)
r=B.b.v(a5,a2)
if(s<48||r<48)return null
q=s*r
p=new Uint8Array(q)
o=new Uint8Array(q)
n=new Uint8Array(q)
m=new Uint8Array(q)
l=a2*a2
for(k=0;k<r;++k)for(q=k*s,j=k*a2,i=0;i<s;++i){for(h=i*a2,g=0,f=0,e=0,d=0;d<a2;++d){c=((j+d)*a4+h)*4
for(b=0;b<a2;++b,c+=4){g+=a3[c]
f+=a3[c+1]
e+=a3[c+2]}}g=B.b.v(g,l)
f=B.b.v(f,l)
e=B.b.v(e,l)
a=q+i
p[a]=B.b.N(g*77+f*150+e*29,8)
if(g>f)a0=g>e?g:e
else a0=f>e?f:e
if(g<f)a1=g<e?g:e
else a1=f<e?f:e
o[a]=a0-a1
n[a]=B.b.N(g-f+256,1)
m[a]=B.b.N(B.b.N(g+f,1)-e+256,1)}return A.hR(new A.d1(s,r,p,o,n,m),a2/a4,a2/a5,null,a6,a7)},
bk(a,b){var s,r,q=a.a,p=b.b,o=a.b,n=b.a,m=q*p-o*n
if(Math.abs(m)<0.000001)return null
s=a.c
r=b.c
return new A.f((s*p-o*r)/m,(q*r-s*n)/m,t.X)},
hR(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=b2.a,a3=b2.b,a4=A.bj(A.bj(b2.c,a2,a3),a2,a3),a5=A.bj(A.bj(b2.d,a2,a3),a2,a3),a6=A.hi(a4,a5,a2,a3),a7=A.bj(b2.e,a2,a3),a8=A.bj(b2.f,a2,a3),a9=new A.cN(a4,a7,a8),b0=A.c([],t.E),b1=A.i1(a6,a2,a3)
a7=A.K(b1).j("X<1>")
s=A.fh(new A.X(b1,new A.dk(),a7))
r=A.fh(new A.X(b1,new A.dl(),a7))
B.c.H(b0,A.im(s,r,a6,a2,a3,b5))
for(a7=A.f3(A.f5(a6.d,a2,a3,1),a2,a3,6),a8=a7.length,q=0;q<a7.length;a7.length===a8||(0,A.z)(a7),++q){p=A.eb(a7[q])
if(p!=null)b0.push(p)}o=A.iq(a4)
a7=a2*a3
n=new Uint8Array(a7)
for(m=0;m<a7;++m)n[m]=a4[m]>o?1:0
for(a7=A.f3(A.f5(A.hW(n,a2,a3,2),a2,a3,2),a2,a3,3),a8=a7.length,q=0;q<a7.length;a7.length===a8||(0,A.z)(a7),++q){p=A.eb(a7[q])
if(p!=null)b0.push(p)}if(b6==null)l=a1
else{a7=A.c([],t.O)
for(a8=b6.gL(),k=t.X,q=0;q<4;++q){j=a8[q]
a7.push(new A.f(j.a/b3-0.5,j.b/b4-0.5,k))}l=A.ec(a7)}a7=l!=null
if(a7)b0.push(l)
i=A.c([],t.q)
for(a8=b0.length,h=a1,q=0;q<b0.length;b0.length===a8||(0,A.z)(b0),++q){g=A.ec(b0[q])
if(g==null)continue
f=A.hX(g,a6,a9,a2,a3,b5)
if(f==null)continue
i.push(new A.b2(g,f))
if(h==null||f>h.b)h=B.c.gS(i)}a8=!1
if(a7)if(!b7)a8=h==null||A.fg(h.a,l)<0.7
if(a8){for(a8=i.length,e=a1,q=0;q<i.length;i.length===a8||(0,A.z)(i),++q){d=i[q]
if(A.fg(d.a,l)<0.7)continue
if(e==null||d.b>e.b)e=d}if(e!=null)h=e}if(a7&&b7){c=Math.sqrt(a2*a2+a3*a3)
b=h==null
if(!b){for(a7=h.a,a8=0.04*c,a=!1,m=0;m<4;++m)if(a7[m].F(l[m])>a8)a=!0}else a=b
if(a){a7=b?a1:h.b
h=new A.b2(l,a7==null?0:a7)}}if(h==null)return a1
a0=A.iu(h.a,a6,a2,a3)
a7=A.c([],t.O)
for(a8=a0.length,k=t.X,q=0;q<a0.length;a0.length===a8||(0,A.z)(a0),++q){j=a0[q]
a7.push(new A.f(B.a.D((j.a+0.5)*b3,0,1),B.a.D((j.b+0.5)*b4,0,1),k))}return A.dU(a7)},
hi(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=c8*c9,c2=new Float32Array(c1),c3=new Float32Array(c1),c4=new Float32Array(c1),c5=new Int32Array(1024)
for(s=c9-1,r=c8-1,q=c7!=null,p=1;p<s;++p)for(o=p*c8,n=1;n<r;++n){m=o+n
l=m-c8
k=l+1
j=c6[k]
i=m+1
h=c6[i]
g=m+c8
f=g+1
e=c6[f]
d=l-1
c=c6[d]
b=m-1
a=c6[b]
a0=g-1
a1=c6[a0]
a2=j+2*h+e-c-2*a-a1
a3=a1+2*c6[g]+e-c-2*c6[l]-j
a4=a2*a2+a3*a3
if(q){k=c7[k]
i=c7[i]
f=c7[f]
d=c7[d]
b=c7[b]
a0=c7[a0]
a5=k+2*i+f-d-2*b-a0
a6=a0+2*c7[g]+f-d-2*c7[l]-k
a7=a5*a5+a6*a6
if(a7>a4){a4=a7
a3=a6
a2=a5}}a8=Math.sqrt(a4)
c2[m]=a2
c3[m]=a3
c4[m]=a8
l=a8>=1023?1023:B.a.bd(a8)
c5[l]=c5[l]+1}a9=(c8-2)*(c9-2)
b1=0
b2=0
for(;;){if(!(b2<1024)){b0=0
break}b1+=c5[b2]
if(b1*2>=a9){b0=b2
break}++b2}b3=b0+0.5
b4=Math.max(6,2.5*b3)
b5=new Uint8Array(c1)
for(b6=0,p=1;p<s;++p)for(q=p*c8,n=1;n<r;++n){m=q+n
a8=c4[m]
if(a8<b4)continue
o=c2[m]
b7=Math.abs(o)
l=c3[m]
b8=Math.abs(l)
if(b8<=b7*0.4142){b9=m-1
c0=m+1}else if(b7<=b8*0.4142){b9=m-c8
c0=m+c8}else{k=m-c8
j=m+c8
if(o*l>0){b9=k-1
c0=j+1}else{b9=k+1
c0=j-1}}if(a8>=c4[b9]&&a8>c4[c0]){b5[m]=1;++b6}}return new A.d_(c2,c3,c4,b5,b6,b3,b4)},
i1(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a9+B.a.af(Math.sqrt(a9*a9+b0*b0))+2,a6=180*a5,a7=new Int32Array(a6)
for(s=b0-1,r=a9-1,q=a8.b,p=a8.a,o=a8.d,n=1;n<s;++n)for(m=n*a9,l=1;l<r;++l){k=m+l
if(o[k]===0)continue
j=Math.atan2(q[k],p[k])
i=B.a.q((j<0?j+3.141592653589793:j)*180/3.141592653589793)
for(h=-3;h<=3;++h){g=i+h
if(g<0)g+=180
if(g>=180)g-=180
f=g*a5+(B.a.q(l*$.ep()[g]+n*$.eq()[g])+a9)
a7[f]=a7[f]+1}}e=Math.max(14,B.a.q(0.08*Math.min(a9,b0)))
s=t.t
d=A.c([],s)
for(k=0;k<a6;++k)if(a7[k]>=e)d.push(k)
B.c.J(d,new A.ds(a7))
c=A.c([],t.w)
b=A.c([],s)
a=A.c([],s)
for(a6=d.length,a0=0;a0<d.length;d.length===a6||(0,A.z)(d),++a0){k=d[a0]
g=B.b.v(k,a5)
a1=B.b.M(k,a5)-a9
s=c.length
a3=0
for(;;){a2=!0
if(!(a3<s)){a2=!1
break}a4=Math.abs(g-b[a3])
if(a4<=4&&Math.abs(a1-a[a3])<=6)break
if(180-a4<=4&&Math.abs(a1+a[a3])<=6)break;++a3}if(a2)continue
c.push(new A.r($.ep()[g],$.eq()[g],a1))
b.push(g)
a.push(a1)
if(c.length>=48)break}return c},
is(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=a0.b,h=-i,g=a0.a,f=a0.c,e=f*g,d=f*i,c=Math.sqrt(a2*a2+a3*a3),b=B.a.P(-c-2),a=B.a.af(2*c+4)
f=a+1
s=new Int32Array(f)
r=new Int32Array(f)
q=Math.max(5,0.8*a1.r)
for(f=a2-3,p=a3-3,o=0,n=0,m=0;m<a;){l=b+m
k=e+l*h
j=d+l*g
if(k>=2&&j>=2&&k<=f&&j<=p){++n
if(A.f6(k,j,g,i,a1,a2,a3,q,2))++o}++m
s[m]=o
r[m]=n}return new A.c0(a0,b,s,r)},
f6(a,b,c,d,e,f,g,h,a0){var s,r,q,p,o,n,m,l,k,j,i
for(s=-a0,r=e.a,q=e.b,p=e.c,o=f-2,n=g-2;s<=a0;++s){m=B.a.q(a+s*c)
l=B.a.q(b+s*d)
if(m<1||l<1||m>o||l>n)continue
k=l*f+m
j=p[k]
if(j<h)continue
i=r[k]*c+q[k]*d
if(i*i>=0.67*j*j)return!0}return!1},
im(c5,c6,c7,c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
if(c5.length<2||c6.length<2)return B.z
s=t.A
r=A.dZ(s,t.I)
s=A.V(c5,s)
B.c.H(s,c6)
q=s.length
p=0
for(;p<s.length;s.length===q||(0,A.z)(s),++p){o=s[p]
r.a4(0,o,A.is(o,c7,c8,c9))}n=new A.dv(c9,c8)
m=n.$2(c5,!0)
l=n.$2(c6,!1)
k=-0.1*c8
j=1.1*c8
i=-0.1*c9
h=1.1*c9
g=A.c([],t.V)
for(s=m.length,q=c8*c9,f=0.1*c9,e=0.1*c8,d=t.O,p=0;p<m.length;m.length===s||(0,A.z)(m),++p){c=m[p]
b=c.a
a=c.b
for(c=l.length,a0=0;a0<l.length;l.length===c||(0,A.z)(l),++a0){a1=l[a0]
a2=a1.a
a3=a1.b
a4=A.bk(b,a2)
a5=A.bk(b,a3)
a6=A.bk(a,a3)
a7=A.bk(a,a2)
if(a4==null||a5==null||a6==null||a7==null)continue
a8=A.c([a4,a5,a6,a7],d)
if(B.c.aB(a8,new A.dt(k,j,i,h)))continue
if(a5.a-a4.a<e||a6.a-a7.a<e)continue
if(a7.b-a4.b<f||a6.b-a5.b<f)continue
a9=A.ed(a8)/q
if(a9<0.06)continue
for(b0=1,b1=1,b2=0;b2<4;b2=b4){b3=a8[b2]
b4=b2+1
b5=a8[b4%4]
A:{if(0===b2){a1=b
break A}if(1===b2){a1=a3
break A}if(2===b2){a1=a
break A}a1=a2
break A}b6=r.h(0,a1)
a1=b6.a
b7=a1.b
a1=a1.a
b8=-b3.a*b7+b3.b*a1
b9=-b5.a*b7+b5.b*a1
if(b8>b9){c0=b9
b9=b8
b8=c0}c1=(b9-b8)*0.06
c2=b6.b5(b8+c1,b9-c1)
c3=c2.a
c4=c2.b<0.5?0:c3
b0*=c4
if(c4<b1)b1=c4}if(b1<0.3)continue
g.push(new A.a9(Math.pow(a9,0.5)*Math.pow(b0,0.25),a8))}}B.c.J(g,new A.du())
s=A.c([],t.E)
for(r=A.cE(g,0,A.c8(24,"count",t.S),t.B),q=r.$ti,r=new A.F(r,r.gk(0),q.j("F<u.E>")),q=q.j("u.E");r.m();){b2=r.d
s.push((b2==null?q.a(b2):b2).b)}return s},
ec(a){var s,r,q,p,o,n,m,l=J.aA(a)
if(l.gk(a)!==4)return null
s=t.O
r=A.c([],s)
for(l=l.gB(a),q=t.X;l.m();){p=l.gn()
r.push(new A.f(p.a,p.b,q))}o=A.dU(r)
if(!o.gb2())return null
l=A.c([],s)
for(s=o.gL(),n=0;n<4;++n){m=s[n]
l.push(new A.f(m.a,m.b,q))}return l},
b4(a,b){var s=J.a0(a),r=Math.abs(s.h(a,0)-b[0])
return s.gk(a)>1?r+2*(Math.abs(s.h(a,1)-b[1])+Math.abs(s.h(a,2)-b[2])):r},
eM(a){var s,r=J.a3(B.c.gai(a)),q=A.c([],t.n)
for(s=0;s<r;++s)q.push(new A.cO(a,s).$0())
return q},
hX(f2,f3,f4,f5,f6,f7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0=null,f1=A.ed(f2)/(f5*f6)
if(f1<0.06)return f0
for(s=0;s<4;){r=f2[(s+3)%4]
q=f2[s];++s
p=f2[s%4]
o=q.a
n=r.a-o
m=q.b
l=r.b-m
k=p.a-o
j=p.b-m
i=Math.sqrt(n*n+l*l)*Math.sqrt(k*k+j*j)
if(i===0)return f0
if(Math.abs((n*k+l*j)/i)>0.77)return f0}h=new A.dm(f2)
o=t.b
g=A.c([],o)
for(f=0;f<10;++f)for(m=0.12+f*0.084,e=0;e<10;++e){d=h.$2(m,0.12+e*0.084)
c=B.a.q(d.a)
b=B.a.q(d.b)
if(c<0||b<0||c>=f5||b>=f6)continue
g.push(f4.ae(b*f5+c))}if(g.length<30)return f0
B.c.J(g,new A.dn())
a=A.eM(B.c.u(g,B.b.ad(g.length*6,10)))
m=f2[0]
a0=f2[1]
a1=f2[2]
a2=f2[3]
a3=(m.a+a0.a+a1.a+a2.a)/4
a4=(m.b+a0.b+a1.b+a2.b)/4
a5=Math.max(5,0.8*f3.r)
a2=t.n
a6=A.c([],a2)
a7=A.c([],a2)
a1=t.G
a8=A.c([],a1)
a9=A.c([],a1)
for(m=f5-3,a0=f6-3,b0=0;b0<4;){r=f2[b0];++b0
q=f2[b0%4]
b1=r.F(q)
if(b1<8)return f0
a1=r.b
b2=q.b-a1
b3=-b2/b1
b4=r.a
b5=q.a-b4
b6=b5/b1
if((a3-b4)*b3+(a4-a1)*b6<0){b3=-b3
b6=-b6}b7=Math.max(12,B.a.v(b1,1.5))
b8=A.c([],o)
b9=A.c([],o)
for(c0=5*b3,c1=5*b6,c2=0,c3=0,c4=0,c5=0;c5<=b7;++c5){c6=0.06+0.88*c5/b7
c7=b4+b5*c6
c8=a1+b2*c6;++c4
if(c7<2||c8<2||c7>m||c8>a0)continue;++c2
if(A.f6(c7,c8,b3,b6,f3,f5,f6,a5,3))++c3
if((c5&1)===1)continue
c9=B.a.q(c7+c0)
d0=B.a.q(c8+c1)
if(c9>=0&&d0>=0&&c9<f5&&d0<f6)b8.push(f4.ae(d0*f5+c9))
d1=B.a.q(c7-c0)
d2=B.a.q(c8-c1)
if(d1>=0&&d2>=0&&d1<f5&&d2<f6)b9.push(f4.ae(d2*f5+d1))}a6.push(c2===0?0:c3/c2)
a7.push(c2/c4)
a8.push(b8)
a9.push(b9)}o=A.c([],o)
for(m=a9.length,d3=0;d3<a9.length;a9.length===m||(0,A.z)(a9),++d3)B.c.H(o,a9[d3])
d4=o.length>=20?A.eM(o):f0
d5=new A.dq()
m=d4==null
d6=m?0:Math.max(20,2.5*d5.$2(o,d4))
d7=Math.max(20,2.5*d5.$2(B.c.u(g,B.b.ad(g.length*6,10)),a))
d8=!m&&A.b4(d4,a)>=15
d9=A.c([],a2)
for(o=2*d6,e0=1,e1=1,e2=0,b0=0;b0<4;++b0){if(a7[b0]<0.4){++e2
e3=0.45}else{e3=a6[b0]
if(d4!=null){e4=0
if(d8)for(m=a8[b0],a0=m.length,d3=0;d3<m.length;m.length===a0||(0,A.z)(m),++d3){e5=m[d3]
e6=A.b4(e5,d4)
if(e6<=d6&&e6<0.6*A.b4(e5,a))++e4}for(m=a9[b0],a0=m.length,e7=0,d3=0;d3<m.length;m.length===a0||(0,A.z)(m),++d3){e5=m[d3]
if(A.b4(e5,d4)>o&&A.b4(e5,a)>d7)++e7}m=a8[b0].length
e8=m===0?0:e4/m
m=a9[b0].length
e9=m===0?0:e7/m
e3*=(1-0.4*e8)*(1-0.3*e9)}}d9.push(e3)
e0*=e3
if(e3<e1)e1=e3}o=B.c.b6(d9,new A.dp())
if(e2>1||e1<0.3||o/4<0.5)return f0
return Math.pow(Math.min(f1,1),0.5)*Math.pow(e0,0.25)},
iu(c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=c5[0],b9=c5[1],c0=c5[2],c1=c5[3],c2=(b8.a+b9.a+c0.a+c1.a)/4,c3=(b8.b+b9.b+c0.b+c1.b)/4,c4=A.c([],t.u)
for(b8=0.8*c6.r,b9=c6.c,c0=c6.a,c1=c6.b,s=c7-2,r=c8-2,q=t.i,p=t.n,o=0;o<4;){n=c5[o];++o
m=c5[o%4]
l=n.F(m)
k=n.b
j=m.b-k
i=-j/l
h=n.a
g=m.a-h
f=g/l
if((c2-h)*i+(c3-k)*f<0){i=-i
f=-f}e=A.c([],p)
d=A.c([],p)
c=A.c([],p)
b=Math.max(12,B.a.v(l,1.5))
for(a=0;a<=b;++a){a0=0.08+0.84*a/b
a1=h+g*a0
a2=k+j*a0
a3=A.e_(9,0,q)
for(a4=0,a5=0,a6=-4;a6<=4;++a6){a7=B.a.q(a1+a6*i)
a8=B.a.q(a2+a6*f)
if(a7<1||a8<1||a7>s||a8>r)continue
a9=a8*c7+a7
b0=b9[a9]
b1=c0[a9]*i+c1[a9]*f
if(b1*b1<0.67*b0*b0)continue
a3[a6+4]=b0
if(b0>a4){a5=a6
a4=b0}}if(a4<Math.max(5,b8))continue
if(a5>-4&&a5<4){b2=a3[a5+3]
b0=a3[a5+4]
b3=a3[a5+5]
b4=b2-2*b0+b3
b5=b4<0?a5+B.a.D(0.5*(b2-b3)/b4,-0.5,0.5):a5}else b5=a5
e.push(a1+b5*i)
d.push(a2+b5*f)
c.push(a4)}c4.push(A.f8(e,d,c,l))}if(B.c.aB(c4,new A.dx()))return c5
b6=A.c([],t.O)
for(b8=c7*c7+c8*c8,o=0;o<4;++o){b9=c4[(o+3)%4]
b9.toString
c0=c4[o]
c0.toString
b7=A.bk(b9,c0)
if(b7==null)return c5
if(b7.F(c5[o])>0.03*Math.sqrt(b8))return c5
b6.push(b7)}return b6},
f8(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.length
if(a0<Math.max(8,a4*0.25))return null
s=A.e_(a0,!0,t.y)
for(a0=t.M,r=t.d,q=null,p=0;p<2;++p,s=j){for(o=a1.length,n=0,m=0,l=0,k=0;k<o;++k){if(!s[k])continue
j=a3[k]
n+=j
m+=j*a1[k]
l+=j*a2[k]}if(n===0)return q
m/=n
l/=n
for(i=0,h=0,g=0,k=0;k<o;++k){if(!s[k])continue
f=a1[k]-m
e=a2[k]-l
j=a3[k]
d=j*f
i+=d*f
h+=j*e*e
g+=d*e}c=0.5*Math.atan2(2*g,i-h)
b=-Math.sin(c)
a=Math.cos(c)
o=m*b+l*a
q=new A.r(b,a,o)
j=A.c([],r)
for(k=0;k<a1.length;++k)j.push(Math.abs(a1[k]*b+a2[k]*a-o)<=1.5)
if(new A.X(j,new A.dr(),a0).gk(0)<8)return q}return q},
f3(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4*b5,a9=new Int32Array(a8),b0=new Int32Array(a8),b1=A.c([],t.r),b2=0.1*b4*b5
for(a8=b3.length,s=0,r=0;r<a8;++r){if(b3[r]===0||a9[r]!==0)continue;++s
b0[0]=r
a9[r]=s
for(q=b5,p=b4,o=1,n=0,m=0,l=0;o>0;){--o
k=b0[o];++n
j=B.b.M(k,b4)
i=B.b.v(k,b4)
if(j<p)p=j
if(j>m)m=j
if(i<q)q=i
if(i>l)l=i
for(h=-1;h<=1;++h){g=i+h
if(g<0||g>=b5)continue
for(f=g*b4,e=-1;e<=1;++e){d=j+e
if(d<0||d>=b4)continue
c=f+d
if(b3[c]!==0&&a9[c]===0){a9[c]=s
b=o+1
b0[o]=c
o=b}}}}if((m-p+1)*(l-q+1)>=b2&&n>=40)b1.push(new A.c3([s,m,l,p,q]))}B.c.J(b1,new A.dg())
a=A.c([],t.E)
for(a8=A.cE(b1,0,A.c8(b6,"count",t.S),t.k),f=a8.$ti,a8=new A.F(a8,a8.gk(0),f.j("F<u.E>")),a0=t.X,a1=t.O,f=f.j("u.E");a8.m();){a2=a8.d
if(a2==null)a2=f.a(a2)
a3=A.c([],a1)
for(a4=a2.a,i=a4[4];i<=a4[2];++i){for(j=a4[3],a5=i*b4,a6=-1,a7=-1;j<=a4[1];++j)if(a9[a5+j]===a4[0]){if(a6<0)a6=j
a7=j}if(a6>=0){a3.push(new A.f(a6,i,a0))
a3.push(new A.f(a7,i,a0))}}a.push(A.f4(a3))}return a},
f4(a){var s,r,q,p,o,n,m,l,k,j
if(a.length<3)return a
s=t.X
r=A.V(a,s)
B.c.J(r,new A.di())
q=new A.dj()
p=t.O
o=A.c([],p)
for(n=r.length,m=0;m<r.length;r.length===n||(0,A.z)(r),++m){l=r[m]
for(;;){k=o.length
if(!(k>=2&&q.$3(o[k-2],B.c.gS(o),l)<=0))break
o.pop()}o.push(l)}j=A.c([],p)
for(p=A.K(r).j("aU<1>"),r=new A.aU(r,p),r=new A.F(r,r.gk(0),p.j("F<u.E>")),p=p.j("u.E");r.m();){n=r.d
if(n==null)n=p.a(n)
for(;;){k=j.length
if(!(k>=2&&q.$3(j[k-2],B.c.gS(j),n)<=0))break
j.pop()}j.push(n)}s=A.V(B.c.l(o,0,o.length-1),s)
B.c.H(s,B.c.l(j,0,j.length-1))
return s},
eb(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=J.aA(a3)
if(a2.gk(a3)<4)return null
for(s=0,r=0;r<a2.gk(a3);r=q){q=r+1
s+=a2.h(a3,r).F(a2.h(a3,B.b.M(q,a2.gk(a3))))}p=s*0.004
for(o=a3;a2=J.aA(o),a2.gk(o)>24;){o=A.iA(a3,p)
p*=1.5}if(a2.gk(o)<4)return null
n=a2.gk(o)
for(m=n-3,l=n-2,k=n-1,j=t.O,i=-1,h=null,g=0;g<m;g=f)for(f=g+1,e=f;e<l;e=d)for(d=e+1,c=d;c<k;c=b)for(b=c+1,a=b;a<n;++a){a0=A.c([a2.h(o,g),a2.h(o,e),a2.h(o,c),a2.h(o,a)],j)
a1=A.ed(a0)
if(a1>i){h=a0
i=a1}}return h},
iA(a,b){var s,r,q,p,o,n,m,l,k,j,i=J.aA(a)
if(i.gk(a)<=4)return a
for(s=0,r=-1,q=1;q<i.gk(a);++q){p=i.h(a,0)
o=i.h(a,q)
n=p.a-o.a
m=p.b-o.b
l=p.$ti.c.a(n*n+m*m)
if(l>r){r=l
s=q}}k=A.dz(i.l(a,0,s+1),b)
p=t.X
o=A.V(i.u(a,s),p)
o.push(i.h(a,0))
j=A.dz(o,b)
i=A.V(J.dS(k,0,k.length-1),p)
B.c.H(i,J.dS(j,0,j.length-1))
return i},
dz(a,b){var s,r,q,p,o,n,m,l,k
if(a.length<3)return a
s=J.a0(a)
r=s.gai(a)
q=s.gS(a)
for(p=0,o=0,n=1;n<a.length-1;++n){m=A.hT(a[n],r,q)
if(m>o){o=m
p=n}}if(o<=b)return A.c([r,q],t.O)
l=A.dz(s.l(a,0,p+1),b)
k=A.dz(s.u(a,p),b)
s=A.V(J.dS(l,0,l.length-1),t.X)
B.c.H(s,k)
return s},
hT(a,b,c){var s=b.a,r=c.a-s,q=b.b,p=c.b-q,o=Math.sqrt(r*r+p*p)
if(o===0)return a.F(b)
return Math.abs((a.a-s)*p-(a.b-q)*r)/o},
fg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.V(a,t.X)
B.c.H(b,a0)
s=b.length
r=1/0
q=1/0
p=-1/0
o=-1/0
n=0
for(;n<s;++n){m=b[n]
l=m.a
r=Math.min(r,l)
k=m.b
q=Math.min(q,k)
p=Math.max(p,l)
o=Math.max(o,k)}for(b=p-r,s=o-q,j=0,i=0,h=0;h<40;++h){g=q+(h+0.5)*s/40
for(f=0;f<40;++f){e=r+(f+0.5)*b/40
d=A.fa(a,e,g)
c=A.fa(a0,e,g)
if(d||c)++i
if(d&&c)++j}}return i===0?0:j/i},
fa(a,b,c){var s,r,q,p,o,n,m,l
for(s=!1,r=!1,q=0;q<4;){p=a[q];++q
o=a[q%4]
n=p.a
m=p.b
l=(o.a-n)*(c-m)-(o.b-m)*(b-n)
if(l>0)s=!0
if(l<0)r=!0}return!(s&&r)},
ed(a){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<s;){p=a[q];++q
o=a[q%s]
r+=p.a*o.b-o.a*p.b}return Math.abs(r)/2},
bj(a,b,c){var s,r,q,p,o,n,m,l=b*c,k=new Uint16Array(l)
for(s=b-1,r=0;r<c;++r){q=r*b
for(p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=a[q+B.b.D(p+n,0,s)]*B.k[n+2]
k[q+p]=o}}m=new Uint8Array(l)
for(l=c-1,r=0;r<c;++r)for(s=r*b,p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=k[B.b.D(r+n,0,l)*b+p]*B.k[n+2]
m[s+p]=o+128>>>8}return m},
iq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e_(256,0,t.S)
for(s=a.length,r=0;r<s;++r){q=a[r]
f[q]=f[q]+1}for(p=0,o=0;o<256;++o)p+=o*f[o]
for(n=0,m=0,l=0,k=127,j=0;j<256;++j){i=f[j]
m+=i
if(m===0)continue
h=s-m
if(h===0)break
n+=j*i
i=n/m-(p-n)/h
g=m*h*i*i
if(g>l){k=j
l=g}}return k},
f5(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=b-1,r=c-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=0;m<c;++m)for(l=m*b,k=m>0,j=m<r,i=0;i<b;++i){h=l+i
g=!0
if(p[h]===0)if(!(i>0&&p[h-1]!==0))if(!(i<s&&p[h+1]!==0))if(!(k&&p[h-b]!==0))g=j&&p[h+b]!==0
if(g)n[h]=1}}return p},
hW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=c-1,r=b-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=1;m<s;++m)for(l=m*b,k=1;k<r;++k){j=l+k
if(p[j]!==0&&p[j-1]!==0&&p[j+1]!==0&&p[j-b]!==0&&p[j+b]!==0)n[j]=1}}return p},
fh(a){var s,r,q,p,o,n=t.S,m=A.dZ(n,n),l=A.c([],t.w)
for(n=J.ai(a.a),s=new A.b0(n,a.b);s.m();){r=n.gn()
q=Math.atan2(r.b,r.a)*180/3.141592653589793
p=B.a.P((q<0?q+180:q)/4)
o=m.h(0,p)
if(o==null)o=0
if(o>=5)continue
m.a4(0,p,o+1)
l.push(r)
if(l.length>=24)break}return l},
j8(d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7={},c8=d1*d1,c9=d0.length
if(c9!==c8)throw A.d(A.cd(c9,"prob","erwartet "+c8+" Werte"))
s=new Int32Array(c8)
r=new Int32Array(c8)
c7.a=c7.b=0
for(c9=d1-1,q=0,p=0;p<c8;++p){o={}
if(d0[p]<=0.5||s[p]!==0)continue
n=++c7.a
o.a=0
o.a=1
r[0]=p
s[p]=n
for(m=0;n=o.a,n>0;){l=n-1
o.a=l
k=r[l];++m
j=B.b.M(k,d1)
i=B.b.v(k,d1)
n=new A.dQ(c7,o,d0,s,r)
if(j>0)n.$1(k-1)
if(j<c9)n.$1(k+1)
if(i>0)n.$1(k-d1)
if(i<c9)n.$1(k+d1)}if(m>q){c7.b=c7.a
q=m}}if(q<0.02*c8)return c6
n=t.O
h=A.c([],n)
for(g=t.X,i=0;i<d1;++i){for(f=i*d1,e=c7.b,d=-1,c=-1,j=0;j<d1;++j)if(s[f+j]===e){if(d<0)d=j
c=j}if(d<0)continue
h.push(new A.f(d,i,g))
f=i+1
h.push(new A.f(d,f,g))
e=c+1
h.push(new A.f(e,i,g))
h.push(new A.f(e,f,g))}b=A.eb(A.f4(h))
a=b==null?c6:A.ec(b)
if(a==null)return c6
f=t.n
a0=A.c([],f)
a1=A.c([],f)
a2=new A.dP(new A.dO(c7,d1,s))
for(i=0;i<d1;i=a5)for(e=i<c9,a3=i*d1,a4=i+0.5,a5=i+1,a6=a5*d1,j=0;j<d1;++j){a7=a3+j
a8=d0[a7]
if(j<c9){a9=d0[a7+1]
if((a8-0.5)*(a9-0.5)<0)a7=a2.$2(j,i)||a2.$2(j+1,i)
else a7=!1
if(a7){a0.push(j+(0.5-a8)/(a9-a8)+0.5)
a1.push(a4)}}if(e){a9=d0[a6+j]
if((a8-0.5)*(a9-0.5)<0)a7=a2.$2(j,i)||a2.$2(j,a5)
else a7=!1
if(a7){a0.push(j+0.5)
a1.push(i+(0.5-a8)/(a9-a8)+0.5)}}}b0=A.c([],t.u)
for(b1=0;b1<4;){a8=a[b1];++b1
a9=a[b1%4]
b2=a8.F(a9)
if(b2<2){b0.push(c6)
continue}c9=a8.a
b3=(a9.a-c9)/b2
e=a8.b
b4=(a9.b-e)/b2
b5=Math.max(1.5,0.04*b2)
b6=A.c([],f)
b7=A.c([],f)
b8=A.c([],f)
for(a3=0.15*b2,a4=0.85*b2,b9=0;b9<a0.length;++b9){a6=a0[b9]
c0=a6-c9
c1=a1[b9]-e
c2=c0*b3+c1*b4
if(c2>a3&&c2<a4&&Math.abs(-c0*b4+c1*b3)<b5){b6.push(a6)
b7.push(a1[b9])
b8.push(1)}}b0.push(b6.length>=4?A.f8(b6,b7,b8,0):c6)}c3=A.c([],n)
for(c9=0.25*d1,b1=0;b1<4;++b1){c4=b0[(b1+3)%4]
c5=b0[b1]
k=c4!=null&&c5!=null?A.bk(c4,c5):c6
if(k==null||k.F(a[b1])>c9)k=a[b1]
c3.push(new A.f(k.a/d1,k.b/d1,g))}return A.dU(c3)},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(){},
ci:function ci(){},
cj:function cj(a,b){this.a=a
this.b=b},
ck:function ck(){},
d1:function d1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b){this.a=a
this.b=b},
dk:function dk(){},
dl:function dl(){},
d_:function d_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ds:function ds(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(){},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
dn:function dn(){},
dq:function dq(){},
dp:function dp(){},
dx:function dx(){},
dr:function dr(){},
dg:function dg(){},
di:function di(){},
dj:function dj(){},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a){this.a=a},
bc(a,b,c){return new A.c6(a,b,c,new Float32Array(a*b*c))},
h8(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=t.e,c=d.a(B.u.aY(a,null)),b=A.dZ(t.N,t.Y)
e.a=0
s=new A.cB(e,a0)
for(r=t.j,q=J.ai(r.a(c.h(0,"layers"))),p=t.S;q.m();){o=d.a(q.gn())
n=J.fK(r.a(o.h(0,"shape")),p)
m=s.$1(n.a1(n,1,new A.cA()))
l=s.$1(A.at(o.h(0,"cout")))
k=A.e7(o.h(0,"name"))
A.e7(o.h(0,"kind"))
j=A.at(o.h(0,"stride"))
i=A.f_(o.h(0,"relu"))
h=A.at(o.h(0,"cin"))
g=A.at(o.h(0,"cout"))
f=A.f0(o.h(0,"res"))
b.a4(0,k,new A.c_(j,i,h,g,m,l,f===!0))}d=e.a
r=a0.byteLength
if(d!==r)throw A.d(A.ey("weights.bin passt nicht zu model.json ("+d+" von "+r+" Bytes gelesen)"))
d=A.at(c.h(0,"input"))
A.at(c.h(0,"output"))
return new A.cy(d,b)},
hQ(b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b7.b,a6=b8.b,a7=B.b.v(a6+2-3,a5)+1,a8=b8.c,a9=B.b.v(a8+2-3,a5)+1,b0=b7.e,b1=A.bc(b0,a7,a9),b2=b7.f,b3=b8.d,b4=b1.d,b5=a6*a8,b6=a7*a9
for(s=b7.c,r=b7.d,q=b4.$flags|0,p=b7.r,o=0;o<b0;++o){n=o*b6
for(m=0;m<b6;++m){l=p[o]
q&2&&A.B(b4)
b4[n+m]=l}for(l=o*r,k=0;k<r;++k)for(j=k*b5,i=(l+k)*3,h=0;h<3;++h)for(g=(i+h)*3,f=0;f<3;++f){e=b2[g+f]
for(d=0;d<a7;++d){c=d*a5+h-1
if(c<0||c>=a6)continue
b=j+c*a8
a=n+d*a9
for(a0=0;a0<a9;++a0){a1=a0*a5+f-1
if(a1<0||a1>=a8)continue
a2=a+a0
a3=b4[a2]
a4=b3[b+a1]
q&2&&A.B(b4)
b4[a2]=a3+e*a4}}}if(s)A.fi(b4,n,b6)}return b1},
hU(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=c1.b,b0=c2.b,b1=B.b.v(b0+2-3,a9)+1,b2=c2.c,b3=B.b.v(b2+2-3,a9)+1,b4=c2.a,b5=A.bc(b4,b1,b3),b6=c1.f,b7=c2.d,b8=b5.d,b9=b0*b2,c0=b1*b3
for(s=c1.c,r=b8.$flags|0,q=a9===1,p=b3-1,o=c1.r,n=0;n<b4;++n){m=n*c0
l=n*b9
for(k=0;k<c0;++k){j=o[n]
r&2&&A.B(b8)
b8[m+k]=j}for(j=n*9,i=0;i<3;++i)for(h=j+i*3,g=0;g<3;++g){f=b6[h+g]
for(e=g-1,d=g===2,c=g===0,b=0;b<b1;++b){a=b*a9+i-1
if(a<0||a>=b0)continue
a0=l+a*b2
a1=m+b*b3
if(q){a2=c?1:0
a3=d?p:b3
for(a4=a2;a4<a3;++a4){a5=a1+a4
a6=b8[a5]
a7=b7[a0+a4+e]
r&2&&A.B(b8)
b8[a5]=a6+f*a7}}else for(a4=0;a4<b3;++a4){a8=a4*a9+g-1
if(a8<0||a8>=b2)continue
a5=a1+a4
a6=b8[a5]
a7=b7[a0+a8]
r&2&&A.B(b8)
b8[a5]=a6+f*a7}}}if(s)A.fi(b8,m,c0)}return b5},
ab(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=b4.b,a3=b4.c,a4=a2*a3,a5=b3.d,a6=b3.e,a7=A.bc(a6,a2,a3),a8=b3.f,a9=b3.r,b0=b4.d,b1=a7.d,b2=b3.c
for(a2=b1.$flags|0,s=0;a3=s+3,a3<a6;s+=4){r=s*a5
q=r+a5
p=q+a5
o=p+a5
n=a9[s]
m=a9[s+1]
l=a9[s+2]
k=a9[a3]
j=s*a4
i=j+a4
h=i+a4
g=h+a4
for(f=0;f<a4;++f){for(e=f,d=k,c=l,b=m,a=n,a0=0;a0<a5;++a0,e+=a4){a1=b0[e]
a+=a8[r+a0]*a1
b+=a8[q+a0]*a1
c+=a8[p+a0]*a1
d+=a8[o+a0]*a1}if(b2){if(a<0)a=0
if(b<0)b=0
if(c<0)c=0
if(d<0)d=0}a2&2&&A.B(b1)
b1[j+f]=a
b1[i+f]=b
b1[h+f]=c
b1[g+f]=d}}for(;s<a6;++s){r=s*a5
n=a9[s]
j=s*a4
for(f=0;f<a4;++f){for(e=f,a=n,a0=0;a0<a5;++a0,e+=a4)a+=a8[r+a0]*b0[e]
a3=b2&&a<0?0:a
a2&2&&A.B(b1)
b1[j+f]=a3}}return a7},
dA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.a,f=a.b,e=a.c,d=e*2,c=A.bc(g,f*2,d)
for(s=c.b,r=c.d,q=a.d,p=r.$flags|0,o=0;o<g;++o){n=o*f*e
m=o*s*d
for(l=0;l<s;++l){k=n+(l>>>1)*e
j=m+l*d
for(i=0;i<d;++i){h=q[k+(i>>>1)]
p&2&&A.B(r)
r[j+i]=h}}}return c},
dc(a,b){var s,r,q,p,o,n=a.d,m=b.d
for(s=n.length,r=n.$flags|0,q=0;q<s;++q){p=n[q]
o=m[q]
r&2&&A.B(n)
n[q]=p+o}return a},
fi(a,b,c){var s,r,q
for(s=b+c,r=a.$flags|0,q=b;q<s;++q)if(a[q]<0){r&2&&A.B(a)
a[q]=0}},
iY(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(a8<8||a9<8||a7.length<a8*a9*4)return null
s=a6.a
r=a6.al(A.jb(a7,a8,a9,s,s))
q=r.a
s=r.b
p=A.j8(s,q)
if(p==null)return null
o=A.c([],t.O)
for(n=p.gL(),m=t.X,l=0;l<4;++l){k=n[l]
o.push(new A.f(k.a*q,k.b*q,m))}j=new A.dE(o)
for(i=0,h=0,g=0,f=0,e=0,d=0,c=0;c<q;++c)for(o=c*q,b=c+0.5,a=0;a<q;++a){a0=a+0.5
for(a1=1/0,a2=0;a2<4;++a2)a1=Math.min(a1,A.iM(j.$3(a2,a0,b)))
a3=s[o+a]
a4=a1>0
a5=a3>0.5
if(a4&&a5)++i
if(a4||a5)++h
if(a1>1.5){g+=a3;++f}else if(a1<-1.5){e+=1-a3;++d}}s=h===0?0:i/h
o=f===0?0:g/f
return new A.cx(p,s,o,d===0?1:e/d)},
jb(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.eR(a4,a6),a1=A.eR(a5,a7),a2=new Float32Array(a6*a5*3)
for(s=a0.d,r=a0.b,q=a0.c,p=a0.a,o=0;o<a5;++o){n=o*a4*4
for(m=o*a6,l=0;l<a6;++l){k=r[l]
j=q[l]
i=l*p
for(h=0,g=0,f=0,e=0;e<j;++e){d=s[i+e]
c=n+(k+e)*4
h+=d*a3[c]
g+=d*a3[c+1]
f+=d*a3[c+2]}b=(m+l)*3
a2[b]=h
a2[b+1]=g
a2[b+2]=f}}a=new Uint8Array(a6*a7*3)
for(s=a1.d,r=a1.b,q=a1.c,p=a1.a,o=0;o<a7;++o){k=r[o]
j=q[o]
i=o*p
for(m=o*a6,l=0;l<a6;++l){for(h=0,g=0,f=0,e=0;e<j;++e){d=s[i+e]
c=((k+e)*a6+l)*3
h+=d*a2[c]
g+=d*a2[c+1]
f+=d*a2[c+2]}b=(m+l)*3
a[b]=B.b.D(B.a.q(h),0,255)
a[b+1]=B.b.D(B.a.q(g),0,255)
a[b+2]=B.b.D(B.a.q(f),0,255)}}return a},
eR(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=a/a0,f=Math.max(g,1),e=B.a.af(f)*2+1,d=new Int32Array(a0),c=new Int32Array(a0),b=new Float64Array(a0*e)
for(s=0;s<a0;++s){r=(s+0.5)*g
q=Math.max(B.a.P(r-f+0.5),0)
p=Math.min(B.a.P(r+f+0.5),a)
o=s*e
n=q
m=0
l=0
for(;;){if(!(n<p&&l<e))break
k=Math.abs((n-r+0.5)/f)
j=k<1?1-k:0
b[o+l]=j
m+=j;++n;++l}if(m>0)for(i=0;i<l;++i){h=o+i
b[h]=b[h]/m}d[s]=q
c[s]=l}return new A.d3(e,d,c,b)},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
cz:function cz(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.c=b},
cB:function cB(a,b){this.a=a
this.b=b},
cA:function cA(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a){this.a=a},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av(){var s=0,r=A.io(t.o),q,p=2,o=[],n,m,l,k,j,i,h,g
var $async$av=A.iH(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
i=t.m
s=7
return A.dd(A.dL(j.self.fetch("ml/sheet_net.json"),i),$async$av)
case 7:n=b
s=8
return A.dd(A.dL(j.self.fetch("ml/sheet_net.bin"),i),$async$av)
case 8:m=b
if(!n.ok||!m.ok){s=1
break}s=9
return A.dd(A.dL(n.text(),t.N),$async$av)
case 9:l=b
s=10
return A.dd(A.dL(m.arrayBuffer(),t.a),$async$av)
case 10:k=b
j=k
A.f2(j,0,null)
j=new DataView(j,0)
$.ff=A.h8(l,j)
p=2
s=6
break
case 4:p=3
g=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.hM(q,r)
case 2:return A.hL(o.at(-1),r)}})
return A.hN($async$av,r)},
j5(){var s,r,q,p
A.av()
s=v.G
r=s.self
q=new A.dJ()
if(typeof q=="function")A.c9(A.bn("Attempting to rewrap a JS function.",null))
p=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.hP,q)
p[$.em()]=q
r.onmessage=p
s.self.postMessage({type:"ready"})},
dJ:function dJ(){},
fv(a){return v.mangledGlobalNames[a]},
jd(a){throw A.y(new A.bA("Field '"+a+"' has been assigned during initialization."),new Error())},
iR(a,b,c,d){var s,r,q,p
if(b<1||c<1||a.length<b*c*4)return null
s=null
if(d!=null)try{s=A.iY(d,a,b,c)}catch(r){}q=s
q=q==null?null:q.a
p=s
if(p==null)p=null
else p=p.b>0.93&&p.c>0.9&&p.d>0.9
return A.iQ(a,b,c,q,p===!0)},
j9(a){var s,r,q,p=t.n,o=A.c([],p)
for(s=a.gL(),r=0;r<4;++r){q=s[r]
B.c.H(o,A.c([q.a,q.b],p))}return o}},B={}
var w=[A,J,B]
var $={}
A.dX.prototype={}
J.bv.prototype={
I(a,b){return a===b},
gp(a){return A.bN(a)},
i(a){return"Instance of '"+A.bO(a)+"'"},
gt(a){return A.ae(A.e8(this))}}
J.by.prototype={
i(a){return String(a)},
gp(a){return a?519018:218159},
gt(a){return A.ae(t.y)},
$ik:1,
$ix:1}
J.aH.prototype={
I(a,b){return null==b},
i(a){return"null"},
gp(a){return 0},
$ik:1}
J.aK.prototype={$ip:1}
J.U.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.bM.prototype={}
J.a7.prototype={}
J.T.prototype={
i(a){var s=a[$.fx()]
if(s==null)s=a[$.em()]
if(s==null)return this.aH(a)
return"JavaScript function for "+J.aD(s)}}
J.aJ.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.aL.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.i.prototype={
a0(a,b){return new A.N(a,A.K(a).j("@<1>").G(b).j("N<1,2>"))},
aW(a,b){a.$flags&1&&A.B(a,29)
a.push(b)},
H(a,b){var s
a.$flags&1&&A.B(a,"addAll",2)
if(Array.isArray(b)){this.aJ(a,b)
return}for(s=J.ai(b);s.m();)a.push(s.gn())},
aJ(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.E(a))
for(s=0;s<r;++s)a.push(b[s])},
b6(a,b){var s,r,q=a.length
if(q===0)throw A.d(A.bw())
s=a[0]
for(r=1;r<q;++r){s=b.$2(s,a[r])
if(q!==a.length)throw A.d(A.E(a))}return s},
aj(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.E(a))}return s},
a1(a,b,c){return this.aj(a,b,c,t.z)},
A(a,b){return a[b]},
l(a,b,c){var s=a.length
if(b>s)throw A.d(A.P(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.d(A.P(c,b,s,"end",null))
if(b===c)return A.c([],A.K(a))
return A.c(a.slice(b,c),A.K(a))},
u(a,b){return this.l(a,b,null)},
U(a,b,c){A.e2(b,c,a.length)
return A.cE(a,b,c,A.K(a).c)},
gai(a){if(a.length>0)return a[0]
throw A.d(A.bw())},
gS(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.bw())},
aB(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.d(A.E(a))}return!1},
J(a,b){var s,r,q,p,o
a.$flags&2&&A.B(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.i7()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.K(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.az(b,2))
if(p>0)this.aS(a,p)},
ao(a){return this.J(a,null)},
aS(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
i(a){return A.ez(a,"[","]")},
gB(a){return new J.aj(a,a.length,A.K(a).j("aj<1>"))},
gp(a){return A.bN(a)},
gk(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.fp(a,b))
return a[b]},
$ih:1,
$ie:1}
J.bx.prototype={
be(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bO(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cn.prototype={}
J.aj.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.z(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.am.prototype={
C(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga3(b)
if(this.ga3(a)===s)return 0
if(this.ga3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga3(a){return a===0?1/a<0:a<0},
gan(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bd(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.b_(""+a+".toInt()"))},
af(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.b_(""+a+".ceil()"))},
P(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.b_(""+a+".floor()"))},
q(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.b_(""+a+".round()"))},
D(a,b,c){if(this.C(b,c)>0)throw A.d(A.iI(b))
if(this.C(a,b)<0)return b
if(this.C(a,c)>0)return c
return a},
T(a,b){var s
if(b>20)throw A.d(A.P(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga3(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
M(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
v(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aw(a,b)},
ad(a,b){return(a|0)===a?a/b|0:this.aw(a,b)},
aw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.b_("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+A.m(b)))},
N(a,b){var s
if(a>0)s=this.aU(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aU(a,b){return b>31?0:a>>>b},
gt(a){return A.ae(t.H)},
$ib:1}
J.al.prototype={
gan(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gt(a){return A.ae(t.S)},
$ik:1,
$ia:1}
J.aI.prototype={
gt(a){return A.ae(t.i)},
$ik:1}
J.an.prototype={
C(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gp(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.ae(t.N)},
gk(a){return a.length},
$ik:1,
$iv:1}
A.Y.prototype={
gB(a){return new A.bq(J.ai(this.gO()),A.au(this).j("bq<1,2>"))},
gk(a){return J.a3(this.gO())},
A(a,b){return A.au(this).y[1].a(J.dR(this.gO(),b))},
i(a){return J.aD(this.gO())}}
A.bq.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.a4.prototype={
gO(){return this.a}}
A.b5.prototype={$ih:1}
A.b3.prototype={
h(a,b){return this.$ti.y[1].a(J.cc(this.a,b))},
U(a,b,c){var s=this.$ti
return A.ew(J.fN(this.a,b,c),s.c,s.y[1])},
$ih:1,
$ie:1}
A.N.prototype={
a0(a,b){return new A.N(this.a,this.$ti.j("@<1>").G(b).j("N<1,2>"))},
gO(){return this.a}}
A.bA.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.cw.prototype={}
A.h.prototype={}
A.u.prototype={
gB(a){var s=this
return new A.F(s,s.gk(s),A.au(s).j("F<u.E>"))},
b3(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.A(0,0))
if(o!==p.gk(p))throw A.d(A.E(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.A(0,q))
if(o!==p.gk(p))throw A.d(A.E(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.A(0,q))
if(o!==p.gk(p))throw A.d(A.E(p))}return r.charCodeAt(0)==0?r:r}}}
A.aY.prototype={
gaO(){var s=J.a3(this.a),r=this.c
if(r>s)return s
return r},
gaV(){var s=J.a3(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.a3(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s>=r)return r-q
return s-q},
A(a,b){var s=this,r=s.gaV()+b
if(b<0||r>=s.gaO())throw A.d(A.dW(b,s.gk(0),s,"index"))
return J.dR(s.a,r)}}
A.F.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aA(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.E(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
A.aN.prototype={
gk(a){return J.a3(this.a)},
A(a,b){return this.b.$1(J.dR(this.a,b))}}
A.X.prototype={
gB(a){return new A.b0(J.ai(this.a),this.b)}}
A.b0.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.aG.prototype={}
A.aU.prototype={
gk(a){return J.a3(this.a)},
A(a,b){var s=this.a,r=J.aA(s)
return r.A(s,r.gk(s)-1-b)}}
A.bi.prototype={}
A.a9.prototype={$r:"+(1,2)",$s:1}
A.c3.prototype={$r:"+label,maxX,maxY,minX,minY(1,2,3,4,5)",$s:2}
A.cu.prototype={
$0(){return B.a.P(1000*this.a.now())},
$S:6}
A.aV.prototype={}
A.cH.prototype={
E(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aS.prototype={
i(a){return"Null check operator used on a null value"}}
A.bz.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bS.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ct.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aF.prototype={}
A.bb.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iW:1}
A.a5.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fw(r==null?"unknown":r)+"'"},
gbf(){return this},
$C:"$1",
$R:1,
$D:null}
A.ce.prototype={$C:"$0",$R:0}
A.cf.prototype={$C:"$2",$R:2}
A.cG.prototype={}
A.cC.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fw(s)+"'"}}
A.aE.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aE))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.fs(this.a)^A.bN(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bO(this.a)+"'")}}
A.bP.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aM.prototype={
gk(a){return this.a},
gR(){return new A.a6(this,this.$ti.j("a6<1>"))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.b1(b)},
b1(a){var s,r,q=this.d
if(q==null)return null
s=this.aQ(q,a)
r=this.aE(s,a)
if(r<0)return null
return s[r].b},
a4(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ap(s==null?m.b=m.ab():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ap(r==null?m.c=m.ab():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ab()
p=J.M(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.ac(b,c)]
else{n=m.aE(o,b)
if(n>=0)o[n].b=c
else o.push(m.ac(b,c))}}},
a2(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.E(s))
r=r.c}},
ap(a,b,c){var s=a[b]
if(s==null)a[b]=this.ac(b,c)
else s.b=c},
ac(a,b){var s=this,r=new A.cq(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aQ(a,b){return a[J.M(b)&1073741823]},
aE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cb(a[r].a,b))return r
return-1},
i(a){return A.eA(this)},
ab(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cq.prototype={}
A.a6.prototype={
gk(a){return this.a.a},
gB(a){var s=this.a
return new A.bB(s,s.r,s.e)}}
A.bB.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.E(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dF.prototype={
$1(a){return this.a(a)},
$S:16}
A.dG.prototype={
$2(a,b){return this.a(a,b)},
$S:13}
A.dH.prototype={
$1(a){return this.a(a)},
$S:14}
A.ba.prototype={
i(a){return this.aA(!1)},
aA(a){var s,r,q,p,o,n=this.aP(),m=this.aa(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.eE(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aP(){var s,r=this.$s
while($.d2.length<=r)$.d2.push(null)
s=$.d2[r]
if(s==null){s=this.aM()
$.d2[r]=s}return s},
aM(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.c(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.h2(k,!1,t.K)
k.$flags=3
return k}}
A.c1.prototype={
aa(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.c1&&this.$s===b.$s&&J.cb(this.a,b.a)&&J.cb(this.b,b.b)},
gp(a){return A.eC(this.$s,this.a,this.b,B.e)}}
A.c2.prototype={
aa(){return this.a},
I(a,b){if(b==null)return!1
return b instanceof A.c2&&this.$s===b.$s&&A.hr(this.a,b.a)},
gp(a){return A.eC(this.$s,A.h3(this.a),B.e,B.e)}}
A.ap.prototype={
gt(a){return B.A},
$ik:1}
A.ao.prototype={$iao:1}
A.aQ.prototype={}
A.bD.prototype={
gt(a){return B.B},
$ik:1}
A.aq.prototype={
gk(a){return a.length},
$iC:1}
A.aO.prototype={
h(a,b){A.aa(b,a,a.length)
return a[b]},
$ih:1,
$ie:1}
A.aP.prototype={$ih:1,$ie:1}
A.bE.prototype={
gt(a){return B.C},
l(a,b,c){return new Float32Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bF.prototype={
gt(a){return B.D},
l(a,b,c){return new Float64Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bG.prototype={
gt(a){return B.E},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Int16Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bH.prototype={
gt(a){return B.F},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Int32Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bI.prototype={
gt(a){return B.G},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Int8Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bJ.prototype={
gt(a){return B.I},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint16Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bK.prototype={
gt(a){return B.J},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint32Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.aR.prototype={
gt(a){return B.K},
gk(a){return a.length},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.bL.prototype={
gt(a){return B.L},
gk(a){return a.length},
h(a,b){A.aa(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint8Array(a.subarray(b,A.a_(b,c,a.length)))},
u(a,b){return this.l(a,b,null)},
$ik:1}
A.b6.prototype={}
A.b7.prototype={}
A.b8.prototype={}
A.b9.prototype={}
A.J.prototype={
j(a){return A.bh(v.typeUniverse,this,a)},
G(a){return A.eX(v.typeUniverse,this,a)}}
A.bX.prototype={}
A.d8.prototype={
i(a){return A.D(this.a,null)}}
A.bW.prototype={
i(a){return this.a}}
A.bd.prototype={$iR:1}
A.cK.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cJ.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cL.prototype={
$0(){this.a.$0()},
$S:5}
A.cM.prototype={
$0(){this.a.$0()},
$S:5}
A.d6.prototype={
aI(a,b){if(self.setTimeout!=null)self.setTimeout(A.az(new A.d7(this,b),0),a)
else throw A.d(A.b_("`setTimeout()` not found."))}}
A.d7.prototype={
$0(){this.b.$0()},
$S:0}
A.bT.prototype={
ag(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aq(a)
else{s=r.a
if(r.$ti.j("ak<1>").b(a))s.ar(a)
else s.au(a)}},
ah(a,b){var s=this.a
if(this.b)s.a7(new A.I(a,b))
else s.a6(new A.I(a,b))}}
A.de.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.df.prototype={
$2(a,b){this.a.$2(1,new A.aF(a,b))},
$S:17}
A.dB.prototype={
$2(a,b){this.a(a,b)},
$S:24}
A.I.prototype={
i(a){return A.m(this.a)},
$io:1,
gV(){return this.b}}
A.bV.prototype={
ah(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.eH("Future already completed"))
s.a6(A.i6(a,b))},
aC(a){return this.ah(a,null)}}
A.b1.prototype={
ag(a){var s=this.a
if((s.a&30)!==0)throw A.d(A.eH("Future already completed"))
s.aq(a)}}
A.ar.prototype={
b4(a){if((this.c&15)!==6)return!0
return this.b.b.am(this.d,a.a)},
b0(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.b9(r,p,a.b)
else q=o.am(r,p)
try{p=q
return p}catch(s){if(t._.b(A.ah(s))){if((this.c&1)!==0)throw A.d(A.bn("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bn("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
aG(a,b,c){var s,r=$.q
if(r===B.d){if(!t.Q.b(b)&&!t.v.b(b))throw A.d(A.cd(b,"onError",u.c))}else b=A.iv(b,r)
s=new A.w(r,c.j("w<0>"))
this.a5(new A.ar(s,3,a,b,this.$ti.j("@<1>").G(c).j("ar<1,2>")))
return s},
az(a,b,c){var s=new A.w($.q,c.j("w<0>"))
this.a5(new A.ar(s,19,a,b,this.$ti.j("@<1>").G(c).j("ar<1,2>")))
return s},
aT(a){this.a=this.a&1|16
this.c=a},
W(a){this.a=a.a&30|this.a&1
this.c=a.c},
a5(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a5(a)
return}s.W(r)}A.c7(null,null,s.b,new A.cQ(s,a))}},
av(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.av(a)
return}n.W(s)}m.a=n.Z(a)
A.c7(null,null,n.b,new A.cU(m,n))}},
Y(){var s=this.c
this.c=null
return this.Z(s)},
Z(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
au(a){var s=this,r=s.Y()
s.a=8
s.c=a
A.as(s,r)},
aL(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.Y()
q.W(a)
A.as(q,r)},
a7(a){var s=this.Y()
this.aT(a)
A.as(this,s)},
aq(a){if(this.$ti.j("ak<1>").b(a)){this.ar(a)
return}this.aK(a)},
aK(a){this.a^=2
A.c7(null,null,this.b,new A.cS(this,a))},
ar(a){A.e4(a,this,!1)
return},
a6(a){this.a^=2
A.c7(null,null,this.b,new A.cR(this,a))},
$iak:1}
A.cQ.prototype={
$0(){A.as(this.a,this.b)},
$S:0}
A.cU.prototype={
$0(){A.as(this.b,this.a.a)},
$S:0}
A.cT.prototype={
$0(){A.e4(this.a.a,this.b,!0)},
$S:0}
A.cS.prototype={
$0(){this.a.au(this.b)},
$S:0}
A.cR.prototype={
$0(){this.a.a7(this.b)},
$S:0}
A.cX.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.al(q.d)}catch(p){s=A.ah(p)
r=A.aB(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dT(q)
n=k.a
n.c=new A.I(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.aG(new A.cY(l,m),new A.cZ(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cY.prototype={
$1(a){this.a.aL(this.b)},
$S:4}
A.cZ.prototype={
$2(a,b){this.a.a7(new A.I(a,b))},
$S:32}
A.cW.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.am(p.d,this.b)}catch(o){s=A.ah(o)
r=A.aB(o)
q=s
p=r
if(p==null)p=A.dT(q)
n=this.a
n.c=new A.I(q,p)
n.b=!0}},
$S:0}
A.cV.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.b4(s)&&p.a.e!=null){p.c=p.a.b0(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.aB(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dT(p)
m=l.b
m.c=new A.I(p,n)
p=m}p.b=!0}},
$S:0}
A.bU.prototype={}
A.c4.prototype={}
A.db.prototype={}
A.d4.prototype={
bb(a){var s,r,q
try{if(B.d===$.q){a.$0()
return}A.fj(null,null,this,a)}catch(q){s=A.ah(q)
r=A.aB(q)
A.ee(s,r)}},
aX(a){return new A.d5(this,a)},
b8(a){if($.q===B.d)return a.$0()
return A.fj(null,null,this,a)},
al(a){return this.b8(a,t.z)},
bc(a,b){if($.q===B.d)return a.$1(b)
return A.ix(null,null,this,a,b)},
am(a,b){var s=t.z
return this.bc(a,b,s,s)},
ba(a,b,c){if($.q===B.d)return a.$2(b,c)
return A.iw(null,null,this,a,b,c)},
b9(a,b,c){var s=t.z
return this.ba(a,b,c,s,s,s)},
b7(a){return a},
aF(a){var s=t.z
return this.b7(a,s,s,s)}}
A.d5.prototype={
$0(){return this.a.bb(this.b)},
$S:0}
A.dy.prototype={
$0(){A.fW(this.a,this.b)},
$S:0}
A.j.prototype={
gB(a){return new A.F(a,this.gk(a),A.a1(a).j("F<j.E>"))},
A(a,b){return this.h(a,b)},
gai(a){if(this.gk(a)===0)throw A.d(A.bw())
return this.h(a,0)},
gS(a){if(this.gk(a)===0)throw A.d(A.bw())
return this.h(a,this.gk(a)-1)},
aj(a,b,c){var s,r,q=this.gk(a)
for(s=b,r=0;r<q;++r){s=c.$2(s,this.h(a,r))
if(q!==this.gk(a))throw A.d(A.E(a))}return s},
a1(a,b,c){return this.aj(a,b,c,t.z)},
a0(a,b){return new A.N(a,A.a1(a).j("@<j.E>").G(b).j("N<1,2>"))},
l(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.e2(b,c,r)
s=A.V(this.U(a,b,c),A.a1(a).j("j.E"))
return s},
u(a,b){return this.l(a,b,null)},
U(a,b,c){A.e2(b,c,this.gk(a))
return A.cE(a,b,c,A.a1(a).j("j.E"))},
i(a){return A.ez(a,"[","]")}}
A.O.prototype={
a2(a,b){var s,r,q,p
for(s=this.gR(),s=s.gB(s),r=A.au(this).j("O.V");s.m();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gk(a){var s=this.gR()
return s.gk(s)},
i(a){return A.eA(this)},
$ibC:1}
A.cr.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:11}
A.bY.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.aR(b):s}},
gk(a){return this.b==null?this.c.a:this.X().length},
gR(){if(this.b==null){var s=this.c
return new A.a6(s,s.$ti.j("a6<1>"))}return new A.bZ(this)},
a2(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a2(0,b)
s=o.X()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dh(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.E(o))}},
X(){var s=this.c
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
aR(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dh(this.a[a])
return this.b[a]=s}}
A.bZ.prototype={
gk(a){return this.a.gk(0)},
A(a,b){var s=this.a
return s.b==null?s.gR().A(0,b):s.X()[b]},
gB(a){var s=this.a
if(s.b==null){s=s.gR()
s=s.gB(s)}else{s=s.X()
s=new J.aj(s,s.length,A.K(s).j("aj<1>"))}return s}}
A.br.prototype={}
A.bt.prototype={}
A.co.prototype={
aY(a,b){var s=A.ir(a,this.gaZ().a)
return s},
gaZ(){return B.y}}
A.cp.prototype={}
A.o.prototype={
gV(){return A.h5(this)}}
A.bo.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cl(s)
return"Assertion failed"}}
A.R.prototype={}
A.H.prototype={
ga9(){return"Invalid argument"+(!this.a?"(s)":"")},
ga8(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga9()+q+o
if(!s.a)return n
return n+s.ga8()+": "+A.cl(s.gak())},
gak(){return this.b}}
A.aT.prototype={
gak(){return this.b},
ga9(){return"RangeError"},
ga8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bu.prototype={
gak(){return this.b},
ga9(){return"RangeError"},
ga8(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.aZ.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bR.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.aX.prototype={
i(a){return"Bad state: "+this.a}}
A.bs.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cl(s)+"."}}
A.aW.prototype={
i(a){return"Stack Overflow"},
gV(){return null},
$io:1}
A.cP.prototype={
i(a){return"Exception: "+this.a}}
A.cm.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.n.prototype={
a0(a,b){return A.ew(this,A.au(this).j("n.E"),b)},
gk(a){var s,r=this.gB(this)
for(s=0;r.m();)++s
return s},
A(a,b){var s,r
A.e1(b,"index")
s=this.gB(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.dW(b,b-r,this,"index"))},
i(a){return A.h0(this,"(",")")}}
A.A.prototype={
gp(a){return A.l.prototype.gp.call(this,0)},
i(a){return"null"}}
A.l.prototype={$il:1,
I(a,b){return this===b},
gp(a){return A.bN(this)},
i(a){return"Instance of '"+A.bO(this)+"'"},
gt(a){return A.iW(this)},
toString(){return this.i(this)}}
A.c5.prototype={
i(a){return""},
$iW:1}
A.cD.prototype={
gb_(){var s,r=this.b
if(r==null)r=$.e0.$0()
s=r-this.a
if($.en()===1000)return s
return B.b.ad(s,1000)}}
A.bQ.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cs.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.dM.prototype={
$1(a){return this.a.ag(a)},
$S:1}
A.dN.prototype={
$1(a){if(a==null)return this.a.aC(new A.cs(a===undefined))
return this.a.aC(a)},
$S:1}
A.f.prototype={
i(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
I(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b},
gp(a){return A.eJ(B.a.gp(this.a),B.a.gp(this.b),0)},
F(a){var s=this.a-a.a,r=this.b-a.b
return Math.sqrt(s*s+r*r)}}
A.cg.prototype={
gL(){var s=this
return A.c([s.a,s.b,s.c,s.d],t.O)},
gb2(){var s,r,q,p,o,n,m,l,k,j=this.gL()
for(s=null,r=0;r<4;r=p){q=j[r]
p=r+1
o=j[p%4]
n=j[(r+2)%4]
m=o.a
l=o.b
k=(m-q.a)*(n.b-l)-(l-q.b)*(n.a-m)
if(Math.abs(k)<1e-9)return!1
if(s==null)s=J.er(k)
if(J.er(k)!==s)return!1}return!0},
i(a){var s=this.gL()
return"DocumentQuad("+new A.aN(s,new A.ck(),A.K(s).j("aN<1,v>")).b3(0,", ")+")"}}
A.ch.prototype={
$2(a,b){return a+b.a},
$S:7}
A.ci.prototype={
$2(a,b){return a+b.b},
$S:7}
A.cj.prototype={
$2(a,b){var s=this.a,r=this.b
return B.a.C(Math.atan2(a.b-s,a.a-r),Math.atan2(b.b-s,b.a-r))},
$S:8}
A.ck.prototype={
$1(a){return"("+B.a.T(a.a,3)+", "+B.a.T(a.b,3)+")"},
$S:15}
A.d1.prototype={}
A.r.prototype={
gaD(){return Math.abs(this.b)>=Math.abs(this.a)}}
A.c0.prototype={
b5(a,b){var s,r,q,p,o,n,m=b-a
if(m<4)return B.m
s=this.c
r=s.length-1
q=this.b
p=B.b.D(B.a.q(a)-q,0,r)
o=B.b.D(B.a.q(b)-q,0,r)
q=this.d
n=q[o]-q[p]
if(n<=0)return B.m
return new A.a9((s[o]-s[p])/n,n/m)}}
A.b2.prototype={}
A.dk.prototype={
$1(a){return a.gaD()},
$S:9}
A.dl.prototype={
$1(a){return!a.gaD()},
$S:9}
A.d_.prototype={}
A.ds.prototype={
$2(a,b){var s=this.a
return B.b.C(s[b],s[a])},
$S:10}
A.dv.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this,k=A.c([],t.h),j=b?l.a:l.b,i=new A.dw(b,(b?l.b:l.a)/2)
for(s=0.12*j,r=0;r<a.length;r=q)for(q=r+1,p=q;p<a.length;++p){o=a[r]
n=a[p]
if(i.$1(o)>i.$1(n)){m=n
n=o
o=m}if(i.$1(n)-i.$1(o)<s)continue
if(Math.abs(o.a*n.a+o.b*n.b)<0.82)continue
k.push(new A.a9(o,n))}return k},
$S:18}
A.dw.prototype={
$1(a){var s=this.b,r=a.c,q=a.a,p=a.b
return this.a?(r-q*s)/p:(r-p*s)/q},
$S:19}
A.dt.prototype={
$1(a){var s=this,r=a.a,q=!0
if(!(r<s.a))if(!(r>s.b)){r=a.b
r=r<s.c||r>s.d}else r=q
else r=q
return r},
$S:20}
A.du.prototype={
$2(a,b){return B.a.C(b.a,a.a)},
$S:21}
A.cN.prototype={
ae(a){var s=this.b,r=t.n,q=this.a
return s==null?A.c([q[a]],r):A.c([q[a],s[a],this.c[a]],r)}}
A.cO.prototype={
$0(){var s,r,q,p,o=A.c([],t.n)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.z)(s),++p)o.push(J.cc(s[p],q))
B.c.ao(o)
return o[o.length/2|0]},
$S:22}
A.dm.prototype={
$2(a,b){var s,r=this.a,q=r[0],p=q.a,o=r[1]
p+=(o.a-p)*a
q=q.b
q+=(o.b-q)*a
o=r[3]
s=o.a
r=r[2]
o=o.b
return new A.f(p+(s+(r.a-s)*a-p)*b,q+(o+(r.b-o)*a-q)*b,t.X)},
$S:23}
A.dn.prototype={
$2(a,b){return B.a.C(J.cc(a,0),J.cc(b,0))},
$S:37}
A.dq.prototype={
$2(a,b){var s,r,q=A.c([],t.n)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.z)(a),++r)q.push(A.b4(a[r],b))
B.c.ao(q)
s=q.length
return s===0?0:q[s/2|0]},
$S:25}
A.dp.prototype={
$2(a,b){return a+b},
$S:26}
A.dx.prototype={
$1(a){return a==null},
$S:27}
A.dr.prototype={
$1(a){return a},
$S:28}
A.dg.prototype={
$2(a,b){var s=b.a,r=a.a
return B.b.C((s[1]-s[3])*(s[2]-s[4]),(r[1]-r[3])*(r[2]-r[4]))},
$S:29}
A.di.prototype={
$2(a,b){var s=a.a,r=b.a
return s!==r?B.a.C(s,r):B.a.C(a.b,b.b)},
$S:8}
A.dj.prototype={
$3(a,b,c){var s=a.a,r=a.b
return(b.a-s)*(c.b-r)-(b.b-r)*(c.a-s)},
$S:30}
A.dQ.prototype={
$1(a){var s,r,q=this
if(q.c[a]>0.5&&q.d[a]===0){s=q.d
r=q.a.a
s.$flags&2&&A.B(s)
s[a]=r
r=q.e
s=q.b.a++
r.$flags&2&&A.B(r)
r[s]=a}},
$S:31}
A.dO.prototype={
$2(a,b){var s=!1
if(a>=0)if(b>=0){s=this.b
s=a<s&&b<s&&this.c[b*s+a]===this.a.b}return s},
$S:3}
A.dP.prototype={
$2(a,b){var s=this.a
return s.$2(a,b)||s.$2(a-1,b)||s.$2(a+1,b)||s.$2(a,b-1)||s.$2(a,b+1)},
$S:3}
A.c6.prototype={}
A.c_.prototype={}
A.cz.prototype={}
A.cy.prototype={
al(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=a1.length,a=c*c,a0=a*3
if(b!==a0)throw A.d(A.bn("Erwartet "+a0+" Bytes, bekommen "+b,null))
s=A.bc(3,c,c)
for(b=s.d,a0=b.$flags|0,r=2*a,q=0;q<a;++q){p=q*3
o=a1[p]
a0&2&&A.B(b)
b[q]=o/255-0.5
b[a+q]=a1[p+1]/255-0.5
b[r+q]=a1[p+2]/255-0.5}b=d.c
a=b.h(0,"stem")
a.toString
n=d.K("s1.0",A.hQ(a,s))
m=d.a_("s2",2,n)
l=d.a_("s3",2,m)
k=d.a_("s4",3,l)
j=d.aN(d.a_("s5",3,k))
a=b.h(0,"l5")
a.toString
a=A.dA(A.ab(a,j))
a0=b.h(0,"l4")
a0.toString
a0=A.dA(d.K("d4",A.dc(a,A.ab(a0,k))))
a=b.h(0,"l3")
a.toString
a=A.dA(d.K("d3",A.dc(a0,A.ab(a,l))))
a0=b.h(0,"l2")
a0.toString
a0=A.dA(d.K("d2",A.dc(a,A.ab(a0,m))))
a=b.h(0,"l1")
a.toString
i=d.K("d1",A.dc(a0,A.ab(a,n)))
b=b.h(0,"head")
b.toString
h=A.ab(b,i)
b=h.c
g=h.b*b
f=new Float32Array(g)
e=new Float32Array(g)
for(a=h.d,q=0;q<g;++q){f[q]=1/(1+Math.exp(-a[q]))
e[q]=1/(1+Math.exp(-a[g+q]))}return new A.cz(b,f)},
a_(a,b,c){var s,r
for(s=a+".",r=0;r<b;++r)c=this.K(s+r,c)
return c},
K(a,b){var s,r,q,p,o,n,m=this.c,l=m.h(0,a+".pw")
l.toString
m=m.h(0,a+".dw")
m.toString
s=A.ab(l,A.hU(m,b))
if(!l.w)return s
r=s.d
q=b.d
for(m=r.length,l=r.$flags|0,p=0;p<m;++p){o=r[p]+q[p]
n=o>0?o:0
l&2&&A.B(r)
r[p]=n}return s},
aN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.c.h(0,"ctx")
d.toString
s=a.b
r=a.c
q=s*r
p=a.a
o=new Float32Array(p)
for(n=a.d,m=0;m<p;++m){for(l=m*q,k=0,j=0;j<q;++j)k+=n[l+j]
o[m]=k/q}i=A.ab(d,new A.c6(p,1,1,o))
h=A.bc(p,s,r)
for(d=h.d,s=i.d,m=0;m<p;++m){g=s[m]
for(r=m*q,j=0;j<q;++j){l=r+j
f=n[l]+g
e=f>0?f:0
d.$flags&2&&A.B(d)
d[l]=e}}return h}}
A.cB.prototype={
$1(a){var s,r,q,p=new Float32Array(a)
for(s=this.b,r=this.a,q=0;q<a;++q){p[q]=s.getFloat32(r.a,!0)
r.a+=4}return p},
$S:33}
A.cA.prototype={
$2(a,b){return a*b},
$S:10}
A.cx.prototype={
i(a){var s=this
return"SheetGuess(fit "+B.a.T(s.b,3)+", innen "+B.a.T(s.c,3)+", au\xdfen "+B.a.T(s.d,3)+", "+s.a.i(0)+")"}}
A.dE.prototype={
$3(a,b,c){var s,r=this.a,q=r[a],p=r[(a+1)%4],o=q.F(p)
if(o===0)return 0
r=q.a
s=q.b
return((p.a-r)*(c-s)-(p.b-s)*(b-r))/o},
$S:34}
A.d3.prototype={}
A.dJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.f1(a.data),g=new A.cD()
$.en()
n=$.e0.$0()
g.a=n
g.b=null
s=g
try{n=h.pixels
A.f2(n,0,null)
n=new Uint8Array(n,0)
r=A.iR(n,h.width,h.height,$.ff)
n=v.G.self
m=h.id
if(r==null)q=null
else{q=A.c([],t.n)
for(l=A.j9(r),k=l.length,j=0;j<l.length;l.length===k||(0,A.z)(l),++j){p=l[j]
J.fJ(q,p)}q=t.c.a(q)}n.postMessage({type:"result",id:m,quad:q,ms:s.gb_()})}catch(i){o=A.ah(i)
q=v.G.self
q.postMessage({type:"error",id:h.id,error:A.m(o)})}},
$S:35};(function aliases(){var s=J.U.prototype
s.aH=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1
s(J,"i7","h1",36)
r(A,"il","h4",6)
q(A,"iJ","hf",2)
q(A,"iK","hg",2)
q(A,"iL","hh",2)
r(A,"fn","iC",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.l,null)
q(A.l,[A.dX,J.bv,A.aV,J.aj,A.n,A.bq,A.o,A.cw,A.F,A.b0,A.aG,A.ba,A.a5,A.cH,A.ct,A.aF,A.bb,A.O,A.cq,A.bB,A.J,A.bX,A.d8,A.d6,A.bT,A.I,A.bV,A.ar,A.w,A.bU,A.c4,A.db,A.j,A.br,A.bt,A.aW,A.cP,A.cm,A.A,A.c5,A.cD,A.bQ,A.cs,A.f,A.cg,A.d1,A.r,A.c0,A.b2,A.d_,A.cN,A.c6,A.c_,A.cz,A.cy,A.cx,A.d3])
q(J.bv,[J.by,J.aH,J.aK,J.aJ,J.aL,J.am,J.an])
q(J.aK,[J.U,J.i,A.ap,A.aQ])
q(J.U,[J.bM,J.a7,J.T])
r(J.bx,A.aV)
r(J.cn,J.i)
q(J.am,[J.al,J.aI])
q(A.n,[A.Y,A.h,A.X])
q(A.Y,[A.a4,A.bi])
r(A.b5,A.a4)
r(A.b3,A.bi)
r(A.N,A.b3)
q(A.o,[A.bA,A.R,A.bz,A.bS,A.bP,A.bW,A.bo,A.H,A.aZ,A.bR,A.aX,A.bs])
q(A.h,[A.u,A.a6])
q(A.u,[A.aY,A.aN,A.aU,A.bZ])
q(A.ba,[A.c1,A.c2])
r(A.a9,A.c1)
r(A.c3,A.c2)
q(A.a5,[A.ce,A.cf,A.cG,A.dF,A.dH,A.cK,A.cJ,A.de,A.cY,A.dM,A.dN,A.ck,A.dk,A.dl,A.dw,A.dt,A.dx,A.dr,A.dj,A.dQ,A.cB,A.dE,A.dJ])
q(A.ce,[A.cu,A.cL,A.cM,A.d7,A.cQ,A.cU,A.cT,A.cS,A.cR,A.cX,A.cW,A.cV,A.d5,A.dy,A.cO])
r(A.aS,A.R)
q(A.cG,[A.cC,A.aE])
q(A.O,[A.aM,A.bY])
q(A.cf,[A.dG,A.df,A.dB,A.cZ,A.cr,A.ch,A.ci,A.cj,A.ds,A.dv,A.du,A.dm,A.dn,A.dq,A.dp,A.dg,A.di,A.dO,A.dP,A.cA])
r(A.ao,A.ap)
q(A.aQ,[A.bD,A.aq])
q(A.aq,[A.b6,A.b8])
r(A.b7,A.b6)
r(A.aO,A.b7)
r(A.b9,A.b8)
r(A.aP,A.b9)
q(A.aO,[A.bE,A.bF])
q(A.aP,[A.bG,A.bH,A.bI,A.bJ,A.bK,A.aR,A.bL])
r(A.bd,A.bW)
r(A.b1,A.bV)
r(A.d4,A.db)
r(A.co,A.br)
r(A.cp,A.bt)
q(A.H,[A.aT,A.bu])
s(A.bi,A.j)
s(A.b6,A.j)
s(A.b7,A.aG)
s(A.b8,A.j)
s(A.b9,A.aG)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",b:"double",fr:"num",v:"String",x:"bool",A:"Null",e:"List",l:"Object",bC:"Map",p:"JSObject"},mangledNames:{},types:["~()","~(@)","~(~())","x(a,a)","A(@)","A()","a()","b(b,f<b>)","a(f<b>,f<b>)","x(r)","a(a,a)","~(l?,l?)","A(~())","@(@,v)","@(v)","v(f<b>)","@(@)","A(@,W)","e<+(r,r)>(e<r>,x)","b(r)","x(f<b>)","a(+(b,e<f<b>>),+(b,e<f<b>>))","b()","f<b>(b,b)","~(a,@)","b(e<e<b>>,e<b>)","b(b,b)","x(r?)","x(x)","a(+label,maxX,maxY,minX,minY(a,a,a,a,a),+label,maxX,maxY,minX,minY(a,a,a,a,a))","b(f<b>,f<b>,f<b>)","~(a)","A(l,W)","dV(a)","b(a,b,b)","A(p)","a(@,@)","a(e<b>,e<b>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a9&&a.b(c.a)&&b.b(c.b),"5;label,maxX,maxY,minX,minY":a=>b=>b instanceof A.c3&&A.j7(a,b.a)}}
A.hz(v.typeUniverse,JSON.parse('{"bM":"U","a7":"U","T":"U","jk":"ap","by":{"x":[],"k":[]},"aH":{"k":[]},"aK":{"p":[]},"U":{"p":[]},"i":{"e":["1"],"h":["1"],"p":[]},"bx":{"aV":[]},"cn":{"i":["1"],"e":["1"],"h":["1"],"p":[]},"am":{"b":[]},"al":{"b":[],"a":[],"k":[]},"aI":{"b":[],"k":[]},"an":{"v":[],"k":[]},"Y":{"n":["2"]},"a4":{"Y":["1","2"],"n":["2"],"n.E":"2"},"b5":{"a4":["1","2"],"Y":["1","2"],"h":["2"],"n":["2"],"n.E":"2"},"b3":{"j":["2"],"e":["2"],"Y":["1","2"],"h":["2"],"n":["2"]},"N":{"b3":["1","2"],"j":["2"],"e":["2"],"Y":["1","2"],"h":["2"],"n":["2"],"j.E":"2","n.E":"2"},"bA":{"o":[]},"h":{"n":["1"]},"u":{"h":["1"],"n":["1"]},"aY":{"u":["1"],"h":["1"],"n":["1"],"u.E":"1","n.E":"1"},"aN":{"u":["2"],"h":["2"],"n":["2"],"u.E":"2","n.E":"2"},"X":{"n":["1"],"n.E":"1"},"aU":{"u":["1"],"h":["1"],"n":["1"],"u.E":"1","n.E":"1"},"aS":{"R":[],"o":[]},"bz":{"o":[]},"bS":{"o":[]},"bb":{"W":[]},"bP":{"o":[]},"aM":{"O":["1","2"],"bC":["1","2"],"O.V":"2"},"a6":{"h":["1"],"n":["1"],"n.E":"1"},"ao":{"p":[],"k":[]},"ap":{"p":[],"k":[]},"aQ":{"p":[]},"bD":{"p":[],"k":[]},"aq":{"C":["1"],"p":[]},"aO":{"j":["b"],"e":["b"],"C":["b"],"h":["b"],"p":[]},"aP":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[]},"bE":{"j":["b"],"e":["b"],"C":["b"],"h":["b"],"p":[],"k":[],"j.E":"b"},"bF":{"j":["b"],"e":["b"],"C":["b"],"h":["b"],"p":[],"k":[],"j.E":"b"},"bG":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bH":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bI":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bJ":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bK":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"aR":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bL":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bW":{"o":[]},"bd":{"R":[],"o":[]},"I":{"o":[]},"b1":{"bV":["1"]},"w":{"ak":["1"]},"O":{"bC":["1","2"]},"bY":{"O":["v","@"],"bC":["v","@"],"O.V":"@"},"bZ":{"u":["v"],"h":["v"],"n":["v"],"u.E":"v","n.E":"v"},"e":{"h":["1"]},"bo":{"o":[]},"R":{"o":[]},"H":{"o":[]},"aT":{"o":[]},"bu":{"o":[]},"aZ":{"o":[]},"bR":{"o":[]},"aX":{"o":[]},"bs":{"o":[]},"aW":{"o":[]},"c5":{"W":[]},"h_":{"e":["a"],"h":["a"]},"hd":{"e":["a"],"h":["a"]},"hc":{"e":["a"],"h":["a"]},"fY":{"e":["a"],"h":["a"]},"ha":{"e":["a"],"h":["a"]},"fZ":{"e":["a"],"h":["a"]},"hb":{"e":["a"],"h":["a"]},"dV":{"e":["b"],"h":["b"]},"fX":{"e":["b"],"h":["b"]}}'))
A.hy(v.typeUniverse,JSON.parse('{"b0":1,"aG":1,"bi":2,"bB":1,"aq":1,"c4":1,"br":2,"bt":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.eh
return{U:s("h<@>"),C:s("o"),Z:s("jj"),G:s("i<e<e<b>>>"),E:s("i<e<f<b>>>"),b:s("i<e<b>>"),f:s("i<l>"),O:s("i<f<b>>"),h:s("i<+(r,r)>"),V:s("i<+(b,e<f<b>>)>"),r:s("i<+label,maxX,maxY,minX,minY(a,a,a,a,a)>"),s:s("i<v>"),q:s("i<b2>"),w:s("i<r>"),d:s("i<x>"),n:s("i<b>"),x:s("i<@>"),t:s("i<a>"),c:s("i<l?>"),u:s("i<r?>"),T:s("aH"),m:s("p"),g:s("T"),p:s("C<@>"),j:s("e<@>"),e:s("bC<v,@>"),a:s("ao"),P:s("A"),K:s("l"),X:s("f<b>"),L:s("jl"),F:s("+()"),B:s("+(b,e<f<b>>)"),k:s("+label,maxX,maxY,minX,minY(a,a,a,a,a)"),l:s("W"),N:s("v"),D:s("k"),_:s("R"),J:s("a7"),M:s("X<x>"),W:s("w<@>"),Y:s("c_"),A:s("r"),I:s("c0"),y:s("x"),i:s("b"),z:s("@"),v:s("@(l)"),Q:s("@(l,W)"),S:s("a"),bc:s("ak<A>?"),aQ:s("p?"),R:s("l?"),aD:s("v?"),cG:s("x?"),dd:s("b?"),a3:s("a?"),ae:s("fr?"),H:s("fr"),o:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.v=J.bv.prototype
B.c=J.i.prototype
B.b=J.al.prototype
B.a=J.am.prototype
B.w=J.T.prototype
B.x=J.aK.prototype
B.l=J.bM.prototype
B.h=J.a7.prototype
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.n=function() {
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
B.t=function(getTagFallback) {
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
B.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.r=function(hooks) {
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
B.q=function(hooks) {
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
B.p=function(hooks) {
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
B.j=function(hooks) { return hooks; }

B.u=new A.co()
B.e=new A.cw()
B.d=new A.d4()
B.f=new A.c5()
B.y=new A.cp(null)
B.k=s([1,4,6,4,1],t.t)
B.z=s([],t.E)
B.m=new A.a9(0,0)
B.A=A.L("jf")
B.B=A.L("jg")
B.C=A.L("dV")
B.D=A.L("fX")
B.E=A.L("fY")
B.F=A.L("fZ")
B.G=A.L("h_")
B.H=A.L("l")
B.I=A.L("ha")
B.J=A.L("hb")
B.K=A.L("hc")
B.L=A.L("hd")})();(function staticFields(){$.d0=null
$.ad=A.c([],t.f)
$.eD=null
$.cv=0
$.e0=A.il()
$.eu=null
$.et=null
$.fq=null
$.fm=null
$.fu=null
$.dC=null
$.dI=null
$.ej=null
$.d2=A.c([],A.eh("i<e<l>?>"))
$.aw=null
$.bl=null
$.bm=null
$.ea=!1
$.q=B.d
$.ff=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ji","fx",()=>A.dD("_$dart_dartClosure"))
s($,"jh","em",()=>A.dD("_$dart_dartClosure_dartJSInterop"))
s($,"jB","fI",()=>A.c([new J.bx()],A.eh("i<aV>")))
s($,"jo","fy",()=>A.S(A.cI({
toString:function(){return"$receiver$"}})))
s($,"jp","fz",()=>A.S(A.cI({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jq","fA",()=>A.S(A.cI(null)))
s($,"jr","fB",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ju","fE",()=>A.S(A.cI(void 0)))
s($,"jv","fF",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jt","fD",()=>A.S(A.eK(null)))
s($,"js","fC",()=>A.S(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jx","fH",()=>A.S(A.eK(void 0)))
s($,"jw","fG",()=>A.S(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jy","eo",()=>A.he())
s($,"jA","ca",()=>A.fs(B.H))
s($,"jm","en",()=>{A.h6()
return $.cv})
s($,"jz","ep",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.iO(r*3.141592653589793/180))
return A.eB(q)})
s($,"jC","eq",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.jc(r*3.141592653589793/180))
return A.eB(q)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ap,ArrayBuffer:A.ao,ArrayBufferView:A.aQ,DataView:A.bD,Float32Array:A.bE,Float64Array:A.bF,Int16Array:A.bG,Int32Array:A.bH,Int8Array:A.bI,Uint16Array:A.bJ,Uint32Array:A.bK,Uint8ClampedArray:A.aR,CanvasPixelArray:A.aR,Uint8Array:A.bL})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aq.$nativeSuperclassTag="ArrayBufferView"
A.b6.$nativeSuperclassTag="ArrayBufferView"
A.b7.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.j5
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=scan_worker.js.map
