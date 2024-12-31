#!/usr/bin/env node
import{t,a as e,i,s as o}from"./isColorShade-bjSWEgRL.js";import r from"chalk";import s from"fs";import{capitalize as n}from"lodash-es";import{resolve as l}from"path";import"lodash";function c(){try{const{colors:c}=t,p=e,a=new Set([...Object.keys(e).map((t=>`'${t}'`))]),u=["grey"],d=["text"],f=(t,e)=>{if((i(e)||u.includes(t))&&!d.includes(t))for(const i in e){const o=e[i],r="default"===i?"":n(i),s=n(t);p[`bg${s}${r}`]={backgroundColor:o},p[`border${s}${r}`]={borderColor:o},p[`text${s}${r}`]={color:o},a.add(`'bg${s}${r}'`),a.add(`'border${s}${r}'`),a.add(`'text${s}${r}'`)}};for(const t in c){f(t,c[t])}const $=10;for(let t=0;t<=$;t++){const e=o(t),i={p:"padding",m:"margin"},r={"":"",t:"Top",r:"Right",b:"Bottom",l:"Left",x:"Horizontal",y:"Vertical"};for(const[o,s]of Object.entries(i))for(const[i,n]of Object.entries(r)){const r=`${o}${i}-${t}`;p[r]={[`${s}${n}`]:e},a.add(`"${r}"`)}}const y=l("./src/theme/configs/generated/utilities"),m=l(y,"utilities.ts"),g=l(y,"shakenUtilities.ts"),x=l(y,"types.ts"),h="/**\n* AUTO GENERATED\n* <---DO NOT MODIFY THIS FILE---\x3e\n*/\n\n",b=l(y,"index.ts"),S=`/* eslint-disable @typescript-eslint/no-require-imports */\n${h}export  * from './types';\nlet utilities: typeof import('./utilities');\n\nif (process.env.NODE_ENV === 'production') {\n  utilities = require('./shakenUtilities').utilities;\n} else {\n  utilities = require('./utilities').utilities;\n}\n\nexport { utilities };\n\nexport type UtilitiesType = typeof utilities;\n`;s.existsSync(y)||(s.mkdirSync(y,{recursive:!0}),console.log(r.greenBright("Directory created successfully."))),s.writeFileSync(m,`${h}\nexport const utilities = ${JSON.stringify(p,null,2)};\n`),s.writeFileSync(x,`${h}export type UtilityKeys = ${[...a].join(" | ")};\n`),s.writeFileSync(g,`${h}\nexport const utilities = ${JSON.stringify(p,null,2)};\n`),s.writeFileSync(b,S,"utf8"),console.log(r.greenBright("Theme utilities and types generated successfully!"))}catch(t){console.log(r.red(`Utilitie generator faild! \nError:${t}`))}}c();export{c as generateUtilities};
//# sourceMappingURL=generateUtilities.js.map