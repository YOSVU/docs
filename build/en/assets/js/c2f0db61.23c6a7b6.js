"use strict";(self.webpackChunkyosvudoc=self.webpackChunkyosvudoc||[]).push([[7774],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7605),r=(n(9496),n(9613));const l={},s="Release \u53d1\u5e03\u89c4\u8303",i={unversionedId:"Github/realease",id:"Github/realease",title:"Release \u53d1\u5e03\u89c4\u8303",description:"1. \u539f\u5219\u6027\u8981\u6c42",source:"@site/docs/Github/realease.md",sourceDirName:"Github",slug:"/Github/realease",permalink:"/en/docs/Github/realease",draft:!1,editUrl:"https://github.com/YOSVU/docs/tree/main/docs/Github/realease.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub\u64cd\u4f5c",permalink:"/en/docs/category/github\u64cd\u4f5c"},next:{title:"Tutorial - Extras",permalink:"/en/docs/category/tutorial---extras"}},o={},u=[{value:"1. \u539f\u5219\u6027\u8981\u6c42",id:"1-\u539f\u5219\u6027\u8981\u6c42",level:2},{value:"2. \u63a8\u8350\u6027\u8981\u6c42",id:"2-\u63a8\u8350\u6027\u8981\u6c42",level:2},{value:"\u8303\u4f8b:",id:"\u8303\u4f8b",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-\u53d1\u5e03\u89c4\u8303"},"Release \u53d1\u5e03\u89c4\u8303"),(0,r.kt)("h2",{id:"1-\u539f\u5219\u6027\u8981\u6c42"},"1. \u539f\u5219\u6027\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u9075\u5faa ",(0,r.kt)("a",{parentName:"li",href:"https://semver.org/lang/zh-CN/"},"Semver 2.0")," \u8bed\u4e49\u5316\u7248\u672c\u6807\u51c6."),(0,r.kt)("li",{parentName:"ul"},"Release\u6587\u4ef6\u540d\u6807\u6ce8\u5b8c\u6574\u7684\u4fe1\u606f.\n\u793a\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"li"},"publish_1.0.0_darwin_amd64.tar.gz"))),(0,r.kt)("h2",{id:"2-\u63a8\u8350\u6027\u8981\u6c42"},"2. \u63a8\u8350\u6027\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528GitHub Action\u7f16\u8bd1\u9879\u76ee\u5e76\u81ea\u52a8\u4e0a\u4f20Release\u6587\u4ef6,\u800c\u4e0d\u662f\u624b\u52a8\u4e0a\u4f20."),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h3",{id:"\u8303\u4f8b"},"\u8303\u4f8b:"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u8303\u4f8b\u4ec5\u4f9b\u53c2\u8003.",(0,r.kt)("br",{parentName:"p"}),"\n","\u8be5\u8303\u4f8b\u6f14\u793a\u5728Github\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684release\u65f6\uff0c\u81ea\u52a8\u7f16\u8bd1React Native\u9879\u76ee\u5e76\u751f\u6210apk\u6587\u4ef6\u5e76\u53d1\u5e03\u5230\u8be5release\u4e2d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"release.md","release.md":!0},"name: Build and Release APK\n\non:\n  release:\n    types: [created]\n\njobs:\n  build-and-release:\n    runs-on: ubuntu-latest #\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf\n\n    steps:\n    - name: Checkout code\n      uses: actions/checkout@v2\n\n    - name: Setup Node.js #\u8bbe\u7f6enode\u7248\u672c\n      uses: actions/setup-node@v1\n\n    - name: Install dependencies\n      run: npm install\n\n    - name: Build APK #\u7f16\u8bd1apk\n      run: npx react-native run-android --variant=release \n\n    - name: Archive APK #\u4e0a\u4f20artifact\n      uses: actions/upload-artifact@v2\n      with:\n        name: app-release\n        path: android/app/build/outputs/apk/release/app-release.apk \n\n    - name: Create Release #\u521b\u5efaRelease\n      uses: actions/create-release@v1\n      with:\n        tag_name: ${{ github.ref }}\n        release_name: Release ${{ github.ref }}\n        body: |\n          Changes in this release:\n          - Built APK file\n        draft: false\n        prerelease: false\n\n    - name: Upload APK to Release #\u4e0a\u4f20\u6587\u4ef6\u5230Release\n      uses: actions/upload-release-asset@v1\n      with:\n        upload_url: ${{ steps.create_release.outputs.upload_url }}\n        asset_path: android/app/build/outputs/apk/release/app-release.apk\n        asset_name: app-release.apk\n        asset_content_type: application/vnd.android.package-archive\n")))}d.isMDXComponent=!0}}]);