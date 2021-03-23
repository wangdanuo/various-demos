Taro.chooseImage({
  count: 3 - len
}).then(async ({
  tempFiles
}) => {
  const urls = (await Promise.all(tempFiles.map((item) => 
  uploadFile(item.path)))).map((d) => d.url)
  this.setState({
    imgUrlData: [...imgUrlData, ...urls]
  })
})