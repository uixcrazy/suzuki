const express = require('express')
const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')

const app = express()
let sitemap

app.get('/sitemap.xml', function(req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap)
    return
  }

  try {
    const smStream = new SitemapStream({ hostname: 'https://xetainhosaigon.com/' })
    const pipeline = smStream.pipe(createGzip())

    // pipe your entries or directly write them.
    smStream.write({
      url: '/xe-tai-nho-suzuki/',
      changefreq: 'monthly',
      priority: 0.7,
      img: [
        {
          url: 'https://cdn.uixcrazy.now.sh/static/carry-pro/carry-pro-thumb.jpg',
          caption: 'Suzuki Carry Pro 2020, thiết kế hoàn toàn mới, tải trọng lớn hơn, bền và tiết kiệm nhiên liệu',
          title: 'Suzuki Pro 2020',
          geoLocation: 'Quận 2, Ho Chi Minh City',
        },
        {
          url: 'https://cdn.uixcrazy.now.sh/static/carry-truck/carry-truck-thumb.png',
          caption: 'Suzuki Carry Truck 2020, dòng xe tải nhẹ tiện dụng, xe tải suzuki 500kg, bền và tiết kiệm nhiên liệu',
          title: 'Suzuki Super Carry',
          geoLocation: 'Quận 2, Ho Chi Minh City',
        },

        {
          url: 'https://cdn.uixcrazy.now.sh/static/blind-van/blind-van-thumb.jpg',
          caption: 'Xe tải van, gọn nhẹ tiện lợi, lưu thông dễ dàng trong thành phố, thùng xe lớnlớn, bền và tiết kiệm nhiên liệu',
          title: 'Suzuki Blind Van',
          geoLocation: 'Quận 2, Ho Chi Minh City',
        },
      ],
    })
    smStream.write({
      url: '/xe-du-lich-suzuki/',
      changefreq: 'monthly',
      priority: 0.7,
      img: [
        {
          url: 'https://cdn.uixcrazy.now.sh/static/ertiga/banner/ertiga-thumb.jpg',
          caption: 'Ertiga 2020, xe đa dụng 7 chỗ, lựa chọn hàng đầu cho gia đình Việt Name',
          title: 'Suzuki Ertiga 2020',
          geoLocation: 'Quận 2, Ho Chi Minh City',
        },
      ]
    })

    smStream.write({
      url: '/xe-du-lich-suzuki/ertiga',
      changefreq: 'monthly',
      priority: 1,
      img: 'https://cdn.uixcrazy.now.sh/static/ertiga/banner/ertiga-thumb.jpg',
    }),
    smStream.write({
      url: '/xe-du-lich-suzuki/suzuki-xl7',
      changefreq: 'monthly',
      priority: 1,
      img: 'https://cdn.uixcrazy.now.sh/static/xl7/xl7-thumb.jpg',
    }),
    smStream.write({
      url: '/xe-tai-nho-suzuki/carry-pro',
      changefreq: 'monthly',
      priority: 1,
      img: 'https://cdn.uixcrazy.now.sh/static/carry-pro/carry-pro-thumb.jpg',
    }),
    smStream.write({
      url: '/xe-tai-nho-suzuki/carry-truck',
      changefreq: 'monthly',
      priority: 1,
      img: 'https://cdn.uixcrazy.now.sh/static/carry-truck/carry-truck-thumb.png',
    }),
    smStream.write({
      url: '/xe-tai-nho-suzuki/blind-van',
      changefreq: 'monthly',
      priority: 1,
      img: 'https://cdn.uixcrazy.now.sh/static/blind-van/blind-van-thumb.jpg',
    })
    smStream.end()

    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // stream write the response
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
})

app.listen(3000, () => {
  console.log('listening')
});
