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
if(a[b]!==s){A.ji(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.el(b)
return new s(c,this)}:function(){if(s===null)s=A.el(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.el(a).prototype
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
eq(a,b,c,d){return{i:a,p:b,e:c,x:d}},
en(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eo==null){A.j4()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.eQ("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d1
if(o==null)o=$.d1=A.dI(n)
p=q[o]}if(p!=null)return p
p=A.j9(a)
if(p!=null)return p
if(typeof a=="function")return B.w
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.d1
if(o==null)o=$.d1=A.dI(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
h7(a,b){return J.fR(a,b)},
af(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.aJ.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.aI.prototype
if(typeof a=="boolean")return J.by.prototype
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.aM.prototype
if(typeof a=="bigint")return J.aK.prototype
return a}if(a instanceof A.l)return a
return J.en(a)},
aB(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.aM.prototype
if(typeof a=="bigint")return J.aK.prototype
return a}if(a instanceof A.l)return a
return J.en(a)},
a0(a){if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.aM.prototype
if(typeof a=="bigint")return J.aK.prototype
return a}if(a instanceof A.l)return a
return J.en(a)},
iZ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.aJ.prototype}if(a==null)return a
if(!(a instanceof A.l))return J.a7.prototype
return a},
j_(a){if(typeof a=="number")return J.am.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.a7.prototype
return a},
cc(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.af(a).I(a,b)},
cd(a,b){if(typeof b==="number")if(Array.isArray(a)||A.j7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)},
fP(a,b){return J.a0(a).aW(a,b)},
fQ(a,b){return J.a0(a).a2(a,b)},
fR(a,b){return J.j_(a).C(a,b)},
dW(a,b){return J.a0(a).A(a,b)},
M(a){return J.af(a).gp(a)},
ai(a){return J.a0(a).gB(a)},
a3(a){return J.aB(a).gk(a)},
fS(a){return J.af(a).gt(a)},
ew(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.iZ(a).gao(a)},
fT(a,b,c){return J.a0(a).W(a,b,c)},
dX(a,b,c){return J.a0(a).l(a,b,c)},
aE(a){return J.af(a).i(a)},
bv:function bv(){},
by:function by(){},
aI:function aI(){},
aL:function aL(){},
V:function V(){},
bM:function bM(){},
a7:function a7(){},
U:function U(){},
aK:function aK(){},
aM:function aM(){},
i:function i(a){this.$ti=a},
bx:function bx(){},
co:function co(a){this.$ti=a},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
am:function am(){},
al:function al(){},
aJ:function aJ(){},
an:function an(){}},A={e1:function e1(){},
eB(a,b,c){if(t.U.b(a))return new A.b5(a,b.j("@<0>").G(c).j("b5<1,2>"))
return new A.a4(a,b.j("@<0>").G(c).j("a4<1,2>"))},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cG(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eO(a,b,c){return A.cG(A.Q(A.Q(c,a),b))},
c9(a,b,c){return a},
ep(a){var s,r
for(s=$.ad.length,r=0;r<s;++r)if(a===$.ad[r])return!0
return!1},
cF(a,b,c,d){A.e6(b,"start")
A.e6(c,"end")
if(b>c)A.ca(A.P(b,0,c,"start",null))
return new A.aZ(a,b,c,d.j("aZ<0>"))},
bw(){return new A.aY("No element")},
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
cx:function cx(){},
h:function h(){},
u:function u(){},
aZ:function aZ(a,b,c,d){var _=this
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
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b){this.a=a
this.b=b},
aH:function aH(){},
aV:function aV(a,b){this.a=a
this.$ti=b},
bi:function bi(){},
fC(a){var s=A.fB(a)
if(s!=null)return s
return"minified:"+a},
j7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aE(a)
return s},
bN(a){var s,r=$.eI
if(r==null)r=$.eI=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bO(a){var s,r,q,p
if(a instanceof A.l)return A.D(A.a1(a),null)
s=J.af(a)
if(s===B.v||s===B.x||t.M.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.D(A.a1(a),null)},
eJ(a){var s,r,q
if(a==null||typeof a=="number"||A.ef(a))return J.aE(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a5)return a.i(0)
if(a instanceof A.ba)return a.aA(!0)
s=$.fO()
for(r=0;r<1;++r){q=s[r].be(a)
if(q!=null)return q}return"Instance of '"+A.bO(a)+"'"},
ha(){return Date.now()},
hc(){var s,r
if($.cw!==0)return
$.cw=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.cw=1e6
$.e5=new A.cv(r)},
hb(a){var s=a.$thrownJsError
if(s==null)return null
return A.aC(s)},
eK(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.y(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
fv(a,b){var s,r="index"
if(!A.fh(b))return new A.H(!0,b,r,null)
s=J.a3(a)
if(b<0||b>=s)return A.e0(b,s,a,r)
return new A.aU(null,null,!0,b,r,"Value not in range")},
iX(a,b,c){if(a>c)return A.P(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.P(b,a,c,"end",null)
return new A.H(!0,b,"end",null)},
iO(a){return new A.H(!0,a,null,null)},
dG(a){return a},
d(a){return A.y(a,new Error())},
y(a,b){var s
if(a==null)a=new A.R()
b.dartException=a
s=A.jj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jj(){return J.aE(this.dartException)},
ca(a,b){throw A.y(a,b==null?new Error():b)},
B(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ca(A.hZ(a,b,c),s)},
hZ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b_("'"+s+"': Cannot "+o+" "+l+k+n)},
z(a){throw A.d(A.E(a))},
S(a){var s,r,q,p,o,n
a=A.jf(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cJ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eP(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
e2(a,b){var s=b==null,r=s?null:b.method
return new A.bz(a,r,s?null:b.receiver)},
ah(a){if(a==null)return new A.cu(a)
if(a instanceof A.aG)return A.a2(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a2(a,a.dartException)
return A.iM(a)},
a2(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.P(r,16)&8191)===10)switch(q){case 438:return A.a2(a,A.e2(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.a2(a,new A.aT())}}if(a instanceof TypeError){p=$.fE()
o=$.fF()
n=$.fG()
m=$.fH()
l=$.fK()
k=$.fL()
j=$.fJ()
$.fI()
i=$.fN()
h=$.fM()
g=p.F(s)
if(g!=null)return A.a2(a,A.e2(s,g))
else{g=o.F(s)
if(g!=null){g.method="call"
return A.a2(a,A.e2(s,g))}else if(n.F(s)!=null||m.F(s)!=null||l.F(s)!=null||k.F(s)!=null||j.F(s)!=null||m.F(s)!=null||i.F(s)!=null||h.F(s)!=null)return A.a2(a,new A.aT())}return A.a2(a,new A.bS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aX()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a2(a,new A.H(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aX()
return a},
aC(a){var s
if(a instanceof A.aG)return a.b
if(a==null)return new A.bb(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bb(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fy(a){if(a==null)return J.M(a)
if(typeof a=="object")return A.bN(a)
return J.M(a)},
ie(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cQ("Unsupported number of arguments for wrapped closure"))},
aA(a,b){var s=a.$identity
if(!!s)return s
s=A.iS(a,b)
a.$identity=s
return s},
iS(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ie)},
h_(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cD().constructor.prototype):Object.create(new A.aF(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fW(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fW(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fU)}throw A.d("Error in functionType of tearoff")},
fX(a,b,c,d){var s=A.eA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eC(a,b,c,d){if(c)return A.fZ(a,b,d)
return A.fX(b.length,d,a,b)},
fY(a,b,c,d){var s=A.eA,r=A.fV
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
fZ(a,b,c){var s,r
if($.ey==null)$.ey=A.ex("interceptor")
if($.ez==null)$.ez=A.ex("receiver")
s=b.length
r=A.fY(s,c,a,b)
return r},
el(a){return A.h_(a)},
fU(a,b){return A.bh(v.typeUniverse,A.a1(a.a),b)},
eA(a){return a.a},
fV(a){return a.b},
ex(a){var s,r,q,p=new A.aF("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.bn("Field name "+a+" not found.",null))},
dI(a){return v.getIsolateTag(a)},
j9(a){var s,r,q,p,o,n=$.fw.$1(a),m=$.dH[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dN[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fs.$2(a,n)
if(q!=null){m=$.dH[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dN[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dP(s)
$.dH[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dN[n]=s
return s}if(p==="-"){o=A.dP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fz(a,s)
if(p==="*")throw A.d(A.eQ(n))
if(v.leafTags[n]===true){o=A.dP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fz(a,s)},
fz(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eq(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dP(a){return J.eq(a,!1,null,!!a.$iC)},
jb(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dP(s)
else return J.eq(s,c,null,null)},
j4(){if(!0===$.eo)return
$.eo=!0
A.j5()},
j5(){var s,r,q,p,o,n,m,l
$.dH=Object.create(null)
$.dN=Object.create(null)
A.j3()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fA.$1(o)
if(n!=null){m=A.jb(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
j3(){var s,r,q,p,o,n,m=B.n()
m=A.az(B.o,A.az(B.p,A.az(B.j,A.az(B.j,A.az(B.q,A.az(B.r,A.az(B.t(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fw=new A.dK(p)
$.fs=new A.dL(o)
$.fA=new A.dM(n)},
az(a,b){return a(b)||b},
hx(a,b){var s
for(s=0;s<a.length;++s)if(!J.cc(a[s],b[s]))return!1
return!0},
iU(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
jf(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
a9:function a9(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a},
cv:function cv(a){this.a=a},
aW:function aW(){},
cI:function cI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aT:function aT(){},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a){this.a=a},
cu:function cu(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
bb:function bb(a){this.a=a
this.b=null},
a5:function a5(){},
cf:function cf(){},
cg:function cg(){},
cH:function cH(){},
cD:function cD(){},
aF:function aF(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a},
aN:function aN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
a6:function a6(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
ba:function ba(){},
c1:function c1(){},
c2:function c2(){},
f7(a,b,c){},
i0(a){return a},
eG(a){return new Float64Array(A.i0(a))},
aa(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.fv(b,a))},
a_(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.iX(a,b,c))
if(b==null)return c
return b},
ap:function ap(){},
ao:function ao(){},
aR:function aR(){},
bD:function bD(){},
aq:function aq(){},
aP:function aP(){},
aQ:function aQ(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
aS:function aS(){},
bL:function bL(){},
b6:function b6(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
e8(a,b){var s=b.c
return s==null?b.c=A.bf(a,"ak",[b.x]):s},
eL(a){var s=a.w
if(s===6||s===7)return A.eL(a.x)
return s===11||s===12},
hd(a){return a.as},
jc(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
em(a){return A.da(v.typeUniverse,a,!1)},
ac(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ac(a1,s,a3,a4)
if(r===s)return a2
return A.eZ(a1,r,!0)
case 7:s=a2.x
r=A.ac(a1,s,a3,a4)
if(r===s)return a2
return A.eY(a1,r,!0)
case 8:q=a2.y
p=A.ay(a1,q,a3,a4)
if(p===q)return a2
return A.bf(a1,a2.x,p)
case 9:o=a2.x
n=A.ac(a1,o,a3,a4)
m=a2.y
l=A.ay(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ea(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ay(a1,j,a3,a4)
if(i===j)return a2
return A.f_(a1,k,i)
case 11:h=a2.x
g=A.ac(a1,h,a3,a4)
f=a2.y
e=A.iJ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eX(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ay(a1,d,a3,a4)
o=a2.x
n=A.ac(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eb(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bp("Attempted to substitute unexpected RTI kind "+a0))}},
ay(a,b,c,d){var s,r,q,p,o=b.length,n=A.db(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ac(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iK(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.db(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ac(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iJ(a,b,c,d){var s,r=b.a,q=A.ay(a,r,c,d),p=b.b,o=A.ay(a,p,c,d),n=b.c,m=A.iK(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bX()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
fu(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.j1(s)
return a.$S()}return null},
j6(a,b){var s
if(A.eL(b))if(a instanceof A.a5){s=A.fu(a)
if(s!=null)return s}return A.a1(a)},
a1(a){if(a instanceof A.l)return A.av(a)
if(Array.isArray(a))return A.K(a)
return A.ee(J.af(a))},
K(a){var s=a[v.arrayRti],r=t.D
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
av(a){var s=a.$ti
return s!=null?s:A.ee(a)},
ee(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ia(a,s)},
ia(a,b){var s=a instanceof A.a5?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hG(v.typeUniverse,s.name)
b.$ccache=r
return r},
j1(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.da(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
j0(a){return A.ae(A.av(a))},
ek(a){var s
if(a instanceof A.ba)return A.iY(a.$r,a.ac())
s=a instanceof A.a5?A.fu(a):null
if(s!=null)return s
if(t.J.b(a))return J.fS(a).a
if(Array.isArray(a))return A.K(a)
return A.a1(a)},
ae(a){var s=a.r
return s==null?a.r=new A.d9(a):s},
iY(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
s=A.bh(v.typeUniverse,A.ek(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.f1(v.typeUniverse,s,A.ek(q[r]))
return A.bh(v.typeUniverse,s,a)},
L(a){return A.ae(A.da(v.typeUniverse,a,!1))},
i9(a){var s=this
s.b=A.iH(s)
return s.b(a)},
iH(a){var s,r,q,p
if(a===t.K)return A.il
if(A.ag(a))return A.iq
s=a.w
if(s===6)return A.i6
if(s===1)return A.fj
if(s===7)return A.ig
r=A.iF(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ag)){a.f="$i"+q
if(q==="e")return A.ij
if(a===t.m)return A.ii
return A.ip}}else if(s===10){p=A.iU(a.x,a.y)
return p==null?A.fj:p}return A.i4},
iF(a){if(a.w===8){if(a===t.S)return A.fh
if(a===t.i||a===t.H)return A.ik
if(a===t.N)return A.io
if(a===t.y)return A.ef}return null},
i8(a){var s=this,r=A.i3
if(A.ag(s))r=A.hQ
else if(s===t.K)r=A.hO
else if(A.aD(s)){r=A.i5
if(s===t.a3)r=A.hK
else if(s===t.aD)r=A.hP
else if(s===t.cG)r=A.f5
else if(s===t.ae)r=A.hN
else if(s===t.dd)r=A.hJ
else if(s===t.aQ)r=A.hL}else if(s===t.S)r=A.au
else if(s===t.N)r=A.ec
else if(s===t.y)r=A.f4
else if(s===t.H)r=A.hM
else if(s===t.i)r=A.hI
else if(s===t.m)r=A.f6
s.a=r
return s.a(a)},
i4(a){var s=this
if(a==null)return A.aD(s)
return A.j8(v.typeUniverse,A.j6(a,s),s)},
i6(a){if(a==null)return!0
return this.x.b(a)},
ip(a){var s,r=this
if(a==null)return A.aD(r)
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.af(a)[s]},
ij(a){var s,r=this
if(a==null)return A.aD(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.af(a)[s]},
ii(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.l)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fi(a){if(typeof a=="object"){if(a instanceof A.l)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
i3(a){var s=this
if(a==null){if(A.aD(s))return a}else if(s.b(a))return a
throw A.y(A.fd(a,s),new Error())},
i5(a){var s=this
if(a==null||s.b(a))return a
throw A.y(A.fd(a,s),new Error())},
fd(a,b){return new A.bd("TypeError: "+A.eS(a,A.D(b,null)))},
eS(a,b){return A.cm(a)+": type '"+A.D(A.ek(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.bd("TypeError: "+A.eS(a,b))},
ig(a){var s=this
return s.x.b(a)||A.e8(v.typeUniverse,s).b(a)},
il(a){return a!=null},
hO(a){if(a!=null)return a
throw A.y(A.G(a,"Object"),new Error())},
iq(a){return!0},
hQ(a){return a},
fj(a){return!1},
ef(a){return!0===a||!1===a},
f4(a){if(!0===a)return!0
if(!1===a)return!1
throw A.y(A.G(a,"bool"),new Error())},
f5(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.y(A.G(a,"bool?"),new Error())},
hI(a){if(typeof a=="number")return a
throw A.y(A.G(a,"double"),new Error())},
hJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.G(a,"double?"),new Error())},
fh(a){return typeof a=="number"&&Math.floor(a)===a},
au(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.y(A.G(a,"int"),new Error())},
hK(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.y(A.G(a,"int?"),new Error())},
ik(a){return typeof a=="number"},
hM(a){if(typeof a=="number")return a
throw A.y(A.G(a,"num"),new Error())},
hN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.G(a,"num?"),new Error())},
io(a){return typeof a=="string"},
ec(a){if(typeof a=="string")return a
throw A.y(A.G(a,"String"),new Error())},
hP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.y(A.G(a,"String?"),new Error())},
f6(a){if(A.fi(a))return a
throw A.y(A.G(a,"JSObject"),new Error())},
hL(a){if(a==null)return a
if(A.fi(a))return a
throw A.y(A.G(a,"JSObject?"),new Error())},
fq(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.D(a[q],b)
return s},
iz(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fq(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.D(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ff(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
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
if(m===8){p=A.iL(a.x)
o=a.y
return o.length>0?p+("<"+A.fq(o,b)+">"):p}if(m===10)return A.iz(a,b)
if(m===11)return A.ff(a,b,null)
if(m===12)return A.ff(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
iL(a){var s=A.fB(a)
if(s!=null)return s
return"minified:"+a},
hH(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hG(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.da(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bg(a,5,"#")
q=A.db(s)
for(p=0;p<s;++p)q[p]=r
o=A.bf(a,b,q)
n[b]=o
return o}else return m},
hF(a,b){return A.f2(a.tR,b)},
hE(a,b){return A.f2(a.eT,b)},
da(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.f0(a,null,b,!1)
r.set(b,s)
return s},
bh(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.f0(a,b,c,!0)
q.set(c,r)
return r},
f1(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ea(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
f0(a,b,c,d){return A.hv(A.hp(a,b,c,d))},
Z(a,b){b.a=A.i8
b.b=A.i9
return b},
bg(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.J(null,null)
s.w=b
s.as=c
r=A.Z(a,s)
a.eC.set(c,r)
return r},
eZ(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hC(a,b,r,c)
a.eC.set(r,s)
return s},
hC(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ag(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aD(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.J(null,null)
q.w=6
q.x=b
q.as=c
return A.Z(a,q)},
eY(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hA(a,b,r,c)
a.eC.set(r,s)
return s},
hA(a,b,c,d){var s,r
if(d){s=b.w
if(A.ag(b)||b===t.K)return b
else if(s===1)return A.bf(a,"ak",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.J(null,null)
r.w=7
r.x=b
r.as=c
return A.Z(a,r)},
hD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
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
hz(a){var s,r,q,p,o,n=a.length
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
ea(a,b,c){var s,r,q,p,o,n
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
f_(a,b,c){var s,r,q="+"+(b+"("+A.be(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.Z(a,s)
a.eC.set(q,r)
return r},
eX(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.be(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.be(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hz(i)+"}"}r=n+(g+")")
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
eb(a,b,c,d){var s,r=b.as+("<"+A.be(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hB(a,b,c,r,d)
a.eC.set(r,s)
return s},
hB(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.db(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ac(a,b,r,0)
m=A.ay(a,c,r,0)
return A.eb(a,n,m,c!==m)}}l=new A.J(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.Z(a,l)},
hp(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hv(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hr(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eU(a,r,l,k,!1)
else if(q===46)r=A.eU(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a8(a.u,a.e,k.pop()))
break
case 94:k.push(A.hD(a.u,k.pop()))
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
case 62:A.ht(a,k)
break
case 38:A.hs(a,k)
break
case 63:p=a.u
k.push(A.eZ(p,A.a8(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eY(p,A.a8(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hq(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eV(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hw(a.u,a.e,o)
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
hr(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eU(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hH(s,o.x)[p]
if(n==null)A.ca('No "'+p+'" in "'+A.hd(o)+'"')
d.push(A.bh(s,o,n))}else d.push(p)
return m},
ht(a,b){var s,r=a.u,q=A.eT(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bf(r,p,q))
else{s=A.a8(r,a.e,p)
switch(s.w){case 11:b.push(A.eb(r,s,q,a.n))
break
default:b.push(A.ea(r,s,q))
break}}},
hq(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eT(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a8(p,a.e,o)
q=new A.bX()
q.a=s
q.b=n
q.c=m
b.push(A.eX(p,r,q))
return
case-4:b.push(A.f_(p,b.pop(),s))
return
default:throw A.d(A.bp("Unexpected state under `()`: "+A.m(o)))}},
hs(a,b){var s=b.pop()
if(0===s){b.push(A.bg(a.u,1,"0&"))
return}if(1===s){b.push(A.bg(a.u,4,"1&"))
return}throw A.d(A.bp("Unexpected extended operation "+A.m(s)))},
eT(a,b){var s=b.splice(a.p)
A.eV(a.u,a.e,s)
a.p=b.pop()
return s},
a8(a,b,c){if(typeof c=="string")return A.bf(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hu(a,b,c)}else return c},
eV(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a8(a,b,c[s])},
hw(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a8(a,b,c[s])},
hu(a,b,c){var s,r,q=b.w
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
j8(a,b,c){var s,r=b.d
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
return A.t(a,A.e8(a,b),c,d,e)}if(s===6)return A.t(a,p,c,d,e)&&A.t(a,b.x,c,d,e)
if(q===7){if(A.t(a,b,c,d.x,e))return!0
return A.t(a,b,c,A.e8(a,d),e)}if(q===6)return A.t(a,b,c,p,e)||A.t(a,b,c,d.x,e)
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
if(!A.t(a,j,c,i,e)||!A.t(a,i,e,j,c))return!1}return A.fg(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fg(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ih(a,b,c,d,e)}if(o&&q===10)return A.im(a,b,c,d,e)
return!1},
fg(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ih(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bh(a,b,r[o])
return A.f3(a,p,null,c,d.y,e)}return A.f3(a,b.y,null,c,d.y,e)},
f3(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.t(a,b[s],d,e[s],f))return!1
return!0},
im(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.t(a,r[s],c,q[s],e))return!1
return!0},
aD(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ag(a))if(s!==6)r=s===7&&A.aD(a.x)
return r},
ag(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.R},
f2(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
db(a){return a>0?new Array(a):v.typeUniverse.sEA},
J:function J(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bX:function bX(){this.c=this.b=this.a=null},
d9:function d9(a){this.a=a},
bW:function bW(){},
bd:function bd(a){this.a=a},
hk(){var s,r,q
if(self.scheduleImmediate!=null)return A.iP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aA(new A.cL(s),1)).observe(r,{childList:true})
return new A.cK(s,r,q)}else if(self.setImmediate!=null)return A.iQ()
return A.iR()},
hl(a){self.scheduleImmediate(A.aA(new A.cM(a),0))},
hm(a){self.setImmediate(A.aA(new A.cN(a),0))},
hn(a){A.hy(0,a)},
hy(a,b){var s=new A.d7()
s.aI(a,b)
return s},
iu(a){return new A.bT(new A.w($.q,a.j("w<0>")),a.j("bT<0>"))},
hT(a,b){a.$2(0,null)
b.b=!0
return b.a},
de(a,b){A.hU(a,b)},
hS(a,b){b.ai(a)},
hR(a,b){b.aj(A.ah(a),A.aC(a))},
hU(a,b){var s,r,q=new A.df(b),p=new A.dg(b)
if(a instanceof A.w)a.az(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.aG(q,p,s)
else{r=new A.w($.q,t.W)
r.a=8
r.c=a
r.az(q,p,s)}}},
iN(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.q.aF(new A.dF(s))},
dY(a){var s
if(t.C.b(a)){s=a.gX()
if(s!=null)return s}return B.f},
ib(a,b){if($.q===B.d)return null
return null},
ic(a,b){if($.q!==B.d)A.ib(a,b)
if(b==null)if(t.C.b(a)){b=a.gX()
if(b==null){A.eK(a,B.f)
b=B.f}}else b=B.f
else if(t.C.b(a))A.eK(a,b)
return new A.I(a,b)},
e9(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.hf()
b.a8(new A.I(new A.H(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.av(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.a_()
b.Y(p.a)
A.at(b,q)
return}b.a^=2
A.c8(null,null,b.b,new A.cU(p,b))},
at(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.ej(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.at(g.a,f)
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
if(r){A.ej(m.a,m.b)
return}j=$.q
if(j!==k)$.q=k
else j=null
f=f.c
if((f&15)===8)new A.cY(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cX(s,m).$0()}else if((f&2)!==0)new A.cW(g,s).$0()
if(j!=null)$.q=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.j("ak<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a0(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.e9(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a0(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
iA(a,b){if(t.Q.b(a))return b.aF(a)
if(t.v.b(a))return a
throw A.d(A.ce(a,"onError",u.c))},
iv(){var s,r
for(s=$.ax;s!=null;s=$.ax){$.bm=null
r=s.b
$.ax=r
if(r==null)$.bl=null
s.a.$0()}},
iI(){$.eg=!0
try{A.iv()}finally{$.bm=null
$.eg=!1
if($.ax!=null)$.et().$1(A.ft())}},
fr(a){var s=new A.bU(a),r=$.bl
if(r==null){$.ax=$.bl=s
if(!$.eg)$.et().$1(A.ft())}else $.bl=r.b=s},
iD(a){var s,r,q,p=$.ax
if(p==null){A.fr(a)
$.bm=$.bl
return}s=new A.bU(a)
r=$.bm
if(r==null){s.b=p
$.ax=$.bm=s}else{q=r.b
s.b=q
$.bm=r.b=s
if(q==null)$.bl=s}},
js(a){A.c9(a,"stream",t.K)
return new A.c4()},
ej(a,b){A.iD(new A.dB(a,b))},
fp(a,b,c,d){var s,r=$.q
if(r===c)return d.$0()
$.q=c
s=r
try{r=d.$0()
return r}finally{$.q=s}},
iC(a,b,c,d,e){var s,r=$.q
if(r===c)return d.$1(e)
$.q=c
s=r
try{r=d.$1(e)
return r}finally{$.q=s}},
iB(a,b,c,d,e,f){var s,r=$.q
if(r===c)return d.$2(e,f)
$.q=c
s=r
try{r=d.$2(e,f)
return r}finally{$.q=s}},
c8(a,b,c,d){if(B.d!==c){d=c.aX(d)
d=d}A.fr(d)},
cL:function cL(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
d7:function d7(){},
d8:function d8(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=!1
this.$ti=b},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dF:function dF(a){this.a=a},
I:function I(a,b){this.a=a
this.b=b},
bV:function bV(){},
b2:function b2(a,b){this.a=a
this.$ti=b},
as:function as(a,b,c,d,e){var _=this
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
cR:function cR(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b){this.a=a
this.b=b},
d_:function d_(a){this.a=a},
cX:function cX(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
bU:function bU(a){this.a=a
this.b=null},
c4:function c4(){},
dc:function dc(){},
d5:function d5(){},
d6:function d6(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
e3(a,b){return new A.aN(a.j("@<0>").G(b).j("aN<1,2>"))},
eF(a){var s,r
if(A.ep(a))return"{...}"
s=new A.bQ("")
try{r={}
$.ad.push(a)
s.a+="{"
r.a=!0
a.a4(0,new A.cs(r,s))
s.a+="}"}finally{$.ad.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
j:function j(){},
O:function O(){},
cs:function cs(a,b){this.a=a
this.b=b},
ix(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.eD(String(s))
throw A.d(q)}q=A.di(p)
return q},
di(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.bY(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.di(a[s])
return a},
bY:function bY(a,b){this.a=a
this.b=b
this.c=null},
bZ:function bZ(a){this.a=a},
br:function br(){},
bt:function bt(){},
cp:function cp(){},
cq:function cq(a){this.a=a},
h0(a,b){a=A.y(a,new Error())
a.stack=b.i(0)
throw a},
e4(a,b,c){var s,r,q
if(a>4294967295)A.ca(A.P(a,0,4294967295,"length",null))
s=A.c(new Array(a),c.j("i<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
h8(a,b,c){var s,r,q=A.c([],c.j("i<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.z)(a),++r)q.push(a[r])
q.$flags=1
return q},
W(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.j("i<0>"))
s=A.c([],b.j("i<0>"))
for(r=J.ai(a);r.m();)s.push(r.gn())
return s},
eN(a,b,c){var s=J.ai(b)
if(!s.m())return a
if(c.length===0){do a+=A.m(s.gn())
while(s.m())}else{a+=A.m(s.gn())
while(s.m())a=a+c+A.m(s.gn())}return a},
hf(){return A.aC(new Error())},
cm(a){if(typeof a=="number"||A.ef(a)||a==null)return J.aE(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eJ(a)},
h1(a,b){A.c9(a,"error",t.K)
A.c9(b,"stackTrace",t.l)
A.h0(a,b)},
bp(a){return new A.bo(a)},
bn(a,b){return new A.H(!1,null,b,a)},
ce(a,b,c){return new A.H(!0,a,b,c)},
P(a,b,c,d,e){return new A.aU(b,c,!0,a,d,"Invalid value")},
e7(a,b,c){if(0>a||a>c)throw A.d(A.P(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.P(b,a,c,"end",null))
return b}return c},
e6(a,b){if(a<0)throw A.d(A.P(a,0,null,b,null))
return a},
e0(a,b,c,d){return new A.bu(b,!0,a,d,"Index out of range")},
b0(a){return new A.b_(a)},
eQ(a){return new A.bR(a)},
eM(a){return new A.aY(a)},
E(a){return new A.bs(a)},
eD(a){return new A.cn(a)},
h6(a,b,c){var s,r
if(A.ep(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
$.ad.push(a)
try{A.ir(a,s)}finally{$.ad.pop()}r=A.eN(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
eE(a,b,c){var s,r
if(A.ep(a))return b+"..."+c
s=new A.bQ(b)
$.ad.push(a)
try{r=s
r.a=A.eN(r.a,a,", ")}finally{$.ad.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ir(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
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
eH(a,b,c,d){var s
if(B.e===c)return A.eO(B.b.gp(a),J.M(b),$.cb())
if(B.e===d){s=B.b.gp(a)
b=J.M(b)
c=J.M(c)
return A.cG(A.Q(A.Q(A.Q($.cb(),s),b),c))}s=B.b.gp(a)
b=J.M(b)
c=J.M(c)
d=J.M(d)
d=A.cG(A.Q(A.Q(A.Q(A.Q($.cb(),s),b),c),d))
return d},
h9(a){var s,r,q=$.cb()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.z)(a),++r)q=A.Q(q,J.M(a[r]))
return A.cG(q)},
o:function o(){},
bo:function bo(a){this.a=a},
R:function R(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a,b,c,d,e,f){var _=this
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
b_:function b_(a){this.a=a},
bR:function bR(a){this.a=a},
aY:function aY(a){this.a=a},
bs:function bs(a){this.a=a},
aX:function aX(){},
cQ:function cQ(a){this.a=a},
cn:function cn(a){this.a=a},
n:function n(){},
A:function A(){},
l:function l(){},
c5:function c5(){},
cE:function cE(){this.b=this.a=0},
bQ:function bQ(a){this.a=a},
ct:function ct(a){this.a=a},
hV(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
dQ(a,b){var s=new A.w($.q,b.j("w<0>")),r=new A.b2(s,b.j("b2<0>"))
a.then(A.aA(new A.dR(r),1),A.aA(new A.dS(r),1))
return s},
dR:function dR(a){this.a=a},
dS:function dS(a){this.a=a},
jh(a){return Math.sin(a)},
iT(a){return Math.cos(a)},
f:function f(a,b,c){this.a=a
this.b=b
this.$ti=c},
dZ(a){var s,r,q=B.c.a3(a,0,new A.ci()),p=B.c.a3(a,0,new A.cj()),o=A.W(a,t.X)
B.c.J(o,new A.ck(p/4,q/4))
for(s=0,r=1;r<4;++r){q=o[r]
p=o[s]
if(q.a+q.b<p.a+p.b)s=r}q=A.c([],t.O)
for(r=0;r<4;++r)q.push(o[B.b.N(s+r,4)])
return new A.ch(q[0],q[1],q[2],q[3])},
iV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.length
if(a2<a4*a5*4)throw A.d(A.ce(a2,"rgba","zu kurz"))
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
p[a]=B.b.P(g*77+f*150+e*29,8)
if(g>f)a0=g>e?g:e
else a0=f>e?f:e
if(g<f)a1=g<e?g:e
else a1=f<e?f:e
o[a]=a0-a1
n[a]=B.b.P(g-f+256,1)
m[a]=B.b.P(B.b.P(g+f,1)-e+256,1)}return A.hY(new A.d2(s,r,p,o,n,m),a2/a4,a2/a5,null,a6,a7)},
bk(a,b){var s,r,q=a.a,p=b.b,o=a.b,n=b.a,m=q*p-o*n
if(Math.abs(m)<0.000001)return null
s=a.c
r=b.c
return new A.f((s*p-o*r)/m,(q*r-s*n)/m,t.X)},
hY(b5,b6,b7,b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=b5.a,a4=b5.b,a5=b5.c,a6=A.bj(A.bj(a5,a3,a4),a3,a4),a7=b5.d,a8=A.bj(A.bj(a7,a3,a4),a3,a4),a9=A.ho(a6,a8,a3,a4),b0=A.bj(b5.e,a3,a4),b1=A.bj(b5.f,a3,a4),b2=new A.cO(a6,b0,b1),b3=A.c([],t.E),b4=A.i7(a9,a3,a4)
b0=A.K(b4).j("T<1>")
s=A.fm(new A.T(b4,new A.dn(),b0))
r=A.fm(new A.T(b4,new A.dp(),b0))
B.c.H(b3,A.it(s,r,a9,a3,a4,b8))
for(b0=A.f8(A.fa(a9.d,a3,a4,1),a3,a4,6),b1=b0.length,q=0;q<b0.length;b0.length===b1||(0,A.z)(b0),++q){p=A.eh(b0[q])
if(p!=null)b3.push(p)}o=A.iw(a6)
b0=a3*a4
n=new Uint8Array(b0)
for(m=0;m<b0;++m)n[m]=a6[m]>o?1:0
for(b0=A.f8(A.fa(A.i1(n,a3,a4,2),a3,a4,2),a3,a4,3),b1=b0.length,q=0;q<b0.length;b0.length===b1||(0,A.z)(b0),++q){p=A.eh(b0[q])
if(p!=null)b3.push(p)}if(b9==null)l=a2
else{b0=A.c([],t.O)
for(b1=b9.gM(),k=t.X,q=0;q<4;++q){j=b1[q]
b0.push(new A.f(j.a/b6-0.5,j.b/b7-0.5,k))}l=A.ei(b0)}b0=l!=null
if(b0)b3.push(l)
i=A.c([],t.x)
for(b1=b3.length,h=a2,q=0;q<b3.length;b3.length===b1||(0,A.z)(b3),++q){g=A.ei(b3[q])
if(g==null)continue
f=A.i2(g,a9,b2,a3,a4,b8)
if(f==null)continue
i.push(new A.ar(g,f))
if(h==null||f>h.b)h=B.c.gL(i)}b1=!1
if(b0)if(!c0)b1=h==null||A.fl(h.a,l)<0.7
if(b1){for(b1=i.length,e=a2,q=0;q<i.length;i.length===b1||(0,A.z)(i),++q){d=i[q]
if(A.fl(d.a,l)<0.7)continue
if(e==null||d.b>e.b)e=d}if(e!=null)h=e}if(b0&&c0){c=Math.sqrt(a3*a3+a4*a4)
b=h==null
if(!b){for(b0=h.a,b1=0.04*c,a=!1,m=0;m<4;++m)if(b0[m].E(l[m])>b1)a=!0}else a=b
if(a){b0=b?a2:h.b
h=new A.ar(l,b0==null?0:b0)}}if(h==null)return a2
a0=A.iE(h,i,a9,a5,a7,a3,a4)
if(a0!=null)h=a0
a1=A.fn(h.a,a9,a3,a4)
a5=A.c([],t.O)
for(a7=a1.length,b0=t.X,q=0;q<a1.length;a1.length===a7||(0,A.z)(a1),++q){j=a1[q]
a5.push(new A.f(B.a.D((j.a+0.5)*b6,0,1),B.a.D((j.b+0.5)*b7,0,1),b0))}return A.dZ(a5)},
iE(a9,b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a9.a,a6=A.c7(a5),a7=Math.sqrt(b4*b4+b5*b5),a8=0.012*a7
for(s=b0.length,r=a7/400,q=t.a,p=t.X,o=t.u,n=null,m=0;m<b0.length;b0.length===s||(0,A.z)(b0),++m){l=b0[m]
if(l===a9)continue
if(n!=null&&l.b<=n.b)continue
k=l.a
j=A.c7(k)/a6
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
if(A.ed(a5,a+(b+(c.a-b)*g-a)*e,a0+(d+(c.b-d)*g-a0)*e))++i}if(i<51.2)continue
g=A.c([],o)
for(a1=0;a1<4;a1=a2){e=k[a1]
a2=a1+1
d=a2%4
c=k[d]
g.push(A.fb(new A.f((e.a+c.a)/2,(e.b+c.b)/2,p),a5[a1],a5[d])>=a8)}a3=new A.T(g,new A.dC(),q).gk(0)
if(a3<2){e=!(a3===1&&g[2]&&j<=0.85)
g=e}else g=!1
if(g)continue
a4=A.fn(k,b1,b4,b5)
if(!A.hX(a4,b2,b3,b4,b5,r))continue
n=new A.ar(a4,l.b)}return n},
hX(a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8[0],a3=a8[1],a4=a8[2],a5=a8[3],a6=(a2.a+a3.a+a4.a+a5.a)/4,a7=(a2.b+a3.b+a4.b+a5.b)/4
a5=t.t
s=A.c([],a5)
for(r=0;r<4;){q={}
p=a8[r];++r
o=a8[r%4]
n=p.E(o)
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
e=new A.dm(q,a4+l*f,b3,a2+a3*f,b1,b2)
d=new A.dl(e,a9)
c=A.c([d.$1(-1),d.$1(-1.75),d.$1(-2.5)],a5)
B.c.O(c)
b=d.$1(2.5)
a=d.$1(4)
a0=d.$1(5.5)
a0=Math.max(A.dG(a),A.dG(a0))
a1=Math.max(A.dG(b),a0)
if(B.c.gS(c)<0||a1<0)continue;++h
j.push(c[1])
b=b0[e.$1(-1.75)]
if(b<=40){b=c[1]
b=b<110&&b<=a1-30}else b=!1
if(b)++i}if(h<8||i<0.75*h)return!1
B.c.O(j)
s.push(j[j.length/2|0])}B.c.O(s)
return B.c.gL(s)-B.c.gS(s)<=35},
ho(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=c8*c9,c2=new Float32Array(c1),c3=new Float32Array(c1),c4=new Float32Array(c1),c5=new Int32Array(1024)
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
c0=j-1}}if(a8>=c4[b9]&&a8>c4[c0]){b5[m]=1;++b6}}return new A.d0(c2,c3,c4,b5,b6,b3,b4)},
i7(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a9+B.a.ah(Math.sqrt(a9*a9+b0*b0))+2,a6=180*a5,a7=new Int32Array(a6)
for(s=b0-1,r=a9-1,q=a8.b,p=a8.a,o=a8.d,n=1;n<s;++n)for(m=n*a9,l=1;l<r;++l){k=m+l
if(o[k]===0)continue
j=Math.atan2(q[k],p[k])
i=B.a.q((j<0?j+3.141592653589793:j)*180/3.141592653589793)
for(h=-3;h<=3;++h){g=i+h
if(g<0)g+=180
if(g>=180)g-=180
f=g*a5+(B.a.q(l*$.eu()[g]+n*$.ev()[g])+a9)
a7[f]=a7[f]+1}}e=Math.max(14,B.a.q(0.08*Math.min(a9,b0)))
s=t.t
d=A.c([],s)
for(k=0;k<a6;++k)if(a7[k]>=e)d.push(k)
B.c.J(d,new A.dv(a7))
c=A.c([],t.w)
b=A.c([],s)
a=A.c([],s)
for(a6=d.length,a0=0;a0<d.length;d.length===a6||(0,A.z)(d),++a0){k=d[a0]
g=B.b.v(k,a5)
a1=B.b.N(k,a5)-a9
s=c.length
a3=0
for(;;){a2=!0
if(!(a3<s)){a2=!1
break}a4=Math.abs(g-b[a3])
if(a4<=4&&Math.abs(a1-a[a3])<=6)break
if(180-a4<=4&&Math.abs(a1+a[a3])<=6)break;++a3}if(a2)continue
c.push(new A.r($.eu()[g],$.ev()[g],a1))
b.push(g)
a.push(a1)
if(c.length>=48)break}return c},
iy(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=a0.b,h=-i,g=a0.a,f=a0.c,e=f*g,d=f*i,c=Math.sqrt(a2*a2+a3*a3),b=B.a.T(-c-2),a=B.a.ah(2*c+4)
f=a+1
s=new Int32Array(f)
r=new Int32Array(f)
q=Math.max(5,0.8*a1.r)
for(f=a2-3,p=a3-3,o=0,n=0,m=0;m<a;){l=b+m
k=e+l*h
j=d+l*g
if(k>=2&&j>=2&&k<=f&&j<=p){++n
if(A.fc(k,j,g,i,a1,a2,a3,q,2))++o}++m
s[m]=o
r[m]=n}return new A.c0(a0,b,s,r)},
fc(a,b,c,d,e,f,g,h,a0){var s,r,q,p,o,n,m,l,k,j,i
for(s=-a0,r=e.a,q=e.b,p=e.c,o=f-2,n=g-2;s<=a0;++s){m=B.a.q(a+s*c)
l=B.a.q(b+s*d)
if(m<1||l<1||m>o||l>n)continue
k=l*f+m
j=p[k]
if(j<h)continue
i=r[k]*c+q[k]*d
if(i*i>=0.67*j*j)return!0}return!1},
it(c5,c6,c7,c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
if(c5.length<2||c6.length<2)return B.z
s=t.A
r=A.e3(s,t.I)
s=A.W(c5,s)
B.c.H(s,c6)
q=s.length
p=0
for(;p<s.length;s.length===q||(0,A.z)(s),++p){o=s[p]
r.a6(0,o,A.iy(o,c7,c8,c9))}n=new A.dy(c9,c8)
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
if(B.c.aB(a8,new A.dw(k,j,i,h)))continue
if(a5.a-a4.a<e||a6.a-a7.a<e)continue
if(a7.b-a4.b<f||a6.b-a5.b<f)continue
a9=A.c7(a8)/q
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
g.push(new A.a9(Math.pow(a9,0.5)*Math.pow(b0,0.25),a8))}}B.c.J(g,new A.dx())
s=A.c([],t.E)
for(r=A.cF(g,0,A.c9(24,"count",t.S),t.B),q=r.$ti,r=new A.F(r,r.gk(0),q.j("F<u.E>")),q=q.j("u.E");r.m();){b2=r.d
s.push((b2==null?q.a(b2):b2).b)}return s},
ei(a){var s,r,q,p,o,n,m,l=J.aB(a)
if(l.gk(a)!==4)return null
s=t.O
r=A.c([],s)
for(l=l.gB(a),q=t.X;l.m();){p=l.gn()
r.push(new A.f(p.a,p.b,q))}o=A.dZ(r)
if(!o.gb2())return null
l=A.c([],s)
for(s=o.gM(),n=0;n<4;++n){m=s[n]
l.push(new A.f(m.a,m.b,q))}return l},
b4(a,b){var s=J.a0(a),r=Math.abs(s.h(a,0)-b[0])
return s.gk(a)>1?r+2*(Math.abs(s.h(a,1)-b[1])+Math.abs(s.h(a,2)-b[2])):r},
eR(a){var s,r=J.a3(B.c.gS(a)),q=A.c([],t.n)
for(s=0;s<r;++s)q.push(new A.cP(a,s).$0())
return q},
i2(f2,f3,f4,f5,f6,f7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0=null,f1=A.c7(f2)/(f5*f6)
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
if(Math.abs((n*k+l*j)/i)>0.77)return f0}h=new A.dq(f2)
o=t.q
g=A.c([],o)
for(f=0;f<10;++f)for(m=0.12+f*0.084,e=0;e<10;++e){d=h.$2(m,0.12+e*0.084)
c=B.a.q(d.a)
b=B.a.q(d.b)
if(c<0||b<0||c>=f5||b>=f6)continue
g.push(f4.ag(b*f5+c))}if(g.length<30)return f0
B.c.J(g,new A.dr())
a=A.eR(B.c.u(g,B.b.af(g.length*6,10)))
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
b1=r.E(q)
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
if(A.fc(c7,c8,b3,b6,f3,f5,f6,a5,3))++c3
if((c5&1)===1)continue
c9=B.a.q(c7+c0)
d0=B.a.q(c8+c1)
if(c9>=0&&d0>=0&&c9<f5&&d0<f6)b8.push(f4.ag(d0*f5+c9))
d1=B.a.q(c7-c0)
d2=B.a.q(c8-c1)
if(d1>=0&&d2>=0&&d1<f5&&d2<f6)b9.push(f4.ag(d2*f5+d1))}a6.push(c2===0?0:c3/c2)
a7.push(c2/c4)
a8.push(b8)
a9.push(b9)}o=A.c([],o)
for(m=a9.length,d3=0;d3<a9.length;a9.length===m||(0,A.z)(a9),++d3)B.c.H(o,a9[d3])
d4=o.length>=20?A.eR(o):f0
d5=new A.dt()
m=d4==null
d6=m?0:Math.max(20,2.5*d5.$2(o,d4))
d7=Math.max(20,2.5*d5.$2(B.c.u(g,B.b.af(g.length*6,10)),a))
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
if(e3<e1)e1=e3}o=B.c.b6(d9,new A.ds())
if(e2>1||e1<0.3||o/4<0.5)return f0
return Math.pow(Math.min(f1,1),0.5)*Math.pow(e0,0.25)},
fn(c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=c5[0],b9=c5[1],c0=c5[2],c1=c5[3],c2=(b8.a+b9.a+c0.a+c1.a)/4,c3=(b8.b+b9.b+c0.b+c1.b)/4,c4=A.c([],t.b)
for(b8=0.8*c6.r,b9=c6.c,c0=c6.a,c1=c6.b,s=c7-2,r=c8-2,q=t.i,p=t.n,o=0;o<4;){n=c5[o];++o
m=c5[o%4]
l=n.E(m)
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
a3=A.e4(9,0,q)
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
c.push(a4)}c4.push(A.fe(e,d,c,l))}if(B.c.aB(c4,new A.dA()))return c5
b6=A.c([],t.O)
for(b8=c7*c7+c8*c8,o=0;o<4;++o){b9=c4[(o+3)%4]
b9.toString
c0=c4[o]
c0.toString
b7=A.bk(b9,c0)
if(b7==null)return c5
if(b7.E(c5[o])>0.03*Math.sqrt(b8))return c5
b6.push(b7)}return b6},
fe(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.length
if(a0<Math.max(8,a4*0.25))return null
s=A.e4(a0,!0,t.y)
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
q=new A.r(b,a,o)
j=A.c([],r)
for(k=0;k<a1.length;++k)j.push(Math.abs(a1[k]*b+a2[k]*a-o)<=1.5)
if(new A.T(j,new A.du(),a0).gk(0)<8)return q}return q},
f8(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4*b5,a9=new Int32Array(a8),b0=new Int32Array(a8),b1=A.c([],t.r),b2=0.1*b4*b5
for(a8=b3.length,s=0,r=0;r<a8;++r){if(b3[r]===0||a9[r]!==0)continue;++s
b0[0]=r
a9[r]=s
for(q=b5,p=b4,o=1,n=0,m=0,l=0;o>0;){--o
k=b0[o];++n
j=B.b.N(k,b4)
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
o=b}}}}if((m-p+1)*(l-q+1)>=b2&&n>=40)b1.push(new A.c3([s,m,l,p,q]))}B.c.J(b1,new A.dh())
a=A.c([],t.E)
for(a8=A.cF(b1,0,A.c9(b6,"count",t.S),t.e),f=a8.$ti,a8=new A.F(a8,a8.gk(0),f.j("F<u.E>")),a0=t.X,a1=t.O,f=f.j("u.E");a8.m();){a2=a8.d
if(a2==null)a2=f.a(a2)
a3=A.c([],a1)
for(a4=a2.a,i=a4[4];i<=a4[2];++i){for(j=a4[3],a5=i*b4,a6=-1,a7=-1;j<=a4[1];++j)if(a9[a5+j]===a4[0]){if(a6<0)a6=j
a7=j}if(a6>=0){a3.push(new A.f(a6,i,a0))
a3.push(new A.f(a7,i,a0))}}a.push(A.f9(a3))}return a},
f9(a){var s,r,q,p,o,n,m,l,k,j
if(a.length<3)return a
s=t.X
r=A.W(a,s)
B.c.J(r,new A.dj())
q=new A.dk()
p=t.O
o=A.c([],p)
for(n=r.length,m=0;m<r.length;r.length===n||(0,A.z)(r),++m){l=r[m]
for(;;){k=o.length
if(!(k>=2&&q.$3(o[k-2],B.c.gL(o),l)<=0))break
o.pop()}o.push(l)}j=A.c([],p)
for(p=A.K(r).j("aV<1>"),r=new A.aV(r,p),r=new A.F(r,r.gk(0),p.j("F<u.E>")),p=p.j("u.E");r.m();){n=r.d
if(n==null)n=p.a(n)
for(;;){k=j.length
if(!(k>=2&&q.$3(j[k-2],B.c.gL(j),n)<=0))break
j.pop()}j.push(n)}s=A.W(B.c.l(o,0,o.length-1),s)
B.c.H(s,B.c.l(j,0,j.length-1))
return s},
eh(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=J.aB(a3)
if(a2.gk(a3)<4)return null
for(s=0,r=0;r<a2.gk(a3);r=q){q=r+1
s+=a2.h(a3,r).E(a2.h(a3,B.b.N(q,a2.gk(a3))))}p=s*0.004
for(o=a3;a2=J.aB(o),a2.gk(o)>24;){o=A.iG(a3,p)
p*=1.5}if(a2.gk(o)<4)return null
n=a2.gk(o)
for(m=n-3,l=n-2,k=n-1,j=t.O,i=-1,h=null,g=0;g<m;g=f)for(f=g+1,e=f;e<l;e=d)for(d=e+1,c=d;c<k;c=b)for(b=c+1,a=b;a<n;++a){a0=A.c([a2.h(o,g),a2.h(o,e),a2.h(o,c),a2.h(o,a)],j)
a1=A.c7(a0)
if(a1>i){h=a0
i=a1}}return h},
iG(a,b){var s,r,q,p,o,n,m,l,k,j,i=J.aB(a)
if(i.gk(a)<=4)return a
for(s=0,r=-1,q=1;q<i.gk(a);++q){p=i.h(a,0)
o=i.h(a,q)
n=p.a-o.a
m=p.b-o.b
l=p.$ti.c.a(n*n+m*m)
if(l>r){r=l
s=q}}k=A.dD(i.l(a,0,s+1),b)
p=t.X
o=A.W(i.u(a,s),p)
o.push(i.h(a,0))
j=A.dD(o,b)
i=A.W(J.dX(k,0,k.length-1),p)
B.c.H(i,J.dX(j,0,j.length-1))
return i},
dD(a,b){var s,r,q,p,o,n,m,l,k
if(a.length<3)return a
s=J.a0(a)
r=s.gS(a)
q=s.gL(a)
for(p=0,o=0,n=1;n<a.length-1;++n){m=A.fb(a[n],r,q)
if(m>o){o=m
p=n}}if(o<=b)return A.c([r,q],t.O)
l=A.dD(s.l(a,0,p+1),b)
k=A.dD(s.u(a,p),b)
s=A.W(J.dX(l,0,l.length-1),t.X)
B.c.H(s,k)
return s},
fb(a,b,c){var s=b.a,r=c.a-s,q=b.b,p=c.b-q,o=Math.sqrt(r*r+p*p)
if(o===0)return a.E(b)
return Math.abs((a.a-s)*p-(a.b-q)*r)/o},
fl(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.W(a,t.X)
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
d=A.ed(a,e,g)
c=A.ed(a0,e,g)
if(d||c)++i
if(d&&c)++j}}return i===0?0:j/i},
ed(a,b,c){var s,r,q,p,o,n,m,l
for(s=!1,r=!1,q=0;q<4;){p=a[q];++q
o=a[q%4]
n=p.a
m=p.b
l=(o.a-n)*(c-m)-(o.b-m)*(b-n)
if(l>0)s=!0
if(l<0)r=!0}return!(s&&r)},
c7(a){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<s;){p=a[q];++q
o=a[q%s]
r+=p.a*o.b-o.a*p.b}return Math.abs(r)/2},
bj(a,b,c){var s,r,q,p,o,n,m,l=b*c,k=new Uint16Array(l)
for(s=b-1,r=0;r<c;++r){q=r*b
for(p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=a[q+B.b.D(p+n,0,s)]*B.k[n+2]
k[q+p]=o}}m=new Uint8Array(l)
for(l=c-1,r=0;r<c;++r)for(s=r*b,p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=k[B.b.D(r+n,0,l)*b+p]*B.k[n+2]
m[s+p]=o+128>>>8}return m},
iw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e4(256,0,t.S)
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
fa(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=b-1,r=c-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=0;m<c;++m)for(l=m*b,k=m>0,j=m<r,i=0;i<b;++i){h=l+i
g=!0
if(p[h]===0)if(!(i>0&&p[h-1]!==0))if(!(i<s&&p[h+1]!==0))if(!(k&&p[h-b]!==0))g=j&&p[h+b]!==0
if(g)n[h]=1}}return p},
i1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=c-1,r=b-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=1;m<s;++m)for(l=m*b,k=1;k<r;++k){j=l+k
if(p[j]!==0&&p[j-1]!==0&&p[j+1]!==0&&p[j-b]!==0&&p[j+b]!==0)n[j]=1}}return p},
fm(a){var s,r,q,p,o,n=t.S,m=A.e3(n,n),l=A.c([],t.w)
for(n=J.ai(a.a),s=new A.b1(n,a.b);s.m();){r=n.gn()
q=Math.atan2(r.b,r.a)*180/3.141592653589793
p=B.a.T((q<0?q+180:q)/4)
o=m.h(0,p)
if(o==null)o=0
if(o>=5)continue
m.a6(0,p,o+1)
l.push(r)
if(l.length>=24)break}return l},
jd(d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7={},c8=d1*d1,c9=d0.length
if(c9!==c8)throw A.d(A.ce(c9,"prob","erwartet "+c8+" Werte"))
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
j=B.b.N(k,d1)
i=B.b.v(k,d1)
n=new A.dV(c7,o,d0,s,r)
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
h.push(new A.f(e,f,g))}b=A.eh(A.f9(h))
a=b==null?c6:A.ei(b)
if(a==null)return c6
f=t.n
a0=A.c([],f)
a1=A.c([],f)
a2=new A.dU(new A.dT(c7,d1,s))
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
b2=a8.E(a9)
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
b8.push(1)}}b0.push(b6.length>=4?A.fe(b6,b7,b8,0):c6)}c3=A.c([],n)
for(c9=0.25*d1,b1=0;b1<4;++b1){c4=b0[(b1+3)%4]
c5=b0[b1]
k=c4!=null&&c5!=null?A.bk(c4,c5):c6
if(k==null||k.E(a[b1])>c9)k=a[b1]
c3.push(new A.f(k.a/d1,k.b/d1,g))}return A.dZ(c3)},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ci:function ci(){},
cj:function cj(){},
ck:function ck(a,b){this.a=a
this.b=b},
cl:function cl(){},
d2:function d2(a,b,c,d,e,f){var _=this
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
ar:function ar(a,b){this.a=a
this.b=b},
dn:function dn(){},
dp:function dp(){},
dC:function dC(){},
dm:function dm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dl:function dl(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dv:function dv(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(){},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b){this.a=a
this.b=b},
dq:function dq(a){this.a=a},
dr:function dr(){},
dt:function dt(){},
ds:function ds(){},
dA:function dA(){},
du:function du(){},
dh:function dh(){},
dj:function dj(){},
dk:function dk(){},
dV:function dV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a},
bc(a,b,c){return new A.c6(a,b,c,new Float32Array(a*b*c))},
he(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=t.d,c=d.a(B.u.aY(a,null)),b=A.e3(t.N,t.Y)
e.a=0
s=new A.cC(e,a0)
for(r=t.j,q=J.ai(r.a(c.h(0,"layers"))),p=t.S;q.m();){o=d.a(q.gn())
n=J.fQ(r.a(o.h(0,"shape")),p)
m=s.$1(n.a3(n,1,new A.cB()))
l=s.$1(A.au(o.h(0,"cout")))
k=A.ec(o.h(0,"name"))
A.ec(o.h(0,"kind"))
j=A.au(o.h(0,"stride"))
i=A.f4(o.h(0,"relu"))
h=A.au(o.h(0,"cin"))
g=A.au(o.h(0,"cout"))
f=A.f5(o.h(0,"res"))
b.a6(0,k,new A.c_(j,i,h,g,m,l,f===!0))}d=e.a
r=a0.byteLength
if(d!==r)throw A.d(A.eD("weights.bin passt nicht zu model.json ("+d+" von "+r+" Bytes gelesen)"))
d=A.au(c.h(0,"input"))
A.au(c.h(0,"output"))
return new A.cz(d,b)},
hW(b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b7.b,a6=b8.b,a7=B.b.v(a6+2-3,a5)+1,a8=b8.c,a9=B.b.v(a8+2-3,a5)+1,b0=b7.e,b1=A.bc(b0,a7,a9),b2=b7.f,b3=b8.d,b4=b1.d,b5=a6*a8,b6=a7*a9
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
b4[a2]=a3+e*a4}}}if(s)A.fo(b4,n,b6)}return b1},
i_(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=c1.b,b0=c2.b,b1=B.b.v(b0+2-3,a9)+1,b2=c2.c,b3=B.b.v(b2+2-3,a9)+1,b4=c2.a,b5=A.bc(b4,b1,b3),b6=c1.f,b7=c2.d,b8=b5.d,b9=b0*b2,c0=b1*b3
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
b8[a5]=a6+f*a7}}}if(s)A.fo(b8,m,c0)}return b5},
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
dE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.a,f=a.b,e=a.c,d=e*2,c=A.bc(g,f*2,d)
for(s=c.b,r=c.d,q=a.d,p=r.$flags|0,o=0;o<g;++o){n=o*f*e
m=o*s*d
for(l=0;l<s;++l){k=n+(l>>>1)*e
j=m+l*d
for(i=0;i<d;++i){h=q[k+(i>>>1)]
p&2&&A.B(r)
r[j+i]=h}}}return c},
dd(a,b){var s,r,q,p,o,n=a.d,m=b.d
for(s=n.length,r=n.$flags|0,q=0;q<s;++q){p=n[q]
o=m[q]
r&2&&A.B(n)
n[q]=p+o}return a},
fo(a,b,c){var s,r,q
for(s=b+c,r=a.$flags|0,q=b;q<s;++q)if(a[q]<0){r&2&&A.B(a)
a[q]=0}},
j2(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(a8<8||a9<8||a7.length<a8*a9*4)return null
s=a6.a
r=a6.am(A.jg(a7,a8,a9,s,s))
q=r.a
s=r.b
p=A.jd(s,q)
if(p==null)return null
o=A.c([],t.O)
for(n=p.gM(),m=t.X,l=0;l<4;++l){k=n[l]
o.push(new A.f(k.a*q,k.b*q,m))}j=new A.dJ(o)
for(i=0,h=0,g=0,f=0,e=0,d=0,c=0;c<q;++c)for(o=c*q,b=c+0.5,a=0;a<q;++a){a0=a+0.5
for(a1=1/0,a2=0;a2<4;++a2)a1=Math.min(a1,A.dG(j.$3(a2,a0,b)))
a3=s[o+a]
a4=a1>0
a5=a3>0.5
if(a4&&a5)++i
if(a4||a5)++h
if(a1>1.5){g+=a3;++f}else if(a1<-1.5){e+=1-a3;++d}}s=h===0?0:i/h
o=f===0?0:g/f
return new A.cy(p,s,o,d===0?1:e/d)},
jg(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.eW(a4,a6),a1=A.eW(a5,a7),a2=new Float32Array(a6*a5*3)
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
eW(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=a/a0,f=Math.max(g,1),e=B.a.ah(f)*2+1,d=new Int32Array(a0),c=new Int32Array(a0),b=new Float64Array(a0*e)
for(s=0;s<a0;++s){r=(s+0.5)*g
q=Math.max(B.a.T(r-f+0.5),0)
p=Math.min(B.a.T(r+f+0.5),a)
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
c[s]=l}return new A.d4(e,d,c,b)},
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
cA:function cA(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.c=b},
cC:function cC(a,b){this.a=a
this.b=b},
cB:function cB(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a){this.a=a},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw(){var s=0,r=A.iu(t.o),q,p=2,o=[],n,m,l,k,j,i,h,g
var $async$aw=A.iN(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
i=t.m
s=7
return A.de(A.dQ(j.self.fetch("ml/sheet_net.json"),i),$async$aw)
case 7:n=b
s=8
return A.de(A.dQ(j.self.fetch("ml/sheet_net.bin"),i),$async$aw)
case 8:m=b
if(!n.ok||!m.ok){s=1
break}s=9
return A.de(A.dQ(n.text(),t.N),$async$aw)
case 9:l=b
s=10
return A.de(A.dQ(m.arrayBuffer(),t.k),$async$aw)
case 10:k=b
j=k
A.f7(j,0,null)
j=new DataView(j,0)
$.fk=A.he(l,j)
p=2
s=6
break
case 4:p=3
g=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.hS(q,r)
case 2:return A.hR(o.at(-1),r)}})
return A.hT($async$aw,r)},
ja(){var s,r,q,p
A.aw()
s=v.G
r=s.self
q=new A.dO()
if(typeof q=="function")A.ca(A.bn("Attempting to rewrap a JS function.",null))
p=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.hV,q)
p[$.er()]=q
r.onmessage=p
s.self.postMessage({type:"ready"})},
dO:function dO(){},
fB(a){return v.mangledGlobalNames[a]},
ji(a){throw A.y(new A.bA("Field '"+a+"' has been assigned during initialization."),new Error())},
iW(a,b,c,d){var s,r,q,p
if(b<1||c<1||a.length<b*c*4)return null
s=null
if(d!=null)try{s=A.j2(d,a,b,c)}catch(r){}q=s
q=q==null?null:q.a
p=s
if(p==null)p=null
else p=p.b>0.93&&p.c>0.9&&p.d>0.9
return A.iV(a,b,c,q,p===!0)},
je(a){var s,r,q,p=t.n,o=A.c([],p)
for(s=a.gM(),r=0;r<4;++r){q=s[r]
B.c.H(o,A.c([q.a,q.b],p))}return o}},B={}
var w=[A,J,B]
var $={}
A.e1.prototype={}
J.bv.prototype={
I(a,b){return a===b},
gp(a){return A.bN(a)},
i(a){return"Instance of '"+A.bO(a)+"'"},
gt(a){return A.ae(A.ee(this))}}
J.by.prototype={
i(a){return String(a)},
gp(a){return a?519018:218159},
gt(a){return A.ae(t.y)},
$ik:1,
$ix:1}
J.aI.prototype={
I(a,b){return null==b},
i(a){return"null"},
gp(a){return 0},
$ik:1}
J.aL.prototype={$ip:1}
J.V.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.bM.prototype={}
J.a7.prototype={}
J.U.prototype={
i(a){var s=a[$.fD()]
if(s==null)s=a[$.er()]
if(s==null)return this.aH(a)
return"JavaScript function for "+J.aE(s)}}
J.aK.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.aM.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.i.prototype={
a2(a,b){return new A.N(a,A.K(a).j("@<1>").G(b).j("N<1,2>"))},
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
ak(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.E(a))}return s},
a3(a,b,c){return this.ak(a,b,c,t.z)},
A(a,b){return a[b]},
l(a,b,c){var s=a.length
if(b>s)throw A.d(A.P(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.d(A.P(c,b,s,"end",null))
if(b===c)return A.c([],A.K(a))
return A.c(a.slice(b,c),A.K(a))},
u(a,b){return this.l(a,b,null)},
W(a,b,c){A.e7(b,c,a.length)
return A.cF(a,b,c,A.K(a).c)},
gS(a){if(a.length>0)return a[0]
throw A.d(A.bw())},
gL(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.bw())},
aB(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.d(A.E(a))}return!1},
J(a,b){var s,r,q,p,o
a.$flags&2&&A.B(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.id()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.K(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aA(b,2))
if(p>0)this.aS(a,p)},
O(a){return this.J(a,null)},
aS(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
i(a){return A.eE(a,"[","]")},
gB(a){return new J.aj(a,a.length,A.K(a).j("aj<1>"))},
gp(a){return A.bN(a)},
gk(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.fv(a,b))
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
J.co.prototype={}
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
else if(a===b){if(a===0){s=this.ga5(b)
if(this.ga5(a)===s)return 0
if(this.ga5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga5(a){return a===0?1/a<0:a<0},
gao(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bd(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.b0(""+a+".toInt()"))},
ah(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.b0(""+a+".ceil()"))},
T(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.b0(""+a+".floor()"))},
q(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.b0(""+a+".round()"))},
D(a,b,c){if(this.C(b,c)>0)throw A.d(A.iO(b))
if(this.C(a,b)<0)return b
if(this.C(a,c)>0)return c
return a},
V(a,b){var s
if(b>20)throw A.d(A.P(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga5(a))return"-"+s
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
N(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
v(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aw(a,b)},
af(a,b){return(a|0)===a?a/b|0:this.aw(a,b)},
aw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.b0("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+A.m(b)))},
P(a,b){var s
if(a>0)s=this.aU(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aU(a,b){return b>31?0:a>>>b},
gt(a){return A.ae(t.H)},
$ib:1}
J.al.prototype={
gao(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gt(a){return A.ae(t.S)},
$ik:1,
$ia:1}
J.aJ.prototype={
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
gB(a){return new A.bq(J.ai(this.gR()),A.av(this).j("bq<1,2>"))},
gk(a){return J.a3(this.gR())},
A(a,b){return A.av(this).y[1].a(J.dW(this.gR(),b))},
i(a){return J.aE(this.gR())}}
A.bq.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.a4.prototype={
gR(){return this.a}}
A.b5.prototype={$ih:1}
A.b3.prototype={
h(a,b){return this.$ti.y[1].a(J.cd(this.a,b))},
W(a,b,c){var s=this.$ti
return A.eB(J.fT(this.a,b,c),s.c,s.y[1])},
$ih:1,
$ie:1}
A.N.prototype={
a2(a,b){return new A.N(this.a,this.$ti.j("@<1>").G(b).j("N<1,2>"))},
gR(){return this.a}}
A.bA.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.cx.prototype={}
A.h.prototype={}
A.u.prototype={
gB(a){var s=this
return new A.F(s,s.gk(s),A.av(s).j("F<u.E>"))},
b3(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.A(0,0))
if(o!==p.gk(p))throw A.d(A.E(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.A(0,q))
if(o!==p.gk(p))throw A.d(A.E(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.A(0,q))
if(o!==p.gk(p))throw A.d(A.E(p))}return r.charCodeAt(0)==0?r:r}}}
A.aZ.prototype={
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
if(b<0||r>=s.gaO())throw A.d(A.e0(b,s.gk(0),s,"index"))
return J.dW(s.a,r)}}
A.F.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aB(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.E(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
A.aO.prototype={
gk(a){return J.a3(this.a)},
A(a,b){return this.b.$1(J.dW(this.a,b))}}
A.T.prototype={
gB(a){return new A.b1(J.ai(this.a),this.b)}}
A.b1.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.aH.prototype={}
A.aV.prototype={
gk(a){return J.a3(this.a)},
A(a,b){var s=this.a,r=J.aB(s)
return r.A(s,r.gk(s)-1-b)}}
A.bi.prototype={}
A.a9.prototype={$r:"+(1,2)",$s:1}
A.c3.prototype={$r:"+label,maxX,maxY,minX,minY(1,2,3,4,5)",$s:2}
A.cv.prototype={
$0(){return B.a.T(1000*this.a.now())},
$S:12}
A.aW.prototype={}
A.cI.prototype={
F(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aT.prototype={
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
A.cu.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aG.prototype={}
A.bb.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iX:1}
A.a5.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fC(r==null?"unknown":r)+"'"},
gbf(){return this},
$C:"$1",
$R:1,
$D:null}
A.cf.prototype={$C:"$0",$R:0}
A.cg.prototype={$C:"$2",$R:2}
A.cH.prototype={}
A.cD.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fC(s)+"'"}}
A.aF.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aF))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.fy(this.a)^A.bN(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bO(this.a)+"'")}}
A.bP.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aN.prototype={
gk(a){return this.a},
gU(){return new A.a6(this,this.$ti.j("a6<1>"))},
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
a6(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ap(s==null?m.b=m.ad():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ap(r==null?m.c=m.ad():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ad()
p=J.M(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.ae(b,c)]
else{n=m.aE(o,b)
if(n>=0)o[n].b=c
else o.push(m.ae(b,c))}}},
a4(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.E(s))
r=r.c}},
ap(a,b,c){var s=a[b]
if(s==null)a[b]=this.ae(b,c)
else s.b=c},
ae(a,b){var s=this,r=new A.cr(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aQ(a,b){return a[J.M(b)&1073741823]},
aE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cc(a[r].a,b))return r
return-1},
i(a){return A.eF(this)},
ad(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cr.prototype={}
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
A.dK.prototype={
$1(a){return this.a(a)},
$S:19}
A.dL.prototype={
$2(a,b){return this.a(a,b)},
$S:18}
A.dM.prototype={
$1(a){return this.a(a)},
$S:25}
A.ba.prototype={
i(a){return this.aA(!1)},
aA(a){var s,r,q,p,o,n=this.aP(),m=this.ac(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.eJ(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aP(){var s,r=this.$s
while($.d3.length<=r)$.d3.push(null)
s=$.d3[r]
if(s==null){s=this.aM()
$.d3[r]=s}return s},
aM(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.c(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.h8(k,!1,t.K)
k.$flags=3
return k}}
A.c1.prototype={
ac(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.c1&&this.$s===b.$s&&J.cc(this.a,b.a)&&J.cc(this.b,b.b)},
gp(a){return A.eH(this.$s,this.a,this.b,B.e)}}
A.c2.prototype={
ac(){return this.a},
I(a,b){if(b==null)return!1
return b instanceof A.c2&&this.$s===b.$s&&A.hx(this.a,b.a)},
gp(a){return A.eH(this.$s,A.h9(this.a),B.e,B.e)}}
A.ap.prototype={
gt(a){return B.A},
$ik:1}
A.ao.prototype={$iao:1}
A.aR.prototype={}
A.bD.prototype={
gt(a){return B.B},
$ik:1}
A.aq.prototype={
gk(a){return a.length},
$iC:1}
A.aP.prototype={
h(a,b){A.aa(b,a,a.length)
return a[b]},
$ih:1,
$ie:1}
A.aQ.prototype={$ih:1,$ie:1}
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
A.aS.prototype={
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
G(a){return A.f1(v.typeUniverse,this,a)}}
A.bX.prototype={}
A.d9.prototype={
i(a){return A.D(this.a,null)}}
A.bW.prototype={
i(a){return this.a}}
A.bd.prototype={$iR:1}
A.cL.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cK.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.cM.prototype={
$0(){this.a.$0()},
$S:5}
A.cN.prototype={
$0(){this.a.$0()},
$S:5}
A.d7.prototype={
aI(a,b){if(self.setTimeout!=null)self.setTimeout(A.aA(new A.d8(this,b),0),a)
else throw A.d(A.b0("`setTimeout()` not found."))}}
A.d8.prototype={
$0(){this.b.$0()},
$S:0}
A.bT.prototype={
ai(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aq(a)
else{s=r.a
if(r.$ti.j("ak<1>").b(a))s.ar(a)
else s.au(a)}},
aj(a,b){var s=this.a
if(this.b)s.a9(new A.I(a,b))
else s.a8(new A.I(a,b))}}
A.df.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dg.prototype={
$2(a,b){this.a.$2(1,new A.aG(a,b))},
$S:17}
A.dF.prototype={
$2(a,b){this.a(a,b)},
$S:16}
A.I.prototype={
i(a){return A.m(this.a)},
$io:1,
gX(){return this.b}}
A.bV.prototype={
aj(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.eM("Future already completed"))
s.a8(A.ic(a,b))},
aC(a){return this.aj(a,null)}}
A.b2.prototype={
ai(a){var s=this.a
if((s.a&30)!==0)throw A.d(A.eM("Future already completed"))
s.aq(a)}}
A.as.prototype={
b4(a){if((this.c&15)!==6)return!0
return this.b.b.an(this.d,a.a)},
b0(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.b9(r,p,a.b)
else q=o.an(r,p)
try{p=q
return p}catch(s){if(t._.b(A.ah(s))){if((this.c&1)!==0)throw A.d(A.bn("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bn("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
aG(a,b,c){var s,r=$.q
if(r===B.d){if(!t.Q.b(b)&&!t.v.b(b))throw A.d(A.ce(b,"onError",u.c))}else b=A.iA(b,r)
s=new A.w(r,c.j("w<0>"))
this.a7(new A.as(s,3,a,b,this.$ti.j("@<1>").G(c).j("as<1,2>")))
return s},
az(a,b,c){var s=new A.w($.q,c.j("w<0>"))
this.a7(new A.as(s,19,a,b,this.$ti.j("@<1>").G(c).j("as<1,2>")))
return s},
aT(a){this.a=this.a&1|16
this.c=a},
Y(a){this.a=a.a&30|this.a&1
this.c=a.c},
a7(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a7(a)
return}s.Y(r)}A.c8(null,null,s.b,new A.cR(s,a))}},
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
return}n.Y(s)}m.a=n.a0(a)
A.c8(null,null,n.b,new A.cV(m,n))}},
a_(){var s=this.c
this.c=null
return this.a0(s)},
a0(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
au(a){var s=this,r=s.a_()
s.a=8
s.c=a
A.at(s,r)},
aL(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a_()
q.Y(a)
A.at(q,r)},
a9(a){var s=this.a_()
this.aT(a)
A.at(this,s)},
aq(a){if(this.$ti.j("ak<1>").b(a)){this.ar(a)
return}this.aK(a)},
aK(a){this.a^=2
A.c8(null,null,this.b,new A.cT(this,a))},
ar(a){A.e9(a,this,!1)
return},
a8(a){this.a^=2
A.c8(null,null,this.b,new A.cS(this,a))},
$iak:1}
A.cR.prototype={
$0(){A.at(this.a,this.b)},
$S:0}
A.cV.prototype={
$0(){A.at(this.b,this.a.a)},
$S:0}
A.cU.prototype={
$0(){A.e9(this.a.a,this.b,!0)},
$S:0}
A.cT.prototype={
$0(){this.a.au(this.b)},
$S:0}
A.cS.prototype={
$0(){this.a.a9(this.b)},
$S:0}
A.cY.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.am(q.d)}catch(p){s=A.ah(p)
r=A.aC(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dY(q)
n=k.a
n.c=new A.I(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.aG(new A.cZ(l,m),new A.d_(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cZ.prototype={
$1(a){this.a.aL(this.b)},
$S:4}
A.d_.prototype={
$2(a,b){this.a.a9(new A.I(a,b))},
$S:14}
A.cX.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.an(p.d,this.b)}catch(o){s=A.ah(o)
r=A.aC(o)
q=s
p=r
if(p==null)p=A.dY(q)
n=this.a
n.c=new A.I(q,p)
n.b=!0}},
$S:0}
A.cW.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.b4(s)&&p.a.e!=null){p.c=p.a.b0(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.aC(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dY(p)
m=l.b
m.c=new A.I(p,n)
p=m}p.b=!0}},
$S:0}
A.bU.prototype={}
A.c4.prototype={}
A.dc.prototype={}
A.d5.prototype={
bb(a){var s,r,q
try{if(B.d===$.q){a.$0()
return}A.fp(null,null,this,a)}catch(q){s=A.ah(q)
r=A.aC(q)
A.ej(s,r)}},
aX(a){return new A.d6(this,a)},
b8(a){if($.q===B.d)return a.$0()
return A.fp(null,null,this,a)},
am(a){return this.b8(a,t.z)},
bc(a,b){if($.q===B.d)return a.$1(b)
return A.iC(null,null,this,a,b)},
an(a,b){var s=t.z
return this.bc(a,b,s,s)},
ba(a,b,c){if($.q===B.d)return a.$2(b,c)
return A.iB(null,null,this,a,b,c)},
b9(a,b,c){var s=t.z
return this.ba(a,b,c,s,s,s)},
b7(a){return a},
aF(a){var s=t.z
return this.b7(a,s,s,s)}}
A.d6.prototype={
$0(){return this.a.bb(this.b)},
$S:0}
A.dB.prototype={
$0(){A.h1(this.a,this.b)},
$S:0}
A.j.prototype={
gB(a){return new A.F(a,this.gk(a),A.a1(a).j("F<j.E>"))},
A(a,b){return this.h(a,b)},
gS(a){if(this.gk(a)===0)throw A.d(A.bw())
return this.h(a,0)},
gL(a){if(this.gk(a)===0)throw A.d(A.bw())
return this.h(a,this.gk(a)-1)},
ak(a,b,c){var s,r,q=this.gk(a)
for(s=b,r=0;r<q;++r){s=c.$2(s,this.h(a,r))
if(q!==this.gk(a))throw A.d(A.E(a))}return s},
a3(a,b,c){return this.ak(a,b,c,t.z)},
a2(a,b){return new A.N(a,A.a1(a).j("@<j.E>").G(b).j("N<1,2>"))},
l(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.e7(b,c,r)
s=A.W(this.W(a,b,c),A.a1(a).j("j.E"))
return s},
u(a,b){return this.l(a,b,null)},
W(a,b,c){A.e7(b,c,this.gk(a))
return A.cF(a,b,c,A.a1(a).j("j.E"))},
i(a){return A.eE(a,"[","]")}}
A.O.prototype={
a4(a,b){var s,r,q,p
for(s=this.gU(),s=s.gB(s),r=A.av(this).j("O.V");s.m();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gk(a){var s=this.gU()
return s.gk(s)},
i(a){return A.eF(this)},
$ibC:1}
A.cs.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:13}
A.bY.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.aR(b):s}},
gk(a){return this.b==null?this.c.a:this.Z().length},
gU(){if(this.b==null){var s=this.c
return new A.a6(s,s.$ti.j("a6<1>"))}return new A.bZ(this)},
a4(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a4(0,b)
s=o.Z()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.di(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.E(o))}},
Z(){var s=this.c
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
aR(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.di(this.a[a])
return this.b[a]=s}}
A.bZ.prototype={
gk(a){return this.a.gk(0)},
A(a,b){var s=this.a
return s.b==null?s.gU().A(0,b):s.Z()[b]},
gB(a){var s=this.a
if(s.b==null){s=s.gU()
s=s.gB(s)}else{s=s.Z()
s=new J.aj(s,s.length,A.K(s).j("aj<1>"))}return s}}
A.br.prototype={}
A.bt.prototype={}
A.cp.prototype={
aY(a,b){var s=A.ix(a,this.gaZ().a)
return s},
gaZ(){return B.y}}
A.cq.prototype={}
A.o.prototype={
gX(){return A.hb(this)}}
A.bo.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cm(s)
return"Assertion failed"}}
A.R.prototype={}
A.H.prototype={
gab(){return"Invalid argument"+(!this.a?"(s)":"")},
gaa(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gab()+q+o
if(!s.a)return n
return n+s.gaa()+": "+A.cm(s.gal())},
gal(){return this.b}}
A.aU.prototype={
gal(){return this.b},
gab(){return"RangeError"},
gaa(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bu.prototype={
gal(){return this.b},
gab(){return"RangeError"},
gaa(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.b_.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bR.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.aY.prototype={
i(a){return"Bad state: "+this.a}}
A.bs.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cm(s)+"."}}
A.aX.prototype={
i(a){return"Stack Overflow"},
gX(){return null},
$io:1}
A.cQ.prototype={
i(a){return"Exception: "+this.a}}
A.cn.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.n.prototype={
a2(a,b){return A.eB(this,A.av(this).j("n.E"),b)},
gk(a){var s,r=this.gB(this)
for(s=0;r.m();)++s
return s},
A(a,b){var s,r
A.e6(b,"index")
s=this.gB(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.e0(b,b-r,this,"index"))},
i(a){return A.h6(this,"(",")")}}
A.A.prototype={
gp(a){return A.l.prototype.gp.call(this,0)},
i(a){return"null"}}
A.l.prototype={$il:1,
I(a,b){return this===b},
gp(a){return A.bN(this)},
i(a){return"Instance of '"+A.bO(this)+"'"},
gt(a){return A.j0(this)},
toString(){return this.i(this)}}
A.c5.prototype={
i(a){return""},
$iX:1}
A.cE.prototype={
gb_(){var s,r=this.b
if(r==null)r=$.e5.$0()
s=r-this.a
if($.es()===1000)return s
return B.b.af(s,1000)}}
A.bQ.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.ct.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.dR.prototype={
$1(a){return this.a.ai(a)},
$S:2}
A.dS.prototype={
$1(a){if(a==null)return this.a.aC(new A.ct(a===undefined))
return this.a.aC(a)},
$S:2}
A.f.prototype={
i(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
I(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b},
gp(a){return A.eO(B.a.gp(this.a),B.a.gp(this.b),0)},
E(a){var s=this.a-a.a,r=this.b-a.b
return Math.sqrt(s*s+r*r)}}
A.ch.prototype={
gM(){var s=this
return A.c([s.a,s.b,s.c,s.d],t.O)},
gb2(){var s,r,q,p,o,n,m,l,k,j=this.gM()
for(s=null,r=0;r<4;r=p){q=j[r]
p=r+1
o=j[p%4]
n=j[(r+2)%4]
m=o.a
l=o.b
k=(m-q.a)*(n.b-l)-(l-q.b)*(n.a-m)
if(Math.abs(k)<1e-9)return!1
if(s==null)s=J.ew(k)
if(J.ew(k)!==s)return!1}return!0},
i(a){var s=this.gM()
return"DocumentQuad("+new A.aO(s,new A.cl(),A.K(s).j("aO<1,v>")).b3(0,", ")+")"}}
A.ci.prototype={
$2(a,b){return a+b.a},
$S:3}
A.cj.prototype={
$2(a,b){return a+b.b},
$S:3}
A.ck.prototype={
$2(a,b){var s=this.a,r=this.b
return B.a.C(Math.atan2(a.b-s,a.a-r),Math.atan2(b.b-s,b.a-r))},
$S:11}
A.cl.prototype={
$1(a){return"("+B.a.V(a.a,3)+", "+B.a.V(a.b,3)+")"},
$S:15}
A.d2.prototype={}
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
A.ar.prototype={}
A.dn.prototype={
$1(a){return a.gaD()},
$S:10}
A.dp.prototype={
$1(a){return!a.gaD()},
$S:10}
A.dC.prototype={
$1(a){return a},
$S:9}
A.dm.prototype={
$1(a){var s=this,r=a*s.c,q=s.a,p=B.a.q(s.b+r*q.a),o=B.a.q(s.d+r*q.b)
return p<0||o<0||p>=s.e||o>=s.f?-1:o*s.e+p},
$S:8}
A.dl.prototype={
$1(a){var s=this.a.$1(a)
return s<0?-1:this.b[s]},
$S:8}
A.d0.prototype={}
A.dv.prototype={
$2(a,b){var s=this.a
return B.b.C(s[b],s[a])},
$S:7}
A.dy.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this,k=A.c([],t.h),j=b?l.a:l.b,i=new A.dz(b,(b?l.b:l.a)/2)
for(s=0.12*j,r=0;r<a.length;r=q)for(q=r+1,p=q;p<a.length;++p){o=a[r]
n=a[p]
if(i.$1(o)>i.$1(n)){m=n
n=o
o=m}if(i.$1(n)-i.$1(o)<s)continue
if(Math.abs(o.a*n.a+o.b*n.b)<0.82)continue
k.push(new A.a9(o,n))}return k},
$S:20}
A.dz.prototype={
$1(a){var s=this.b,r=a.c,q=a.a,p=a.b
return this.a?(r-q*s)/p:(r-p*s)/q},
$S:21}
A.dw.prototype={
$1(a){var s=this,r=a.a,q=!0
if(!(r<s.a))if(!(r>s.b)){r=a.b
r=r<s.c||r>s.d}else r=q
else r=q
return r},
$S:22}
A.dx.prototype={
$2(a,b){return B.a.C(b.a,a.a)},
$S:23}
A.cO.prototype={
ag(a){var s=this.b,r=t.n,q=this.a
return s==null?A.c([q[a]],r):A.c([q[a],s[a],this.c[a]],r)}}
A.cP.prototype={
$0(){var s,r,q,p,o=A.c([],t.n)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.z)(s),++p)o.push(J.cd(s[p],q))
B.c.O(o)
return o[o.length/2|0]},
$S:24}
A.dq.prototype={
$2(a,b){var s,r=this.a,q=r[0],p=q.a,o=r[1]
p+=(o.a-p)*a
q=q.b
q+=(o.b-q)*a
o=r[3]
s=o.a
r=r[2]
o=o.b
return new A.f(p+(s+(r.a-s)*a-p)*b,q+(o+(r.b-o)*a-q)*b,t.X)},
$S:38}
A.dr.prototype={
$2(a,b){return B.a.C(J.cd(a,0),J.cd(b,0))},
$S:26}
A.dt.prototype={
$2(a,b){var s,r,q=A.c([],t.n)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.z)(a),++r)q.push(A.b4(a[r],b))
B.c.O(q)
s=q.length
return s===0?0:q[s/2|0]},
$S:27}
A.ds.prototype={
$2(a,b){return a+b},
$S:28}
A.dA.prototype={
$1(a){return a==null},
$S:29}
A.du.prototype={
$1(a){return a},
$S:9}
A.dh.prototype={
$2(a,b){var s=b.a,r=a.a
return B.b.C((s[1]-s[3])*(s[2]-s[4]),(r[1]-r[3])*(r[2]-r[4]))},
$S:30}
A.dj.prototype={
$2(a,b){var s=a.a,r=b.a
return s!==r?B.a.C(s,r):B.a.C(a.b,b.b)},
$S:11}
A.dk.prototype={
$3(a,b,c){var s=a.a,r=a.b
return(b.a-s)*(c.b-r)-(b.b-r)*(c.a-s)},
$S:31}
A.dV.prototype={
$1(a){var s,r,q=this
if(q.c[a]>0.5&&q.d[a]===0){s=q.d
r=q.a.a
s.$flags&2&&A.B(s)
s[a]=r
r=q.e
s=q.b.a++
r.$flags&2&&A.B(r)
r[s]=a}},
$S:32}
A.dT.prototype={
$2(a,b){var s=!1
if(a>=0)if(b>=0){s=this.b
s=a<s&&b<s&&this.c[b*s+a]===this.a.b}return s},
$S:6}
A.dU.prototype={
$2(a,b){var s=this.a
return s.$2(a,b)||s.$2(a-1,b)||s.$2(a+1,b)||s.$2(a,b-1)||s.$2(a,b+1)},
$S:6}
A.c6.prototype={}
A.c_.prototype={}
A.cA.prototype={}
A.cz.prototype={
am(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=a1.length,a=c*c,a0=a*3
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
n=d.K("s1.0",A.hW(a,s))
m=d.a1("s2",2,n)
l=d.a1("s3",2,m)
k=d.a1("s4",3,l)
j=d.aN(d.a1("s5",3,k))
a=b.h(0,"l5")
a.toString
a=A.dE(A.ab(a,j))
a0=b.h(0,"l4")
a0.toString
a0=A.dE(d.K("d4",A.dd(a,A.ab(a0,k))))
a=b.h(0,"l3")
a.toString
a=A.dE(d.K("d3",A.dd(a0,A.ab(a,l))))
a0=b.h(0,"l2")
a0.toString
a0=A.dE(d.K("d2",A.dd(a,A.ab(a0,m))))
a=b.h(0,"l1")
a.toString
i=d.K("d1",A.dd(a0,A.ab(a,n)))
b=b.h(0,"head")
b.toString
h=A.ab(b,i)
b=h.c
g=h.b*b
f=new Float32Array(g)
e=new Float32Array(g)
for(a=h.d,q=0;q<g;++q){f[q]=1/(1+Math.exp(-a[q]))
e[q]=1/(1+Math.exp(-a[g+q]))}return new A.cA(b,f)},
a1(a,b,c){var s,r
for(s=a+".",r=0;r<b;++r)c=this.K(s+r,c)
return c},
K(a,b){var s,r,q,p,o,n,m=this.c,l=m.h(0,a+".pw")
l.toString
m=m.h(0,a+".dw")
m.toString
s=A.ab(l,A.i_(m,b))
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
A.cC.prototype={
$1(a){var s,r,q,p=new Float32Array(a)
for(s=this.b,r=this.a,q=0;q<a;++q){p[q]=s.getFloat32(r.a,!0)
r.a+=4}return p},
$S:34}
A.cB.prototype={
$2(a,b){return a*b},
$S:7}
A.cy.prototype={
i(a){var s=this
return"SheetGuess(fit "+B.a.V(s.b,3)+", innen "+B.a.V(s.c,3)+", au\xdfen "+B.a.V(s.d,3)+", "+s.a.i(0)+")"}}
A.dJ.prototype={
$3(a,b,c){var s,r=this.a,q=r[a],p=r[(a+1)%4],o=q.E(p)
if(o===0)return 0
r=q.a
s=q.b
return((p.a-r)*(c-s)-(p.b-s)*(b-r))/o},
$S:35}
A.d4.prototype={}
A.dO.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.f6(a.data),g=new A.cE()
$.es()
n=$.e5.$0()
g.a=n
g.b=null
s=g
try{n=h.pixels
A.f7(n,0,null)
n=new Uint8Array(n,0)
r=A.iW(n,h.width,h.height,$.fk)
n=v.G.self
m=h.id
if(r==null)q=null
else{q=A.c([],t.n)
for(l=A.je(r),k=l.length,j=0;j<l.length;l.length===k||(0,A.z)(l),++j){p=l[j]
J.fP(q,p)}q=t.c.a(q)}n.postMessage({type:"result",id:m,quad:q,ms:s.gb_()})}catch(i){o=A.ah(i)
q=v.G.self
q.postMessage({type:"error",id:h.id,error:A.m(o)})}},
$S:36};(function aliases(){var s=J.V.prototype
s.aH=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1
s(J,"id","h7",37)
r(A,"is","ha",12)
q(A,"iP","hl",1)
q(A,"iQ","hm",1)
q(A,"iR","hn",1)
r(A,"ft","iI",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.l,null)
q(A.l,[A.e1,J.bv,A.aW,J.aj,A.n,A.bq,A.o,A.cx,A.F,A.b1,A.aH,A.ba,A.a5,A.cI,A.cu,A.aG,A.bb,A.O,A.cr,A.bB,A.J,A.bX,A.d9,A.d7,A.bT,A.I,A.bV,A.as,A.w,A.bU,A.c4,A.dc,A.j,A.br,A.bt,A.aX,A.cQ,A.cn,A.A,A.c5,A.cE,A.bQ,A.ct,A.f,A.ch,A.d2,A.r,A.c0,A.ar,A.d0,A.cO,A.c6,A.c_,A.cA,A.cz,A.cy,A.d4])
q(J.bv,[J.by,J.aI,J.aL,J.aK,J.aM,J.am,J.an])
q(J.aL,[J.V,J.i,A.ap,A.aR])
q(J.V,[J.bM,J.a7,J.U])
r(J.bx,A.aW)
r(J.co,J.i)
q(J.am,[J.al,J.aJ])
q(A.n,[A.Y,A.h,A.T])
q(A.Y,[A.a4,A.bi])
r(A.b5,A.a4)
r(A.b3,A.bi)
r(A.N,A.b3)
q(A.o,[A.bA,A.R,A.bz,A.bS,A.bP,A.bW,A.bo,A.H,A.b_,A.bR,A.aY,A.bs])
q(A.h,[A.u,A.a6])
q(A.u,[A.aZ,A.aO,A.aV,A.bZ])
q(A.ba,[A.c1,A.c2])
r(A.a9,A.c1)
r(A.c3,A.c2)
q(A.a5,[A.cf,A.cg,A.cH,A.dK,A.dM,A.cL,A.cK,A.df,A.cZ,A.dR,A.dS,A.cl,A.dn,A.dp,A.dC,A.dm,A.dl,A.dz,A.dw,A.dA,A.du,A.dk,A.dV,A.cC,A.dJ,A.dO])
q(A.cf,[A.cv,A.cM,A.cN,A.d8,A.cR,A.cV,A.cU,A.cT,A.cS,A.cY,A.cX,A.cW,A.d6,A.dB,A.cP])
r(A.aT,A.R)
q(A.cH,[A.cD,A.aF])
q(A.O,[A.aN,A.bY])
q(A.cg,[A.dL,A.dg,A.dF,A.d_,A.cs,A.ci,A.cj,A.ck,A.dv,A.dy,A.dx,A.dq,A.dr,A.dt,A.ds,A.dh,A.dj,A.dT,A.dU,A.cB])
r(A.ao,A.ap)
q(A.aR,[A.bD,A.aq])
q(A.aq,[A.b6,A.b8])
r(A.b7,A.b6)
r(A.aP,A.b7)
r(A.b9,A.b8)
r(A.aQ,A.b9)
q(A.aP,[A.bE,A.bF])
q(A.aQ,[A.bG,A.bH,A.bI,A.bJ,A.bK,A.aS,A.bL])
r(A.bd,A.bW)
r(A.b2,A.bV)
r(A.d5,A.dc)
r(A.cp,A.br)
r(A.cq,A.bt)
q(A.H,[A.aU,A.bu])
s(A.bi,A.j)
s(A.b6,A.j)
s(A.b7,A.aH)
s(A.b8,A.j)
s(A.b9,A.aH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",b:"double",fx:"num",v:"String",x:"bool",A:"Null",e:"List",l:"Object",bC:"Map",p:"JSObject"},mangledNames:{},types:["~()","~(~())","~(@)","b(b,f<b>)","A(@)","A()","x(a,a)","a(a,a)","a(b)","x(x)","x(r)","a(f<b>,f<b>)","a()","~(l?,l?)","A(l,X)","v(f<b>)","~(a,@)","A(@,X)","@(@,v)","@(@)","e<+(r,r)>(e<r>,x)","b(r)","x(f<b>)","a(+(b,e<f<b>>),+(b,e<f<b>>))","b()","@(v)","a(e<b>,e<b>)","b(e<e<b>>,e<b>)","b(b,b)","x(r?)","a(+label,maxX,maxY,minX,minY(a,a,a,a,a),+label,maxX,maxY,minX,minY(a,a,a,a,a))","b(f<b>,f<b>,f<b>)","~(a)","A(~())","e_(a)","b(a,b,b)","A(p)","a(@,@)","f<b>(b,b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a9&&a.b(c.a)&&b.b(c.b),"5;label,maxX,maxY,minX,minY":a=>b=>b instanceof A.c3&&A.jc(a,b.a)}}
A.hF(v.typeUniverse,JSON.parse('{"bM":"V","a7":"V","U":"V","jp":"ap","by":{"x":[],"k":[]},"aI":{"k":[]},"aL":{"p":[]},"V":{"p":[]},"i":{"e":["1"],"h":["1"],"p":[]},"bx":{"aW":[]},"co":{"i":["1"],"e":["1"],"h":["1"],"p":[]},"am":{"b":[]},"al":{"b":[],"a":[],"k":[]},"aJ":{"b":[],"k":[]},"an":{"v":[],"k":[]},"Y":{"n":["2"]},"a4":{"Y":["1","2"],"n":["2"],"n.E":"2"},"b5":{"a4":["1","2"],"Y":["1","2"],"h":["2"],"n":["2"],"n.E":"2"},"b3":{"j":["2"],"e":["2"],"Y":["1","2"],"h":["2"],"n":["2"]},"N":{"b3":["1","2"],"j":["2"],"e":["2"],"Y":["1","2"],"h":["2"],"n":["2"],"j.E":"2","n.E":"2"},"bA":{"o":[]},"h":{"n":["1"]},"u":{"h":["1"],"n":["1"]},"aZ":{"u":["1"],"h":["1"],"n":["1"],"u.E":"1","n.E":"1"},"aO":{"u":["2"],"h":["2"],"n":["2"],"u.E":"2","n.E":"2"},"T":{"n":["1"],"n.E":"1"},"aV":{"u":["1"],"h":["1"],"n":["1"],"u.E":"1","n.E":"1"},"aT":{"R":[],"o":[]},"bz":{"o":[]},"bS":{"o":[]},"bb":{"X":[]},"bP":{"o":[]},"aN":{"O":["1","2"],"bC":["1","2"],"O.V":"2"},"a6":{"h":["1"],"n":["1"],"n.E":"1"},"ao":{"p":[],"k":[]},"ap":{"p":[],"k":[]},"aR":{"p":[]},"bD":{"p":[],"k":[]},"aq":{"C":["1"],"p":[]},"aP":{"j":["b"],"e":["b"],"C":["b"],"h":["b"],"p":[]},"aQ":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[]},"bE":{"j":["b"],"e":["b"],"C":["b"],"h":["b"],"p":[],"k":[],"j.E":"b"},"bF":{"j":["b"],"e":["b"],"C":["b"],"h":["b"],"p":[],"k":[],"j.E":"b"},"bG":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bH":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bI":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bJ":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bK":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"aS":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bL":{"j":["a"],"e":["a"],"C":["a"],"h":["a"],"p":[],"k":[],"j.E":"a"},"bW":{"o":[]},"bd":{"R":[],"o":[]},"I":{"o":[]},"b2":{"bV":["1"]},"w":{"ak":["1"]},"O":{"bC":["1","2"]},"bY":{"O":["v","@"],"bC":["v","@"],"O.V":"@"},"bZ":{"u":["v"],"h":["v"],"n":["v"],"u.E":"v","n.E":"v"},"e":{"h":["1"]},"bo":{"o":[]},"R":{"o":[]},"H":{"o":[]},"aU":{"o":[]},"bu":{"o":[]},"b_":{"o":[]},"bR":{"o":[]},"aY":{"o":[]},"bs":{"o":[]},"aX":{"o":[]},"c5":{"X":[]},"h5":{"e":["a"],"h":["a"]},"hj":{"e":["a"],"h":["a"]},"hi":{"e":["a"],"h":["a"]},"h3":{"e":["a"],"h":["a"]},"hg":{"e":["a"],"h":["a"]},"h4":{"e":["a"],"h":["a"]},"hh":{"e":["a"],"h":["a"]},"e_":{"e":["b"],"h":["b"]},"h2":{"e":["b"],"h":["b"]}}'))
A.hE(v.typeUniverse,JSON.parse('{"b1":1,"aH":1,"bi":2,"bB":1,"aq":1,"c4":1,"br":2,"bt":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.em
return{U:s("h<@>"),C:s("o"),Z:s("jo"),G:s("i<e<e<b>>>"),E:s("i<e<f<b>>>"),q:s("i<e<b>>"),f:s("i<l>"),O:s("i<f<b>>"),h:s("i<+(r,r)>"),V:s("i<+(b,e<f<b>>)>"),r:s("i<+label,maxX,maxY,minX,minY(a,a,a,a,a)>"),s:s("i<v>"),x:s("i<ar>"),w:s("i<r>"),u:s("i<x>"),n:s("i<b>"),D:s("i<@>"),t:s("i<a>"),c:s("i<l?>"),b:s("i<r?>"),T:s("aI"),m:s("p"),g:s("U"),p:s("C<@>"),j:s("e<@>"),d:s("bC<v,@>"),k:s("ao"),P:s("A"),K:s("l"),X:s("f<b>"),L:s("jq"),F:s("+()"),B:s("+(b,e<f<b>>)"),e:s("+label,maxX,maxY,minX,minY(a,a,a,a,a)"),l:s("X"),N:s("v"),J:s("k"),_:s("R"),M:s("a7"),a:s("T<x>"),W:s("w<@>"),Y:s("c_"),A:s("r"),I:s("c0"),y:s("x"),i:s("b"),z:s("@"),v:s("@(l)"),Q:s("@(l,X)"),S:s("a"),bc:s("ak<A>?"),aQ:s("p?"),R:s("l?"),aD:s("v?"),cG:s("x?"),dd:s("b?"),a3:s("a?"),ae:s("fx?"),H:s("fx"),o:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.v=J.bv.prototype
B.c=J.i.prototype
B.b=J.al.prototype
B.a=J.am.prototype
B.w=J.U.prototype
B.x=J.aL.prototype
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

B.u=new A.cp()
B.e=new A.cx()
B.d=new A.d5()
B.f=new A.c5()
B.y=new A.cq(null)
B.k=s([1,4,6,4,1],t.t)
B.z=s([],t.E)
B.m=new A.a9(0,0)
B.A=A.L("jk")
B.B=A.L("jl")
B.C=A.L("e_")
B.D=A.L("h2")
B.E=A.L("h3")
B.F=A.L("h4")
B.G=A.L("h5")
B.H=A.L("l")
B.I=A.L("hg")
B.J=A.L("hh")
B.K=A.L("hi")
B.L=A.L("hj")})();(function staticFields(){$.d1=null
$.ad=A.c([],t.f)
$.eI=null
$.cw=0
$.e5=A.is()
$.ez=null
$.ey=null
$.fw=null
$.fs=null
$.fA=null
$.dH=null
$.dN=null
$.eo=null
$.d3=A.c([],A.em("i<e<l>?>"))
$.ax=null
$.bl=null
$.bm=null
$.eg=!1
$.q=B.d
$.fk=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jn","fD",()=>A.dI("_$dart_dartClosure"))
s($,"jm","er",()=>A.dI("_$dart_dartClosure_dartJSInterop"))
s($,"jG","fO",()=>A.c([new J.bx()],A.em("i<aW>")))
s($,"jt","fE",()=>A.S(A.cJ({
toString:function(){return"$receiver$"}})))
s($,"ju","fF",()=>A.S(A.cJ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jv","fG",()=>A.S(A.cJ(null)))
s($,"jw","fH",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jz","fK",()=>A.S(A.cJ(void 0)))
s($,"jA","fL",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jy","fJ",()=>A.S(A.eP(null)))
s($,"jx","fI",()=>A.S(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jC","fN",()=>A.S(A.eP(void 0)))
s($,"jB","fM",()=>A.S(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jD","et",()=>A.hk())
s($,"jF","cb",()=>A.fy(B.H))
s($,"jr","es",()=>{A.hc()
return $.cw})
s($,"jE","eu",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.iT(r*3.141592653589793/180))
return A.eG(q)})
s($,"jH","ev",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.jh(r*3.141592653589793/180))
return A.eG(q)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ap,ArrayBuffer:A.ao,ArrayBufferView:A.aR,DataView:A.bD,Float32Array:A.bE,Float64Array:A.bF,Int16Array:A.bG,Int32Array:A.bH,Int8Array:A.bI,Uint16Array:A.bJ,Uint32Array:A.bK,Uint8ClampedArray:A.aS,CanvasPixelArray:A.aS,Uint8Array:A.bL})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aq.$nativeSuperclassTag="ArrayBufferView"
A.b6.$nativeSuperclassTag="ArrayBufferView"
A.b7.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.ja
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=scan_worker.js.map
