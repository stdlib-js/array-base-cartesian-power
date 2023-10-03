"use strict";var n=function(s,r){return function(){return r||s((r={exports:{}}).exports,r),r.exports}};var h=n(function(x,c){
var l=require('@stdlib/math-base-special-pow/dist');function m(s,r){var i,o,u,f,t,p,e,a,v;if(t=s.length,t<=0||r<=0)return[];for(f=l(t,r),u=[],e=0;e<r;e++)u.push(0);for(i=[],e=0;e<f;e++){for(v=e,a=r-1;a>=0;a--)p=v%t,v-=p,v/=t,u[a]=p;for(o=[],a=0;a<r;a++)o.push(s[u[a]]);i.push(o)}return i}c.exports=m
});var q=h();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
