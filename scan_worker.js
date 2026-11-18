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
if(a[b]!==s){A.ki(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eM(b)
return new s(c,this)}:function(){if(s===null)s=A.eM(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eM(a).prototype
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
eT(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eP(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eR==null){A.jZ()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.e(A.fl("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dc
if(o==null)o=$.dc=A.e8(n)
p=q[o]}if(p!=null)return p
p=A.k2(a)
if(p!=null)return p
if(typeof a=="function")return B.x
s=Object.getPrototypeOf(a)
if(s==null)return B.m
if(s===Object.prototype)return B.m
if(typeof q=="function"){o=$.dc
if(o==null)o=$.dc=A.e8(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
hN(a,b){if(a<0||a>4294967295)throw A.e(A.M(a,0,4294967295,"length",null))
return J.hO(new Array(a),b)},
hO(a,b){var s=A.c(a,b.i("i<0>"))
s.$flags=1
return s},
hP(a,b){return J.hv(a,b)},
al(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.as.prototype
return J.aT.prototype}if(typeof a=="string")return J.au.prototype
if(a==null)return J.aS.prototype
if(typeof a=="boolean")return J.bL.prototype
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a0.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.l)return a
return J.eP(a)},
aK(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a0.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.l)return a
return J.eP(a)},
C(a){if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a0.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.l)return a
return J.eP(a)},
jU(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.as.prototype
return J.aT.prototype}if(a==null)return a
if(!(a instanceof A.l))return J.ae.prototype
return a},
jV(a){if(typeof a=="number")return J.at.prototype
if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.ae.prototype
return a},
aN(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.al(a).P(a,b)},
cq(a,b){if(typeof b==="number")if(Array.isArray(a)||A.h7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.C(a).h(a,b)},
ht(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.h7(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.C(a).F(a,b,c)},
f_(a,b){return J.C(a).b2(a,b)},
hu(a,b){return J.C(a).a6(a,b)},
hv(a,b){return J.jV(a).D(a,b)},
ep(a,b){return J.C(a).B(a,b)},
P(a){return J.al(a).gq(a)},
ao(a){return J.C(a).gE(a)},
a8(a){return J.aK(a).gk(a)},
hw(a){return J.al(a).gu(a)},
f0(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.jU(a).gaq(a)},
hx(a,b,c){return J.C(a).a_(a,b,c)},
hy(a,b,c){return J.C(a).aI(a,b,c)},
eq(a,b,c){return J.C(a).m(a,b,c)},
aO(a){return J.al(a).j(a)},
bI:function bI(){},
bL:function bL(){},
aS:function aS(){},
aV:function aV(){},
a1:function a1(){},
bY:function bY(){},
ae:function ae(){},
a0:function a0(){},
aU:function aU(){},
aW:function aW(){},
i:function i(a){this.$ti=a},
bK:function bK(){},
cz:function cz(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
as:function as(){},
aT:function aT(){},
au:function au(){}},A={eu:function eu(){},
f5(a,b,c){if(t.U.b(a))return new A.be(a,b.i("@<0>").H(c).i("be<1,2>"))
return new A.aa(a,b.i("@<0>").H(c).i("aa<1,2>"))},
T(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cQ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fj(a,b,c){return A.cQ(A.T(A.T(c,a),b))},
co(a,b,c){return a},
eS(a){var s,r
for(s=$.aj.length,r=0;r<s;++r)if(a===$.aj[r])return!0
return!1},
cP(a,b,c,d){A.c0(b,"start")
if(c!=null){A.c0(c,"end")
if(b>c)A.eo(A.M(b,0,c,"start",null))}return new A.ad(a,b,c,d.i("ad<0>"))},
bJ(){return new A.b8("No element")},
a3:function a3(){},
bC:function bC(a,b){this.a=a
this.$ti=b},
aa:function aa(a,b){this.a=a
this.$ti=b},
be:function be(a,b){this.a=a
this.$ti=b},
bd:function bd(){},
L:function L(a,b){this.a=a
this.$ti=b},
bN:function bN(a){this.a=a},
cK:function cK(){},
h:function h(){},
w:function w(){},
ad:function ad(a,b,c,d){var _=this
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
bb:function bb(a,b){this.a=a
this.b=b},
aR:function aR(){},
b4:function b4(a,b){this.a=a
this.$ti=b},
bt:function bt(){},
hg(a){var s=A.hf(a)
if(s!=null)return s
return"minified:"+a},
h7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aO(a)
return s},
bZ(a){var s,r=$.fd
if(r==null)r=$.fd=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c_(a){var s,r,q,p
if(a instanceof A.l)return A.G(A.Z(a),null)
s=J.al(a)
if(s===B.w||s===B.y||t.cr.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.G(A.Z(a),null)},
fe(a){var s,r,q
if(a==null||typeof a=="number"||A.eE(a))return J.aO(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ab)return a.j(0)
if(a instanceof A.bj)return a.aC(!0)
s=$.hs()
for(r=0;r<1;++r){q=s[r].bl(a)
if(q!=null)return q}return"Instance of '"+A.c_(a)+"'"},
hS(){return Date.now()},
hU(){var s,r
if($.cI!==0)return
$.cI=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.cI=1e6
$.ex=new A.cH(r)},
hT(a){var s=a.$thrownJsError
if(s==null)return null
return A.aL(s)},
ff(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=b.j(0)}},
eN(a,b){var s,r="index"
if(!A.fP(b))return new A.J(!0,b,r,null)
s=J.a8(a)
if(b<0||b>=s)return A.et(b,s,a,r)
return new A.b3(null,null,!0,b,r,"Value not in range")},
jS(a,b,c){if(a>c)return A.M(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.M(b,a,c,"end",null)
return new A.J(!0,b,"end",null)},
jI(a){return new A.J(!0,a,null,null)},
e6(a){return a},
e(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.U()
b.dartException=a
s=A.kj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kj(){return J.aO(this.dartException)},
eo(a,b){throw A.A(a,b==null?new Error():b)},
v(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eo(A.iL(a,b,c),s)},
iL(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b9("'"+s+"': Cannot "+o+" "+l+k+n)},
n(a){throw A.e(A.E(a))},
V(a){var s,r,q,p,o,n
a=A.kc(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cS(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cT(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fk(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ev(a,b){var s=b==null,r=s?null:b.method
return new A.bM(a,r,s?null:b.receiver)},
an(a){if(a==null)return new A.cG(a)
if(a instanceof A.aQ)return A.a7(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a7(a,a.dartException)
return A.jH(a)},
a7(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.N(r,16)&8191)===10)switch(q){case 438:return A.a7(a,A.ev(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.a7(a,new A.b2())}}if(a instanceof TypeError){p=$.hi()
o=$.hj()
n=$.hk()
m=$.hl()
l=$.ho()
k=$.hp()
j=$.hn()
$.hm()
i=$.hr()
h=$.hq()
g=p.I(s)
if(g!=null)return A.a7(a,A.ev(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.a7(a,A.ev(s,g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null)return A.a7(a,new A.b2())}return A.a7(a,new A.c7(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b7()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a7(a,new A.J(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b7()
return a},
aL(a){var s
if(a instanceof A.aQ)return a.b
if(a==null)return new A.bm(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bm(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
h9(a){if(a==null)return J.P(a)
if(typeof a=="object")return A.bZ(a)
return J.P(a)},
j2(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.d_("Unsupported number of arguments for wrapped closure"))},
aJ(a,b){var s=a.$identity
if(!!s)return s
s=A.jN(a,b)
a.$identity=s
return s},
jN(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.j2)},
hF(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cN().constructor.prototype):Object.create(new A.aP(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.f6(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hB(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.f6(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hB(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hz)}throw A.e("Error in functionType of tearoff")},
hC(a,b,c,d){var s=A.f4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
f6(a,b,c,d){if(c)return A.hE(a,b,d)
return A.hC(b.length,d,a,b)},
hD(a,b,c,d){var s=A.f4,r=A.hA
switch(b?-1:a){case 0:throw A.e(new A.c2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hE(a,b,c){var s,r
if($.f2==null)$.f2=A.f1("interceptor")
if($.f3==null)$.f3=A.f1("receiver")
s=b.length
r=A.hD(s,c,a,b)
return r},
eM(a){return A.hF(a)},
hz(a,b){return A.bs(v.typeUniverse,A.Z(a.a),b)},
f4(a){return a.a},
hA(a){return a.b},
f1(a){var s,r,q,p=new A.aP("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.a9("Field name "+a+" not found.",null))},
e8(a){return v.getIsolateTag(a)},
k2(a){var s,r,q,p,o,n=$.h6.$1(a),m=$.e7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ec[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.h3.$2(a,n)
if(q!=null){m=$.e7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ec[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ee(s)
$.e7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ec[n]=s
return s}if(p==="-"){o=A.ee(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hb(a,s)
if(p==="*")throw A.e(A.fl(n))
if(v.leafTags[n]===true){o=A.ee(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hb(a,s)},
hb(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eT(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ee(a){return J.eT(a,!1,null,!!a.$iF)},
k4(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ee(s)
else return J.eT(s,c,null,null)},
jZ(){if(!0===$.eR)return
$.eR=!0
A.k_()},
k_(){var s,r,q,p,o,n,m,l
$.e7=Object.create(null)
$.ec=Object.create(null)
A.jY()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hc.$1(o)
if(n!=null){m=A.k4(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jY(){var s,r,q,p,o,n,m=B.o()
m=A.aI(B.p,A.aI(B.q,A.aI(B.j,A.aI(B.j,A.aI(B.r,A.aI(B.t,A.aI(B.u(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.h6=new A.e9(p)
$.h3=new A.ea(o)
$.hc=new A.eb(n)},
aI(a,b){return a(b)||b},
ie(a,b){var s
for(s=0;s<a.length;++s)if(!J.aN(a[s],b[s]))return!1
return!0},
jP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kc(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
X:function X(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a},
cj:function cj(a){this.a=a},
cH:function cH(a){this.a=a},
b5:function b5(){},
cS:function cS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b2:function b2(){},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a){this.a=a},
cG:function cG(a){this.a=a},
aQ:function aQ(a,b){this.a=a
this.b=b},
bm:function bm(a){this.a=a
this.b=null},
ab:function ab(){},
cr:function cr(){},
cs:function cs(){},
cR:function cR(){},
cN:function cN(){},
aP:function aP(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
aX:function aX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cC:function cC(a,b){this.a=a
this.b=b
this.c=null},
ac:function ac(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
e9:function e9(a){this.a=a},
ea:function ea(a){this.a=a},
eb:function eb(a){this.a=a},
bj:function bj(){},
ch:function ch(){},
ci:function ci(){},
fG(a,b,c){},
iN(a){return a},
fa(a){return new Float64Array(A.iN(a))},
fb(a,b,c){var s
A.fG(a,b,c)
s=new Uint8Array(a,b)
return s},
Y(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.eN(b,a))},
a5(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.e(A.jS(a,b,c))
if(b==null)return c
return b},
aw:function aw(){},
av:function av(){},
b0:function b0(){},
bQ:function bQ(){},
ax:function ax(){},
aZ:function aZ(){},
b_:function b_(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
aY:function aY(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
b1:function b1(){},
bX:function bX(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
ey(a,b){var s=b.c
return s==null?b.c=A.bq(a,"ar",[b.x]):s},
fg(a){var s=a.w
if(s===6||s===7)return A.fg(a.x)
return s===11||s===12},
hV(a){return a.as},
ha(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
eO(a){return A.dl(v.typeUniverse,a,!1)},
ai(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ai(a1,s,a3,a4)
if(r===s)return a2
return A.fu(a1,r,!0)
case 7:s=a2.x
r=A.ai(a1,s,a3,a4)
if(r===s)return a2
return A.ft(a1,r,!0)
case 8:q=a2.y
p=A.aH(a1,q,a3,a4)
if(p===q)return a2
return A.bq(a1,a2.x,p)
case 9:o=a2.x
n=A.ai(a1,o,a3,a4)
m=a2.y
l=A.aH(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.eA(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aH(a1,j,a3,a4)
if(i===j)return a2
return A.fv(a1,k,i)
case 11:h=a2.x
g=A.ai(a1,h,a3,a4)
f=a2.y
e=A.jB(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fs(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aH(a1,d,a3,a4)
o=a2.x
n=A.ai(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eB(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.bB("Attempted to substitute unexpected RTI kind "+a0))}},
aH(a,b,c,d){var s,r,q,p,o=b.length,n=A.dm(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ai(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jC(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dm(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ai(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jB(a,b,c,d){var s,r=b.a,q=A.aH(a,r,c,d),p=b.b,o=A.aH(a,p,c,d),n=b.c,m=A.jC(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cc()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
h5(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jX(s)
return a.$S()}return null},
k0(a,b){var s
if(A.fg(b))if(a instanceof A.ab){s=A.h5(a)
if(s!=null)return s}return A.Z(a)},
Z(a){if(a instanceof A.l)return A.aD(a)
if(Array.isArray(a))return A.D(a)
return A.eD(J.al(a))},
D(a){var s=a[v.arrayRti],r=t.D
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
aD(a){var s=a.$ti
return s!=null?s:A.eD(a)},
eD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iZ(a,s)},
iZ(a,b){var s=a instanceof A.ab?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ip(v.typeUniverse,s.name)
b.$ccache=r
return r},
jX(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dl(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jW(a){return A.ak(A.aD(a))},
eL(a){var s
if(a instanceof A.bj)return A.jT(a.$r,a.ag())
s=a instanceof A.ab?A.h5(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hw(a).a
if(Array.isArray(a))return A.D(a)
return A.Z(a)},
ak(a){var s=a.r
return s==null?a.r=new A.dk(a):s},
jT(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
s=A.bs(v.typeUniverse,A.eL(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.fx(v.typeUniverse,s,A.eL(q[r]))
return A.bs(v.typeUniverse,s,a)},
O(a){return A.ak(A.dl(v.typeUniverse,a,!1))},
iY(a){var s=this
s.b=A.jz(s)
return s.b(a)},
jz(a){var s,r,q,p
if(a===t.K)return A.j8
if(A.am(a))return A.jd
s=a.w
if(s===6)return A.iT
if(s===1)return A.fR
if(s===7)return A.j3
r=A.jv(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.am)){a.f="$i"+q
if(q==="d")return A.j6
if(a===t.m)return A.j5
return A.jc}}else if(s===10){p=A.jP(a.x,a.y)
return p==null?A.fR:p}return A.iR},
jv(a){if(a.w===8){if(a===t.S)return A.fP
if(a===t.i||a===t.H)return A.j7
if(a===t.N)return A.jb
if(a===t.y)return A.eE}return null},
iX(a){var s=this,r=A.iQ
if(A.am(s))r=A.iA
else if(s===t.K)r=A.iy
else if(A.aM(s)){r=A.iS
if(s===t.a3)r=A.iu
else if(s===t.aD)r=A.iz
else if(s===t.cG)r=A.fB
else if(s===t.ae)r=A.ix
else if(s===t.dd)r=A.it
else if(s===t.aQ)r=A.iv}else if(s===t.S)r=A.aB
else if(s===t.N)r=A.eC
else if(s===t.y)r=A.fA
else if(s===t.H)r=A.iw
else if(s===t.i)r=A.is
else if(s===t.m)r=A.fC
s.a=r
return s.a(a)},
iR(a){var s=this
if(a==null)return A.aM(s)
return A.k1(v.typeUniverse,A.k0(a,s),s)},
iT(a){if(a==null)return!0
return this.x.b(a)},
jc(a){var s,r=this
if(a==null)return A.aM(r)
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.al(a)[s]},
j6(a){var s,r=this
if(a==null)return A.aM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.al(a)[s]},
j5(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.l)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fQ(a){if(typeof a=="object"){if(a instanceof A.l)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
iQ(a){var s=this
if(a==null){if(A.aM(s))return a}else if(s.b(a))return a
throw A.A(A.fL(a,s),new Error())},
iS(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.fL(a,s),new Error())},
fL(a,b){return new A.bo("TypeError: "+A.fn(a,A.G(b,null)))},
fn(a,b){return A.cx(a)+": type '"+A.G(A.eL(a),null)+"' is not a subtype of type '"+b+"'"},
I(a,b){return new A.bo("TypeError: "+A.fn(a,b))},
j3(a){var s=this
return s.x.b(a)||A.ey(v.typeUniverse,s).b(a)},
j8(a){return a!=null},
iy(a){if(a!=null)return a
throw A.A(A.I(a,"Object"),new Error())},
jd(a){return!0},
iA(a){return a},
fR(a){return!1},
eE(a){return!0===a||!1===a},
fA(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.I(a,"bool"),new Error())},
fB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.I(a,"bool?"),new Error())},
is(a){if(typeof a=="number")return a
throw A.A(A.I(a,"double"),new Error())},
it(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.I(a,"double?"),new Error())},
fP(a){return typeof a=="number"&&Math.floor(a)===a},
aB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.I(a,"int"),new Error())},
iu(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.I(a,"int?"),new Error())},
j7(a){return typeof a=="number"},
iw(a){if(typeof a=="number")return a
throw A.A(A.I(a,"num"),new Error())},
ix(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.I(a,"num?"),new Error())},
jb(a){return typeof a=="string"},
eC(a){if(typeof a=="string")return a
throw A.A(A.I(a,"String"),new Error())},
iz(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.I(a,"String?"),new Error())},
fC(a){if(A.fQ(a))return a
throw A.A(A.I(a,"JSObject"),new Error())},
iv(a){if(a==null)return a
if(A.fQ(a))return a
throw A.A(A.I(a,"JSObject?"),new Error())},
h_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.G(a[q],b)
return s},
jp(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.h_(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.G(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fN(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.c([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.R,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.G(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.G(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.G(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.G(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.G(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
G(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.G(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.G(a.x,b)+">"
if(m===8){p=A.jG(a.x)
o=a.y
return o.length>0?p+("<"+A.h_(o,b)+">"):p}if(m===10)return A.jp(a,b)
if(m===11)return A.fN(a,b,null)
if(m===12)return A.fN(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
jG(a){var s=A.hf(a)
if(s!=null)return s
return"minified:"+a},
iq(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
ip(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dl(a,b,!1)
else if(typeof m=="number"){s=m
r=A.br(a,5,"#")
q=A.dm(s)
for(p=0;p<s;++p)q[p]=r
o=A.bq(a,b,q)
n[b]=o
return o}else return m},
io(a,b){return A.fy(a.tR,b)},
im(a,b){return A.fy(a.eT,b)},
dl(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fw(a,null,b,!1)
r.set(b,s)
return s},
bs(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fw(a,b,c,!0)
q.set(c,r)
return r},
fx(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.eA(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fw(a,b,c,d){return A.ic(A.i6(a,b,c,d))},
a4(a,b){b.a=A.iX
b.b=A.iY
return b},
br(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.N(null,null)
s.w=b
s.as=c
r=A.a4(a,s)
a.eC.set(c,r)
return r},
fu(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ik(a,b,r,c)
a.eC.set(r,s)
return s},
ik(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.am(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aM(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.N(null,null)
q.w=6
q.x=b
q.as=c
return A.a4(a,q)},
ft(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ii(a,b,r,c)
a.eC.set(r,s)
return s},
ii(a,b,c,d){var s,r
if(d){s=b.w
if(A.am(b)||b===t.K)return b
else if(s===1)return A.bq(a,"ar",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.N(null,null)
r.w=7
r.x=b
r.as=c
return A.a4(a,r)},
il(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.N(null,null)
s.w=13
s.x=b
s.as=q
r=A.a4(a,s)
a.eC.set(q,r)
return r},
bp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ih(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bq(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.N(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a4(a,r)
a.eC.set(p,q)
return q},
eA(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.N(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a4(a,o)
a.eC.set(q,n)
return n},
fv(a,b,c){var s,r,q="+"+(b+"("+A.bp(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.N(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a4(a,s)
a.eC.set(q,r)
return r},
fs(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bp(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bp(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ih(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.N(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a4(a,p)
a.eC.set(r,o)
return o},
eB(a,b,c,d){var s,r=b.as+("<"+A.bp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ij(a,b,c,r,d)
a.eC.set(r,s)
return s},
ij(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dm(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ai(a,b,r,0)
m=A.aH(a,c,r,0)
return A.eB(a,n,m,c!==m)}}l=new A.N(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a4(a,l)},
i6(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ic(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.i8(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fp(a,r,l,k,!1)
else if(q===46)r=A.fp(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ag(a.u,a.e,k.pop()))
break
case 94:k.push(A.il(a.u,k.pop()))
break
case 35:k.push(A.br(a.u,5,"#"))
break
case 64:k.push(A.br(a.u,2,"@"))
break
case 126:k.push(A.br(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ia(a,k)
break
case 38:A.i9(a,k)
break
case 63:p=a.u
k.push(A.fu(p,A.ag(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ft(p,A.ag(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.i7(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fq(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.id(a.u,a.e,o)
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
return A.ag(a.u,a.e,m)},
i8(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fp(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iq(s,o.x)[p]
if(n==null)A.eo('No "'+p+'" in "'+A.hV(o)+'"')
d.push(A.bs(s,o,n))}else d.push(p)
return m},
ia(a,b){var s,r=a.u,q=A.fo(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bq(r,p,q))
else{s=A.ag(r,a.e,p)
switch(s.w){case 11:b.push(A.eB(r,s,q,a.n))
break
default:b.push(A.eA(r,s,q))
break}}},
i7(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fo(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ag(p,a.e,o)
q=new A.cc()
q.a=s
q.b=n
q.c=m
b.push(A.fs(p,r,q))
return
case-4:b.push(A.fv(p,b.pop(),s))
return
default:throw A.e(A.bB("Unexpected state under `()`: "+A.m(o)))}},
i9(a,b){var s=b.pop()
if(0===s){b.push(A.br(a.u,1,"0&"))
return}if(1===s){b.push(A.br(a.u,4,"1&"))
return}throw A.e(A.bB("Unexpected extended operation "+A.m(s)))},
fo(a,b){var s=b.splice(a.p)
A.fq(a.u,a.e,s)
a.p=b.pop()
return s},
ag(a,b,c){if(typeof c=="string")return A.bq(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ib(a,b,c)}else return c},
fq(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ag(a,b,c[s])},
id(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ag(a,b,c[s])},
ib(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.bB("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.bB("Bad index "+c+" for "+b.j(0)))},
k1(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.x(a,b,null,c,null)
r.set(c,s)}return s},
x(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.am(d))return!0
s=b.w
if(s===4)return!0
if(A.am(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.x(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.x(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.x(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.x(a,b.x,c,d,e))return!1
return A.x(a,A.ey(a,b),c,d,e)}if(s===6)return A.x(a,p,c,d,e)&&A.x(a,b.x,c,d,e)
if(q===7){if(A.x(a,b,c,d.x,e))return!0
return A.x(a,b,c,A.ey(a,d),e)}if(q===6)return A.x(a,b,c,p,e)||A.x(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.Y)return!0
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
if(!A.x(a,j,c,i,e)||!A.x(a,i,e,j,c))return!1}return A.fO(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fO(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.j4(a,b,c,d,e)}if(o&&q===10)return A.j9(a,b,c,d,e)
return!1},
fO(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
j4(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bs(a,b,r[o])
return A.fz(a,p,null,c,d.y,e)}return A.fz(a,b.y,null,c,d.y,e)},
fz(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.x(a,b[s],d,e[s],f))return!1
return!0},
j9(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.x(a,r[s],c,q[s],e))return!1
return!0},
aM(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.am(a))if(s!==6)r=s===7&&A.aM(a.x)
return r},
am(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.R},
fy(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dm(a){return a>0?new Array(a):v.typeUniverse.sEA},
N:function N(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cc:function cc(){this.c=this.b=this.a=null},
dk:function dk(a){this.a=a},
cb:function cb(){},
bo:function bo(a){this.a=a},
i1(){var s,r,q
if(self.scheduleImmediate!=null)return A.jJ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aJ(new A.cV(s),1)).observe(r,{childList:true})
return new A.cU(s,r,q)}else if(self.setImmediate!=null)return A.jK()
return A.jL()},
i2(a){self.scheduleImmediate(A.aJ(new A.cW(a),0))},
i3(a){self.setImmediate(A.aJ(new A.cX(a),0))},
i4(a){A.ig(0,a)},
ig(a,b){var s=new A.di()
s.aO(a,b)
return s},
fT(a){return new A.c8(new A.z($.t,a.i("z<0>")),a.i("c8<0>"))},
fF(a,b){a.$2(0,null)
b.b=!0
return b.a},
aC(a,b){A.iC(a,b)},
fE(a,b){b.al(a)},
fD(a,b){b.am(A.an(a),A.aL(a))},
iC(a,b){var s,r,q=new A.dq(b),p=new A.dr(b)
if(a instanceof A.z)a.aB(q,p,t.z)
else{s=t.z
if(a instanceof A.z)a.aK(q,p,s)
else{r=new A.z($.t,t.aY)
r.a=8
r.c=a
r.aB(q,p,s)}}},
h1(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.t.aJ(new A.e5(s))},
er(a){var s
if(t.C.b(a)){s=a.ga0()
if(s!=null)return s}return B.f},
j_(a,b){if($.t===B.d)return null
return null},
j0(a,b){if($.t!==B.d)A.j_(a,b)
if(b==null)if(t.C.b(a)){b=a.ga0()
if(b==null){A.ff(a,B.f)
b=B.f}}else b=B.f
else if(t.C.b(a))A.ff(a,b)
return new A.K(a,b)},
ez(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.hX()
b.ac(new A.K(new A.J(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.az(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.a3()
b.a1(p.a)
A.aA(b,q)
return}b.a^=2
A.cn(null,null,b.b,new A.d3(p,b))},
aA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.eJ(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aA(g.a,f)
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
if(r){A.eJ(m.a,m.b)
return}j=$.t
if(j!==k)$.t=k
else j=null
f=f.c
if((f&15)===8)new A.d7(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d6(s,m).$0()}else if((f&2)!==0)new A.d5(g,s).$0()
if(j!=null)$.t=j
f=s.c
if(f instanceof A.z){r=s.a.$ti
r=r.i("ar<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a4(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.ez(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a4(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
jq(a,b){if(t.Q.b(a))return b.aJ(a)
if(t.v.b(a))return a
throw A.e(A.bz(a,"onError",u.c))},
ji(){var s,r
for(s=$.aF;s!=null;s=$.aF){$.bx=null
r=s.b
$.aF=r
if(r==null)$.bw=null
s.a.$0()}},
jA(){$.eF=!0
try{A.ji()}finally{$.bx=null
$.eF=!1
if($.aF!=null)$.eW().$1(A.h4())}},
h0(a){var s=new A.c9(a),r=$.bw
if(r==null){$.aF=$.bw=s
if(!$.eF)$.eW().$1(A.h4())}else $.bw=r.b=s},
jt(a){var s,r,q,p=$.aF
if(p==null){A.h0(a)
$.bx=$.bw
return}s=new A.c9(a)
r=$.bx
if(r==null){s.b=p
$.aF=$.bx=s}else{q=r.b
s.b=q
$.bx=r.b=s
if(q==null)$.bw=s}},
ku(a){A.co(a,"stream",t.K)
return new A.ck()},
eJ(a,b){A.jt(new A.dV(a,b))},
fZ(a,b,c,d){var s,r=$.t
if(r===c)return d.$0()
$.t=c
s=r
try{r=d.$0()
return r}finally{$.t=s}},
js(a,b,c,d,e){var s,r=$.t
if(r===c)return d.$1(e)
$.t=c
s=r
try{r=d.$1(e)
return r}finally{$.t=s}},
jr(a,b,c,d,e,f){var s,r=$.t
if(r===c)return d.$2(e,f)
$.t=c
s=r
try{r=d.$2(e,f)
return r}finally{$.t=s}},
cn(a,b,c,d){if(B.d!==c){d=c.b3(d)
d=d}A.h0(d)},
cV:function cV(a){this.a=a},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
di:function di(){},
dj:function dj(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=!1
this.$ti=b},
dq:function dq(a){this.a=a},
dr:function dr(a){this.a=a},
e5:function e5(a){this.a=a},
K:function K(a,b){this.a=a
this.b=b},
ca:function ca(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
az:function az(a,b,c,d,e){var _=this
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
d0:function d0(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b){this.a=a
this.b=b},
d9:function d9(a){this.a=a},
d6:function d6(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
c9:function c9(a){this.a=a
this.b=null},
ck:function ck(){},
dn:function dn(){},
dg:function dg(){},
dh:function dh(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
cD(a,b){return new A.aX(a.i("@<0>").H(b).i("aX<1,2>"))},
f9(a){var s,r
if(A.eS(a))return"{...}"
s=new A.c5("")
try{r={}
$.aj.push(a)
s.a+="{"
r.a=!0
a.a8(0,new A.cE(r,s))
s.a+="}"}finally{$.aj.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
j:function j(){},
R:function R(){},
cE:function cE(a,b){this.a=a
this.b=b},
jm(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.an(r)
q=A.f7(String(s))
throw A.e(q)}q=A.dt(p)
return q},
dt(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cd(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dt(a[s])
return a},
cd:function cd(a,b){this.a=a
this.b=b
this.c=null},
ce:function ce(a){this.a=a},
bD:function bD(){},
bF:function bF(){},
cA:function cA(){},
cB:function cB(a){this.a=a},
hG(a,b){a=A.A(a,new Error())
a.stack=b.j(0)
throw a},
ew(a,b,c,d){var s,r=J.hN(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
hQ(a,b,c){var s,r,q=A.c([],c.i("i<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q.push(a[r])
q.$flags=1
return q},
Q(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("i<0>"))
s=A.c([],b.i("i<0>"))
for(r=J.ao(a);r.n();)s.push(r.gp())
return s},
fi(a,b,c){var s=J.ao(b)
if(!s.n())return a
if(c.length===0){do a+=A.m(s.gp())
while(s.n())}else{a+=A.m(s.gp())
while(s.n())a=a+c+A.m(s.gp())}return a},
hX(){return A.aL(new Error())},
cx(a){if(typeof a=="number"||A.eE(a)||a==null)return J.aO(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fe(a)},
hH(a,b){A.co(a,"error",t.K)
A.co(b,"stackTrace",t.l)
A.hG(a,b)},
bB(a){return new A.bA(a)},
a9(a,b){return new A.J(!1,null,b,a)},
bz(a,b,c){return new A.J(!0,a,b,c)},
M(a,b,c,d,e){return new A.b3(b,c,!0,a,d,"Invalid value")},
cJ(a,b,c){if(0>a||a>c)throw A.e(A.M(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.M(b,a,c,"end",null))
return b}return c},
c0(a,b){if(a<0)throw A.e(A.M(a,0,null,b,null))
return a},
et(a,b,c,d){return new A.bH(b,!0,a,d,"Index out of range")},
ba(a){return new A.b9(a)},
fl(a){return new A.c6(a)},
fh(a){return new A.b8(a)},
E(a){return new A.bE(a)},
f7(a){return new A.cy(a)},
hM(a,b,c){var s,r
if(A.eS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
$.aj.push(a)
try{A.je(a,s)}finally{$.aj.pop()}r=A.fi(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
f8(a,b,c){var s,r
if(A.eS(a))return b+"..."+c
s=new A.c5(b)
$.aj.push(a)
try{r=s
r.a=A.fi(r.a,a,", ")}finally{$.aj.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
je(a,b){var s,r,q,p,o,n,m,l=a.gE(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.m(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gp();++j
if(!l.n()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.n();p=o,o=n){n=l.gp();++j
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
fc(a,b,c,d){var s
if(B.e===c)return A.fj(B.b.gq(a),J.P(b),$.cp())
if(B.e===d){s=B.b.gq(a)
b=J.P(b)
c=J.P(c)
return A.cQ(A.T(A.T(A.T($.cp(),s),b),c))}s=B.b.gq(a)
b=J.P(b)
c=J.P(c)
d=J.P(d)
d=A.cQ(A.T(A.T(A.T(A.T($.cp(),s),b),c),d))
return d},
hR(a){var s,r,q=$.cp()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q=A.T(q,J.P(a[r]))
return A.cQ(q)},
q:function q(){},
bA:function bA(a){this.a=a},
U:function U(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bH:function bH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b9:function b9(a){this.a=a},
c6:function c6(a){this.a=a},
b8:function b8(a){this.a=a},
bE:function bE(a){this.a=a},
b7:function b7(){},
d_:function d_(a){this.a=a},
cy:function cy(a){this.a=a},
p:function p(){},
B:function B(){},
l:function l(){},
cl:function cl(){},
cO:function cO(){this.b=this.a=0},
c5:function c5(a){this.a=a},
bG:function bG(a,b){this.a=a
this.b=b},
cF:function cF(a){this.a=a},
iE(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
eg(a,b){var s=new A.z($.t,b.i("z<0>")),r=new A.bc(s,b.i("bc<0>"))
a.then(A.aJ(new A.eh(r),1),A.aJ(new A.ei(r),1))
return s},
eh:function eh(a){this.a=a},
ei:function ei(a){this.a=a},
kg(a){return Math.sin(a)},
jO(a){return Math.cos(a)},
f:function f(a,b,c){this.a=a
this.b=b
this.$ti=c},
es(a){var s,r,q=B.c.a7(a,0,new A.ct()),p=B.c.a7(a,0,new A.cu()),o=A.Q(a,t.X)
B.c.M(o,new A.cv(p/4,q/4))
for(s=0,r=1;r<4;++r){q=o[r]
p=o[s]
if(q.a+q.b<p.a+p.b)s=r}q=A.c([],t.O)
for(r=0;r<4;++r)q.push(o[B.b.G(s+r,4)])
return new A.a_(q[0],q[1],q[2],q[3])},
jQ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.length
if(a2<a4*a5*4)throw A.e(A.bz(a2,"rgba","zu kurz"))
a2=Math.max(1,B.a.l(Math.max(a4,a5)/400))
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
p[a]=B.b.N(g*77+f*150+e*29,8)
if(g>f)a0=g>e?g:e
else a0=f>e?f:e
if(g<f)a1=g<e?g:e
else a1=f<e?f:e
o[a]=a0-a1
n[a]=B.b.N(g-f+256,1)
m[a]=B.b.N(B.b.N(g+f,1)-e+256,1)}return A.iK(new A.dd(s,r,p,o,n,m),a2/a4,a2/a5,null,a6,a7,a8)},
kf(a,b,c,d){var s,r,q,p,o=A.c([],t.O)
for(s=a.gJ(),r=t.X,q=0;q<4;++q){p=s[q]
o.push(new A.f(p.a*c,p.b*d,r))}return A.eK(o,b,c,d)},
eK(a,b,c,d){var s,r=A.jE(a,c,d)
if(r==null)return 0
s=Math.log(r/b)/0.12
return Math.exp(-s*s)},
jE(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h={},g=new A.e2(a4/2,a5/2),f=new A.e_(),e=new A.e0(),d=g.$1(a3[0]),c=g.$1(a3[1]),b=g.$1(a3[2]),a=g.$1(a3[3]),a0=f.$2(d,b),a1=e.$2(f.$2(c,b),a),a2=e.$2(f.$2(a,b),c)
if(a1===0||a2===0)return null
s=e.$2(a0,a)/a1
r=e.$2(a0,c)/a2
q=t.n
p=A.c([],q)
for(o=J.C(c),n=J.C(d),m=0;m<3;++m)p.push(s*o.h(c,m)-n.h(d,m))
q=A.c([],q)
for(o=J.C(a),m=0;m<3;++m)q.push(r*o.h(a,m)-n.h(d,m))
l=a4*a4+a5*a5
k=h.a=-(p[0]*q[0]+p[1]*q[1])/(p[2]*q[2])
if(!isFinite(k)||k<0.12249999999999998*l||k>6.25*l)h.a=0.42250000000000004*l
o=new A.e1(h)
j=o.$1(p)
i=o.$1(q)
if(j<=0||i<=0||!isFinite(j)||!isFinite(i))return null
return j>i?j/i:i/j},
aE(a,b){var s,r,q=a.a,p=b.b,o=a.b,n=b.a,m=q*p-o*n
if(Math.abs(m)<0.000001)return null
s=a.c
r=b.c
return new A.f((s*p-o*r)/m,(q*r-s*n)/m,t.X)},
iK(c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=c0.a,a9=c0.b,b0=c0.c,b1=A.bu(A.bu(b0,a8,a9),a8,a9),b2=c0.d,b3=A.bu(A.bu(b2,a8,a9),a8,a9),b4=A.i5(b1,b3,a8,a9),b5=A.bu(c0.e,a8,a9),b6=A.bu(c0.f,a8,a9),b7=new A.cY(b1,b5,b6),b8=A.c([],t.E),b9=A.iV(b4,a8,a9)
b5=A.D(b9).i("W<1>")
s=A.fW(new A.W(b9,new A.dA(),b5))
r=A.fW(new A.W(b9,new A.dB(),b5))
B.c.L(b8,A.jg(s,r,b4,a8,a9,c3))
for(b5=A.fH(A.fJ(b4.d,a8,a9,1),a8,a9,6),b6=b5.length,q=0;q<b5.length;b5.length===b6||(0,A.n)(b5),++q){p=A.eH(b5[q])
if(p!=null)b8.push(p)}o=A.jl(b1)
b5=a8*a9
n=new Uint8Array(b5)
for(m=0;m<b5;++m)n[m]=b1[m]>o?1:0
for(b5=A.fH(A.fJ(A.iO(n,a8,a9,2),a8,a9,2),a8,a9,3),b6=b5.length,q=0;q<b5.length;b5.length===b6||(0,A.n)(b5),++q){p=A.eH(b5[q])
if(p!=null)b8.push(p)}if(c5==null)l=a7
else{b5=A.c([],t.O)
for(b6=c5.gJ(),k=t.X,q=0;q<4;++q){j=b6[q]
b5.push(new A.f(j.a/c1-0.5,j.b/c2-0.5,k))}l=A.eI(b5)}b5=l!=null
if(b5)i=c4==null||A.eK(l,c4,a8,a9)>=0.5
else i=!1
if(b5&&!i)h=!1
else h=c6
if(b5){b8.push(l)
if(!h)B.c.L(b8,A.iU(l,b9,b7,a8,a9))}g=A.c([],t.x)
for(b6=b8.length,k=c4==null,f=a7,q=0;q<b8.length;b8.length===b6||(0,A.n)(b8),++q){e=A.eI(b8[q])
if(e==null)continue
d=A.iP(e,b4,b7,a8,a9,c3)
if(d==null)continue
c=k?1:A.eK(e,c4,a8,a9)
if(c<0.05)continue
b=d*c*c
a=new A.af(e,b,c)
g.push(a)
if(f==null||b>f.b)f=a}b6=!1
if(b5)if(!h)b6=f==null||A.dR(f.a,l)<0.7
if(b6){for(b6=g.length,a0=a7,q=0;q<g.length;g.length===b6||(0,A.n)(g),++q){a1=g[q]
if(A.dR(a1.a,l)<0.7)continue
if(a1.c<0.5)continue
if(a0==null||a1.b>a0.b)a0=a1}if(a0!=null)f=a0
else if(f!=null&&i&&A.dR(f.a,l)<0.5)f=new A.af(l,f.b,1)}if(b5&&h){a2=Math.sqrt(a8*a8+a9*a9)
a3=f==null
b5=!a3
if(b5){for(b6=f.a,b=0.04*a2,a4=!1,m=0;m<4;++m)if(b6[m].v(l[m])>b)a4=!0}else a4=a3
if(!(a4&&b5&&A.iI(f.a,l,b1,a8,a9,c3)))if(a4){b5=a3?a7:f.b
f=new A.af(l,b5==null?0:b5,1)}}if(f==null)return a7
a5=!k?a7:A.ju(f,g,b4,b0,b2,a8,a9)
if(a5!=null)f=a5
a6=A.fX(f.a,b4,a8,a9)
b0=A.c([],t.O)
for(b2=a6.length,b5=t.X,q=0;q<a6.length;a6.length===b2||(0,A.n)(a6),++q){j=a6[q]
b0.push(new A.f(B.a.C((j.a+0.5)*c1,0,1),B.a.C((j.b+0.5)*c2,0,1),b5))}return A.es(b0)},
ju(a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a7.a,a4=A.aG(a3),a5=Math.sqrt(b2*b2+b3*b3),a6=0.012*a5
for(s=a8.length,r=a5/400,q=t.a,p=t.X,o=t.u,n=null,m=0;m<a8.length;a8.length===s||(0,A.n)(a8),++m){l=a8[m]
if(l===a7)continue
if(n!=null&&l.b<=n.b)continue
k=l.a
j=A.aG(k)/a4
if(j<0.2||j>0.92)continue
for(i=0,h=0;h<8;++h)for(g=(h+0.5)/8,f=0;f<8;++f){e=A.dS(k,g,(f+0.5)/8)
if(A.bv(a3,e.a,e.b))++i}if(i<51.2)continue
g=A.c([],o)
for(d=0;d<4;d=b){c=k[d]
b=d+1
a=b%4
a0=k[a]
g.push(A.dD(new A.f((c.a+a0.a)/2,(c.b+a0.b)/2,p),a3[d],a3[a])>=a6)}a1=new A.W(g,new A.dW(),q).gk(0)
if(a1<2){c=!(a1===1&&g[2]&&j<=0.85)
g=c}else g=!1
if(g)continue
a2=A.fX(k,a9,b2,b3)
if(!A.iJ(a2,b0,b1,b2,b3,r))continue
n=new A.af(a2,l.b,1)}return n},
iI(a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=A.aG(a9)/A.aG(b0)
if(a8<1.1||a8>1.8)return!1
for(s=0.025*Math.sqrt(b2*b2+b3*b3),r=0,q=0;q<4;q=o){p=a9[q]
o=q+1
n=o%4
m=a9[n]
if(A.dD(b0[q],p,m)<s&&A.dD(b0[n],p,m)<s)++r}if(r<2)return!1
l=new A.dx(b2,b3,b1)
s=t.t
k=A.c([],s)
for(j=0,i=0,h=0;h<12;++h)for(n=(h+0.5)/12,g=0;g<12;++g){f=A.dS(b0,n,(g+0.5)/12);++i
if(!A.bv(a9,f.a,f.b))++j
e=l.$1(f)
if(e!=null)k.push(e)}if(j>0.07*i||k.length<50)return!1
B.c.K(k)
d=k[B.b.S(k.length*7,10)]
n=a9[0]
c=a9[1]
b=a9[2]
a=a9[3]
a0=(n.a+c.a+b.a+a.a)/4
a1=(n.b+c.b+b.b+a.b)/4
a=A.c([],t.O)
for(n=a9.length,c=t.X,a2=0;a2<a9.length;a9.length===n||(0,A.n)(a9),++a2){f=a9[a2]
a.push(new A.f(a0+(f.a-a0)*1.12,a1+(f.b-a1)*1.12,c))}a3=A.c([],s)
for(h=0;h<24;++h)for(s=(h+0.5)/24,g=0;g<24;++g){f=A.dS(a,s,(g+0.5)/24)
if(A.bv(a9,f.a,f.b))continue
e=l.$1(f)
if(e!=null)a3.push(e)}if(a3.length<20)return!1
B.c.K(a3)
a4=a3[a3.length/2|0]
for(s=d-60,a5=0,a6=0,a7=0,h=0;h<24;++h)for(n=(h+0.5)/24,g=0;g<24;++g){f=A.dS(a9,n,(g+0.5)/24)
if(A.bv(b0,f.a,f.b))continue
e=l.$1(f)
if(e==null)continue;++a7
if(e<s)++a5
if(Math.abs(e-a4)<20)++a6}if(a7<20)return!1
return a5>=0.8*a7&&a6<=0.13*a7},
dS(a,b,c){var s,r=a[0],q=r.a,p=a[1],o=q+(p.a-q)*b
r=r.b
s=r+(p.b-r)*b
r=a[3]
p=r.a
q=a[2]
r=r.b
return new A.f(o+(p+(q.a-p)*b-o)*c,s+(r+(q.b-r)*b-s)*c,t.X)},
iJ(a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8[0],a3=a8[1],a4=a8[2],a5=a8[3],a6=(a2.a+a3.a+a4.a+a5.a)/4,a7=(a2.b+a3.b+a4.b+a5.b)/4
a5=t.t
s=A.c([],a5)
for(r=0;r<4;){q={}
p=a8[r];++r
o=a8[r%4]
n=p.v(o)
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
e=new A.dz(q,a4+l*f,b3,a2+a3*f,b1,b2)
d=new A.dy(e,a9)
c=A.c([d.$1(-1),d.$1(-1.75),d.$1(-2.5)],a5)
B.c.K(c)
b=d.$1(2.5)
a=d.$1(4)
a0=d.$1(5.5)
a0=Math.max(A.e6(a),A.e6(a0))
a1=Math.max(A.e6(b),a0)
if(B.c.gV(c)<0||a1<0)continue;++h
j.push(c[1])
b=b0[e.$1(-1.75)]
if(b<=40){b=c[1]
b=b<110&&b<=a1-30}else b=!1
if(b)++i}if(h<8||i<0.75*h)return!1
B.c.K(j)
s.push(j[j.length/2|0])}B.c.K(s)
return B.c.gX(s)-B.c.gV(s)<=35},
i5(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=c8*c9,c2=new Float32Array(c1),c3=new Float32Array(c1),c4=new Float32Array(c1),c5=new Int32Array(1024)
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
l=a8>=1023?1023:B.a.Y(a8)
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
c0=j-1}}if(a8>=c4[b9]&&a8>c4[c0]){b5[m]=1;++b6}}return new A.da(c2,c3,c4,b5,b6,b3,b4)},
iV(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a9+B.a.ak(Math.sqrt(a9*a9+b0*b0))+2,a6=180*a5,a7=new Int32Array(a6)
for(s=b0-1,r=a9-1,q=a8.b,p=a8.a,o=a8.d,n=1;n<s;++n)for(m=n*a9,l=1;l<r;++l){k=m+l
if(o[k]===0)continue
j=Math.atan2(q[k],p[k])
i=B.a.l((j<0?j+3.141592653589793:j)*180/3.141592653589793)
for(h=-3;h<=3;++h){g=i+h
if(g<0)g+=180
if(g>=180)g-=180
f=g*a5+(B.a.l(l*$.eX()[g]+n*$.eY()[g])+a9)
a7[f]=a7[f]+1}}e=Math.max(14,B.a.l(0.08*Math.min(a9,b0)))
s=t.t
d=A.c([],s)
for(k=0;k<a6;++k)if(a7[k]>=e)d.push(k)
B.c.M(d,new A.dL(a7))
c=A.c([],t.w)
b=A.c([],s)
a=A.c([],s)
for(a6=d.length,a0=0;a0<d.length;d.length===a6||(0,A.n)(d),++a0){k=d[a0]
g=B.b.t(k,a5)
a1=B.b.G(k,a5)-a9
s=c.length
a3=0
for(;;){a2=!0
if(!(a3<s)){a2=!1
break}a4=Math.abs(g-b[a3])
if(a4<=4&&Math.abs(a1-a[a3])<=6)break
if(180-a4<=4&&Math.abs(a1+a[a3])<=6)break;++a3}if(a2)continue
c.push(new A.o($.eX()[g],$.eY()[g],a1,a7[k]))
b.push(g)
a.push(a1)
if(c.length>=48)break}return c},
iU(c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=0.08*Math.sqrt(c5*c5+c6*c6),c0=Math.cos(0.20943951023931953),c1=A.c([],t.W)
for(s=t.A,r=t.d0,q=t.w,p=0;p<4;){o=c2[p];++p
n=c2[p%4]
m=o.v(n)
if(m<1)return B.l
l=n.b
k=o.b
j=-(l-k)/m
i=n.a
h=o.a
g=(i-h)/m
f=A.c([],q)
for(e=c3.length,d=0;d<c3.length;c3.length===e||(0,A.n)(c3),++d){c=c3[d]
b=c.a
a=c.b
if(Math.abs(b*j+a*g)<c0)continue
a0=c.c
if(Math.abs(h*b+k*a-a0)>b9||Math.abs(i*b+l*a-a0)>b9)continue
if(!A.ja(c,o,n,c4,c5,c6))continue
f.push(c)}B.c.M(f,new A.dK())
l=new A.ad(f,0,1,r)
l.aM(f,0,1,s)
l=A.Q(l,s)
l.push(new A.o(j,g,h*j+k*g,0))
c1.push(l)}a1=A.c([],t.E)
for(s=c1[0],r=s.length,q=-0.1*c5,l=-0.1*c6,k=1.1*c5,i=1.1*c6,h=t.O,d=0;d<s.length;s.length===r||(0,A.n)(s),++d){a2=s[d]
for(e=c1[1],b=e.length,a=a2.d===0,a3=0;a3<e.length;e.length===b||(0,A.n)(e),++a3){a4=e[a3]
for(a0=c1[2],a5=a0.length,a6=a4.d===0,a7=0;a7<a0.length;a0.length===a5||(0,A.n)(a0),++a7){a8=a0[a7]
for(a9=c1[3],b0=a9.length,b1=a8.d===0,b2=0;b2<a9.length;a9.length===b0||(0,A.n)(a9),++b2){b3=a9[b2]
if(a&&a6&&b1&&b3.d===0)continue
b4=[a2,a4,a8,b3]
b5=A.c([],h)
for(p=0;p<4;++p){b6=A.aE(b4[(p+3)%4],b4[p])
b7=!0
if(b6!=null){b8=b6.a
if(!(b8<q)){b7=b6.b
b7=b7<l||b8>k||b7>i}}if(b7)break
b5.push(b6)}if(b5.length===4)a1.push(b5)}}}}return a1},
ja(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.c([],t.n)
for(s=a3.a,r=a4.a-s,q=a3.b,p=a4.b-q,o=a2.a,n=a2.b,m=a2.c,l=6*o,k=6*n,j=0;j<16;++j){i=0.15+0.7*j/15
h=s+r*i
g=q+p*i
f=h*o+g*n-m
e=h-f*o
d=g-f*n
c=B.a.l(e+l)
b=B.a.l(d+k)
a=B.a.l(e-l)
a0=B.a.l(d-k)
if(c<0||b<0||c>=a6||b>=a7)continue
if(a<0||a0<0||a>=a6||a0>=a7)continue
a1.push(A.ay(a5.U(b*a6+c),a5.U(a0*a6+a)))}if(a1.length<8)return!0
B.c.K(a1)
return a1[a1.length/2|0]>=8},
jn(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=a0.b,h=-i,g=a0.a,f=a0.c,e=f*g,d=f*i,c=Math.sqrt(a2*a2+a3*a3),b=B.a.O(-c-2),a=B.a.ak(2*c+4)
f=a+1
s=new Int32Array(f)
r=new Int32Array(f)
q=Math.max(5,0.8*a1.r)
for(f=a2-3,p=a3-3,o=0,n=0,m=0;m<a;){l=b+m
k=e+l*h
j=d+l*g
if(k>=2&&j>=2&&k<=f&&j<=p){++n
if(A.fK(k,j,g,i,a1,a2,a3,q,2))++o}++m
s[m]=o
r[m]=n}return new A.cg(a0,b,s,r)},
fK(a,b,c,d,e,f,g,h,a0){var s,r,q,p,o,n,m,l,k,j,i
for(s=-a0,r=e.a,q=e.b,p=e.c,o=f-2,n=g-2;s<=a0;++s){m=B.a.l(a+s*c)
l=B.a.l(b+s*d)
if(m<1||l<1||m>o||l>n)continue
k=l*f+m
j=p[k]
if(j<h)continue
i=r[k]*c+q[k]*d
if(i*i>=0.67*j*j)return!0}return!1},
jg(c5,c6,c7,c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
if(c5.length<2||c6.length<2)return B.l
s=t.A
r=A.cD(s,t.I)
s=A.Q(c5,s)
B.c.L(s,c6)
q=s.length
p=0
for(;p<s.length;s.length===q||(0,A.n)(s),++p){o=s[p]
r.F(0,o,A.jn(o,c7,c8,c9))}n=new A.dO(c9,c8)
m=n.$2(c5,!0)
l=n.$2(c6,!1)
k=-0.1*c8
j=1.1*c8
i=-0.1*c9
h=1.1*c9
g=A.c([],t.V)
for(s=m.length,q=c8*c9,f=0.1*c9,e=0.1*c8,d=t.O,p=0;p<m.length;m.length===s||(0,A.n)(m),++p){c=m[p]
b=c.a
a=c.b
for(c=l.length,a0=0;a0<l.length;l.length===c||(0,A.n)(l),++a0){a1=l[a0]
a2=a1.a
a3=a1.b
a4=A.aE(b,a2)
a5=A.aE(b,a3)
a6=A.aE(a,a3)
a7=A.aE(a,a2)
if(a4==null||a5==null||a6==null||a7==null)continue
a8=A.c([a4,a5,a6,a7],d)
if(B.c.aj(a8,new A.dM(k,j,i,h)))continue
if(a5.a-a4.a<e||a6.a-a7.a<e)continue
if(a7.b-a4.b<f||a6.b-a5.b<f)continue
a9=A.aG(a8)/q
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
c2=b6.bb(b8+c1,b9-c1)
c3=c2.a
c4=c2.b<0.5?0:c3
b0*=c4
if(c4<b1)b1=c4}if(b1<0.3)continue
g.push(new A.X(Math.pow(a9,0.5)*Math.pow(b0,0.25),a8))}}B.c.M(g,new A.dN())
s=A.c([],t.E)
for(r=A.cP(g,0,A.co(24,"count",t.S),t.B),q=r.$ti,r=new A.H(r,r.gk(0),q.i("H<w.E>")),q=q.i("w.E");r.n();){b2=r.d
s.push((b2==null?q.a(b2):b2).b)}return s},
eI(a){var s,r,q,p,o,n,m,l=J.aK(a)
if(l.gk(a)!==4)return null
s=t.O
r=A.c([],s)
for(l=l.gE(a),q=t.X;l.n();){p=l.gp()
r.push(new A.f(p.a,p.b,q))}o=A.es(r)
if(!o.gaH())return null
l=A.c([],s)
for(s=o.gJ(),n=0;n<4;++n){m=s[n]
l.push(new A.f(m.a,m.b,q))}return l},
ay(a,b){var s=J.C(a),r=Math.abs(s.h(a,0)-b[0])
return s.gk(a)>1?r+2*(Math.abs(s.h(a,1)-b[1])+Math.abs(s.h(a,2)-b[2])):r},
fm(a){var s,r=J.a8(B.c.gV(a)),q=A.c([],t.n)
for(s=0;s<r;++s)q.push(new A.cZ(a,s).$0())
return q},
iP(f2,f3,f4,f5,f6,f7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0=null,f1=A.aG(f2)/(f5*f6)
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
if(Math.abs((n*k+l*j)/i)>0.77)return f0}h=new A.dF(f2)
o=t.q
g=A.c([],o)
for(f=0;f<10;++f)for(m=0.12+f*0.084,e=0;e<10;++e){d=h.$2(m,0.12+e*0.084)
c=B.a.l(d.a)
b=B.a.l(d.b)
if(c<0||b<0||c>=f5||b>=f6)continue
g.push(f4.U(b*f5+c))}if(g.length<30)return f0
B.c.M(g,new A.dG())
a=A.fm(B.c.A(g,B.b.S(g.length*6,10)))
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
b1=r.v(q)
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
if(A.fK(c7,c8,b3,b6,f3,f5,f6,a5,3))++c3
if((c5&1)===1)continue
c9=B.a.l(c7+c0)
d0=B.a.l(c8+c1)
if(c9>=0&&d0>=0&&c9<f5&&d0<f6)b8.push(f4.U(d0*f5+c9))
d1=B.a.l(c7-c0)
d2=B.a.l(c8-c1)
if(d1>=0&&d2>=0&&d1<f5&&d2<f6)b9.push(f4.U(d2*f5+d1))}a6.push(c2===0?0:c3/c2)
a7.push(c2/c4)
a8.push(b8)
a9.push(b9)}o=A.c([],o)
for(m=a9.length,d3=0;d3<a9.length;a9.length===m||(0,A.n)(a9),++d3)B.c.L(o,a9[d3])
d4=o.length>=20?A.fm(o):f0
d5=new A.dI()
m=d4==null
d6=m?0:Math.max(20,2.5*d5.$2(o,d4))
d7=Math.max(20,2.5*d5.$2(B.c.A(g,B.b.S(g.length*6,10)),a))
d8=!m&&A.ay(d4,a)>=15
d9=A.c([],a2)
for(o=2*d6,e0=1,e1=1,e2=0,b0=0;b0<4;++b0){if(a7[b0]<0.4){++e2
e3=0.45}else{e3=a6[b0]
if(d4!=null){e4=0
if(d8)for(m=a8[b0],a0=m.length,d3=0;d3<m.length;m.length===a0||(0,A.n)(m),++d3){e5=m[d3]
e6=A.ay(e5,d4)
if(e6<=d6&&e6<0.6*A.ay(e5,a))++e4}for(m=a9[b0],a0=m.length,e7=0,d3=0;d3<m.length;m.length===a0||(0,A.n)(m),++d3){e5=m[d3]
if(A.ay(e5,d4)>o&&A.ay(e5,a)>d7)++e7}m=a8[b0].length
e8=m===0?0:e4/m
m=a9[b0].length
e9=m===0?0:e7/m
e3*=(1-0.4*e8)*(1-0.3*e9)}}d9.push(e3)
e0*=e3
if(e3<e1)e1=e3}o=B.c.bd(d9,new A.dH())
if(e2>1||e1<0.3||o/4<0.5)return f0
return Math.pow(Math.min(f1,1),0.5)*Math.pow(e0,0.25)},
fX(c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=c5[0],b9=c5[1],c0=c5[2],c1=c5[3],c2=(b8.a+b9.a+c0.a+c1.a)/4,c3=(b8.b+b9.b+c0.b+c1.b)/4,c4=A.c([],t.b)
for(b8=0.8*c6.r,b9=c6.c,c0=c6.a,c1=c6.b,s=c7-2,r=c8-2,q=t.i,p=t.n,o=0;o<4;){n=c5[o];++o
m=c5[o%4]
l=n.v(m)
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
a3=A.ew(9,0,!1,q)
for(a4=0,a5=0,a6=-4;a6<=4;++a6){a7=B.a.l(a1+a6*i)
a8=B.a.l(a2+a6*f)
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
b5=b4<0?a5+B.a.C(0.5*(b2-b3)/b4,-0.5,0.5):a5}else b5=a5
e.push(a1+b5*i)
d.push(a2+b5*f)
c.push(a4)}c4.push(A.fM(e,d,c,l))}if(B.c.aj(c4,new A.dU()))return c5
b6=A.c([],t.O)
for(b8=c7*c7+c8*c8,o=0;o<4;++o){b9=c4[(o+3)%4]
b9.toString
c0=c4[o]
c0.toString
b7=A.aE(b9,c0)
if(b7==null)return c5
if(b7.v(c5[o])>0.03*Math.sqrt(b8))return c5
b6.push(b7)}return b6},
fM(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.length
if(a0<Math.max(8,a4*0.25))return null
s=A.ew(a0,!0,!1,t.y)
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
q=new A.o(b,a,o,0)
j=A.c([],r)
for(k=0;k<a1.length;++k)j.push(Math.abs(a1[k]*b+a2[k]*a-o)<=1.5)
if(new A.W(j,new A.dJ(),a0).gk(0)<8)return q}return q},
fH(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4*b5,a9=new Int32Array(a8),b0=new Int32Array(a8),b1=A.c([],t.r),b2=0.1*b4*b5
for(a8=b3.length,s=0,r=0;r<a8;++r){if(b3[r]===0||a9[r]!==0)continue;++s
b0[0]=r
a9[r]=s
for(q=b5,p=b4,o=1,n=0,m=0,l=0;o>0;){--o
k=b0[o];++n
j=B.b.G(k,b4)
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
o=b}}}}if((m-p+1)*(l-q+1)>=b2&&n>=40)b1.push(new A.cj([s,m,l,p,q]))}B.c.M(b1,new A.ds())
a=A.c([],t.E)
for(a8=A.cP(b1,0,A.co(b6,"count",t.S),t.e),f=a8.$ti,a8=new A.H(a8,a8.gk(0),f.i("H<w.E>")),a0=t.X,a1=t.O,f=f.i("w.E");a8.n();){a2=a8.d
if(a2==null)a2=f.a(a2)
a3=A.c([],a1)
for(a4=a2.a,i=a4[4];i<=a4[2];++i){for(j=a4[3],a5=i*b4,a6=-1,a7=-1;j<=a4[1];++j)if(a9[a5+j]===a4[0]){if(a6<0)a6=j
a7=j}if(a6>=0){a3.push(new A.f(a6,i,a0))
a3.push(new A.f(a7,i,a0))}}a.push(A.fI(a3))}return a},
fI(a){var s,r,q,p,o,n,m,l,k,j
if(a.length<3)return a
s=t.X
r=A.Q(a,s)
B.c.M(r,new A.du())
q=new A.dv()
p=t.O
o=A.c([],p)
for(n=r.length,m=0;m<r.length;r.length===n||(0,A.n)(r),++m){l=r[m]
for(;;){k=o.length
if(!(k>=2&&q.$3(o[k-2],B.c.gX(o),l)<=0))break
o.pop()}o.push(l)}j=A.c([],p)
for(p=A.D(r).i("b4<1>"),r=new A.b4(r,p),r=new A.H(r,r.gk(0),p.i("H<w.E>")),p=p.i("w.E");r.n();){n=r.d
if(n==null)n=p.a(n)
for(;;){k=j.length
if(!(k>=2&&q.$3(j[k-2],B.c.gX(j),n)<=0))break
j.pop()}j.push(n)}s=A.Q(B.c.m(o,0,o.length-1),s)
B.c.L(s,B.c.m(j,0,j.length-1))
return s},
eH(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=J.aK(a3)
if(a2.gk(a3)<4)return null
for(s=0,r=0;r<a2.gk(a3);r=q){q=r+1
s+=a2.h(a3,r).v(a2.h(a3,B.b.G(q,a2.gk(a3))))}p=s*0.004
for(o=a3;a2=J.aK(o),a2.gk(o)>24;){o=A.jw(a3,p)
p*=1.5}if(a2.gk(o)<4)return null
n=a2.gk(o)
for(m=n-3,l=n-2,k=n-1,j=t.O,i=-1,h=null,g=0;g<m;g=f)for(f=g+1,e=f;e<l;e=d)for(d=e+1,c=d;c<k;c=b)for(b=c+1,a=b;a<n;++a){a0=A.c([a2.h(o,g),a2.h(o,e),a2.h(o,c),a2.h(o,a)],j)
a1=A.aG(a0)
if(a1>i){h=a0
i=a1}}return h},
jw(a,b){var s,r,q,p,o,n,m,l,k,j,i=J.aK(a)
if(i.gk(a)<=4)return a
for(s=0,r=-1,q=1;q<i.gk(a);++q){p=i.h(a,0)
o=i.h(a,q)
n=p.a-o.a
m=p.b-o.b
l=p.$ti.c.a(n*n+m*m)
if(l>r){r=l
s=q}}k=A.dX(i.m(a,0,s+1),b)
p=t.X
o=A.Q(i.A(a,s),p)
o.push(i.h(a,0))
j=A.dX(o,b)
i=A.Q(J.eq(k,0,k.length-1),p)
B.c.L(i,J.eq(j,0,j.length-1))
return i},
dX(a,b){var s,r,q,p,o,n,m,l,k
if(a.length<3)return a
s=J.C(a)
r=s.gV(a)
q=s.gX(a)
for(p=0,o=0,n=1;n<a.length-1;++n){m=A.dD(a[n],r,q)
if(m>o){o=m
p=n}}if(o<=b)return A.c([r,q],t.O)
l=A.dX(s.m(a,0,p+1),b)
k=A.dX(s.A(a,p),b)
s=A.Q(J.eq(l,0,l.length-1),t.X)
B.c.L(s,k)
return s},
dD(a,b,c){var s=b.a,r=c.a-s,q=b.b,p=c.b-q,o=Math.sqrt(r*r+p*p)
if(o===0)return a.v(b)
return Math.abs((a.a-s)*p-(a.b-q)*r)/o},
kb(a,b,c,d){var s=new A.en(c,d)
return A.dR(s.$1(a),s.$1(b))},
dR(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.Q(a,t.X)
B.c.L(b,a0)
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
d=A.bv(a,e,g)
c=A.bv(a0,e,g)
if(d||c)++i
if(d&&c)++j}}return i===0?0:j/i},
bv(a,b,c){var s,r,q,p,o,n,m,l
for(s=!1,r=!1,q=0;q<4;){p=a[q];++q
o=a[q%4]
n=p.a
m=p.b
l=(o.a-n)*(c-m)-(o.b-m)*(b-n)
if(l>0)s=!0
if(l<0)r=!0}return!(s&&r)},
aG(a){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<s;){p=a[q];++q
o=a[q%s]
r+=p.a*o.b-o.a*p.b}return Math.abs(r)/2},
bu(a,b,c){var s,r,q,p,o,n,m,l=b*c,k=new Uint16Array(l)
for(s=b-1,r=0;r<c;++r){q=r*b
for(p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=a[q+B.b.C(p+n,0,s)]*B.k[n+2]
k[q+p]=o}}m=new Uint8Array(l)
for(l=c-1,r=0;r<c;++r)for(s=r*b,p=0;p<b;++p){for(o=0,n=-2;n<=2;++n)o+=k[B.b.C(r+n,0,l)*b+p]*B.k[n+2]
m[s+p]=o+128>>>8}return m},
jl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.ew(256,0,!1,t.S)
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
fJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=b-1,r=c-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=0;m<c;++m)for(l=m*b,k=m>0,j=m<r,i=0;i<b;++i){h=l+i
g=!0
if(p[h]===0)if(!(i>0&&p[h-1]!==0))if(!(i<s&&p[h+1]!==0))if(!(k&&p[h-b]!==0))g=j&&p[h+b]!==0
if(g)n[h]=1}}return p},
iO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=c-1,r=b-1,q=b*c,p=a,o=0;o<d;++o,p=n){n=new Uint8Array(q)
for(m=1;m<s;++m)for(l=m*b,k=1;k<r;++k){j=l+k
if(p[j]!==0&&p[j-1]!==0&&p[j+1]!==0&&p[j-b]!==0&&p[j+b]!==0)n[j]=1}}return p},
fW(a){var s,r,q,p,o,n=t.S,m=A.cD(n,n),l=A.c([],t.w)
for(n=J.ao(a.a),s=new A.bb(n,a.b);s.n();){r=n.gp()
q=Math.atan2(r.b,r.a)*180/3.141592653589793
p=B.a.O((q<0?q+180:q)/4)
o=m.h(0,p)
if(o==null)o=0
if(o>=5)continue
m.F(0,p,o+1)
l.push(r)
if(l.length>=24)break}return l},
ka(d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7={},c8=d1*d1,c9=d0.length
if(c9!==c8)throw A.e(A.bz(c9,"prob","erwartet "+c8+" Werte"))
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
j=B.b.G(k,d1)
i=B.b.t(k,d1)
n=new A.em(c7,o,d0,s,r)
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
h.push(new A.f(e,f,g))}b=A.eH(A.fI(h))
a=b==null?c6:A.eI(b)
if(a==null)return c6
f=t.n
a0=A.c([],f)
a1=A.c([],f)
a2=new A.el(new A.ek(c7,d1,s))
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
b2=a8.v(a9)
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
b8.push(1)}}b0.push(b6.length>=4?A.fM(b6,b7,b8,0):c6)}c3=A.c([],n)
for(c9=0.25*d1,b1=0;b1<4;++b1){c4=b0[(b1+3)%4]
c5=b0[b1]
k=c4!=null&&c5!=null?A.aE(c4,c5):c6
if(k==null||k.v(a[b1])>c9)k=a[b1]
c3.push(new A.f(k.a/d1,k.b/d1,g))}return A.es(c3)},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ct:function ct(){},
cu:function cu(){},
cv:function cv(a,b){this.a=a
this.b=b},
cw:function cw(){},
e2:function e2(a,b){this.a=a
this.b=b},
e_:function e_(){},
e0:function e0(){},
e1:function e1(a){this.a=a},
dd:function dd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o:function o(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(){},
dB:function dB(){},
dW:function dW(){},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dy:function dy(a,b){this.a=a
this.b=b},
da:function da(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dL:function dL(a){this.a=a},
dK:function dK(){},
dO:function dO(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(){},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
dG:function dG(){},
dI:function dI(){},
dH:function dH(){},
dU:function dU(){},
dJ:function dJ(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
en:function en(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
jR(a,b,c,d,e,f){var s,r,q,p,o,n,m=null
if(b<1||c<1||a.length<b*c*4)return m
s=null
try{s=A.k5(f,e,a,b,c)
r=e!=null&&Math.max(b,c)>320?e:f
if(s==null&&r!=null)return m}catch(q){}p=s
p=p==null?m:p.a
o=s
if(o==null)o=m
else o=o.b>0.93&&o.c>0.9&&o.d>0.9
n=A.jQ(a,b,c,d,p,o===!0)
if(s!=null&&d!=null&&A.kf(s.a,d,b,c)<0.5)s=null
if(n!=null&&s!=null&&e!=null&&Math.max(b,c)>320&&A.kb(n,s.a,b,c)<0.9){p=$.eZ()
o=s.a
p.a.set(n,o)}return A.k6(n,s)},
k5(a,b,c,d,e){if(b!=null&&Math.max(d,e)>320)return A.eQ(b,c,d,e,!0)
return a==null?null:A.eQ(a,c,d,e,!1)},
k6(a,b){var s
if(a!=null)return a
if(b==null)s=null
else s=b.c>0.9&&b.b>0.75&&b.d>0.9
return s===!0?b.a:null},
kl(a,b,c,d){var s
if(a==null)return null
s=A.eQ(a,b,c,d,!0)
if(s==null||s.b<0.8||s.d<0.95)return null
return s.a},
he(a){var s,r,q,p=t.n,o=A.c([],p)
for(s=a.gJ(),r=0;r<4;++r){q=s[r]
B.c.L(o,A.c([q.a,q.b],p))}return o},
k9(a){var s,r,q
if(a==null||a.length!==8)return null
s=A.c([],t.n)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.n)(a),++q)s.push(a[q])
if(B.c.aj(s,new A.ej()))return null
r=t.X
return new A.a_(new A.f(s[0],s[1],r),new A.f(s[2],s[3],r),new A.f(s[4],s[5],r),new A.f(s[6],s[7],r))},
ej:function ej(){},
kk(e7,e8,e9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5=e7.b,e6=e7.c
if(e5<1||e6<1)throw A.e(A.a9("Das Bild ist leer ("+e5+"x"+e6+").",null))
s=e7.a
r=s.length
q=e5*e6*4
if(r!==q)throw A.e(A.a9("Falsche Pixel-Anzahl: "+r+" Bytes, erwartet "+q+" f\xfcr "+e5+"x"+e6+".",null))
if(e9<1)throw A.e(A.bz(e9,"maxLongSide","muss >= 1 sein"))
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
h=A.k8(e8,e5,e6)
g=h.b
f=h.a
if(!isFinite(g)||!isFinite(f))throw A.e(A.a9("Ung\xfcltige Ecken: "+e8.j(0),null))
e=Math.max(g,f)
if(e>e9){d=e9/e
g*=d
f*=d}c=Math.max(1,Math.min(e9,B.a.l(g)))
b=Math.max(1,Math.min(e9,B.a.l(f)))
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
d5=B.a.Y(d3)
d6=B.a.Y(d4)
d7=B.a.Y((d3-d5)*256)
d8=B.a.Y((d4-d6)*256)
d9=256-d7
e0=256-d8
e1=d6*c4+(d5<<2>>>0)
r=d5<c2
e2=r?e1+4:e1
e3=d6<c3?e1+c4:e1
e4=r?e3+4:e3
c1[c5]=B.b.N((s[e1]*d9+s[e2]*d7)*e0+(s[e3]*d9+s[e4]*d7)*d8+32768,16)
c1[c5+1]=B.b.N((s[e1+1]*d9+s[e2+1]*d7)*e0+(s[e3+1]*d9+s[e4+1]*d7)*d8+32768,16)
c1[c5+2]=B.b.N((s[e1+2]*d9+s[e2+2]*d7)*e0+(s[e3+2]*d9+s[e4+2]*d7)*d8+32768,16)
c1[c5+3]=255
c5+=4}}return new A.c1(c1,c,b)},
k8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=i.a*b,g=i.b*c
i=a.b
s=i.a*b
r=i.b*c
i=a.c
q=i.a*b
p=i.b*c
i=a.d
o=i.a*b
n=i.b*c
m=Math.max(A.dC(h,g,s,r),A.dC(o,n,q,p))
l=Math.max(A.dC(h,g,o,n),A.dC(s,r,q,p))
k=A.jF(A.c([h,g,s,r,q,p,o,n],t.n),b/2,c/2,0.8*Math.max(b,c))
if(!isFinite(k)||k<0.1||k>10){if(l<=0)return new A.bk(l,m)
k=m/l}k=A.jy(k)
j=Math.max(l,m/k)
return new A.bk(j,j*k)},
jF(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=new A.e3(a,b,a0),j=k.$1(0),i=k.$1(1),h=k.$1(2),g=k.$1(3),f=A.dE(A.dw(j,h),g)/A.dE(A.dw(i,h),g),e=A.dE(A.dw(j,h),i)/A.dE(A.dw(g,h),i),d=t.n,c=A.c([],d)
for(s=J.C(i),r=J.C(j),q=0;q<3;++q)c.push(f*s.h(i,q)-r.h(j,q))
d=A.c([],d)
for(s=J.C(g),q=0;q<3;++q)d.push(e*s.h(g,q)-r.h(j,q))
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
jy(a){var s,r,q,p,o
for(s=0;s<2;++s){r=B.B[s]
for(q=[1/r,r],p=0;p<2;++p){o=q[p]
if(Math.abs(a/o-1)<=0.02)return o}}return a},
dw(a,b){var s=a[1],r=b[2],q=a[2],p=b[1],o=b[0],n=a[0]
return A.c([s*r-q*p,q*o-n*r,n*p-s*o],t.n)},
dE(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},
dC(a,b,c,d){var s=c-a,r=d-b
return Math.sqrt(s*s+r*r)},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
bn(a,b,c){return new A.cm(a,b,c,new Float32Array(a*b*c))},
hW(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=t.d,c=d.a(B.v.b4(a,null)),b=A.cD(t.N,t.bV)
e.a=0
s=new A.cM(e,a0)
for(r=t.j,q=J.ao(r.a(c.h(0,"layers"))),p=t.S;q.n();){o=d.a(q.gp())
n=J.hu(r.a(o.h(0,"shape")),p)
m=s.$1(n.a7(n,1,new A.cL()))
l=s.$1(A.aB(o.h(0,"cout")))
k=A.eC(o.h(0,"name"))
A.eC(o.h(0,"kind"))
j=A.aB(o.h(0,"stride"))
i=A.fA(o.h(0,"relu"))
h=A.aB(o.h(0,"cin"))
g=A.aB(o.h(0,"cout"))
f=A.fB(o.h(0,"res"))
b.F(0,k,new A.cf(j,i,h,g,m,l,f===!0))}d=e.a
r=a0.byteLength
if(d!==r)throw A.e(A.f7("weights.bin passt nicht zu model.json ("+d+" von "+r+" Bytes gelesen)"))
d=A.aB(c.h(0,"input"))
A.aB(c.h(0,"output"))
return new A.c4(d,b)},
iF(b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b7.b,a6=b8.b,a7=B.b.t(a6+2-3,a5)+1,a8=b8.c,a9=B.b.t(a8+2-3,a5)+1,b0=b7.e,b1=A.bn(b0,a7,a9),b2=b7.f,b3=b8.d,b4=b1.d,b5=a6*a8,b6=a7*a9
for(s=b7.c,r=b7.d,q=b4.$flags|0,p=b7.r,o=0;o<b0;++o){n=o*b6
for(m=0;m<b6;++m){l=p[o]
q&2&&A.v(b4)
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
q&2&&A.v(b4)
b4[a2]=a3+e*a4}}}if(s)A.fY(b4,n,b6)}return b1},
iM(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=c1.b,b0=c2.b,b1=B.b.t(b0+2-3,a9)+1,b2=c2.c,b3=B.b.t(b2+2-3,a9)+1,b4=c2.a,b5=A.bn(b4,b1,b3),b6=c1.f,b7=c2.d,b8=b5.d,b9=b0*b2,c0=b1*b3
for(s=c1.c,r=b8.$flags|0,q=a9===1,p=b3-1,o=c1.r,n=0;n<b4;++n){m=n*c0
l=n*b9
for(k=0;k<c0;++k){j=o[n]
r&2&&A.v(b8)
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
r&2&&A.v(b8)
b8[a5]=a6+f*a7}}else for(a4=0;a4<b3;++a4){a8=a4*a9+g-1
if(a8<0||a8>=b2)continue
a5=a1+a4
a6=b8[a5]
a7=b7[a0+a8]
r&2&&A.v(b8)
b8[a5]=a6+f*a7}}}if(s)A.fY(b8,m,c0)}return b5},
ah(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=b4.b,a3=b4.c,a4=a2*a3,a5=b3.d,a6=b3.e,a7=A.bn(a6,a2,a3),a8=b3.f,a9=b3.r,b0=b4.d,b1=a7.d,b2=b3.c
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
if(d<0)d=0}a2&2&&A.v(b1)
b1[j+f]=a
b1[i+f]=b
b1[h+f]=c
b1[g+f]=d}}for(;s<a6;++s){r=s*a5
n=a9[s]
j=s*a4
for(f=0;f<a4;++f){for(e=f,a=n,a0=0;a0<a5;++a0,e+=a4)a+=a8[r+a0]*b0[e]
a3=b2&&a<0?0:a
a2&2&&A.v(b1)
b1[j+f]=a3}}return a7},
e4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.a,f=a.b,e=a.c,d=e*2,c=A.bn(g,f*2,d)
for(s=c.b,r=c.d,q=a.d,p=r.$flags|0,o=0;o<g;++o){n=o*f*e
m=o*s*d
for(l=0;l<s;++l){k=n+(l>>>1)*e
j=m+l*d
for(i=0;i<d;++i){h=q[k+(i>>>1)]
p&2&&A.v(r)
r[j+i]=h}}}return c},
dp(a,b){var s,r,q,p,o,n=a.d,m=b.d
for(s=n.length,r=n.$flags|0,q=0;q<s;++q){p=n[q]
o=m[q]
r&2&&A.v(n)
n[q]=p+o}return a},
fY(a,b,c){var s,r,q
for(s=b+c,r=a.$flags|0,q=b;q<s;++q)if(a[q]<0){r&2&&A.v(a)
a[q]=0}},
eQ(a,b,c,d,e){var s,r,q,p,o,n
if(c<8||d<8||b.length<c*d*4)return null
s=a.a
r=A.ke(b,c,d,s,s)
q=a.aa(r)
if(e)q=A.iB(q,A.jj(a.aa(A.jk(r,s))))
p=A.ka(q.b,q.a)
if(p==null)return null
o=A.fU(q,p)
s=o.b
if(s>=0.97)return o
n=A.fU(q,A.kh(q,p))
if(n.b>=s)return n
return new A.c3(n.a,s,o.c,o.d)},
jk(a,b){var s,r,q,p,o,n,m=new Uint8Array(a.length)
for(s=b-1,r=0;r<b;++r){q=r*b*3
for(p=0;p<b;++p){o=q+p*3
n=q+(s-p)*3
m[n]=a[o]
m[n+1]=a[o+1]
m[n+2]=a[o+2]}}return m},
jj(a){var s,r,q,p,o,n,m,l=a.a,k=l*l,j=new Float32Array(k),i=new Float32Array(k)
for(k=a.b,s=a.c,r=0;r<l;++r)for(q=r*l,p=q+l-1,o=0;o<l;++o){n=p-o
m=q+o
j[n]=k[m]
i[n]=s[m]}return new A.b6(l,j,i)},
iB(a,b){var s,r,q,p=a.b,o=p.length,n=new Float32Array(o),m=a.c,l=new Float32Array(m.length)
for(s=b.b,r=b.c,q=0;q<o;++q){n[q]=(p[q]+s[q])/2
l[q]=(m[q]+r[q])/2}return new A.b6(a.a,n,l)},
fU(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.a,a2=A.c([],t.O)
for(s=a4.gJ(),r=t.X,q=0;q<4;++q){p=s[q]
a2.push(new A.f(p.a*a1,p.b*a1,r))}o=new A.dQ(a2)
for(a2=a3.b,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<a1;++h)for(s=h*a1,g=h+0.5,f=0;f<a1;++f){e=f+0.5
for(d=1/0,c=0;c<4;++c)d=Math.min(d,A.e6(o.$3(c,e,g)))
b=a2[s+f]
a=d>0
a0=b>0.5
if(a&&a0)++n
if(a||a0)++m
if(d>1.5){l+=b;++k}else if(d<-1.5){j+=1-b;++i}}a2=m===0?0:n/m
s=k===0?0:l/k
return new A.c3(a4,a2,s,i===0?1:j/i)},
kh(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.a,r=b,q=0;q<2;++q,r=p){p=A.jx(a,r,0.25)
for(o=p.a,n=p.b,m=p.c,l=p.d,k=r.a,j=r.b,i=r.c,h=r.d,g=0,f=0;f<4;++f)g=Math.max(g,Math.max(Math.abs([o,n,m,l][f].a-[k,j,i,h][f].a),Math.abs([o,n,m,l][f].b-[k,j,i,h][f].b)))
if(g*s<0.5){r=p
break}}return r},
jx(d5,d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=d5.a,d3=t.O,d4=A.c([],d3)
for(s=d6.gJ(),r=t.X,q=0;q<4;++q){p=s[q]
d4.push(new A.f(p.a*d2,p.b*d2,r))}s=d4[0]
o=d4[1]
n=d4[2]
m=d4[3]
l=(s.a+o.a+n.a+m.a)/4
k=(s.b+o.b+n.b+m.b)/4
j=0.12*d2
i=new A.dY(d2)
h=A.c([],t.h)
for(g=0;g<4;g=d){f={}
e=d4[g]
d=g+1
s=d%4
c=d4[s]
b=e.v(c)
if(b<3)return d6
o=c.b
n=e.b
a=f.a=-(o-n)/b
m=c.a
a0=e.a
a1=f.b=(m-a0)/b
if((l-a0)*a+(k-n)*a1>0){f.a=-a
f.b=-a1}a2=B.b.C(B.a.l(b/2),12,32)
a3=Math.min(j,d7*((d4[(g+3)%4].v(d4[g])+d4[s].v(d4[(g+2)%4]))/2))
a4=new A.dZ(f,e,c,a2,i,d5,d2)
a5=a4.$2(0,0)
a6=B.a.O(a3)
for(a7=-a6,a8=a7,a9=0,b0=0;a8<=a6;++a8)for(b1=a7;b1<=a6;++b1){b2=a4.$2(a8,b1)
if(b2>a5){a5=b2
b0=b1
a9=a8}}for(b3=b0,b4=a9,a7=-4;a7<=4;++a7)for(b5=a9+a7/4,b1=-4;b1<=4;++b1){b6=b0+b1/4
b2=a4.$2(b5,b6)
if(b2>a5){a5=b2
b3=b6
b4=b5}}s=f.a
b7=f.b
h.push(new A.X(new A.f(a0+b4*s,n+b4*b7,r),new A.f(m+b3*s,o+b3*b7,r)))}b8=A.c([],d3)
for(d3=2*j,g=0;g<4;++g){b9=h[(g+3)%4]
c0=b9.a
c1=b9.b
c2=h[g]
c3=c2.a
c4=c2.b
s=c0.a
c5=c1.a-s
o=c0.b
c6=c1.b-o
n=c3.a
c7=c4.a-n
m=c3.b
c8=c4.b-m
c9=c5*c8-c6*c7
if(Math.abs(c9)<1e-9)return d6
d0=((n-s)*c8-(m-o)*c7)/c9
s+=d0*c5
o+=d0*c6
if(new A.f(s,o,r).v(d4[g])>d3)return d6
b8.push(new A.f(s/d2,o/d2,r))}d1=new A.a_(b8[0],b8[1],b8[2],b8[3])
return d1.gaH()?d1:d6},
ke(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.fr(a4,a6),a1=A.fr(a5,a7),a2=new Float32Array(a6*a5*3)
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
a[b]=B.b.C(B.a.l(h),0,255)
a[b+1]=B.b.C(B.a.l(g),0,255)
a[b+2]=B.b.C(B.a.l(f),0,255)}}return a},
fr(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=a/a0,f=Math.max(g,1),e=B.a.ak(f)*2+1,d=new Int32Array(a0),c=new Int32Array(a0),b=new Float64Array(a0*e)
for(s=0;s<a0;++s){r=(s+0.5)*g
q=Math.max(B.a.O(r-f+0.5),0)
p=Math.min(B.a.O(r+f+0.5),a)
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
c[s]=l}return new A.df(e,d,c,b)},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b){this.a=a
this.c=b},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a){this.a=a},
dY:function dY(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jM(a){var s,r=A.k7(a),q=A.jD(r),p=!0
if(q==null)if(A.fS(r)){p=r.a
p=p[1]<=p[0]}if(p)return q
p=r.a
s=p[3]
p=p[2]
return(Math.max(s,p)<20||s===p?!0:s>p)?3:1},
fS(a){var s,r=a.a,q=r[0]
r=r[1]
s=Math.max(q,r)
return s>=60&&s>=2*Math.min(q,r)},
jD(a){var s,r,q,p,o
if(!A.fS(a))return null
s=a.a
r=s[3]
q=s[2]
p=Math.max(r,q)
if(p<20||p<2.5*Math.min(r,q))return null
o=r>q
if(s[1]>s[0])return o?3:1
return o?0:2},
k7(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=b0.b,a2=b0.c,a3=A.iW(b0),a4=A.iD(a3,a1,a2),a5=a4.length/4|0,a6=new Uint8Array(a5+1),a7=Math.max(a1,a2),a8=a7/12,a9=a7/40
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
for(r=s.length,g=0;g<s.length;s.length===r||(0,A.n)(s),++g){q=s[g]*4
a7.push(Math.min(a4[q+2]-a4[q],a4[q+3]-a4[q+1])+1)}B.c.K(a7)
r=a7.length
B.c.bf(s,new A.ef(a4,r===0?0:a7[r/2|0]/2,a6))
if(s.length<2)return new A.bl([0,0,0,0])
a7=a9*3
f=new A.db(a4,Math.max(a7,1),A.cD(t.S,t.L))
f.aN(a4,s,a7)
for(a7=s.length,e=0,d=0,g=0;g<s.length;s.length===a7||(0,A.n)(s),++g){p=s[g]
c=f.bc(p)
if(c<0)continue
r=p*4
q=c*4
b=Math.abs((a4[r]+a4[r+2])/2-(a4[q]+a4[q+2])/2)
a=Math.abs((a4[r+1]+a4[r+3])/2-(a4[q+1]+a4[q+3])/2)
if(b>2*a)++e
if(a>2*b)++d}a0=A.ir(a3,a6,a1,a2,d>e)
return new A.bl([e,d,a0.b,a0.a])},
iW(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b5.b,a9=b5.c,b0=b5.a,b1=a8+1,b2=new Int32Array(b1*(a9+1)),b3=a8*a9,b4=new Uint8Array(b3)
for(s=0;s<a9;s=q)for(r=s*a8,q=s+1,p=q*b1,o=s*b1,n=0,m=0;m<a8;++m){l=r+m
k=l*4
j=b0[k]*77+b0[k+1]*150+b0[k+2]*29>>>8
b4[l]=j
n+=j
b2[p+m+1]=b2[o+m+1]+n}i=Math.max(6,B.a.S(Math.max(a8,a9),60))
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
m=B.b.G(a2,a8)
s=B.b.t(a2,a8)
for(a3=Math.max(0,s-1),p=Math.min(b1,s+1),o=m-1,l=m+1;a3<=p;++a3)for(a4=Math.max(0,o),c=Math.min(r,l),a5=a3*a8;a4<=c;++a4){a6=a5+a4
if(h[a6]===-1){h[a6]=a
a7=a1+1
b[a1]=a6
a1=a7}}}}return h},
iD(a,b,c){var s,r,q,p,o,n,m,l,k
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
iG(a,b){var s=b*4
return(a[s]+a[s+2])/2},
iH(a,b){var s=b*4
return(a[s+1]+a[s+3])/2},
ir(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a7?a6:a5,a0=a7?a5:a6,a1=Math.max(8,B.a.S(Math.max(a5,a6),25)),a2=new Int32Array(a0)
for(s=0,r=0,q=0;q<a;q=p){p=q+a1
o=Math.min(a,p)
B.C.b6(a2,0,a0,0)
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
l=j}}return new A.X(s,r)},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
by(){var s=0,r=A.fT(t.o),q
var $async$by=A.h1(function(a,b){if(a===1)return A.fD(b,r)
for(;;)switch(s){case 0:q=$
s=2
return A.aC(A.a6("sheet_net"),$async$by)
case 2:q.fV=b
q=$
s=3
return A.aC(A.a6("sheet_net_large"),$async$by)
case 3:q.eG=b
q=$
s=4
return A.aC(A.a6("sheet_net_zoom"),$async$by)
case 4:q.h2=b
return A.fE(null,r)}})
return A.fF($async$by,r)},
a6(a){return A.jh(a)},
jh(a){var s=0,r=A.fT(t.as),q,p=2,o=[],n,m,l,k,j,i,h,g,f
var $async$a6=A.h1(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
i="ml/"+a
h=t.m
s=7
return A.aC(A.eg(j.self.fetch(i+".json"),h),$async$a6)
case 7:n=c
s=8
return A.aC(A.eg(j.self.fetch(i+".bin"),h),$async$a6)
case 8:m=c
if(!n.ok||!m.ok){q=null
s=1
break}s=9
return A.aC(A.eg(n.text(),t.N),$async$a6)
case 9:l=c
s=10
return A.aC(A.eg(m.arrayBuffer(),t.M),$async$a6)
case 10:k=c
j=k
A.fG(j,0,null)
j=new DataView(j,0)
j=A.hW(l,j)
q=j
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.fE(q,r)
case 2:return A.fD(o.at(-1),r)}})
return A.fF($async$a6,r)},
k3(){var s,r,q,p
A.by()
s=v.G
r=s.self
q=new A.ed()
if(typeof q=="function")A.eo(A.a9("Attempting to rewrap a JS function.",null))
p=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.iE,q)
p[$.eU()]=q
r.onmessage=p
s.self.postMessage({type:"ready"})},
jo(a,b){var s,r,q,p,o,n=null
try{r=a.quad
if(r==null)r=null
else{r=t.J.b(r)?r:new A.L(r,A.D(r).i("L<1,a>"))
r=J.hy(r,new A.dT(),t.i)
r=A.Q(r,r.$ti.i("w.E"))}s=A.k9(r)
if(s!=null)n=A.kd(new A.c1(A.fb(a.pixels,0,null),a.width,a.height),s)}catch(q){n=null}r=v.G.self
p=a.id
o=n
r.postMessage({type:"up",id:p,ms:b.gaE(),up:o})},
ed:function ed(){},
dT:function dT(){},
hf(a){return v.mangledGlobalNames[a]},
ki(a){throw A.A(new A.bN("Field '"+a+"' has been assigned during initialization."),new Error())},
hd(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a4.a,a2=a1.a,a3=a1.b
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
kd(a,b){var s,r,q,p,o,n=A.jM(A.kk(a,b,1600))
if(n==null)return null
s=b.gJ()
r=B.b.G(n,4)
q=new A.a_(s[B.b.G(4-r,4)],s[B.b.G(5-r,4)],s[B.b.G(6-r,4)],s[3-r])
p=A.hd(q,0.5,0)
o=A.hd(q,0.5,1)
return Math.atan2((p.b-o.b)*a.c,(p.a-o.a)*a.b)}},B={}
var w=[A,J,B]
var $={}
A.eu.prototype={}
J.bI.prototype={
P(a,b){return a===b},
gq(a){return A.bZ(a)},
j(a){return"Instance of '"+A.c_(a)+"'"},
gu(a){return A.ak(A.eD(this))}}
J.bL.prototype={
j(a){return String(a)},
gq(a){return a?519018:218159},
gu(a){return A.ak(t.y)},
$ik:1,
$iu:1}
J.aS.prototype={
P(a,b){return null==b},
j(a){return"null"},
gq(a){return 0},
$ik:1}
J.aV.prototype={$ir:1}
J.a1.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.bY.prototype={}
J.ae.prototype={}
J.a0.prototype={
j(a){var s=a[$.hh()]
if(s==null)s=a[$.eU()]
if(s==null)return this.aL(a)
return"JavaScript function for "+J.aO(s)}}
J.aU.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.aW.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.i.prototype={
a6(a,b){return new A.L(a,A.D(a).i("@<1>").H(b).i("L<1,2>"))},
b2(a,b){a.$flags&1&&A.v(a,29)
a.push(b)},
bf(a,b){a.$flags&1&&A.v(a,16)
this.aY(a,b,!0)},
aY(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.e(A.E(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
L(a,b){var s
a.$flags&1&&A.v(a,"addAll",2)
if(Array.isArray(b)){this.aP(a,b)
return}for(s=J.ao(b);s.n();)a.push(s.gp())},
aP(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.e(A.E(a))
for(s=0;s<r;++s)a.push(b[s])},
aI(a,b,c){return new A.S(a,b,A.D(a).i("@<1>").H(c).i("S<1,2>"))},
bd(a,b){var s,r,q=a.length
if(q===0)throw A.e(A.bJ())
s=a[0]
for(r=1;r<q;++r){s=b.$2(s,a[r])
if(q!==a.length)throw A.e(A.E(a))}return s},
an(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.e(A.E(a))}return s},
a7(a,b,c){return this.an(a,b,c,t.z)},
B(a,b){return a[b]},
m(a,b,c){var s=a.length
if(b>s)throw A.e(A.M(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.e(A.M(c,b,s,"end",null))
if(b===c)return A.c([],A.D(a))
return A.c(a.slice(b,c),A.D(a))},
A(a,b){return this.m(a,b,null)},
a_(a,b,c){A.cJ(b,c,a.length)
return A.cP(a,b,c,A.D(a).c)},
gV(a){if(a.length>0)return a[0]
throw A.e(A.bJ())},
gX(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.bJ())},
aj(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.e(A.E(a))}return!1},
M(a,b){var s,r,q,p,o
a.$flags&2&&A.v(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.j1()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.D(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aJ(b,2))
if(p>0)this.aZ(a,p)},
K(a){return this.M(a,null)},
aZ(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
j(a){return A.f8(a,"[","]")},
gE(a){return new J.ap(a,a.length,A.D(a).i("ap<1>"))},
gq(a){return A.bZ(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.v(a,"set length","change the length of")
if(b<0)throw A.e(A.M(b,0,null,"newLength",null))
if(b>a.length)A.D(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.e(A.eN(a,b))
return a[b]},
F(a,b,c){a.$flags&2&&A.v(a)
if(!(b>=0&&b<a.length))throw A.e(A.eN(a,b))
a[b]=c},
$ih:1,
$id:1}
J.bK.prototype={
bl(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c_(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cz.prototype={}
J.ap.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.at.prototype={
D(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga9(b)
if(this.ga9(a)===s)return 0
if(this.ga9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga9(a){return a===0?1/a<0:a<0},
gaq(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
Y(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.ba(""+a+".toInt()"))},
ak(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.ba(""+a+".ceil()"))},
O(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.ba(""+a+".floor()"))},
l(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.ba(""+a+".round()"))},
C(a,b,c){if(this.D(b,c)>0)throw A.e(A.jI(b))
if(this.D(a,b)<0)return b
if(this.D(a,c)>0)return c
return a},
Z(a,b){var s
if(b>20)throw A.e(A.M(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga9(a))return"-"+s
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
G(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
t(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aA(a,b)},
S(a,b){return(a|0)===a?a/b|0:this.aA(a,b)},
aA(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.ba("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+A.m(b)))},
N(a,b){var s
if(a>0)s=this.b0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b0(a,b){return b>31?0:a>>>b},
gu(a){return A.ak(t.H)},
$ia:1}
J.as.prototype={
gaq(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gu(a){return A.ak(t.S)},
$ik:1,
$ib:1}
J.aT.prototype={
gu(a){return A.ak(t.i)},
$ik:1}
J.au.prototype={
D(a,b){var s
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
gu(a){return A.ak(t.N)},
gk(a){return a.length},
$ik:1,
$iy:1}
A.a3.prototype={
gE(a){return new A.bC(J.ao(this.gT()),A.aD(this).i("bC<1,2>"))},
gk(a){return J.a8(this.gT())},
B(a,b){return A.aD(this).y[1].a(J.ep(this.gT(),b))},
j(a){return J.aO(this.gT())}}
A.bC.prototype={
n(){return this.a.n()},
gp(){return this.$ti.y[1].a(this.a.gp())}}
A.aa.prototype={
gT(){return this.a}}
A.be.prototype={$ih:1}
A.bd.prototype={
h(a,b){return this.$ti.y[1].a(J.cq(this.a,b))},
F(a,b,c){J.ht(this.a,b,this.$ti.c.a(c))},
a_(a,b,c){var s=this.$ti
return A.f5(J.hx(this.a,b,c),s.c,s.y[1])},
$ih:1,
$id:1}
A.L.prototype={
a6(a,b){return new A.L(this.a,this.$ti.i("@<1>").H(b).i("L<1,2>"))},
gT(){return this.a}}
A.bN.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.cK.prototype={}
A.h.prototype={}
A.w.prototype={
gE(a){var s=this
return new A.H(s,s.gk(s),A.aD(s).i("H<w.E>"))},
b9(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.B(0,0))
if(o!==p.gk(p))throw A.e(A.E(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.B(0,q))
if(o!==p.gk(p))throw A.e(A.E(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.B(0,q))
if(o!==p.gk(p))throw A.e(A.E(p))}return r.charCodeAt(0)==0?r:r}}}
A.ad.prototype={
aM(a,b,c,d){var s,r=this.b
A.c0(r,"start")
s=this.c
if(s!=null){A.c0(s,"end")
if(r>s)throw A.e(A.M(r,0,s,"start",null))}},
gaU(){var s=J.a8(this.a),r=this.c
if(r==null||r>s)return s
return r},
gb1(){var s=J.a8(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.a8(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
B(a,b){var s=this,r=s.gb1()+b
if(b<0||r>=s.gaU())throw A.e(A.et(b,s.gk(0),s,"index"))
return J.ep(s.a,r)}}
A.H.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.aK(q),o=p.gk(q)
if(r.b!==o)throw A.e(A.E(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
A.S.prototype={
gk(a){return J.a8(this.a)},
B(a,b){return this.b.$1(J.ep(this.a,b))}}
A.W.prototype={
gE(a){return new A.bb(J.ao(this.a),this.b)}}
A.bb.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()}}
A.aR.prototype={}
A.b4.prototype={
gk(a){return J.a8(this.a)},
B(a,b){var s=this.a,r=J.aK(s)
return r.B(s,r.gk(s)-1-b)}}
A.bt.prototype={}
A.X.prototype={$r:"+(1,2)",$s:1}
A.bk.prototype={$r:"+height,width(1,2)",$s:2}
A.bl.prototype={$r:"+across,down,low,up(1,2,3,4)",$s:3}
A.cj.prototype={$r:"+label,maxX,maxY,minX,minY(1,2,3,4,5)",$s:4}
A.cH.prototype={
$0(){return B.a.O(1000*this.a.now())},
$S:8}
A.b5.prototype={}
A.cS.prototype={
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
A.b2.prototype={
j(a){return"Null check operator used on a null value"}}
A.bM.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c7.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cG.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aQ.prototype={}
A.bm.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia2:1}
A.ab.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hg(r==null?"unknown":r)+"'"},
gbm(){return this},
$C:"$1",
$R:1,
$D:null}
A.cr.prototype={$C:"$0",$R:0}
A.cs.prototype={$C:"$2",$R:2}
A.cR.prototype={}
A.cN.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hg(s)+"'"}}
A.aP.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aP))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.h9(this.a)^A.bZ(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c_(this.a)+"'")}}
A.c2.prototype={
j(a){return"RuntimeError: "+this.a}}
A.aX.prototype={
gk(a){return this.a},
gW(){return new A.ac(this,this.$ti.i("ac<1>"))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.b8(b)},
b8(a){var s,r,q=this.d
if(q==null)return null
s=this.aW(q,a)
r=this.aG(s,a)
if(r<0)return null
return s[r].b},
F(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ar(s==null?m.b=m.ah():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ar(r==null?m.c=m.ah():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ah()
p=J.P(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.ai(b,c)]
else{n=m.aG(o,b)
if(n>=0)o[n].b=c
else o.push(m.ai(b,c))}}},
a8(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.e(A.E(s))
r=r.c}},
ar(a,b,c){var s=a[b]
if(s==null)a[b]=this.ai(b,c)
else s.b=c},
ai(a,b){var s=this,r=new A.cC(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aW(a,b){return a[J.P(b)&1073741823]},
aG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aN(a[r].a,b))return r
return-1},
j(a){return A.f9(this)},
ah(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cC.prototype={}
A.ac.prototype={
gk(a){return this.a.a},
gE(a){var s=this.a
return new A.bO(s,s.r,s.e)}}
A.bO.prototype={
gp(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.E(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.e9.prototype={
$1(a){return this.a(a)},
$S:20}
A.ea.prototype={
$2(a,b){return this.a(a,b)},
$S:40}
A.eb.prototype={
$1(a){return this.a(a)},
$S:17}
A.bj.prototype={
j(a){return this.aC(!1)},
aC(a){var s,r,q,p,o,n=this.aV(),m=this.ag(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.fe(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aV(){var s,r=this.$s
while($.de.length<=r)$.de.push(null)
s=$.de[r]
if(s==null){s=this.aS()
$.de[r]=s}return s},
aS(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.c(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.hQ(k,!1,t.K)
k.$flags=3
return k}}
A.ch.prototype={
ag(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.ch&&this.$s===b.$s&&J.aN(this.a,b.a)&&J.aN(this.b,b.b)},
gq(a){return A.fc(this.$s,this.a,this.b,B.e)}}
A.ci.prototype={
ag(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.ci&&this.$s===b.$s&&A.ie(this.a,b.a)},
gq(a){return A.fc(this.$s,A.hR(this.a),B.e,B.e)}}
A.aw.prototype={
gu(a){return B.D},
$ik:1}
A.av.prototype={$iav:1}
A.b0.prototype={}
A.bQ.prototype={
gu(a){return B.E},
$ik:1}
A.ax.prototype={
gk(a){return a.length},
$iF:1}
A.aZ.prototype={
h(a,b){A.Y(b,a,a.length)
return a[b]},
F(a,b,c){a.$flags&2&&A.v(a)
A.Y(b,a,a.length)
a[b]=c},
$ih:1,
$id:1}
A.b_.prototype={
F(a,b,c){a.$flags&2&&A.v(a)
A.Y(b,a,a.length)
a[b]=c},
$ih:1,
$id:1}
A.bR.prototype={
gu(a){return B.F},
m(a,b,c){return new Float32Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1,
$iaq:1}
A.bS.prototype={
gu(a){return B.G},
m(a,b,c){return new Float64Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.bT.prototype={
gu(a){return B.H},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Int16Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.aY.prototype={
gu(a){return B.I},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Int32Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.bU.prototype={
gu(a){return B.J},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Int8Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.bV.prototype={
gu(a){return B.L},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Uint16Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.bW.prototype={
gu(a){return B.M},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Uint32Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.b1.prototype={
gu(a){return B.N},
gk(a){return a.length},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.bX.prototype={
gu(a){return B.O},
gk(a){return a.length},
h(a,b){A.Y(b,a,a.length)
return a[b]},
m(a,b,c){return new Uint8Array(a.subarray(b,A.a5(b,c,a.length)))},
A(a,b){return this.m(a,b,null)},
$ik:1}
A.bf.prototype={}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.N.prototype={
i(a){return A.bs(v.typeUniverse,this,a)},
H(a){return A.fx(v.typeUniverse,this,a)}}
A.cc.prototype={}
A.dk.prototype={
j(a){return A.G(this.a,null)}}
A.cb.prototype={
j(a){return this.a}}
A.bo.prototype={$iU:1}
A.cV.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cU.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:34}
A.cW.prototype={
$0(){this.a.$0()},
$S:5}
A.cX.prototype={
$0(){this.a.$0()},
$S:5}
A.di.prototype={
aO(a,b){if(self.setTimeout!=null)self.setTimeout(A.aJ(new A.dj(this,b),0),a)
else throw A.e(A.ba("`setTimeout()` not found."))}}
A.dj.prototype={
$0(){this.b.$0()},
$S:0}
A.c8.prototype={
al(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.au(a)
else{s=r.a
if(r.$ti.i("ar<1>").b(a))s.av(a)
else s.aw(a)}},
am(a,b){var s=this.a
if(this.b)s.ad(new A.K(a,b))
else s.ac(new A.K(a,b))}}
A.dq.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.dr.prototype={
$2(a,b){this.a.$2(1,new A.aQ(a,b))},
$S:21}
A.e5.prototype={
$2(a,b){this.a(a,b)},
$S:23}
A.K.prototype={
j(a){return A.m(this.a)},
$iq:1,
ga0(){return this.b}}
A.ca.prototype={
am(a,b){var s=this.a
if((s.a&30)!==0)throw A.e(A.fh("Future already completed"))
s.ac(A.j0(a,b))},
aD(a){return this.am(a,null)}}
A.bc.prototype={
al(a){var s=this.a
if((s.a&30)!==0)throw A.e(A.fh("Future already completed"))
s.au(a)}}
A.az.prototype={
ba(a){if((this.c&15)!==6)return!0
return this.b.b.ap(this.d,a.a)},
b7(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.bh(r,p,a.b)
else q=o.ap(r,p)
try{p=q
return p}catch(s){if(t._.b(A.an(s))){if((this.c&1)!==0)throw A.e(A.a9("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.a9("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
aK(a,b,c){var s,r=$.t
if(r===B.d){if(!t.Q.b(b)&&!t.v.b(b))throw A.e(A.bz(b,"onError",u.c))}else b=A.jq(b,r)
s=new A.z(r,c.i("z<0>"))
this.ab(new A.az(s,3,a,b,this.$ti.i("@<1>").H(c).i("az<1,2>")))
return s},
aB(a,b,c){var s=new A.z($.t,c.i("z<0>"))
this.ab(new A.az(s,19,a,b,this.$ti.i("@<1>").H(c).i("az<1,2>")))
return s},
b_(a){this.a=this.a&1|16
this.c=a},
a1(a){this.a=a.a&30|this.a&1
this.c=a.c},
ab(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.ab(a)
return}s.a1(r)}A.cn(null,null,s.b,new A.d0(s,a))}},
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
return}n.a1(s)}m.a=n.a4(a)
A.cn(null,null,n.b,new A.d4(m,n))}},
a3(){var s=this.c
this.c=null
return this.a4(s)},
a4(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aw(a){var s=this,r=s.a3()
s.a=8
s.c=a
A.aA(s,r)},
aR(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a3()
q.a1(a)
A.aA(q,r)},
ad(a){var s=this.a3()
this.b_(a)
A.aA(this,s)},
au(a){if(this.$ti.i("ar<1>").b(a)){this.av(a)
return}this.aQ(a)},
aQ(a){this.a^=2
A.cn(null,null,this.b,new A.d2(this,a))},
av(a){A.ez(a,this,!1)
return},
ac(a){this.a^=2
A.cn(null,null,this.b,new A.d1(this,a))},
$iar:1}
A.d0.prototype={
$0(){A.aA(this.a,this.b)},
$S:0}
A.d4.prototype={
$0(){A.aA(this.b,this.a.a)},
$S:0}
A.d3.prototype={
$0(){A.ez(this.a.a,this.b,!0)},
$S:0}
A.d2.prototype={
$0(){this.a.aw(this.b)},
$S:0}
A.d1.prototype={
$0(){this.a.ad(this.b)},
$S:0}
A.d7.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aa(q.d)}catch(p){s=A.an(p)
r=A.aL(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.er(q)
n=k.a
n.c=new A.K(q,o)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.aK(new A.d8(l,m),new A.d9(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d8.prototype={
$1(a){this.a.aR(this.b)},
$S:4}
A.d9.prototype={
$2(a,b){this.a.ad(new A.K(a,b))},
$S:24}
A.d6.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ap(p.d,this.b)}catch(o){s=A.an(o)
r=A.aL(o)
q=s
p=r
if(p==null)p=A.er(q)
n=this.a
n.c=new A.K(q,p)
n.b=!0}},
$S:0}
A.d5.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.ba(s)&&p.a.e!=null){p.c=p.a.b7(s)
p.b=!1}}catch(o){r=A.an(o)
q=A.aL(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.er(p)
m=l.b
m.c=new A.K(p,n)
p=m}p.b=!0}},
$S:0}
A.c9.prototype={}
A.ck.prototype={}
A.dn.prototype={}
A.dg.prototype={
bj(a){var s,r,q
try{if(B.d===$.t){a.$0()
return}A.fZ(null,null,this,a)}catch(q){s=A.an(q)
r=A.aL(q)
A.eJ(s,r)}},
b3(a){return new A.dh(this,a)},
bg(a){if($.t===B.d)return a.$0()
return A.fZ(null,null,this,a)},
aa(a){return this.bg(a,t.z)},
bk(a,b){if($.t===B.d)return a.$1(b)
return A.js(null,null,this,a,b)},
ap(a,b){var s=t.z
return this.bk(a,b,s,s)},
bi(a,b,c){if($.t===B.d)return a.$2(b,c)
return A.jr(null,null,this,a,b,c)},
bh(a,b,c){var s=t.z
return this.bi(a,b,c,s,s,s)},
be(a){return a},
aJ(a){var s=t.z
return this.be(a,s,s,s)}}
A.dh.prototype={
$0(){return this.a.bj(this.b)},
$S:0}
A.dV.prototype={
$0(){A.hH(this.a,this.b)},
$S:0}
A.j.prototype={
gE(a){return new A.H(a,this.gk(a),A.Z(a).i("H<j.E>"))},
B(a,b){return this.h(a,b)},
gV(a){if(this.gk(a)===0)throw A.e(A.bJ())
return this.h(a,0)},
gX(a){if(this.gk(a)===0)throw A.e(A.bJ())
return this.h(a,this.gk(a)-1)},
aI(a,b,c){return new A.S(a,b,A.Z(a).i("@<j.E>").H(c).i("S<1,2>"))},
an(a,b,c){var s,r,q=this.gk(a)
for(s=b,r=0;r<q;++r){s=c.$2(s,this.h(a,r))
if(q!==this.gk(a))throw A.e(A.E(a))}return s},
a7(a,b,c){return this.an(a,b,c,t.z)},
a6(a,b){return new A.L(a,A.Z(a).i("@<j.E>").H(b).i("L<1,2>"))},
m(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.cJ(b,c,r)
s=A.Q(this.a_(a,b,c),A.Z(a).i("j.E"))
return s},
A(a,b){return this.m(a,b,null)},
a_(a,b,c){A.cJ(b,c,this.gk(a))
return A.cP(a,b,c,A.Z(a).i("j.E"))},
b6(a,b,c,d){var s
A.cJ(b,c,this.gk(a))
for(s=b;s<c;++s)this.F(a,s,d)},
j(a){return A.f8(a,"[","]")}}
A.R.prototype={
a8(a,b){var s,r,q,p
for(s=this.gW(),s=s.gE(s),r=A.aD(this).i("R.V");s.n();){q=s.gp()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gk(a){var s=this.gW()
return s.gk(s)},
j(a){return A.f9(this)},
$ibP:1}
A.cE.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:33}
A.cd.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.aX(b):s}},
gk(a){return this.b==null?this.c.a:this.a2().length},
gW(){if(this.b==null){var s=this.c
return new A.ac(s,s.$ti.i("ac<1>"))}return new A.ce(this)},
a8(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a8(0,b)
s=o.a2()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dt(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.e(A.E(o))}},
a2(){var s=this.c
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
aX(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dt(this.a[a])
return this.b[a]=s}}
A.ce.prototype={
gk(a){return this.a.gk(0)},
B(a,b){var s=this.a
return s.b==null?s.gW().B(0,b):s.a2()[b]},
gE(a){var s=this.a
if(s.b==null){s=s.gW()
s=s.gE(s)}else{s=s.a2()
s=new J.ap(s,s.length,A.D(s).i("ap<1>"))}return s}}
A.bD.prototype={}
A.bF.prototype={}
A.cA.prototype={
b4(a,b){var s=A.jm(a,this.gb5().a)
return s},
gb5(){return B.z}}
A.cB.prototype={}
A.q.prototype={
ga0(){return A.hT(this)}}
A.bA.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cx(s)
return"Assertion failed"}}
A.U.prototype={}
A.J.prototype={
gaf(){return"Invalid argument"+(!this.a?"(s)":"")},
gae(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaf()+q+o
if(!s.a)return n
return n+s.gae()+": "+A.cx(s.gao())},
gao(){return this.b}}
A.b3.prototype={
gao(){return this.b},
gaf(){return"RangeError"},
gae(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bH.prototype={
gao(){return this.b},
gaf(){return"RangeError"},
gae(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.b9.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.c6.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.b8.prototype={
j(a){return"Bad state: "+this.a}}
A.bE.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cx(s)+"."}}
A.b7.prototype={
j(a){return"Stack Overflow"},
ga0(){return null},
$iq:1}
A.d_.prototype={
j(a){return"Exception: "+this.a}}
A.cy.prototype={
j(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.p.prototype={
a6(a,b){return A.f5(this,A.aD(this).i("p.E"),b)},
gk(a){var s,r=this.gE(this)
for(s=0;r.n();)++s
return s},
B(a,b){var s,r
A.c0(b,"index")
s=this.gE(this)
for(r=b;s.n();){if(r===0)return s.gp();--r}throw A.e(A.et(b,b-r,this,"index"))},
j(a){return A.hM(this,"(",")")}}
A.B.prototype={
gq(a){return A.l.prototype.gq.call(this,0)},
j(a){return"null"}}
A.l.prototype={$il:1,
P(a,b){return this===b},
gq(a){return A.bZ(this)},
j(a){return"Instance of '"+A.c_(this)+"'"},
gu(a){return A.jW(this)},
toString(){return this.j(this)}}
A.cl.prototype={
j(a){return""},
$ia2:1}
A.cO.prototype={
gaE(){var s,r=this.b
if(r==null)r=$.ex.$0()
s=r-this.a
if($.eV()===1000)return s
return B.b.S(s,1000)}}
A.c5.prototype={
gk(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.bG.prototype={
j(a){return"Expando:"+this.b}}
A.cF.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.eh.prototype={
$1(a){return this.a.al(a)},
$S:1}
A.ei.prototype={
$1(a){if(a==null)return this.a.aD(new A.cF(a===undefined))
return this.a.aD(a)},
$S:1}
A.f.prototype={
j(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
P(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b},
gq(a){return A.fj(B.a.gq(this.a),B.a.gq(this.b),0)},
v(a){var s=this.a-a.a,r=this.b-a.b
return Math.sqrt(s*s+r*r)}}
A.a_.prototype={
gJ(){var s=this
return A.c([s.a,s.b,s.c,s.d],t.O)},
gaH(){var s,r,q,p,o,n,m,l,k,j=this.gJ()
for(s=null,r=0;r<4;r=p){q=j[r]
p=r+1
o=j[p%4]
n=j[(r+2)%4]
m=o.a
l=o.b
k=(m-q.a)*(n.b-l)-(l-q.b)*(n.a-m)
if(Math.abs(k)<1e-9)return!1
if(s==null)s=J.f0(k)
if(J.f0(k)!==s)return!1}return!0},
j(a){var s=this.gJ()
return"DocumentQuad("+new A.S(s,new A.cw(),A.D(s).i("S<1,y>")).b9(0,", ")+")"}}
A.ct.prototype={
$2(a,b){return a+b.a},
$S:6}
A.cu.prototype={
$2(a,b){return a+b.b},
$S:6}
A.cv.prototype={
$2(a,b){var s=this.a,r=this.b
return B.a.D(Math.atan2(a.b-s,a.a-r),Math.atan2(b.b-s,b.a-r))},
$S:7}
A.cw.prototype={
$1(a){return"("+B.a.Z(a.a,3)+", "+B.a.Z(a.b,3)+")"},
$S:15}
A.e2.prototype={
$1(a){return A.c([a.a-this.a,a.b-this.b,1],t.n)},
$S:16}
A.e_.prototype={
$2(a,b){var s=a[1],r=b[2],q=a[2],p=b[1],o=b[0],n=a[0]
return A.c([s*r-q*p,q*o-n*r,n*p-s*o],t.n)},
$S:14}
A.e0.prototype={
$2(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},
$S:18}
A.e1.prototype={
$1(a){var s=a[0],r=a[1],q=this.a.a,p=a[2]
return Math.sqrt((s*s+r*r)/q+p*p)},
$S:19}
A.dd.prototype={}
A.o.prototype={
gaF(){return Math.abs(this.b)>=Math.abs(this.a)}}
A.cg.prototype={
bb(a,b){var s,r,q,p,o,n,m=b-a
if(m<4)return B.n
s=this.c
r=s.length-1
q=this.b
p=B.b.C(B.a.l(a)-q,0,r)
o=B.b.C(B.a.l(b)-q,0,r)
q=this.d
n=q[o]-q[p]
if(n<=0)return B.n
return new A.X((s[o]-s[p])/n,n/m)}}
A.af.prototype={}
A.dA.prototype={
$1(a){return a.gaF()},
$S:9}
A.dB.prototype={
$1(a){return!a.gaF()},
$S:9}
A.dW.prototype={
$1(a){return a},
$S:10}
A.dx.prototype={
$1(a){var s=this,r=B.a.l(a.a),q=B.a.l(a.b)
return r<0||q<0||r>=s.a||q>=s.b?null:s.c[q*s.a+r]},
$S:22}
A.dz.prototype={
$1(a){var s=this,r=a*s.c,q=s.a,p=B.a.l(s.b+r*q.a),o=B.a.l(s.d+r*q.b)
return p<0||o<0||p>=s.e||o>=s.f?-1:o*s.e+p},
$S:11}
A.dy.prototype={
$1(a){var s=this.a.$1(a)
return s<0?-1:this.b[s]},
$S:11}
A.da.prototype={}
A.dL.prototype={
$2(a,b){var s=this.a
return B.b.D(s[b],s[a])},
$S:12}
A.dK.prototype={
$2(a,b){return B.b.D(b.d,a.d)},
$S:25}
A.dO.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this,k=A.c([],t.k),j=b?l.a:l.b,i=new A.dP(b,(b?l.b:l.a)/2)
for(s=0.12*j,r=0;r<a.length;r=q)for(q=r+1,p=q;p<a.length;++p){o=a[r]
n=a[p]
if(i.$1(o)>i.$1(n)){m=n
n=o
o=m}if(i.$1(n)-i.$1(o)<s)continue
if(Math.abs(o.a*n.a+o.b*n.b)<0.82)continue
k.push(new A.X(o,n))}return k},
$S:26}
A.dP.prototype={
$1(a){var s=this.b,r=a.c,q=a.a,p=a.b
return this.a?(r-q*s)/p:(r-p*s)/q},
$S:27}
A.dM.prototype={
$1(a){var s=this,r=a.a,q=!0
if(!(r<s.a))if(!(r>s.b)){r=a.b
r=r<s.c||r>s.d}else r=q
else r=q
return r},
$S:28}
A.dN.prototype={
$2(a,b){return B.a.D(b.a,a.a)},
$S:29}
A.cY.prototype={
U(a){var s=this.b,r=t.n,q=this.a
return s==null?A.c([q[a]],r):A.c([q[a],s[a],this.c[a]],r)}}
A.cZ.prototype={
$0(){var s,r,q,p,o=A.c([],t.n)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.n)(s),++p)o.push(J.cq(s[p],q))
B.c.K(o)
return o[o.length/2|0]},
$S:30}
A.dF.prototype={
$2(a,b){var s,r=this.a,q=r[0],p=q.a,o=r[1]
p+=(o.a-p)*a
q=q.b
q+=(o.b-q)*a
o=r[3]
s=o.a
r=r[2]
o=o.b
return new A.f(p+(s+(r.a-s)*a-p)*b,q+(o+(r.b-o)*a-q)*b,t.X)},
$S:31}
A.dG.prototype={
$2(a,b){return B.a.D(J.cq(a,0),J.cq(b,0))},
$S:32}
A.dI.prototype={
$2(a,b){var s,r,q=A.c([],t.n)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q.push(A.ay(a[r],b))
B.c.K(q)
s=q.length
return s===0?0:q[s/2|0]},
$S:50}
A.dH.prototype={
$2(a,b){return a+b},
$S:13}
A.dU.prototype={
$1(a){return a==null},
$S:35}
A.dJ.prototype={
$1(a){return a},
$S:10}
A.ds.prototype={
$2(a,b){var s=b.a,r=a.a
return B.b.D((s[1]-s[3])*(s[2]-s[4]),(r[1]-r[3])*(r[2]-r[4]))},
$S:36}
A.du.prototype={
$2(a,b){var s=a.a,r=b.a
return s!==r?B.a.D(s,r):B.a.D(a.b,b.b)},
$S:7}
A.dv.prototype={
$3(a,b,c){var s=a.a,r=a.b
return(b.a-s)*(c.b-r)-(b.b-r)*(c.a-s)},
$S:37}
A.en.prototype={
$1(a){var s,r,q,p,o,n,m=A.c([],t.O)
for(s=a.gJ(),r=this.a,q=this.b,p=t.X,o=0;o<4;++o){n=s[o]
m.push(new A.f(n.a*r,n.b*q,p))}return m},
$S:38}
A.em.prototype={
$1(a){var s,r,q=this
if(q.c[a]>0.5&&q.d[a]===0){s=q.d
r=q.a.a
s.$flags&2&&A.v(s)
s[a]=r
r=q.e
s=q.b.a++
r.$flags&2&&A.v(r)
r[s]=a}},
$S:39}
A.ek.prototype={
$2(a,b){var s=!1
if(a>=0)if(b>=0){s=this.b
s=a<s&&b<s&&this.c[b*s+a]===this.a.b}return s},
$S:3}
A.el.prototype={
$2(a,b){var s=this.a
return s.$2(a,b)||s.$2(a-1,b)||s.$2(a+1,b)||s.$2(a,b-1)||s.$2(a,b+1)},
$S:3}
A.ej.prototype={
$1(a){return!isFinite(a)},
$S:41}
A.c1.prototype={}
A.e3.prototype={
$1(a){var s=this.a,r=2*a
return A.c([s[r]-this.b,s[r+1]-this.c,1],t.n)},
$S:42}
A.cm.prototype={}
A.cf.prototype={}
A.b6.prototype={}
A.c4.prototype={
aa(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=a1.length,a=c*c,a0=a*3
if(b!==a0)throw A.e(A.a9("Erwartet "+a0+" Bytes, bekommen "+b,null))
s=A.bn(3,c,c)
for(b=s.d,a0=b.$flags|0,r=2*a,q=0;q<a;++q){p=q*3
o=a1[p]
a0&2&&A.v(b)
b[q]=o/255-0.5
b[a+q]=a1[p+1]/255-0.5
b[r+q]=a1[p+2]/255-0.5}b=d.c
a=b.h(0,"stem")
a.toString
n=d.R("s1.0",A.iF(a,s))
m=d.a5("s2",2,n)
l=d.a5("s3",2,m)
k=d.a5("s4",3,l)
j=d.aT(d.a5("s5",3,k))
a=b.h(0,"l5")
a.toString
a=A.e4(A.ah(a,j))
a0=b.h(0,"l4")
a0.toString
a0=A.e4(d.R("d4",A.dp(a,A.ah(a0,k))))
a=b.h(0,"l3")
a.toString
a=A.e4(d.R("d3",A.dp(a0,A.ah(a,l))))
a0=b.h(0,"l2")
a0.toString
a0=A.e4(d.R("d2",A.dp(a,A.ah(a0,m))))
a=b.h(0,"l1")
a.toString
i=d.R("d1",A.dp(a0,A.ah(a,n)))
b=b.h(0,"head")
b.toString
h=A.ah(b,i)
b=h.c
g=h.b*b
f=new Float32Array(g)
e=new Float32Array(g)
for(a=h.d,q=0;q<g;++q){f[q]=1/(1+Math.exp(-a[q]))
e[q]=1/(1+Math.exp(-a[g+q]))}return new A.b6(b,f,e)},
a5(a,b,c){var s,r
for(s=a+".",r=0;r<b;++r)c=this.R(s+r,c)
return c},
R(a,b){var s,r,q,p,o,n,m=this.c,l=m.h(0,a+".pw")
l.toString
m=m.h(0,a+".dw")
m.toString
s=A.ah(l,A.iM(m,b))
if(!l.w)return s
r=s.d
q=b.d
for(m=r.length,l=r.$flags|0,p=0;p<m;++p){o=r[p]+q[p]
n=o>0?o:0
l&2&&A.v(r)
r[p]=n}return s},
aT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.c.h(0,"ctx")
d.toString
s=a.b
r=a.c
q=s*r
p=a.a
o=new Float32Array(p)
for(n=a.d,m=0;m<p;++m){for(l=m*q,k=0,j=0;j<q;++j)k+=n[l+j]
o[m]=k/q}i=A.ah(d,new A.cm(p,1,1,o))
h=A.bn(p,s,r)
for(d=h.d,s=i.d,m=0;m<p;++m){g=s[m]
for(r=m*q,j=0;j<q;++j){l=r+j
f=n[l]+g
e=f>0?f:0
d.$flags&2&&A.v(d)
d[l]=e}}return h}}
A.cM.prototype={
$1(a){var s,r,q,p=new Float32Array(a)
for(s=this.b,r=this.a,q=0;q<a;++q){p[q]=s.getFloat32(r.a,!0)
r.a+=4}return p},
$S:43}
A.cL.prototype={
$2(a,b){return a*b},
$S:12}
A.c3.prototype={
j(a){var s=this
return"SheetGuess(fit "+B.a.Z(s.b,3)+", innen "+B.a.Z(s.c,3)+", au\xdfen "+B.a.Z(s.d,3)+", "+s.a.j(0)+")"}}
A.dQ.prototype={
$3(a,b,c){var s,r=this.a,q=r[a],p=r[(a+1)%4],o=q.v(p)
if(o===0)return 0
r=q.a
s=q.b
return((p.a-r)*(c-s)-(p.b-s)*(b-r))/o},
$S:44}
A.dY.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o-1,m=B.a.C(b-0.5,0,n),l=B.a.C(c-0.5,0,n),k=B.a.O(m),j=B.a.O(l),i=k+1
i=i<o?i:k
s=j+1
s=s<o?s:j
r=m-k
q=l-j
n=j*o
p=1-r
o=s*o
return(a[n+k]*p+a[n+i]*r)*(1-q)+(a[o+k]*p+a[o+i]*r)*q},
$S:45}
A.dZ.prototype={
$2(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b,d=f.a,c=d.a,b=e.a+a1*c,a=d.b,a0=e.b+a1*a
e=f.c
c=e.a+a2*c-b
a=e.b+a2*a-a0
s=Math.sqrt(c*c+a*a)
if(s<1)return-1/0
r=-a/s
q=c/s
if(r*d.a+q*d.b<0){r=-r
q=-q}for(e=f.d,d=e-1,p=f.e,o=f.f,n=o.c,o=o.b,m=1.5*r,l=1.5*q,k=0,j=0;j<e;++j){i=0.1+0.8*j/d
h=b+c*i
g=a0+a*i
k+=p.$3(n,h,g)+p.$3(o,h-m,g-l)-p.$3(o,h+m,g+l)}return k/e-(Math.abs(a1)+Math.abs(a2))/f.r},
$S:13}
A.df.prototype={}
A.ef.prototype={
$1(a){var s=this.a,r=a*4,q=s[r+2]-s[r]+1,p=s[r+3]-s[r+1]+1,o=Math.min(q,p)
if(o>=this.b||Math.max(q,p)<4*o)return!1
s=this.c
s.$flags&2&&A.v(s)
s[a+1]=0
return!0},
$S:46}
A.db.prototype={
aN(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.length,r=this.c,q=this.a,p=this.b,o=t.t,n=0;n<b.length;b.length===s||(0,A.n)(b),++n){m=b[n]
l=m*4
k=B.a.t((q[l]+q[l+2])/2,p)
k=B.a.t((q[l+1]+q[l+3])/2,p)*1e5+k
l=r.h(0,k)
if(l==null){l=A.c([],o)
r.F(0,k,l)}l.push(m)}},
bc(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this.a,a2=this.b,a3=B.a.t(A.iG(a1,a5),a2),a4=B.a.t(A.iH(a1,a5),a2)
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
A.ed.prototype={
$1(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=A.fC(a4.data),a3=new A.cO()
$.eV()
g=$.ex.$0()
a3.a=g
a3.b=null
s=a3
if(J.aN(a2.kind,"up")){A.jo(a2,s)
return}r=J.aN(a2.kind,"zoom")
try{q=A.fb(a2.pixels,0,null)
if(r){g=$.h2
if(g==null)g=$.eG
f=A.kl(g,q,a2.width,a2.height)}else{g=a2.width
e=a2.height
d=$.fV
c=$.eG
f=A.jR(q,g,e,a2.aspect,c,d)}p=f
g=v.G.self
e=r?"zoom":"result"
d=a2.id
if(p==null)o=null
else{o=A.c([],t.n)
for(c=A.he(p),b=c.length,a=0;a<c.length;c.length===b||(0,A.n)(c),++a){n=c[a]
J.f_(o,n)}o=t.c.a(o)}m=null
if(p==null)a0=null
else{c=$.eZ()
a0=c.a.get(p)}l=a0
A:{k=null
if(l!=null){k=l
j=A.c([],t.n)
for(c=A.he(k),b=c.length,a=0;a<c.length;c.length===b||(0,A.n)(c),++a){i=c[a]
J.f_(j,i)}m=t.c.a(j)
break A}if(l==null){m=null
break A}}g.postMessage({type:e,id:d,quad:o,alternative:m,ms:s.gaE()})}catch(a1){h=A.an(a1)
o=v.G.self
o.postMessage({type:"error",id:a2.id,error:A.m(h)})}},
$S:47}
A.dT.prototype={
$1(a){return a},
$S:48};(function aliases(){var s=J.a1.prototype
s.aL=s.j})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1
s(J,"j1","hP",49)
r(A,"jf","hS",8)
q(A,"jJ","i2",2)
q(A,"jK","i3",2)
q(A,"jL","i4",2)
r(A,"h4","jA",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.l,null)
q(A.l,[A.eu,J.bI,A.b5,J.ap,A.p,A.bC,A.q,A.cK,A.H,A.bb,A.aR,A.bj,A.ab,A.cS,A.cG,A.aQ,A.bm,A.R,A.cC,A.bO,A.N,A.cc,A.dk,A.di,A.c8,A.K,A.ca,A.az,A.z,A.c9,A.ck,A.dn,A.j,A.bD,A.bF,A.b7,A.d_,A.cy,A.B,A.cl,A.cO,A.c5,A.bG,A.cF,A.f,A.a_,A.dd,A.o,A.cg,A.af,A.da,A.cY,A.c1,A.cm,A.cf,A.b6,A.c4,A.c3,A.df,A.db])
q(J.bI,[J.bL,J.aS,J.aV,J.aU,J.aW,J.at,J.au])
q(J.aV,[J.a1,J.i,A.aw,A.b0])
q(J.a1,[J.bY,J.ae,J.a0])
r(J.bK,A.b5)
r(J.cz,J.i)
q(J.at,[J.as,J.aT])
q(A.p,[A.a3,A.h,A.W])
q(A.a3,[A.aa,A.bt])
r(A.be,A.aa)
r(A.bd,A.bt)
r(A.L,A.bd)
q(A.q,[A.bN,A.U,A.bM,A.c7,A.c2,A.cb,A.bA,A.J,A.b9,A.c6,A.b8,A.bE])
q(A.h,[A.w,A.ac])
q(A.w,[A.ad,A.S,A.b4,A.ce])
q(A.bj,[A.ch,A.ci])
q(A.ch,[A.X,A.bk])
q(A.ci,[A.bl,A.cj])
q(A.ab,[A.cr,A.cs,A.cR,A.e9,A.eb,A.cV,A.cU,A.dq,A.d8,A.eh,A.ei,A.cw,A.e2,A.e1,A.dA,A.dB,A.dW,A.dx,A.dz,A.dy,A.dP,A.dM,A.dU,A.dJ,A.dv,A.en,A.em,A.ej,A.e3,A.cM,A.dQ,A.dY,A.ef,A.ed,A.dT])
q(A.cr,[A.cH,A.cW,A.cX,A.dj,A.d0,A.d4,A.d3,A.d2,A.d1,A.d7,A.d6,A.d5,A.dh,A.dV,A.cZ])
r(A.b2,A.U)
q(A.cR,[A.cN,A.aP])
q(A.R,[A.aX,A.cd])
q(A.cs,[A.ea,A.dr,A.e5,A.d9,A.cE,A.ct,A.cu,A.cv,A.e_,A.e0,A.dL,A.dK,A.dO,A.dN,A.dF,A.dG,A.dI,A.dH,A.ds,A.du,A.ek,A.el,A.cL,A.dZ])
r(A.av,A.aw)
q(A.b0,[A.bQ,A.ax])
q(A.ax,[A.bf,A.bh])
r(A.bg,A.bf)
r(A.aZ,A.bg)
r(A.bi,A.bh)
r(A.b_,A.bi)
q(A.aZ,[A.bR,A.bS])
q(A.b_,[A.bT,A.aY,A.bU,A.bV,A.bW,A.b1,A.bX])
r(A.bo,A.cb)
r(A.bc,A.ca)
r(A.dg,A.dn)
r(A.cA,A.bD)
r(A.cB,A.bF)
q(A.J,[A.b3,A.bH])
s(A.bt,A.j)
s(A.bf,A.j)
s(A.bg,A.aR)
s(A.bh,A.j)
s(A.bi,A.aR)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",a:"double",h8:"num",y:"String",u:"bool",B:"Null",d:"List",l:"Object",bP:"Map",r:"JSObject"},mangledNames:{},types:["~()","~(@)","~(~())","u(b,b)","B(@)","B()","a(a,f<a>)","b(f<a>,f<a>)","b()","u(o)","u(u)","b(a)","b(b,b)","a(a,a)","d<a>(d<a>,d<a>)","y(f<a>)","d<a>(f<a>)","@(y)","a(d<a>,d<a>)","a(d<a>)","@(@)","B(@,a2)","b?(f<a>)","~(b,@)","B(l,a2)","b(o,o)","d<+(o,o)>(d<o>,u)","a(o)","u(f<a>)","b(+(a,d<f<a>>),+(a,d<f<a>>))","a()","f<a>(a,a)","b(d<a>,d<a>)","~(l?,l?)","B(~())","u(o?)","b(+label,maxX,maxY,minX,minY(b,b,b,b,b),+label,maxX,maxY,minX,minY(b,b,b,b,b))","a(f<a>,f<a>,f<a>)","d<f<a>>(a_)","~(b)","@(@,y)","u(a)","d<a>(b)","aq(b)","a(b,a,a)","a(aq,a,a)","u(b)","B(r)","a(a)","b(@,@)","a(d<d<a>>,d<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.X&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.bk&&a.b(c.a)&&b.b(c.b),"4;across,down,low,up":a=>b=>b instanceof A.bl&&A.ha(a,b.a),"5;label,maxX,maxY,minX,minY":a=>b=>b instanceof A.cj&&A.ha(a,b.a)}}
A.io(v.typeUniverse,JSON.parse('{"bY":"a1","ae":"a1","a0":"a1","kr":"aw","bL":{"u":[],"k":[]},"aS":{"k":[]},"aV":{"r":[]},"a1":{"r":[]},"i":{"d":["1"],"h":["1"],"r":[]},"bK":{"b5":[]},"cz":{"i":["1"],"d":["1"],"h":["1"],"r":[]},"at":{"a":[]},"as":{"a":[],"b":[],"k":[]},"aT":{"a":[],"k":[]},"au":{"y":[],"k":[]},"a3":{"p":["2"]},"aa":{"a3":["1","2"],"p":["2"],"p.E":"2"},"be":{"aa":["1","2"],"a3":["1","2"],"h":["2"],"p":["2"],"p.E":"2"},"bd":{"j":["2"],"d":["2"],"a3":["1","2"],"h":["2"],"p":["2"]},"L":{"bd":["1","2"],"j":["2"],"d":["2"],"a3":["1","2"],"h":["2"],"p":["2"],"j.E":"2","p.E":"2"},"bN":{"q":[]},"h":{"p":["1"]},"w":{"h":["1"],"p":["1"]},"ad":{"w":["1"],"h":["1"],"p":["1"],"w.E":"1","p.E":"1"},"S":{"w":["2"],"h":["2"],"p":["2"],"w.E":"2","p.E":"2"},"W":{"p":["1"],"p.E":"1"},"b4":{"w":["1"],"h":["1"],"p":["1"],"w.E":"1","p.E":"1"},"b2":{"U":[],"q":[]},"bM":{"q":[]},"c7":{"q":[]},"bm":{"a2":[]},"c2":{"q":[]},"aX":{"R":["1","2"],"bP":["1","2"],"R.V":"2"},"ac":{"h":["1"],"p":["1"],"p.E":"1"},"av":{"r":[],"k":[]},"aw":{"r":[],"k":[]},"b0":{"r":[]},"bQ":{"r":[],"k":[]},"ax":{"F":["1"],"r":[]},"aZ":{"j":["a"],"d":["a"],"F":["a"],"h":["a"],"r":[]},"b_":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[]},"bR":{"aq":[],"j":["a"],"d":["a"],"F":["a"],"h":["a"],"r":[],"k":[],"j.E":"a"},"bS":{"j":["a"],"d":["a"],"F":["a"],"h":["a"],"r":[],"k":[],"j.E":"a"},"bT":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"aY":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"bU":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"bV":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"bW":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"b1":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"bX":{"j":["b"],"d":["b"],"F":["b"],"h":["b"],"r":[],"k":[],"j.E":"b"},"cb":{"q":[]},"bo":{"U":[],"q":[]},"K":{"q":[]},"bc":{"ca":["1"]},"z":{"ar":["1"]},"R":{"bP":["1","2"]},"cd":{"R":["y","@"],"bP":["y","@"],"R.V":"@"},"ce":{"w":["y"],"h":["y"],"p":["y"],"w.E":"y","p.E":"y"},"d":{"h":["1"]},"bA":{"q":[]},"U":{"q":[]},"J":{"q":[]},"b3":{"q":[]},"bH":{"q":[]},"b9":{"q":[]},"c6":{"q":[]},"b8":{"q":[]},"bE":{"q":[]},"b7":{"q":[]},"cl":{"a2":[]},"hL":{"d":["b"],"h":["b"]},"i0":{"d":["b"],"h":["b"]},"i_":{"d":["b"],"h":["b"]},"hJ":{"d":["b"],"h":["b"]},"hY":{"d":["b"],"h":["b"]},"hK":{"d":["b"],"h":["b"]},"hZ":{"d":["b"],"h":["b"]},"aq":{"d":["a"],"h":["a"]},"hI":{"d":["a"],"h":["a"]}}'))
A.im(v.typeUniverse,JSON.parse('{"bb":1,"aR":1,"bt":2,"bO":1,"ax":1,"ck":1,"bD":2,"bF":2,"bG":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.eO
return{U:s("h<@>"),C:s("q"),Z:s("kq"),G:s("i<d<d<a>>>"),E:s("i<d<f<a>>>"),W:s("i<d<o>>"),q:s("i<d<a>>"),f:s("i<l>"),O:s("i<f<a>>"),h:s("i<+(f<a>,f<a>)>"),k:s("i<+(o,o)>"),V:s("i<+(a,d<f<a>>)>"),r:s("i<+label,maxX,maxY,minX,minY(b,b,b,b,b)>"),s:s("i<y>"),x:s("i<af>"),w:s("i<o>"),u:s("i<u>"),n:s("i<a>"),D:s("i<@>"),t:s("i<b>"),c:s("i<l?>"),b:s("i<o?>"),T:s("aS"),m:s("r"),g:s("a0"),p:s("F<@>"),J:s("d<a>"),j:s("d<@>"),L:s("d<b>"),d:s("bP<y,@>"),M:s("av"),P:s("B"),K:s("l"),X:s("f<a>"),Y:s("ks"),F:s("+()"),B:s("+(a,d<f<a>>)"),e:s("+label,maxX,maxY,minX,minY(b,b,b,b,b)"),l:s("a2"),N:s("y"),d0:s("ad<o>"),bW:s("k"),_:s("U"),cr:s("ae"),a:s("W<u>"),aY:s("z<@>"),bV:s("cf"),A:s("o"),I:s("cg"),y:s("u"),i:s("a"),z:s("@"),v:s("@(l)"),Q:s("@(l,a2)"),S:s("b"),bc:s("ar<B>?"),aQ:s("r?"),R:s("l?"),as:s("c4?"),aD:s("y?"),cG:s("u?"),dd:s("a?"),a3:s("b?"),ae:s("h8?"),H:s("h8"),o:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.w=J.bI.prototype
B.c=J.i.prototype
B.b=J.as.prototype
B.a=J.at.prototype
B.x=J.a0.prototype
B.y=J.aV.prototype
B.C=A.aY.prototype
B.m=J.bY.prototype
B.h=J.ae.prototype
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.o=function() {
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
B.u=function(getTagFallback) {
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
B.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.t=function(hooks) {
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
B.r=function(hooks) {
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
B.q=function(hooks) {
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

B.v=new A.cA()
B.e=new A.cK()
B.d=new A.dg()
B.f=new A.cl()
B.z=new A.cB(null)
B.k=s([1,4,6,4,1],t.t)
B.l=s([],t.E)
B.A=s([],t.t)
B.B=s([1.41421356,1.2941176470588236],t.n)
B.n=new A.X(0,0)
B.D=A.O("km")
B.E=A.O("kn")
B.F=A.O("aq")
B.G=A.O("hI")
B.H=A.O("hJ")
B.I=A.O("hK")
B.J=A.O("hL")
B.K=A.O("l")
B.L=A.O("hY")
B.M=A.O("hZ")
B.N=A.O("i_")
B.O=A.O("i0")})();(function staticFields(){$.dc=null
$.aj=A.c([],t.f)
$.fd=null
$.cI=0
$.ex=A.jf()
$.f3=null
$.f2=null
$.h6=null
$.h3=null
$.hc=null
$.e7=null
$.ec=null
$.eR=null
$.de=A.c([],A.eO("i<d<l>?>"))
$.aF=null
$.bw=null
$.bx=null
$.eF=!1
$.t=B.d
$.fV=null
$.eG=null
$.h2=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"kp","hh",()=>A.e8("_$dart_dartClosure"))
s($,"ko","eU",()=>A.e8("_$dart_dartClosure_dartJSInterop"))
s($,"kI","hs",()=>A.c([new J.bK()],A.eO("i<b5>")))
s($,"kv","hi",()=>A.V(A.cT({
toString:function(){return"$receiver$"}})))
s($,"kw","hj",()=>A.V(A.cT({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kx","hk",()=>A.V(A.cT(null)))
s($,"ky","hl",()=>A.V(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kB","ho",()=>A.V(A.cT(void 0)))
s($,"kC","hp",()=>A.V(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kA","hn",()=>A.V(A.fk(null)))
s($,"kz","hm",()=>A.V(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kE","hr",()=>A.V(A.fk(void 0)))
s($,"kD","hq",()=>A.V(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kF","eW",()=>A.i1())
s($,"kH","cp",()=>A.h9(B.K))
s($,"kt","eV",()=>{A.hU()
return $.cI})
s($,"kG","eX",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.jO(r*3.141592653589793/180))
return A.fa(q)})
s($,"kJ","eY",()=>{var r,q=A.c([],t.n)
for(r=0;r<180;++r)q.push(A.kg(r*3.141592653589793/180))
return A.fa(q)})
s($,"kK","eZ",()=>new A.bG(new WeakMap(),"KI-Vorschlag"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.aw,ArrayBuffer:A.av,ArrayBufferView:A.b0,DataView:A.bQ,Float32Array:A.bR,Float64Array:A.bS,Int16Array:A.bT,Int32Array:A.aY,Int8Array:A.bU,Uint16Array:A.bV,Uint32Array:A.bW,Uint8ClampedArray:A.b1,CanvasPixelArray:A.b1,Uint8Array:A.bX})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ax.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.k3
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=scan_worker.js.map
