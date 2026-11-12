"use strict";var l=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=l(function(j,h){
var q=require('@stdlib/array-base-resolve-getter/dist'),g=require('@stdlib/math-base-special-pow/dist');function m(t,r){var s,o,p,u,c,v,f,a,e,i;if(v=t.length,v<=0||r<=0)return[];for(s=q(t),c=g(v,r),u=[],a=0;a<r;a++)u.push(0);for(o=[],a=0;a<c;a++){for(i=a,e=r-1;e>=0;e--)f=i%v,i-=f,i/=v,u[e]=f;for(p=[],e=0;e<r;e++)p.push(s(t,u[e]));o.push(p)}return o}h.exports=m
});var w=n();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
