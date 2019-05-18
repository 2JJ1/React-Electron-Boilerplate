#Quick start for creating a React.js & Redux app inside of Electron.js  
This is create-react-app with Redux inside of the Electron.js renderer. Except components were stripped since I've found it annoying to remove them every time. I prefer the bare minimum so I can skip straight to work.  

This was made so I can whip up a quick start for myself. Its pretty much production ready and simple, thus easy to add on top of.  

##notes  
*With the package.json setup, Electron's main process must be named, "main.js" inside of /public  
*Files that would be in /build for Electron must be placed in /assets instead(Such as icon.ico). /build is reserved for React.js  
*Redux is just READY to use, but it isn't used anywhere other than a simple config in /src/index.js  

##cmd.exe commands  
*set BROWSER=none - so react.js doesnt run on browser in development. Its only needed in the Electron renderer  
*npm run electron-dev - to start  
*npm run dist - to build React.js app and package with Electron.js. Compiles in x86 to /dist.  
-Note that the dev version of Electron is x64. You can switch to the x86 dev version by running, "npm install electron --arch=ia32"  
-Tweak package.json if you want to switch compile in 64bit  