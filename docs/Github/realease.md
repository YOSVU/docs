# Release 发布规范

### 范例:
以下范例的场景为:
- 使用 


```yaml release.md
name: Build and Release APK

on:
  release:
    types: [created]

jobs:
  build-and-release:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'

    - name: Install dependencies
      run: npm install

    - name: Build APK
      run: npx react-native run-android --variant=release

    - name: Archive APK
      uses: actions/upload-artifact@v2
      with:
        name: app-release
        path: android/app/build/outputs/apk/release/app-release.apk

    - name: Create Release
      uses: actions/create-release@v1
      with:
        tag_name: ${{ github.ref }}
        release_name: Release ${{ github.ref }}
        body: |
          Changes in this release:
          - Built APK file
        draft: false
        prerelease: false

    - name: Upload APK to Release
      uses: actions/upload-release-asset@v1
      with:
        upload_url: ${{ steps.create_release.outputs.upload_url }}
        asset_path: android/app/build/outputs/apk/release/app-release.apk
        asset_name: app-release.apk
        asset_content_type: application/vnd.android.package-archive
```