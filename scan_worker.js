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
if(a[b]!==s){A.jL(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ew(b)
return new s(c,this)}:function(){if(s===null)s=A.ew(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ew(a).prototype
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
eC(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ez(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eA==null){A.jv()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.f2("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d6
if(o==null)o=$.d6=A.dS(n)
p=q[o]}if(p!=null)return p
p=A.jz(a)
if(p!=null)return p
if(typeof a=="function")return B.w
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.d6
if(o==null)o=$.d6=A.dS(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
ho(a,b){if(a<0||a>4294967295)throw A.d(A.P(a,0,4294967295,"length",null))
return J.hp(new Array(a),b)},
hp(a,b){var s=A.c(a,b.i("j<0>"))
s.$flags=1
return s},
hq(a,b){return J.h6(a,b)},
ah(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.aM.prototype}if(typeof a=="string")return J.ap.prototype
if(a==null)return J.aL.prototype
if(typeof a=="boolean")return J.bE.prototype
if(Array.isArray(a))return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.l)return a
return J.ez(a)},
aD(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(Array.isArray(a))return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.l)return a
return J.ez(a)},
G(a){if(a==null)return a
if(Array.isArray(a))return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.l)return a
return J.ez(a)},
jp(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.aM.prototype}if(a==null)return a
if(!(a instanceof A.l))return J.ab.prototype
return a},
jq(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.ab.prototype
return a},
bs(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ah(a).L(a,b)},
ch(a,b){if(typeof b==="number")if(Array.isArray(a)||A.fJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.G(a).h(a,b)},
h3(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.fJ(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.G(a).D(a,b,c)},
h4(a,b){return J.G(a).b0(a,b)},
h5(a,b){return J.G(a).a5(a,b)},
h6(a,b){return J.jq(a).C(a,b)},
e8(a,b){return J.G(a).A(a,b)},
O(a){return J.ah(a).gq(a)},
ak(a){return J.G(a).gB(a)},
a6(a){return J.aD(a).gk(a)},
h7(a){return J.ah(a).gu(a)},
eI(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.jp(a).gaq(a)},
h8(a,b,c){return J.G(a).Z(a,b,c)},
h9(a,b,c){return J.G(a).aH(a,b,c)},
e9(a,b,c){return J.G(a).l(a,b,c)},
aG(a){return J.ah(a).j(a)},
bB:function bB(){},
bE:function bE(){},
aL:function aL(){},
aO:function aO(){},
a_:function a_(){},
bR:function bR(){},
ab:function ab(){},
Z:function Z(){},
aN:function aN(){},
aP:function aP(){},
j:function j(a){this.$ti=a},
bD:function bD(){},
cq:function cq(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(){},
an:function an(){},
aM:function aM(){},
ap:function ap(){}},A={ee:function ee(){},
eN(a,b,c){if(t.U.b(a))return new A.b8(a,b.i("@<0>").F(c).i("b8<1,2>"))
return new A.a8(a,b.i("@<0>").F(c).i("a8<1,2>"))},
T(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cK(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f0(a,b,c){return A.cK(A.T(A.T(c,a),b))},
cf(a,b,c){return a},
eB(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
cJ(a,b,c,d){A.ei(b,"start")
if(c!=null){A.ei(c,"end")
if(b>c)A.e7(A.P(b,0,c,"start",null))}return new A.b1(a,b,c,d.i("b1<0>"))},
bC(){return new A.b0("No element")},
a1:function a1(){},
bw:function bw(a,b){this.a=a
this.$ti=b},
a8:function a8(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b){this.a=a
this.$ti=b},
b6:function b6(){},
L:function L(a,b){this.a=a
this.$ti=b},
bG:function bG(a){this.a=a},
cB:function cB(){},
h:function h(){},
w:function w(){},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
H:function H(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b){this.a=a
this.b=b},
aK:function aK(){},
aY:function aY(a,b){this.a=a
this.$ti=b},
bn:function bn(){},
fR(a){var s=A.fQ(a)
if(s!=null)return s
return"minified:"+a},
fJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aG(a)
return s},
bS(a){var s,r=$.eV
if(r==null)r=$.eV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bT(a){var s,r,q,p
if(a instanceof A.l)return A.F(A.Y(a),null)
s=J.ah(a)
if(s===B.v||s===B.x||t.Y.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.F(A.Y(a),null)},
eW(a){var s,r,q
if(a==null||typeof a=="number"||A.eq(a))return J.aG(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a9)return a.j(0)
if(a instanceof A.bd)return a.aC(!0)
s=$.h2()
for(r=0;r<1;++r){q=s[r].bk(a)
if(q!=null)return q}return"Instance of '"+A.bT(a)+"'"},
ht(){return Date.now()},
hv(){var s,r
if($.cz!==0)return
$.cz=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.cz=1e6
$.eh=new A.cy(r)},
hu(a){var s=a.$thrownJsError
if(s==null)return null
return A.aE(s)},
eX(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=b.j(0)}},
ex(a,b){var s,r="index"
if(!A.fu(b))return new A.J(!0,b,r,null)
s=J.a6(a)
if(b<0||b>=s)return A.ed(b,s,a,r)
return new A.aX(null,null,!0,b,r,"Value not in range")},
jn(a,b,c){if(a>c)return A.P(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.P(b,a,c,"end",null)
return new A.J(!0,b,"end",null)},
je(a){return new A.J(!0,a,null,null)},
dQ(a){return a},
d(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.U()
b.dartException=a
s=A.jM
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jM(){return J.aG(this.dartException)},
e7(a,b){throw A.A(a,b==null?new Error():b)},
u(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.e7(A.im(a,b,c),s)},
im(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b2("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.d(A.D(a))},
V(a){var s,r,q,p,o,n
a=A.jH(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cM(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cN(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f1(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ef(a,b){var s=b==null,r=s?null:b.method
return new A.bF(a,r,s?null:b.receiver)},
aj(a){if(a==null)return new A.cx(a)
if(a instanceof A.aJ)return A.a5(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a5(a,a.dartException)
return A.jc(a)},
a5(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.J(r,16)&8191)===10)switch(q){case 438:return A.a5(a,A.ef(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.a5(a,new A.aW())}}if(a instanceof TypeError){p=$.fT()
o=$.fU()
n=$.fV()
m=$.fW()
l=$.fZ()
k=$.h_()
j=$.fY()
$.fX()
i=$.h1()
h=$.h0()
g=p.I(s)
if(g!=null)return A.a5(a,A.ef(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.a5(a,A.ef(s,g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null)return A.a5(a,new A.aW())}return A.a5(a,new A.bY(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a5(a,new A.J(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b_()
return a},
aE(a){var s
if(a instanceof A.aJ)return a.b
if(a==null)return new A.bg(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bg(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fL(a){if(a==null)return J.O(a)
if(typeof a=="object")return A.bS(a)
return J.O(a)},
iE(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cU("Unsupported number of arguments for wrapped closure"))},
aC(a,b){var s=a.$identity
if(!!s)return s
s=A.ji(a,b)
a.$identity=s
return s},
ji(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iE)},
hg(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cH().constructor.prototype):Object.create(new A.aH(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eO(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hc(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eO(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hc(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ha)}throw A.d("Error in functionType of tearoff")},
hd(a,b,c,d){var s=A.eM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eO(a,b,c,d){if(c)return A.hf(a,b,d)
return A.hd(b.length,d,a,b)},
he(a,b,c,d){var s=A.eM,r=A.hb
switch(b?-1:a){case 0:throw A.d(new A.bV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hf(a,b,c){var s,r
if($.eK==null)$.eK=A.eJ("interceptor")
if($.eL==null)$.eL=A.eJ("receiver")
s=b.length
r=A.he(s,c,a,b)
return r},
ew(a){return A.hg(a)},
ha(a,b){return A.bm(v.typeUniverse,A.Y(a.a),b)},
eM(a){return a.a},
hb(a){return a.b},
eJ(a){var s,r,q,p=new A.aH("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.a7("Field name "+a+" not found.",null))},
dS(a){return v.getIsolateTag(a)},
jz(a){var s,r,q,p,o,n=$.fI.$1(a),m=$.dR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dX[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fF.$2(a,n)
if(q!=null){m=$.dR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dX[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dZ(s)
$.dR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dX[n]=s
return s}if(p==="-"){o=A.dZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fN(a,s)
if(p==="*")throw A.d(A.f2(n))
if(v.leafTags[n]===true){o=A.dZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fN(a,s)},
fN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dZ(a){return J.eC(a,!1,null,!!a.$iE)},
jB(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dZ(s)
else return J.eC(s,c,null,null)},
jv(){if(!0===$.eA)return
$.eA=!0
A.jw()},
jw(){var s,r,q,p,o,n,m,l
$.dR=Object.create(null)
$.dX=Object.create(null)
A.ju()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fO.$1(o)
if(n!=null){m=A.jB(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ju(){var s,r,q,p,o,n,m=B.n()
m=A.aB(B.o,A.aB(B.p,A.aB(B.j,A.aB(B.j,A.aB(B.q,A.aB(B.r,A.aB(B.t(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fI=new A.dU(p)
$.fF=new A.dV(o)
$.fO=new A.dW(n)},
aB(a,b){return a(b)||b},
hQ(a,b){var s
for(s=0;s<a.length;++s)if(!J.bs(a[s],b[s]))return!1
return!0},
jk(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
jH(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
a2:function a2(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
bf:function bf(a){this.a=a},
c9:function c9(a){this.a=a},
cy:function cy(a){this.a=a},
aZ:function aZ(){},
cM:function cM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aW:function aW(){},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a){this.a=a},
cx:function cx(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
bg:function bg(a){this.a=a
this.b=null},
a9:function a9(){},
ci:function ci(){},
cj:function cj(){},
cL:function cL(){},
cH:function cH(){},
aH:function aH(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ct:function ct(a,b){this.a=a
this.b=b
this.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
bd:function bd(){},
c7:function c7(){},
c8:function c8(){},
fk(a,b,c){},
ip(a){return a},
eS(a){return new Float64Array(A.ip(a))},
eT(a,b,c){var s
A.fk(a,b,c)
s=new Uint8Array(a,b)
return s},
X(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ex(b,a))},
a4(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.jn(a,b,c))
if(b==null)return c
return b},
ar:function ar(){},
aq:function aq(){},
aU:function aU(){},
bJ:function bJ(){},
as:function as(){},
aS:function aS(){},
aT:function aT(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
aR:function aR(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
aV:function aV(){},
bQ:function bQ(){},
b9:function b9(){},
ba:function ba(){},
bb:function bb(){},
bc:function bc(){},
ej(a,b){var s=b.c
return s==null?b.c=A.bk(a,"am",[b.x]):s},
eY(a){var s=a.w
if(s===6||s===7)return A.eY(a.x)
return s===11||s===12},
hw(a){return a.as},
fM(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ey(a){return A.df(v.typeUniverse,a,!1)},
ae(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ae(a1,s,a3,a4)
if(r===s)return a2
return A.fb(a1,r,!0)
case 7:s=a2.x
r=A.ae(a1,s,a3,a4)
if(r===s)return a2
return A.fa(a1,r,!0)
case 8:q=a2.y
p=A.aA(a1,q,a3,a4)
if(p===q)return a2
return A.bk(a1,a2.x,p)
case 9:o=a2.x
n=A.ae(a1,o,a3,a4)
m=a2.y
l=A.aA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.el(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aA(a1,j,a3,a4)
if(i===j)return a2
return A.fc(a1,k,i)
case 11:h=a2.x
g=A.ae(a1,h,a3,a4)
f=a2.y
e=A.j8(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.f9(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aA(a1,d,a3,a4)
o=a2.x
n=A.ae(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.em(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bv("Attempted to substitute unexpected RTI kind "+a0))}},
aA(a,b,c,d){var s,r,q,p,o=b.length,n=A.dg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ae(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
j9(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ae(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
j8(a,b,c,d){var s,r=b.a,q=A.aA(a,r,c,d),p=b.b,o=A.aA(a,p,c,d),n=b.c,m=A.j9(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c2()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
fH(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.js(s)
return a.$S()}return null},
jx(a,b){var s
if(A.eY(b))if(a instanceof A.a9){s=A.fH(a)
if(s!=null)return s}return A.Y(a)},
Y(a){if(a instanceof A.l)return A.ax(a)
if(Array.isArray(a))return A.C(a)
return A.ep(J.ah(a))},
C(a){var s=a[v.arrayRti],r=t.D
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ax(a){var s=a.$ti
return s!=null?s:A.ep(a)},
ep(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iA(a,s)},
iA(a,b){var s=a instanceof A.a9?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
js(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.df(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jr(a){return A.ag(A.ax(a))},
ev(a){var s
if(a instanceof A.bd)return A.jo(a.$r,a.ae())
s=a instanceof A.a9?A.fH(a):null
if(s!=null)return s
if(t.W.b(a))return J.h7(a).a
if(Array.isArray(a))return A.C(a)
return A.Y(a)},
ag(a){var s=a.r
return s==null?a.r=new A.de(a):s},
jo(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
s=A.bm(v.typeUniverse,A.ev(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.fe(v.typeUniverse,s,A.ev(q[r]))
return A.bm(v.typeUniverse,s,a)},
N(a){return A.ag(A.df(v.typeUniverse,a,!1))},
iz(a){var s=this
s.b=A.j6(s)
return s.b(a)},
j6(a){var s,r,q,p
if(a===t.K)return A.iK
if(A.ai(a))return A.iO
s=a.w
if(s===6)return A.iv
if(s===1)return A.fw
if(s===7)return A.iF
r=A.j3(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ai)){a.f="$i"+q
if(q==="e")return A.iI
if(a===t.m)return A.iH
return A.iN}}else if(s===10){p=A.jk(a.x,a.y)
return p==null?A.fw:p}return A.it},
j3(a){if(a.w===8){if(a===t.S)return A.fu
if(a===t.i||a===t.H)return A.iJ
if(a===t.N)return A.iM
if(a===t.y)return A.eq}return null},
iy(a){var s=this,r=A.is
if(A.ai(s))r=A.i9
else if(s===t.K)r=A.i7
else if(A.aF(s)){r=A.iu
if(s===t.a3)r=A.i3
else if(s===t.aD)r=A.i8
else if(s===t.cG)r=A.fi
else if(s===t.ae)r=A.i6
else if(s===t.dd)r=A.i2
else if(s===t.aQ)r=A.i4}else if(s===t.S)r=A.aw
else if(s===t.N)r=A.en
else if(s===t.y)r=A.fh
else if(s===t.H)r=A.i5
else if(s===t.i)r=A.i1
else if(s===t.m)r=A.fj
s.a=r
return s.a(a)},
it(a){var s=this
if(a==null)return A.aF(s)
return A.jy(v.typeUniverse,A.jx(a,s),s)},
iv(a){if(a==null)return!0
return this.x.b(a)},
iN(a){var s,r=this
if(a==null)return A.aF(r)
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.ah(a)[s]},
iI(a){var s,r=this
if(a==null)return A.aF(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.ah(a)[s]},
iH(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.l)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fv(a){if(typeof a=="object"){if(a instanceof A.l)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
is(a){var s=this
if(a==null){if(A.aF(s))return a}else if(s.b(a))return a
throw A.A(A.fq(a,s),new Error())},
iu(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.fq(a,s),new Error())},
fq(a,b){return new A.bi("TypeError: "+A.f4(a,A.F(b,null)))},
f4(a,b){return A.co(a)+": type '"+A.F(A.ev(a),null)+"' is not a subtype of type '"+b+"'"},
I(a,b){return new A.bi("TypeError: "+A.f4(a,b))},
iF(a){var s=this
return s.x.b(a)||A.ej(v.typeUniverse,s).b(a)},
iK(a){return a!=null},
i7(a){if(a!=null)return a
throw A.A(A.I(a,"Object"),new Error())},
iO(a){return!0},
i9(a){return a},
fw(a){return!1},
eq(a){return!0===a||!1===a},
fh(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.I(a,"bool"),new Error())},
fi(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.I(a,"bool?"),new Error())},
i1(a){if(typeof a=="number")return a
throw A.A(A.I(a,"double"),new Error())},
i2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.I(a,"double?"),new Error())},
fu(a){return typeof a=="number"&&Math.floor(a)===a},
aw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.I(a,"int"),new Error())},
i3(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.I(a,"int?"),new Error())},
iJ(a){return typeof a=="number"},
i5(a){if(typeof a=="number")return a
throw A.A(A.I(a,"num"),new Error())},
i6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.I(a,"num?"),new Error())},
iM(a){return typeof a=="string"},
en(a){if(typeof a=="string")return a
throw A.A(A.I(a,"String"),new Error())},
i8(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.I(a,"String?"),new Error())},
fj(a){if(A.fv(a))return a
throw A.A(A.I(a,"JSObject"),new Error())},
i4(a){if(a==null)return a
if(A.fv(a))return a
throw A.A(A.I(a,"JSObject?"),new Error())},
fD(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.F(a[q],b)
return s},
iY(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fD(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.F(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fs(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.c([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.R,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.F(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.F(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.F(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.F(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.F(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
F(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.F(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.F(a.x,b)+">"
if(m===8){p=A.jb(a.x)
o=a.y
return o.length>0?p+("<"+A.fD(o,b)+">"):p}if(m===10)return A.iY(a,b)
if(m===11)return A.fs(a,b,null)
if(m===12)return A.fs(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
jb(a){var s=A.fQ(a)
if(s!=null)return s
return"minified:"+a},
i_(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hZ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.df(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bl(a,5,"#")
q=A.dg(s)
for(p=0;p<s;++p)q[p]=r
o=A.bk(a,b,q)
n[b]=o
return o}else return m},
hY(a,b){return A.ff(a.tR,b)},
hX(a,b){return A.ff(a.eT,b)},
df(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fd(a,null,b,!1)
r.set(b,s)
return s},
bm(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fd(a,b,c,!0)
q.set(c,r)
return r},
fe(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.el(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fd(a,b,c,d){return A.hO(A.hI(a,b,c,d))},
a3(a,b){b.a=A.iy
b.b=A.iz
return b},
bl(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.M(null,null)
s.w=b
s.as=c
r=A.a3(a,s)
a.eC.set(c,r)
return r},
fb(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hV(a,b,r,c)
a.eC.set(r,s)
return s},
hV(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ai(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aF(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.M(null,null)
q.w=6
q.x=b
q.as=c
return A.a3(a,q)},
fa(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hT(a,b,r,c)
a.eC.set(r,s)
return s},
hT(a,b,c,d){var s,r
if(d){s=b.w
if(A.ai(b)||b===t.K)return b
else if(s===1)return A.bk(a,"am",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.M(null,null)
r.w=7
r.x=b
r.as=c
return A.a3(a,r)},
hW(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.M(null,null)
s.w=13
s.x=b
s.as=q
r=A.a3(a,s)
a.eC.set(q,r)
return r},
bj(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hS(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bk(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.M(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a3(a,r)
a.eC.set(p,q)
return q},
el(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.M(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a3(a,o)
a.eC.set(q,n)
return n},
fc(a,b,c){var s,r,q="+"+(b+"("+A.bj(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.M(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a3(a,s)
a.eC.set(q,r)
return r},
f9(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bj(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bj(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hS(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.M(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a3(a,p)
a.eC.set(r,o)
return o},
em(a,b,c,d){var s,r=b.as+("<"+A.bj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hU(a,b,c,r,d)
a.eC.set(r,s)
return s},
hU(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ae(a,b,r,0)
m=A.aA(a,c,r,0)
return A.em(a,n,m,c!==m)}}l=new A.M(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a3(a,l)},
hI(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hO(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hK(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.f6(a,r,l,k,!1)
else if(q===46)r=A.f6(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ac(a.u,a.e,k.pop()))
break
case 94:k.push(A.hW(a.u,k.pop()))
break
case 35:k.push(A.bl(a.u,5,"#"))
break
case 64:k.push(A.bl(a.u,2,"@"))
break
case 126:k.push(A.bl(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hM(a,k)
break
case 38:A.hL(a,k)
break
case 63:p=a.u
k.push(A.fb(p,A.ac(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fa(p,A.ac(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hJ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.f7(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hP(a.u,a.e,o)
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
return A.ac(a.u,a.e,m)},
hK(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
f6(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i_(s,o.x)[p]
if(n==null)A.e7('No "'+p+'" in "'+A.hw(o)+'"')
d.push(A.bm(s,o,n))}else d.push(p)
return m},
hM(a,b){var s,r=a.u,q=A.f5(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bk(r,p,q))
else{s=A.ac(r,a.e,p)
switch(s.w){case 11:b.push(A.em(r,s,q,a.n))
break
default:b.push(A.el(r,s,q))
break}}},
hJ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.f5(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ac(p,a.e,o)
q=new A.c2()
q.a=s
q.b=n
q.c=m
b.push(A.f9(p,r,q))
return
case-4:b.push(A.fc(p,b.pop(),s))
return
default:throw A.d(A.bv("Unexpected state under `()`: "+A.m(o)))}},
hL(a,b){var s=b.pop()
if(0===s){b.push(A.bl(a.u,1,"0&"))
return}if(1===s){b.push(A.bl(a.u,4,"1&"))
return}throw A.d(A.bv("Unexpected extended operation "+A.m(s)))},
f5(a,b){var s=b.splice(a.p)
A.f7(a.u,a.e,s)
a.p=b.pop()
return s},
ac(a,b,c){if(typeof c=="string")return A.bk(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hN(a,b,c)}else return c},
f7(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ac(a,b,c[s])},
hP(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ac(a,b,c[s])},
hN(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bv("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bv("Bad index "+c+" for "+b.j(0)))},
jy(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.x(a,b,null,c,null)
r.set(c,s)}return s},
x(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ai(d))return!0
s=b.w
if(s===4)return!0
if(A.ai(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.x(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.x(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.x(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.x(a,b.x,c,d,e))return!1
return A.x(a,A.ej(a,b),c,d,e)}if(s===6)return A.x(a,p,c,d,e)&&A.x(a,b.x,c,d,e)
if(q===7){if(A.x(a,b,c,d.x,e))return!0
return A.x(a,b,c,A.ej(a,d),e)}if(q===6)return A.x(a,b,c,p,e)||A.x(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.M)return!0
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
if(!A.x(a,j,c,i,e)||!A.x(a,i,e,j,c))return!1}return A.ft(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ft(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iG(a,b,c,d,e)}if(o&&q===10)return A.iL(a,b,c,d,e)
return!1},
ft(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.x(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.x(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.x(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.x(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.x(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
iG(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bm(a,b,r[o])
return A.fg(a,p,null,c,d.y,e)}return A.fg(a,b.y,null,c,d.y,e)},
fg(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.x(a,b[s],d,e[s],f))return!1
return!0},
iL(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.x(a,r[s],c,q[s],e))return!1
return!0},
aF(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ai(a))if(s!==6)r=s===7&&A.aF(a.x)
return r},
ai(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.R},
ff(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dg(a){return a>0?new Array(a):v.typeUniverse.sEA},
M:function M(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c2:function c2(){this.c=this.b=this.a=null},
de:function de(a){this.a=a},
c1:function c1(){},
bi:function bi(a){this.a=a},
hD(){var s,r,q
if(self.scheduleImmediate!=null)return A.jf()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aC(new A.cP(s),1)).observe(r,{childList:true})
return new A.cO(s,r,q)}else if(self.setImmediate!=null)return A.jg()
return A.jh()},
hE(a){self.scheduleImmediate(A.aC(new A.cQ(a),0))},
hF(a){self.setImmediate(A.aC(new A.cR(a),0))},
hG(a){A.hR(0,a)},
hR(a,b){var s=new A.dc()
s.aM(a,b)
return s},
iS(a){return new A.bZ(new A.z($.q,a.i("z<0>")),a.i("bZ<0>"))},
ic(a,b){a.$2(0,null)
b.b=!0
return b.a},
dj(a,b){A.id(a,b)},
ib(a,b){b.ak(a)},
ia(a,b){b.al(A.aj(a),A.aE(a))},
id(a,b){var s,r,q=new A.dk(b),p=new A.dl(b)
if(a instanceof A.z)a.aB(q,p,t.z)
else{s=t.z
if(a instanceof A.z)a.aJ(q,p,s)
else{r=new A.z($.q,t.aY)
r.a=8
r.c=a
r.aB(q,p,s)}}},
jd(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.q.aI(new A.dP(s))},
ea(a){var s
if(t.C.b(a)){s=a.ga_()
if(s!=null)return s}return B.f},
iB(a,b){if($.q===B.d)return null
return null},
iC(a,b){if($.q!==B.d)A.iB(a,b)
if(b==null)if(t.C.b(a)){b=a.ga_()
if(b==null){A.eX(a,B.f)
b=B.f}}else b=B.f
else if(t.C.b(a))A.eX(a,b)
return new A.K(a,b)},
ek(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.hy()
b.aa(new A.K(new A.J(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.az(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.a2()
b.a0(p.a)
A.av(b,q)
return}b.a^=2
A.ce(null,null,b.b,new A.cY(p,b))},
av(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.eu(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.av(g.a,f)
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
if(r){A.eu(m.a,m.b)
return}j=$.q
if(j!==k)$.q=k
else j=null
f=f.c
if((f&15)===8)new A.d1(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d0(s,m).$0()}else if((f&2)!==0)new A.d_(g,s).$0()
if(j!=null)$.q=j
f=s.c
if(f instanceof A.z){r=s.a.$ti
r=r.i("am<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a3(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.ek(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a3(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
iZ(a,b){if(t.Q.b(a))return b.aI(a)
if(t.v.b(a))return a
throw A.d(A.bt(a,"onError",u.c))},
iT(){var s,r
for(s=$.az;s!=null;s=$.az){$.br=null
r=s.b
$.az=r
if(r==null)$.bq=null
s.a.$0()}},
j7(){$.er=!0
try{A.iT()}finally{$.br=null
$.er=!1
if($.az!=null)$.eF().$1(A.fG())}},
fE(a){var s=new A.c_(a),r=$.bq
if(r==null){$.az=$.bq=s
if(!$.er)$.eF().$1(A.fG())}else $.bq=r.b=s},
j1(a){var s,r,q,p=$.az
if(p==null){A.fE(a)
$.br=$.bq
return}s=new A.c_(a)
r=$.br
if(r==null){s.b=p
$.az=$.br=s}else{q=r.b
s.b=q
$.br=r.b=s
if(q==null)$.bq=s}},
jX(a){A.cf(a,"stream",t.K)
return new A.ca()},
eu(a,b){A.j1(new A.dK(a,b))},
fC(a,b,c,d){var s,r=$.q
if(r===c)return d.$0()
$.q=c
s=r
try{r=d.$0()
return r}finally{$.q=s}},
j0(a,b,c,d,e){var s,r=$.q
if(r===c)return d.$1(e)
$.q=c
s=r
try{r=d.$1(e)
return r}finally{$.q=s}},
j_(a,b,c,d,e,f){var s,r=$.q
if(r===c)return d.$2(e,f)
$.q=c
s=r
try{r=d.$2(e,f)
return r}finally{$.q=s}},
ce(a,b,c,d){if(B.d!==c){d=c.b1(d)
d=d}A.fE(d)},
cP:function cP(a){this.a=a},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
dc:function dc(){},
dd:function dd(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=!1
this.$ti=b},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dP:function dP(a){this.a=a},
K:function K(a,b){this.a=a
this.b=b},
c0:function c0(){},
b5:function b5(a,b){this.a=a
this.$ti=b},
au:function au(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
z:function z(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cV:function cV(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b){this.a=a
this.b=b},
d3:function d3(a){this.a=a},
d0:function d0(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a
this.b=null},
ca:function ca(){},
dh:function dh(){},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
cu(a,b){return new A.aQ(a.i("@<0>").F(b).i("aQ<1,2>"))},
eR(a){var s,r
if(A.eB(a))return"{...}"
s=new A.bW("")
try{r={}
$.af.push(a)
s.a+="{"
r.a=!0
a.a7(0,new A.cv(r,s))
s.a+="}"}finally{$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
i:function i(){},
R:function R(){},
cv:function cv(a,b){this.a=a
this.b=b},
iV(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aj(r)
q=A.eP(String(s))
throw A.d(q)}q=A.dn(p)
return q},
dn(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.c3(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dn(a[s])
return a},
c3:function c3(a,b){this.a=a
this.b=b
this.c=null},
c4:function c4(a){this.a=a},
bx:function bx(){},
bz:function bz(){},
cr:function cr(){},
cs:function cs(a){this.a=a},
hh(a,b){a=A.A(a,new Error())
a.stack=b.j(0)
throw a},
eg(a,b,c,d){var s,r=J.ho(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
hr(a,b,c){var s,r,q=A.c([],c.i("j<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q.push(a[r])
q.$flags=1
return q},
Q(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("j<0>"))
s=A.c([],b.i("j<0>"))
for(r=J.ak(a);r.m();)s.push(r.gp())
return s},
f_(a,b,c){var s=J.ak(b)
if(!s.m())return a
if(c.length===0){do a+=A.m(s.gp())
while(s.m())}else{a+=A.m(s.gp())
while(s.m())a=a+c+A.m(s.gp())}return a},
hy(){return A.aE(new Error())},
co(a){if(typeof a=="number"||A.eq(a)||a==null)return J.aG(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eW(a)},
hi(a,b){A.cf(a,"error",t.K)
A.cf(b,"stackTrace",t.l)
A.hh(a,b)},
bv(a){return new A.bu(a)},
a7(a,b){return new A.J(!1,null,b,a)},
bt(a,b,c){return new A.J(!0,a,b,c)},
P(a,b,c,d,e){return new A.aX(b,c,!0,a,d,"Invalid value")},
cA(a,b,c){if(0>a||a>c)throw A.d(A.P(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.P(b,a,c,"end",null))
return b}return c},
ei(a,b){if(a<0)throw A.d(A.P(a,0,null,b,null))
return a},
ed(a,b,c,d){return new A.bA(b,!0,a,d,"Index out of range")},
b3(a){return new A.b2(a)},
f2(a){return new A.bX(a)},
eZ(a){return new A.b0(a)},
D(a){return new A.by(a)},
eP(a){return new A.cp(a)},
hn(a,b,c){var s,r
if(A.eB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
$.af.push(a)
try{A.iP(a,s)}finally{$.af.pop()}r=A.f_(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
eQ(a,b,c){var s,r
if(A.eB(a))return b+"..."+c
s=new A.bW(b)
$.af.push(a)
try{r=s
r.a=A.f_(r.a,a,", ")}finally{$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iP(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.m(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
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
eU(a,b,c,d){var s
if(B.e===c)return A.f0(B.b.gq(a),J.O(b),$.cg())
if(B.e===d){s=B.b.gq(a)
b=J.O(b)
c=J.O(c)
return A.cK(A.T(A.T(A.T($.cg(),s),b),c))}s=B.b.gq(a)
b=J.O(b)
c=J.O(c)
d=J.O(d)
d=A.cK(A.T(A.T(A.T(A.T($.cg(),s),b),c),d))
return d},
hs(a){var s,r,q=$.cg()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q=A.T(q,J.O(a[r]))
return A.cK(q)},
o:function o(){},
bu:function bu(a){this.a=a},
U:function U(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aX:function aX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bA:function bA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b2:function b2(a){this.a=a},
bX:function bX(a){this.a=a},
b0:function b0(a){this.a=a},
by:function by(a){this.a=a},
b_:function b_(){},
cU:function cU(a){this.a=a},
cp:function cp(a){this.a=a},
n:function n(){},
B:function B(){},
l:function l(){},
cb:function cb(){},
cI:function cI(){this.b=this.a=0},
bW:function bW(a){this.a=a},
cw:function cw(a){this.a=a},
ig(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
e0(a,b){var s=new A.z($.q,b.i("z<0>")),r=new A.b5(s,b.i("b5<0>"))
a.then(A.aC(new A.e1(r),1),A.aC(new A.e2(r),1))
return s},
e1:function e1(a){this.a=a},
e2:function e2(a){this.a=a},
jK(a){return Math.sin(a)},
jj(a){return Math.cos(a)},
f:function f(a,b,c){this.a=a
this.b=b
this.$ti=c},
eb(a){var s,r,q=B.c.a6(a,0,new A.ck()),p=B.c.a6(a,0,new A.cl()),o=A.Q(a,t.X)
B.c.M(o,new A.cm(p/4,q/4))
for(s=0,r=1;r<4;++r){q=o[r]
p=o[s]
if(q.a+q.b<p.a+p.b)s=r}q=A.c([],t.O)
for(r=0;r<4;++r)q.push(o[B.b.E(s+r,4)])
return new A.aI(q[0],q[1],q[2],q[3])},
jl(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.length
if(a2<a4*a5*4)throw A.d(A.bt(a2,"rgba","zu kurz"))
a2=Math.max(1,B.a.n(Math.max(a4,a5)/400))
s=B.b.t(a4,a2)
r=B.b.t(a5,a2)
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
e+=a3[c+2]}}g=B.b.t(g,l)
f=B.b.t(f,l)
e=B.b.t(e,l)
a=q+i
p[a]=B.b.J(g*77+f*150+e*29,8)
if(g>f)a0=g>e?g:e
else a0=f>e?f:e
if(g<f)a1=g<e?g:e
else a1=f<e?f:e
o[a]=a0-a1
n[a]=B.b.J(g-f+256,1)
m[a]=B.b.J(B.b.J(g+f,1)-e+256,1)}return A.il(new A.d7(s,r,p,o,n,m),a2/a4,a2/a5,null,a6,a7)},
bp(a,b){var s,r,q=a.a,p=b.b,o=a.b,n=b.a,m=q*p-o*n
if(Math.abs(m)<0.000001)return null
s=a.c
r=b.c
return new A.f((s*p-o*r)/m,(q*r-s*n)/m,t.X)},
il(b5,b6,b7,b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=b5.a,a4=b5.b,a5=b5.c,a6=A.bo(A.bo(a5,a3,a4),a3,a4),a7=b5.d,a8=A.bo(A.bo(a7,a3,a4),a3,a4),a9=A.hH(a6,a8,a3,a4),b0=A.bo(b5.e,a3,a4),b1=A.bo(b5.f,a3,a4),b2=new A.cS(a6,b0,b1),b3=A.c([],t.E),b4=A.iw(a9,a3,a4)
b0=A.C(b4).i("W<1>")
s=A.fz(new A.W(b4,new A.du(),b0))
r=A.fz(new A.W(b4,new A.dv(),b0))
B.c.K(b3,A.iR(s,r,a9,a3,a4,b8))
for(b0=A.fl(A.fn(a9.d,a3,a4,1),a3,a4,6),b1=b0.length,q=0;q<b0.length;b0.length===b1||(0,A.t)(b0),++q){p=A.es(b0[q])
if(p!=null)b3.push(p)}o=A.iU(a6)
b0=a3*a4
n=new Uint8Array(b0)
for(m=0;m<b0;++m)n[m]=a6[m]>o?1:0
for(b0=A.fl(A.fn(A.iq(n,a3,a4,2),a3,a4,2),a3,a4,3),b1=b0.length,q=0;q<b0.length;b0.length===b1||(0,A.t)(b0),++q){p=A.es(b0[q])
if(p!=null)b3.push(p)}if(b9==null)l=a2
else{b0=A.c([],t.O)
for(b1=b9.gN(),k=t.X,q=0;q<4;++q){j=b1[q]
b0.push(new A.f(j.a/b6-0.5,j.b/b7-0.5,k))}l=A.et(b0)}b0=l!=null
if(b0)b3.push(l)
i=A.c([],t.x)
for(b1=b3.length,h=a2,q=0;q<b3.length;b3.length===b1||(0,A.t)(b3),++q){g=A.et(b3[q])
if(g==null)continue
f=A.ir(g,a9,b2,a3,a4,b8)
if(f==null)continue
i.push(new A.at(g,f))
if(h==null||f>h.b)h=B.c.gR(i)}b1=!1
if(b0)if(!c0)b1=h==null||A.fy(h.a,l)<0.7
if(b1){for(b1=i.length,e=a2,q=0;q<i.length;i.length===b1||(0,A.t)(i),++q){d=i[q]
if(A.fy(d.a,l)<0.7)continue
if(e==null||d.b>e.b)e=d}if(e!=null)h=e}if(b0&&c0){c=Math.sqrt(a3*a3+a4*a4)
b=h==null
if(!b){for(b0=h.a,b1=0.04*c,a=!1,m=0;m<4;++m)if(b0[m].H(l[m])>b1)a=!0}else a=b
if(a){b0=b?a2:h.b
h=new A.at(l,b0==null?0:b0)}}if(h==null)return a2
a0=A.j2(h,i,a9,a5,a7,a3,a4)
if(a0!=null)h=a0
a1=A.fA(h.a,a9,a3,a4)
a5=A.c([],t.O)
for(a7=a1.length,b0=t.X,q=0;q<a1.length;a1.length===a7||(0,A.t)(a1),++q){j=a1[q]
a5.push(new A.f(B.a.G((j.a+0.5)*b6,0,1),B.a.G((j.b+0.5)*b7,0,1),b0))}return A.eb(a5)},
j2(a9,b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a9.a,a6=A.cd(a5),a7=Math.sqrt(b4*b4+b5*b5),a8=0.012*a7
for(s=b0.length,r=a7/400,q=t.a,p=t.X,o=t.u,n=null,m=0;m<b0.length;b0.length===s||(0,A.t)(b0),++m){l=b0[m]
if(l===a9)continue
if(n!=null&&l.b<=n.b)continue
k=l.a
j=A.cd(k)/a6
if(j<0.2||j>0.92)continue
for(i=0,h=0;h<8;++h)for(g=(h+0.5)/8,f=0;f<8;++f){e=(f+0.5)/8
d=k[0]
c=d.a
b=k[1]
a=c+(b.a-c)*g
d=d.b
a0=d+(b.b-d)*g
d=k[3]
b=d.a
c=k[2]
d=d.b
if(A.eo(a5,a+(b+(c.a-b)*g-a)*e,a0+(d+(c.b-d)*g-a0)*e))++i}if(i<51.2)continue
g=A.c([],o)
for(a1=0;a1<4;a1=a2){e=k[a1]
a2=a1+1
d=a2%4
c=k[d]
g.push(A.fo(new A.f((e.a+c.a)/2,(e.b+c.b)/2,p),a5[a1],a5[d])>=a8)}a3=new A.W(g,new A.dL(),q).gk(0)
if(a3<2){e=!(a3===1&&g[2]&&j<=0.85)
g=e}else g=!1
if(g)continue
a4=A.fA(k,b1,b4,b5)
if(!A.ik(a4,b2,b3,b4,b5,r))continue
n=new A.at(a4,l.b)}return n},
ik(a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8[0],a3=a8[1],a4=a8[2],a5=a8[3],a6=(a2.a+a3.a+a4.a+a5.a)/4,a7=(a2.b+a3.b+a4.b+a5.b)/4
a5=t.t
s=A.c([],a5)
for(r=0;r<4;){q={}
p=a8[r];++r
o=a8[r%4]
n=p.H(o)
if(n<8)return!1
a2=p.b
a3=o.b-a2
m=q.a=-a3/n
a4=p.a
l=o.a-a4
k=q.b=l/n
if((a6-a4)*m+(a7-a2)*k<0){q.a=-m
q.b=-k}j=A.c([],a5)
for(i=0,h=0,g=0;g<=20;++g){f=0.1+0.8*g/20
e=new A.dt(q,a4+l*f,b3,a2+a3*f,b1,b2)
d=new A.ds(e,a9)
c=A.c([d.$1(-1),d.$1(-1.75),d.$1(-2.5)],a5)
B.c.O(c)
b=d.$1(2.5)
a=d.$1(4)
a0=d.$1(5.5)
a0=Math.max(A.dQ(a),A.dQ(a0))
a1=Math.max(A.dQ(b),a0)
if(B.c.gU(c)<0||a1<0)continue;++h
j.push(c[1])
b=b0[e.$1(-1.75)]
if(b<=40){b=c[1]
b=b<110&&b<=a1-30}else b=!1
if(b)++i}if(h<8||i<0.75*h)return!1
B.c.O(j)
s.push(j[j.length/2|0])}B.c.O(s)
return B.c.gR(s)-B.c.gU(s)<=35},
hH(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=c8*c9,c2=new Float32Array(c1),c3=new Float32Array(c1),c4=new Float32Array(c1),c5=new Int32Array(1024)
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
l=a8>=1023?1023:B.a.X(a8)
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
c0=j-1}}if(a8>=c4[b9]&&a8>c4[c0]){b5[m]=1;++b6}}return new A.d4(c2,c3,c4,b5,b6,b3,b4)},
iw(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a9+B.a.aj(Math.sqrt(a9*a9+b0*b0))+2,a6=180*a5,a7=new Int32Array(a6)
for(s=b0-1,r=a9-1,q=a8.b,p=a8.a,o=a8.d,n=1;n<s;++n)for(m=n*a9,l=1;l<r;++l){k=m+l
if(o[k]===0)continue
j=Math.atan2(q[k],p[k])
i=B.a.n((j<0?j+3.141592653589793:j)*180/3.141592653589793)
for(h=-3;h<=3;++h){g=i+h
if(g<0)g+=180
if(g>=180)g-=180
f=g*a5+(B.a.n(l*$.eG()[g]+n*$.eH()[g])+a9)
a7[f]=a7[f]+1}}e=Math.max(14,B.a.n(0.08*Math.min(a9,b0)))
s=t.t
d=A.c([],s)
for(k=0;k<a6;++k)if(a7[k]>=e)d.push(k)
B.c.M(d,new A.dD(a7))
c=A.c([],t.w)
b=A.c([],s)
a=A.c([],s)
for(a6=d.length,a0=0;a0<d.length;d.length===a6||(0,A.t)(d),++a0){k=d[a0]
g=B.b.t(k,a5)
a1=B.b.E(k,a5)-a9
s=c.length
a3=0
for(;;){a2=!0
if(!(a3<s)){a2=!1
break}a4=Math.abs(g-b[a3])
if(a4<=4&&Math.abs(a1-a[a3])<=6)break
if(180-a4<=4&&Math.abs(a1+a[a3])<=6)break;++a3}if(a2)continue
c.push(new A.v($.eG()[g],$.eH()[g],a1))
b.push(g)
a.push(a1)
if(c.length>=48)break}return c},
iW(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=a0.b,h=-i,g=a0.a,f=a0.c,e=f*g,d=f*i,c=Math.sqrt(a2*a2+a3*a3),b=B.a.V(-c-2),a=B.a.aj(2*c+4)
f=a+1
s=new Int32Array(f)
r=new Int32Array(f)
q=Math.max(5,0.8*a1.r)
for(f=a2-3,p=a3-3,o=0,n=0,m=0;m<a;){l=b+m
k=e+l*h
j=d+l*g
if(k>=2&&j>=2&&k<=f&&j<=p){++n
if(A.fp(k,j,g,i,a1,a2,a3,q,2))++o}++m
s[m]=o
r[m]=n}return new A.c6(a0,b,s,r)},
fp(a,b,c,d,e,f,g,h,a0){var s,r,q,p,o,n,m,l,k,j,i
for(s=-a0,r=e.a,q=e.b,p=e.c,o=f-2,n=g-2;s<=a0;++s){m=B.a.n(a+s*c)
l=B.a.n(b+s*d)
if(m<1||l<1||m>o||l>n)continue
k=l*f+m
j=p[k]
if(j<h)continue
i=r[k]*c+q[k]*d
if(i*i>=0.67*j*j)return!0}return!1},
iR(c5,c6,c7,c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
if(c5.length<2||c6.length<2)return B.z
s=t.A
r=A.cu(s,t.I)
s=A.Q(c5,s)
B.c.K(s,c6)
q=s.length
p=0
for(;p<s.length;s.length===q||(0,A.t)(s),++p){o=s[p]
r.D(0,o,A.iW(o,c7,c8,c9))}n=new A.dG(c9,c8)
m=n.$2(c5,!0)
l=n.$2(c6,!1)
k=-0.1*c8
j=1.1*c8
i=-0.1*c9
h=1.1*c9
g=A.c([],t.V)
for(s=m.length,q=c8*c9,f=0.1*c9,e=0.1*c8,d=t.O,p=0;p<m.length;m.length===s||(0,A.t)(m),++p){c=m[p]
b=c.a
a=c.b
for(c=l.length,a0=0;a0<l.length;l.length===c||(0,A.t)(l),++a0){a1=l[a0]
a2=a1.a
a3=a1.b
a4=A.bp(b,a2)
a5=A.bp(b,a3)
a6=A.bp(a,a3)
a7=A.bp(a,a2)
if(a4==null||a5==null||a6==null||a7==null)continue
a8=A.c([a4,a5,a6,a7],d)
if(B.c.ah(a8,new A.dE(k,j,i,h)))continue
if(a5.a-a4.a<e||a6.a-a7.a<e)continue
if(a7.b-a4.b<f||a6.b-a5.b<f)continue
a9=A.cd(a8)/q
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
c2=b6.ba(b8+c1,b9-c1)
c3=c2.a
c4=c2.b<0.5?0:c3
b0*=c4
if(c4<b1)b1=c4}if(b1<0.3)continue
g.push(new A.a2(Math.pow(a9,0.5)*Math.pow(b0,0.25),a8))}}B.c.M(g,new A.dF())
s=A.c([],t.E)
for(r=A.cJ(g,0,A.cf(24,"count",t.S),t.B),q=r.$ti,r=new A.H(r,r.gk(0),q.i("H<w.E>")),q=q.i("w.E");r.m();){b2=r.d
s.push((b2==null?q.a(b2):b2).b)}return s},
et(a){var s,r,q,p,o,n,m,l=J.aD(a)
if(l.gk(a)!==4)return null
s=t.O
r=A.c([],s)
for(l=l.gB(a),q=t.X;l.m();){p=l.gp()
r.push(new A.f(p.a,p.b,q))}o=A.eb(r)
if(!o.gb7())return null
l=A.c([],s)
for(s=o.gN(),n=0;n<4;++n){m=s[n]
l.push(new A.f(m.a,m.b,q))}return l},
b7(a,b){var s=J.G(a),r=Math.abs(s.h(a,0)-b[0])
return s.gk(a)>1?r+2*(Math.abs(s.h(a,1)-b[1])+Math.abs(s.h(a,2)-b[2])):r},
f3(a){var s,r=J.a6(B.c.gU(a)),q=A.c([],t.n)
for(s=0;s<r;++s)q.push(new A.cT(a,s).$0())
return q},
ir(f2,f3,f4,f5,f6,f7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0=null,f1=A.cd(f2)/(f5*f6)
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
if(Math.abs((n*k+l*j)/i)>0.77)return f0}h=new A.dy(f2)
o=t.q
g=A.c([],o)
for(f=0;f<10;++f)for(m=0.12+f*0.084,e=0;e<10;++e){d=h.$2(m,0.12+e*0.084)
c=B.a.n(d.a)
b=B.a.n(d.b)
if(c<0||b<0||c>=f5||b>=f6)continue
g.push(f4.ai(b*f5+c))}if(g.length<30)return f0
B.c.M(g,new A.dz())
a=A.f3(B.c.v(g,B.b.T(g.length*6,10)))
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
b1=r.H(q)
if(b1<8)return f0
a1=r.b
b2=q.b-a1
b3=-b2/b1
b4=r.a
b5=q.a-b4
b6=b5/b1
if((a3-b4)*b3+(a4-a1)*b6<0){b3=-b3
b6=-b6}b7=Math.max(12,B.a.t(b1,1.5))
b8=A.c([],o)
b9=A.c([],o)
for(c0=5*b3,c1=5*b6,c2=0,c3=0,c4=0,c5=0;c5<=b7;++c5){c6=0.06+0.88*c5/b7
c7=b4+b5*c6
c8=a1+b2*c6;++c4
if(c7<2||c8<2||c7>m||c8>a0)continue;++c2
if(A.fp(c7,c8,b3,b6,f3,f5,f6,a5,3))++c3
if((c5&1)===1)continue
c9=B.a.n(c7+c0)
d0=B.a.n(c8+c1)
if(c9>=0&&d0>=0&&c9<f5&&d0<f6)b8.push(f4.ai(d0*f5+c9))
d1=B.a.n(c7-c0)
d2=B.a.n(c8-c1)
if(d1>=0&&d2>=0&&d1<f5&&d2<f6)b9.push(f4.ai(d2*f5+d1))}a6.push(c2===0?0:c3/c2)
a7.push(c2/c4)
a8.push(b8)
a9.push(b9)}o=A.c([],o)
for(m=a9.length,d3=0;d3<a9.length;a9.length===m||(0,A.t)(a9),++d3)B.c.K(o,a9[d3])
d4=o.length>=20?A.f3(o):f0
d5=new A.dB()
m=d4==null
d6=m?0:Math.max(20,2.5*d5.$2(o,d4))
d7=Math.max(20,2.5*d5.$2(B.c.v(g,B.b.T(g.length*6,10)),a))
d8=!m&&A.b7(d4,a)>=15
d9=A.c([],a2)
for(o=2*d6,e0=1,e1=1,e2=0,b0=0;b0<4;++b0){if(a7[b0]<0.4){++e2
e3=0.45}else{e3=a6[b0]
if(d4!=null){e4=0
if(d8)for(m=a8[b0],a0=m.length,d3=0;d3<m.length;m.length===a0||(0,A.t)(m),++d3){e5=m[d3]
e6=A.b7(e5,d4)
if(e6<=d6&&e6<0.6*A.b7(e5,a))++e4}for(m=a9[b0],a0=m.length,e7=0,d3=0;d3<m.length;m.length===a0||(0,A.t)(m),++d3){e5=m[d3]
if(A.b7(e5,d4)>o&&A.b7(e5,a)>d7)++e7}m=a8[b0].length
e8=m===0?0:e4/m
m=a9[b0].length
e9=m===0?0:e7/m
e3*=(1-0.4*e8)*(1-0.3*e9)}}d9.push(e3)
e0*=e3
if(e3<e1)e1=e3}o=B.c.bc(d9,new A.dA())
if(e2>1||e1<0.3||o/4<0.5)return f0
return Math.pow(Math.min(f1,1),0.5)*Math.pow(e0,0.25)},
fA(c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=c5[0],b9=c5[1],c0=c5[2],c1=c5[3],c2=(b8.a+b9.a+c0.a+c1.a)/4,c3=(b8.b+b9.b+c0.b+c1.b)/4,c4=A.c([],t.b)
for(b8=0.8*c6.r,b9=c6.c,c0=c6.a,c1=c6.b,s=c7-2,r=c8-2,q=t.i,p=t.n,o=0;o<4;){n=c5[o];++o
m=c5[o%4]
l=n.H(m)
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
b=Math.max(12,B.a.t(l,1.5))
for(a=0;a<=b;++a){a0=0.08+0.84*a/b
a1=h+g*a0
a2=k+j*a0
a3=A.eg(9,0,!1,q)
for(a4=0,a5=0,a6=-4;a6<=4;++a6){a7=B.a.n(a1+a6*i)
a8=B.a.n(a2+a6*f)
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
b5=b4<0?a5+B.a.G(0.5*(b2-b3)/b4,-0.5,0.5):a5}else b5=a5
e.push(a1+b5*i)
d.push(a2+b5*f)
c.push(a4)}c4.push(A.fr(e,d,c,l))}if(B.c.ah(c4,new A.dJ()))return c5
b6=A.c([],t.O)
for(b8=c7*c7+c8*c8,o=0;o<4;++o){b9=c4[(o+3)%4]
b9.toString
c0=c4[o]
c0.toString
b7=A.bp(b9,c0)
if(b7==null)return c5
if(b7.H(c5[o])>0.03*Math.sqrt(b8))return c5
b6.push(b7)}return b6},
fr(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.length
if(a0<Math.max(8,a4*0.25))return null
s=A.eg(a0,!0,!1,t.y)
for(a0=t.a,r=t.u,q=null,p=0;p<2;++p,s=j){for(o=a1.length,n=0,m=0,l=0,k=0;k<o;++k){if(!s[k])continue
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
q=new A.v(b,a,o)
j=A.c([],r)
for(k=0;k<a1.length;++k)j.push(Math.abs(a1[k]*b+a2[k]*a-o)<=1.5)
if(new A.W(j,new A.dC(),a0).gk(0)<8)return q}return q},
fl(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4*b5,a9=new Int32Array(a8),b0=new Int32Array(a8),b1=A.c([],t.r),b2=0.1*b4*b5
for(a8=b3.length,s=0,r=0;r<a8;++r){if(b3[r]===0||a9[r]!==0)continue;++s
b0[0]=r
a9[r]=s
for(q=b5,p=b4,o=1,n=0,m=0,l=0;o>0;){--o
k=b0[o];++n
j=B.b.E(k,b4)
i=B.b.t(k,b4)
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
o=b}}}}if((m-p+1)*(l-q+1)>=b2&&n>=40)b1.push(new A.c9([s,m,l,p,q]))}B.c.M(b1,new A.dm())
a=A.c([],t.E)
for(a8=A.cJ(b1,0,A.cf(b6,"count",t.S),t.e),f=a8.$ti,a8=new A.H(a8,a8.gk(0),f.i("H<w.E>")),a0=t.X,a1=t.O,f=f.i("w.E");a8.m();){a2=a8.d
if(a2==null)a2=f.a(a2)
a3=A.c([],a1)
for(a4=a2.a,i=a4[4];i<=a4[2];++i){for(j=a4[3],a5=i*b4,a6=-1,a7=-1;j<=a4[1];++j)if(a9[a5+j]===a4[0]){if(a6<0)a6=j
a7=j}if(a6>=0){a3.push(new A.f(a6,i,a0))
a3.push(new A.f(a7,i,a0))}}a.push(A.fm(a3))}return a},
fm(a){var s,r,q,p,o,n,m,l,k,j
if(a.length<3)return a
s=t.X
r=A.Q(a,s)
B.c.M(r,new A.dp())
q=new A.dq()
p=t.O
o=A.c([],p)
for(n=r.length,m=0;m<r.length;r.length===n||(0,A.t)(r),++m){l=r[m]
for(;;){k=o.length
if(!(k>=2&&q.$3(o[k-2],B.c.gR(o),l)<=0))break
o.pop()}o.push(l)}j=A.c([],p)
for(p=A.C(r).i("aY<1>"),r=new A.aY(r,p),r=new A.H(r,r.gk(0),p.i("H<w.E>")),p=p.i("w.E");r.m();){n=r.d
if(n==null)n=p.a(n)
for(;;){k=j.length
if(!(k>=2&&q.$3(j[k-2],B.c.gR(j),n)<=0))break
j.pop()}j.push(n)}s=A.Q(B.c.l(o,0,o.length-1),s)
B.c.K(s,B.c.l(j,0,j.length-1))
return s},
es(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=J.aD(a3)
if(a2.gk(a3)<4)return null
for(s=0,r=0;r<a2.gk(a3);r=q){q=r+1
s+=a2.h(a3,r).H(a2.h(a3,B.b.E(q,a2.gk(a3))))}p=s*0.004
for(o=a3;a2=J.aD(o),a2.gk(o)>24;){o=A.j4(a3,p)
p*=1.5}if(a2.gk(o)<4)return null
n=a2.gk(o)
for(m=n-3,l=n-2,k=n-1,j=t.O,i=-1,h=null,g=0;g<m;g=f)for(f=g+1,e=f;e<l;e=d)for(d=e+1,c=d;c<k;c=b)for(b=c+1,a=b;a<n;++a){a0=A.c([a2.h(o,g),a2.h(o,e),a2.h(o,c),a2.h(o,a)],j)
a1=A.cd(a0)
if(a1>i){h=a0
i=a1}}return h},
j4(a,b){var s,r,q,p,o,n,m,l,k,j,i=J.aD(a)
if(i.gk(a)<=4)return a
for(s=0,r=-1,q=1;q<i.gk(a);++q){p=i.h(a,0)
o=i.h(a,q)
n=p.a-o.a
m=p.b-o.b
l=p.$ti.c.a(n*n+m*m)
if(l>r){r=l
s=q}}k=A.dM(i.l(a,0,s+1),b)
p=t.X
o=A.Q(i.v(a,s),p)
o.push(i.h(a,0))
j=A.dM(o,b)
i=A.Q(J.e9(k,0,k.length-1),p)
B.c.K(i,J.e9(j,0,j.length-1))
return i},
dM(a,b){var s,r,q,p,o,n,m,l,k
if(a.length<3)return a
s=J.G(a)
r=s.gU(a)
q=s.gR(a)
for(p=0,o=0,n=1;n<a.length-1;++n){m=A.fo(a[n],r,q)
if(m>o){o=m
p=n}}if(o<=b)return A.c([r,q],t.O)
l=A.dM(s.l(a,0,p+1),b)
k=A.dM(s.v(a,p),b)
s=A.Q(J.e9(l,0,l.length-1),t.X)
B.c.K(s,k)
return s},
fo(a,b,c){var s=b.a,r=c.a-s,q=b.b,p=c.b-q,o=Math.sqrt(r*r+p*p)
if(o===0)return a.H(b)
return Math.abs((a.a-s)*p-(a.b-q)*r)/o},
fy(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.Q(a,t.X)
B.c.K(b,a0)
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
d=A.eo(a,e,g)
c=A.eo(a0,e,g)
if(d||c)++i
if(d&&c)++j}}return i===0?0:j/i},
eo(a,b,c){var s,r,q,p,o,n,m,l
for(s=!1,r=!1,q=0;q<4;){p=a[q];++q
o=a[q%4]
n=p.a
m=p.b
l=(o.a-n)*(c-m)-(o.b-m)*(b-n)
if(l>0)s=!0
if(l<0)r=!0}return!(s&&r)},
cd(a){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<s;){p=a[q];++q
o=a[q%s]
r+=p.a*o.b-o.a*p.b}return Math.abs(r)/2},
bo(a,b,c){var s,r,q,p,o,n,m,l=b*c,k=new Uint16Array(l)
for(s=b-1,r=0;r<c;++r){q=r*b
for(p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=a[q+B.b.G(p+n,0,s)]*B.k[n+2]
k[q+p]=o}}m=new Uint8Array(l)
for(l=c-1,r=0;r<c;++r)for(s=r*b,p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=k[B.b.G(r+n,0,l)*b+p]*B.k[n+2]
m[s+p]=o+128>>>8}return m},
iU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.eg(256,0,!1,t.S)
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
fn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=b-1,r=c-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=0;m<c;++m)for(l=m*b,k=m>0,j=m<r,i=0;i<b;++i){h=l+i
g=!0
if(p[h]===0)if(!(i>0&&p[h-1]!==0))if(!(i<s&&p[h+1]!==0))if(!(k&&p[h-b]!==0))g=j&&p[h+b]!==0
if(g)n[h]=1}}return p},
iq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=c-1,r=b-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=1;m<s;++m)for(l=m*b,k=1;k<r;++k){j=l+k
if(p[j]!==0&&p[j-1]!==0&&p[j+1]!==0&&p[j-b]!==0&&p[j+b]!==0)n[j]=1}}return p},
fz(a){var s,r,q,p,o,n=t.S,m=A.cu(n,n),l=A.c([],t.w)
for(n=J.ak(a.a),s=new A.b4(n,a.b);s.m();){r=n.gp()
q=Math.atan2(r.b,r.a)*180/3.141592653589793
p=B.a.V((q<0?q+180:q)/4)
o=m.h(0,p)
if(o==null)o=0
if(o>=5)continue
m.D(0,p,o+1)
l.push(r)
if(l.length>=24)break}return l},
jF(d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7={},c8=d1*d1,c9=d0.length
if(c9!==c8)throw A.d(A.bt(c9,"prob","erwartet "+c8+" Werte"))
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
j=B.b.E(k,d1)
i=B.b.t(k,d1)
n=new A.e6(c7,o,d0,s,r)
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
h.push(new A.f(e,f,g))}b=A.es(A.fm(h))
a=b==null?c6:A.et(b)
if(a==null)return c6
f=t.n
a0=A.c([],f)
a1=A.c([],f)
a2=new A.e5(new A.e4(c7,d1,s))
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
a1.push(i+(0.5-a8)/(a9-a8)+0.5)}}}b0=A.c([],t.b)
for(b1=0;b1<4;){a8=a[b1];++b1
a9=a[b1%4]
b2=a8.H(a9)
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
b8.push(1)}}b0.push(b6.length>=4?A.fr(b6,b7,b8,0):c6)}c3=A.c([],n)
for(c9=0.25*d1,b1=0;b1<4;++b1){c4=b0[(b1+3)%4]
c5=b0[b1]
k=c4!=null&&c5!=null?A.bp(c4,c5):c6
if(k==null||k.H(a[b1])>c9)k=a[b1]
c3.push(new A.f(k.a/d1,k.b/d1,g))}return A.eb(c3)},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ck:function ck(){},
cl:function cl(){},
cm:function cm(a,b){this.a=a
this.b=b},
cn:function cn(){},
d7:function d7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b){this.a=a
this.b=b},
du:function du(){},
dv:function dv(){},
dL:function dL(){},
dt:function dt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ds:function ds(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dD:function dD(a){this.a=a},
dG:function dG(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(){},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b){this.a=a
this.b=b},
dy:function dy(a){this.a=a},
dz:function dz(){},
dB:function dB(){},
dA:function dA(){},
dJ:function dJ(){},
dC:function dC(){},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a},
jm(a,b,c,d){var s,r,q,p
if(b<1||c<1||a.length<b*c*4)return null
s=null
if(d!=null)try{s=A.jt(d,a,b,c)}catch(r){}q=s
q=q==null?null:q.a
p=s
if(p==null)p=null
else p=p.b>0.93&&p.c>0.9&&p.d>0.9
return A.jl(a,b,c,q,p===!0)},
jG(a){var s,r,q,p=t.n,o=A.c([],p)
for(s=a.gN(),r=0;r<4;++r){q=s[r]
B.c.K(o,A.c([q.a,q.b],p))}return o},
jE(a){var s,r,q
if(a==null||a.length!==8)return null
s=A.c([],t.n)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q)s.push(a[q])
if(B.c.ah(s,new A.e3()))return null
r=t.X
return new A.aI(new A.f(s[0],s[1],r),new A.f(s[2],s[3],r),new A.f(s[4],s[5],r),new A.f(s[6],s[7],r))},
e3:function e3(){},
jO(e7,e8,e9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5=e7.b,e6=e7.c
if(e5<1||e6<1)throw A.d(A.a7("Das Bild ist leer ("+e5+"x"+e6+").",null))
s=e7.a
r=s.length
q=e5*e6*4
if(r!==q)throw A.d(A.a7("Falsche Pixel-Anzahl: "+r+" Bytes, erwartet "+q+" f\xfcr "+e5+"x"+e6+".",null))
if(e9<1)throw A.d(A.bt(e9,"maxLongSide","muss >= 1 sein"))
r=e8.a
p=r.a*e5
o=r.b*e6
r=e8.b
n=r.a*e5
m=r.b*e6
r=e8.c
l=r.a*e5
k=r.b*e6
r=e8.d
j=r.a*e5
i=r.b*e6
h=A.jD(e8,e5,e6)
g=h.b
f=h.a
if(!isFinite(g)||!isFinite(f))throw A.d(A.a7("Ung\xfcltige Ecken: "+e8.j(0),null))
e=Math.max(g,f)
if(e>e9){d=e9/e
g*=d
f*=d}c=Math.max(1,Math.min(e9,B.a.n(g)))
b=Math.max(1,Math.min(e9,B.a.n(f)))
a=p-n+l-j
a0=o-m+k-i
a1=n-l
a2=j-l
a3=m-k
a4=i-k
a5=a1*a4-a2*a3
r=Math.abs(a)<1e-9&&Math.abs(a0)<1e-9||Math.abs(a5)<1e-9
a6=n-p
a7=j-p
a8=m-o
a9=i-o
if(r){b0=0
b1=0}else{b0=(a*a4-a2*a0)/a5
b1=(a1*a0-a*a3)/a5
a6+=b0*n
a7+=b1*j
a8+=b0*m
a9+=b1*i}b2=a6/c
b3=a8/c
b4=b0/c
b5=a7/b
b6=a9/b
b7=b1/b
b8=p+b2*0.5
b9=o+b3*0.5
c0=1+b4*0.5
c1=new Uint8Array(c*b*4)
c2=e5-1
c3=e6-1
c4=e5*4
for(c5=0,c6=0;c6<b;++c6){c7=c6+0.5
c8=b8+b5*c7
c9=b9+b6*c7
d0=c0+b7*c7
for(d1=0;d1<c;++d1){d2=1/d0
d3=c8*d2-0.5
d4=c9*d2-0.5
c8+=b2
c9+=b3
d0+=b4
if(d3>c2)d3=c2
else if(!(d3>=0))d3=0
if(d4>c3)d4=c3
else if(!(d4>=0))d4=0
d5=B.a.X(d3)
d6=B.a.X(d4)
d7=B.a.X((d3-d5)*256)
d8=B.a.X((d4-d6)*256)
d9=256-d7
e0=256-d8
e1=d6*c4+(d5<<2>>>0)
r=d5<c2
e2=r?e1+4:e1
e3=d6<c3?e1+c4:e1
e4=r?e3+4:e3
c1[c5]=B.b.J((s[e1]*d9+s[e2]*d7)*e0+(s[e3]*d9+s[e4]*d7)*d8+32768,16)
c1[c5+1]=B.b.J((s[e1+1]*d9+s[e2+1]*d7)*e0+(s[e3+1]*d9+s[e4+1]*d7)*d8+32768,16)
c1[c5+2]=B.b.J((s[e1+2]*d9+s[e2+2]*d7)*e0+(s[e3+2]*d9+s[e4+2]*d7)*d8+32768,16)
c1[c5+3]=255
c5+=4}}return new A.bU(c1,c,b)},
jD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=i.a*b,g=i.b*c
i=a.b
s=i.a*b
r=i.b*c
i=a.c
q=i.a*b
p=i.b*c
i=a.d
o=i.a*b
n=i.b*c
m=Math.max(A.dw(h,g,s,r),A.dw(o,n,q,p))
l=Math.max(A.dw(h,g,o,n),A.dw(s,r,q,p))
k=A.ja(A.c([h,g,s,r,q,p,o,n],t.n),b/2,c/2,0.8*Math.max(b,c))
if(!isFinite(k)||k<0.1||k>10){if(l<=0)return new A.be(l,m)
k=m/l}k=A.j5(k)
j=Math.max(l,m/k)
return new A.be(j,j*k)},
ja(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=new A.dN(a,b,a0),j=k.$1(0),i=k.$1(1),h=k.$1(2),g=k.$1(3),f=A.dx(A.dr(j,h),g)/A.dx(A.dr(i,h),g),e=A.dx(A.dr(j,h),i)/A.dx(A.dr(g,h),i),d=t.n,c=A.c([],d)
for(s=J.G(i),r=J.G(j),q=0;q<3;++q)c.push(f*s.h(i,q)-r.h(j,q))
d=A.c([],d)
for(s=J.G(g),q=0;q<3;++q)d.push(e*s.h(g,q)-r.h(j,q))
p=-(c[0]*d[0]+c[1]*d[1])/(c[2]*d[2])
o=p>0?Math.sqrt(p):0/0
n=a1/0.8
if(!(o>0.5*n&&o<1.6*n))p=a1*a1
s=c[0]
r=c[1]
c=c[2]
m=d[0]
l=d[1]
d=d[2]
return Math.sqrt((s*s+r*r+p*c*c)/(m*m+l*l+p*d*d))},
j5(a){var s,r,q,p,o
for(s=0;s<2;++s){r=B.B[s]
for(q=[1/r,r],p=0;p<2;++p){o=q[p]
if(Math.abs(a/o-1)<=0.02)return o}}return a},
dr(a,b){var s=a[1],r=b[2],q=a[2],p=b[1],o=b[0],n=a[0]
return A.c([s*r-q*p,q*o-n*r,n*p-s*o],t.n)},
dx(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},
dw(a,b,c,d){var s=c-a,r=d-b
return Math.sqrt(s*s+r*r)},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
bh(a,b,c){return new A.cc(a,b,c,new Float32Array(a*b*c))},
hx(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=t.d,c=d.a(B.u.b2(a,null)),b=A.cu(t.N,t.bV)
e.a=0
s=new A.cG(e,a0)
for(r=t.j,q=J.ak(r.a(c.h(0,"layers"))),p=t.S;q.m();){o=d.a(q.gp())
n=J.h5(r.a(o.h(0,"shape")),p)
m=s.$1(n.a6(n,1,new A.cF()))
l=s.$1(A.aw(o.h(0,"cout")))
k=A.en(o.h(0,"name"))
A.en(o.h(0,"kind"))
j=A.aw(o.h(0,"stride"))
i=A.fh(o.h(0,"relu"))
h=A.aw(o.h(0,"cin"))
g=A.aw(o.h(0,"cout"))
f=A.fi(o.h(0,"res"))
b.D(0,k,new A.c5(j,i,h,g,m,l,f===!0))}d=e.a
r=a0.byteLength
if(d!==r)throw A.d(A.eP("weights.bin passt nicht zu model.json ("+d+" von "+r+" Bytes gelesen)"))
d=A.aw(c.h(0,"input"))
A.aw(c.h(0,"output"))
return new A.cD(d,b)},
ih(b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b7.b,a6=b8.b,a7=B.b.t(a6+2-3,a5)+1,a8=b8.c,a9=B.b.t(a8+2-3,a5)+1,b0=b7.e,b1=A.bh(b0,a7,a9),b2=b7.f,b3=b8.d,b4=b1.d,b5=a6*a8,b6=a7*a9
for(s=b7.c,r=b7.d,q=b4.$flags|0,p=b7.r,o=0;o<b0;++o){n=o*b6
for(m=0;m<b6;++m){l=p[o]
q&2&&A.u(b4)
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
q&2&&A.u(b4)
b4[a2]=a3+e*a4}}}if(s)A.fB(b4,n,b6)}return b1},
io(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=c1.b,b0=c2.b,b1=B.b.t(b0+2-3,a9)+1,b2=c2.c,b3=B.b.t(b2+2-3,a9)+1,b4=c2.a,b5=A.bh(b4,b1,b3),b6=c1.f,b7=c2.d,b8=b5.d,b9=b0*b2,c0=b1*b3
for(s=c1.c,r=b8.$flags|0,q=a9===1,p=b3-1,o=c1.r,n=0;n<b4;++n){m=n*c0
l=n*b9
for(k=0;k<c0;++k){j=o[n]
r&2&&A.u(b8)
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
r&2&&A.u(b8)
b8[a5]=a6+f*a7}}else for(a4=0;a4<b3;++a4){a8=a4*a9+g-1
if(a8<0||a8>=b2)continue
a5=a1+a4
a6=b8[a5]
a7=b7[a0+a8]
r&2&&A.u(b8)
b8[a5]=a6+f*a7}}}if(s)A.fB(b8,m,c0)}return b5},
ad(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=b4.b,a3=b4.c,a4=a2*a3,a5=b3.d,a6=b3.e,a7=A.bh(a6,a2,a3),a8=b3.f,a9=b3.r,b0=b4.d,b1=a7.d,b2=b3.c
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
if(d<0)d=0}a2&2&&A.u(b1)
b1[j+f]=a
b1[i+f]=b
b1[h+f]=c
b1[g+f]=d}}for(;s<a6;++s){r=s*a5
n=a9[s]
j=s*a4
for(f=0;f<a4;++f){for(e=f,a=n,a0=0;a0<a5;++a0,e+=a4)a+=a8[r+a0]*b0[e]
a3=b2&&a<0?0:a
a2&2&&A.u(b1)
b1[j+f]=a3}}return a7},
dO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.a,f=a.b,e=a.c,d=e*2,c=A.bh(g,f*2,d)
for(s=c.b,r=c.d,q=a.d,p=r.$flags|0,o=0;o<g;++o){n=o*f*e
m=o*s*d
for(l=0;l<s;++l){k=n+(l>>>1)*e
j=m+l*d
for(i=0;i<d;++i){h=q[k+(i>>>1)]
p&2&&A.u(r)
r[j+i]=h}}}return c},
di(a,b){var s,r,q,p,o,n=a.d,m=b.d
for(s=n.length,r=n.$flags|0,q=0;q<s;++q){p=n[q]
o=m[q]
r&2&&A.u(n)
n[q]=p+o}return a},
fB(a,b,c){var s,r,q
for(s=b+c,r=a.$flags|0,q=b;q<s;++q)if(a[q]<0){r&2&&A.u(a)
a[q]=0}},
jt(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(a8<8||a9<8||a7.length<a8*a9*4)return null
s=a6.a
r=a6.ao(A.jJ(a7,a8,a9,s,s))
q=r.a
s=r.b
p=A.jF(s,q)
if(p==null)return null
o=A.c([],t.O)
for(n=p.gN(),m=t.X,l=0;l<4;++l){k=n[l]
o.push(new A.f(k.a*q,k.b*q,m))}j=new A.dT(o)
for(i=0,h=0,g=0,f=0,e=0,d=0,c=0;c<q;++c)for(o=c*q,b=c+0.5,a=0;a<q;++a){a0=a+0.5
for(a1=1/0,a2=0;a2<4;++a2)a1=Math.min(a1,A.dQ(j.$3(a2,a0,b)))
a3=s[o+a]
a4=a1>0
a5=a3>0.5
if(a4&&a5)++i
if(a4||a5)++h
if(a1>1.5){g+=a3;++f}else if(a1<-1.5){e+=1-a3;++d}}s=h===0?0:i/h
o=f===0?0:g/f
return new A.cC(p,s,o,d===0?1:e/d)},
jJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.f8(a4,a6),a1=A.f8(a5,a7),a2=new Float32Array(a6*a5*3)
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
a[b]=B.b.G(B.a.n(h),0,255)
a[b+1]=B.b.G(B.a.n(g),0,255)
a[b+2]=B.b.G(B.a.n(f),0,255)}}return a},
f8(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=a/a0,f=Math.max(g,1),e=B.a.aj(f)*2+1,d=new Int32Array(a0),c=new Int32Array(a0),b=new Float64Array(a0*e)
for(s=0;s<a0;++s){r=(s+0.5)*g
q=Math.max(B.a.V(r-f+0.5),0)
p=Math.min(B.a.V(r+f+0.5),a)
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
c[s]=l}return new A.d9(e,d,c,b)},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
cE:function cE(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.c=b},
cG:function cG(a,b){this.a=a
this.b=b},
cF:function cF(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dT:function dT(a){this.a=a},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jN(a){var s,r,q,p=A.jC(a).a,o=p[0],n=p[1],m=Math.max(o,n)
if(m<60||m<2*Math.min(o,n))return null
s=p[3]
p=p[2]
r=Math.max(s,p)
if(r<20||r<2.5*Math.min(s,p))return null
q=s>p
if(n>o)return q?3:1
return q?0:2},
jC(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=b0.b,a2=b0.c,a3=A.ix(b0),a4=A.ie(a3,a1,a2),a5=a4.length/4|0,a6=new Uint8Array(a5+1),a7=Math.max(a1,a2),a8=a7/12,a9=a7/40
a7=t.t
s=A.c([],a7)
for(r=a1-1,q=a2-1,p=0;p<a5;++p){o=p*4
n=a4[o+2]
m=a4[o]
l=n-m+1
k=a4[o+3]
o=a4[o+1]
j=k-o+1
i=Math.max(l,j)
h=Math.min(l,j)
if(i<4||i>a8||h>a9)continue
if(m===0||o===0)continue
if(n===r||k===q)continue
a6[p+1]=1
s.push(p)}a7=A.c([],a7)
for(r=s.length,g=0;g<s.length;s.length===r||(0,A.t)(s),++g){q=s[g]*4
a7.push(Math.min(a4[q+2]-a4[q],a4[q+3]-a4[q+1])+1)}B.c.O(a7)
r=a7.length
B.c.be(s,new A.e_(a4,r===0?0:a7[r/2|0]/2,a6))
if(s.length<2)return new A.bf([0,0,0,0])
a7=a9*3
f=new A.d5(a4,Math.max(a7,1),A.cu(t.S,t.L))
f.aL(a4,s,a7)
for(a7=s.length,e=0,d=0,g=0;g<s.length;s.length===a7||(0,A.t)(s),++g){p=s[g]
c=f.bb(p)
if(c<0)continue
r=p*4
q=c*4
b=Math.abs((a4[r]+a4[r+2])/2-(a4[q]+a4[q+2])/2)
a=Math.abs((a4[r+1]+a4[r+3])/2-(a4[q+1]+a4[q+3])/2)
if(b>2*a)++e
if(a>2*b)++d}a0=A.i0(a3,a6,a1,a2,d>e)
return new A.bf([e,d,a0.b,a0.a])},
ix(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b5.b,a9=b5.c,b0=b5.a,b1=a8+1,b2=new Int32Array(b1*(a9+1)),b3=a8*a9,b4=new Uint8Array(b3)
for(s=0;s<a9;s=q)for(r=s*a8,q=s+1,p=q*b1,o=s*b1,n=0,m=0;m<a8;++m){l=r+m
k=l*4
j=b0[k]*77+b0[k+1]*150+b0[k+2]*29>>>8
b4[l]=j
n+=j
b2[p+m+1]=b2[o+m+1]+n}i=Math.max(6,B.a.T(Math.max(a8,a9),60))
h=new Int32Array(b3)
for(s=0;s<a9;++s){q=Math.max(0,s-i)
g=Math.min(a9,s+i+1)
for(r=g*b1,p=q*b1,o=g-q,l=s*a8,m=0;m<a8;++m){f=Math.max(0,m-i)
e=Math.min(a8,m+i+1)
d=(b2[r+e]-b2[p+e]-b2[r+f]+b2[p+f])/((e-f)*o)
c=l+m
j=b4[c]
if(j<d*0.8&&d-j>12)h[c]=-1}}b=new Int32Array(b3)
for(b1=a9-1,r=a8-1,a=0,a0=0;a0<b3;++a0){if(h[a0]!==-1)continue;++a
h[a0]=a
b[0]=a0
for(a1=1;a1>0;){--a1
a2=b[a1]
m=B.b.E(a2,a8)
s=B.b.t(a2,a8)
for(a3=Math.max(0,s-1),p=Math.min(b1,s+1),o=m-1,l=m+1;a3<=p;++a3)for(a4=Math.max(0,o),c=Math.min(r,l),a5=a3*a8;a4<=c;++a4){a6=a5+a4
if(h[a6]===-1){h[a6]=a
a7=a1+1
b[a1]=a6
a1=a7}}}}return h},
ie(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.length,r=0,q=0;q<s;++q){p=a[q]
if(p>r)r=p}o=new Int32Array(r*4)
for(n=0;n<r;++n){s=n*4
o[s]=b
o[s+1]=c
o[s+2]=-1
o[s+3]=-1}for(m=0;m<c;++m)for(s=m*b,l=0;l<b;++l){p=a[s+l]
if(p===0)continue
n=(p-1)*4
if(l<o[n])o[n]=l
k=n+1
if(m<o[k])o[k]=m
k=n+2
if(l>o[k])o[k]=l
k=n+3
if(m>o[k])o[k]=m}return o},
ii(a,b){var s=b*4
return(a[s]+a[s+2])/2},
ij(a,b){var s=b*4
return(a[s+1]+a[s+3])/2},
i0(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a7?a6:a5,a0=a7?a5:a6,a1=Math.max(8,B.a.T(Math.max(a5,a6),25)),a2=new Int32Array(a0)
for(s=0,r=0,q=0;q<a;q=p){p=q+a1
o=Math.min(a,p)
B.C.b4(a2,0,a0,0)
for(n=q;n<o;++n)for(m=n*a5,l=0;l<a0;++l){k=a7?a3[m+l]:a3[l*a5+n]
if(k>0&&a4[k]===1)a2[l]=a2[l]+1}for(l=0;l<a0;){if(a2[l]===0){++l
continue}j=l
i=0
for(;;){if(!(j<a0&&a2[j]>0))break
i=Math.max(i,a2[j]);++j}if(j-l<4||i<3){l=j
continue}h=j-1
for(g=l;a2[g]*2<i;)++g
while(a2[h]*2<i)--h
for(f=l,e=0;f<g;++f)e+=a2[f]
for(f=h+1,d=0;f<j;++f)d+=a2[f]
c=a7?d:e
b=a7?e:d
if(c>2*b&&c>=2)++s
if(b>2*c&&b>=2)++r
l=j}}return new A.a2(s,r)},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
ay(){var s=0,r=A.iS(t.o),q,p=2,o=[],n,m,l,k,j,i,h,g
var $async$ay=A.jd(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
i=t.m
s=7
return A.dj(A.e0(j.self.fetch("ml/sheet_net.json"),i),$async$ay)
case 7:n=b
s=8
return A.dj(A.e0(j.self.fetch("ml/sheet_net.bin"),i),$async$ay)
case 8:m=b
if(!n.ok||!m.ok){s=1
break}s=9
return A.dj(A.e0(n.text(),t.N),$async$ay)
case 9:l=b
s=10
return A.dj(A.e0(m.arrayBuffer(),t.k),$async$ay)
case 10:k=b
j=k
A.fk(j,0,null)
j=new DataView(j,0)
$.fx=A.hx(l,j)
p=2
s=6
break
case 4:p=3
g=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.ib(q,r)
case 2:return A.ia(o.at(-1),r)}})
return A.ic($async$ay,r)},
jA(){var s,r,q,p
A.ay()
s=v.G
r=s.self
q=new A.dY()
if(typeof q=="function")A.e7(A.a7("Attempting to rewrap a JS function.",null))
p=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.ig,q)
p[$.eD()]=q
r.onmessage=p
s.self.postMessage({type:"ready"})},
iX(a,b){var s,r,q,p,o,n=null
try{r=a.quad
if(r==null)r=null
else{r=t.J.b(r)?r:new A.L(r,A.C(r).i("L<1,b>"))
r=J.h9(r,new A.dI(),t.i)
r=A.Q(r,r.$ti.i("w.E"))}s=A.jE(r)
if(s!=null)n=A.jI(new A.bU(A.eT(a.pixels,0,null),a.width,a.height),s)}catch(q){n=null}r=v.G.self
p=a.id
o=n
r.postMessage({type:"up",id:p,ms:b.gaE(),up:o})},
dY:function dY(){},
dI:function dI(){},
fQ(a){return v.mangledGlobalNames[a]},
jL(a){throw A.A(new A.bG("Field '"+a+"' has been assigned during initialization."),new Error())},
fP(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a4.a,a2=a1.a,a3=a1.b
a1=a4.b
s=a1.a
r=a1.b
a1=a4.c
q=a1.a
p=a1.b
a1=a4.d
o=a1.a
n=a1.b
m=a2-s+q-o
l=a3-r+p-n
k=s-q
j=o-q
i=r-p
h=n-p
g=k*h-j*i
a1=Math.abs(m)<1e-12&&Math.abs(l)<1e-12||Math.abs(g)<1e-12
f=s-a2
e=o-a2
d=r-a3
c=n-a3
if(a1){b=0
a=0}else{b=(m*h-j*l)/g
a=(k*l-m*i)/g
f+=b*s
e+=a*o
d+=b*r
c+=a*n}a0=b*a5+a*a6+1
return new A.f((f*a5+e*a6+a2)/a0,(d*a5+c*a6+a3)/a0,t.X)},
jI(a,b){var s,r,q,p,o,n=A.jN(A.jO(a,b,1600))
if(n==null)return null
s=b.gN()
r=B.b.E(n,4)
q=new A.aI(s[B.b.E(4-r,4)],s[B.b.E(5-r,4)],s[B.b.E(6-r,4)],s[3-r])
p=A.fP(q,0.5,0)
o=A.fP(q,0.5,1)
return Math.atan2((p.b-o.b)*a.c,(p.a-o.a)*a.b)}},B={}
var w=[A,J,B]
var $={}
A.ee.prototype={}
J.bB.prototype={
L(a,b){return a===b},
gq(a){return A.bS(a)},
j(a){return"Instance of '"+A.bT(a)+"'"},
gu(a){return A.ag(A.ep(this))}}
J.bE.prototype={
j(a){return String(a)},
gq(a){return a?519018:218159},
gu(a){return A.ag(t.y)},
$ik:1,
$ir:1}
J.aL.prototype={
L(a,b){return null==b},
j(a){return"null"},
gq(a){return 0},
$ik:1}
J.aO.prototype={$ip:1}
J.a_.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.bR.prototype={}
J.ab.prototype={}
J.Z.prototype={
j(a){var s=a[$.fS()]
if(s==null)s=a[$.eD()]
if(s==null)return this.aK(a)
return"JavaScript function for "+J.aG(s)}}
J.aN.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.aP.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.j.prototype={
a5(a,b){return new A.L(a,A.C(a).i("@<1>").F(b).i("L<1,2>"))},
b0(a,b){a.$flags&1&&A.u(a,29)
a.push(b)},
be(a,b){a.$flags&1&&A.u(a,16)
this.aW(a,b,!0)},
aW(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.d(A.D(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
K(a,b){var s
a.$flags&1&&A.u(a,"addAll",2)
if(Array.isArray(b)){this.aN(a,b)
return}for(s=J.ak(b);s.m();)a.push(s.gp())},
aN(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.D(a))
for(s=0;s<r;++s)a.push(b[s])},
aH(a,b,c){return new A.S(a,b,A.C(a).i("@<1>").F(c).i("S<1,2>"))},
bc(a,b){var s,r,q=a.length
if(q===0)throw A.d(A.bC())
s=a[0]
for(r=1;r<q;++r){s=b.$2(s,a[r])
if(q!==a.length)throw A.d(A.D(a))}return s},
am(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.D(a))}return s},
a6(a,b,c){return this.am(a,b,c,t.z)},
A(a,b){return a[b]},
l(a,b,c){var s=a.length
if(b>s)throw A.d(A.P(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.d(A.P(c,b,s,"end",null))
if(b===c)return A.c([],A.C(a))
return A.c(a.slice(b,c),A.C(a))},
v(a,b){return this.l(a,b,null)},
Z(a,b,c){A.cA(b,c,a.length)
return A.cJ(a,b,c,A.C(a).c)},
gU(a){if(a.length>0)return a[0]
throw A.d(A.bC())},
gR(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.bC())},
ah(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.d(A.D(a))}return!1},
M(a,b){var s,r,q,p,o
a.$flags&2&&A.u(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.iD()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.C(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aC(b,2))
if(p>0)this.aX(a,p)},
O(a){return this.M(a,null)},
aX(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
j(a){return A.eQ(a,"[","]")},
gB(a){return new J.al(a,a.length,A.C(a).i("al<1>"))},
gq(a){return A.bS(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.u(a,"set length","change the length of")
if(b<0)throw A.d(A.P(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ex(a,b))
return a[b]},
D(a,b,c){a.$flags&2&&A.u(a)
if(!(b>=0&&b<a.length))throw A.d(A.ex(a,b))
a[b]=c},
$ih:1,
$ie:1}
J.bD.prototype={
bk(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bT(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cq.prototype={}
J.al.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.t(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ao.prototype={
C(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga8(b)
if(this.ga8(a)===s)return 0
if(this.ga8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga8(a){return a===0?1/a<0:a<0},
gaq(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
X(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.b3(""+a+".toInt()"))},
aj(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.b3(""+a+".ceil()"))},
V(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.b3(""+a+".floor()"))},
n(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.b3(""+a+".round()"))},
G(a,b,c){if(this.C(b,c)>0)throw A.d(A.je(b))
if(this.C(a,b)<0)return b
if(this.C(a,c)>0)return c
return a},
Y(a,b){var s
if(b>20)throw A.d(A.P(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga8(a))return"-"+s
return s},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
E(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
t(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aA(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.aA(a,b)},
aA(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.b3("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+A.m(b)))},
J(a,b){var s
if(a>0)s=this.aZ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aZ(a,b){return b>31?0:a>>>b},
gu(a){return A.ag(t.H)},
$ib:1}
J.an.prototype={
gaq(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gu(a){return A.ag(t.S)},
$ik:1,
$ia:1}
J.aM.prototype={
gu(a){return A.ag(t.i)},
$ik:1}
J.ap.prototype={
C(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
j(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gu(a){return A.ag(t.N)},
gk(a){return a.length},
$ik:1,
$iy:1}
A.a1.prototype={
gB(a){return new A.bw(J.ak(this.gS()),A.ax(this).i("bw<1,2>"))},
gk(a){return J.a6(this.gS())},
A(a,b){return A.ax(this).y[1].a(J.e8(this.gS(),b))},
j(a){return J.aG(this.gS())}}
A.bw.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())}}
A.a8.prototype={
gS(){return this.a}}
A.b8.prototype={$ih:1}
A.b6.prototype={
h(a,b){return this.$ti.y[1].a(J.ch(this.a,b))},
D(a,b,c){J.h3(this.a,b,this.$ti.c.a(c))},
Z(a,b,c){var s=this.$ti
return A.eN(J.h8(this.a,b,c),s.c,s.y[1])},
$ih:1,
$ie:1}
A.L.prototype={
a5(a,b){return new A.L(this.a,this.$ti.i("@<1>").F(b).i("L<1,2>"))},
gS(){return this.a}}
A.bG.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.cB.prototype={}
A.h.prototype={}
A.w.prototype={
gB(a){var s=this
return new A.H(s,s.gk(s),A.ax(s).i("H<w.E>"))},
b8(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.A(0,0))
if(o!==p.gk(p))throw A.d(A.D(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.A(0,q))
if(o!==p.gk(p))throw A.d(A.D(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.A(0,q))
if(o!==p.gk(p))throw A.d(A.D(p))}return r.charCodeAt(0)==0?r:r}}}
A.b1.prototype={
gaS(){var s=J.a6(this.a),r=this.c
if(r==null||r>s)return s
return r},
gb_(){var s=J.a6(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.a6(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
A(a,b){var s=this,r=s.gb_()+b
if(b<0||r>=s.gaS())throw A.d(A.ed(b,s.gk(0),s,"index"))
return J.e8(s.a,r)}}
A.H.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aD(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.D(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
A.S.prototype={
gk(a){return J.a6(this.a)},
A(a,b){return this.b.$1(J.e8(this.a,b))}}
A.W.prototype={
gB(a){return new A.b4(J.ak(this.a),this.b)}}
A.b4.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()}}
A.aK.prototype={}
A.aY.prototype={
gk(a){return J.a6(this.a)},
A(a,b){var s=this.a,r=J.aD(s)
return r.A(s,r.gk(s)-1-b)}}
A.bn.prototype={}
A.a2.prototype={$r:"+(1,2)",$s:1}
A.be.prototype={$r:"+height,width(1,2)",$s:2}
A.bf.prototype={$r:"+across,down,low,up(1,2,3,4)",$s:3}
A.c9.prototype={$r:"+label,maxX,maxY,minX,minY(1,2,3,4,5)",$s:4}
A.cy.prototype={
$0(){return B.a.V(1000*this.a.now())},
$S:11}
A.aZ.prototype={}
A.cM.prototype={
I(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aW.prototype={
j(a){return"Null check operator used on a null value"}}
A.bF.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bY.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cx.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aJ.prototype={}
A.bg.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia0:1}
A.a9.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fR(r==null?"unknown":r)+"'"},
gbl(){return this},
$C:"$1",
$R:1,
$D:null}
A.ci.prototype={$C:"$0",$R:0}
A.cj.prototype={$C:"$2",$R:2}
A.cL.prototype={}
A.cH.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fR(s)+"'"}}
A.aH.prototype={
L(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aH))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.fL(this.a)^A.bS(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bT(this.a)+"'")}}
A.bV.prototype={
j(a){return"RuntimeError: "+this.a}}
A.aQ.prototype={
gk(a){return this.a},
gW(){return new A.aa(this,this.$ti.i("aa<1>"))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.b6(b)},
b6(a){var s,r,q=this.d
if(q==null)return null
s=this.aU(q,a)
r=this.aG(s,a)
if(r<0)return null
return s[r].b},
D(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ar(s==null?m.b=m.af():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ar(r==null?m.c=m.af():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.af()
p=J.O(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.ag(b,c)]
else{n=m.aG(o,b)
if(n>=0)o[n].b=c
else o.push(m.ag(b,c))}}},
a7(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.D(s))
r=r.c}},
ar(a,b,c){var s=a[b]
if(s==null)a[b]=this.ag(b,c)
else s.b=c},
ag(a,b){var s=this,r=new A.ct(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aU(a,b){return a[J.O(b)&1073741823]},
aG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bs(a[r].a,b))return r
return-1},
j(a){return A.eR(this)},
af(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ct.prototype={}
A.aa.prototype={
gk(a){return this.a.a},
gB(a){var s=this.a
return new A.bH(s,s.r,s.e)}}
A.bH.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.D(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dU.prototype={
$1(a){return this.a(a)},
$S:19}
A.dV.prototype={
$2(a,b){return this.a(a,b)},
$S:18}
A.dW.prototype={
$1(a){return this.a(a)},
$S:28}
A.bd.prototype={
j(a){return this.aC(!1)},
aC(a){var s,r,q,p,o,n=this.aT(),m=this.ae(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.eW(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aT(){var s,r=this.$s
while($.d8.length<=r)$.d8.push(null)
s=$.d8[r]
if(s==null){s=this.aQ()
$.d8[r]=s}return s},
aQ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.c(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.hr(k,!1,t.K)
k.$flags=3
return k}}
A.c7.prototype={
ae(){return[this.a,this.b]},
L(a,b){if(b==null)return!1
return b instanceof A.c7&&this.$s===b.$s&&J.bs(this.a,b.a)&&J.bs(this.b,b.b)},
gq(a){return A.eU(this.$s,this.a,this.b,B.e)}}
A.c8.prototype={
ae(){return this.a},
L(a,b){if(b==null)return!1
return b instanceof A.c8&&this.$s===b.$s&&A.hQ(this.a,b.a)},
gq(a){return A.eU(this.$s,A.hs(this.a),B.e,B.e)}}
A.ar.prototype={
gu(a){return B.D},
$ik:1}
A.aq.prototype={$iaq:1}
A.aU.prototype={}
A.bJ.prototype={
gu(a){return B.E},
$ik:1}
A.as.prototype={
gk(a){return a.length},
$iE:1}
A.aS.prototype={
h(a,b){A.X(b,a,a.length)
return a[b]},
D(a,b,c){a.$flags&2&&A.u(a)
A.X(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1}
A.aT.prototype={
D(a,b,c){a.$flags&2&&A.u(a)
A.X(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1}
A.bK.prototype={
gu(a){return B.F},
l(a,b,c){return new Float32Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.bL.prototype={
gu(a){return B.G},
l(a,b,c){return new Float64Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.bM.prototype={
gu(a){return B.H},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Int16Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.aR.prototype={
gu(a){return B.I},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Int32Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.bN.prototype={
gu(a){return B.J},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Int8Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.bO.prototype={
gu(a){return B.L},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint16Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.bP.prototype={
gu(a){return B.M},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint32Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.aV.prototype={
gu(a){return B.N},
gk(a){return a.length},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.bQ.prototype={
gu(a){return B.O},
gk(a){return a.length},
h(a,b){A.X(b,a,a.length)
return a[b]},
l(a,b,c){return new Uint8Array(a.subarray(b,A.a4(b,c,a.length)))},
v(a,b){return this.l(a,b,null)},
$ik:1}
A.b9.prototype={}
A.ba.prototype={}
A.bb.prototype={}
A.bc.prototype={}
A.M.prototype={
i(a){return A.bm(v.typeUniverse,this,a)},
F(a){return A.fe(v.typeUniverse,this,a)}}
A.c2.prototype={}
A.de.prototype={
j(a){return A.F(this.a,null)}}
A.c1.prototype={
j(a){return this.a}}
A.bi.prototype={$iU:1}
A.cP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cO.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.cQ.prototype={
$0(){this.a.$0()},
$S:5}
A.cR.prototype={
$0(){this.a.$0()},
$S:5}
A.dc.prototype={
aM(a,b){if(self.setTimeout!=null)self.setTimeout(A.aC(new A.dd(this,b),0),a)
else throw A.d(A.b3("`setTimeout()` not found."))}}
A.dd.prototype={
$0(){this.b.$0()},
$S:0}
A.bZ.prototype={
ak(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.au(a)
else{s=r.a
if(r.$ti.i("am<1>").b(a))s.av(a)
else s.aw(a)}},
al(a,b){var s=this.a
if(this.b)s.ab(new A.K(a,b))
else s.aa(new A.K(a,b))}}
A.dk.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dl.prototype={
$2(a,b){this.a.$2(1,new A.aJ(a,b))},
$S:17}
A.dP.prototype={
$2(a,b){this.a(a,b)},
$S:16}
A.K.prototype={
j(a){return A.m(this.a)},
$io:1,
ga_(){return this.b}}
A.c0.prototype={
al(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.eZ("Future already completed"))
s.aa(A.iC(a,b))},
aD(a){return this.al(a,null)}}
A.b5.prototype={
ak(a){var s=this.a
if((s.a&30)!==0)throw A.d(A.eZ("Future already completed"))
s.au(a)}}
A.au.prototype={
b9(a){if((this.c&15)!==6)return!0
return this.b.b.ap(this.d,a.a)},
b5(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.bg(r,p,a.b)
else q=o.ap(r,p)
try{p=q
return p}catch(s){if(t._.b(A.aj(s))){if((this.c&1)!==0)throw A.d(A.a7("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a7("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
aJ(a,b,c){var s,r=$.q
if(r===B.d){if(!t.Q.b(b)&&!t.v.b(b))throw A.d(A.bt(b,"onError",u.c))}else b=A.iZ(b,r)
s=new A.z(r,c.i("z<0>"))
this.a9(new A.au(s,3,a,b,this.$ti.i("@<1>").F(c).i("au<1,2>")))
return s},
aB(a,b,c){var s=new A.z($.q,c.i("z<0>"))
this.a9(new A.au(s,19,a,b,this.$ti.i("@<1>").F(c).i("au<1,2>")))
return s},
aY(a){this.a=this.a&1|16
this.c=a},
a0(a){this.a=a.a&30|this.a&1
this.c=a.c},
a9(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a9(a)
return}s.a0(r)}A.ce(null,null,s.b,new A.cV(s,a))}},
az(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.az(a)
return}n.a0(s)}m.a=n.a3(a)
A.ce(null,null,n.b,new A.cZ(m,n))}},
a2(){var s=this.c
this.c=null
return this.a3(s)},
a3(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aw(a){var s=this,r=s.a2()
s.a=8
s.c=a
A.av(s,r)},
aP(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a2()
q.a0(a)
A.av(q,r)},
ab(a){var s=this.a2()
this.aY(a)
A.av(this,s)},
au(a){if(this.$ti.i("am<1>").b(a)){this.av(a)
return}this.aO(a)},
aO(a){this.a^=2
A.ce(null,null,this.b,new A.cX(this,a))},
av(a){A.ek(a,this,!1)
return},
aa(a){this.a^=2
A.ce(null,null,this.b,new A.cW(this,a))},
$iam:1}
A.cV.prototype={
$0(){A.av(this.a,this.b)},
$S:0}
A.cZ.prototype={
$0(){A.av(this.b,this.a.a)},
$S:0}
A.cY.prototype={
$0(){A.ek(this.a.a,this.b,!0)},
$S:0}
A.cX.prototype={
$0(){this.a.aw(this.b)},
$S:0}
A.cW.prototype={
$0(){this.a.ab(this.b)},
$S:0}
A.d1.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.ao(q.d)}catch(p){s=A.aj(p)
r=A.aE(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ea(q)
n=k.a
n.c=new A.K(q,o)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.aJ(new A.d2(l,m),new A.d3(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d2.prototype={
$1(a){this.a.aP(this.b)},
$S:4}
A.d3.prototype={
$2(a,b){this.a.ab(new A.K(a,b))},
$S:14}
A.d0.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ap(p.d,this.b)}catch(o){s=A.aj(o)
r=A.aE(o)
q=s
p=r
if(p==null)p=A.ea(q)
n=this.a
n.c=new A.K(q,p)
n.b=!0}},
$S:0}
A.d_.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.b9(s)&&p.a.e!=null){p.c=p.a.b5(s)
p.b=!1}}catch(o){r=A.aj(o)
q=A.aE(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ea(p)
m=l.b
m.c=new A.K(p,n)
p=m}p.b=!0}},
$S:0}
A.c_.prototype={}
A.ca.prototype={}
A.dh.prototype={}
A.da.prototype={
bi(a){var s,r,q
try{if(B.d===$.q){a.$0()
return}A.fC(null,null,this,a)}catch(q){s=A.aj(q)
r=A.aE(q)
A.eu(s,r)}},
b1(a){return new A.db(this,a)},
bf(a){if($.q===B.d)return a.$0()
return A.fC(null,null,this,a)},
ao(a){return this.bf(a,t.z)},
bj(a,b){if($.q===B.d)return a.$1(b)
return A.j0(null,null,this,a,b)},
ap(a,b){var s=t.z
return this.bj(a,b,s,s)},
bh(a,b,c){if($.q===B.d)return a.$2(b,c)
return A.j_(null,null,this,a,b,c)},
bg(a,b,c){var s=t.z
return this.bh(a,b,c,s,s,s)},
bd(a){return a},
aI(a){var s=t.z
return this.bd(a,s,s,s)}}
A.db.prototype={
$0(){return this.a.bi(this.b)},
$S:0}
A.dK.prototype={
$0(){A.hi(this.a,this.b)},
$S:0}
A.i.prototype={
gB(a){return new A.H(a,this.gk(a),A.Y(a).i("H<i.E>"))},
A(a,b){return this.h(a,b)},
gU(a){if(this.gk(a)===0)throw A.d(A.bC())
return this.h(a,0)},
gR(a){if(this.gk(a)===0)throw A.d(A.bC())
return this.h(a,this.gk(a)-1)},
aH(a,b,c){return new A.S(a,b,A.Y(a).i("@<i.E>").F(c).i("S<1,2>"))},
am(a,b,c){var s,r,q=this.gk(a)
for(s=b,r=0;r<q;++r){s=c.$2(s,this.h(a,r))
if(q!==this.gk(a))throw A.d(A.D(a))}return s},
a6(a,b,c){return this.am(a,b,c,t.z)},
a5(a,b){return new A.L(a,A.Y(a).i("@<i.E>").F(b).i("L<1,2>"))},
l(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.cA(b,c,r)
s=A.Q(this.Z(a,b,c),A.Y(a).i("i.E"))
return s},
v(a,b){return this.l(a,b,null)},
Z(a,b,c){A.cA(b,c,this.gk(a))
return A.cJ(a,b,c,A.Y(a).i("i.E"))},
b4(a,b,c,d){var s
A.cA(b,c,this.gk(a))
for(s=b;s<c;++s)this.D(a,s,d)},
j(a){return A.eQ(a,"[","]")}}
A.R.prototype={
a7(a,b){var s,r,q,p
for(s=this.gW(),s=s.gB(s),r=A.ax(this).i("R.V");s.m();){q=s.gp()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gk(a){var s=this.gW()
return s.gk(s)},
j(a){return A.eR(this)},
$ibI:1}
A.cv.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:13}
A.c3.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.aV(b):s}},
gk(a){return this.b==null?this.c.a:this.a1().length},
gW(){if(this.b==null){var s=this.c
return new A.aa(s,s.$ti.i("aa<1>"))}return new A.c4(this)},
a7(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a7(0,b)
s=o.a1()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dn(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.D(o))}},
a1(){var s=this.c
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
aV(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dn(this.a[a])
return this.b[a]=s}}
A.c4.prototype={
gk(a){return this.a.gk(0)},
A(a,b){var s=this.a
return s.b==null?s.gW().A(0,b):s.a1()[b]},
gB(a){var s=this.a
if(s.b==null){s=s.gW()
s=s.gB(s)}else{s=s.a1()
s=new J.al(s,s.length,A.C(s).i("al<1>"))}return s}}
A.bx.prototype={}
A.bz.prototype={}
A.cr.prototype={
b2(a,b){var s=A.iV(a,this.gb3().a)
return s},
gb3(){return B.y}}
A.cs.prototype={}
A.o.prototype={
ga_(){return A.hu(this)}}
A.bu.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.co(s)
return"Assertion failed"}}
A.U.prototype={}
A.J.prototype={
gad(){return"Invalid argument"+(!this.a?"(s)":"")},
gac(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gad()+q+o
if(!s.a)return n
return n+s.gac()+": "+A.co(s.gan())},
gan(){return this.b}}
A.aX.prototype={
gan(){return this.b},
gad(){return"RangeError"},
gac(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bA.prototype={
gan(){return this.b},
gad(){return"RangeError"},
gac(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.b2.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bX.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.b0.prototype={
j(a){return"Bad state: "+this.a}}
A.by.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.co(s)+"."}}
A.b_.prototype={
j(a){return"Stack Overflow"},
ga_(){return null},
$io:1}
A.cU.prototype={
j(a){return"Exception: "+this.a}}
A.cp.prototype={
j(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.n.prototype={
a5(a,b){return A.eN(this,A.ax(this).i("n.E"),b)},
gk(a){var s,r=this.gB(this)
for(s=0;r.m();)++s
return s},
A(a,b){var s,r
A.ei(b,"index")
s=this.gB(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.ed(b,b-r,this,"index"))},
j(a){return A.hn(this,"(",")")}}
A.B.prototype={
gq(a){return A.l.prototype.gq.call(this,0)},
j(a){return"null"}}
A.l.prototype={$il:1,
L(a,b){return this===b},
gq(a){return A.bS(this)},
j(a){return"Instance of '"+A.bT(this)+"'"},
gu(a){return A.jr(this)},
toString(){return this.j(this)}}
A.cb.prototype={
j(a){return""},
$ia0:1}
A.cI.prototype={
gaE(){var s,r=this.b
if(r==null)r=$.eh.$0()
s=r-this.a
if($.eE()===1000)return s
return B.b.T(s,1000)}}
A.bW.prototype={
gk(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cw.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e1.prototype={
$1(a){return this.a.ak(a)},
$S:2}
A.e2.prototype={
$1(a){if(a==null)return this.a.aD(new A.cw(a===undefined))
return this.a.aD(a)},
$S:2}
A.f.prototype={
j(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
L(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b},
gq(a){return A.f0(B.a.gq(this.a),B.a.gq(this.b),0)},
H(a){var s=this.a-a.a,r=this.b-a.b
return Math.sqrt(s*s+r*r)}}
A.aI.prototype={
gN(){var s=this
return A.c([s.a,s.b,s.c,s.d],t.O)},
gb7(){var s,r,q,p,o,n,m,l,k,j=this.gN()
for(s=null,r=0;r<4;r=p){q=j[r]
p=r+1
o=j[p%4]
n=j[(r+2)%4]
m=o.a
l=o.b
k=(m-q.a)*(n.b-l)-(l-q.b)*(n.a-m)
if(Math.abs(k)<1e-9)return!1
if(s==null)s=J.eI(k)
if(J.eI(k)!==s)return!1}return!0},
j(a){var s=this.gN()
return"DocumentQuad("+new A.S(s,new A.cn(),A.C(s).i("S<1,y>")).b8(0,", ")+")"}}
A.ck.prototype={
$2(a,b){return a+b.a},
$S:12}
A.cl.prototype={
$2(a,b){return a+b.b},
$S:12}
A.cm.prototype={
$2(a,b){var s=this.a,r=this.b
return B.a.C(Math.atan2(a.b-s,a.a-r),Math.atan2(b.b-s,b.a-r))},
$S:3}
A.cn.prototype={
$1(a){return"("+B.a.Y(a.a,3)+", "+B.a.Y(a.b,3)+")"},
$S:15}
A.d7.prototype={}
A.v.prototype={
gaF(){return Math.abs(this.b)>=Math.abs(this.a)}}
A.c6.prototype={
ba(a,b){var s,r,q,p,o,n,m=b-a
if(m<4)return B.m
s=this.c
r=s.length-1
q=this.b
p=B.b.G(B.a.n(a)-q,0,r)
o=B.b.G(B.a.n(b)-q,0,r)
q=this.d
n=q[o]-q[p]
if(n<=0)return B.m
return new A.a2((s[o]-s[p])/n,n/m)}}
A.at.prototype={}
A.du.prototype={
$1(a){return a.gaF()},
$S:10}
A.dv.prototype={
$1(a){return!a.gaF()},
$S:10}
A.dL.prototype={
$1(a){return a},
$S:9}
A.dt.prototype={
$1(a){var s=this,r=a*s.c,q=s.a,p=B.a.n(s.b+r*q.a),o=B.a.n(s.d+r*q.b)
return p<0||o<0||p>=s.e||o>=s.f?-1:o*s.e+p},
$S:8}
A.ds.prototype={
$1(a){var s=this.a.$1(a)
return s<0?-1:this.b[s]},
$S:8}
A.d4.prototype={}
A.dD.prototype={
$2(a,b){var s=this.a
return B.b.C(s[b],s[a])},
$S:7}
A.dG.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this,k=A.c([],t.h),j=b?l.a:l.b,i=new A.dH(b,(b?l.b:l.a)/2)
for(s=0.12*j,r=0;r<a.length;r=q)for(q=r+1,p=q;p<a.length;++p){o=a[r]
n=a[p]
if(i.$1(o)>i.$1(n)){m=n
n=o
o=m}if(i.$1(n)-i.$1(o)<s)continue
if(Math.abs(o.a*n.a+o.b*n.b)<0.82)continue
k.push(new A.a2(o,n))}return k},
$S:20}
A.dH.prototype={
$1(a){var s=this.b,r=a.c,q=a.a,p=a.b
return this.a?(r-q*s)/p:(r-p*s)/q},
$S:21}
A.dE.prototype={
$1(a){var s=this,r=a.a,q=!0
if(!(r<s.a))if(!(r>s.b)){r=a.b
r=r<s.c||r>s.d}else r=q
else r=q
return r},
$S:22}
A.dF.prototype={
$2(a,b){return B.a.C(b.a,a.a)},
$S:23}
A.cS.prototype={
ai(a){var s=this.b,r=t.n,q=this.a
return s==null?A.c([q[a]],r):A.c([q[a],s[a],this.c[a]],r)}}
A.cT.prototype={
$0(){var s,r,q,p,o=A.c([],t.n)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.t)(s),++p)o.push(J.ch(s[p],q))
B.c.O(o)
return o[o.length/2|0]},
$S:24}
A.dy.prototype={
$2(a,b){var s,r=this.a,q=r[0],p=q.a,o=r[1]
p+=(o.a-p)*a
q=q.b
q+=(o.b-q)*a
o=r[3]
s=o.a
r=r[2]
o=o.b
return new A.f(p+(s+(r.a-s)*a-p)*b,q+(o+(r.b-o)*a-q)*b,t.X)},
$S:25}
A.dz.prototype={
$2(a,b){return B.a.C(J.ch(a,0),J.ch(b,0))},
$S:26}
A.dB.prototype={
$2(a,b){var s,r,q=A.c([],t.n)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q.push(A.b7(a[r],b))
B.c.O(q)
s=q.length
return s===0?0:q[s/2|0]},
$S:27}
A.dA.prototype={
$2(a,b){return a+b},
$S:42}
A.dJ.prototype={
$1(a){return a==null},
$S:29}
A.dC.prototype={
$1(a){return a},
$S:9}
A.dm.prototype={
$2(a,b){var s=b.a,r=a.a
return B.b.C((s[1]-s[3])*(s[2]-s[4]),(r[1]-r[3])*(r[2]-r[4]))},
$S:30}
A.dp.prototype={
$2(a,b){var s=a.a,r=b.a
return s!==r?B.a.C(s,r):B.a.C(a.b,b.b)},
$S:3}
A.dq.prototype={
$3(a,b,c){var s=a.a,r=a.b
return(b.a-s)*(c.b-r)-(b.b-r)*(c.a-s)},
$S:31}
A.e6.prototype={
$1(a){var s,r,q=this
if(q.c[a]>0.5&&q.d[a]===0){s=q.d
r=q.a.a
s.$flags&2&&A.u(s)
s[a]=r
r=q.e
s=q.b.a++
r.$flags&2&&A.u(r)
r[s]=a}},
$S:32}
A.e4.prototype={
$2(a,b){var s=!1
if(a>=0)if(b>=0){s=this.b
s=a<s&&b<s&&this.c[b*s+a]===this.a.b}return s},
$S:6}
A.e5.prototype={
$2(a,b){var s=this.a
return s.$2(a,b)||s.$2(a-1,b)||s.$2(a+1,b)||s.$2(a,b-1)||s.$2(a,b+1)},
$S:6}
A.e3.prototype={
$1(a){return!isFinite(a)},
$S:34}
A.bU.prototype={}
A.dN.prototype={
$1(a){var s=this.a,r=2*a
return A.c([s[r]-this.b,s[r+1]-this.c,1],t.n)},
$S:35}
A.cc.prototype={}
A.c5.prototype={}
A.cE.prototype={}
A.cD.prototype={
ao(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=a1.length,a=c*c,a0=a*3
if(b!==a0)throw A.d(A.a7("Erwartet "+a0+" Bytes, bekommen "+b,null))
s=A.bh(3,c,c)
for(b=s.d,a0=b.$flags|0,r=2*a,q=0;q<a;++q){p=q*3
o=a1[p]
a0&2&&A.u(b)
b[q]=o/255-0.5
b[a+q]=a1[p+1]/255-0.5
b[r+q]=a1[p+2]/255-0.5}b=d.c
a=b.h(0,"stem")
a.toString
n=d.P("s1.0",A.ih(a,s))
m=d.a4("s2",2,n)
l=d.a4("s3",2,m)
k=d.a4("s4",3,l)
j=d.aR(d.a4("s5",3,k))
a=b.h(0,"l5")
a.toString
a=A.dO(A.ad(a,j))
a0=b.h(0,"l4")
a0.toString
a0=A.dO(d.P("d4",A.di(a,A.ad(a0,k))))
a=b.h(0,"l3")
a.toString
a=A.dO(d.P("d3",A.di(a0,A.ad(a,l))))
a0=b.h(0,"l2")
a0.toString
a0=A.dO(d.P("d2",A.di(a,A.ad(a0,m))))
a=b.h(0,"l1")
a.toString
i=d.P("d1",A.di(a0,A.ad(a,n)))
b=b.h(0,"head")
b.toString
h=A.ad(b,i)
b=h.c
g=h.b*b
f=new Float32Array(g)
e=new Float32Array(g)
for(a=h.d,q=0;q<g;++q){f[q]=1/(1+Math.exp(-a[q]))
e[q]=1/(1+Math.exp(-a[g+q]))}return new A.cE(b,f)},
a4(a,b,c){var s,r
for(s=a+".",r=0;r<b;++r)c=this.P(s+r,c)
return c},
P(a,b){var s,r,q,p,o,n,m=this.c,l=m.h(0,a+".pw")
l.toString
m=m.h(0,a+".dw")
m.toString
s=A.ad(l,A.io(m,b))
if(!l.w)return s
r=s.d
q=b.d
for(m=r.length,l=r.$flags|0,p=0;p<m;++p){o=r[p]+q[p]
n=o>0?o:0
l&2&&A.u(r)
r[p]=n}return s},
aR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.c.h(0,"ctx")
d.toString
s=a.b
r=a.c
q=s*r
p=a.a
o=new Float32Array(p)
for(n=a.d,m=0;m<p;++m){for(l=m*q,k=0,j=0;j<q;++j)k+=n[l+j]
o[m]=k/q}i=A.ad(d,new A.cc(p,1,1,o))
h=A.bh(p,s,r)
for(d=h.d,s=i.d,m=0;m<p;++m){g=s[m]
for(r=m*q,j=0;j<q;++j){l=r+j
f=n[l]+g
e=f>0?f:0
d.$flags&2&&A.u(d)
d[l]=e}}return h}}
A.cG.prototype={
$1(a){var s,r,q,p=new Float32Array(a)
for(s=this.b,r=this.a,q=0;q<a;++q){p[q]=s.getFloat32(r.a,!0)
r.a+=4}return p},
$S:36}
A.cF.prototype={
$2(a,b){return a*b},
$S:7}
A.cC.prototype={
j(a){var s=this
return"SheetGuess(fit "+B.a.Y(s.b,3)+", innen "+B.a.Y(s.c,3)+", au\xdfen "+B.a.Y(s.d,3)+", "+s.a.j(0)+")"}}
A.dT.prototype={
$3(a,b,c){var s,r=this.a,q=r[a],p=r[(a+1)%4],o=q.H(p)
if(o===0)return 0
r=q.a
s=q.b
return((p.a-r)*(c-s)-(p.b-s)*(b-r))/o},
$S:37}
A.d9.prototype={}
A.e_.prototype={
$1(a){var s=this.a,r=a*4,q=s[r+2]-s[r]+1,p=s[r+3]-s[r+1]+1,o=Math.min(q,p)
if(o>=this.b||Math.max(q,p)<4*o)return!1
s=this.c
s.$flags&2&&A.u(s)
s[a+1]=0
return!0},
$S:38}
A.d5.prototype={
aL(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.length,r=this.c,q=this.a,p=this.b,o=t.t,n=0;n<b.length;b.length===s||(0,A.t)(b),++n){m=b[n]
l=m*4
k=B.a.t((q[l]+q[l+2])/2,p)
k=B.a.t((q[l+1]+q[l+3])/2,p)*1e5+k
l=r.h(0,k)
if(l==null){l=A.c([],o)
r.D(0,k,l)}l.push(m)}},
bb(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this.a,a2=this.b,a3=B.a.t(A.ii(a1,a5),a2),a4=B.a.t(A.ij(a1,a5),a2)
for(s=a4-1,a2=a4+1,r=a3-1,q=a3+1,p=a5*4,o=p+2,n=p+1,m=p+3,l=this.c,k=-1,j=1/0;s<=a2;++s)for(i=s*1e5,h=r;h<=q;++h){g=l.h(0,i+h)
if(g==null)g=B.A
f=g.length
e=0
for(;e<f;++e){d=g[e]
if(d===a5)continue
c=d*4
b=(a1[p]+a1[o])/2-(a1[c]+a1[c+2])/2
a=(a1[n]+a1[m])/2-(a1[c+1]+a1[c+3])/2
a0=b*b+a*a
if(a0<j){j=a0
k=d}}}return k}}
A.dY.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.fj(a.data),g=new A.cI()
$.eE()
n=$.eh.$0()
g.a=n
g.b=null
s=g
if(J.bs(h.kind,"up")){A.iX(h,s)
return}try{r=A.jm(A.eT(h.pixels,0,null),h.width,h.height,$.fx)
n=v.G.self
m=h.id
if(r==null)q=null
else{q=A.c([],t.n)
for(l=A.jG(r),k=l.length,j=0;j<l.length;l.length===k||(0,A.t)(l),++j){p=l[j]
J.h4(q,p)}q=t.c.a(q)}n.postMessage({type:"result",id:m,quad:q,ms:s.gaE()})}catch(i){o=A.aj(i)
q=v.G.self
q.postMessage({type:"error",id:h.id,error:A.m(o)})}},
$S:39}
A.dI.prototype={
$1(a){return a},
$S:40};(function aliases(){var s=J.a_.prototype
s.aK=s.j})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1
s(J,"iD","hq",41)
r(A,"iQ","ht",11)
q(A,"jf","hE",1)
q(A,"jg","hF",1)
q(A,"jh","hG",1)
r(A,"fG","j7",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.l,null)
q(A.l,[A.ee,J.bB,A.aZ,J.al,A.n,A.bw,A.o,A.cB,A.H,A.b4,A.aK,A.bd,A.a9,A.cM,A.cx,A.aJ,A.bg,A.R,A.ct,A.bH,A.M,A.c2,A.de,A.dc,A.bZ,A.K,A.c0,A.au,A.z,A.c_,A.ca,A.dh,A.i,A.bx,A.bz,A.b_,A.cU,A.cp,A.B,A.cb,A.cI,A.bW,A.cw,A.f,A.aI,A.d7,A.v,A.c6,A.at,A.d4,A.cS,A.bU,A.cc,A.c5,A.cE,A.cD,A.cC,A.d9,A.d5])
q(J.bB,[J.bE,J.aL,J.aO,J.aN,J.aP,J.ao,J.ap])
q(J.aO,[J.a_,J.j,A.ar,A.aU])
q(J.a_,[J.bR,J.ab,J.Z])
r(J.bD,A.aZ)
r(J.cq,J.j)
q(J.ao,[J.an,J.aM])
q(A.n,[A.a1,A.h,A.W])
q(A.a1,[A.a8,A.bn])
r(A.b8,A.a8)
r(A.b6,A.bn)
r(A.L,A.b6)
q(A.o,[A.bG,A.U,A.bF,A.bY,A.bV,A.c1,A.bu,A.J,A.b2,A.bX,A.b0,A.by])
q(A.h,[A.w,A.aa])
q(A.w,[A.b1,A.S,A.aY,A.c4])
q(A.bd,[A.c7,A.c8])
q(A.c7,[A.a2,A.be])
q(A.c8,[A.bf,A.c9])
q(A.a9,[A.ci,A.cj,A.cL,A.dU,A.dW,A.cP,A.cO,A.dk,A.d2,A.e1,A.e2,A.cn,A.du,A.dv,A.dL,A.dt,A.ds,A.dH,A.dE,A.dJ,A.dC,A.dq,A.e6,A.e3,A.dN,A.cG,A.dT,A.e_,A.dY,A.dI])
q(A.ci,[A.cy,A.cQ,A.cR,A.dd,A.cV,A.cZ,A.cY,A.cX,A.cW,A.d1,A.d0,A.d_,A.db,A.dK,A.cT])
r(A.aW,A.U)
q(A.cL,[A.cH,A.aH])
q(A.R,[A.aQ,A.c3])
q(A.cj,[A.dV,A.dl,A.dP,A.d3,A.cv,A.ck,A.cl,A.cm,A.dD,A.dG,A.dF,A.dy,A.dz,A.dB,A.dA,A.dm,A.dp,A.e4,A.e5,A.cF])
r(A.aq,A.ar)
q(A.aU,[A.bJ,A.as])
q(A.as,[A.b9,A.bb])
r(A.ba,A.b9)
r(A.aS,A.ba)
r(A.bc,A.bb)
r(A.aT,A.bc)
q(A.aS,[A.bK,A.bL])
q(A.aT,[A.bM,A.aR,A.bN,A.bO,A.bP,A.aV,A.bQ])
r(A.bi,A.c1)
r(A.b5,A.c0)
r(A.da,A.dh)
r(A.cr,A.bx)
r(A.cs,A.bz)
q(A.J,[A.aX,A.bA])
s(A.bn,A.i)
s(A.b9,A.i)
s(A.ba,A.aK)
s(A.bb,A.i)
s(A.bc,A.aK)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",b:"double",fK:"num",y:"String",r:"bool",B:"Null",e:"List",l:"Object",bI:"Map",p:"JSObject"},mangledNames:{},types:["~()","~(~())","~(@)","a(f<b>,f<b>)","B(@)","B()","r(a,a)","a(a,a)","a(b)","r(r)","r(v)","a()","b(b,f<b>)","~(l?,l?)","B(l,a0)","y(f<b>)","~(a,@)","B(@,a0)","@(@,y)","@(@)","e<+(v,v)>(e<v>,r)","b(v)","r(f<b>)","a(+(b,e<f<b>>),+(b,e<f<b>>))","b()","f<b>(b,b)","a(e<b>,e<b>)","b(e<e<b>>,e<b>)","@(y)","r(v?)","a(+label,maxX,maxY,minX,minY(a,a,a,a,a),+label,maxX,maxY,minX,minY(a,a,a,a,a))","b(f<b>,f<b>,f<b>)","~(a)","B(~())","r(b)","e<b>(a)","ec(a)","b(a,b,b)","r(a)","B(p)","b(b)","a(@,@)","b(b,b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a2&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.be&&a.b(c.a)&&b.b(c.b),"4;across,down,low,up":a=>b=>b instanceof A.bf&&A.fM(a,b.a),"5;label,maxX,maxY,minX,minY":a=>b=>b instanceof A.c9&&A.fM(a,b.a)}}
A.hY(v.typeUniverse,JSON.parse('{"bR":"a_","ab":"a_","Z":"a_","jU":"ar","bE":{"r":[],"k":[]},"aL":{"k":[]},"aO":{"p":[]},"a_":{"p":[]},"j":{"e":["1"],"h":["1"],"p":[]},"bD":{"aZ":[]},"cq":{"j":["1"],"e":["1"],"h":["1"],"p":[]},"ao":{"b":[]},"an":{"b":[],"a":[],"k":[]},"aM":{"b":[],"k":[]},"ap":{"y":[],"k":[]},"a1":{"n":["2"]},"a8":{"a1":["1","2"],"n":["2"],"n.E":"2"},"b8":{"a8":["1","2"],"a1":["1","2"],"h":["2"],"n":["2"],"n.E":"2"},"b6":{"i":["2"],"e":["2"],"a1":["1","2"],"h":["2"],"n":["2"]},"L":{"b6":["1","2"],"i":["2"],"e":["2"],"a1":["1","2"],"h":["2"],"n":["2"],"i.E":"2","n.E":"2"},"bG":{"o":[]},"h":{"n":["1"]},"w":{"h":["1"],"n":["1"]},"b1":{"w":["1"],"h":["1"],"n":["1"],"w.E":"1","n.E":"1"},"S":{"w":["2"],"h":["2"],"n":["2"],"w.E":"2","n.E":"2"},"W":{"n":["1"],"n.E":"1"},"aY":{"w":["1"],"h":["1"],"n":["1"],"w.E":"1","n.E":"1"},"aW":{"U":[],"o":[]},"bF":{"o":[]},"bY":{"o":[]},"bg":{"a0":[]},"bV":{"o":[]},"aQ":{"R":["1","2"],"bI":["1","2"],"R.V":"2"},"aa":{"h":["1"],"n":["1"],"n.E":"1"},"aq":{"p":[],"k":[]},"ar":{"p":[],"k":[]},"aU":{"p":[]},"bJ":{"p":[],"k":[]},"as":{"E":["1"],"p":[]},"aS":{"i":["b"],"e":["b"],"E":["b"],"h":["b"],"p":[]},"aT":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[]},"bK":{"i":["b"],"e":["b"],"E":["b"],"h":["b"],"p":[],"k":[],"i.E":"b"},"bL":{"i":["b"],"e":["b"],"E":["b"],"h":["b"],"p":[],"k":[],"i.E":"b"},"bM":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"aR":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"bN":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"bO":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"bP":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"aV":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"bQ":{"i":["a"],"e":["a"],"E":["a"],"h":["a"],"p":[],"k":[],"i.E":"a"},"c1":{"o":[]},"bi":{"U":[],"o":[]},"K":{"o":[]},"b5":{"c0":["1"]},"z":{"am":["1"]},"R":{"bI":["1","2"]},"c3":{"R":["y","@"],"bI":["y","@"],"R.V":"@"},"c4":{"w":["y"],"h":["y"],"n":["y"],"w.E":"y","n.E":"y"},"e":{"h":["1"]},"bu":{"o":[]},"U":{"o":[]},"J":{"o":[]},"aX":{"o":[]},"bA":{"o":[]},"b2":{"o":[]},"bX":{"o":[]},"b0":{"o":[]},"by":{"o":[]},"b_":{"o":[]},"cb":{"a0":[]},"hm":{"e":["a"],"h":["a"]},"hC":{"e":["a"],"h":["a"]},"hB":{"e":["a"],"h":["a"]},"hk":{"e":["a"],"h":["a"]},"hz":{"e":["a"],"h":["a"]},"hl":{"e":["a"],"h":["a"]},"hA":{"e":["a"],"h":["a"]},"ec":{"e":["b"],"h":["b"]},"hj":{"e":["b"],"h":["b"]}}'))
A.hX(v.typeUniverse,JSON.parse('{"b4":1,"aK":1,"bn":2,"bH":1,"as":1,"ca":1,"bx":2,"bz":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ey
return{U:s("h<@>"),C:s("o"),Z:s("jT"),G:s("j<e<e<b>>>"),E:s("j<e<f<b>>>"),q:s("j<e<b>>"),f:s("j<l>"),O:s("j<f<b>>"),h:s("j<+(v,v)>"),V:s("j<+(b,e<f<b>>)>"),r:s("j<+label,maxX,maxY,minX,minY(a,a,a,a,a)>"),s:s("j<y>"),x:s("j<at>"),w:s("j<v>"),u:s("j<r>"),n:s("j<b>"),D:s("j<@>"),t:s("j<a>"),c:s("j<l?>"),b:s("j<v?>"),T:s("aL"),m:s("p"),g:s("Z"),p:s("E<@>"),J:s("e<b>"),j:s("e<@>"),L:s("e<a>"),d:s("bI<y,@>"),k:s("aq"),P:s("B"),K:s("l"),X:s("f<b>"),M:s("jV"),F:s("+()"),B:s("+(b,e<f<b>>)"),e:s("+label,maxX,maxY,minX,minY(a,a,a,a,a)"),l:s("a0"),N:s("y"),W:s("k"),_:s("U"),Y:s("ab"),a:s("W<r>"),aY:s("z<@>"),bV:s("c5"),A:s("v"),I:s("c6"),y:s("r"),i:s("b"),z:s("@"),v:s("@(l)"),Q:s("@(l,a0)"),S:s("a"),bc:s("am<B>?"),aQ:s("p?"),R:s("l?"),aD:s("y?"),cG:s("r?"),dd:s("b?"),a3:s("a?"),ae:s("fK?"),H:s("fK"),o:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.v=J.bB.prototype
B.c=J.j.prototype
B.b=J.an.prototype
B.a=J.ao.prototype
B.w=J.Z.prototype
B.x=J.aO.prototype
B.C=A.aR.prototype
B.l=J.bR.prototype
B.h=J.ab.prototype
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

B.u=new A.cr()
B.e=new A.cB()
B.d=new A.da()
B.f=new A.cb()
B.y=new A.cs(null)
B.k=s([1,4,6,4,1],t.t)
B.z=s([],t.E)
B.A=s([],t.t)
B.B=s([1.41421356,1.2941176470588236],t.n)
B.m=new A.a2(0,0)
B.D=A.N("jP")
B.E=A.N("jQ")
B.F=A.N("ec")
B.G=A.N("hj")
B.H=A.N("hk")
B.I=A.N("hl")
B.J=A.N("hm")
B.K=A.N("l")
B.L=A.N("hz")
B.M=A.N("hA")
B.N=A.N("hB")
B.O=A.N("hC")})();(function staticFields(){$.d6=null
$.af=A.c([],t.f)
$.eV=null
$.cz=0
$.eh=A.iQ()
$.eL=null
$.eK=null
$.fI=null
$.fF=null
$.fO=null
$.dR=null
$.dX=null
$.eA=null
$.d8=A.c([],A.ey("j<e<l>?>"))
$.az=null
$.bq=null
$.br=null
$.er=!1
$.q=B.d
$.fx=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jS","fS",()=>A.dS("_$dart_dartClosure"))
s($,"jR","eD",()=>A.dS("_$dart_dartClosure_dartJSInterop"))
s($,"ka","h2",()=>A.c([new J.bD()],A.ey("j<aZ>")))
s($,"jY","fT",()=>A.V(A.cN({
toString:function(){return"$receiver$"}})))
s($,"jZ","fU",()=>A.V(A.cN({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"k_","fV",()=>A.V(A.cN(null)))
s($,"k0","fW",()=>A.V(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"k3","fZ",()=>A.V(A.cN(void 0)))
s($,"k4","h_",()=>A.V(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"k2","fY",()=>A.V(A.f1(null)))
s($,"k1","fX",()=>A.V(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"k6","h1",()=>A.V(A.f1(void 0)))
s($,"k5","h0",()=>A.V(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"k7","eF",()=>A.hD())
s($,"k9","cg",()=>A.fL(B.K))
s($,"jW","eE",()=>{A.hv()
return $.cz})
s($,"k8","eG",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.jj(r*3.141592653589793/180))
return A.eS(q)})
s($,"kb","eH",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.jK(r*3.141592653589793/180))
return A.eS(q)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ar,ArrayBuffer:A.aq,ArrayBufferView:A.aU,DataView:A.bJ,Float32Array:A.bK,Float64Array:A.bL,Int16Array:A.bM,Int32Array:A.aR,Int8Array:A.bN,Uint16Array:A.bO,Uint32Array:A.bP,Uint8ClampedArray:A.aV,CanvasPixelArray:A.aV,Uint8Array:A.bQ})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.as.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.ba.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.bb.$nativeSuperclassTag="ArrayBufferView"
A.bc.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jA
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=scan_worker.js.map
