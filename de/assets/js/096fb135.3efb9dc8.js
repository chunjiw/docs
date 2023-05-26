"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),N=i,d=m["".concat(s,".").concat(N)]||m[N]||k[N]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=N;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},2368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={},l=void 0,o={unversionedId:"unraid-os/release-notes/6.11.0",id:"unraid-os/release-notes/6.11.0",title:"6.11.0",description:"Version 6.11.0 2022-09-23",source:"@site/docs/unraid-os/release-notes/6.11.0.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.11.0",permalink:"/de/unraid-os/release-notes/6.11.0",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.11.0.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.11.1",permalink:"/de/unraid-os/release-notes/6.11.1"},next:{title:"6.10.3",permalink:"/de/unraid-os/release-notes/6.10.3"}},s={},p=[{value:"Version 6.11.0 2022-09-23",id:"version-6110-2022-09-23",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Change Log vs. Unraid OS 6.10.3",id:"change-log-vs-unraid-os-6103",level:2},{value:"Management",id:"management",level:4},{value:"Linux kernel",id:"linux-kernel",level:4},{value:"Base distro",id:"base-distro",level:4}],u={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"version-6110-2022-09-23"},"Version 6.11.0 2022-09-23"),(0,i.kt)("h3",{id:"improvements"},"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"With this release there have been many base package updates including several CVE mitigations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Linux kernel update includes mitigation for ",(0,i.kt)("a",{parentName:"p",href:"https://lwn.net/Articles/898011/"},"Processor MMIO stale-data vulnerabilities"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The plugin system has been refactored so that 'plugin install' can proceed in the background. This alleviates\nissue where a user may think installation has crashed and closes the window, when actually it has not crashed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Many other webGUI improvements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added support for specifying custom VNC ports in VM manager form editor. Custom port number specified\nusing XML editor will be preserved when switching to forms-based editor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spin down for non-rotational devices now places those devices in standby mode if supported by the device. Similarly,\nspin up, or any I/O to the device will restore normal operation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Display NVMe device capabilities obtained from SMART info.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added necessary kernel CONFIG options to support Sr-iov with mellanox connectx4+ cards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Merged Dynamix SSD Trim plugin into Unraid OS webGUI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Preliminary support for cgroup2. Pass 'unraidcgroup2' on syslinux append line to activate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Included perl in base distro."))),(0,i.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed issue in VM manager where VM log can not open when VM name has an embedded '#' character.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed issue where Parity check pause/resume on schedule was broken.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed issue installing registration keys.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updated 'samba' to address security mitigations. Also should get rid of kernel message\ncomplaining about \"Attempt to set a LOCK_MAND lock via flock(2).\"")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed issue switching from 'test' branch to 'next'.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quit trying to spin down devices which do not support standby mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed AD join issued caused by outdated cyras-sasl library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not start mcelog daemon if CPU is unsupported (most AMD processors).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fix nginx not recognizing SSL certificate renewal.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"wireguard: check the reachability of the gateway (next-hop) before starting the WG tunnel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Ignore "ERROR:" strings mixed in "btrfs filesystem show" command output.\nThis solves problem where libblkid could tag a parity disk as having btrfs file system\nbecause the place it looks for the "magic number" happens to matches btrfs. Subsequent\n"btrfs fi" commands will attempt to read btrfs metadata from this device which fails\nbecause there really is not a btrfs filesystem there.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed bug in mover that prevented files from being moved from unRAID array to a cache pool (mode Prefer)\nif the share name contains a space."))),(0,i.kt)("h2",{id:"change-log-vs-unraid-os-6103"},"Change Log vs. Unraid OS 6.10.3"),(0,i.kt)("h4",{id:"management"},"Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add sha256 checks of un-zipped files in unRAIDServer.plg."),(0,i.kt)("li",{parentName:"ul"},'bash: in /etc/profile omit "." (current directory) from PATH'),(0,i.kt)("li",{parentName:"ul"},"docker: do not call 'docker stop' if there are no running containers"),(0,i.kt)("li",{parentName:"ul"},"emhttpd: improve standby (spinning) support"),(0,i.kt)("li",{parentName:"ul"},"mover: fixed issue preventing moving filed from array to cache if share name contains a space"),(0,i.kt)("li",{parentName:"ul"},"rc.nginx: enable OCSP stapling on certs which include an OCSP responder URL"),(0,i.kt)("li",{parentName:"ul"},"rc.nginx: compress 'woff' font files and instruct browser to cache"),(0,i.kt)("li",{parentName:"ul"},"rc.wireguard: add better troubleshooting for WireGuard autostart"),(0,i.kt)("li",{parentName:"ul"},"rc.S: support early load of plugin driver modules"),(0,i.kt)("li",{parentName:"ul"},"SMB: fixed 'fruit' settings for the USB Flash boot device"),(0,i.kt)("li",{parentName:"ul"},"SMB: remove NTLMv1 support since removed from Linux kernel"),(0,i.kt)("li",{parentName:"ul"},"SMB: (temporarily) move vfs_fruit settings into separate /etc/samba/smb-fruit.conf file"),(0,i.kt)("li",{parentName:"ul"},"SMB: (temporarily) get rid of Samba 'idmap_hash is deprecated' nag lines"),(0,i.kt)("li",{parentName:"ul"},"startup: Prevent installing downgraded versions of packages which might exist in /boot/extra"),(0,i.kt)("li",{parentName:"ul"},"upc: version v1.3.0"),(0,i.kt)("li",{parentName:"ul"},"webgui: Plugin system update",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Detach frontend and backend operation"),(0,i.kt)("li",{parentName:"ul"},"Use nchan as communication channel"),(0,i.kt)("li",{parentName:"ul"},"Allow window to be closed while backend continues"),(0,i.kt)("li",{parentName:"ul"},"Use SWAL as window manager"),(0,i.kt)("li",{parentName:"ul"},"Added multi remove ability on Plugins page"),(0,i.kt)("li",{parentName:"ul"},"Added update all plugins with details"))),(0,i.kt)("li",{parentName:"ul"},"webgui: docker: use docker label as primary source for WebUI",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This makes the 'net.unraid.docker.webui' docker label the primary source when parsing the web UI address. If the docker label is missing, the template value will be used instead."))),(0,i.kt)("li",{parentName:"ul"},"webgui: Update Credits.page"),(0,i.kt)("li",{parentName:"ul"},"webgui: VM manager: Fix VM log can not open when VM name has an embedded '#'"),(0,i.kt)("li",{parentName:"ul"},"webgui: Management Access page: add details for self-signed certs"),(0,i.kt)("li",{parentName:"ul"},"webgui: Parity check: fix regression error"),(0,i.kt)("li",{parentName:"ul"},"webgui: Remove session creation in scripts"),(0,i.kt)("li",{parentName:"ul"},"webgui: Update ssh key regex",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add support for ed25519/sk-ed25519"),(0,i.kt)("li",{parentName:"ul"},"Remove support for ecdsa (insecure)"),(0,i.kt)("li",{parentName:"ul"},"Use proper regex to check for valid key types"))),(0,i.kt)("li",{parentName:"ul"},"webgui: misc. style updates"),(0,i.kt)("li",{parentName:"ul"},"webgui: Management access: HTTP port setting should always be enabled"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix: preserve vnc port settings"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix regression error in plugin system"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix issue installing registration keys"),(0,i.kt)("li",{parentName:"ul"},"webgui: Highlight case selection when custom image is selected"),(0,i.kt)("li",{parentName:"ul"},"webgui: fix(upc): v1.4.2 apiVersion check regression"),(0,i.kt)("li",{parentName:"ul"},"webgui: Update Disk Capabilities pages for NVME drives"),(0,i.kt)("li",{parentName:"ul"},"webgui: chore(upc): v1.6.0"),(0,i.kt)("li",{parentName:"ul"},"webgui: Plugin system and docker update"),(0,i.kt)("li",{parentName:"ul"},"webgui: System info - style update"),(0,i.kt)("li",{parentName:"ul"},"webgui: Plugins: keep header buttons in same position"),(0,i.kt)("li",{parentName:"ul"},"webgui: Prevent overflow in container size for low resolutions"),(0,i.kt)("li",{parentName:"ul"},"webgui: VM Manager: Add boot order to GUI and CD hot plug function"),(0,i.kt)("li",{parentName:"ul"},"webgui: Docker Manager: add ability to specify shell with container label."),(0,i.kt)("li",{parentName:"ul"},"webgui: fix: Discord notification agent url"),(0,i.kt)("li",{parentName:"ul"},"webgui: Suppress info icon in banner message when no info is available"),(0,i.kt)("li",{parentName:"ul"},"webgui: Add Spindown message and use -n for identity if scsi drive."),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix SAS Selftest"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix plugin multi updates"),(0,i.kt)("li",{parentName:"ul"},"webgui: UPS display enhancements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add icon for each category"),(0,i.kt)("li",{parentName:"ul"},"Add translation in UPS section on dashboard"),(0,i.kt)("li",{parentName:"ul"},"Add Output voltage / frequency value"),(0,i.kt)("li",{parentName:"ul"},"Add coloring depending on settings"),(0,i.kt)("li",{parentName:"ul"},"Normalize units"),(0,i.kt)("li",{parentName:"ul"},"Make updates near real-time"),(0,i.kt)("li",{parentName:"ul"},"Added UPS model field"))),(0,i.kt)("li",{parentName:"ul"},"webgui: JQuery: version 3.6.1"),(0,i.kt)("li",{parentName:"ul"},"webgui: JQueryUI: version 1.13.2"),(0,i.kt)("li",{parentName:"ul"},"webgui: improved 'cache busting' on font file urls"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fixed: text color in docker popup window sometimes wrong"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fixed: show read errors during Read Check"),(0,i.kt)("li",{parentName:"ul"},"webgui: VM Manager: Add USB Startup policy; add Missing USB support"),(0,i.kt)("li",{parentName:"ul"},"webgui: Docker: fixed javascript error when no containers exist"),(0,i.kt)("li",{parentName:"ul"},"webgui: added 3rd party system diagnostics",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"added diagnostics for third party plugin packages"),(0,i.kt)("li",{parentName:"ul"},"added diagnostics for /dev/dri devices"),(0,i.kt)("li",{parentName:"ul"},"added diagnostics for /dev/dvb devices"),(0,i.kt)("li",{parentName:"ul"},"added diagnostics for nvidia devices")))),(0,i.kt)("h4",{id:"linux-kernel"},"Linux kernel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"version 5.19.9 (CVE-2022-21123 (CVE-2022-21123 CVE-2022-21125 CVE-2022-21166)"),(0,i.kt)("li",{parentName:"ul"},"md/unraid: version 2.9.24"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_IOMMU_DEFAULT_PASSTHROUGH: Passthrough"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_VIRTIO_IOMMU: Virtio IOMMU driver"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_X86_AMD_PSTATE: AMD Processor P-State driver"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_FIREWIRE: FireWire driver stack"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_FIREWIRE_OHCI: OHCI-1394 controllers"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_FIREWIRE_SBP2: Storage devices (SBP-2 protocol)"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_FIREWIRE_NET: IP networking over 1394"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_INPUT_UINPUT: User level driver support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_INPUT_JOYDEV: Joystick interface"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_INPUT_JOYSTICK: Joysticks/Gamepads"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_JOYSTICK_XPAD: X-Box gamepad support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_JOYSTICK_XPAD_FF: X-Box gamepad rumble support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_JOYSTICK_XPAD_LEDS: LED Support for Xbox360 controller 'BigX' LED"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_MLX5_TLS: Mellanox Technologies TLS Connect-X support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_MLX5_ESWITCH: Mellanox Technologies MLX5 SRIOV E-Switch suppor"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_MLX5_CLS_ACT: MLX5 TC classifier action support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_MLX5_TC_SAMPLE: MLX5 TC sample offload support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_MLXSW_SPECTRUM: Mellanox Technologies Spectrum family support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_NET_SWITCHDEV: Switch (and switch-ish) device support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_TLS: Transport Layer Security support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_TLS_DEVICE: Transport Layer Security HW offload"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_TLS_TOE: Transport Layer Security TCP stack bypass"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_VMD: Intel Volume Management Device Driver"),(0,i.kt)("li",{parentName:"ul"},"added additional sensor drivers:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CONFIG_AMD_SFH_HID: AMD Sensor Fusion Hub"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_AQUACOMPUTER_D5NEXT: Aquacomputer D5 Next watercooling pump"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_MAX6620: Maxim MAX6620 fan controller"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_NZXT_SMART2: NZXT RGB & Fan Controller/Smart Device v2"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_SBRMI: Emulated SB-RMI sensor"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_SHT4x: Sensiron humidity and temperature sensors. SHT4x and compat."),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_SY7636A: Silergy SY7636A"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_INA238: Texas Instruments INA238"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_TMP464: Texas Instruments TMP464 and compatible"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_ASUS_WMI: ASUS WMI X370/X470/B450/X399"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_ASUS_WMI_EC: ASUS WMI B550/X570"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SENSORS_ASUS_EC: ASUS EC Sensors"))),(0,i.kt)("li",{parentName:"ul"},"patch: add reference to missing firmware in drivers/bluetooth/btrtl.c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"rtl8723d_fw.bin"),(0,i.kt)("li",{parentName:"ul"},"rtl8761b_fw.bin"),(0,i.kt)("li",{parentName:"ul"},"rtl8761bu_fw.bin"),(0,i.kt)("li",{parentName:"ul"},"rtl8821c_fw.bin"),(0,i.kt)("li",{parentName:"ul"},"rtl8822cs_fw.bin"),(0,i.kt)("li",{parentName:"ul"},"rtl8822cu_fw.bin"))),(0,i.kt)("li",{parentName:"ul"},"CONFIG_BPF_UNPRIV_DEFAULT_OFF: Disable unprivileged BPF by default"),(0,i.kt)("li",{parentName:"ul"},"patch: quirk for Team Group MP33 M.2 2280 1TB NVMe (globally duplicate IDs for nsid)"),(0,i.kt)("li",{parentName:"ul"},"turn on all IPv6 kernel options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CONFIG",(0,i.kt)("em",{parentName:"li"},"INET6"),"*"),(0,i.kt)("li",{parentName:"ul"},"CONFIG",(0,i.kt)("em",{parentName:"li"},"IPV6"),"*"))),(0,i.kt)("li",{parentName:"ul"},"CONFIG_RC_CORE: Remote Controller support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SFC_SIENA: Solarflare SFC9000 support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SFC_SIENA_MCDI_LOGGING: Solarflare SFC9000-family MCDI logging support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SFC_SIENA_MCDI_MON: Solarflare SFC9000-family hwmon support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_SFC_SIENA_SRIOV: Solarflare SFC9000-family SR-IOV support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_ZRAM: Compressed RAM block device support"),(0,i.kt)("li",{parentName:"ul"},"CONFIG_ZRAM_DEF_COMP_LZ4: Default ram compressor (lz4)"),(0,i.kt)("li",{parentName:"ul"},"turn on all EDAC kernel options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CONFIG_EDAC: EDAC (Error Detection And Correction) reporting"),(0,i.kt)("li",{parentName:"ul"},"CONFIG",(0,i.kt)("em",{parentName:"li"},"EDAC"),"*")))),(0,i.kt)("h4",{id:"base-distro"},"Base distro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aaa_base: version 15.1"),(0,i.kt)("li",{parentName:"ul"},"aaa_glibc-solibs: version 2.36"),(0,i.kt)("li",{parentName:"ul"},"aaa_libraries: version 15.1"),(0,i.kt)("li",{parentName:"ul"},"at: version 3.2.3"),(0,i.kt)("li",{parentName:"ul"},"bind: version 9.18.6"),(0,i.kt)("li",{parentName:"ul"},"btrfs-progs: version 5.19.1"),(0,i.kt)("li",{parentName:"ul"},"ca-certificates: version 20220622"),(0,i.kt)("li",{parentName:"ul"},"cifs-utils: version 7.0"),(0,i.kt)("li",{parentName:"ul"},"coreutils: version 9.1"),(0,i.kt)("li",{parentName:"ul"},"cracklib: version 2.9.8"),(0,i.kt)("li",{parentName:"ul"},"cryptsetup: version 2.5.0"),(0,i.kt)("li",{parentName:"ul"},"curl: version 7.85.0"),(0,i.kt)("li",{parentName:"ul"},"cyrus-sasl: version 2.1.28"),(0,i.kt)("li",{parentName:"ul"},"dbus: version 1.14.0"),(0,i.kt)("li",{parentName:"ul"},"dhcpcd: version 9.4.1"),(0,i.kt)("li",{parentName:"ul"},"dmidecode: version 3.4"),(0,i.kt)("li",{parentName:"ul"},"docker: version 20.10.17 (CVE-2022-29526 CVE-2022-30634 CVE-2022-30629 CVE-2022-30580 CVE-2022-29804 CVE-2022-29162 CVE-2022-31030)"),(0,i.kt)("li",{parentName:"ul"},"etc: version 15.1"),(0,i.kt)("li",{parentName:"ul"},"ethtool: version 5.19"),(0,i.kt)("li",{parentName:"ul"},"eudev: version 3.2.11"),(0,i.kt)("li",{parentName:"ul"},"file: version 5.43"),(0,i.kt)("li",{parentName:"ul"},"findutils: version 4.9.0"),(0,i.kt)("li",{parentName:"ul"},"firefox: version 105.0.r20220922151854-x86_64 (AppImage)"),(0,i.kt)("li",{parentName:"ul"},"fuse3: version 3.12.0"),(0,i.kt)("li",{parentName:"ul"},"gawk: version 5.2.0"),(0,i.kt)("li",{parentName:"ul"},"gdbm: version 1.23"),(0,i.kt)("li",{parentName:"ul"},"git: version 2.37.3"),(0,i.kt)("li",{parentName:"ul"},"glib2: version 2.72.3"),(0,i.kt)("li",{parentName:"ul"},"glibc: version 2.36"),(0,i.kt)("li",{parentName:"ul"},"glibc-zoneinfo: version 2022c"),(0,i.kt)("li",{parentName:"ul"},"gnutls: version 3.7.7"),(0,i.kt)("li",{parentName:"ul"},"gptfdisk: version 1.0.9"),(0,i.kt)("li",{parentName:"ul"},"grep: version 3.8"),(0,i.kt)("li",{parentName:"ul"},"gzip: version 1.12"),(0,i.kt)("li",{parentName:"ul"},"hdparm: version 9.65"),(0,i.kt)("li",{parentName:"ul"},"htop: version 3.2.1"),(0,i.kt)("li",{parentName:"ul"},"icu4c: version 71.1"),(0,i.kt)("li",{parentName:"ul"},"inotify-tools: version 3.22.6.0"),(0,i.kt)("li",{parentName:"ul"},"iperf3: version 3.11"),(0,i.kt)("li",{parentName:"ul"},"iproute2: version 5.19.0"),(0,i.kt)("li",{parentName:"ul"},"iptables: version 1.8.8"),(0,i.kt)("li",{parentName:"ul"},"jemalloc: version 5.3.0"),(0,i.kt)("li",{parentName:"ul"},"json-c: version 0.16_20220414"),(0,i.kt)("li",{parentName:"ul"},"json-glib: version 1.6.6"),(0,i.kt)("li",{parentName:"ul"},"kmod: version 30"),(0,i.kt)("li",{parentName:"ul"},"krb5: version 1.20"),(0,i.kt)("li",{parentName:"ul"},"libaio: version 0.3.113"),(0,i.kt)("li",{parentName:"ul"},"libarchive: version 3.6.1"),(0,i.kt)("li",{parentName:"ul"},"libcap-ng: version 0.8.3"),(0,i.kt)("li",{parentName:"ul"},"libcgroup: version 3.0.0"),(0,i.kt)("li",{parentName:"ul"},"libdrm: version 2.4.113"),(0,i.kt)("li",{parentName:"ul"},"libepoxy: version 1.5.10"),(0,i.kt)("li",{parentName:"ul"},"libffi: version 3.4.2"),(0,i.kt)("li",{parentName:"ul"},"libgcrypt: version 1.10.1"),(0,i.kt)("li",{parentName:"ul"},"libgpg-error: version 1.45"),(0,i.kt)("li",{parentName:"ul"},"libidn: version 1.41"),(0,i.kt)("li",{parentName:"ul"},"libjpeg-turbo: version 2.1.4"),(0,i.kt)("li",{parentName:"ul"},"libmnl: version 1.0.5"),(0,i.kt)("li",{parentName:"ul"},"libnetfilter_conntrack: version 1.0.9"),(0,i.kt)("li",{parentName:"ul"},"libnfnetlink: version 1.0.2"),(0,i.kt)("li",{parentName:"ul"},"libnftnl: version 1.2.3"),(0,i.kt)("li",{parentName:"ul"},"libnl3: version 3.7.0"),(0,i.kt)("li",{parentName:"ul"},"libpng: version 1.6.38"),(0,i.kt)("li",{parentName:"ul"},"libssh: version 0.10.4"),(0,i.kt)("li",{parentName:"ul"},"libtasn1: version 4.19.0"),(0,i.kt)("li",{parentName:"ul"},"libtirpc: version 1.3.3"),(0,i.kt)("li",{parentName:"ul"},"liburcu: version 0.13.1"),(0,i.kt)("li",{parentName:"ul"},"libusb: version 1.0.26"),(0,i.kt)("li",{parentName:"ul"},"libwebp: version 1.2.4"),(0,i.kt)("li",{parentName:"ul"},"libxml2: version 2.9.14"),(0,i.kt)("li",{parentName:"ul"},"libxslt: version 1.1.36"),(0,i.kt)("li",{parentName:"ul"},"libzip: version 1.9.2"),(0,i.kt)("li",{parentName:"ul"},"logrotate: version 3.20.1"),(0,i.kt)("li",{parentName:"ul"},"lsof: version 4.95.0"),(0,i.kt)("li",{parentName:"ul"},"lzip: version 1.23"),(0,i.kt)("li",{parentName:"ul"},"mc: version 4.8.28"),(0,i.kt)("li",{parentName:"ul"},"mcelog: version 189"),(0,i.kt)("li",{parentName:"ul"},"nano: version 6.4"),(0,i.kt)("li",{parentName:"ul"},"nfs-utils: version 2.6.2"),(0,i.kt)("li",{parentName:"ul"},"nghttp2: version 1.49.0"),(0,i.kt)("li",{parentName:"ul"},"nginx: version 1.22.0"),(0,i.kt)("li",{parentName:"ul"},"ntfs-3g: version 2022.5.17"),(0,i.kt)("li",{parentName:"ul"},"ntp: version 4.2.8p15"),(0,i.kt)("li",{parentName:"ul"},"oniguruma: version 6.9.8"),(0,i.kt)("li",{parentName:"ul"},"openssh: version 9.0p1"),(0,i.kt)("li",{parentName:"ul"},"openssl: version 1.1.1q (CVE-2022-1292 CVE-2022-2097 CVE-2022-2274)"),(0,i.kt)("li",{parentName:"ul"},"openssl-solibs: version 1.1.1q (CVE-2022-1292)"),(0,i.kt)("li",{parentName:"ul"},"p11-kit: version 0.24.1"),(0,i.kt)("li",{parentName:"ul"},"pciutils: version 3.8.0"),(0,i.kt)("li",{parentName:"ul"},"pcre2: version 10.40"),(0,i.kt)("li",{parentName:"ul"},"perl: version 5.36.0"),(0,i.kt)("li",{parentName:"ul"},"php: version 7.4.30 (CVE-2022-31625 CVE-2022-31626)"),(0,i.kt)("li",{parentName:"ul"},"pkgtools: version 15.1"),(0,i.kt)("li",{parentName:"ul"},"rpcbind: version 1.2.6"),(0,i.kt)("li",{parentName:"ul"},"rsync: version 3.2.6"),(0,i.kt)("li",{parentName:"ul"},"samba: version 4.17.0 (CVE-2022-2031 CVE-2022-32744 CVE-2022-32745 CVE-2022-32746 CVE-2022-32742)"),(0,i.kt)("li",{parentName:"ul"},"sqlite: version 3.39.3"),(0,i.kt)("li",{parentName:"ul"},"sudo: version 1.9.11p3"),(0,i.kt)("li",{parentName:"ul"},"sysfsutils: version 2.1.1"),(0,i.kt)("li",{parentName:"ul"},"sysstat: version 12.6.0"),(0,i.kt)("li",{parentName:"ul"},"sysvinit-scripts: version 15.1"),(0,i.kt)("li",{parentName:"ul"},"talloc: version 2.3.4"),(0,i.kt)("li",{parentName:"ul"},"tar: version 1.34"),(0,i.kt)("li",{parentName:"ul"},"tevent: version 0.13.0"),(0,i.kt)("li",{parentName:"ul"},"tree: version 2.0.2"),(0,i.kt)("li",{parentName:"ul"},"util-linux: version 2.38.1"),(0,i.kt)("li",{parentName:"ul"},"wayland: version 1.21.0"),(0,i.kt)("li",{parentName:"ul"},"wget: version 1.21.3"),(0,i.kt)("li",{parentName:"ul"},"xfsprogs: version 5.18.0"),(0,i.kt)("li",{parentName:"ul"},"xz: version 5.2.6"),(0,i.kt)("li",{parentName:"ul"},"zlib: version 1.2.12")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},'"WireGuard" and the "WireGuard" logo are registered trademarks of Jason A. Donenfeld.')))}k.isMDXComponent=!0}}]);