// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";function s(s,t){var o,i,n,p,a,d,f,h,m,l;if((d=s.length)<=0||t<=0)return[];for(o=e(s),a=r(d,t),p=[],h=0;h<t;h++)p.push(0);for(i=[],h=0;h<a;h++){for(l=h,m=t-1;m>=0;m--)l-=f=l%d,l/=d,p[m]=f;for(n=[],m=0;m<t;m++)n.push(o(s,p[m]));i.push(n)}return i}export{s as default};
//# sourceMappingURL=index.mjs.map
