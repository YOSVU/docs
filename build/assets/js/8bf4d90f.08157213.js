"use strict";(self.webpackChunkyosvudoc=self.webpackChunkyosvudoc||[]).push([[390],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(t),m=a,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return t?i.createElement(u,o(o({ref:n},c),{},{components:t})):i.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(7605),a=(t(9496),t(9613));const r={},o="Semantic Versioning 2.0.0",s={unversionedId:"reference/semver",id:"reference/semver",title:"Semantic Versioning 2.0.0",description:"Summary",source:"@site/docs/reference/semver.md",sourceDirName:"reference",slug:"/reference/semver",permalink:"/docs/reference/semver",draft:!1,editUrl:"https://github.com/YOSVU/docs/tree/main/docs/reference/semver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jam",permalink:"/docs/achieved/jam"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Semantic Versioning Specification (SemVer)",id:"semantic-versioning-specification-semver",level:2},{value:"Backus\u2013Naur Form Grammar for Valid SemVer Versions",id:"backusnaur-form-grammar-for-valid-semver-versions",level:2},{value:"Why Use Semantic Versioning?",id:"why-use-semantic-versioning",level:2},{value:"FAQ",id:"faq",level:2},{value:"How should I deal with revisions in the 0.y.z initial development phase?",id:"how-should-i-deal-with-revisions-in-the-0yz-initial-development-phase",level:3},{value:"How do I know when to release 1.0.0?",id:"how-do-i-know-when-to-release-100",level:3},{value:"Doesn&#39;t this discourage rapid development and fast iteration?",id:"doesnt-this-discourage-rapid-development-and-fast-iteration",level:3},{value:"If even the tiniest backward incompatible changes to the public API require a major version bump, won&#39;t I end up at version 42.0.0 very rapidly?",id:"if-even-the-tiniest-backward-incompatible-changes-to-the-public-api-require-a-major-version-bump-wont-i-end-up-at-version-4200-very-rapidly",level:3},{value:"Documenting the entire public API is too much work!",id:"documenting-the-entire-public-api-is-too-much-work",level:3},{value:"What do I do if I accidentally release a backward incompatible change as a minor version?",id:"what-do-i-do-if-i-accidentally-release-a-backward-incompatible-change-as-a-minor-version",level:3},{value:"What should I do if I update my own dependencies without changing the public API?",id:"what-should-i-do-if-i-update-my-own-dependencies-without-changing-the-public-api",level:3},{value:"What if I inadvertently alter the public API in a way that is not compliant with the version number change (i.e. the code incorrectly introduces a major breaking change in a patch release)?",id:"what-if-i-inadvertently-alter-the-public-api-in-a-way-that-is-not-compliant-with-the-version-number-change-ie-the-code-incorrectly-introduces-a-major-breaking-change-in-a-patch-release",level:3},{value:"How should I handle deprecating functionality?",id:"how-should-i-handle-deprecating-functionality",level:3},{value:"Does SemVer have a size limit on the version string?",id:"does-semver-have-a-size-limit-on-the-version-string",level:3},{value:"Is &quot;v1.2.3&quot; a semantic version?",id:"is-v123-a-semantic-version",level:3},{value:"Is there a suggested regular expression (RegEx) to check a SemVer string?",id:"is-there-a-suggested-regular-expression-regex-to-check-a-semver-string",level:3},{value:"About",id:"about",level:2},{value:"License",id:"license",level:2}],c={toc:d},h="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semantic-versioning-200"},"Semantic Versioning 2.0.0"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Given a version number MAJOR.MINOR.PATCH, increment the:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"MAJOR version when you make incompatible API changes"),(0,a.kt)("li",{parentName:"ol"},"MINOR version when you add functionality in a backward compatible\nmanner"),(0,a.kt)("li",{parentName:"ol"},"PATCH version when you make backward compatible bug fixes")),(0,a.kt)("p",null,"Additional labels for pre-release and build metadata are available as extensions\nto the MAJOR.MINOR.PATCH format."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'In the world of software management there exists a dreaded place called\n"dependency hell." The bigger your system grows and the more packages you\nintegrate into your software, the more likely you are to find yourself, one\nday, in this pit of despair.'),(0,a.kt)("p",null,"In systems with many dependencies, releasing new package versions can quickly\nbecome a nightmare. If the dependency specifications are too tight, you are in\ndanger of version lock (the inability to upgrade a package without having to\nrelease new versions of every dependent package). If dependencies are\nspecified too loosely, you will inevitably be bitten by version promiscuity\n(assuming compatibility with more future versions than is reasonable).\nDependency hell is where you are when version lock and/or version promiscuity\nprevent you from easily and safely moving your project forward."),(0,a.kt)("p",null,"As a solution to this problem, we propose a simple set of rules and\nrequirements that dictate how version numbers are assigned and incremented.\nThese rules are based on but not necessarily limited to pre-existing\nwidespread common practices in use in both closed and open-source software.\nFor this system to work, you first need to declare a public API. This may\nconsist of documentation or be enforced by the code itself. Regardless, it is\nimportant that this API be clear and precise. Once you identify your public\nAPI, you communicate changes to it with specific increments to your version\nnumber. Consider a version format of X.Y.Z (Major.Minor.Patch). Bug fixes not\naffecting the API increment the patch version, backward compatible API\nadditions/changes increment the minor version, and backward incompatible API\nchanges increment the major version."),(0,a.kt)("p",null,'We call this system "Semantic Versioning." Under this scheme, version numbers\nand the way they change convey meaning about the underlying code and what has\nbeen modified from one version to the next.'),(0,a.kt)("h2",{id:"semantic-versioning-specification-semver"},"Semantic Versioning Specification (SemVer)"),(0,a.kt)("p",null,'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",\n"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be\ninterpreted as described in ',(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2119"},"RFC 2119"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Software using Semantic Versioning MUST declare a public API. This API\ncould be declared in the code itself or exist strictly in documentation.\nHowever it is done, it SHOULD be precise and comprehensive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A normal version number MUST take the form X.Y.Z where X, Y, and Z are\nnon-negative integers, and MUST NOT contain leading zeroes. X is the\nmajor version, Y is the minor version, and Z is the patch version.\nEach element MUST increase numerically. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once a versioned package has been released, the contents of that version\nMUST NOT be modified. Any modifications MUST be released as a new version.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Major version zero (0.y.z) is for initial development. Anything MAY change\nat any time. The public API SHOULD NOT be considered stable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Version 1.0.0 defines the public API. The way in which the version number\nis incremented after this release is dependent on this public API and how it\nchanges.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Patch version Z (x.y.Z | x > 0) MUST be incremented if only backward\ncompatible bug fixes are introduced. A bug fix is defined as an internal\nchange that fixes incorrect behavior.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backward\ncompatible functionality is introduced to the public API. It MUST be\nincremented if any public API functionality is marked as deprecated. It MAY be\nincremented if substantial new functionality or improvements are introduced\nwithin the private code. It MAY include patch level changes. Patch version\nMUST be reset to 0 when minor version is incremented.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Major version X (X.y.z | X > 0) MUST be incremented if any backward\nincompatible changes are introduced to the public API. It MAY also include minor\nand patch level changes. Patch and minor versions MUST be reset to 0 when major\nversion is incremented.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A pre-release version MAY be denoted by appending a hyphen and a\nseries of dot separated identifiers immediately following the patch\nversion. Identifiers MUST comprise only ASCII alphanumerics and hyphens\n","[0-9A-Za-z-]",". Identifiers MUST NOT be empty. Numeric identifiers MUST\nNOT include leading zeroes. Pre-release versions have a lower\nprecedence than the associated normal version. A pre-release version\nindicates that the version is unstable and might not satisfy the\nintended compatibility requirements as denoted by its associated\nnormal version. Examples: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,\n1.0.0-x.7.z.92, 1.0.0-x-y-z.","-","-",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build metadata MAY be denoted by appending a plus sign and a series of dot\nseparated identifiers immediately following the patch or pre-release version.\nIdentifiers MUST comprise only ASCII alphanumerics and hyphens ","[0-9A-Za-z-]",".\nIdentifiers MUST NOT be empty. Build metadata MUST be ignored when determining\nversion precedence. Thus two versions that differ only in the build metadata,\nhave the same precedence. Examples: 1.0.0-alpha+001, 1.0.0+20130313144700,\n1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3","-","-","-","-","117B344092BD.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Precedence refers to how versions are compared to each other when ordered."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Precedence MUST be calculated by separating the version into major,\nminor, patch and pre-release identifiers in that order (Build metadata\ndoes not figure into precedence).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Precedence is determined by the first difference when comparing each of\nthese identifiers from left to right as follows: Major, minor, and patch\nversions are always compared numerically."),(0,a.kt)("p",{parentName:"li"},"Example: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When major, minor, and patch are equal, a pre-release version has lower\nprecedence than a normal version:"),(0,a.kt)("p",{parentName:"li"},"Example: 1.0.0-alpha < 1.0.0.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Precedence for two pre-release versions with the same major, minor, and\npatch version MUST be determined by comparing each dot separated identifier\nfrom left to right until a difference is found as follows:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identifiers consisting of only digits are compared numerically.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identifiers with letters or hyphens are compared lexically in ASCII\nsort order.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Numeric identifiers always have lower precedence than non-numeric\nidentifiers.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A larger set of pre-release fields has a higher precedence than a\nsmaller set, if all of the preceding identifiers are equal."))),(0,a.kt)("p",{parentName:"li"},"Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta <\n1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0."))))),(0,a.kt)("h2",{id:"backusnaur-form-grammar-for-valid-semver-versions"},"Backus\u2013Naur Form Grammar for Valid SemVer Versions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<valid semver> ::= <version core>\n                 | <version core> "-" <pre-release>\n                 | <version core> "+" <build>\n                 | <version core> "-" <pre-release> "+" <build>\n\n<version core> ::= <major> "." <minor> "." <patch>\n\n<major> ::= <numeric identifier>\n\n<minor> ::= <numeric identifier>\n\n<patch> ::= <numeric identifier>\n\n<pre-release> ::= <dot-separated pre-release identifiers>\n\n<dot-separated pre-release identifiers> ::= <pre-release identifier>\n                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>\n\n<build> ::= <dot-separated build identifiers>\n\n<dot-separated build identifiers> ::= <build identifier>\n                                    | <build identifier> "." <dot-separated build identifiers>\n\n<pre-release identifier> ::= <alphanumeric identifier>\n                           | <numeric identifier>\n\n<build identifier> ::= <alphanumeric identifier>\n                     | <digits>\n\n<alphanumeric identifier> ::= <non-digit>\n                            | <non-digit> <identifier characters>\n                            | <identifier characters> <non-digit>\n                            | <identifier characters> <non-digit> <identifier characters>\n\n<numeric identifier> ::= "0"\n                       | <positive digit>\n                       | <positive digit> <digits>\n\n<identifier characters> ::= <identifier character>\n                          | <identifier character> <identifier characters>\n\n<identifier character> ::= <digit>\n                         | <non-digit>\n\n<non-digit> ::= <letter>\n              | "-"\n\n<digits> ::= <digit>\n           | <digit> <digits>\n\n<digit> ::= "0"\n          | <positive digit>\n\n<positive digit> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"\n\n<letter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"\n           | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"\n           | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d"\n           | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n"\n           | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"\n           | "y" | "z"\n')),(0,a.kt)("h2",{id:"why-use-semantic-versioning"},"Why Use Semantic Versioning?"),(0,a.kt)("p",null,'This is not a new or revolutionary idea. In fact, you probably do something\nclose to this already. The problem is that "close" isn\'t good enough. Without\ncompliance to some sort of formal specification, version numbers are\nessentially useless for dependency management. By giving a name and clear\ndefinition to the above ideas, it becomes easy to communicate your intentions\nto the users of your software. Once these intentions are clear, flexible (but\nnot too flexible) dependency specifications can finally be made.'),(0,a.kt)("p",null,'A simple example will demonstrate how Semantic Versioning can make dependency\nhell a thing of the past. Consider a library called "Firetruck." It requires a\nSemantically Versioned package named "Ladder." At the time that Firetruck is\ncreated, Ladder is at version 3.1.0. Since Firetruck uses some functionality\nthat was first introduced in 3.1.0, you can safely specify the Ladder\ndependency as greater than or equal to 3.1.0 but less than 4.0.0. Now, when\nLadder version 3.1.1 and 3.2.0 become available, you can release them to your\npackage management system and know that they will be compatible with existing\ndependent software.'),(0,a.kt)("p",null,"As a responsible developer you will, of course, want to verify that any\npackage upgrades function as advertised. The real world is a messy place;\nthere's nothing we can do about that but be vigilant. What you can do is let\nSemantic Versioning provide you with a sane way to release and upgrade\npackages without having to roll new versions of dependent packages, saving you\ntime and hassle."),(0,a.kt)("p",null,"If all of this sounds desirable, all you need to do to start using Semantic\nVersioning is to declare that you are doing so and then follow the rules. Link\nto this website from your README so others know the rules and can benefit from\nthem."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-should-i-deal-with-revisions-in-the-0yz-initial-development-phase"},"How should I deal with revisions in the 0.y.z initial development phase?"),(0,a.kt)("p",null,"The simplest thing to do is start your initial development release at 0.1.0\nand then increment the minor version for each subsequent release."),(0,a.kt)("h3",{id:"how-do-i-know-when-to-release-100"},"How do I know when to release 1.0.0?"),(0,a.kt)("p",null,"If your software is being used in production, it should probably already be\n1.0.0. If you have a stable API on which users have come to depend, you should\nbe 1.0.0. If you're worrying a lot about backward compatibility, you should\nprobably already be 1.0.0."),(0,a.kt)("h3",{id:"doesnt-this-discourage-rapid-development-and-fast-iteration"},"Doesn't this discourage rapid development and fast iteration?"),(0,a.kt)("p",null,"Major version zero is all about rapid development. If you're changing the API\nevery day you should either still be in version 0.y.z or on a separate\ndevelopment branch working on the next major version."),(0,a.kt)("h3",{id:"if-even-the-tiniest-backward-incompatible-changes-to-the-public-api-require-a-major-version-bump-wont-i-end-up-at-version-4200-very-rapidly"},"If even the tiniest backward incompatible changes to the public API require a major version bump, won't I end up at version 42.0.0 very rapidly?"),(0,a.kt)("p",null,"This is a question of responsible development and foresight. Incompatible\nchanges should not be introduced lightly to software that has a lot of\ndependent code. The cost that must be incurred to upgrade can be significant.\nHaving to bump major versions to release incompatible changes means you'll\nthink through the impact of your changes, and evaluate the cost/benefit ratio\ninvolved."),(0,a.kt)("h3",{id:"documenting-the-entire-public-api-is-too-much-work"},"Documenting the entire public API is too much work!"),(0,a.kt)("p",null,"It is your responsibility as a professional developer to properly document\nsoftware that is intended for use by others. Managing software complexity is a\nhugely important part of keeping a project efficient, and that's hard to do if\nnobody knows how to use your software, or what methods are safe to call. In\nthe long run, Semantic Versioning, and the insistence on a well defined public\nAPI can keep everyone and everything running smoothly."),(0,a.kt)("h3",{id:"what-do-i-do-if-i-accidentally-release-a-backward-incompatible-change-as-a-minor-version"},"What do I do if I accidentally release a backward incompatible change as a minor version?"),(0,a.kt)("p",null,"As soon as you realize that you've broken the Semantic Versioning spec, fix\nthe problem and release a new minor version that corrects the problem and\nrestores backward compatibility. Even under this circumstance, it is\nunacceptable to modify versioned releases. If it's appropriate,\ndocument the offending version and inform your users of the problem so that\nthey are aware of the offending version."),(0,a.kt)("h3",{id:"what-should-i-do-if-i-update-my-own-dependencies-without-changing-the-public-api"},"What should I do if I update my own dependencies without changing the public API?"),(0,a.kt)("p",null,"That would be considered compatible since it does not affect the public API.\nSoftware that explicitly depends on the same dependencies as your package\nshould have their own dependency specifications and the author will notice any\nconflicts. Determining whether the change is a patch level or minor level\nmodification depends on whether you updated your dependencies in order to fix\na bug or introduce new functionality. We would usually expect additional code\nfor the latter instance, in which case it's obviously a minor level increment."),(0,a.kt)("h3",{id:"what-if-i-inadvertently-alter-the-public-api-in-a-way-that-is-not-compliant-with-the-version-number-change-ie-the-code-incorrectly-introduces-a-major-breaking-change-in-a-patch-release"},"What if I inadvertently alter the public API in a way that is not compliant with the version number change (i.e. the code incorrectly introduces a major breaking change in a patch release)?"),(0,a.kt)("p",null,"Use your best judgment. If you have a huge audience that will be drastically\nimpacted by changing the behavior back to what the public API intended, then\nit may be best to perform a major version release, even though the fix could\nstrictly be considered a patch release. Remember, Semantic Versioning is all\nabout conveying meaning by how the version number changes. If these changes\nare important to your users, use the version number to inform them."),(0,a.kt)("h3",{id:"how-should-i-handle-deprecating-functionality"},"How should I handle deprecating functionality?"),(0,a.kt)("p",null,"Deprecating existing functionality is a normal part of software development and\nis often required to make forward progress. When you deprecate part of your\npublic API, you should do two things: (1) update your documentation to let\nusers know about the change, (2) issue a new minor release with the deprecation\nin place. Before you completely remove the functionality in a new major release\nthere should be at least one minor release that contains the deprecation so\nthat users can smoothly transition to the new API."),(0,a.kt)("h3",{id:"does-semver-have-a-size-limit-on-the-version-string"},"Does SemVer have a size limit on the version string?"),(0,a.kt)("p",null,"No, but use good judgment. A 255 character version string is probably overkill,\nfor example. Also, specific systems may impose their own limits on the size of\nthe string."),(0,a.kt)("h3",{id:"is-v123-a-semantic-version"},'Is "v1.2.3" a semantic version?'),(0,a.kt)("p",null,'No, "v1.2.3" is not a semantic version. However, prefixing a semantic version\nwith a "v" is a common way (in English) to indicate it is a version number.\nAbbreviating "version" as "v" is often seen with version control. Example:\n',(0,a.kt)("inlineCode",{parentName:"p"},'git tag v1.2.3 -m "Release version 1.2.3"'),', in which case "v1.2.3" is a tag\nname and the semantic version is "1.2.3".'),(0,a.kt)("h3",{id:"is-there-a-suggested-regular-expression-regex-to-check-a-semver-string"},"Is there a suggested regular expression (RegEx) to check a SemVer string?"),(0,a.kt)("p",null,"There are two. One with named groups for those systems that support them\n(PCRE ","[Perl Compatible Regular Expressions, i.e. Perl, PHP and R]",", Python\nand Go)."),(0,a.kt)("p",null,"See: ",(0,a.kt)("a",{parentName:"p",href:"https://regex101.com/r/Ly7O1x/3/"},"https://regex101.com/r/Ly7O1x/3/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"^(?P<major>0|[1-9]\\d*)\\.(?P<minor>0|[1-9]\\d*)\\.(?P<patch>0|[1-9]\\d*)(?:-(?P<prerelease>(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$\n")),(0,a.kt)("p",null,"And one with numbered capture groups instead (so cg1 = major, cg2 = minor,\ncg3 = patch, cg4 = prerelease and cg5 = buildmetadata) that is compatible\nwith ECMA Script (JavaScript), PCRE (Perl Compatible Regular Expressions,\ni.e. Perl, PHP and R), Python and Go."),(0,a.kt)("p",null,"See: ",(0,a.kt)("a",{parentName:"p",href:"https://regex101.com/r/vkijKf/1/"},"https://regex101.com/r/vkijKf/1/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$\n")),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"The Semantic Versioning specification was originally authored by ",(0,a.kt)("a",{parentName:"p",href:"https://tom.preston-werner.com"},"Tom\nPreston-Werner"),", inventor of Gravatar and\ncofounder of GitHub."),(0,a.kt)("p",null,"If you'd like to leave feedback, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/semver/semver/issues"},"open an issue on\nGitHub"),"."),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/3.0/"},"Creative Commons \u2015 CC BY 3.0")))}p.isMDXComponent=!0}}]);