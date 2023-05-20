# Release 发布规范


## 1. 原则性要求
- 完全遵循 [Semver 2.0](https://semver.org/lang/zh-CN/) 语义化版本标准.
- Release文件名标注完整的信息.
    示例: `publish_1.0.0_darwin_amd64.tar.gz`
## 2. 推荐性要求
- 使用GitHub Action编译项目并自动上传Release文件,而不是手动上传.
- 


### 范例:
以下范例仅供参考.  
该范例演示在Github上创建一个新的release时，自动编译React Native项目并生成apk文件并发布到该release中.


```yaml release.md
name: Build and Release APK

on:
  release:
    types: [created]

jobs:
  build-and-release:
    runs-on: ubuntu-latest #选择操作系统

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js #设置node版本
      uses: actions/setup-node@v1

    - name: Install dependencies
      run: npm install

    - name: Build APK #编译apk
      run: npx react-native run-android --variant=release 

    - name: Archive APK #上传artifact
      uses: actions/upload-artifact@v2
      with:
        name: app-release
        path: android/app/build/outputs/apk/release/app-release.apk 

    - name: Create Release #创建Release
      uses: actions/create-release@v1
      with:
        tag_name: ${{ github.ref }}
        release_name: Release ${{ github.ref }}
        body: |
          Changes in this release:
          - Built APK file
        draft: false
        prerelease: false

    - name: Upload APK to Release #上传文件到Release
      uses: actions/upload-release-asset@v1
      with:
        upload_url: ${{ steps.create_release.outputs.upload_url }}
        asset_path: android/app/build/outputs/apk/release/app-release.apk
        asset_name: app-release.apk
        asset_content_type: application/vnd.android.package-archive
```