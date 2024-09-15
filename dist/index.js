"use strict";var x=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var s=x(function(J,B){
var D=require('@stdlib/array-base-assert-is-complex128array/dist'),F=require('@stdlib/array-base-assert-is-complex64array/dist'),j=require('@stdlib/array-base-assert-is-booleanarray/dist'),C=require('@stdlib/array-base-arraylike2object/dist'),P=require('@stdlib/strided-base-reinterpret-complex128/dist'),T=require('@stdlib/strided-base-reinterpret-complex64/dist'),k=require('@stdlib/strided-base-reinterpret-boolean/dist'),H=require('@stdlib/ndarray-base-bytes-per-element/dist'),m={float64:"getFloat64",float32:"getFloat32",float16:"getFloat16",int64:"getBigInt64",int32:"getInt32",int16:"getInt16",int8:"getInt8",uint64:"getBigUint64",uint32:"getUint32",uint16:"getUint16",uint8:"getUint8"};function d(e,n,t,i,r,v,c,o,a){var g,y,q,l,p;for(l=m[e],g=v.data,y=o,q=r,p=0;p<n;p++)g[y]=t[l](q,a),y+=c,q+=i}function f(e,n,t,i,r,v,c,o,a){var g,y,q,l,p,u;for(p=m[e],g=H(e),y=v.data,c*=2,o*=2,q=o,l=r,u=0;u<n;u++)y[q]=t[p](l,a),y[q+1]=t[p](l+g,a),q+=c,l+=i}function L(e,n,t,i,r,v,c,o,a){var g,y,q,l,p,u;for(p=m[e],g=v.data,y=v.accessors[1],q=o,l=r,u=0;u<n;u++)y(g,q,t[p](l,a)),q+=c,l+=i;return t}function M(e,n,t,i,r,v,c,o){var a,g;return e<=0?r:(a=C(r),a.accessorProtocol?D(r)?(a.data=P(r,0),f("float64",e,n,t,i,a,v,c,o),r):F(r)?(a.data=T(r,0),f("float32",e,n,t,i,a,v,c,o),r):j(r)?(a.data=k(r,0),d("uint8",e,n,t,i,a,v,c,o),r):(L("float64",e,n,t,i,a,v,c,o),r):(a.dtype===null||a.dtype==="generic"?g="float64":g=a.dtype,d(g,e,n,t,i,a,v,c,o),r))}B.exports=M
});var I=x(function(K,A){
var b=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(e,n,t,i,r,v){return R(e,n,t,b(e,t),i,r,b(e,r),v)}A.exports=_
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),U=I(),z=s();h(U,"ndarray",z);module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map