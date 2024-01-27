"use strict";var l=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var n=l(function(j,h){
var q=require('@stdlib/array-base-resolve-getter/dist'),g=require('@stdlib/math-base-special-pow/dist');function m(t,r){var f,i,o,s,c,v,p,a,e,u;if(v=t.length,v<=0||r<=0)return[];for(f=q(t),c=g(v,r),s=[],a=0;a<r;a++)s.push(0);for(i=[],a=0;a<c;a++){for(u=a,e=r-1;e>=0;e--)p=u%v,u-=p,u/=v,s[e]=p;for(o=[],e=0;e<r;e++)o.push(f(t,s[e]));i.push(o)}return i}h.exports=m
});var w=n();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
