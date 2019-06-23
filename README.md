# Next.js example

## How to use

Download the example [or clone the repo](https://github.com/mui-org/material-ui):

```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/nextjs
cd nextjs
```

Install it and run:

```sh
npm install
npm run dev
```

## The idea behind the example

[Next.js](https://github.com/zeit/next.js) is a framework for server-rendered React apps.
[Hooks](https://reactjs.org/docs/hooks-state.html) are an upcoming feature of React.



## Sample

https://material-ui.com/getting-started/page-layout-examples/blog/

## Update configs

  - [now](https://zeit.co/docs/v2/deployments/configuration/?query=config)





















## layout ::: B! 1: Layout Custom

🚀🚀 https://github.com/tuchk4/storybook-readme 🚀🚀

vd: https://github.com/tuchk4/storybook-readme/blob/master/packages/example-react/stories/withCustomPreview.js

# Concept : setup layout flexible

- Page chia thành các bảng/preview:

    preview: {
        StoryPreview,
        FooterPreview,
        HeaderPreview,
        DocPreview,
      },


->
return (
      <ReadmeContent
       {...config}
        StoryPreview={StoryPreview}
        HeaderPreview={HeaderPreview}
        DocPreview={DocPreview}
        FooterPreview={FooterPreview}
      />
    );