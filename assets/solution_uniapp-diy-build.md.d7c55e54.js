import{_ as o,o as s,c as i,a as t,z as n}from"./chunks/framework.16bbc80c.js";const e="/qiq-note/image/uniapp211.png",l="/qiq-note/image/uniapp212.png",a="/qiq-note/image/uniapp221.png",p="/qiq-note/image/uniapp222.png",w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"solution/uniapp-diy-build.md","filePath":"solution/uniapp-diy-build.md"}'),_={name:"solution/uniapp-diy-build.md"},c=n("h1",null,"Uniapp 自定义打包",-1),u=n("h3",null,"一、背景",-1),r=n("br",null,null,-1),d=n("br",null,null,-1),h=n("h3",null,"二、解决方案",-1),m=n("br",null,null,-1),g=n("h4",null,"2.1 package.json 配置",-1),f=n("p",null,[n("img",{src:e,alt:"一张图片"}),t(" 图：2.1.1")],-1),b=n("p",null,[n("img",{src:l,alt:"一张图片"}),t(" 图：2.1.2")],-1),q=n("h4",null,"2.2 读取配置的环境变量",-1),k=n("wbr",null,null,-1),x=n("p",null,[n("img",{src:a,alt:"一张图片"}),t(" 图：2.2.1")],-1),y=n("p",null,[n("img",{src:p,alt:"一张图片"}),t(" 图：2.2.2")],-1);function B($,j,v,N,D,P){return s(),i("div",null,[c,u,r,t("    后台没做代理，需要前端自己配置不同环境的路径时，每次打包都要改路径，显得多余，即可使用自定义打包的方式，不需要手动改环境路径 "),d,h,m,g,t("    在 package.json 配置文件中增加”uni-app”配置项，如图：2.1.1。 配置完成后即可在 hbuilder 编辑器中的“发行”-“自定义发行”中看到对应的配置项，如图：2.1.2。 "),f,b,q,t("    项目在打包时会将自定义的变量存在 p"),k,t("rocess.env 对象中，自己读取即可，如图:2.2.1。 当本地使用“运行到浏览器”时，这些变量是读取不到的，也就可以设置为空，在 manifest.json 文件中配置相应的代理即可，如图：2.2.2 "),x,y])}const z=o(_,[["render",B]]);export{w as __pageData,z as default};