"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},o="The Parity Swap Procedure",s={unversionedId:"legacy/FAQ/parity-swap-procedure",id:"legacy/FAQ/parity-swap-procedure",title:"The Parity Swap Procedure",description:"_First release, tested only on v6.1 & 6.7.2_",source:"@site/docs/legacy/FAQ/parity-swap-procedure.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/parity-swap-procedure",permalink:"/de/legacy/FAQ/parity-swap-procedure",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/parity-swap-procedure.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Console",permalink:"/de/legacy/FAQ/console"},next:{title:"Replacing a Data Drive",permalink:"/de/legacy/FAQ/replacing-a-data-drive"}},l={},p=[{value:"Important Notes",id:"important-notes",level:2},{value:"The procedure",id:"the-procedure",level:2},{value:"The procedure for Unraid v4",id:"the-procedure-for-unraid-v4",level:2}],d={toc:p},h="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-parity-swap-procedure"},"The Parity Swap Procedure"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("inlineCode",{parentName:"em"},"First release, tested only on v6.1 & 6.7.2")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This page describes how to do the 'Parity Swap' procedure, often\nknown as the 'Swap Disable' procedure.")),(0,n.kt)("p",null,"Historically, it was better known as the 'Swap Disable' procedure,\nprobably because it requires the data drive to be disabled first, then\ninvolves a swap of the parity drive, the disabled drive, and the new\nreplacement drive. Perhaps it should be called the \"3 drive parity\nshuffle\"?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why would you want to do this? To replace a data drive with a larger\none, that is even larger than the Parity drive.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unraid does not require a replacement drive to be the same size as\nthe drive being replaced. The replacement drive CANNOT be smaller\nthan the old drive, but it CAN be larger, much larger in fact. If\nthe replacement drive is the same size or larger, UP TO the same\nsize as the parity drive, then there is a simple procedure for that,\ncalled ",(0,n.kt)("a",{parentName:"li",href:"/de/legacy/FAQ/replacing-a-data-drive"},"Replacing a Data Drive"),".\nBut if the replacement drive is LARGER than the Parity drive, then a\nspecial two-step procedure is required, described on this page. It\nwill use the larger-than-parity drive to first upgrade the parity\ndrive then use the old parity drive to replace the old data drive."),(0,n.kt)("li",{parentName:"ul"},"An example, you have a 1TB data drive that you want to replace (the\nreason does not matter). You have a 2TB parity drive. You buy a 4TB\ndrive as a replacement. The 'Parity Swap' procedure will copy the\nparity info from the current 2TB parity drive to the 4TB drive, zero\nthe rest, make it the new parity drive, then use the old 2TB parity\ndrive to replace the 1TB data drive. Now you can do as you wish with\nthe removed 1TB drive.")),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you have purchased a replacement drive, we always recommend\nPreclearing the replacement drive first, to make sure it's a good\ndrive that won't fail for a few years at least. The Preclearing is\nnot strictly necessary, as replacement drives don't have to be\ncleared, they are going to be completely overwritten. But\nPreclearing new drives one to three times provides a thorough test\nof the drive, eliminates 'infant mortality' failures."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"If your replacement drive is the same size or smaller than your\ncurrent Parity drive, then you don't need this procedure. Proceed\nwith the ",(0,n.kt)("a",{parentName:"strong",href:"/de/legacy/FAQ/replacing-a-data-drive"},"Replacing a Data Drive"),"\nprocedure.")),(0,n.kt)("li",{parentName:"ul"},"This procedure is strictly for replacing data drives in an Unraid\narray. If all you want to do is replace your Parity drive with a\nlarger one, then you don't need the Parity Swap procedure. Just\nremove the old parity drive and add the new one, and start the\narray. The process of building parity will immediately begin. (If\nsomething goes wrong, you still have the old parity drive that you\ncan put back!)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IMPORTANT!!!")," This procedure REQUIRES that the data drive being\nreplaced MUST be disabled first. If the drive failed (has a red\nball), then it is already 'disabled', but if the drive is OK but\nyou want to replace it anyway, then you have to force it to be\n'failed', by unassigning it and starting and stopping the array.\nUnraid only forgets a drive when the array is started without the\ndrive, otherwise it still associates it with the slot (but\n'Missing'). The array must be started once with the drive\nunassigned or disabled. Yes, it may seem odd, but is required before\nUnraid will recognize that you are trying to do a 'Parity Swap'.\nIt needs to see a disabled data disk with forgotten ID, a new disk\nassigned to its slot that used to be the parity disk, and a new disk\nassigned to the parity slot."),(0,n.kt)("li",{parentName:"ul"},"Obviously, it's very important to identify the drives for\nassignment correctly! Have a list of the drive models that will be\ntaking part in this procedure, with the last 4 characters of their\nserial numbers. If the drives are recent Toshiba models, then they\nmay all end in ",(0,n.kt)("strong",{parentName:"li"},"GS")," or ",(0,n.kt)("strong",{parentName:"li"},"S"),", so you will want to note the\npreceding 4 characters instead."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Lastly, this page was only tested with v6 (and not with a disabled\ndrive), and is 'assumed' to be correct for all versions. (You know\nwhat happens when you 'assume'!) If you see any improvements or\ncorrections, please add them, or suggest them to us, either on the\n'discussion' page for this page, or on the Unraid forums. By the\nway, if you are NOT running the latest Unraid v6 release, we\nstrongly urge you to Upgrade to Unraid v6!"))),(0,n.kt)("h2",{id:"the-procedure"},"The procedure"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If you are running a very old version of Unraid, such as v4.7 or\nolder, skip down to the next section.")),(0,n.kt)("p",null,"Note: these steps are the general steps needed. The steps you take\nmay differ depending on your situation. If the drive to be replaced\nhas failed and Unraid has disabled it, then you may not need steps 1\nand 2, and possibly not steps 3 and 4. If you have already installed\nthe new replacement drive (perhaps because you have been Preclearing\nit), then you would skip steps 5 through 8. Revise the steps as\nneeded."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the array ",(0,n.kt)("em",{parentName:"p"},"(if it's started)"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Unassign the old drive ",(0,n.kt)("em",{parentName:"p"},"(if it's still assigned)")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"If the drive was a good drive and notifications are enabled, you\nwill get error notifications for a missing drive! This is normal."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the array (put a check in the ",(0,n.kt)("strong",{parentName:"p"},"Yes I want to do this"),"\ncheckbox if it appears (older versions: ",(0,n.kt)("strong",{parentName:"p"},"Yes, I'm sure"),"))"),(0,n.kt)("p",{parentName:"li"},"*","Yes, you need to do this. Your data drive should be showing as"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Not installed"),".","*")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the array again")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Power down")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"[ Optional ]")," Pull the old drive"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"You may want to leave it installed, for Preclearing or testing or\nreassignment."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the new drive (preclear STRONGLY suggested, but formatting\nnot needed)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Power on")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the array"),(0,n.kt)("p",{parentName:"li"},"*",(0,n.kt)("em",{parentName:"p"},'If you get an "Array Stopping\u2022Retry unmounting disk\nshare(s)..." message, try disabling Docker and/or VM in Settings\nand stopping the array again after rebooting.'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Unassign the parity drive")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign the new drive in the parity slot"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"You may see more error notifications! This is normal."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign the old parity drive in the slot of the old data drive being\nreplaced"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"You should now have blue drive status indicators for both the\nparity drive and the drive being replaced."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Main")," -",">"," ",(0,n.kt)("strong",{parentName:"p"},"Array Operation")," section"),(0,n.kt)("p",{parentName:"li"},"*","You should now have a ",(0,n.kt)("strong",{parentName:"p"},"Copy")," button, with a statement indicating"),(0,n.kt)("p",{parentName:"li"},'"',(0,n.kt)("strong",{parentName:"p"},"Copy"),' will copy the parity information to the new parity\ndisk".',"*")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Put a check in the ",(0,n.kt)("strong",{parentName:"p"},"Yes I want to do this")," checkbox (older\nversions: ",(0,n.kt)("strong",{parentName:"p"},"Yes, I'm sure"),"), and click the ",(0,n.kt)("strong",{parentName:"p"},"Copy")," button"),(0,n.kt)("p",{parentName:"li"},"Now patiently watch the copy progress, takes a long time (","~","20\nhours for 4TB on a 3GHz Core 2 Duo). All of the contents of the old\nparity drive are being copied onto the new drive, then the remainder\nof the new parity drive will be zeroed."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"The array will NOT be available during this operation!")),(0,n.kt)("p",{parentName:"li"},"If you disabled Docker and/or VM in settings earlier, go ahead\nand re-enable now."),(0,n.kt)("p",{parentName:"li"},'When the copy completes, the array will still be stopped\n("',(0,n.kt)("strong",{parentName:"p"},"Stopped"),'. Upgrading disk/swapping parity.").'),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Start")," button will now be present, and the description will\nnow indicate that it is ready to start a Data-Rebuild.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Put a check in the ",(0,n.kt)("strong",{parentName:"p"},"Yes I want to do this")," checkbox (older\nversions: ",(0,n.kt)("strong",{parentName:"p"},"Yes, I'm sure"),"), and click the ",(0,n.kt)("strong",{parentName:"p"},"Start")," button"),(0,n.kt)("p",{parentName:"li"},"The data drive rebuild begins. Parity is now valid, and the array\nis started."),(0,n.kt)("p",{parentName:"li"},"Because the array is started, you can use the array as normal, but\nfor best performance, we recommend you limit your usage."),(0,n.kt)("p",{parentName:"li"},"Once again, you can patiently watch the progress, takes a long time\ntoo! All of the contents of the old data drive are now being\nreconstructed on what used to be your parity drive, but is now\nassigned as the replacement data drive."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"That's it!")," Once done, you have an array with a larger parity\ndrive and a replaced data drive that may also be larger!"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: many users like to follow up with a parity check, just to\ncheck everything. It's a good confidence builder!")),(0,n.kt)("h2",{id:"the-procedure-for-unraid-v4"},"The procedure for Unraid v4"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This section is only for old versions of Unraid, such as v4.7 or\nolder. If you are running v5 or v6 of Unraid, then go back to the\nprevious section.")),(0,n.kt)("p",null,"Note: these steps are taken from the old manual, and they assume the\ndata drive has failed and been disabled. If not, then (just as\nabove) you may have to 'fail' the drive by removing the drive, and\nstarting and stopping the array one time."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop the array."),(0,n.kt)("li",{parentName:"ol"},"Power down the unit."),(0,n.kt)("li",{parentName:"ol"},"Replace the parity disk with the new bigger one."),(0,n.kt)("li",{parentName:"ol"},"Replace the failed disk with your old parity disk."),(0,n.kt)("li",{parentName:"ol"},"Power up the unit."),(0,n.kt)("li",{parentName:"ol"},"Start the array."),(0,n.kt)("li",{parentName:"ol"},"When you start the array, the system will first copy the parity\ninformation to the new parity disk, and then reconstruct the\ncontents of the failed disk.")))}u.isMDXComponent=!0}}]);