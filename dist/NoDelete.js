const{components:a}=window.enmity;a.Alert;const Xe=a.Button;a.FlatList;const Ce=a.Image;a.ImageBackground,a.KeyboardAvoidingView,a.Modal,a.Pressable,a.RefreshControl;const Ne=a.ScrollView;a.SectionList,a.StatusBar,a.StyleSheet,a.Switch;const v=a.Text;a.TextInput,a.TouchableHighlight;const L=a.TouchableOpacity;a.TouchableWithoutFeedback,a.Touchable;const E=a.View;a.VirtualizedList,a.Form,a.FormArrow,a.FormCTA,a.FormCTAButton,a.FormCardSection,a.FormCheckbox;const S=a.FormDivider;a.FormHint,a.FormIcon;const We=a.FormInput;a.FormLabel,a.FormRadio;const c=a.FormRow,H=a.FormSection;a.FormSelect,a.FormSubLabel;const J=a.FormSwitch;a.FormTernaryCheckBox,a.FormText,a.FormTextColors,a.FormTextSizes;function Je(e){window.enmity.plugins.registerPlugin(e)}const C={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,o)=>window.enmity.modules.filters.byName(e,o),byTypeName:(e,o)=>window.enmity.modules.filters.byTypeName(e,o),byDisplayName:(e,o)=>window.enmity.modules.filters.byDisplayName(e,o)};function te(...e){return window.enmity.modules.bulk(...e)}function K(...e){return window.enmity.modules.getByProps(...e)}function Ke(...e){return window.enmity.modules.getByName(...e)}function Ie(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;function qe(e){return window.enmity.patcher.create(e)}var Qe="NoDelete",Ze="2.4.12",et="patch-1.0.10",tt='Somewhat basic "Message Logger"',ot=[{name:"Marek (modified by spin)",id:"308440976723148800"}],nt="#ff0069",lt="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",f={name:Qe,version:Ze,build:et,description:tt,authors:ot,color:nt,sourceUrl:lt};const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const q=window.enmity.modules.common.Native,t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const b=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,N=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const Me=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const I=window.enmity.modules.common.Navigation,at=window.enmity.modules.common.NavigationNative,Pe=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const z=window.enmity.modules.common.StyleSheet,it=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const rt=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function D(e,o,n){window.enmity.settings.set(e,o,n)}function j(e,o,n){return window.enmity.settings.get(e,o,n)}function M(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}const Be=e=>{let o=0;for(let n in e)o++;return o},st=e=>{let o=e.split(`
`).map(n=>{if(n!="")return`"${n.replaceAll(":",'":"').replace(" ","")}",`});return o[0]=`{${o[0]}`,o[Be(o)]=`${o[Be(o)]}}`,o=o.join(""),o=o.replaceAll("undefined",""),o=o.split("").reverse().join("").replace(",","").split("").reverse().join(""),o};async function ct(){try{let e=await b.getItem("device_list");if(e)return JSON.parse(e);let o=(await Me.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,n=st(o);await b.setItem("device_list",n);let l=await b.getItem("device_list");return JSON.parse(l)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function dt(e,o,n){let l=await ct();return`**[${e}] Debug Information**
> **Plugin Version:** ${o}
> **Plugin Build:** ${n.split("-")[1]}
> **Discord Build:** ${q.InfoDictionaryManager.Version} (${q.InfoDictionaryManager.Build})
> **Software Version:** ${q.DCDDeviceManager.systemVersion}
> **Device:** ${l[q.DCDDeviceManager.device]}`}function g(e){return window.enmity.assets.getIDByName(e)}const d={Debug:g("debug"),Retry:g("ic_message_retry"),Failed:g("Small"),Cancel:g("ic_megaphone_nsfw_16px"),Add:g("add_white"),Delete:g("ic_message_delete"),Clear:g("ic_clear_all_24px"),Pencil:g("ic_pencil_24px"),Copy:g("toast_copy_link"),Open:g("ic_leave_stage"),Clipboard:g("pending-alert"),Debug_Command:{Sent:g("ic_application_command_24px"),Clock:g("clock")},Settings:{Toasts:{Context:g("toast_image_saved"),Settings:g("ic_selection_checked_24px")},Self:g("friends_toast_icon"),Share:g("share"),Robot:g("ic_robot_24px"),Commands:g("ic_profile_badge_bot_commands"),Debug:g("ic_rulebook_16px")}},Q=e=>{y.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},{native:X}=window.enmity;function mt(){X.reload()}X.version,X.build,X.device,X.version;const ut=K("transitionToGuild");async function gt({manifest:e}){const o=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,n=await(await Me.get(o)).text;let l=n.match(/\d\.\d\.\d+/g),i=n.match(/patch\-\d\.\d\.\d+/g);return!l||!i?Re(e.name,e.version):(l=l[0],i=i[0],l!=e.version?Fe(o,l,i.split("-")[1],e,!1):i!=e.build?Fe(o,l,i.split("-")[1],e,!0):Re(e.name,e.version))}const Fe=(e,o,n,l,i)=>{const u=i?n:o;N.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${l.name}. ${i?`
The version will remain at ${o}, but the build will update to ${n}.`:""}
Would you like to install ${i?`build \`${n}\``:`version \`${o}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ht(e,u,l,i)})},Re=(e,o)=>{console.log(`[${e}] Plugin is on the latest version, which is ${o}`),y.open({content:`${e} is on latest version (${o})`,source:d.Settings.Toasts.Settings})};async function ht(e,o,n,l){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?N.show({title:`Updated ${n.name}`,body:`Successfully updated to ${l?"build":"version"} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{mt()}}):N.show({title:"Error",body:`Something went wrong while updating ${n.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ut.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${n.name}%20Update%20Error%3A%20${l?`b${o}`:`v${o}`}`)}})})}const Z=window.enmity.modules.common.Components.General.Animated,[ee,yt]=te(C.byProps("transitionToGuild"),C.byProps("setString"));var ft=({manifest:e})=>{const o=z.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:w.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),n=t.useRef(new Z.Value(1)).current,l=()=>{Z.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{Z.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},u=()=>{ee.openURL("https://spin.rip/")},h={transform:[{scale:n}]};return t.createElement(t.Fragment,null,t.createElement(E,{style:o.container},t.createElement(L,{onPress:u,onPressIn:l,onPressOut:i},t.createElement(Z.View,{style:[h]},t.createElement(Ce,{style:[o.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(E,{style:o.text_container},t.createElement(L,{onPress:()=>{ee.openURL(e.sourceUrl)}},t.createElement(v,{style:[o.main_text,o.header]},e.name," ")),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(v,{style:[o.main_text,o.sub_header]},"A plugin by"),t.createElement(L,{onPress:()=>{ee.openURL("https://spin.rip/")}},t.createElement(v,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(v,{style:[o.main_text,o.sub_header]},"Settings page by"),t.createElement(L,{onPress:()=>{ee.openURL("https://github.com/acquitelol/")}},t.createElement(v,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),t.createElement(E,null,t.createElement(L,{style:{flexDirection:"row"},onPress:()=>{yt.setString(`**${e.name}** v${e.version}`),Q("plugin name and version")}},t.createElement(v,{style:[o.main_text,o.sub_header]},"Version:"),t.createElement(v,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[wt,Ue]=te(C.byProps("transitionToGuild"),C.byProps("setString"));var _t=({manifest:e,settings:o,hasToasts:n,section:l,commands:i})=>{const u=z.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[h,T]=t.useState(),[r,p]=t.useState();return t.createElement(t.Fragment,null,t.createElement(Ne,{onTouchStart:_=>{T(_.nativeEvent.pageX),p(_.nativeEvent.pageY)},onTouchEnd:_=>{h-_.nativeEvent.pageX<-100&&r-_.nativeEvent.pageY<40&&r-_.nativeEvent.pageY>-40&&I.pop()}},t.createElement(ft,{manifest:e}),l,i&&t.createElement(H,{title:"Plugin Commands"},i.map(_=>t.createElement(c,{label:`/${_.name}`,subLabel:_.description,leading:t.createElement(c.Icon,{style:u.icon,source:d.Settings.Commands}),trailing:c.Arrow,onPress:function(){Ue.setString(`/${_.name}`),Q(`the command ${_.name}`)}}))),t.createElement(H,{title:"Utility"},n&&t.createElement(t.Fragment,null,t.createElement(c,{label:"Initialization Toasts",leading:t.createElement(c.Icon,{style:u.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:t.createElement(J,{value:o.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{o.toggle(`${e.name}-toastEnable`,!1),y.open({content:`Successfully ${o.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Settings.Toasts.Settings})}})}),t.createElement(S,null)),t.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:t.createElement(c.Icon,{style:u.icon,source:d.Settings.Debug}),trailing:c.Arrow,onPress:async function(){Ue.setString(await dt(e.name,e.version,e.build)),Q("plugin debug information")}}),t.createElement(S,null),t.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:t.createElement(c.Icon,{style:u.icon,source:d.Delete}),trailing:c.Arrow,onPress:async function(){await b.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:d.Settings.Toasts.Settings})}})),t.createElement(H,{title:"Source"},t.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(c.Icon,{style:u.icon,source:d.Copy}),trailing:c.Arrow,onPress:()=>{gt({manifest:e})}}),t.createElement(S,null),t.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(c.Icon,{style:u.icon,source:d.Open}),trailing:c.Arrow,onPress:()=>{wt.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),t.createElement(c,{style:u.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))};const Ae=Pe.createStackNavigator(),{ThemeColorMap:P}=it;var ke=({name:e="Page",component:o=E,close_button:n={name:"Close",functionality:()=>{I.pop()}}}={})=>{const l=z.createThemedStyleSheet({container:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:P.BACKGROUND_MOBILE_PRIMARY,color:P.TEXT_NORMAL},header:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:P.HEADER_PRIMARY},close:{color:P.HEADER_PRIMARY}});return t.createElement(at.NavigationContainer,null,t.createElement(Ae.Navigator,{initialRouteName:e,style:l.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:l.cardStyle,headerStyle:l.header,headerTitleContainerStyle:l.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(Ae.Screen,{name:e,component:o,options:{headerTitleStyle:{color:"white"},headerLeft:()=>t.createElement(Xe,{color:l.close.color,title:n.name,onPress:n.functionality}),...Pe.TransitionPresets.ModalSlideFromBottomIOS}})))};const[vt,bt]=te(C.byProps("setString"),C.byProps("fetchProfile")),Et=Ke("StaticSearchBarContainer");var Ve=()=>{const e=z.createThemedStyleSheet({main_text:{opacity:.975,letterSpacing:.25},item_container:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:4,paddingBottom:4,width:"100%"},author_name:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},log_header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"95%"},log_sub_header:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"50%"},log_time:{color:w.ThemeColorMap.TEXT_MUTED,opacity:.99,fontSize:13,paddingLeft:4},log_type:{color:w.ThemeColorMap.TEXT_MUTED,opacity:.45,fontSize:16,marginLeft:"auto"},avatar_container:{alignSelf:"start",justifySelf:"start"},author_avatar:{width:40,height:40,borderRadius:100},old_message:{color:w.ThemeColorMap.TEXT_MUTED,opacity:.89,fontSize:16},message_content:{color:w.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:16},main_container:{paddingLeft:8,paddingRight:4,paddingTop:2,paddingBottom:16,width:"95%"},text_container:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"95%"}}),o=(r,p)=>r.length>p?r.substring(0,p)+"...":r,n=()=>{b.setItem("NoDeleteLogs","[]"),b.getItem("NoDeleteLogs").then(r=>{r=="[]"?N.show({title:"Logs Cleared",body:"NoDelete message logs have been cleared",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>I.pop()}):N.show({title:"Error clearing logs",body:"NoDelete logs could not be cleared. Try again or report this issues to spin.",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>I.pop()})})},l=j("_nodelete","maxLogs","1000"),[i,u]=t.useState([]),[h,T]=t.useState([]);return t.useEffect(()=>{b.getItem("NoDeleteLogs").then(r=>{let p=JSON.parse(r);u(p.reverse())})},[]),i.length>parseInt(l)&&(M("_nodelete","autoClear",!1)==!1?N.show({title:`Logs have exceeded ${o(l,12)}`,body:`NoDelete logs have exceeded your limit of ${o(l,12)}${parseInt(l)>1e3?`
You may experience performance issues or a laggy log page UI. Clear your logs to fix this issue.`:""}`,confirmText:"Clear logs",cancelText:"Close",onConfirm:()=>n()}):(n(),b.getItem("NoDeleteLogs").then(r=>{r==="[]"?y.open({content:`Auto-cleared ${o(i.length,10)} logs.`,source:d.Settings.Toasts.Settings}):y.open({content:"NoDelete logs could not be cleared. Try again or report this issues to spin.",source:d.Failed})}))),t.createElement(t.Fragment,null,t.createElement(Et,{placeholder:"Search Logs",onChangeText:r=>T(r)}),t.createElement(c,{label:"Clear all NoDelete message logs",trailing:c.Arrow,onPress:()=>n()}),t.createElement(S,null),t.createElement(Ne,null,t.createElement(E,{style:e.main_container},i.filter(r=>JSON.stringify(r).includes(h)).map(r=>t.createElement(t.Fragment,null,t.createElement(E,{style:e.item_container},t.createElement(L,{onPress:()=>{bt.fetchProfile(r.id).then(()=>{rt.showUserProfile({userId:r.id})}).catch(p=>{y.open({content:"Error while fetching user. Check logs for more info.",source:d.Failed}),console.log("[NoDelete User Fetch Error]",p)})},style:e.avatar_container},t.createElement(Ce,{style:e.author_avatar,source:{uri:r.avatar}})),t.createElement(L,{onPress:()=>{vt.setString(`${r.author} (\`${r.id}\`):
>>> ${r.content.join(`
`)}`),Q("log content")},style:e.text_container},t.createElement(E,{style:e.log_header},t.createElement(E,{style:e.log_sub_header},t.createElement(v,{style:[e.main_text,e.author_name]},r.author),t.createElement(v,{style:[e.main_text,e.log_time]},r.content[0])),t.createElement(v,{style:[e.main_text,e.log_type]},r.type==="edit"?t.createElement(c.Icon,{source:d.Pencil}):t.createElement(c.Icon,{source:d.Delete}))),t.createElement(E,null,r.content.length==3?t.createElement(t.Fragment,null,t.createElement(v,{style:e.old_message},r.content[1]),t.createElement(v,{style:e.message_content},r.content[2])):t.createElement(v,{style:e.message_content},r.content[1])))),t.createElement(S,null))))))},Ge;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(Ge||(Ge={}));var oe;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(oe||(oe={}));var ne;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(ne||(ne={}));var Ye;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Ye||(Ye={}));var Oe;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(Oe||(Oe={}));var He;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(He||(He={}));function pt(e,o,n,l){window.enmity.clyde.sendReply(e,o,n,l)}const St={id:"logs-command",name:"logs",displayName:"logs",description:"Open the NoDelete message logs page",displayDescription:"Open the NoDelete message logs page",type:oe.Chat,inputType:ne.BuiltInText,execute:async function(e,o){var n;try{I.push(ke,{component:Ve,name:"NoDelete Message Logs"})}catch(l){console.log("[ NoDelete Error ]",l),pt((n=o==null?void 0:o.channel.id)!=null?n:"0","An error occured while trying to open NoDelete message logs. Check debug logs for more info.")}}},ze=[St];async function je(e,o,n,l,i){if(o.split("#").pop()=="undefined"||n=="undefined"||l=="undefined"||i.original==null)return;const u={type:e,author:o,id:n,avatar:l?`https://cdn.discordapp.com/avatars/${n}/${l}.${l!=null&&l.startsWith("a_")?"gif":"png"}?size=1024`:"https://cdn.discordapp.com/embed/avatars/0.png",content:i.edited?[new Date(i.time).toLocaleString(),i.original,i.edited]:[new Date(i.time).toLocaleString(),i.original]};let h=await b.getItem("NoDeleteLogs");h=JSON.parse(h),u!==h[h.length-1]&&(h.push(u),await b.setItem("NoDeleteLogs",JSON.stringify(h)))}const le=qe("NoDelete"),Dt={...f,patches:[],onStart(){b.getItem("NoDeleteLogs").then(l=>{l==null&&b.setItem("NoDeleteLogs","[]")}).catch(l=>{console.log(`[${f.name} Storage Error]`,l)});let e=0,o=3;const n=()=>{var l,i;let u=M(f.name,`${f.name}-toastEnable`,!1);try{e++;const h=K("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),T=K("getMessage","getMessages"),r=K("getChannel","getDMFromUserId");console.log(`${f.name} delayed start attempt ${e}/${o}.`),u&&y.open({content:`[${f.name}] start attempt ${e}/${o}.`,source:d.Debug});for(const $ of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{h.dispatch({type:$,message:{}})}catch(m){console.log(`[${f.name} Dispatch Error]`,m)}const p=(l=h._actionHandlers._orderedActionHandlers)==null?void 0:l.MESSAGE_DELETE.find($=>$.name==="MessageStore"),_=(i=h._actionHandlers._orderedActionHandlers)==null?void 0:i.MESSAGE_UPDATE.find($=>$.name==="MessageStore");le.before(p,"actionHandler",($,m)=>{var B,F,R,U,A,k,V,G,Y,O;const s=T.getMessage(m[0].channelId,m[0].id);if(!(!(s!=null&&s.content)&&((B=s==null?void 0:s.attachments)==null?void 0:B.length)==0&&((F=s==null?void 0:s.embeds)==null?void 0:F.length)==0)&&!(M("_nodelete","_storageLog",!1)==!0||M("_nodelete","_logSelf",!1)===!1&&((R=s==null?void 0:s.author)==null?void 0:R.id)==((U=Ie("getCurrentUser").getCurrentUser())==null?void 0:U.id))){if(m[0]={},!(s!=null&&s.editedTimestamp)||(s==null?void 0:s.editedTimestamp._isValid)){const W={type:"MESSAGE_UPDATE",message:{...s,edited_timestamp:"invalid_timestamp",content:(s==null?void 0:s.content)+" `[deleted]`",guild_id:(A=r.getChannel(s==null?void 0:s.channel_id))==null?void 0:A.guild_id},log_edit:!1};h.dispatch(W)}je("delete",`${(k=s==null?void 0:s.author)==null?void 0:k.username}#${(V=s==null?void 0:s.author)==null?void 0:V.discriminator}`,(G=s==null?void 0:s.author)==null?void 0:G.id,(Y=s==null?void 0:s.author)==null?void 0:Y.avatar,{time:s==null?void 0:s.timestamp,original:(O=s==null?void 0:s.content)==null?void 0:O.replace("`[deleted]`","").trim()})}}),le.before(_,"actionHandler",($,m)=>{var B,F,R,U,A,k,V,G,Y,O,s,W,ae,ie,re,se,ce,de,me,ue,ge,he,ye,fe,we,_e,ve,be,Ee,pe,Se,De,$e,Le,Te;try{if(m[0].log_edit==!1||M("_nodelete","_logSelf",!1)===!1&&((R=(F=(B=m[0])==null?void 0:B.message)==null?void 0:F.author)==null?void 0:R.id)==((U=Ie("getCurrentUser").getCurrentUser())==null?void 0:U.id))return;const x=T.getMessage(m[0].message.channel_id,m[0].message.id);if(!((k=(A=m[0])==null?void 0:A.message)!=null&&k.content)&&((Y=(G=(V=m[0])==null?void 0:V.message)==null?void 0:G.attachments)==null?void 0:Y.length)==0&&((W=(s=(O=m[0])==null?void 0:O.message)==null?void 0:s.embeds)==null?void 0:W.length)==0||((se=(re=(ie=(ae=m[0])==null?void 0:ae.message)==null?void 0:ie.embeds)==null?void 0:re[0])==null?void 0:se.type)==="link")return;try{if(!m[0].edited_timestamp._isValid)return}catch{}const xe=m[0].message.content;M("_nodelete","_storageLog",!1)==!1&&(m[0].message.content=(x==null?void 0:x.content)+" `[edited]`\n"+((de=(ce=m[0])==null?void 0:ce.message)==null?void 0:de.content)),je("edit",`${(ge=(ue=(me=m[0])==null?void 0:me.message)==null?void 0:ue.author)==null?void 0:ge.username}#${(fe=(ye=(he=m[0])==null?void 0:he.message)==null?void 0:ye.author)==null?void 0:fe.discriminator}`,(ve=(_e=(we=m[0])==null?void 0:we.message)==null?void 0:_e.author)==null?void 0:ve.id,(pe=(Ee=(be=m[0])==null?void 0:be.message)==null?void 0:Ee.author)==null?void 0:pe.avatar,{time:(De=(Se=m[0])==null?void 0:Se.message)==null?void 0:De.edited_timestamp,original:(Le=($e=x==null?void 0:x.content)==null?void 0:$e.replace(/\`\[edited\]\`/gim,""))==null?void 0:Le.replace("`[deleted]`","").trim(),edited:`${(Te=xe==null?void 0:xe.replace(/\`\[edited\]\`/gim,""))==null?void 0:Te.replace("`[deleted]`","").trim()}`});return}catch(x){console.log(`[${f.name} Error]`,x)}}),console.log(`${f.name} delayed start successful.`),u&&y.open({content:`[${f.name}] start successful.`,source:d.Settings.Toasts.Settings})}catch(h){console.log(`[${f.name} Plugin Error]`,h),e<o?(console.warn(`${f.name} failed to start. Trying again in ${e}0s.`),u&&y.open({content:`[${f.name}] failed to start trying again in ${e}0s.`,source:d.Failed}),setTimeout(n,e*1e4)):(console.error(`${f.name} failed to start. Giving up.`),y.open({content:`${f.name} failed to start. Giving up.`,source:d.Failed}))}};setTimeout(()=>{n()},300),this.commands=ze},onStop(){le.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){const o=z.createThemedStyleSheet({icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED}});return t.createElement(_t,{manifest:f,settings:e,hasToasts:!1,section:t.createElement(t.Fragment,null,t.createElement(H,{title:"Message Logs"},t.createElement(c,{label:"View Message Logs",subLabel:"Tap on an item to copy to clipboard",leading:t.createElement(c.Icon,{style:o.icon,source:d.Settings.Debug}),onPress:()=>{I.push(ke,{component:Ve,name:"NoDelete Message Logs"})}})),t.createElement(S,null),t.createElement(H,{title:"Plugin Settings"},t.createElement(c,{label:"Log my own messages",subLabel:"Whether or not your own edits and deleted messages will be logged",leading:t.createElement(c.Icon,{source:d.Settings.Self}),trailing:t.createElement(J,{value:e.getBoolean("_nodelete_logSelf",!1),onValueChange:()=>{try{e.toggle("_nodelete_logSelf",!1),e.getBoolean("_nodelete_logSelf",!1)?D("_nodelete","_logSelf",!0):D("_nodelete","_logSelf",!1),y.open({content:`Log self-events has been set to: ${j("_nodelete","_logSelf",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),y.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}),t.createElement(S,null),t.createElement(c,{label:"Only log to Storage",subLabel:"Message logs will not show in chat, only in Storage",leading:t.createElement(c.Icon,{source:d.Pencil}),trailing:t.createElement(J,{value:e.getBoolean("_nodelete",!1),onValueChange:()=>{try{e.toggle("_nodelete",!1),e.getBoolean("_nodelete",!1)?D("_nodelete","_storageLog",!0):D("_nodelete","_storageLog",!1),y.open({content:`Storage-only log has been set to: ${j("_nodelete","_storageLog",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),y.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}),t.createElement(S,null),t.createElement(We,{value:j("_nodelete","maxLogs","1000"),onChange:n=>/^\d+$/.test(n)?D("_nodelete","maxLogs",n.trim()):D("_nodelete","maxLogs","1000"),title:"Max Logs to Store"}),t.createElement(c,{label:"Auto-clear logs",subLabel:"Message logs will automatically clear after they have exceeded your max logs limit",leading:t.createElement(c.Icon,{source:d.Clear}),trailing:t.createElement(J,{value:e.getBoolean("_nodelete_autoClear",!1),onValueChange:()=>{try{e.toggle("_nodelete_autoClear",!1),e.getBoolean("_nodelete_autoClear",!1)?D("_nodelete","autoClear",!0):D("_nodelete","autoClear",!1),y.open({content:`Logs auto-clearing has been set to: ${j("_nodelete","autoClear",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),y.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}))),commands:ze})}};Je(Dt);
