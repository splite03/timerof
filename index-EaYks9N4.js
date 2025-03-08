(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ea(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const It={},Gn=[],Pe=()=>{},Id=()=>!1,yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),na=e=>e.startsWith("onUpdate:"),ie=Object.assign,ra=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wd=Object.prototype.hasOwnProperty,gt=(e,t)=>wd.call(e,t),it=Array.isArray,Qn=e=>vi(e)==="[object Map]",lc=e=>vi(e)==="[object Set]",ot=e=>typeof e=="function",Ot=e=>typeof e=="string",Ke=e=>typeof e=="symbol",St=e=>e!==null&&typeof e=="object",uc=e=>(St(e)||ot(e))&&ot(e.then)&&ot(e.catch),cc=Object.prototype.toString,vi=e=>cc.call(e),Ad=e=>vi(e).slice(8,-1),hc=e=>vi(e)==="[object Object]",sa=e=>Ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jr=ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rd=/-(\w)/g,un=Ei(e=>e.replace(Rd,(t,n)=>n?n.toUpperCase():"")),bd=/\B([A-Z])/g,Mn=Ei(e=>e.replace(bd,"-$1").toLowerCase()),fc=Ei(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ks=Ei(e=>e?`on${fc(e)}`:""),rn=(e,t)=>!Object.is(e,t),so=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},dc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Sd=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let jl;const Ti=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ii(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ot(r)?Dd(r):Ii(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ot(e)||St(e))return e}const Pd=/;(?![^(]*\))/g,Cd=/:([^]+)/,Vd=/\/\*[^]*?\*\//g;function Dd(e){const t={};return e.replace(Vd,"").split(Pd).forEach(n=>{if(n){const r=n.split(Cd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ia(e){let t="";if(Ot(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=ia(e[n]);r&&(t+=r+" ")}else if(St(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nd=ea(xd);function pc(e){return!!e||e===""}const gc=e=>!!(e&&e.__v_isRef===!0),kr=e=>Ot(e)?e:e==null?"":it(e)||St(e)&&(e.toString===cc||!ot(e.toString))?gc(e)?kr(e.value):JSON.stringify(e,mc,2):String(e),mc=(e,t)=>gc(t)?mc(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[io(r,i)+" =>"]=s,n),{})}:lc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>io(n))}:Ke(t)?io(t):St(t)&&!it(t)&&!hc(t)?String(t):t,io=(e,t="")=>{var n;return Ke(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ce;class Od{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ce,!t&&ce&&(this.index=(ce.scopes||(ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ce;try{return ce=this,t()}finally{ce=n}}}on(){ce=this}off(){ce=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Md(){return ce}let Tt;const oo=new WeakSet;class _c{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ce&&ce.active&&ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oo.has(this)&&(oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$l(this),Ec(this);const t=Tt,n=Te;Tt=this,Te=!0;try{return this.fn()}finally{Tc(this),Tt=t,Te=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)la(t);this.deps=this.depsTail=void 0,$l(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wo(this)&&this.run()}get dirty(){return wo(this)}}let yc=0,$r,qr;function vc(e,t=!1){if(e.flags|=8,t){e.next=qr,qr=e;return}e.next=$r,$r=e}function oa(){yc++}function aa(){if(--yc>0)return;if(qr){let t=qr;for(qr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;$r;){let t=$r;for($r=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ec(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Tc(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),la(r),kd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function wo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ic(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ic(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xr))return;e.globalVersion=Xr;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!wo(e)){e.flags&=-3;return}const n=Tt,r=Te;Tt=e,Te=!0;try{Ec(e);const s=e.fn(e._value);(t.version===0||rn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Tt=n,Te=r,Tc(e),e.flags&=-3}}function la(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)la(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function kd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Te=!0;const wc=[];function dn(){wc.push(Te),Te=!1}function pn(){const e=wc.pop();Te=e===void 0?!0:e}function $l(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Tt;Tt=void 0;try{t()}finally{Tt=n}}}let Xr=0;class Ld{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ua{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Tt||!Te||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new Ld(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,Ac(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=r)}return n}trigger(t){this.version++,Xr++,this.notify(t)}notify(t){oa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{aa()}}}function Ac(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ac(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ao=new WeakMap,Sn=Symbol(""),Ro=Symbol(""),Jr=Symbol("");function Xt(e,t,n){if(Te&&Tt){let r=Ao.get(e);r||Ao.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ua),s.map=r,s.key=n),s.track()}}function je(e,t,n,r,s,i){const a=Ao.get(e);if(!a){Xr++;return}const l=c=>{c&&c.trigger()};if(oa(),t==="clear")a.forEach(l);else{const c=it(e),f=c&&sa(n);if(c&&n==="length"){const d=Number(r);a.forEach((g,A)=>{(A==="length"||A===Jr||!Ke(A)&&A>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(Jr)),t){case"add":c?f&&l(a.get("length")):(l(a.get(Sn)),Qn(e)&&l(a.get(Ro)));break;case"delete":c||(l(a.get(Sn)),Qn(e)&&l(a.get(Ro)));break;case"set":Qn(e)&&l(a.get(Sn));break}}aa()}function $n(e){const t=pt(e);return t===e?t:(Xt(t,"iterate",Jr),Ie(e)?t:t.map(ne))}function ca(e){return Xt(e=pt(e),"iterate",Jr),e}const Fd={__proto__:null,[Symbol.iterator](){return ao(this,Symbol.iterator,ne)},concat(...e){return $n(this).concat(...e.map(t=>it(t)?$n(t):t))},entries(){return ao(this,"entries",e=>(e[1]=ne(e[1]),e))},every(e,t){return Ue(this,"every",e,t,void 0,arguments)},filter(e,t){return Ue(this,"filter",e,t,n=>n.map(ne),arguments)},find(e,t){return Ue(this,"find",e,t,ne,arguments)},findIndex(e,t){return Ue(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ue(this,"findLast",e,t,ne,arguments)},findLastIndex(e,t){return Ue(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ue(this,"forEach",e,t,void 0,arguments)},includes(...e){return lo(this,"includes",e)},indexOf(...e){return lo(this,"indexOf",e)},join(e){return $n(this).join(e)},lastIndexOf(...e){return lo(this,"lastIndexOf",e)},map(e,t){return Ue(this,"map",e,t,void 0,arguments)},pop(){return Nr(this,"pop")},push(...e){return Nr(this,"push",e)},reduce(e,...t){return ql(this,"reduce",e,t)},reduceRight(e,...t){return ql(this,"reduceRight",e,t)},shift(){return Nr(this,"shift")},some(e,t){return Ue(this,"some",e,t,void 0,arguments)},splice(...e){return Nr(this,"splice",e)},toReversed(){return $n(this).toReversed()},toSorted(e){return $n(this).toSorted(e)},toSpliced(...e){return $n(this).toSpliced(...e)},unshift(...e){return Nr(this,"unshift",e)},values(){return ao(this,"values",ne)}};function ao(e,t,n){const r=ca(e),s=r[t]();return r!==e&&!Ie(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ud=Array.prototype;function Ue(e,t,n,r,s,i){const a=ca(e),l=a!==e&&!Ie(e),c=a[t];if(c!==Ud[t]){const g=c.apply(e,i);return l?ne(g):g}let f=n;a!==e&&(l?f=function(g,A){return n.call(this,ne(g),A,e)}:n.length>2&&(f=function(g,A){return n.call(this,g,A,e)}));const d=c.call(a,f,r);return l&&s?s(d):d}function ql(e,t,n,r){const s=ca(e);let i=n;return s!==e&&(Ie(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,ne(l),c,e)}),s[t](i,...r)}function lo(e,t,n){const r=pt(e);Xt(r,"iterate",Jr);const s=r[t](...n);return(s===-1||s===!1)&&da(n[0])?(n[0]=pt(n[0]),r[t](...n)):s}function Nr(e,t,n=[]){dn(),oa();const r=pt(e)[t].apply(e,n);return aa(),pn(),r}const Bd=ea("__proto__,__v_isRef,__isVue"),Rc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ke));function jd(e){Ke(e)||(e=String(e));const t=pt(this);return Xt(t,"has",e),t.hasOwnProperty(e)}class bc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xd:Vc:i?Cc:Pc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let c;if(a&&(c=Fd[n]))return c;if(n==="hasOwnProperty")return jd}const l=Reflect.get(t,n,Zt(t)?t:r);return(Ke(n)?Rc.has(n):Bd(n))||(s||Xt(t,"get",n),i)?l:Zt(l)?a&&sa(n)?l:l.value:St(l)?s?Dc(l):wi(l):l}}class Sc extends bc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Vn(i);if(!Ie(r)&&!Vn(r)&&(i=pt(i),r=pt(r)),!it(t)&&Zt(i)&&!Zt(r))return c?!1:(i.value=r,!0)}const a=it(t)&&sa(n)?Number(n)<t.length:gt(t,n),l=Reflect.set(t,n,r,Zt(t)?t:s);return t===pt(s)&&(a?rn(r,i)&&je(t,"set",n,r):je(t,"add",n,r)),l}deleteProperty(t,n){const r=gt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&je(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ke(n)||!Rc.has(n))&&Xt(t,"has",n),r}ownKeys(t){return Xt(t,"iterate",it(t)?"length":Sn),Reflect.ownKeys(t)}}class $d extends bc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const qd=new Sc,Hd=new $d,Kd=new Sc(!0);const bo=e=>e,Ls=e=>Reflect.getPrototypeOf(e);function zd(e,t,n){return function(...r){const s=this.__v_raw,i=pt(s),a=Qn(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,f=s[e](...r),d=n?bo:t?So:ne;return!t&&Xt(i,"iterate",c?Ro:Sn),{next(){const{value:g,done:A}=f.next();return A?{value:g,done:A}:{value:l?[d(g[0]),d(g[1])]:d(g),done:A}},[Symbol.iterator](){return this}}}}function Fs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wd(e,t){const n={get(s){const i=this.__v_raw,a=pt(i),l=pt(s);e||(rn(s,l)&&Xt(a,"get",s),Xt(a,"get",l));const{has:c}=Ls(a),f=t?bo:e?So:ne;if(c.call(a,s))return f(i.get(s));if(c.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Xt(pt(s),"iterate",Sn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=pt(i),l=pt(s);return e||(rn(s,l)&&Xt(a,"has",s),Xt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=pt(l),f=t?bo:e?So:ne;return!e&&Xt(c,"iterate",Sn),l.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return ie(n,e?{add:Fs("add"),set:Fs("set"),delete:Fs("delete"),clear:Fs("clear")}:{add(s){!t&&!Ie(s)&&!Vn(s)&&(s=pt(s));const i=pt(this);return Ls(i).has.call(i,s)||(i.add(s),je(i,"add",s,s)),this},set(s,i){!t&&!Ie(i)&&!Vn(i)&&(i=pt(i));const a=pt(this),{has:l,get:c}=Ls(a);let f=l.call(a,s);f||(s=pt(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,i),f?rn(i,d)&&je(a,"set",s,i):je(a,"add",s,i),this},delete(s){const i=pt(this),{has:a,get:l}=Ls(i);let c=a.call(i,s);c||(s=pt(s),c=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return c&&je(i,"delete",s,void 0),f},clear(){const s=pt(this),i=s.size!==0,a=s.clear();return i&&je(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zd(s,e,t)}),n}function ha(e,t){const n=Wd(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(gt(n,s)&&s in r?n:r,s,i)}const Gd={get:ha(!1,!1)},Qd={get:ha(!1,!0)},Yd={get:ha(!0,!1)};const Pc=new WeakMap,Cc=new WeakMap,Vc=new WeakMap,Xd=new WeakMap;function Jd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zd(e){return e.__v_skip||!Object.isExtensible(e)?0:Jd(Ad(e))}function wi(e){return Vn(e)?e:fa(e,!1,qd,Gd,Pc)}function tp(e){return fa(e,!1,Kd,Qd,Cc)}function Dc(e){return fa(e,!0,Hd,Yd,Vc)}function fa(e,t,n,r,s){if(!St(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Zd(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function Hr(e){return Vn(e)?Hr(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function da(e){return e?!!e.__v_raw:!1}function pt(e){const t=e&&e.__v_raw;return t?pt(t):e}function ep(e){return!gt(e,"__v_skip")&&Object.isExtensible(e)&&dc(e,"__v_skip",!0),e}const ne=e=>St(e)?wi(e):e,So=e=>St(e)?Dc(e):e;function Zt(e){return e?e.__v_isRef===!0:!1}function qn(e){return np(e,!1)}function np(e,t){return Zt(e)?e:new rp(e,t)}class rp{constructor(t,n){this.dep=new ua,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:pt(t),this._value=n?t:ne(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ie(t)||Vn(t);t=r?t:pt(t),rn(t,n)&&(this._rawValue=t,this._value=r?t:ne(t),this.dep.trigger())}}function Qt(e){return Zt(e)?e.value:e}const sp={get:(e,t,n)=>t==="__v_raw"?e:Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Zt(s)&&!Zt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function xc(e){return Hr(e)?e:new Proxy(e,sp)}class ip{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ua(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return vc(this,!0),!0}get value(){const t=this.dep.track();return Ic(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function op(e,t,n=!1){let r,s;return ot(e)?r=e:(r=e.get,s=e.set),new ip(r,s,n)}const Us={},ti=new WeakMap;let An;function ap(e,t=!1,n=An){if(n){let r=ti.get(n);r||ti.set(n,r=[]),r.push(e)}}function lp(e,t,n=It){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,f=H=>s?H:Ie(H)||s===!1||s===0?tn(H,1):tn(H);let d,g,A,S,x=!1,L=!1;if(Zt(e)?(g=()=>e.value,x=Ie(e)):Hr(e)?(g=()=>f(e),x=!0):it(e)?(L=!0,x=e.some(H=>Hr(H)||Ie(H)),g=()=>e.map(H=>{if(Zt(H))return H.value;if(Hr(H))return f(H);if(ot(H))return c?c(H,2):H()})):ot(e)?t?g=c?()=>c(e,2):e:g=()=>{if(A){dn();try{A()}finally{pn()}}const H=An;An=d;try{return c?c(e,3,[S]):e(S)}finally{An=H}}:g=Pe,t&&s){const H=g,mt=s===!0?1/0:s;g=()=>tn(H(),mt)}const U=Md(),z=()=>{d.stop(),U&&U.active&&ra(U.effects,d)};if(i&&t){const H=t;t=(...mt)=>{H(...mt),z()}}let Y=L?new Array(e.length).fill(Us):Us;const Z=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(t){const mt=d.run();if(s||x||(L?mt.some((Et,I)=>rn(Et,Y[I])):rn(mt,Y))){A&&A();const Et=An;An=d;try{const I=[mt,Y===Us?void 0:L&&Y[0]===Us?[]:Y,S];c?c(t,3,I):t(...I),Y=mt}finally{An=Et}}}else d.run()};return l&&l(Z),d=new _c(g),d.scheduler=a?()=>a(Z,!1):Z,S=H=>ap(H,!1,d),A=d.onStop=()=>{const H=ti.get(d);if(H){if(c)c(H,4);else for(const mt of H)mt();ti.delete(d)}},t?r?Z(!0):Y=d.run():a?a(Z.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function tn(e,t=1/0,n){if(t<=0||!St(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Zt(e))tn(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(lc(e)||Qn(e))e.forEach(r=>{tn(r,t,n)});else if(hc(e)){for(const r in e)tn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hs(e,t,n,r){try{return r?e(...r):e()}catch(s){Ai(s,t,n)}}function xe(e,t,n,r){if(ot(e)){const s=hs(e,t,n,r);return s&&uc(s)&&s.catch(i=>{Ai(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(xe(e[i],t,n,r));return s}}function Ai(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||It;if(t){let l=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,c,f)===!1)return}l=l.parent}if(i){dn(),hs(i,null,10,[e,c,f]),pn();return}}up(e,n,s,r,a)}function up(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const re=[];let Re=-1;const Yn=[];let Je=null,Hn=0;const Nc=Promise.resolve();let ei=null;function cp(e){const t=ei||Nc;return e?t.then(this?e.bind(this):e):t}function hp(e){let t=Re+1,n=re.length;for(;t<n;){const r=t+n>>>1,s=re[r],i=Zr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function pa(e){if(!(e.flags&1)){const t=Zr(e),n=re[re.length-1];!n||!(e.flags&2)&&t>=Zr(n)?re.push(e):re.splice(hp(t),0,e),e.flags|=1,Oc()}}function Oc(){ei||(ei=Nc.then(kc))}function fp(e){it(e)?Yn.push(...e):Je&&e.id===-1?Je.splice(Hn+1,0,e):e.flags&1||(Yn.push(e),e.flags|=1),Oc()}function Hl(e,t,n=Re+1){for(;n<re.length;n++){const r=re[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;re.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mc(e){if(Yn.length){const t=[...new Set(Yn)].sort((n,r)=>Zr(n)-Zr(r));if(Yn.length=0,Je){Je.push(...t);return}for(Je=t,Hn=0;Hn<Je.length;Hn++){const n=Je[Hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Je=null,Hn=0}}const Zr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kc(e){try{for(Re=0;Re<re.length;Re++){const t=re[Re];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),hs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Re<re.length;Re++){const t=re[Re];t&&(t.flags&=-2)}Re=-1,re.length=0,Mc(),ei=null,(re.length||Yn.length)&&kc()}}let oe=null,Lc=null;function ni(e){const t=oe;return oe=e,Lc=e&&e.type.__scopeId||null,t}function Fc(e,t=oe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Zl(-1);const i=ni(t);let a;try{a=e(...s)}finally{ni(i),r._d&&Zl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function In(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(dn(),xe(c,n,8,[e.el,l,e,t]),pn())}}const dp=Symbol("_vte"),pp=e=>e.__isTeleport;function ga(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ga(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Uc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ri(e,t,n,r,s=!1){if(it(e)){e.forEach((x,L)=>ri(x,t&&(it(t)?t[L]:t),n,r,s));return}if(Xn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ri(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?va(r.component):r.el,a=s?null:i,{i:l,r:c}=e,f=t&&t.r,d=l.refs===It?l.refs={}:l.refs,g=l.setupState,A=pt(g),S=g===It?()=>!1:x=>gt(A,x);if(f!=null&&f!==c&&(Ot(f)?(d[f]=null,S(f)&&(g[f]=null)):Zt(f)&&(f.value=null)),ot(c))hs(c,l,12,[a,d]);else{const x=Ot(c),L=Zt(c);if(x||L){const U=()=>{if(e.f){const z=x?S(c)?g[c]:d[c]:c.value;s?it(z)&&ra(z,i):it(z)?z.includes(i)||z.push(i):x?(d[c]=[i],S(c)&&(g[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else x?(d[c]=a,S(c)&&(g[c]=a)):L&&(c.value=a,e.k&&(d[e.k]=a))};a?(U.id=-1,ue(U,n)):U()}}}Ti().requestIdleCallback;Ti().cancelIdleCallback;const Xn=e=>!!e.type.__asyncLoader,Bc=e=>e.type.__isKeepAlive;function gp(e,t){jc(e,"a",t)}function mp(e,t){jc(e,"da",t)}function jc(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ri(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Bc(s.parent.vnode)&&_p(r,t,n,s),s=s.parent}}function _p(e,t,n,r){const s=Ri(t,e,r,!0);qc(()=>{ra(r[t],s)},n)}function Ri(e,t,n=se,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{dn();const l=ds(n),c=xe(t,n,e,a);return l(),pn(),c});return r?s.unshift(i):s.push(i),i}}const ze=e=>(t,n=se)=>{(!es||e==="sp")&&Ri(e,(...r)=>t(...r),n)},yp=ze("bm"),$c=ze("m"),vp=ze("bu"),Ep=ze("u"),Tp=ze("bum"),qc=ze("um"),Ip=ze("sp"),wp=ze("rtg"),Ap=ze("rtc");function Rp(e,t=se){Ri("ec",e,t)}const bp=Symbol.for("v-ndc");function Sp(e,t,n={},r,s){if(oe.ce||oe.parent&&Xn(oe.parent)&&oe.parent.ce)return Dn(),tu(he,null,[de("slot",n,r)],64);let i=e[t];i&&i._c&&(i._d=!1),Dn();const a=i&&Hc(i(n)),l=n.key||a&&a.key,c=tu(he,{key:(l&&!Ke(l)?l:`_${t}`)+""},a||[],a&&e._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Hc(e){return e.some(t=>_a(t)?!(t.type===nr||t.type===he&&!Hc(t.children)):!0)?e:null}function Pp(e,t){const n={};for(const r in e)n[/[A-Z]/.test(r)?`on:${r}`:Ks(r)]=e[r];return n}const Po=e=>e?dh(e)?va(e):Po(e.parent):null,Kr=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Po(e.parent),$root:e=>Po(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zc(e),$forceUpdate:e=>e.f||(e.f=()=>{pa(e.update)}),$nextTick:e=>e.n||(e.n=cp.bind(e.proxy)),$watch:e=>Yp.bind(e)}),uo=(e,t)=>e!==It&&!e.__isScriptSetup&&gt(e,t),Cp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const S=a[t];if(S!==void 0)switch(S){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(uo(r,t))return a[t]=1,r[t];if(s!==It&&gt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&gt(f,t))return a[t]=3,i[t];if(n!==It&&gt(n,t))return a[t]=4,n[t];Co&&(a[t]=0)}}const d=Kr[t];let g,A;if(d)return t==="$attrs"&&Xt(e.attrs,"get",""),d(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(n!==It&&gt(n,t))return a[t]=4,n[t];if(A=c.config.globalProperties,gt(A,t))return A[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return uo(s,t)?(s[t]=n,!0):r!==It&&gt(r,t)?(r[t]=n,!0):gt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==It&&gt(e,a)||uo(t,a)||(l=i[0])&&gt(l,a)||gt(r,a)||gt(Kr,a)||gt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:gt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Kl(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Co=!0;function Vp(e){const t=zc(e),n=e.proxy,r=e.ctx;Co=!1,t.beforeCreate&&zl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:g,mounted:A,beforeUpdate:S,updated:x,activated:L,deactivated:U,beforeDestroy:z,beforeUnmount:Y,destroyed:Z,unmounted:H,render:mt,renderTracked:Et,renderTriggered:I,errorCaptured:m,serverPrefetch:v,expose:T,inheritAttrs:w,components:b,directives:y,filters:ae}=t;if(f&&Dp(f,r,null),a)for(const _t in a){const ht=a[_t];ot(ht)&&(r[_t]=ht.bind(n))}if(s){const _t=s.call(n,n);St(_t)&&(e.data=wi(_t))}if(Co=!0,i)for(const _t in i){const ht=i[_t],ye=ot(ht)?ht.bind(n,n):ot(ht.get)?ht.get.bind(n,n):Pe,gn=!ot(ht)&&ot(ht.set)?ht.set.bind(n):Pe,Me=Pn({get:ye,set:gn});Object.defineProperty(r,_t,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Vt=>Me.value=Vt})}if(l)for(const _t in l)Kc(l[_t],r,n,_t);if(c){const _t=ot(c)?c.call(n):c;Reflect.ownKeys(_t).forEach(ht=>{Lp(ht,_t[ht])})}d&&zl(d,e,"c");function kt(_t,ht){it(ht)?ht.forEach(ye=>_t(ye.bind(n))):ht&&_t(ht.bind(n))}if(kt(yp,g),kt($c,A),kt(vp,S),kt(Ep,x),kt(gp,L),kt(mp,U),kt(Rp,m),kt(Ap,Et),kt(wp,I),kt(Tp,Y),kt(qc,H),kt(Ip,v),it(T))if(T.length){const _t=e.exposed||(e.exposed={});T.forEach(ht=>{Object.defineProperty(_t,ht,{get:()=>n[ht],set:ye=>n[ht]=ye})})}else e.exposed||(e.exposed={});mt&&e.render===Pe&&(e.render=mt),w!=null&&(e.inheritAttrs=w),b&&(e.components=b),y&&(e.directives=y),v&&Uc(e)}function Dp(e,t,n=Pe){it(e)&&(e=Vo(e));for(const r in e){const s=e[r];let i;St(s)?"default"in s?i=zs(s.from||r,s.default,!0):i=zs(s.from||r):i=zs(s),Zt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function zl(e,t,n){xe(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Kc(e,t,n,r){let s=r.includes(".")?oh(n,r):()=>n[r];if(Ot(e)){const i=t[e];ot(i)&&Zn(s,i)}else if(ot(e))Zn(s,e.bind(n));else if(St(e))if(it(e))e.forEach(i=>Kc(i,t,n,r));else{const i=ot(e.handler)?e.handler.bind(n):t[e.handler];ot(i)&&Zn(s,i,e)}}function zc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(f=>si(c,f,a,!0)),si(c,t,a)),St(t)&&i.set(t,c),c}function si(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&si(e,i,n,!0),s&&s.forEach(a=>si(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=xp[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const xp={data:Wl,props:Gl,emits:Gl,methods:Lr,computed:Lr,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:Lr,directives:Lr,watch:Op,provide:Wl,inject:Np};function Wl(e,t){return t?e?function(){return ie(ot(e)?e.call(this,this):e,ot(t)?t.call(this,this):t)}:t:e}function Np(e,t){return Lr(Vo(e),Vo(t))}function Vo(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Lr(e,t){return e?ie(Object.create(null),e,t):t}function Gl(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:ie(Object.create(null),Kl(e),Kl(t??{})):t}function Op(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function Wc(){return{app:null,config:{isNativeTag:Id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mp=0;function kp(e,t){return function(r,s=null){ot(r)||(r=ie({},r)),s!=null&&!St(s)&&(s=null);const i=Wc(),a=new WeakSet,l=[];let c=!1;const f=i.app={_uid:Mp++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gg,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&ot(d.install)?(a.add(d),d.install(f,...g)):ot(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,A){if(!c){const S=f._ceVNode||de(r,s);return S.appContext=i,A===!0?A="svg":A===!1&&(A=void 0),e(S,d,A),c=!0,f._container=d,d.__vue_app__=f,va(S.component)}},onUnmount(d){l.push(d)},unmount(){c&&(xe(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=Jn;Jn=f;try{return d()}finally{Jn=g}}};return f}}let Jn=null;function Lp(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function zs(e,t,n=!1){const r=se||oe;if(r||Jn){const s=Jn?Jn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ot(t)?t.call(r&&r.proxy):t}}const Gc={},Qc=()=>Object.create(Gc),Yc=e=>Object.getPrototypeOf(e)===Gc;function Fp(e,t,n,r=!1){const s={},i=Qc();e.propsDefaults=Object.create(null),Xc(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:tp(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Up(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=pt(s),[c]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let A=d[g];if(bi(e.emitsOptions,A))continue;const S=t[A];if(c)if(gt(i,A))S!==i[A]&&(i[A]=S,f=!0);else{const x=un(A);s[x]=Do(c,l,x,S,e,!1)}else S!==i[A]&&(i[A]=S,f=!0)}}}else{Xc(e,t,s,i)&&(f=!0);let d;for(const g in l)(!t||!gt(t,g)&&((d=Mn(g))===g||!gt(t,d)))&&(c?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Do(c,l,g,void 0,e,!0)):delete s[g]);if(i!==l)for(const g in i)(!t||!gt(t,g))&&(delete i[g],f=!0)}f&&je(e.attrs,"set","")}function Xc(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(jr(c))continue;const f=t[c];let d;s&&gt(s,d=un(c))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:bi(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(i){const c=pt(n),f=l||It;for(let d=0;d<i.length;d++){const g=i[d];n[g]=Do(s,c,g,f[g],e,!gt(f,g))}}return a}function Do(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=gt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ot(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=ds(s);r=f[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Mn(n))&&(r=!0))}return r}const Bp=new WeakMap;function Jc(e,t,n=!1){const r=n?Bp:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ot(e)){const d=g=>{c=!0;const[A,S]=Jc(g,t,!0);ie(a,A),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return St(e)&&r.set(e,Gn),Gn;if(it(i))for(let d=0;d<i.length;d++){const g=un(i[d]);Ql(g)&&(a[g]=It)}else if(i)for(const d in i){const g=un(d);if(Ql(g)){const A=i[d],S=a[g]=it(A)||ot(A)?{type:A}:ie({},A),x=S.type;let L=!1,U=!0;if(it(x))for(let z=0;z<x.length;++z){const Y=x[z],Z=ot(Y)&&Y.name;if(Z==="Boolean"){L=!0;break}else Z==="String"&&(U=!1)}else L=ot(x)&&x.name==="Boolean";S[0]=L,S[1]=U,(L||gt(S,"default"))&&l.push(g)}}const f=[a,l];return St(e)&&r.set(e,f),f}function Ql(e){return e[0]!=="$"&&!jr(e)}const Zc=e=>e[0]==="_"||e==="$stable",ma=e=>it(e)?e.map(Se):[Se(e)],jp=(e,t,n)=>{if(t._n)return t;const r=Fc((...s)=>ma(t(...s)),n);return r._c=!1,r},th=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Zc(s))continue;const i=e[s];if(ot(i))t[s]=jp(s,i,r);else if(i!=null){const a=ma(i);t[s]=()=>a}}},eh=(e,t)=>{const n=ma(t);e.slots.default=()=>n},nh=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},$p=(e,t,n)=>{const r=e.slots=Qc();if(e.vnode.shapeFlag&32){const s=t._;s?(nh(r,t,n),n&&dc(r,"_",s,!0)):th(t,r)}else t&&eh(e,t)},qp=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=It;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:nh(s,t,n):(i=!t.$stable,th(t,s)),a=t}else t&&(eh(e,t),a={default:1});if(i)for(const l in s)!Zc(l)&&a[l]==null&&delete s[l]},ue=rg;function Hp(e){return Kp(e)}function Kp(e,t){const n=Ti();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:g,nextSibling:A,setScopeId:S=Pe,insertStaticContent:x}=e,L=(_,E,C,O=null,V=null,M=null,$=void 0,B=null,F=!!E.dynamicChildren)=>{if(_===E)return;_&&!Or(_,E)&&(O=ke(_),Vt(_,V,M,!0),_=null),E.patchFlag===-2&&(F=!1,E.dynamicChildren=null);const{type:k,ref:X,shapeFlag:q}=E;switch(k){case Si:U(_,E,C,O);break;case nr:z(_,E,C,O);break;case ho:_==null&&Y(E,C,O,$);break;case he:b(_,E,C,O,V,M,$,B,F);break;default:q&1?mt(_,E,C,O,V,M,$,B,F):q&6?y(_,E,C,O,V,M,$,B,F):(q&64||q&128)&&k.process(_,E,C,O,V,M,$,B,F,we)}X!=null&&V&&ri(X,_&&_.ref,M,E||_,!E)},U=(_,E,C,O)=>{if(_==null)r(E.el=l(E.children),C,O);else{const V=E.el=_.el;E.children!==_.children&&f(V,E.children)}},z=(_,E,C,O)=>{_==null?r(E.el=c(E.children||""),C,O):E.el=_.el},Y=(_,E,C,O)=>{[_.el,_.anchor]=x(_.children,E,C,O,_.el,_.anchor)},Z=({el:_,anchor:E},C,O)=>{let V;for(;_&&_!==E;)V=A(_),r(_,C,O),_=V;r(E,C,O)},H=({el:_,anchor:E})=>{let C;for(;_&&_!==E;)C=A(_),s(_),_=C;s(E)},mt=(_,E,C,O,V,M,$,B,F)=>{E.type==="svg"?$="svg":E.type==="math"&&($="mathml"),_==null?Et(E,C,O,V,M,$,B,F):v(_,E,V,M,$,B,F)},Et=(_,E,C,O,V,M,$,B)=>{let F,k;const{props:X,shapeFlag:q,transition:W,dirs:tt}=_;if(F=_.el=a(_.type,M,X&&X.is,X),q&8?d(F,_.children):q&16&&m(_.children,F,null,O,V,co(_,M),$,B),tt&&In(_,null,O,"created"),I(F,_,_.scopeId,$,O),X){for(const st in X)st!=="value"&&!jr(st)&&i(F,st,null,X[st],M,O);"value"in X&&i(F,"value",null,X.value,M),(k=X.onVnodeBeforeMount)&&Ae(k,O,_)}tt&&In(_,null,O,"beforeMount");const J=zp(V,W);J&&W.beforeEnter(F),r(F,E,C),((k=X&&X.onVnodeMounted)||J||tt)&&ue(()=>{k&&Ae(k,O,_),J&&W.enter(F),tt&&In(_,null,O,"mounted")},V)},I=(_,E,C,O,V)=>{if(C&&S(_,C),O)for(let M=0;M<O.length;M++)S(_,O[M]);if(V){let M=V.subTree;if(E===M||lh(M.type)&&(M.ssContent===E||M.ssFallback===E)){const $=V.vnode;I(_,$,$.scopeId,$.slotScopeIds,V.parent)}}},m=(_,E,C,O,V,M,$,B,F=0)=>{for(let k=F;k<_.length;k++){const X=_[k]=B?Ze(_[k]):Se(_[k]);L(null,X,E,C,O,V,M,$,B)}},v=(_,E,C,O,V,M,$)=>{const B=E.el=_.el;let{patchFlag:F,dynamicChildren:k,dirs:X}=E;F|=_.patchFlag&16;const q=_.props||It,W=E.props||It;let tt;if(C&&wn(C,!1),(tt=W.onVnodeBeforeUpdate)&&Ae(tt,C,E,_),X&&In(E,_,C,"beforeUpdate"),C&&wn(C,!0),(q.innerHTML&&W.innerHTML==null||q.textContent&&W.textContent==null)&&d(B,""),k?T(_.dynamicChildren,k,B,C,O,co(E,V),M):$||ht(_,E,B,null,C,O,co(E,V),M,!1),F>0){if(F&16)w(B,q,W,C,V);else if(F&2&&q.class!==W.class&&i(B,"class",null,W.class,V),F&4&&i(B,"style",q.style,W.style,V),F&8){const J=E.dynamicProps;for(let st=0;st<J.length;st++){const lt=J[st],Ht=q[lt],Lt=W[lt];(Lt!==Ht||lt==="value")&&i(B,lt,Ht,Lt,V,C)}}F&1&&_.children!==E.children&&d(B,E.children)}else!$&&k==null&&w(B,q,W,C,V);((tt=W.onVnodeUpdated)||X)&&ue(()=>{tt&&Ae(tt,C,E,_),X&&In(E,_,C,"updated")},O)},T=(_,E,C,O,V,M,$)=>{for(let B=0;B<E.length;B++){const F=_[B],k=E[B],X=F.el&&(F.type===he||!Or(F,k)||F.shapeFlag&70)?g(F.el):C;L(F,k,X,null,O,V,M,$,!0)}},w=(_,E,C,O,V)=>{if(E!==C){if(E!==It)for(const M in E)!jr(M)&&!(M in C)&&i(_,M,E[M],null,V,O);for(const M in C){if(jr(M))continue;const $=C[M],B=E[M];$!==B&&M!=="value"&&i(_,M,B,$,V,O)}"value"in C&&i(_,"value",E.value,C.value,V)}},b=(_,E,C,O,V,M,$,B,F)=>{const k=E.el=_?_.el:l(""),X=E.anchor=_?_.anchor:l("");let{patchFlag:q,dynamicChildren:W,slotScopeIds:tt}=E;tt&&(B=B?B.concat(tt):tt),_==null?(r(k,C,O),r(X,C,O),m(E.children||[],C,X,V,M,$,B,F)):q>0&&q&64&&W&&_.dynamicChildren?(T(_.dynamicChildren,W,C,V,M,$,B),(E.key!=null||V&&E===V.subTree)&&rh(_,E,!0)):ht(_,E,C,X,V,M,$,B,F)},y=(_,E,C,O,V,M,$,B,F)=>{E.slotScopeIds=B,_==null?E.shapeFlag&512?V.ctx.activate(E,C,O,$,F):ae(E,C,O,V,M,$,F):We(_,E,F)},ae=(_,E,C,O,V,M,$)=>{const B=_.component=ug(_,O,V);if(Bc(_)&&(B.ctx.renderer=we),cg(B,!1,$),B.asyncDep){if(V&&V.registerDep(B,kt,$),!_.el){const F=B.subTree=de(nr);z(null,F,E,C)}}else kt(B,_,E,C,V,M,$)},We=(_,E,C)=>{const O=E.component=_.component;if(eg(_,E,C))if(O.asyncDep&&!O.asyncResolved){_t(O,E,C);return}else O.next=E,O.update();else E.el=_.el,O.vnode=E},kt=(_,E,C,O,V,M,$)=>{const B=()=>{if(_.isMounted){let{next:q,bu:W,u:tt,parent:J,vnode:st}=_;{const Kt=sh(_);if(Kt){q&&(q.el=st.el,_t(_,q,$)),Kt.asyncDep.then(()=>{_.isUnmounted||B()});return}}let lt=q,Ht;wn(_,!1),q?(q.el=st.el,_t(_,q,$)):q=st,W&&so(W),(Ht=q.props&&q.props.onVnodeBeforeUpdate)&&Ae(Ht,J,q,st),wn(_,!0);const Lt=Xl(_),pe=_.subTree;_.subTree=Lt,L(pe,Lt,g(pe.el),ke(pe),_,V,M),q.el=Lt.el,lt===null&&ng(_,Lt.el),tt&&ue(tt,V),(Ht=q.props&&q.props.onVnodeUpdated)&&ue(()=>Ae(Ht,J,q,st),V)}else{let q;const{el:W,props:tt}=E,{bm:J,m:st,parent:lt,root:Ht,type:Lt}=_,pe=Xn(E);wn(_,!1),J&&so(J),!pe&&(q=tt&&tt.onVnodeBeforeMount)&&Ae(q,lt,E),wn(_,!0);{Ht.ce&&Ht.ce._injectChildStyle(Lt);const Kt=_.subTree=Xl(_);L(null,Kt,C,O,_,V,M),E.el=Kt.el}if(st&&ue(st,V),!pe&&(q=tt&&tt.onVnodeMounted)){const Kt=E;ue(()=>Ae(q,lt,Kt),V)}(E.shapeFlag&256||lt&&Xn(lt.vnode)&&lt.vnode.shapeFlag&256)&&_.a&&ue(_.a,V),_.isMounted=!0,E=C=O=null}};_.scope.on();const F=_.effect=new _c(B);_.scope.off();const k=_.update=F.run.bind(F),X=_.job=F.runIfDirty.bind(F);X.i=_,X.id=_.uid,F.scheduler=()=>pa(X),wn(_,!0),k()},_t=(_,E,C)=>{E.component=_;const O=_.vnode.props;_.vnode=E,_.next=null,Up(_,E.props,O,C),qp(_,E.children,C),dn(),Hl(_),pn()},ht=(_,E,C,O,V,M,$,B,F=!1)=>{const k=_&&_.children,X=_?_.shapeFlag:0,q=E.children,{patchFlag:W,shapeFlag:tt}=E;if(W>0){if(W&128){gn(k,q,C,O,V,M,$,B,F);return}else if(W&256){ye(k,q,C,O,V,M,$,B,F);return}}tt&8?(X&16&&_n(k,V,M),q!==k&&d(C,q)):X&16?tt&16?gn(k,q,C,O,V,M,$,B,F):_n(k,V,M,!0):(X&8&&d(C,""),tt&16&&m(q,C,O,V,M,$,B,F))},ye=(_,E,C,O,V,M,$,B,F)=>{_=_||Gn,E=E||Gn;const k=_.length,X=E.length,q=Math.min(k,X);let W;for(W=0;W<q;W++){const tt=E[W]=F?Ze(E[W]):Se(E[W]);L(_[W],tt,C,null,V,M,$,B,F)}k>X?_n(_,V,M,!0,!1,q):m(E,C,O,V,M,$,B,F,q)},gn=(_,E,C,O,V,M,$,B,F)=>{let k=0;const X=E.length;let q=_.length-1,W=X-1;for(;k<=q&&k<=W;){const tt=_[k],J=E[k]=F?Ze(E[k]):Se(E[k]);if(Or(tt,J))L(tt,J,C,null,V,M,$,B,F);else break;k++}for(;k<=q&&k<=W;){const tt=_[q],J=E[W]=F?Ze(E[W]):Se(E[W]);if(Or(tt,J))L(tt,J,C,null,V,M,$,B,F);else break;q--,W--}if(k>q){if(k<=W){const tt=W+1,J=tt<X?E[tt].el:O;for(;k<=W;)L(null,E[k]=F?Ze(E[k]):Se(E[k]),C,J,V,M,$,B,F),k++}}else if(k>W)for(;k<=q;)Vt(_[k],V,M,!0),k++;else{const tt=k,J=k,st=new Map;for(k=J;k<=W;k++){const Ft=E[k]=F?Ze(E[k]):Se(E[k]);Ft.key!=null&&st.set(Ft.key,k)}let lt,Ht=0;const Lt=W-J+1;let pe=!1,Kt=0;const Ge=new Array(Lt);for(k=0;k<Lt;k++)Ge[k]=0;for(k=tt;k<=q;k++){const Ft=_[k];if(Ht>=Lt){Vt(Ft,V,M,!0);continue}let ge;if(Ft.key!=null)ge=st.get(Ft.key);else for(lt=J;lt<=W;lt++)if(Ge[lt-J]===0&&Or(Ft,E[lt])){ge=lt;break}ge===void 0?Vt(Ft,V,M,!0):(Ge[ge-J]=k+1,ge>=Kt?Kt=ge:pe=!0,L(Ft,E[ge],C,null,V,M,$,B,F),Ht++)}const Er=pe?Wp(Ge):Gn;for(lt=Er.length-1,k=Lt-1;k>=0;k--){const Ft=J+k,ge=E[Ft],Ts=Ft+1<X?E[Ft+1].el:O;Ge[k]===0?L(null,ge,C,Ts,V,M,$,B,F):pe&&(lt<0||k!==Er[lt]?Me(ge,C,Ts,2):lt--)}}},Me=(_,E,C,O,V=null)=>{const{el:M,type:$,transition:B,children:F,shapeFlag:k}=_;if(k&6){Me(_.component.subTree,E,C,O);return}if(k&128){_.suspense.move(E,C,O);return}if(k&64){$.move(_,E,C,we);return}if($===he){r(M,E,C);for(let q=0;q<F.length;q++)Me(F[q],E,C,O);r(_.anchor,E,C);return}if($===ho){Z(_,E,C);return}if(O!==2&&k&1&&B)if(O===0)B.beforeEnter(M),r(M,E,C),ue(()=>B.enter(M),V);else{const{leave:q,delayLeave:W,afterLeave:tt}=B,J=()=>r(M,E,C),st=()=>{q(M,()=>{J(),tt&&tt()})};W?W(M,J,st):st()}else r(M,E,C)},Vt=(_,E,C,O=!1,V=!1)=>{const{type:M,props:$,ref:B,children:F,dynamicChildren:k,shapeFlag:X,patchFlag:q,dirs:W,cacheIndex:tt}=_;if(q===-2&&(V=!1),B!=null&&ri(B,null,C,_,!0),tt!=null&&(E.renderCache[tt]=void 0),X&256){E.ctx.deactivate(_);return}const J=X&1&&W,st=!Xn(_);let lt;if(st&&(lt=$&&$.onVnodeBeforeUnmount)&&Ae(lt,E,_),X&6)mn(_.component,C,O);else{if(X&128){_.suspense.unmount(C,O);return}J&&In(_,null,E,"beforeUnmount"),X&64?_.type.remove(_,E,C,we,O):k&&!k.hasOnce&&(M!==he||q>0&&q&64)?_n(k,E,C,!1,!0):(M===he&&q&384||!V&&X&16)&&_n(F,E,C),O&&Dt(_)}(st&&(lt=$&&$.onVnodeUnmounted)||J)&&ue(()=>{lt&&Ae(lt,E,_),J&&In(_,null,E,"unmounted")},C)},Dt=_=>{const{type:E,el:C,anchor:O,transition:V}=_;if(E===he){$i(C,O);return}if(E===ho){H(_);return}const M=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:$,delayLeave:B}=V,F=()=>$(C,M);B?B(_.el,M,F):F()}else M()},$i=(_,E)=>{let C;for(;_!==E;)C=A(_),s(_),_=C;s(E)},mn=(_,E,C)=>{const{bum:O,scope:V,job:M,subTree:$,um:B,m:F,a:k}=_;Yl(F),Yl(k),O&&so(O),V.stop(),M&&(M.flags|=8,Vt($,_,E,C)),B&&ue(B,E),ue(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},_n=(_,E,C,O=!1,V=!1,M=0)=>{for(let $=M;$<_.length;$++)Vt(_[$],E,C,O,V)},ke=_=>{if(_.shapeFlag&6)return ke(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=A(_.anchor||_.el),C=E&&E[dp];return C?A(C):E};let yr=!1;const Es=(_,E,C)=>{_==null?E._vnode&&Vt(E._vnode,null,null,!0):L(E._vnode||null,_,E,null,null,null,C),E._vnode=_,yr||(yr=!0,Hl(),Mc(),yr=!1)},we={p:L,um:Vt,m:Me,r:Dt,mt:ae,mc:m,pc:ht,pbc:T,n:ke,o:e};return{render:Es,hydrate:void 0,createApp:kp(Es)}}function co({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function zp(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function rh(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ze(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&rh(a,l)),l.type===Si&&(l.el=a.el)}}function Wp(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function sh(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:sh(t)}function Yl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Gp=Symbol.for("v-scx"),Qp=()=>zs(Gp);function Zn(e,t,n){return ih(e,t,n)}function ih(e,t,n=It){const{immediate:r,deep:s,flush:i,once:a}=n,l=ie({},n),c=t&&r||!t&&i!=="post";let f;if(es){if(i==="sync"){const S=Qp();f=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Pe,S.resume=Pe,S.pause=Pe,S}}const d=se;l.call=(S,x,L)=>xe(S,d,x,L);let g=!1;i==="post"?l.scheduler=S=>{ue(S,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(S,x)=>{x?S():pa(S)}),l.augmentJob=S=>{t&&(S.flags|=4),g&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const A=lp(e,t,l);return es&&(f?f.push(A):c&&A()),A}function Yp(e,t,n){const r=this.proxy,s=Ot(e)?e.includes(".")?oh(r,e):()=>r[e]:e.bind(r,r);let i;ot(t)?i=t:(i=t.handler,n=t);const a=ds(this),l=ih(s,i.bind(r),n);return a(),l}function oh(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Xp=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${un(t)}Modifiers`]||e[`${Mn(t)}Modifiers`];function Jp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||It;let s=n;const i=t.startsWith("update:"),a=i&&Xp(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ot(d)?d.trim():d)),a.number&&(s=n.map(Sd)));let l,c=r[l=Ks(t)]||r[l=Ks(un(t))];!c&&i&&(c=r[l=Ks(Mn(t))]),c&&xe(c,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,xe(f,e,6,s)}}function ah(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ot(e)){const c=f=>{const d=ah(f,t,!0);d&&(l=!0,ie(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(St(e)&&r.set(e,null),null):(it(i)?i.forEach(c=>a[c]=null):ie(a,i),St(e)&&r.set(e,a),a)}function bi(e,t){return!e||!yi(t)?!1:(t=t.slice(2).replace(/Once$/,""),gt(e,t[0].toLowerCase()+t.slice(1))||gt(e,Mn(t))||gt(e,t))}function Xl(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:g,data:A,setupState:S,ctx:x,inheritAttrs:L}=e,U=ni(e);let z,Y;try{if(n.shapeFlag&4){const H=s||r,mt=H;z=Se(f.call(mt,H,d,g,S,A,x)),Y=l}else{const H=t;z=Se(H.length>1?H(g,{attrs:l,slots:a,emit:c}):H(g,null)),Y=t.props?l:Zp(l)}}catch(H){zr.length=0,Ai(H,e,1),z=de(nr)}let Z=z;if(Y&&L!==!1){const H=Object.keys(Y),{shapeFlag:mt}=Z;H.length&&mt&7&&(i&&H.some(na)&&(Y=tg(Y,i)),Z=rr(Z,Y,!1,!0))}return n.dirs&&(Z=rr(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&ga(Z,n.transition),z=Z,ni(U),z}const Zp=e=>{let t;for(const n in e)(n==="class"||n==="style"||yi(n))&&((t||(t={}))[n]=e[n]);return t},tg=(e,t)=>{const n={};for(const r in e)(!na(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function eg(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Jl(r,a,f):!!a;if(c&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const A=d[g];if(a[A]!==r[A]&&!bi(f,A))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Jl(r,a,f):!0:!!a;return!1}function Jl(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!bi(n,i))return!0}return!1}function ng({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const lh=e=>e.__isSuspense;function rg(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):fp(e)}const he=Symbol.for("v-fgt"),Si=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),zr=[];let fe=null;function Dn(e=!1){zr.push(fe=e?null:[])}function sg(){zr.pop(),fe=zr[zr.length-1]||null}let ts=1;function Zl(e,t=!1){ts+=e,e<0&&fe&&t&&(fe.hasOnce=!0)}function uh(e){return e.dynamicChildren=ts>0?fe||Gn:null,sg(),ts>0&&fe&&fe.push(e),e}function fs(e,t,n,r,s,i){return uh(be(e,t,n,r,s,i,!0))}function tu(e,t,n,r,s){return uh(de(e,t,n,r,s,!0))}function _a(e){return e?e.__v_isVNode===!0:!1}function Or(e,t){return e.type===t.type&&e.key===t.key}const ch=({key:e})=>e??null,Ws=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ot(e)||Zt(e)||ot(e)?{i:oe,r:e,k:t,f:!!n}:e:null);function be(e,t=null,n=null,r=0,s=null,i=e===he?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ch(t),ref:t&&Ws(t),scopeId:Lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:oe};return l?(ya(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ot(n)?8:16),ts>0&&!a&&fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&fe.push(c),c}const de=ig;function ig(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===bp)&&(e=nr),_a(e)){const l=rr(e,t,!0);return n&&ya(l,n),ts>0&&!i&&fe&&(l.shapeFlag&6?fe[fe.indexOf(e)]=l:fe.push(l)),l.patchFlag=-2,l}if(pg(e)&&(e=e.__vccOpts),t){t=og(t);let{class:l,style:c}=t;l&&!Ot(l)&&(t.class=ia(l)),St(c)&&(da(c)&&!it(c)&&(c=ie({},c)),t.style=Ii(c))}const a=Ot(e)?1:lh(e)?128:pp(e)?64:St(e)?4:ot(e)?2:0;return be(e,t,n,r,s,a,i,!0)}function og(e){return e?da(e)||Yc(e)?ie({},e):e:null}function rr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,f=t?fh(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ch(f),ref:t&&t.ref?n&&i?it(i)?i.concat(Ws(t)):[i,Ws(t)]:Ws(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rr(e.ssContent),ssFallback:e.ssFallback&&rr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ga(d,c.clone(d)),d}function hh(e=" ",t=0){return de(Si,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?de(nr):it(e)?de(he,null,e.slice()):_a(e)?Ze(e):de(Si,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rr(e)}function ya(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ya(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Yc(t)?t._ctx=oe:s===3&&oe&&(oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ot(t)?(t={default:t,_ctx:oe},n=32):(t=String(t),r&64?(n=16,t=[hh(t)]):n=8);e.children=t,e.shapeFlag|=n}function fh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ia([t.class,r.class]));else if(s==="style")t.style=Ii([t.style,r.style]);else if(yi(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){xe(e,t,7,[n,r])}const ag=Wc();let lg=0;function ug(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ag,i={uid:lg++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jc(r,s),emitsOptions:ah(r,s),emit:null,emitted:null,propsDefaults:It,inheritAttrs:r.inheritAttrs,ctx:It,data:It,props:It,attrs:It,slots:It,refs:It,setupState:It,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Jp.bind(null,i),e.ce&&e.ce(i),i}let se=null,ii,xo;{const e=Ti(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ii=t("__VUE_INSTANCE_SETTERS__",n=>se=n),xo=t("__VUE_SSR_SETTERS__",n=>es=n)}const ds=e=>{const t=se;return ii(e),e.scope.on(),()=>{e.scope.off(),ii(t)}},eu=()=>{se&&se.scope.off(),ii(null)};function dh(e){return e.vnode.shapeFlag&4}let es=!1;function cg(e,t=!1,n=!1){t&&xo(t);const{props:r,children:s}=e.vnode,i=dh(e);Fp(e,r,i,t),$p(e,s,n);const a=i?hg(e,t):void 0;return t&&xo(!1),a}function hg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cp);const{setup:r}=n;if(r){dn();const s=e.setupContext=r.length>1?dg(e):null,i=ds(e),a=hs(r,e,0,[e.props,s]),l=uc(a);if(pn(),i(),(l||e.sp)&&!Xn(e)&&Uc(e),l){if(a.then(eu,eu),t)return a.then(c=>{nu(e,c)}).catch(c=>{Ai(c,e,0)});e.asyncDep=a}else nu(e,a)}else ph(e)}function nu(e,t,n){ot(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:St(t)&&(e.setupState=xc(t)),ph(e)}function ph(e,t,n){const r=e.type;e.render||(e.render=r.render||Pe);{const s=ds(e);dn();try{Vp(e)}finally{pn(),s()}}}const fg={get(e,t){return Xt(e,"get",""),e[t]}};function dg(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,fg),slots:e.slots,emit:e.emit,expose:t}}function va(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xc(ep(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kr)return Kr[n](e)},has(t,n){return n in t||n in Kr}})):e.proxy}function pg(e){return ot(e)&&"__vccOpts"in e}const Pn=(e,t)=>op(e,t,es),gg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let No;const ru=typeof window<"u"&&window.trustedTypes;if(ru)try{No=ru.createPolicy("vue",{createHTML:e=>e})}catch{}const gh=No?e=>No.createHTML(e):e=>e,mg="http://www.w3.org/2000/svg",_g="http://www.w3.org/1998/Math/MathML",Be=typeof document<"u"?document:null,su=Be&&Be.createElement("template"),yg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Be.createElementNS(mg,e):t==="mathml"?Be.createElementNS(_g,e):n?Be.createElement(e,{is:n}):Be.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Be.createTextNode(e),createComment:e=>Be.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Be.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{su.innerHTML=gh(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=su.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vg=Symbol("_vtc");function Eg(e,t,n){const r=e[vg];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const iu=Symbol("_vod"),Tg=Symbol("_vsh"),Ig=Symbol(""),wg=/(^|;)\s*display\s*:/;function Ag(e,t,n){const r=e.style,s=Ot(n);let i=!1;if(n&&!s){if(t)if(Ot(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Gs(r,l,"")}else for(const a in t)n[a]==null&&Gs(r,a,"");for(const a in n)a==="display"&&(i=!0),Gs(r,a,n[a])}else if(s){if(t!==n){const a=r[Ig];a&&(n+=";"+a),r.cssText=n,i=wg.test(n)}}else t&&e.removeAttribute("style");iu in e&&(e[iu]=i?r.display:"",e[Tg]&&(r.display="none"))}const ou=/\s*!important$/;function Gs(e,t,n){if(it(n))n.forEach(r=>Gs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Rg(e,t);ou.test(n)?e.setProperty(Mn(r),n.replace(ou,""),"important"):e[r]=n}}const au=["Webkit","Moz","ms"],fo={};function Rg(e,t){const n=fo[t];if(n)return n;let r=un(t);if(r!=="filter"&&r in e)return fo[t]=r;r=fc(r);for(let s=0;s<au.length;s++){const i=au[s]+r;if(i in e)return fo[t]=i}return t}const lu="http://www.w3.org/1999/xlink";function uu(e,t,n,r,s,i=Nd(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(lu,t.slice(6,t.length)):e.setAttributeNS(lu,t,n):n==null||i&&!pc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ke(n)?String(n):n)}function cu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?gh(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=pc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function bg(e,t,n,r){e.addEventListener(t,n,r)}function Sg(e,t,n,r){e.removeEventListener(t,n,r)}const hu=Symbol("_vei");function Pg(e,t,n,r,s=null){const i=e[hu]||(e[hu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Cg(t);if(r){const f=i[t]=xg(r,s);bg(e,l,f,c)}else a&&(Sg(e,l,a,c),i[t]=void 0)}}const fu=/(?:Once|Passive|Capture)$/;function Cg(e){let t;if(fu.test(e)){t={};let r;for(;r=e.match(fu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mn(e.slice(2)),t]}let po=0;const Vg=Promise.resolve(),Dg=()=>po||(Vg.then(()=>po=0),po=Date.now());function xg(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(Ng(r,n.value),t,5,[r])};return n.value=e,n.attached=Dg(),n}function Ng(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const du=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Og=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Eg(e,r,a):t==="style"?Ag(e,n,r):yi(t)?na(t)||Pg(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mg(e,t,r,a))?(cu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&uu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ot(r))?cu(e,un(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),uu(e,t,r,a))};function Mg(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&du(t)&&ot(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return du(t)&&Ot(n)?!1:t in e}const kg=ie({patchProp:Og},yg);let pu;function Lg(){return pu||(pu=Hp(kg))}const Fg=(...e)=>{const t=Lg().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Bg(r);if(!s)return;const i=t._component;!ot(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Ug(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Ug(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Bg(e){return Ot(e)?document.querySelector(e):e}const Pi=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},jg={},$g={class:"header"};function qg(e,t){return Dn(),fs("header",$g,t[0]||(t[0]=[be("h1",{class:"header__name"},"Timerof",-1)]))}const Hg=Pi(jg,[["render",qg],["__scopeId","data-v-e3faa276"]]),Kg=["data-loaded"],zg={__name:"Progress",props:{percent:Number,dataLoaded:Boolean},setup(e){return(t,n)=>(Dn(),fs("div",{class:"progress","data-loaded":e.dataLoaded},[be("div",{class:"progress__filler",style:Ii({width:`${e.percent}%`})},null,4)],8,Kg))}},Wg=Pi(zg,[["__scopeId","data-v-a79ac324"]]),Gg=(e,t=new Date().getTime())=>Math.abs(Math.floor(e-t)),Qg=e=>e.reduce((t,n)=>t+Gg(n.start,n.end?n.end:new Date().getTime()),0),en=new Date().toLocaleString("ru-RU").split(",")[0],mh=144e5;new Date("06 March 2025 14:00 UTC+5").getTime(),new Date("06 March 2025 14:12 UTC+5").getTime(),new Date("06 March 2025 14:27 UTC+5").getTime(),new Date("06 March 2025 14:32 UTC+5").getTime();const Yg=e=>{const t=Math.floor(e/1e3%60);return t<=9?`0${t}`:`${t}`},Xg=e=>{const t=Math.floor(e/6e4%60);return t<=9?`0${t}`:`${t}`},Jg=e=>{const t=Math.floor(e/36e5%24);return t<=9?`0${t}`:`${t}`},Zg=e=>{const t=mh/100;return Math.abs(e/t)},Oo=e=>{const t=Yg(e),n=Xg(e),r=Jg(e),s=Zg(e);return{seconds:t,minutes:n,hours:r,string:`${r}:${n}:${t}`,percent:s}};var gu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},tm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,f=c?e[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let A=(l&15)<<2|f>>6,S=f&63;c||(S=64,a||(A=64)),r.push(n[d],n[g],n[A],n[S])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new em;const A=i<<2|l>>4;if(r.push(A),f!==64){const S=l<<4&240|f>>2;if(r.push(S),g!==64){const x=f<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nm=function(e){const t=_h(e);return yh.encodeByteArray(t,!0)},oi=function(e){return nm(e).replace(/\./g,"")},rm=function(e){try{return yh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=()=>sm().__FIREBASE_DEFAULTS__,om=()=>{if(typeof process>"u"||typeof gu>"u")return;const e=gu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},am=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rm(e[1]);return t&&JSON.parse(t)},Ea=()=>{try{return im()||om()||am()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lm=e=>{var t,n;return(n=(t=Ea())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},um=e=>{const t=lm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},vh=()=>{var e;return(e=Ea())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[oi(JSON.stringify(n)),oi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dm(){var e;const t=(e=Ea())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pm(){return!dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function mm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="FirebaseError";class fr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_m,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eh.prototype.create)}}class Eh{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?ym(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new fr(s,l,r)}}function ym(e,t){return e.replace(vm,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const vm=/\{\$([^}]+)}/g;function Mo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(mu(i)&&mu(a)){if(!Mo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){return e&&e._delegate?e._delegate:e}class rs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Im(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tm(e){return e===Rn?void 0:e}function Im(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Em(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ct||(ct={}));const Am={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},Rm=ct.INFO,bm={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},Sm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=bm[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Th{constructor(t){this.name=t,this._logLevel=Rm,this._logHandler=Sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Am[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...t),this._logHandler(this,ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...t),this._logHandler(this,ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...t),this._logHandler(this,ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...t),this._logHandler(this,ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...t),this._logHandler(this,ct.ERROR,...t)}}const Pm=(e,t)=>t.some(n=>e instanceof n);let _u,yu;function Cm(){return _u||(_u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vm(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,ko=new WeakMap,wh=new WeakMap,go=new WeakMap,Ta=new WeakMap;function Dm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(sn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ih.set(n,e)}).catch(()=>{}),Ta.set(t,e),t}function xm(e){if(ko.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});ko.set(e,t)}let Lo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ko.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Nm(e){Lo=e(Lo)}function Om(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(mo(this),t,...n);return wh.set(r,t.sort?t.sort():[t]),sn(r)}:Vm().includes(e)?function(...t){return e.apply(mo(this),t),sn(Ih.get(this))}:function(...t){return sn(e.apply(mo(this),t))}}function Mm(e){return typeof e=="function"?Om(e):(e instanceof IDBTransaction&&xm(e),Pm(e,Cm())?new Proxy(e,Lo):e)}function sn(e){if(e instanceof IDBRequest)return Dm(e);if(go.has(e))return go.get(e);const t=Mm(e);return t!==e&&(go.set(e,t),Ta.set(t,e)),t}const mo=e=>Ta.get(e);function km(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=sn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(sn(a.result),c.oldVersion,c.newVersion,sn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Lm=["get","getKey","getAll","getAllKeys","count"],Fm=["put","add","delete","clear"],_o=new Map;function vu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_o.get(t))return _o.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Fm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Lm.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return _o.set(t,i),i}Nm(e=>({...e,get:(t,n,r)=>vu(t,n)||e.get(t,n,r),has:(t,n)=>!!vu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fo="@firebase/app",Eu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Th("@firebase/app"),jm="@firebase/app-compat",$m="@firebase/analytics-compat",qm="@firebase/analytics",Hm="@firebase/app-check-compat",Km="@firebase/app-check",zm="@firebase/auth",Wm="@firebase/auth-compat",Gm="@firebase/database",Qm="@firebase/data-connect",Ym="@firebase/database-compat",Xm="@firebase/functions",Jm="@firebase/functions-compat",Zm="@firebase/installations",t_="@firebase/installations-compat",e_="@firebase/messaging",n_="@firebase/messaging-compat",r_="@firebase/performance",s_="@firebase/performance-compat",i_="@firebase/remote-config",o_="@firebase/remote-config-compat",a_="@firebase/storage",l_="@firebase/storage-compat",u_="@firebase/firestore",c_="@firebase/vertexai-preview",h_="@firebase/firestore-compat",f_="firebase",d_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="[DEFAULT]",p_={[Fo]:"fire-core",[jm]:"fire-core-compat",[qm]:"fire-analytics",[$m]:"fire-analytics-compat",[Km]:"fire-app-check",[Hm]:"fire-app-check-compat",[zm]:"fire-auth",[Wm]:"fire-auth-compat",[Gm]:"fire-rtdb",[Qm]:"fire-data-connect",[Ym]:"fire-rtdb-compat",[Xm]:"fire-fn",[Jm]:"fire-fn-compat",[Zm]:"fire-iid",[t_]:"fire-iid-compat",[e_]:"fire-fcm",[n_]:"fire-fcm-compat",[r_]:"fire-perf",[s_]:"fire-perf-compat",[i_]:"fire-rc",[o_]:"fire-rc-compat",[a_]:"fire-gcs",[l_]:"fire-gcs-compat",[u_]:"fire-fst",[h_]:"fire-fst-compat",[c_]:"fire-vertex","fire-js":"fire-js",[f_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Map,g_=new Map,Bo=new Map;function Tu(e,t){try{e.container.addComponent(t)}catch(n){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function li(e){const t=e.name;if(Bo.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;Bo.set(t,e);for(const n of ai.values())Tu(n,e);for(const n of g_.values())Tu(n,e);return!0}function m_(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Eh("app","Firebase",__);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=d_;function Ah(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Uo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(n||(n=vh()),!n)throw on.create("no-options");const i=ai.get(s);if(i){if(Mo(n,i.options)&&Mo(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const a=new wm(s);for(const c of Bo.values())a.addComponent(c);const l=new y_(n,r,a);return ai.set(s,l),l}function E_(e=Uo){const t=ai.get(e);if(!t&&e===Uo&&vh())return Ah();if(!t)throw on.create("no-app",{appName:e});return t}function tr(e,t,n){var r;let s=(r=p_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$e.warn(l.join(" "));return}li(new rs(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firebase-heartbeat-database",I_=1,ss="firebase-heartbeat-store";let yo=null;function Rh(){return yo||(yo=km(T_,I_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ss)}catch(n){console.warn(n)}}}}).catch(e=>{throw on.create("idb-open",{originalErrorMessage:e.message})})),yo}async function w_(e){try{const n=(await Rh()).transaction(ss),r=await n.objectStore(ss).get(bh(e));return await n.done,r}catch(t){if(t instanceof fr)$e.warn(t.message);else{const n=on.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$e.warn(n.message)}}}async function Iu(e,t){try{const r=(await Rh()).transaction(ss,"readwrite");await r.objectStore(ss).put(t,bh(e)),await r.done}catch(n){if(n instanceof fr)$e.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$e.warn(r.message)}}}function bh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=1024,R_=30*24*60*60*1e3;class b_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new P_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wu();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=R_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$e.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wu(),{heartbeatsToSend:r,unsentEntries:s}=S_(this._heartbeatsCache.heartbeats),i=oi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $e.warn(n),""}}}function wu(){return new Date().toISOString().substring(0,10)}function S_(e,t=A_){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Au(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Au(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class P_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await w_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Au(e){return oi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(e){li(new rs("platform-logger",t=>new Um(t),"PRIVATE")),li(new rs("heartbeat",t=>new b_(t),"PRIVATE")),tr(Fo,Eu,e),tr(Fo,Eu,"esm2017"),tr("fire-js","")}C_("");var V_="firebase",D_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(V_,D_,"app");var Ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,Sh;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,m){function v(){}v.prototype=m.prototype,I.D=m.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(T,w,b){for(var y=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)y[ae-2]=arguments[ae];return m.prototype[w].apply(T,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(w=0;16>w;++w)T[w]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=I.g[0],v=I.g[1],w=I.g[2];var b=I.g[3],y=m+(b^v&(w^b))+T[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=b+(w^m&(v^w))+T[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(v^b&(m^v))+T[2]+606105819&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(m^w&(b^m))+T[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(b^v&(w^b))+T[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(w^m&(v^w))+T[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(v^b&(m^v))+T[6]+2821735955&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(m^w&(b^m))+T[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(b^v&(w^b))+T[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(w^m&(v^w))+T[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(v^b&(m^v))+T[10]+4294925233&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(m^w&(b^m))+T[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(b^v&(w^b))+T[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(w^m&(v^w))+T[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(v^b&(m^v))+T[14]+2792965006&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(m^w&(b^m))+T[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(w^b&(v^w))+T[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(m^v))+T[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(b^m))+T[11]+643717713&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(w^b))+T[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(w^b&(v^w))+T[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(m^v))+T[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(b^m))+T[15]+3634488961&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(w^b))+T[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(w^b&(v^w))+T[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(m^v))+T[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(b^m))+T[3]+4107603335&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(w^b))+T[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(w^b&(v^w))+T[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(m^v))+T[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(b^m))+T[7]+1735328473&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(w^b))+T[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(v^w^b)+T[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^w)+T[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^v)+T[11]+1839030562&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^m)+T[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(v^w^b)+T[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^w)+T[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^v)+T[7]+4139469664&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^m)+T[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(v^w^b)+T[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^w)+T[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^v)+T[3]+3572445317&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^m)+T[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(v^w^b)+T[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^w)+T[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^v)+T[15]+530742520&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^m)+T[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(w^(v|~b))+T[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~w))+T[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~v))+T[14]+2878612391&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~m))+T[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=m+(w^(v|~b))+T[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~w))+T[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~v))+T[10]+4293915773&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~m))+T[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=m+(w^(v|~b))+T[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~w))+T[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~v))+T[6]+2734768916&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~m))+T[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=m+(w^(v|~b))+T[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~w))+T[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~v))+T[2]+718787259&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var v=m-this.blockSize,T=this.B,w=this.h,b=0;b<m;){if(w==0)for(;b<=v;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<m;)if(T[w++]=I.charCodeAt(b++),w==this.blockSize){s(this,T),w=0;break}}else for(;b<m;)if(T[w++]=I[b++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var v=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=v&255,v/=256;for(this.u(I),I=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)I[v++]=this.g[m]>>>T&255;return I};function i(I,m){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=m(I)}function a(I,m){this.h=m;for(var v=[],T=!0,w=I.length-1;0<=w;w--){var b=I[w]|0;T&&b==m||(v[w]=b,T=!1)}this.g=v}var l={};function c(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return U(f(-I));for(var m=[],v=1,T=0;I>=v;T++)m[T]=I/v|0,v*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return U(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(m,8)),T=g,w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w),y=parseInt(I.substring(w,w+b),m);8>b?(b=f(Math.pow(m,b)),T=T.j(b).add(f(y))):(T=T.j(v),T=T.add(f(y)))}return T}var g=c(0),A=c(1),S=c(16777216);e=a.prototype,e.m=function(){if(L(this))return-U(this).m();for(var I=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(L(this))return"-"+U(this).toString(I);for(var m=f(Math.pow(I,6)),v=this,T="";;){var w=H(v,m).g;v=z(v,w.j(m));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=w,x(v))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function L(I){return I.h==-1}e.l=function(I){return I=z(this,I),L(I)?-1:x(I)?0:1};function U(I){for(var m=I.g.length,v=[],T=0;T<m;T++)v[T]=~I.g[T];return new a(v,~I.h).add(A)}e.abs=function(){return L(this)?U(this):this},e.add=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0,w=0;w<=m;w++){var b=T+(this.i(w)&65535)+(I.i(w)&65535),y=(b>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=y>>>16,b&=65535,y&=65535,v[w]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(U(m))}e.j=function(I){if(x(this)||x(I))return g;if(L(this))return L(I)?U(this).j(U(I)):U(U(this).j(I));if(L(I))return U(this.j(U(I)));if(0>this.l(S)&&0>I.l(S))return f(this.m()*I.m());for(var m=this.g.length+I.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var b=this.i(T)>>>16,y=this.i(T)&65535,ae=I.i(w)>>>16,We=I.i(w)&65535;v[2*T+2*w]+=y*We,Y(v,2*T+2*w),v[2*T+2*w+1]+=b*We,Y(v,2*T+2*w+1),v[2*T+2*w+1]+=y*ae,Y(v,2*T+2*w+1),v[2*T+2*w+2]+=b*ae,Y(v,2*T+2*w+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function Y(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Z(I,m){this.g=I,this.h=m}function H(I,m){if(x(m))throw Error("division by zero");if(x(I))return new Z(g,g);if(L(I))return m=H(U(I),m),new Z(U(m.g),U(m.h));if(L(m))return m=H(I,U(m)),new Z(U(m.g),m.h);if(30<I.g.length){if(L(I)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var v=A,T=m;0>=T.l(I);)v=mt(v),T=mt(T);var w=Et(v,1),b=Et(T,1);for(T=Et(T,2),v=Et(v,2);!x(T);){var y=b.add(T);0>=y.l(I)&&(w=w.add(v),b=y),T=Et(T,1),v=Et(v,1)}return m=z(I,w.j(m)),new Z(w,m)}for(w=g;0<=I.l(m);){for(v=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=f(v),y=b.j(m);L(y)||0<y.l(I);)v-=T,b=f(v),y=b.j(m);x(b)&&(b=A),w=w.add(b),I=z(I,y)}return new Z(w,I)}e.A=function(I){return H(this,I).h},e.and=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&I.i(T);return new a(v,this.h&I.h)},e.or=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|I.i(T);return new a(v,this.h|I.h)},e.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^I.i(T);return new a(v,this.h^I.h)};function mt(I){for(var m=I.g.length+1,v=[],T=0;T<m;T++)v[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(v,I.h)}function Et(I,m){var v=m>>5;m%=32;for(var T=I.g.length-v,w=[],b=0;b<T;b++)w[b]=0<m?I.i(b+v)>>>m|I.i(b+v+1)<<32-m:I.i(b+v);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Cn=a}).apply(typeof Ru<"u"?Ru:typeof self<"u"?self:typeof window<"u"?window:{});var Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ph,Fr,Ch,Qs,jo,Vh,Dh,xh;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bs=="object"&&Bs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break t;h=h[R]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,R={next:function(){if(!p&&h<o.length){var P=h++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function A(o,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,A.apply(null,arguments)}function S(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function x(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var j=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)j[vt-2]=arguments[vt];return u.prototype[R].apply(p,j)}}function L(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function U(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let j=0;j<P;j++)o[R+j]=p[j]}else o.push(p)}}class z{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Y(o){return/^[\s\xa0]*$/.test(o)}function Z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var mt=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function Et(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function I(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=ye;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ae{constructor(){this.h=this.g=null}add(u,h){const p=We.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var We=new z(()=>new kt,o=>o.reset());class kt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,ht=!1,ye=new ae,gn=()=>{const o=l.Promise.resolve(void 0);_t=()=>{o.then(Me)}};var Me=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var u=We;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ht=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Dt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var $i=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function mn(o,u){if(Dt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(mt){t:{try{H(u.nodeName);var R=!0;break t}catch{}R=!1}R||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_n[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&mn.aa.h.call(this)}}x(mn,Dt);var _n={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),yr=0;function Es(o,u,h,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=R,this.key=++yr,this.da=this.fa=!1}function we(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vr(o){this.src=o,this.g={},this.h=0}vr.prototype.add=function(o,u,h,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=E(o,u,p,R);return-1<j?(u=o[j],h||(u.fa=!1)):(u=new Es(u,this.src,P,!!p,R),u.fa=h,o.push(u)),u};function _(o,u){var h=u.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(we(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function E(o,u,h,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function V(o,u,h,p,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)V(o,u[P],h,p,R);return null}return h=tt(h),o&&o[ke]?o.K(u,h,f(p)?!!p.capture:!1,R):M(o,u,h,!1,p,R)}function M(o,u,h,p,R,P){if(!u)throw Error("Invalid event type");var j=f(R)?!!R.capture:!!R,vt=q(o);if(vt||(o[C]=vt=new vr(o)),h=vt.add(u,h,p,j,P),h.proxy)return h;if(p=$(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)$i||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(k(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $(){function o(h){return u.call(o.src,o.listener,h)}const u=X;return o}function B(o,u,h,p,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],h,p,R);else p=f(p)?!!p.capture:!!p,h=tt(h),o&&o[ke]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],h=E(P,h,p,R),-1<h&&(we(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,h,p,R)),(h=-1<o?u[o]:null)&&F(h))}function F(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ke])_(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(k(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=q(u))?(_(h,o),h.h==0&&(h.src=null,u[C]=null)):we(o)}}}function k(o){return o in O?O[o]:O[o]="on"+o}function X(o,u){if(o.da)o=!0;else{u=new mn(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&F(o),o=h.call(p,u)}return o}function q(o){return o=o[C],o instanceof vr?o:null}var W="__closure_events_fn_"+(1e9*Math.random()>>>0);function tt(o){return typeof o=="function"?o:(o[W]||(o[W]=function(u){return o.handleEvent(u)}),o[W])}function J(){Vt.call(this),this.i=new vr(this),this.M=this,this.F=null}x(J,Vt),J.prototype[ke]=!0,J.prototype.removeEventListener=function(o,u,h,p){B(this,o,u,h,p)};function st(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Dt(u,o);else if(u instanceof Dt)u.target=u.target||o;else{var R=u;u=new Dt(p,o),T(u,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var j=u.g=h[P];R=lt(j,p,!0,u)&&R}if(j=u.g=o,R=lt(j,p,!0,u)&&R,R=lt(j,p,!1,u)&&R,h)for(P=0;P<h.length;P++)j=u.g=h[P],R=lt(j,p,!1,u)&&R}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)we(h[p]);delete o.g[u],o.h--}}this.F=null},J.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},J.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function lt(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==h){var vt=j.listener,Ut=j.ha||j.src;j.fa&&_(o.i,j),R=vt.call(Ut,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ht(o,u,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Lt(o){o.g=Ht(()=>{o.g=null,o.i&&(o.i=!1,Lt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class pe extends Vt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Lt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(o){Vt.call(this),this.h=o,this.g={}}x(Kt,Vt);var Ge=[];function Er(o){Et(o.g,function(u,h){this.g.hasOwnProperty(h)&&F(u)},o),o.g={}}Kt.prototype.N=function(){Kt.aa.N.call(this),Er(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ft=l.JSON.stringify,ge=l.JSON.parse,Ts=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function qi(){}qi.prototype.h=null;function Ya(o){return o.h||(o.h=o.i())}function Xa(){}var Tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hi(){Dt.call(this,"d")}x(Hi,Dt);function Ki(){Dt.call(this,"c")}x(Ki,Dt);var yn={},Ja=null;function Is(){return Ja=Ja||new J}yn.La="serverreachability";function Za(o){Dt.call(this,yn.La,o)}x(Za,Dt);function Ir(o){const u=Is();st(u,new Za(u))}yn.STAT_EVENT="statevent";function tl(o,u){Dt.call(this,yn.STAT_EVENT,o),this.stat=u}x(tl,Dt);function te(o){const u=Is();st(u,new tl(u,o))}yn.Ma="timingevent";function el(o,u){Dt.call(this,yn.Ma,o),this.size=u}x(el,Dt);function wr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function Zf(o,u,h,p,R,P){o.info(function(){if(o.g)if(P)for(var j="",vt=P.split("&"),Ut=0;Ut<vt.length;Ut++){var ft=vt[Ut].split("=");if(1<ft.length){var zt=ft[0];ft=ft[1];var Wt=zt.split("_");j=2<=Wt.length&&Wt[1]=="type"?j+(zt+"="+ft+"&"):j+(zt+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+h+`
`+j})}function td(o,u,h,p,R,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+h+`
`+P+" "+j})}function Fn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+nd(o,h)+(p?" "+p:"")})}function ed(o,u){o.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function nd(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Ft(h)}catch{return u}}var ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zi;function As(){}x(As,qi),As.prototype.g=function(){return new XMLHttpRequest},As.prototype.i=function(){return{}},zi=new As;function Qe(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new Kt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var sl={},Wi={};function Gi(o,u,h){o.L=1,o.v=Ps(Le(u)),o.m=h,o.P=!0,il(o,null)}function il(o,u){o.F=Date.now(),Rs(o),o.A=Le(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),vl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new rl,o.g=Ll(o.j,h?u:null,!o.m),0<o.O&&(o.M=new pe(A(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ge[0]=R.toString()),R=Ge);for(var P=0;P<R.length;P++){var j=V(h,R[P],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ir(),Zf(o.i,o.u,o.A,o.l,o.R,o.m)}Qe.prototype.ca=function(o){o=o.target;const u=this.M;u&&Fe(o)==3?u.j():this.Y(o)},Qe.prototype.Y=function(o){try{if(o==this.g)t:{const Wt=Fe(this.g);var u=this.g.Ba();const jn=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||bl(this.g)))){this.J||Wt!=4||u==7||(u==8||0>=jn?Ir(3):Ir(2)),Qi(this);var h=this.g.Z();this.X=h;e:if(ol(this)){var p=bl(this.g);o="";var R=p.length,P=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Rr(this);var j="";break e}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,td(this.i,this.u,this.A,this.l,this.R,Wt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var vt,Ut=this.g;if((vt=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(vt)){var ft=vt;break e}}ft=null}if(h=ft)Fn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yi(this,h);else{this.o=!1,this.s=3,te(12),vn(this),Rr(this);break t}}if(this.P){h=!0;let ve;for(;!this.J&&this.C<j.length;)if(ve=rd(this,j),ve==Wi){Wt==4&&(this.s=4,te(14),h=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==sl){this.s=4,te(15),Fn(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else Fn(this.i,this.l,ve,null),Yi(this,ve);if(ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||j.length!=0||this.h.h||(this.s=1,te(16),h=!1),this.o=this.o&&h,!h)Fn(this.i,this.l,j,"[Invalid Chunked Response]"),vn(this),Rr(this);else if(0<j.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),no(zt),zt.M=!0,te(11))}}else Fn(this.i,this.l,j,null),Yi(this,j);Wt==4&&vn(this),this.o&&!this.J&&(Wt==4?Nl(this.j,this):(this.o=!1,Rs(this)))}else Ed(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),vn(this),Rr(this)}}}catch{}finally{}};function ol(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function rd(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Wi:(h=Number(u.substring(h,p)),isNaN(h)?sl:(p+=1,p+h>u.length?Wi:(u=u.slice(p,p+h),o.C=p+h,u)))}Qe.prototype.cancel=function(){this.J=!0,vn(this)};function Rs(o){o.S=Date.now()+o.I,al(o,o.I)}function al(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=wr(A(o.ba,o),u)}function Qi(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Qe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ed(this.i,this.A),this.L!=2&&(Ir(),te(17)),vn(this),this.s=2,Rr(this)):al(this,this.S-o)};function Rr(o){o.j.G==0||o.J||Nl(o.j,o)}function vn(o){Qi(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Er(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Yi(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Xi(h.h,o))){if(!o.K&&Xi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Os(h),xs(h);else break t;eo(h),te(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=wr(A(h.Za,h),6e3));if(1>=cl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Tn(h,11)}else if((o.K||h.g==o)&&Os(h),!Y(u))for(R=h.Da.g.parse(u),u=0;u<R.length;u++){let ft=R[u];if(h.T=ft[0],ft=ft[1],h.G==2)if(ft[0]=="c"){h.K=ft[1],h.ia=ft[2];const zt=ft[3];zt!=null&&(h.la=zt,h.j.info("VER="+h.la));const Wt=ft[4];Wt!=null&&(h.Aa=Wt,h.j.info("SVER="+h.Aa));const jn=ft[5];jn!=null&&typeof jn=="number"&&0<jn&&(p=1.5*jn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ve=o.g;if(ve){const ks=ve.g?ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ks){var P=p.h;P.g||ks.indexOf("spdy")==-1&&ks.indexOf("quic")==-1&&ks.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ji(P,P.h),P.h=null))}if(p.D){const ro=ve.g?ve.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.ya=ro,wt(p.I,p.D,ro))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=o;if(p.qa=kl(p,p.J?p.ia:null,p.W),j.K){hl(p.h,j);var vt=j,Ut=p.L;Ut&&(vt.I=Ut),vt.B&&(Qi(vt),Rs(vt)),p.g=j}else Dl(p);0<h.i.length&&Ns(h)}else ft[0]!="stop"&&ft[0]!="close"||Tn(h,7);else h.G==3&&(ft[0]=="stop"||ft[0]=="close"?ft[0]=="stop"?Tn(h,7):to(h):ft[0]!="noop"&&h.l&&h.l.ta(ft),h.v=0)}}Ir(4)}catch{}}var sd=class{constructor(o,u){this.g=o,this.map=u}};function ll(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ul(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cl(o){return o.h?1:o.g?o.g.size:0}function Xi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ji(o,u){o.g?o.g.add(u):o.h=u}function hl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ll.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return L(o.i)}function id(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function od(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function dl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=od(o),p=id(o),R=p.length,P=0;P<R;P++)u.call(void 0,p[P],h&&h[P],o)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ad(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),R=null;if(0<=p){var P=o[h].substring(0,p);R=o[h].substring(p+1)}else P=o[h];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function En(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof En){this.h=o.h,bs(this,o.j),this.o=o.o,this.g=o.g,Ss(this,o.s),this.l=o.l;var u=o.i,h=new Pr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),gl(this,h),this.m=o.m}else o&&(u=String(o).match(pl))?(this.h=!1,bs(this,u[1]||"",!0),this.o=br(u[2]||""),this.g=br(u[3]||"",!0),Ss(this,u[4]),this.l=br(u[5]||"",!0),gl(this,u[6]||"",!0),this.m=br(u[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}En.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Sr(u,ml,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Sr(u,ml,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Sr(h,h.charAt(0)=="/"?cd:ud,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Sr(h,fd)),o.join("")};function Le(o){return new En(o)}function bs(o,u,h){o.j=h?br(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ss(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function gl(o,u,h){u instanceof Pr?(o.i=u,dd(o.i,o.h)):(h||(u=Sr(u,hd)),o.i=new Pr(u,o.h))}function wt(o,u,h){o.i.set(u,h)}function Ps(o){return wt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function br(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,ld),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ld(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ml=/[#\/\?@]/g,ud=/[#\?:]/g,cd=/[#\?]/g,hd=/[#\?@]/g,fd=/#/g;function Pr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ye(o){o.g||(o.g=new Map,o.h=0,o.i&&ad(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}e=Pr.prototype,e.add=function(o,u){Ye(this),this.i=null,o=Un(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function _l(o,u){Ye(o),u=Un(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function yl(o,u){return Ye(o),u=Un(o,u),o.g.has(u)}e.forEach=function(o,u){Ye(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(u,R,p,this)},this)},this)},e.na=function(){Ye(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const R=o[p];for(let P=0;P<R.length;P++)h.push(u[p])}return h},e.V=function(o){Ye(this);let u=[];if(typeof o=="string")yl(this,o)&&(u=u.concat(this.g.get(Un(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},e.set=function(o,u){return Ye(this),this.i=null,o=Un(this,o),yl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function vl(o,u,h){_l(o,u),0<h.length&&(o.i=null,o.g.set(Un(o,u),L(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var R=P;j[p]!==""&&(R+="="+encodeURIComponent(String(j[p]))),o.push(R)}}return this.i=o.join("&")};function Un(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function dd(o,u){u&&!o.j&&(Ye(o),o.i=null,o.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(_l(this,p),vl(this,R,h))},o)),o.j=u}function pd(o,u){const h=new Ar;if(l.Image){const p=new Image;p.onload=S(Xe,h,"TestLoadImage: loaded",!0,u,p),p.onerror=S(Xe,h,"TestLoadImage: error",!1,u,p),p.onabort=S(Xe,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(Xe,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function gd(o,u){const h=new Ar,p=new AbortController,R=setTimeout(()=>{p.abort(),Xe(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?Xe(h,"TestPingServer: ok",!0,u):Xe(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Xe(h,"TestPingServer: error",!1,u)})}function Xe(o,u,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function md(){this.g=new Ts}function _d(o,u,h){const p=h||"";try{dl(o,function(R,P){let j=R;f(R)&&(j=Ft(R)),u.push(p+P+"="+encodeURIComponent(j))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Cs,qi),Cs.prototype.g=function(){return new Vs(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function Vs(o,u){J.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Vs,J),e=Vs.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Vr(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;El(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function El(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cr(this):Vr(this),this.readyState==3&&El(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Cr(this))},e.Qa=function(o){this.g&&(this.response=o,Cr(this))},e.ga=function(){this.g&&Cr(this)};function Cr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vr(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tl(o){let u="";return Et(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Zi(o,u,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Tl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):wt(o,u,h))}function bt(o){J.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(bt,J);var yd=/^https?$/i,vd=["POST","PUT"];e=bt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zi.g(),this.v=this.o?Ya(this.o):Ya(zi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Il(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vd,u,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rl(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Il(this,P)}};function Il(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,wl(o),Ds(o)}function wl(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,st(this,"complete"),st(this,"abort"),Ds(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ds(this,!0)),bt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},e.bb=function(){Al(this)};function Al(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Fe(o)!=4||o.Z()!=2)){if(o.u&&Fe(o)==4)Ht(o.Ea,0,o);else if(st(o,"readystatechange"),Fe(o)==4){o.h=!1;try{const j=o.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var p;if(p=j===0){var R=String(o.D).match(pl)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!yd.test(R?R.toLowerCase():"")}h=p}if(h)st(o,"complete"),st(o,"success");else{o.m=6;try{var P=2<Fe(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",wl(o)}}finally{Ds(o)}}}}function Ds(o,u){if(o.g){Rl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||st(o,"ready");try{h.onreadystatechange=p}catch{}}}function Rl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Fe(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ge(u)}};function bl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ed(o){const u={};o=(o.g&&2<=Fe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Y(o[p]))continue;var h=w(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[R]||[];u[R]=P,P.push(h)}I(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Sl(o){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Dr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Dr("baseRetryDelayMs",5e3,o),this.cb=Dr("retryDelaySeedMs",1e4,o),this.Wa=Dr("forwardChannelMaxRetries",2,o),this.wa=Dr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ll(o&&o.concurrentRequestLimit),this.Da=new md,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Sl.prototype,e.la=8,e.G=1,e.connect=function(o,u,h,p){te(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=kl(this,null,this.W),Ns(this)};function to(o){if(Pl(o),o.G==3){var u=o.U++,h=Le(o.I);if(wt(h,"SID",o.K),wt(h,"RID",u),wt(h,"TYPE","terminate"),xr(o,h),u=new Qe(o,o.j,u),u.L=2,u.v=Ps(Le(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ll(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Rs(u)}Ml(o)}function xs(o){o.g&&(no(o),o.g.cancel(),o.g=null)}function Pl(o){xs(o),o.u&&(l.clearTimeout(o.u),o.u=null),Os(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ns(o){if(!ul(o.h)&&!o.s){o.s=!0;var u=o.Ga;_t||gn(),ht||(_t(),ht=!0),ye.add(u,o),o.B=0}}function Td(o,u){return cl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=wr(A(o.Ga,o,u),Ol(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Qe(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=Vl(this,R,u),h=Le(this.I),wt(h,"RID",o),wt(h,"CVER",22),this.D&&wt(h,"X-HTTP-Session-Id",this.D),xr(this,h),P&&(this.O?u="headers="+encodeURIComponent(String(Tl(P)))+"&"+u:this.m&&Zi(h,this.m,P)),Ji(this.h,R),this.Ua&&wt(h,"TYPE","init"),this.P?(wt(h,"$req",u),wt(h,"SID","null"),R.T=!0,Gi(R,h,null)):Gi(R,h,u),this.G=2}}else this.G==3&&(o?Cl(this,o):this.i.length==0||ul(this.h)||Cl(this))};function Cl(o,u){var h;u?h=u.l:h=o.U++;const p=Le(o.I);wt(p,"SID",o.K),wt(p,"RID",h),wt(p,"AID",o.T),xr(o,p),o.m&&o.o&&Zi(p,o.m,o.o),h=new Qe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Vl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ji(o.h,h),Gi(h,p,u)}function xr(o,u){o.H&&Et(o.H,function(h,p){wt(u,p,h)}),o.l&&dl({},function(h,p){wt(u,p,h)})}function Vl(o,u,h){h=Math.min(o.i.length,h);var p=o.l?A(o.l.Na,o.l,o):null;t:{var R=o.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let vt=!0;for(let Ut=0;Ut<h;Ut++){let ft=R[Ut].g;const zt=R[Ut].map;if(ft-=P,0>ft)P=Math.max(0,R[Ut].g-100),vt=!1;else try{_d(zt,j,"req"+ft+"_")}catch{p&&p(zt)}}if(vt){p=j.join("&");break t}}}return o=o.i.splice(0,h),u.D=o,p}function Dl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;_t||gn(),ht||(_t(),ht=!0),ye.add(u,o),o.v=0}}function eo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=wr(A(o.Fa,o),Ol(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=wr(A(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),xs(this),xl(this))};function no(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function xl(o){o.g=new Qe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Le(o.qa);wt(u,"RID","rpc"),wt(u,"SID",o.K),wt(u,"AID",o.T),wt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&wt(u,"TO",o.ja),wt(u,"TYPE","xmlhttp"),xr(o,u),o.m&&o.o&&Zi(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ps(Le(u)),h.m=null,h.P=!0,il(h,o)}e.Za=function(){this.C!=null&&(this.C=null,xs(this),eo(this),te(19))};function Os(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Nl(o,u){var h=null;if(o.g==u){Os(o),no(o),o.g=null;var p=2}else if(Xi(o.h,u))h=u.D,hl(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Is(),st(p,new el(p,h)),Ns(o)}else Dl(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&Td(o,u)||p==2&&eo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),R){case 1:Tn(o,5);break;case 4:Tn(o,10);break;case 3:Tn(o,6);break;default:Tn(o,2)}}}function Ol(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Tn(o,u){if(o.j.info("Error code "+u),u==2){var h=A(o.fb,o),p=o.Xa;const R=!p;p=new En(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||bs(p,"https"),Ps(p),R?pd(p.toString(),h):gd(p.toString(),h)}else te(2);o.G=0,o.l&&o.l.sa(u),Ml(o),Pl(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function Ml(o){if(o.G=0,o.ka=[],o.l){const u=fl(o.h);(u.length!=0||o.i.length!=0)&&(U(o.ka,u),U(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function kl(o,u,h){var p=h instanceof En?Le(h):new En(h);if(p.g!="")u&&(p.g=u+"."+p.g),Ss(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new En(null);p&&bs(P,p),u&&(P.g=u),R&&Ss(P,R),h&&(P.l=h),p=P}return h=o.D,u=o.ya,h&&u&&wt(p,h,u),wt(p,"VER",o.la),xr(o,p),p}function Ll(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new bt(new Cs({eb:h})):new bt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}e=Fl.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ms(){}Ms.prototype.g=function(o,u){return new le(o,u)};function le(o,u){J.call(this),this.g=new Sl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Bn(this)}x(le,J),le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},le.prototype.close=function(){to(this.g)},le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ft(o),o=h);u.i.push(new sd(u.Ya++,o)),u.G==3&&Ns(u)},le.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,le.aa.N.call(this)};function Ul(o){Hi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const h in u){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}x(Ul,Hi);function Bl(){Ki.call(this),this.status=1}x(Bl,Ki);function Bn(o){this.g=o}x(Bn,Fl),Bn.prototype.ua=function(){st(this.g,"a")},Bn.prototype.ta=function(o){st(this.g,new Ul(o))},Bn.prototype.sa=function(o){st(this.g,new Bl)},Bn.prototype.ra=function(){st(this.g,"b")},Ms.prototype.createWebChannel=Ms.prototype.g,le.prototype.send=le.prototype.o,le.prototype.open=le.prototype.m,le.prototype.close=le.prototype.close,xh=function(){return new Ms},Dh=function(){return Is()},Vh=yn,jo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,Qs=ws,nl.COMPLETE="complete",Ch=nl,Xa.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",J.prototype.listen=J.prototype.K,Fr=Xa,bt.prototype.listenOnce=bt.prototype.L,bt.prototype.getLastError=bt.prototype.Ka,bt.prototype.getLastErrorCode=bt.prototype.Ba,bt.prototype.getStatus=bt.prototype.Z,bt.prototype.getResponseJson=bt.prototype.Oa,bt.prototype.getResponseText=bt.prototype.oa,bt.prototype.send=bt.prototype.ea,bt.prototype.setWithCredentials=bt.prototype.Ha,Ph=bt}).apply(typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{});const bu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Th("@firebase/firestore");function Mr(){return xn.logLevel}function K(e,...t){if(xn.logLevel<=ct.DEBUG){const n=t.map(Ia);xn.debug(`Firestore (${dr}): ${e}`,...n)}}function qe(e,...t){if(xn.logLevel<=ct.ERROR){const n=t.map(Ia);xn.error(`Firestore (${dr}): ${e}`,...n)}}function sr(e,...t){if(xn.logLevel<=ct.WARN){const n=t.map(Ia);xn.warn(`Firestore (${dr}): ${e}`,...n)}}function Ia(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e="Unexpected state"){const t=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+e;throw qe(t),new Error(t)}function yt(e,t){e||et()}function rt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends fr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class x_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class N_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class O_{constructor(t){this.t=t,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){yt(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new an;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new an,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new an)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(yt(typeof r.accessToken=="string"),new Nh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return yt(t===null||typeof t=="string"),new Yt(t)}}class M_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new M_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){yt(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(yt(typeof n.token=="string"),this.R=n.token,new L_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=U_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function dt(e,t){return e<t?-1:e>t?1:0}function ir(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Nt.fromMillis(Date.now())}static fromDate(t){return Nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dt(this.nanoseconds,t.nanoseconds):dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new nt(t)}static min(){return new nt(new Nt(0,0))}static max(){return new nt(new Nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,n,r){n===void 0?n=0:n>t.length&&et(),r===void 0?r=t.length-n:r>t.length-n&&et(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return is.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof is?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class At extends is{construct(t,n,r){return new At(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new G(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new At(n)}static emptyPath(){return new At([])}}const B_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends is{construct(t,n,r){return new jt(t,n,r)}static isValidIdentifier(t){return B_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new G(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new G(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(At.fromString(t))}static fromName(t){return new Q(At.fromString(t).popFirst(5))}static empty(){return new Q(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new At(t.slice()))}}function j_(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=nt.fromTimestamp(r===1e9?new Nt(n+1,0):new Nt(n,r));return new cn(s,Q.empty(),t)}function $_(e){return new cn(e.readTime,e.key,-1)}class cn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new cn(nt.min(),Q.empty(),-1)}static max(){return new cn(nt.max(),Q.empty(),-1)}}function q_(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Q.comparator(e.documentKey,t.documentKey),n!==0?n:dt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==H_)throw e;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):D.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):D.reject(n)}static resolve(t){return new D((n,r)=>{n(t)})}static reject(t){return new D((n,r)=>{r(t)})}static waitFor(t){return new D((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=D.resolve(!1);for(const r of t)n=n.next(s=>s?D.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new D((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const f=c;n(t[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new D((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function z_(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}wa.oe=-1;function Ci(e){return e==null}function ui(e){return e===0&&1/e==-1/0}function W_(e){return typeof e=="number"&&Number.isInteger(e)&&!ui(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function pr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Mh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n){this.comparator=t,this.root=n||Bt.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new js(this.root,t,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new js(this.root,t,this.comparator,!0)}}class js{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Bt.RED,this.left=s??Bt.EMPTY,this.right=i??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Bt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw et();const t=this.left.check();if(t!==this.right.check())throw et();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw et()}get value(){throw et()}get color(){throw et()}get left(){throw et()}get right(){throw et()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Bt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pu(this.data.getIterator())}getIteratorFrom(t){return new Pu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $t(this.comparator);return n.data=t,n}}class Pu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.fields=t,t.sort(jt.comparator)}static empty(){return new Ee([])}unionWith(t){let n=new $t(jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ee(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ir(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kh("Invalid base64 string: "+i):i}}(t);return new qt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new qt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const G_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(e){if(yt(!!e),typeof e=="string"){let t=0;const n=G_.exec(e);if(yt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(e.seconds),nanos:Pt(e.nanos)}}function Pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Nn(e){return typeof e=="string"?qt.fromBase64String(e):qt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ra(e){const t=e.mapValue.fields.__previous_value__;return Aa(t)?Ra(t):t}function os(e){const t=hn(e.mapValue.fields.__local_write_time__.timestampValue);return new Nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t,n,r,s,i,a,l,c,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class as{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof as&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={mapValue:{}};function On(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Aa(e)?4:X_(e)?9007199254740991:Y_(e)?10:11:et()}function Ne(e,t){if(e===t)return!0;const n=On(e);if(n!==On(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return os(e).isEqual(os(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=hn(s.timestampValue),l=hn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Nn(s.bytesValue).isEqual(Nn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Pt(s.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pt(s.integerValue)===Pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Pt(s.doubleValue),l=Pt(i.doubleValue);return a===l?ui(a)===ui(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return ir(e.arrayValue.values||[],t.arrayValue.values||[],Ne);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Su(a)!==Su(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ne(a[c],l[c])))return!1;return!0}(e,t);default:return et()}}function ls(e,t){return(e.values||[]).find(n=>Ne(n,t))!==void 0}function or(e,t){if(e===t)return 0;const n=On(e),r=On(t);if(n!==r)return dt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return dt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Pt(i.integerValue||i.doubleValue),c=Pt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Cu(e.timestampValue,t.timestampValue);case 4:return Cu(os(e),os(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Nn(i),c=Nn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=dt(l[f],c[f]);if(d!==0)return d}return dt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=dt(Pt(i.latitude),Pt(a.latitude));return l!==0?l:dt(Pt(i.longitude),Pt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Vu(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,f,d;const g=i.fields||{},A=a.fields||{},S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=(c=A.value)===null||c===void 0?void 0:c.arrayValue,L=dt(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return L!==0?L:Vu(S,x)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===$s.mapValue&&a===$s.mapValue)return 0;if(i===$s.mapValue)return 1;if(a===$s.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const A=dt(c[g],d[g]);if(A!==0)return A;const S=or(l[c[g]],f[d[g]]);if(S!==0)return S}return dt(c.length,d.length)}(e.mapValue,t.mapValue);default:throw et()}}function Cu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return dt(e,t);const n=hn(e),r=hn(t),s=dt(n.seconds,r.seconds);return s!==0?s:dt(n.nanos,r.nanos)}function Vu(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=or(n[s],r[s]);if(i)return i}return dt(n.length,r.length)}function ar(e){return $o(e)}function $o(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=hn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Nn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Q.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$o(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${$o(n.fields[a])}`;return s+"}"}(e.mapValue):et()}function qo(e){return!!e&&"integerValue"in e}function ba(e){return!!e&&"arrayValue"in e}function Du(e){return!!e&&"nullValue"in e}function xu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ys(e){return!!e&&"mapValue"in e}function Y_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Wr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return pr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Wr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Wr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function X_(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.value=t}static empty(){return new me({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ys(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wr(n)}setAll(t){let n=jt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Wr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ys(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ne(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){pr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new me(Wr(this.value))}}function Lh(e){const t=[];return pr(e.fields,(n,r)=>{const s=new jt([n]);if(Ys(r)){const i=Lh(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ee(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Jt(t,0,nt.min(),nt.min(),nt.min(),me.empty(),0)}static newFoundDocument(t,n,r,s){return new Jt(t,1,n,nt.min(),r,s,0)}static newNoDocument(t,n){return new Jt(t,2,n,nt.min(),nt.min(),me.empty(),0)}static newUnknownDocument(t,n){return new Jt(t,3,n,nt.min(),nt.min(),me.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.position=t,this.inclusive=n}}function Nu(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),n.key):r=or(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ou(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ne(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n="asc"){this.field=t,this.dir=n}}function J_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{}class xt extends Fh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new ty(t,n,r):n==="array-contains"?new ry(t,r):n==="in"?new sy(t,r):n==="not-in"?new iy(t,r):n==="array-contains-any"?new oy(t,r):new xt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new ey(t,r):new ny(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(or(n,this.value)):n!==null&&On(this.value)===On(n)&&this.matchesComparison(or(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends Fh{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Oe(t,n)}matches(t){return Uh(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uh(e){return e.op==="and"}function Bh(e){return Z_(e)&&Uh(e)}function Z_(e){for(const t of e.filters)if(t instanceof Oe)return!1;return!0}function Ho(e){if(e instanceof xt)return e.field.canonicalString()+e.op.toString()+ar(e.value);if(Bh(e))return e.filters.map(t=>Ho(t)).join(",");{const t=e.filters.map(n=>Ho(n)).join(",");return`${e.op}(${t})`}}function jh(e,t){return e instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.field.isEqual(s.field)&&Ne(r.value,s.value)}(e,t):e instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&jh(a,s.filters[l]),!0):!1}(e,t):void et()}function $h(e){return e instanceof xt?function(n){return`${n.field.canonicalString()} ${n.op} ${ar(n.value)}`}(e):e instanceof Oe?function(n){return n.op.toString()+" {"+n.getFilters().map($h).join(" ,")+"}"}(e):"Filter"}class ty extends xt{constructor(t,n,r){super(t,n,r),this.key=Q.fromName(r.referenceValue)}matches(t){const n=Q.comparator(t.key,this.key);return this.matchesComparison(n)}}class ey extends xt{constructor(t,n){super(t,"in",n),this.keys=qh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ny extends xt{constructor(t,n){super(t,"not-in",n),this.keys=qh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function qh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class ry extends xt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ba(n)&&ls(n.arrayValue,this.value)}}class sy extends xt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ls(this.value.arrayValue,n)}}class iy extends xt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ls(this.value.arrayValue,n)}}class oy extends xt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ba(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Mu(e,t=null,n=[],r=[],s=null,i=null,a=null){return new ay(e,t,n,r,s,i,a)}function Sa(e){const t=rt(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ho(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ci(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ar(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ar(r)).join(",")),t.ue=n}return t.ue}function Pa(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!J_(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!jh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ou(e.startAt,t.startAt)&&Ou(e.endAt,t.endAt)}function Ko(e){return Q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ly(e,t,n,r,s,i,a,l){return new Vi(e,t,n,r,s,i,a,l)}function Hh(e){return new Vi(e)}function ku(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function uy(e){return e.collectionGroup!==null}function Gr(e){const t=rt(e);if(t.ce===null){t.ce=[];const n=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $t(jt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.ce.push(new hi(i,r))}),n.has(jt.keyField().canonicalString())||t.ce.push(new hi(jt.keyField(),r))}return t.ce}function Ce(e){const t=rt(e);return t.le||(t.le=cy(t,Gr(e))),t.le}function cy(e,t){if(e.limitType==="F")return Mu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hi(s.field,i)});const n=e.endAt?new ci(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ci(e.startAt.position,e.startAt.inclusive):null;return Mu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function zo(e,t,n){return new Vi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Di(e,t){return Pa(Ce(e),Ce(t))&&e.limitType===t.limitType}function Kh(e){return`${Sa(Ce(e))}|lt:${e.limitType}`}function Kn(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$h(s)).join(", ")}]`),Ci(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ar(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ar(s)).join(",")),`Target(${r})`}(Ce(e))}; limitType=${e.limitType})`}function xi(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const f=Nu(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,Gr(r),s)||r.endAt&&!function(a,l,c){const f=Nu(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,Gr(r),s))}(e,t)}function hy(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function zh(e){return(t,n)=>{let r=!1;for(const s of Gr(e)){const i=fy(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fy(e,t,n){const r=e.field.isKeyField()?Q.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),f=l.data.field(i);return c!==null&&f!==null?or(c,f):et()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return et()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){pr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Mh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Rt(Q.comparator);function He(){return dy}const Wh=new Rt(Q.comparator);function Ur(...e){let t=Wh;for(const n of e)t=t.insert(n.key,n);return t}function Gh(e){let t=Wh;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function bn(){return Qr()}function Qh(){return Qr()}function Qr(){return new gr(e=>e.toString(),(e,t)=>e.isEqual(t))}const py=new Rt(Q.comparator),gy=new $t(Q.comparator);function at(...e){let t=gy;for(const n of e)t=t.add(n);return t}const my=new $t(dt);function _y(){return my}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(t)?"-0":t}}function Yh(e){return{integerValue:""+e}}function yy(e,t){return W_(t)?Yh(t):Ca(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this._=void 0}}function vy(e,t,n){return e instanceof fi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Aa(i)&&(i=Ra(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,t):e instanceof us?Jh(e,t):e instanceof cs?Zh(e,t):function(s,i){const a=Xh(s,i),l=Lu(a)+Lu(s.Pe);return qo(a)&&qo(s.Pe)?Yh(l):Ca(s.serializer,l)}(e,t)}function Ey(e,t,n){return e instanceof us?Jh(e,t):e instanceof cs?Zh(e,t):n}function Xh(e,t){return e instanceof di?function(r){return qo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class fi extends Ni{}class us extends Ni{constructor(t){super(),this.elements=t}}function Jh(e,t){const n=tf(t);for(const r of e.elements)n.some(s=>Ne(s,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends Ni{constructor(t){super(),this.elements=t}}function Zh(e,t){let n=tf(t);for(const r of e.elements)n=n.filter(s=>!Ne(s,r));return{arrayValue:{values:n}}}class di extends Ni{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function Lu(e){return Pt(e.integerValue||e.doubleValue)}function tf(e){return ba(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ty(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof us&&s instanceof us||r instanceof cs&&s instanceof cs?ir(r.elements,s.elements,Ne):r instanceof di&&s instanceof di?Ne(r.Pe,s.Pe):r instanceof fi&&s instanceof fi}(e.transform,t.transform)}class Iy{constructor(t,n){this.version=t,this.transformResults=n}}class Ve{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ve}static exists(t){return new Ve(void 0,t)}static updateTime(t){return new Ve(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xs(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Oi{}function ef(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new rf(e.key,Ve.none()):new ms(e.key,e.data,Ve.none());{const n=e.data,r=me.empty();let s=new $t(jt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kn(e.key,r,new Ee(s.toArray()),Ve.none())}}function wy(e,t,n){e instanceof ms?function(s,i,a){const l=s.value.clone(),c=Uu(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof kn?function(s,i,a){if(!Xs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Uu(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(nf(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Yr(e,t,n,r){return e instanceof ms?function(i,a,l,c){if(!Xs(i.precondition,a))return l;const f=i.value.clone(),d=Bu(i.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof kn?function(i,a,l,c){if(!Xs(i.precondition,a))return l;const f=Bu(i.fieldTransforms,c,a),d=a.data;return d.setAll(nf(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(e,t,n,r):function(i,a,l){return Xs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function Ay(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Xh(r.transform,s||null);i!=null&&(n===null&&(n=me.empty()),n.set(r.field,i))}return n||null}function Fu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ir(r,s,(i,a)=>Ty(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ms extends Oi{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kn extends Oi{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nf(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Uu(e,t,n){const r=new Map;yt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Ey(a,l,n[s]))}return r}function Bu(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,vy(i,a,t))}return r}class rf extends Oi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ry extends Oi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&wy(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Yr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Yr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Qh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=ef(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(nt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),at())}isEqual(t){return this.batchId===t.batchId&&ir(this.mutations,t.mutations,(n,r)=>Fu(n,r))&&ir(this.baseMutations,t.baseMutations,(n,r)=>Fu(n,r))}}class Va{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){yt(t.mutations.length===r.length);let s=function(){return py}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Va(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,ut;function Cy(e){switch(e){default:return et();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function sf(e){if(e===void 0)return qe("GRPC error has no .code"),N.UNKNOWN;switch(e){case Ct.OK:return N.OK;case Ct.CANCELLED:return N.CANCELLED;case Ct.UNKNOWN:return N.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return N.INTERNAL;case Ct.UNAVAILABLE:return N.UNAVAILABLE;case Ct.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ct.NOT_FOUND:return N.NOT_FOUND;case Ct.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ct.ABORTED:return N.ABORTED;case Ct.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ct.DATA_LOSS:return N.DATA_LOSS;default:return et()}}(ut=Ct||(Ct={}))[ut.OK=0]="OK",ut[ut.CANCELLED=1]="CANCELLED",ut[ut.UNKNOWN=2]="UNKNOWN",ut[ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ut[ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ut[ut.NOT_FOUND=5]="NOT_FOUND",ut[ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",ut[ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",ut[ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",ut[ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ut[ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ut[ut.ABORTED=10]="ABORTED",ut[ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",ut[ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",ut[ut.INTERNAL=13]="INTERNAL",ut[ut.UNAVAILABLE=14]="UNAVAILABLE",ut[ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Cn([4294967295,4294967295],0);function ju(e){const t=Vy().encode(e),n=new Sh;return n.update(t),new Uint8Array(n.digest())}function $u(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Cn([n,r],0),new Cn([s,i],0)]}class Da{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Br(`Invalid padding: ${n}`);if(r<0)throw new Br(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Br(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Br(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=Cn.fromNumber(this.Ie)}Ee(t,n,r){let s=t.add(n.multiply(Cn.fromNumber(r)));return s.compare(Dy)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=ju(t),[r,s]=$u(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Da(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const n=ju(t),[r,s]=$u(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,_s.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Mi(nt.min(),s,new Rt(dt),He(),at())}}class _s{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new _s(r,n,at(),at(),at())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class of{constructor(t,n){this.targetId=t,this.me=n}}class af{constructor(t,n,r=qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qu{constructor(){this.fe=0,this.ge=Ku(),this.pe=qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=at(),n=at(),r=at();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:et()}}),new _s(this.pe,this.ye,t,n,r)}Ce(){this.we=!1,this.ge=Ku()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,yt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xy{constructor(t){this.Le=t,this.Be=new Map,this.ke=He(),this.qe=Hu(),this.Qe=new Rt(dt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:et()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(t){const n=t.targetId,r=t.me.count,s=this.Je(n);if(s){const i=s.target;if(Ko(i))if(r===0){const a=new Q(i.path);this.Ue(n,a,Jt.newNoDocument(a,nt.min()))}else yt(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(n);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Nn(r).toUint8Array()}catch(c){if(c instanceof kh)return sr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Da(a,s,i)}catch(c){return sr(c instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(t){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Ko(l.target)){const c=new Q(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,Jt.newNoDocument(c,t))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=at();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const f=this.Je(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new Mi(t,n,this.Qe,this.ke,r);return this.ke=He(),this.qe=Hu(),this.Qe=new Rt(dt),s}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new qu,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new $t(dt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||K("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new qu),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Hu(){return new Rt(Q.comparator)}function Ku(){return new Rt(Q.comparator)}const Ny={asc:"ASCENDING",desc:"DESCENDING"},Oy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},My={and:"AND",or:"OR"};class ky{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Wo(e,t){return e.useProto3Json||Ci(t)?t:{value:t}}function pi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lf(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ly(e,t){return pi(e,t.toTimestamp())}function De(e){return yt(!!e),nt.fromTimestamp(function(n){const r=hn(n);return new Nt(r.seconds,r.nanos)}(e))}function xa(e,t){return Go(e,t).canonicalString()}function Go(e,t){const n=function(s){return new At(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function uf(e){const t=At.fromString(e);return yt(pf(t)),t}function Qo(e,t){return xa(e.databaseId,t.path)}function vo(e,t){const n=uf(t);if(n.get(1)!==e.databaseId.projectId)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Q(hf(n))}function cf(e,t){return xa(e.databaseId,t)}function Fy(e){const t=uf(e);return t.length===4?At.emptyPath():hf(t)}function Yo(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function hf(e){return yt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zu(e,t,n){return{name:Qo(e,t),fields:n.value.mapValue.fields}}function Uy(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:et()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(yt(d===void 0||typeof d=="string"),qt.fromBase64String(d||"")):(yt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?N.UNKNOWN:sf(f.code);return new G(d,f.message||"")}(a);n=new af(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=vo(e,r.document.name),i=De(r.document.updateTime),a=r.document.createTime?De(r.document.createTime):nt.min(),l=new me({mapValue:{fields:r.document.fields}}),c=Jt.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new Js(f,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=vo(e,r.document),i=r.readTime?De(r.readTime):nt.min(),a=Jt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Js([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=vo(e,r.document),i=r.removedTargetIds||[];n=new Js([],i,s,null)}else{if(!("filter"in t))return et();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Py(s,i),l=r.targetId;n=new of(l,a)}}return n}function By(e,t){let n;if(t instanceof ms)n={update:zu(e,t.key,t.value)};else if(t instanceof rf)n={delete:Qo(e,t.key)};else if(t instanceof kn)n={update:zu(e,t.key,t.data),updateMask:Qy(t.fieldMask)};else{if(!(t instanceof Ry))return et();n={verify:Qo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof fi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof us)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof di)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw et()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ly(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:et()}(e,t.precondition)),n}function jy(e,t){return e&&e.length>0?(yt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?De(s.updateTime):De(i);return a.isEqual(nt.min())&&(a=De(i)),new Iy(a,s.transformResults||[])}(n,t))):[]}function $y(e,t){return{documents:[cf(e,t.path)]}}function qy(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cf(e,s);const i=function(f){if(f.length!==0)return df(Oe.create(f,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(A){return{field:zn(A.field),direction:zy(A.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Wo(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:n,parent:s}}function Hy(e){let t=Fy(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){yt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(g){const A=ff(g);return A instanceof Oe&&Bh(A)?A.getFilters():[A]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(A=>function(x){return new hi(Wn(x.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(A))}(n.orderBy));let l=null;n.limit&&(l=function(g){let A;return A=typeof g=="object"?g.value:g,Ci(A)?null:A}(n.limit));let c=null;n.startAt&&(c=function(g){const A=!!g.before,S=g.values||[];return new ci(S,A)}(n.startAt));let f=null;return n.endAt&&(f=function(g){const A=!g.before,S=g.values||[];return new ci(S,A)}(n.endAt)),ly(t,s,a,i,l,"F",c,f)}function Ky(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return et()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ff(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wn(n.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wn(n.unaryFilter.field);return xt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wn(n.unaryFilter.field);return xt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wn(n.unaryFilter.field);return xt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return et()}}(e):e.fieldFilter!==void 0?function(n){return xt.create(Wn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return et()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Oe.create(n.compositeFilter.filters.map(r=>ff(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return et()}}(n.compositeFilter.op))}(e):et()}function zy(e){return Ny[e]}function Wy(e){return Oy[e]}function Gy(e){return My[e]}function zn(e){return{fieldPath:e.canonicalString()}}function Wn(e){return jt.fromServerFormat(e.fieldPath)}function df(e){return e instanceof xt?function(n){if(n.op==="=="){if(xu(n.value))return{unaryFilter:{field:zn(n.field),op:"IS_NAN"}};if(Du(n.value))return{unaryFilter:{field:zn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xu(n.value))return{unaryFilter:{field:zn(n.field),op:"IS_NOT_NAN"}};if(Du(n.value))return{unaryFilter:{field:zn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zn(n.field),op:Wy(n.op),value:n.value}}}(e):e instanceof Oe?function(n){const r=n.getFilters().map(s=>df(s));return r.length===1?r[0]:{compositeFilter:{op:Gy(n.op),filters:r}}}(e):et()}function Qy(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function pf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,n,r,s,i=nt.min(),a=nt.min(),l=qt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new nn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t){this.ct=t}}function Xy(e){const t=Hy({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?zo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.un=new Zy}addToCollectionParentIndex(t,n){return this.un.add(n),D.resolve()}getCollectionParents(t,n){return D.resolve(this.un.getEntries(n))}addFieldIndex(t,n){return D.resolve()}deleteFieldIndex(t,n){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,n){return D.resolve()}getDocumentsMatchingTarget(t,n){return D.resolve(null)}getIndexType(t,n){return D.resolve(0)}getFieldIndexes(t,n){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,n){return D.resolve(cn.min())}getMinOffsetFromCollectionGroup(t,n){return D.resolve(cn.min())}updateCollectionGroup(t,n,r){return D.resolve()}updateIndexEntries(t,n){return D.resolve()}}class Zy{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new $t(At.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new $t(At.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new lr(0)}static kn(){return new lr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.changes=new gr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Yr(r.mutation,s,Ee.empty(),Nt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,at()).next(()=>r))}getLocalViewOfDocuments(t,n,r=at()){const s=bn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Ur();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=bn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,at()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=He();const a=Qr(),l=function(){return Qr()}();return n.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof kn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Yr(d.mutation,f,d.mutation.getFieldMask(),Nt.now())):a.set(f.key,Ee.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var g;return l.set(f,new ev(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Qr();let s=new Rt((a,l)=>a-l),i=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||Ee.empty();d=l.applyToLocalView(f,d),r.set(c,d);const g=(s.get(l.batchId)||at()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,g=Qh();d.forEach(A=>{if(!i.has(A)){const S=ef(n.get(A),r.get(A));S!==null&&g.set(A,S),i=i.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):uy(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):D.resolve(bn());let l=-1,c=i;return a.next(f=>D.forEach(f,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(t,d).next(A=>{c=c.insert(d,A)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,c,f,at())).next(d=>({batchId:l,changes:Gh(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Q(n)).next(r=>{let s=Ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Ur();return this.indexManager.getCollectionParents(t,i).next(l=>D.forEach(l,c=>{const f=function(g,A){return new Vi(A,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((g,A)=>{a=a.insert(g,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Jt.newInvalidDocument(d)))});let l=Ur();return a.forEach((c,f)=>{const d=i.get(c);d!==void 0&&Yr(d.mutation,f,Ee.empty(),Nt.now()),xi(n,f)&&(l=l.insert(c,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,n){return D.resolve(this.hr.get(n))}saveBundleMetadata(t,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:De(s.createTime)}}(n)),D.resolve()}getNamedQuery(t,n){return D.resolve(this.Pr.get(n))}saveNamedQuery(t,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Xy(s.bundledQuery),readTime:De(s.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.overlays=new Rt(Q.comparator),this.Ir=new Map}getOverlay(t,n){return D.resolve(this.overlays.get(n))}getOverlays(t,n){const r=bn();return D.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),D.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(t,n,r){const s=bn(),i=n.length+1,a=new Q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Rt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=bn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=bn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return D.resolve(l)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Sy(n,r));let i=this.Ir.get(n);i===void 0&&(i=at(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.Tr=new $t(Mt.Er),this.dr=new $t(Mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,n){const r=new Mt(t,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Vr(new Mt(t,n))}mr(t,n){t.forEach(r=>this.removeReference(r,n))}gr(t){const n=new Q(new At([])),r=new Mt(n,t),s=new Mt(n,t+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const n=new Q(new At([])),r=new Mt(n,t),s=new Mt(n,t+1);let i=at();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Mt(t,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Mt{constructor(t,n){this.key=t,this.wr=n}static Er(t,n){return Q.comparator(t.key,n.key)||dt(t.wr,n.wr)}static Ar(t,n){return dt(t.wr,n.wr)||Q.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $t(Mt.Er)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new by(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Mt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,n){return D.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Mt(n,0),s=new Mt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new $t(dt);return n.forEach(s=>{const i=new Mt(s,0),a=new Mt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new Mt(new Q(i),0);let l=new $t(dt);return this.br.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(t){const n=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){yt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(n.mutations,s=>{const i=new Mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,n){const r=new Mt(n,0),s=this.br.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Fr(t,n){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const n=this.vr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t){this.Mr=t,this.docs=function(){return new Rt(Q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(t,n){let r=He();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Jt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=He();const a=n.path,l=new Q(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||q_($_(d),r)<=0||(s.has(d.key)||xi(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(t,n,r,s){et()}Or(t,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new lv(this)}getSize(t){return D.resolve(this.size)}}class lv extends tv{constructor(t){super(),this.cr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),D.waitFor(n)}getFromCache(t,n){return this.cr.getEntry(t,n)}getAllFromCache(t,n){return this.cr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t){this.persistence=t,this.Nr=new gr(n=>Sa(n),Pa),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Na,this.targetCount=0,this.kr=lr.Bn()}forEachTarget(t,n){return this.Nr.forEach((r,s)=>n(s)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),D.resolve()}Kn(t){this.Nr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.kr=new lr(n),this.highestTargetId=n),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,n){return this.Kn(n),this.targetCount+=1,D.resolve()}updateTargetData(t,n){return this.Kn(n),D.resolve()}removeTargetData(t,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,n){const r=this.Nr.get(n)||null;return D.resolve(r)}addMatchingKeys(t,n,r){return this.Br.Rr(n,r),D.resolve()}removeMatchingKeys(t,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Br.gr(n),D.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Br.yr(n);return D.resolve(r)}containsKey(t,n){return D.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t,n){this.qr={},this.overlays={},this.Qr=new wa(0),this.Kr=!1,this.Kr=!0,this.$r=new iv,this.referenceDelegate=t(this),this.Ur=new uv(this),this.indexManager=new Jy,this.remoteDocumentCache=function(s){return new av(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Yy(n),this.Gr=new rv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new sv,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.qr[t.toKey()];return r||(r=new ov(n,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,n,r){K("MemoryPersistence","Starting transaction:",t);const s=new hv(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(t,n){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,n)))}}class hv extends K_{constructor(t){super(),this.currentSequenceNumber=t}}class Oa{constructor(t){this.persistence=t,this.Jr=new Na,this.Yr=null}static Zr(t){return new Oa(t)}get Xr(){if(this.Yr)return this.Yr;throw et()}addReference(t,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),D.resolve()}removeReference(t,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,n){return this.Xr.add(n.toString()),D.resolve()}removeTarget(t,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}zr(){this.Yr=new Set}jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(t,s).next(i=>{i||n.removeEntry(s,nt.min())})}).next(()=>(this.Yr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ei(t,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(t){return 0}ei(t,n){return D.or([()=>D.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Hr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(t,n){let r=at(),s=at();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ma(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return pm()?8:z_(fm())>0?6:4}()}initialize(t,n){this.Ji=t,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.Yi(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new fv;return this.Xi(t,n,a).next(l=>{if(i.result=l,this.zi)return this.es(t,n,a,l.size)})}).next(()=>i.result)}es(t,n,r,s){return r.documentReadCount<this.ji?(Mr()<=ct.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Kn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Mr()<=ct.DEBUG&&K("QueryEngine","Query:",Kn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Mr()<=ct.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Kn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ce(n))):D.resolve())}Yi(t,n){if(ku(n))return D.resolve(null);let r=Ce(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zo(n,null,"F"),r=Ce(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=at(...i);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const f=this.ts(n,l);return this.ns(n,f,a,c.readTime)?this.Yi(t,zo(n,null,"F")):this.rs(t,f,n,c)}))})))}Zi(t,n,r,s){return ku(n)||s.isEqual(nt.min())?D.resolve(null):this.Ji.getDocuments(t,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?D.resolve(null):(Mr()<=ct.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kn(n)),this.rs(t,a,n,j_(s,-1)).next(l=>l))})}ts(t,n){let r=new $t(zh(t));return n.forEach((s,i)=>{xi(t,i)&&(r=r.add(i))}),r}ns(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,n,r){return Mr()<=ct.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Kn(n)),this.Ji.getDocumentsMatchingQuery(t,n,cn.min(),r)}rs(t,n,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,n,r,s){this.persistence=t,this.ss=n,this.serializer=s,this.os=new Rt(dt),this._s=new gr(i=>Sa(i),Pa),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.os))}}function gv(e,t,n,r){return new pv(e,t,n,r)}async function gf(e,t){const n=rt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=at();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:l}))})})}function mv(e,t){const n=rt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,f,d){const g=f.batch,A=g.keys();let S=D.resolve();return A.forEach(x=>{S=S.next(()=>d.getEntry(c,x)).next(L=>{const U=f.docVersions.get(x);yt(U!==null),L.version.compareTo(U)<0&&(g.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),d.addEntry(L)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=at();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function mf(e){const t=rt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ur.getLastRemoteSnapshotVersion(n))}function _v(e,t){const n=rt(e),r=t.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];t.targetChanges.forEach((d,g)=>{const A=s.get(g);if(!A)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,g)));let S=A.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?S=S.withResumeToken(qt.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(g,S),function(L,U,z){return L.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(A,S,d)&&l.push(n.Ur.updateTargetData(i,S))});let c=He(),f=at();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(yv(i,a,t.documentUpdates).next(d=>{c=d.Ps,f=d.Is})),!r.isEqual(nt.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,f)).next(()=>c)}).then(i=>(n.os=s,i))}function yv(e,t,n){let r=at(),s=at();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=He();return n.forEach((l,c)=>{const f=i.get(l);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(nt.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function vv(e,t){const n=rt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ev(e,t){const n=rt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,t).next(i=>i?(s=i,D.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new nn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(t,r.targetId)),r})}async function Xo(e,t,n){const r=rt(e),s=r.os.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!gs(a))throw a;K("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Wu(e,t,n){const r=rt(e);let s=nt.min(),i=at();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,d){const g=rt(c),A=g._s.get(d);return A!==void 0?D.resolve(g.os.get(A)):g.Ur.getTargetData(f,d)}(r,a,Ce(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,n?s:nt.min(),n?i:at())).next(l=>(Tv(r,hy(t),l),{documents:l,Ts:i})))}function Tv(e,t,n){let r=e.us.get(t)||nt.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.us.set(t,r)}class Gu{constructor(){this.activeTargetIds=_y()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Iv{constructor(){this.so=new Gu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,n,r){this.oo[t]=n}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Gu,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs=null;function Eo(){return qs===null?qs=function(){return 268435456+Math.round(2147483648*Math.random())}():qs++,"0x"+qs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection";class bv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=Eo(),c=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,a),this.No(n,c,f,s).then(d=>(K("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw sr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=Av[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,n,r,s){const i=Eo();return new Promise((a,l)=>{const c=new Ph;c.setWithCredentials(!0),c.listenOnce(Ch.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qs.NO_ERROR:const d=c.getResponseJson();K(Gt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Qs.TIMEOUT:K(Gt,`RPC '${t}' ${i} timed out`),l(new G(N.DEADLINE_EXCEEDED,"Request time out"));break;case Qs.HTTP_ERROR:const g=c.getStatus();if(K(Gt,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const x=function(U){const z=U.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(z)>=0?z:N.UNKNOWN}(S.status);l(new G(x,S.message))}else l(new G(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new G(N.UNAVAILABLE,"Connection failed."));break;default:et()}}finally{K(Gt,`RPC '${t}' ${i} completed.`)}});const f=JSON.stringify(s);K(Gt,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",f,r,15)})}Bo(t,n,r){const s=Eo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=xh(),l=Dh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");K(Gt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);let A=!1,S=!1;const x=new Rv({Io:U=>{S?K(Gt,`Not sending because RPC '${t}' stream ${s} is closed:`,U):(A||(K(Gt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),A=!0),K(Gt,`RPC '${t}' stream ${s} sending:`,U),g.send(U))},To:()=>g.close()}),L=(U,z,Y)=>{U.listen(z,Z=>{try{Y(Z)}catch(H){setTimeout(()=>{throw H},0)}})};return L(g,Fr.EventType.OPEN,()=>{S||(K(Gt,`RPC '${t}' stream ${s} transport opened.`),x.yo())}),L(g,Fr.EventType.CLOSE,()=>{S||(S=!0,K(Gt,`RPC '${t}' stream ${s} transport closed`),x.So())}),L(g,Fr.EventType.ERROR,U=>{S||(S=!0,sr(Gt,`RPC '${t}' stream ${s} transport errored:`,U),x.So(new G(N.UNAVAILABLE,"The operation could not be completed")))}),L(g,Fr.EventType.MESSAGE,U=>{var z;if(!S){const Y=U.data[0];yt(!!Y);const Z=Y,H=Z.error||((z=Z[0])===null||z===void 0?void 0:z.error);if(H){K(Gt,`RPC '${t}' stream ${s} received error:`,H);const mt=H.status;let Et=function(v){const T=Ct[v];if(T!==void 0)return sf(T)}(mt),I=H.message;Et===void 0&&(Et=N.INTERNAL,I="Unknown error status: "+mt+" with message "+H.message),S=!0,x.So(new G(Et,I)),g.close()}else K(Gt,`RPC '${t}' stream ${s} received:`,Y),x.bo(Y)}}),L(l,Vh.STAT_EVENT,U=>{U.stat===jo.PROXY?K(Gt,`RPC '${t}' stream ${s} detected buffering proxy`):U.stat===jo.NOPROXY&&K(Gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function To(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){return new ky(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,n,r,s,i,a,l,c){this.ui=t,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _f(t,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(qe(n.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(n)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{t(()=>{const s=new G(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,n){const r=this.h_(this.Yo);this.stream=this.T_(t,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return K("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return n=>{this.ui.enqueueAndForget(()=>this.Yo===t?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sv extends yf{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(t,n){return this.connection.Bo("Listen",t,n)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const n=Uy(this.serializer,t),r=function(i){if(!("targetChange"in i))return nt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?nt.min():a.readTime?De(a.readTime):nt.min()}(t);return this.listener.d_(n,r)}A_(t){const n={};n.database=Yo(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Ko(c)?{documents:$y(i,c)}:{query:qy(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lf(i,a.resumeToken);const f=Wo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(nt.min())>0){l.readTime=pi(i,a.snapshotVersion.toTimestamp());const f=Wo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Ky(this.serializer,t);r&&(n.labels=r),this.a_(n)}R_(t){const n={};n.database=Yo(this.serializer),n.removeTarget=t,this.a_(n)}}class Pv extends yf{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,n){return this.connection.Bo("Write",t,n)}E_(t){return yt(!!t.streamToken),this.lastStreamToken=t.streamToken,yt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){yt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const n=jy(t.writeResults,t.commitTime),r=De(t.commitTime);return this.listener.g_(r,n)}p_(){const t={};t.database=Yo(this.serializer),this.a_(t)}m_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>By(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(t,Go(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(N.UNKNOWN,i.toString())})}Lo(t,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Go(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Vv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qe(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=rt(c);f.L_.add(4),await ys(f),f.q_.set("Unknown"),f.L_.delete(4),await Li(f)}(this))})}),this.q_=new Vv(r,s)}}async function Li(e){if(Ln(e))for(const t of e.B_)await t(!0)}async function ys(e){for(const t of e.B_)await t(!1)}function vf(e,t){const n=rt(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),Ua(n)?Fa(n):mr(n).r_()&&La(n,t))}function ka(e,t){const n=rt(e),r=mr(n);n.N_.delete(t),r.r_()&&Ef(n,t),n.N_.size===0&&(r.r_()?r.o_():Ln(n)&&n.q_.set("Unknown"))}function La(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}mr(e).A_(t)}function Ef(e,t){e.Q_.xe(t),mr(e).R_(t)}function Fa(e){e.Q_=new xy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),mr(e).start(),e.q_.v_()}function Ua(e){return Ln(e)&&!mr(e).n_()&&e.N_.size>0}function Ln(e){return rt(e).L_.size===0}function Tf(e){e.Q_=void 0}async function xv(e){e.q_.set("Online")}async function Nv(e){e.N_.forEach((t,n)=>{La(e,t)})}async function Ov(e,t){Tf(e),Ua(e)?(e.q_.M_(t),Fa(e)):e.q_.set("Unknown")}async function Mv(e,t,n){if(e.q_.set("Online"),t instanceof af&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(e,t)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await gi(e,r)}else if(t instanceof Js?e.Q_.Ke(t):t instanceof of?e.Q_.He(t):e.Q_.We(t),!n.isEqual(nt.min()))try{const r=await mf(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(f);d&&i.N_.set(f,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,f)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(qt.EMPTY_BYTE_STRING,d.snapshotVersion)),Ef(i,c);const g=new nn(d.target,c,f,d.sequenceNumber);La(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await gi(e,r)}}async function gi(e,t,n){if(!gs(t))throw t;e.L_.add(1),await ys(e),e.q_.set("Offline"),n||(n=()=>mf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Li(e)})}function If(e,t){return t().catch(n=>gi(e,n,t))}async function Fi(e){const t=rt(e),n=fn(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;kv(t);)try{const s=await vv(t.localStore,r);if(s===null){t.O_.length===0&&n.o_();break}r=s.batchId,Lv(t,s)}catch(s){await gi(t,s)}wf(t)&&Af(t)}function kv(e){return Ln(e)&&e.O_.length<10}function Lv(e,t){e.O_.push(t);const n=fn(e);n.r_()&&n.V_&&n.m_(t.mutations)}function wf(e){return Ln(e)&&!fn(e).n_()&&e.O_.length>0}function Af(e){fn(e).start()}async function Fv(e){fn(e).p_()}async function Uv(e){const t=fn(e);for(const n of e.O_)t.m_(n.mutations)}async function Bv(e,t,n){const r=e.O_.shift(),s=Va.from(r,t,n);await If(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Fi(e)}async function jv(e,t){t&&fn(e).V_&&await async function(r,s){if(function(a){return Cy(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();fn(r).s_(),await If(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fi(r)}}(e,t),wf(e)&&Af(e)}async function Yu(e,t){const n=rt(e);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Ln(n);n.L_.add(3),await ys(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Li(n)}async function $v(e,t){const n=rt(e);t?(n.L_.delete(2),await Li(n)):t||(n.L_.add(2),await ys(n),n.q_.set("Unknown"))}function mr(e){return e.K_||(e.K_=function(n,r,s){const i=rt(n);return i.w_(),new Sv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Eo:xv.bind(null,e),Ro:Nv.bind(null,e),mo:Ov.bind(null,e),d_:Mv.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),Ua(e)?Fa(e):e.q_.set("Unknown")):(await e.K_.stop(),Tf(e))})),e.K_}function fn(e){return e.U_||(e.U_=function(n,r,s){const i=rt(n);return i.w_(),new Pv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Fv.bind(null,e),mo:jv.bind(null,e),f_:Uv.bind(null,e),g_:Bv.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await Fi(e)):(await e.U_.stop(),e.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Ba(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ja(e,t){if(qe("AsyncQueue",`${t}: ${e}`),gs(e))return new G(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.comparator=t?(n,r)=>t(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ur(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new er(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof er)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new er;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.W_=new Rt(Q.comparator)}track(t){const n=t.doc.key,r=this.W_.get(n);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(n,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(n):t.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):et():this.W_=this.W_.insert(n,t)}G_(){const t=[];return this.W_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ur{constructor(t,n,r,s,i,a,l,c,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new ur(t,n,er.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Di(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Hv{constructor(){this.queries=Ju(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=rt(n),i=s.queries;s.queries=Ju(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new G(N.ABORTED,"Firestore shutting down"))}}function Ju(){return new gr(e=>Kh(e),Di)}async function Kv(e,t){const n=rt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.H_()&&t.J_()&&(r=2):(i=new qv,r=t.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=ja(a,`Initialization of query '${Kn(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.j_.push(t),t.Z_(n.onlineState),i.z_&&t.X_(i.z_)&&$a(n)}async function zv(e,t){const n=rt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(t);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Wv(e,t){const n=rt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&$a(n)}function Gv(e,t,n){const r=rt(e),s=r.queries.get(t);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(t)}function $a(e){e.Y_.forEach(t=>{t.next()})}var Jo,Zu;(Zu=Jo||(Jo={})).ea="default",Zu.Cache="cache";class Qv{constructor(t,n,r){this.query=t,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ur(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.na?this.ia(t)&&(this.ta.next(t),n=!0):this.sa(t,this.onlineState)&&(this.oa(t),n=!0),this.ra=t,n}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),n=!0),n}sa(t,n){if(!t.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(t){t=ur.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Jo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t){this.key=t}}class bf{constructor(t){this.key=t}}class Yv{constructor(t,n){this.query=t,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=at(),this.mutatedKeys=at(),this.Aa=zh(t),this.Ra=new er(this.Aa)}get Va(){return this.Ta}ma(t,n){const r=n?n.fa:new Xu,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const A=s.get(d),S=xi(this.query,g)?g:null,x=!!A&&this.mutatedKeys.has(A.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let U=!1;A&&S?A.data.isEqual(S.data)?x!==L&&(r.track({type:3,doc:S}),U=!0):this.ga(A,S)||(r.track({type:2,doc:S}),U=!0,(c&&this.Aa(S,c)>0||f&&this.Aa(S,f)<0)&&(l=!0)):!A&&S?(r.track({type:0,doc:S}),U=!0):A&&!S&&(r.track({type:1,doc:A}),U=!0,(c||f)&&(l=!0)),U&&(S?(a=a.add(S),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((d,g)=>function(S,x){const L=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return et()}};return L(S)-L(x)}(d.type,g.type)||this.Aa(d.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,f=c!==this.Ea;return this.Ea=c,a.length!==0||f?{snapshot:new ur(this.query,t.Ra,i,a,t.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Xu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=at(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return t.forEach(r=>{this.da.has(r)||n.push(new bf(r))}),this.da.forEach(r=>{t.has(r)||n.push(new Rf(r))}),n}ba(t){this.Ta=t.Ts,this.da=at();const n=this.ma(t.documents);return this.applyChanges(n,!0)}Da(){return ur.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Xv{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Jv{constructor(t){this.key=t,this.va=!1}}class Zv{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new gr(l=>Kh(l),Di),this.Ma=new Map,this.xa=new Set,this.Oa=new Rt(Q.comparator),this.Na=new Map,this.La=new Na,this.Ba={},this.ka=new Map,this.qa=lr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tE(e,t,n=!0){const r=xf(e);let s;const i=r.Fa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Sf(r,t,n,!0),s}async function eE(e,t){const n=xf(e);await Sf(n,t,!0,!1)}async function Sf(e,t,n,r){const s=await Ev(e.localStore,Ce(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await nE(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&vf(e.remoteStore,s),l}async function nE(e,t,n,r,s){e.Ka=(g,A,S)=>async function(L,U,z,Y){let Z=U.view.ma(z);Z.ns&&(Z=await Wu(L.localStore,U.query,!1).then(({documents:I})=>U.view.ma(I,Z)));const H=Y&&Y.targetChanges.get(U.targetId),mt=Y&&Y.targetMismatches.get(U.targetId)!=null,Et=U.view.applyChanges(Z,L.isPrimaryClient,H,mt);return ec(L,U.targetId,Et.wa),Et.snapshot}(e,g,A,S);const i=await Wu(e.localStore,t,!0),a=new Yv(t,i.Ts),l=a.ma(i.documents),c=_s.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,c);ec(e,n,f.wa);const d=new Xv(t,n,a);return e.Fa.set(t,d),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),f.snapshot}async function rE(e,t,n){const r=rt(e),s=r.Fa.get(t),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Di(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ka(r.remoteStore,s.targetId),Zo(r,s.targetId)}).catch(ps)):(Zo(r,s.targetId),await Xo(r.localStore,s.targetId,!0))}async function sE(e,t){const n=rt(e),r=n.Fa.get(t),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ka(n.remoteStore,r.targetId))}async function iE(e,t,n){const r=fE(e);try{const s=await function(a,l){const c=rt(a),f=Nt.now(),d=l.reduce((S,x)=>S.add(x.key),at());let g,A;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=He(),L=at();return c.cs.getEntries(S,d).next(U=>{x=U,x.forEach((z,Y)=>{Y.isValidDocument()||(L=L.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,x)).next(U=>{g=U;const z=[];for(const Y of l){const Z=Ay(Y,g.get(Y.key).overlayedDocument);Z!=null&&z.push(new kn(Y.key,Z,Lh(Z.value.mapValue),Ve.exists(!0)))}return c.mutationQueue.addMutationBatch(S,f,z,l)}).next(U=>{A=U;const z=U.applyToLocalDocumentSet(g,L);return c.documentOverlayCache.saveOverlays(S,U.batchId,z)})}).then(()=>({batchId:A.batchId,changes:Gh(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let f=a.Ba[a.currentUser.toKey()];f||(f=new Rt(dt)),f=f.insert(l,c),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,n),await vs(r,s.changes),await Fi(r.remoteStore)}catch(s){const i=ja(s,"Failed to persist write");n.reject(i)}}async function Pf(e,t){const n=rt(e);try{const r=await _v(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(yt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?yt(a.va):s.removedDocuments.size>0&&(yt(a.va),a.va=!1))}),await vs(n,r,t)}catch(r){await ps(r)}}function tc(e,t,n){const r=rt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=rt(a);c.onlineState=l;let f=!1;c.queries.forEach((d,g)=>{for(const A of g.j_)A.Z_(l)&&(f=!0)}),f&&$a(c)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function oE(e,t,n){const r=rt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Na.get(t),i=s&&s.key;if(i){let a=new Rt(Q.comparator);a=a.insert(i,Jt.newNoDocument(i,nt.min()));const l=at().add(i),c=new Mi(nt.min(),new Map,new Rt(dt),a,l);await Pf(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(t),qa(r)}else await Xo(r.localStore,t,!1).then(()=>Zo(r,t,n)).catch(ps)}async function aE(e,t){const n=rt(e),r=t.batch.batchId;try{const s=await mv(n.localStore,t);Vf(n,r,null),Cf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vs(n,s)}catch(s){await ps(s)}}async function lE(e,t,n){const r=rt(e);try{const s=await function(a,l){const c=rt(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next(g=>(yt(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(f,g))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,t);Vf(r,t,n),Cf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vs(r,s)}catch(s){await ps(s)}}function Cf(e,t){(e.ka.get(t)||[]).forEach(n=>{n.resolve()}),e.ka.delete(t)}function Vf(e,t,n){const r=rt(e);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Zo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(r=>{e.La.containsKey(r)||Df(e,r)})}function Df(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);n!==null&&(ka(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),qa(e))}function ec(e,t,n){for(const r of n)r instanceof Rf?(e.La.addReference(r.key,t),uE(e,r)):r instanceof bf?(K("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||Df(e,r.key)):et()}function uE(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),e.xa.add(r),qa(e))}function qa(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Q(At.fromString(t)),r=e.qa.next();e.Na.set(r,new Jv(n)),e.Oa=e.Oa.insert(n,r),vf(e.remoteStore,new nn(Ce(Hh(n.path)),r,"TargetPurposeLimboResolution",wa.oe))}}async function vs(e,t,n){const r=rt(e),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,t,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(f){s.push(f);const g=Ma.Wi(c.targetId,f);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,f){const d=rt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(f,A=>D.forEach(A.$i,S=>d.persistence.referenceDelegate.addReference(g,A.targetId,S)).next(()=>D.forEach(A.Ui,S=>d.persistence.referenceDelegate.removeReference(g,A.targetId,S)))))}catch(g){if(!gs(g))throw g;K("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const A=g.targetId;if(!g.fromCache){const S=d.os.get(A),x=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(A,L)}}}(r.localStore,i))}async function cE(e,t){const n=rt(e);if(!n.currentUser.isEqual(t)){K("SyncEngine","User change. New user:",t.toKey());const r=await gf(n.localStore,t);n.currentUser=t,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new G(N.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await vs(n,r.hs)}}function hE(e,t){const n=rt(e),r=n.Na.get(t);if(r&&r.va)return at().add(r.key);{let s=at();const i=n.Ma.get(t);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function xf(e){const t=rt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oE.bind(null,t),t.Ca.d_=Wv.bind(null,t.eventManager),t.Ca.$a=Gv.bind(null,t.eventManager),t}function fE(e){const t=rt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lE.bind(null,t),t}class mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ki(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,n){return null}Ha(t,n){return null}za(t){return gv(this.persistence,new dv,t.initialUser,this.serializer)}Ga(t){return new cv(Oa.Zr,this.serializer)}Wa(t){return new Iv}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mi.provider={build:()=>new mi};class ta{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cE.bind(null,this.syncEngine),await $v(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hv}()}createDatastore(t){const n=ki(t.databaseInfo.databaseId),r=function(i){return new bv(i)}(t.databaseInfo);return function(i,a,l,c){return new Cv(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new Dv(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>tc(this.syncEngine,n,0),function(){return Qu.D()?new Qu:new wv}())}createSyncEngine(t,n){return function(s,i,a,l,c,f,d){const g=new Zv(s,i,a,l,c,f);return d&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=rt(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ys(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ta.provider={build:()=>new ta};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):qe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=Oh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{K("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(K("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ja(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Io(e,t){e.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gf(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function nc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gE(e);K("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Yu(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Yu(t.remoteStore,s)),e._onlineComponents=t}async function gE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Io(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;sr("Error using user provided cache. Falling back to memory cache: "+n),await Io(e,new mi)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Io(e,new mi);return e._offlineComponents}async function Nf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await nc(e,e._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await nc(e,new ta))),e._onlineComponents}function mE(e){return Nf(e).then(t=>t.syncEngine)}async function _E(e){const t=await Nf(e),n=t.eventManager;return n.onListen=tE.bind(null,t.syncEngine),n.onUnlisten=rE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=eE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=sE.bind(null,t.syncEngine),n}function yE(e,t,n={}){const r=new an;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,f){const d=new dE({next:A=>{d.Za(),a.enqueueAndForget(()=>zv(i,g)),A.fromCache&&c.source==="server"?f.reject(new G(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),g=new Qv(l,d,{includeMetadataChanges:!0,_a:!0});return Kv(i,g)}(await _E(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(e,t,n){if(!n)throw new G(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function vE(e,t,n,r){if(t===!0&&r===!0)throw new G(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sc(e){if(!Q.isDocumentKey(e))throw new G(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ic(e){if(Q.isDocumentKey(e))throw new G(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ha(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":et()}function cr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new G(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(e);throw new G(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new G(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new G(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Of((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ui{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new G(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new x_;switch(r.type){case"firstParty":return new k_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rc.get(n);r&&(K("ComponentProvider","Removing Datastore"),rc.delete(n),r.terminate())}(this),Promise.resolve()}}function EE(e,t,n,r={}){var s;const i=(e=cr(e,Ui))._getSettings(),a=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Yt.MOCK_USER;else{l=hm(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new G(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Yt(f)}e._authCredentials=new N_(new Nh(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Bi(this.firestore,t,this._query)}}class _e{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _e(this.firestore,t,this._key)}}class ln extends Bi{constructor(t,n,r){super(t,n,Hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _e(this.firestore,null,new Q(t))}withConverter(t){return new ln(this.firestore,t,this._path)}}function kf(e,t,...n){if(e=ns(e),Mf("collection","path",t),e instanceof Ui){const r=At.fromString(t,...n);return ic(r),new ln(e,null,r)}{if(!(e instanceof _e||e instanceof ln))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return ic(r),new ln(e.firestore,null,r)}}function Ka(e,t,...n){if(e=ns(e),arguments.length===1&&(t=Oh.newId()),Mf("doc","path",t),e instanceof Ui){const r=At.fromString(t,...n);return sc(r),new _e(e,null,new Q(r))}{if(!(e instanceof _e||e instanceof ln))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return sc(r),new _e(e.firestore,e instanceof ln?e.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _f(this,"async_queue_retry"),this.Vu=()=>{const r=To();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=To();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=To();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new an;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!gs(t))throw t;K("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw qe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const s=Ba.createAndSchedule(this,t,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&et()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class ji extends Ui{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new ac,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ac(t),this._firestoreClient=void 0,await t}}}function TE(e,t){const n=typeof e=="object"?e:E_(),r=typeof e=="string"?e:"(default)",s=m_(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=um("firestore");i&&EE(s,...i)}return s}function Lf(e){if(e._terminated)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||IE(e),e._firestoreClient}function IE(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,f,d){return new Q_(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Of(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new pE(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hr(qt.fromBase64String(t))}catch(n){throw new G(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new hr(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new G(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new G(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new G(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dt(this._lat,t._lat)||dt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=/^__.*__$/;class AE{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new kn(t,this.data,this.fieldMask,n,this.fieldTransforms):new ms(t,this.data,n,this.fieldTransforms)}}function Uf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw et()}}class Qa{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Qa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return _i(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Uf(this.Cu)&&wE.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class RE{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ki(t)}Qu(t,n,r,s=!1){return new Qa({Cu:t,methodName:n,qu:r,path:jt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bf(e){const t=e._freezeSettings(),n=ki(e._databaseId);return new RE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jf(e,t,n,r,s,i={}){const a=e.Qu(i.merge||i.mergeFields?2:0,t,n,s);Kf("Data must be an object, but it was:",a,r);const l=qf(r,a);let c,f;if(i.merge)c=new Ee(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const A=bE(t,g,n);if(!a.contains(A))throw new G(N.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);PE(d,A)||d.push(A)}c=new Ee(d),f=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,f=a.fieldTransforms;return new AE(new me(l),c,f)}function $f(e,t){if(Hf(e=ns(e)))return Kf("Unsupported field value:",t,e),qf(e,t);if(e instanceof Ff)return function(r,s){if(!Uf(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=$f(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=ns(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Nt.fromDate(r);return{timestampValue:pi(s.serializer,i)}}if(r instanceof Nt){const i=new Nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pi(s.serializer,i)}}if(r instanceof Wa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hr)return{bytesValue:lf(s.serializer,r._byteString)};if(r instanceof _e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ga)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ca(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ha(r)}`)}(e,t)}function qf(e,t){const n={};return Mh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pr(e,(r,s)=>{const i=$f(s,t.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hf(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Nt||e instanceof Wa||e instanceof hr||e instanceof _e||e instanceof Ff||e instanceof Ga)}function Kf(e,t,n){if(!Hf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ha(n);throw r==="an object"?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}}function bE(e,t,n){if((t=ns(t))instanceof za)return t._internalPath;if(typeof t=="string")return zf(e,t);throw _i("Field path arguments must be of type string or ",e,!1,void 0,n)}const SE=new RegExp("[~\\*/\\[\\]]");function zf(e,t,n){if(t.search(SE)>=0)throw _i(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new za(...t.split("."))._internalPath}catch{throw _i(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _i(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new G(N.INVALID_ARGUMENT,l+e+c)}function PE(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new CE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Gf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CE extends Wf{data(){return super.data()}}function Gf(e,t){return typeof t=="string"?zf(e,t):t instanceof za?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new G(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DE{convertValue(t,n="none"){switch(On(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Nn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw et()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return pr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Pt(a.doubleValue));return new Ga(i)}convertGeoPoint(t){return new Wa(Pt(t.latitude),Pt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ra(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(os(t));default:return null}}convertTimestamp(t){const n=hn(t);return new Nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=At.fromString(t);yt(pf(r));const s=new as(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||qe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xE extends Wf{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Gf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zs extends xE{data(t={}){return super.data(t)}}class NE{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Zs(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Zs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Zs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:OE(l.type),doc:c,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return et()}}class ME extends DE{constructor(t){super(),this.firestore=t}convertBytes(t){return new hr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function kE(e){e=cr(e,Bi);const t=cr(e.firestore,ji),n=Lf(t),r=new ME(t);return VE(e._query),yE(n,e._query).then(s=>new NE(t,r,e,s))}function Yf(e,t,n){e=cr(e,_e);const r=cr(e.firestore,ji),s=Qf(e.converter,t);return Xf(r,[jf(Bf(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Ve.none())])}function LE(e,t){const n=cr(e.firestore,ji),r=Ka(e),s=Qf(e.converter,t);return Xf(n,[jf(Bf(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function Xf(e,t){return function(r,s){const i=new an;return r.asyncQueue.enqueueAndForget(async()=>iE(await mE(r),s,i)),i.promise}(Lf(e),t)}(function(t,n=!0){(function(s){dr=s})(v_),li(new rs("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ji(new O_(r.getProvider("auth-internal")),new F_(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new G(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),tr(bu,"4.7.3",t),tr(bu,"4.7.3","esm2017")})();const _r=wi({firestore:null}),FE={firestore:Pn(()=>_r.firestore)},UE=async()=>{const t=Ah({apiKey:"AIzaSyCjAFCXwbDwhHRorGVmW99hOVVrfASb72g",authDomain:"timerof-2745f.firebaseapp.com",projectId:"timerof-2745f",storageBucket:"timerof-2745f.firebasestorage.app",messagingSenderId:"723564130006",appId:"1:723564130006:web:b2950274d04719f77ca377"});_r.firestore=TE(t)},BE=async e=>{try{const t=await kE(kf(_r.firestore,e)),n={};return t.forEach(r=>{n[r.id]=r.data()}),n}catch(t){console.error(`Error reading collection ${e}: `,t)}},jE=async e=>{try{return await LE(kf(_r.firestore,"doors"),e)}catch(t){console.error("Error adding document: ",t)}},$E=async e=>{await Yf(Ka(_r.firestore,"doors",en),{doors:e})},qE=async()=>{console.log(`Day Update[CREATE EMPTY ARRAY FOR ${en}]`),await Yf(Ka(_r.firestore,"doors",en),{doors:[]})},HE=async()=>{},Jf=()=>({test:HE,newDayUpdate:qE,updateDocInDays:$E,initFirestore:UE,getDoorsData:BE,putInCollection:jE,...FE}),KE=()=>{const{getDoorsData:e,firestore:t,newDayUpdate:n,test:r,updateDocInDays:s}=Jf(),i=qn([]),a=qn({}),l=qn(!1),c=qn(0),f=qn(!1),d=qn(null);async function g(){return f.value=!f.value,l.value=!1,f.value?(i.value.push({start:new Date().getTime(),end:0}),await s(i.value),d.value=setInterval(S,1e3),l.value=!0,console.log(`Start Door ${new Date().toLocaleString()}: `,Qt(f))):(i.value[i.value.length-1].end=new Date().getTime(),await s(i.value),clearInterval(d.value),A(),l.value=!0,console.log(`End Door ${new Date().toLocaleString()}: `,Qt(f)))}function A(){c.value=Qg(Qt(i))}function S(){c.value+=1e3}Zn(t,async()=>{a.value=await e("doors"),await r(),a.value[en]||(await n(),a.value[en]={doors:[]}),i.value=a.value[en].doors,A(),i.value.length>0&&(a.value[en].doors[i.value.length-1].end||(f.value=!0,d.value=setInterval(S,1e3))),l.value=!0},{once:!0}),Zn(c,()=>{console.log("UPD currentDaysDoorsLength: ",Qt(c))},{immediate:!0});const x=Pn(()=>Qt(f)?"Завершить":"Начать"),L=Pn(()=>Oo(Qt(c)));return{onToggleTimeGoes:g,buttonTitle:x,dataLoaded:l,allDoorsMetrics:L,currentDaysDoorsLength:c}},zE=["disabled"],WE={__name:"Button",props:{disabled:Boolean},setup(e){return(t,n)=>(Dn(),fs("button",fh({class:"btn btn",disabled:e.disabled},Pp(t.$listeners),{id:"btn"}),[Sp(t.$slots,"default",{},void 0)],16,zE))}},GE=Pi(WE,[["__scopeId","data-v-7b46c7e8"]]),QE=["data-loaded"],YE={class:"main__today main-today"},XE={class:"main-today__title"},JE={class:"main-today__time"},ZE={__name:"Main",setup(e){const{allDoorsMetrics:t,currentDaysDoorsLength:n,dataLoaded:r,buttonTitle:s,onToggleTimeGoes:i}=KE(),a=Pn(()=>Oo(Qt(n))),l=Pn(()=>Oo(mh-Qt(n))),c=Pn(()=>Qt(t).percent);return Zn([n,a],()=>{},{immediate:!0}),(f,d)=>(Dn(),fs("main",{class:"main","data-loaded":Qt(r)},[be("div",YE,[be("h1",XE,kr(Qt(en)),1),be("p",JE,[be("span",null,kr(a.value.string),1),be("span",null,kr(l.value.string),1)]),de(Wg,{percent:c.value,dataLoaded:Qt(r),class:"main-today__progress"},null,8,["percent","dataLoaded"]),de(GE,{class:"main-today__btn",onClick:Qt(i),disabled:!Qt(r)},{default:Fc(()=>[hh(kr(Qt(s)),1)]),_:1},8,["onClick","disabled"]),d[0]||(d[0]=be("div",{class:"main-today__version"},"v0.1",-1))])],8,QE))}},tT=Pi(ZE,[["__scopeId","data-v-2b68cfef"]]),eT={__name:"App",setup(e){const{initFirestore:t}=Jf();return $c(async()=>{await t()}),(n,r)=>(Dn(),fs(he,null,[de(Hg),de(tT)],64))}};Fg(eT).mount("#app");
