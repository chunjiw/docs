"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[563],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return t?o.createElement(h,s(s({ref:n},d),{},{components:t})):o.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={},s="Setting Up CPU and Board Temperature Sensing",i={unversionedId:"legacy/FAQ/setting-up-cpu-and-board-temperature-sensing",id:"legacy/FAQ/setting-up-cpu-and-board-temperature-sensing",title:"Setting Up CPU and Board Temperature Sensing",description:"This page is designed to help you obtain your CPU and motherboard",source:"@site/docs/legacy/FAQ/setting-up-cpu-and-board-temperature-sensing.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/setting-up-cpu-and-board-temperature-sensing",permalink:"/legacy/FAQ/setting-up-cpu-and-board-temperature-sensing",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/setting-up-cpu-and-board-temperature-sensing.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Replacing Multiple Data Drives with a Single Larger Drive",permalink:"/legacy/FAQ/replacing-multiple-data-drives"},next:{title:"Setup Sleep (S3) and Wake on Lan (WOL)",permalink:"/legacy/FAQ/setup-sleep-and-wake-on-lan"}},l={},p=[{value:"Setting up sensing for v6",id:"setting-up-sensing-for-v6",level:2},{value:"Setting up sensing for older versions",id:"setting-up-sensing-for-older-versions",level:2},{value:"Step 1: Open a console",id:"step-1-open-a-console",level:3},{value:"Step 2: Run sensors",id:"step-2-run-sensors",level:3},{value:"Step 3: Note the devices",id:"step-3-note-the-devices",level:3},{value:"Step 4: Note the sensors",id:"step-4-note-the-sensors",level:3},{value:"Step 5: Create sensors.conf",id:"step-5-create-sensorsconf",level:3},{value:"Step 6: Prepare sensors-detect",id:"step-6-prepare-sensors-detect",level:3},{value:"Step 7: Run sensors-detect",id:"step-7-run-sensors-detect",level:3},{value:"Step 8: Note the drivers",id:"step-8-note-the-drivers",level:3},{value:"Step 9: Add modprobes to go",id:"step-9-add-modprobes-to-go",level:3},{value:"Step 10: Add the copy instruction to go",id:"step-10-add-the-copy-instruction-to-go",level:3},{value:"Step 11: Reboot and check",id:"step-11-reboot-and-check",level:3}],d={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-cpu-and-board-temperature-sensing"},"Setting Up CPU and Board Temperature Sensing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This page is designed to help you obtain your CPU and motherboard\ntemperatures, and hopefully keep them current and visible. If you\naren't using Unraid v6 with the Dynamix System Temp plugin, then skip\ndown to the 'older versions' section.")),(0,r.kt)("h2",{id:"setting-up-sensing-for-v6"},"Setting up sensing for v6"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section is only for Unraid v6 with the Dynamix System Temp\nplugin installed. These instructions are lifted directly from the\nauthor's words\n",(0,r.kt)("a",{parentName:"em",href:"https://forums.unraid.net/forum/index.php?topic=31172.msg473847#msg473847"},"here"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Preparation"),(0,r.kt)("p",{parentName:"li"},"Install the perl package, easiest done by installing the\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=37541.0"},"NerdPack\nplugin"),',\nthen in the plugin enabling perl to install. Perl is only needed\nby the script "sensors-detect", which will be run in the\nbackground by the Detect function of Step 2. Once you have\ncompleted System Temp setup, perl is no longer needed and can be\ndisabled, uninstalled.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Detection"),(0,r.kt)("p",{parentName:"li"},"Press the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Detect>")," button to search and automatically\nfill in the required drivers, or alternatively - if you know the\nname of the driver(s) - you can fill them in manually.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Saving and activation"),(0,r.kt)("p",{parentName:"li"},"Press the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Save>")," button to save and activate (load) the\ndriver(s). ",(0,r.kt)("em",{parentName:"p"},"This will create the file\n",(0,r.kt)("strong",{parentName:"em"},"/config/plugins/dynamix.system.temp/drivers.conf")," on your\nflash device."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sensor assignment and display"),(0,r.kt)("p",{parentName:"li"},"Use the dropdown menus under sensors to assign the appropriate\nsensor for CPU and motherboard readings. You may need to consult\nthe user guide of your motherboard to find out which sensor\nneeds to be selected here. Once a sensor selection is done, the\ncorresponding item will be displayed at the right side of the\nfooter. Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Apply>")," button to confirm your\nselection. ",(0,r.kt)("em",{parentName:"p"},"This will create the file\n",(0,r.kt)("strong",{parentName:"em"},"/config/plugins/dynamix.system.temp/sensors.conf")," on your\nflash device."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You are done! You no longer need perl installed, and can remove it."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Last but not least: see also the online Help for System Temp!")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: to unassign or remove a sensor just unselect it from the\ndropdown menu. This will also allow you to make new assignments (for\nexample when the wrong sensor was chosen).")),(0,r.kt)("h2",{id:"setting-up-sensing-for-older-versions"},"Setting up sensing for older versions"),(0,r.kt)("p",null,"To pass system sensor data (such as temps, voltages, and fan speeds) to\n3rd-party addons such as\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=30939"},"Dynamix")," (using\nits ",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=31172"},"System Temp\nplugin"),") or\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=12698.2685"},"SimpleFeatures"),",\nyou need to load the required drivers and setup your sensor\nconfiguration file ",(0,r.kt)("strong",{parentName:"p"},"sensors.conf"),"."),(0,r.kt)("p",null,"The following steps should work for most motherboards. ",(0,r.kt)("em",{parentName:"p"},"(tested on a\nSuperMicro C2SEE/C2SEA)")),(0,r.kt)("h3",{id:"step-1-open-a-console"},"Step 1: Open a console"),(0,r.kt)("p",null,"You can either use the command console on the UnRAID server itself (if\nyou have a keyboard and monitor attached), or you can login from another\ncomputer and use ",(0,r.kt)("a",{parentName:"p",href:"/legacy/FAQ/terminal-access"},"SSH or Telnet"),". On\nWindows, the ",(0,r.kt)("a",{parentName:"p",href:"/legacy/FAQ/terminal-access#putty"},"PuTTY")," client for SSH\nand Telnet is preferred, because it allows you to use cut and paste, to\nsave generated lines for your own sensors configuration file."),(0,r.kt)("h3",{id:"step-2-run-sensors"},"Step 2: Run sensors"),(0,r.kt)("p",null,"At the command prompt, run ",(0,r.kt)("strong",{parentName:"p"},"sensors"),". Even without loading drivers,\nyou will probably see a sensor or two, with temps and other info. The\noutput should appear similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@Skynet:~# sensors\ncoretemp-isa-0000\nAdapter: ISA adapter\nCore 0:       +37.0 C  (high = +78.0 C, crit = +100.0 C)\nCore 1:       +37.0 C  (high = +78.0 C, crit = +100.0 C)\nw83627dhg-isa-0290\nAdapter: ISA adapter\nVcore:        +0.92 V  (min =  +0.92 V, max =  +1.48 V)\nin1:          +1.86 V  (min =  +1.65 V, max =  +1.99 V)\nAVCC:         +3.38 V  (min =  +2.96 V, max =  +3.63 V)\n+3.3V:        +3.38 V  (min =  +2.61 V, max =  +0.11 V)  ALARM\nin4:          +1.57 V  (min =  +1.35 V, max =  +1.65 V)\nin5:          +1.30 V  (min =  +1.13 V, max =  +1.38 V)\nin6:          +1.46 V  (min =  +1.42 V, max =  +1.52 V)\n3VSB:         +3.33 V  (min =  +2.96 V, max =  +3.63 V)\nVbat:         +3.26 V  (min =  +2.96 V, max =  +3.63 V)\nfan1:           0 RPM  (min =  715 RPM, div = 16)  ALARM\nfan2:        2678 RPM  (min =  712 RPM, div = 8)\nfan3:           0 RPM  (min =  715 RPM, div = 16)  ALARM\nfan4:           0 RPM  (min =   44 RPM, div = 128)  ALARM\nfan5:           0 RPM  (min =  715 RPM, div = 16)  ALARM\ntemp1:        +35.0 C  (high = +60.0 C, hyst = +55.0 C)  sensor = thermistor\ntemp2:        +37.0 C  (high = +80.0 C, hyst = +75.0 C)  sensor = CPU diode\ntemp3:         +0.0 C  (high = +80.0 C, hyst = +75.0 C)  sensor = CPU diode\ncpu0_vid:    +1.513 V\nintrusion0:  ALARM\n")),(0,r.kt)("h3",{id:"step-3-note-the-devices"},"Step 3: Note the devices"),(0,r.kt)("p",null,"Make note of the sensor device(s). In the above example, they are\n",(0,r.kt)("strong",{parentName:"p"},"w83627dhg-isa-0290")," and ",(0,r.kt)("strong",{parentName:"p"},"coretemp-isa-0000"),". (",(0,r.kt)("strong",{parentName:"p"},"Note:")," for\ncoretemp you should run ",(0,r.kt)("strong",{parentName:"p"},"sensors -u coretemp-isa-0000")," again to see\nthe actual temperature labels. If they are called something like\ntemp1_input, just use temp1 as a label for your sensors.conf - see\nbelow)"),(0,r.kt)("h3",{id:"step-4-note-the-sensors"},"Step 4: Note the sensors"),(0,r.kt)("p",null,"Make note of the specific sensors you wish to display. In the above\nexample, ",(0,r.kt)("strong",{parentName:"p"},"temp1")," is the motherboard and ",(0,r.kt)("strong",{parentName:"p"},"temp2")," is the CPU."),(0,r.kt)("h3",{id:"step-5-create-sensorsconf"},"Step 5: Create sensors.conf"),(0,r.kt)("p",null,"Create your ",(0,r.kt)("strong",{parentName:"p"},"sensors.conf")," file. This will contain the sensor\ndevice(s) and labels (optional) for the temperatures you wish to\nmonitor. For Dynamix and Simple Features, it must establish the 2 labels\n'MB Temp' and 'CPU Temp'."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To be used by Dynamix, save this file to your flash drive, in the\npath ",(0,r.kt)("strong",{parentName:"li"},"/boot/config/plugins/dynamix"),". In Windows, this path would\nbe something like ",(0,r.kt)("strong",{parentName:"li"},"\\","\\","tower","\\","flash","\\","config","\\","plugins","\\","dynamix"),"."),(0,r.kt)("li",{parentName:"ul"},"If not for Dynamix, save this file into a persistent location on the\nflash drive, e.g. ",(0,r.kt)("strong",{parentName:"li"},"/boot/config")," or ",(0,r.kt)("strong",{parentName:"li"},"/boot/custom"),". Later, you\nwill probably need a copy command in your 'go' file, to copy it to\nits correct location in the UnRAID system.")),(0,r.kt)("p",null,"In the sample ",(0,r.kt)("strong",{parentName:"p"},"sensors.conf")," file below, I'm only using data from the\n2nd sensor device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# lines starting with "#" are comments and ignored\n# sensor configuration\n\nchip "w83627dhg-isa-0290"\n\nlabel temp1 "MB Temp"\nlabel temp2 "CPU Temp"\n')),(0,r.kt)("h3",{id:"step-6-prepare-sensors-detect"},"Step 6: Prepare sensors-detect"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"sensors-detect")," tool is a long script that should detect all of\nyour sensors, and help you get the right sensor driver names. A copy is\nincluded with UnRAID, but it's not the latest, and if you have a new\nmotherboard (recent manufacture), you will want to use the latest\nversion, as it is occasionally updated with the newest drivers and\nsensors. ",(0,r.kt)("del",{parentName:"p"},"Go to the ",(0,r.kt)("a",{parentName:"del",href:"http://www.lm-sensors.org/wiki/Devices"},"lm-sensors\nDevices"),' page, and look for the\nlink "',(0,r.kt)("strong",{parentName:"del"},"latest version of sensors-detect"),'", in the 3rd paragraph\ncurrently.')," ",(0,r.kt)("em",{parentName:"p"},"The lm-sensors site is down currently!")," Download and copy\nit to your flash drive. To run it (assuming it's in the root folder of\nthe flash), you will need to either change to the flash drive (",(0,r.kt)("strong",{parentName:"p"},"cd\n/boot"),"), or run the command as ",(0,r.kt)("strong",{parentName:"p"},"/boot/sensors-detect"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"sensors-detect")," tool requires ",(0,r.kt)("a",{parentName:"p",href:"http://www.perl.org/"},"Perl")," to be\ninstalled, at least temporarily."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it isn't already installed, you will need to download an\nappropriate version for your UnRAID release:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For UnRAID v4 series, get it from\n",(0,r.kt)("a",{parentName:"li",href:"http://slackware.cs.utah.edu/pub/slackware/slackware-12.2/slackware/d/perl-5.10.0-i486-1.tgz"},"here")),(0,r.kt)("li",{parentName:"ul"},"For UnRAID v5 series, get it from\n",(0,r.kt)("a",{parentName:"li",href:"http://slackware.cs.utah.edu/pub/slackware/slackware-13.1/slackware/d/perl-5.10.1-i486-1.txz"},"here"),(0,r.kt)("em",{parentName:"li"},"May need updated/corrected perl links.")),(0,r.kt)("li",{parentName:"ul"},"For UnRAID v6 series, get it from\n",(0,r.kt)("a",{parentName:"li",href:"http://slackware.cs.utah.edu/pub/slackware/slackware64-14.1/slackware64/d/perl-5.18.1-x86_64-1.txz"},"here"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy it to the ",(0,r.kt)("strong",{parentName:"p"},"packages")," folder on your flash drive, creating\nthat folder if it does not already exist (",(0,r.kt)("strong",{parentName:"p"},"md /boot/packages"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then use ",(0,r.kt)("strong",{parentName:"p"},"installpkg")," and the perl package name to install it (eg.\n",(0,r.kt)("strong",{parentName:"p"},"installpkg /boot/packages/perl-5.18.1-x86_64-1.txz"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Or for Dynamix, you can modify the Dynamix System Temp plugin itself\n(currently for v5 it's\n",(0,r.kt)("strong",{parentName:"p"},"/boot/config/plugins/dynamix.system.temp-2.1.0-noarch-bergware.plg"),'),\nby locating the line ending with "# perl scripting" and replacing\n"no-install" with "do-install". Then re-install the plugin or\nreboot. Change it back to "no-install" when you are done with this\nwhole procedure.'))),(0,r.kt)("h3",{id:"step-7-run-sensors-detect"},"Step 7: Run sensors-detect"),(0,r.kt)("p",null,"Run ",(0,r.kt)("strong",{parentName:"p"},"sensors-detect"),". Enter ","[YES]"," for the various scans. Enter\n","[NO]"," to automatically generate the config file (last prompt). The\noutput should be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@Skynet:~# sensors-detect\n# sensors-detect revision 6031 (2012-03-07 17:14:01 +0100)\n# System: Supermicro C2SEA [1234567890]\n\nThis program will help you determine which kernel modules you need\nto load to use lm_sensors most effectively. It is generally safe\nand recommended to accept the default answers to all questions,\nunless you know what you're doing.\n\nSome south bridges, CPUs or memory controllers contain embedded sensors.\nDo you want to scan for them? This is totally safe. (YES/no): YES\nSilicon Integrated Systems SIS5595...                       No\nVIA VT82C686 Integrated Sensors...                          No\nVIA VT8231 Integrated Sensors...                            No\nAMD K8 thermal sensors...                                   No\nAMD Family 10h thermal sensors...                           No\nAMD Family 11h thermal sensors...                           No\nAMD Family 12h and 14h thermal sensors...                   No\nAMD Family 15h thermal sensors...                           No\nAMD Family 15h power sensors...                             No\nIntel digital thermal sensor...                             Success!\n   (driver `coretemp')\nIntel AMB FB-DIMM thermal sensor...                         No\nVIA C7 thermal sensor...                                    No\nVIA Nano thermal sensor...                                  No\n\nSome Super I/O chips contain embedded sensors. We have to write to\nstandard I/O ports to probe them. This is usually safe.\n\nDo you want to scan for Super I/O sensors? (YES/no): YES\nProbing for Super-I/O at 0x2e/0x2f\nTrying family `National Semiconductor/ITE'...               No\nTrying family `SMSC'...                                     No\nTrying family `VIA/Winbond/Nuvoton/Fintek'...               Yes\nFound `Winbond W83627DHG-P/W83527HG Super IO Sensors'       Success!\n   (address 0x290, driver `w83627ehf')\nProbing for Super-I/O at 0x4e/0x4f\nTrying family `National Semiconductor/ITE'...               No\nTrying family `SMSC'...                                     No\nTrying family `VIA/Winbond/Nuvoton/Fintek'...               No\nTrying family `ITE'...                                      No\n\nSome systems (mainly servers) implement IPMI, a set of common interfaces\nthrough which system health data may be retrieved, amongst other things.\nWe first try to get the information from SMBIOS. If we don't find it\nthere, we have to read from arbitrary I/O ports to probe for such\ninterfaces. This is normally safe. Do you want to scan for IPMI\ninterfaces? (YES/no): YES\nProbing for `IPMI BMC KCS' at 0xca0...                      No\nProbing for `IPMI BMC SMIC' at 0xca8...                     No\n\nSome hardware monitoring chips are accessible through the ISA I/O ports.\nWe have to write to arbitrary I/O ports to probe them. This is usually\nsafe though. Yes, you do have ISA I/O ports even if you do not have any\nISA slots! Do you want to scan the ISA I/O ports? (yes/NO): YES\nProbing for `National Semiconductor LM78' at 0x290...       No\nProbing for `National Semiconductor LM79' at 0x290...       No\nProbing for `Winbond W83781D' at 0x290...                   No\nProbing for `Winbond W83782D' at 0x290...                   No\n\nLastly, we can probe the I2C/SMBus adapters for connected hardware\nmonitoring devices. This is the most risky part, and while it works\nreasonably well on most systems, it has been reported to cause trouble\non some systems.\nDo you want to probe the I2C/SMBus adapters now? (YES/no): YES\nUsing driver `i2c-i801' for device 0000:00:1f.3: Intel ICH10\nModule i2c-dev loaded successfully.\n\nNext adapter: SMBus I801 adapter at 0400 (i2c-0)\nDo you want to scan it? (YES/no/selectively): YES\nClient found at address 0x50\nProbing for `Analog Devices ADM1033'...                     No\nProbing for `Analog Devices ADM1034'...                     No\nProbing for `SPD EEPROM'...                                 Yes\n   (confidence 8, not a hardware monitoring chip)\nProbing for `EDID EEPROM'...                                No\nClient found at address 0x52\nProbing for `Analog Devices ADM1033'...                     No\nProbing for `Analog Devices ADM1034'...                     No\nProbing for `SPD EEPROM'...                                 Yes\n   (confidence 8, not a hardware monitoring chip)\n\nNow follows a summary of the probes I have just done.\nJust press ENTER to continue:\n\nDriver `w83627ehf':\n * ISA bus, address 0x290\n   Chip `Winbond W83627DHG-P/W83527HG Super IO Sensors' (confidence: 9)\n\nDriver `coretemp':\n * Chip `Intel digital thermal sensor' (confidence: 9)\nDo you want to generate /etc/sysconfig/lm_sensors? (yes/NO): NO\nTo load everything that is needed, add this to one of the system\ninitialization scripts (e.g. /etc/rc.d/rc.local):\n\n#----cut here----\n# Chip drivers\nmodprobe coretemp\nmodprobe w83627ehf\n/usr/bin/sensors -s\n#----cut here----\n\nIf you have some drivers built into your kernel, the list above will\ncontain too many modules. Skip the appropriate ones! You really\nshould try these commands right now to make sure everything is\nworking properly. Monitoring programs won't work until the needed\nmodules are loaded.\n\nUnloading i2c-dev... OK\n")),(0,r.kt)("h3",{id:"step-8-note-the-drivers"},"Step 8: Note the drivers"),(0,r.kt)("p",null,"Make note of the driver name(s) listed in the summary. In the above\nexample, they are ",(0,r.kt)("strong",{parentName:"p"},"w83627ehf")," and ",(0,r.kt)("strong",{parentName:"p"},"coretemp"),".\\"),(0,r.kt)("h3",{id:"step-9-add-modprobes-to-go"},"Step 9: Add modprobes to go"),(0,r.kt)("p",null,"Edit your 'go' file and add in the ",(0,r.kt)("strong",{parentName:"p"},"modprobe")," command for each\nsensor driver that is required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#\xa0modprobe\xa0for\xa0each\xa0sensor`\nmodprobe\xa0w83627ehf\nmodprobe\xa0<sensor2>\nmodprobe\xa0<sensor3>\n")),(0,r.kt)("h3",{id:"step-10-add-the-copy-instruction-to-go"},"Step 10: Add the copy instruction to go"),(0,r.kt)("p",null,"If you are configuring for Dynamix, this step is not needed, so skip to\nStep 11. Otherwise, add another line in your 'go' file to copy your\npersistent sensors.conf file (from where you created/saved it in Step 5)\ninto the appropriate location on each boot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#\xa0copy\xa0the\xa0sensor.conf\xa0file\xa0for\xa0use\ncp\xa0/boot/config/sensors.conf\xa0/etc/sensors.d\n")),(0,r.kt)("h3",{id:"step-11-reboot-and-check"},"Step 11: Reboot and check"),(0,r.kt)("p",null,"Reboot to load up the changes, and check whether the temps are correct.\nIf wrong, you may have to select different sensors or\n",(0,r.kt)("a",{parentName:"p",href:"http://linux.die.net/man/5/sensors.conf"},"customize")," the\n",(0,r.kt)("strong",{parentName:"p"},"sensors.conf")," file."))}u.isMDXComponent=!0}}]);