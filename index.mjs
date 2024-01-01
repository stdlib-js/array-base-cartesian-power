// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";function s(s,t){var e,o,f,n,p,h,i,u,a;if((p=s.length)<=0||t<=0)return[];for(n=r(p,t),f=[],i=0;i<t;i++)f.push(0);for(e=[],i=0;i<n;i++){for(a=i,u=t-1;u>=0;u--)a-=h=a%p,a/=p,f[u]=h;for(o=[],u=0;u<t;u++)o.push(s[f[u]]);e.push(o)}return e}export{s as default};
//# sourceMappingURL=index.mjs.map
