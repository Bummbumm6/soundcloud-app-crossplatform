i write the >10 lines of code for lazy people

## how to build:
prerequisites:
- node lts with npm
```
git clone https://github.com/Bummbumm6/soundcloud-app-crossplatform
cd soundcloud-app-crossplatform
npm i -g npm
npm i
npx electron-forge import
npm run make
```
finished build is in out/make/\<deb/rpm\>/x64/

note: if building on fedora 41 or some versions of ubuntu fails, please try the fix at https://github.com/electron/forge/issues/3701#issuecomment-2552233499
