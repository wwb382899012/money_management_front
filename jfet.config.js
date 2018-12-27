/**
 * 构建工具配置
 */

const path = require('path');
const fse = require('fs-extra');

const baseApi = {
  dev: 'http://172.16.1.117',
  test: 'http://172.16.1.117',
  pre: 'http://172.16.1.117',
  production: 'http://172.16.1.117'
};

// public路径
const publicPathMap = {
  test: '', // 测试环境
  production: '', // 预发布/生产环境
};

module.exports = {
  build(abc, context) {
    const publicDir = path.join(__dirname, 'public');

    context.setConfig({
      scanEntry: {
        pattern: path.join(__dirname, 'pages/**/index.js')
      },
      setOutput: {
        path: publicDir,
        publicPath: publicPathMap[process.env.BUILD_ENV] || '/'
      },
      resolveAliases: {
        vue$: 'vue/dist/vue.common.js',
        '@': path.join(__dirname),
        assets: path.join(__dirname, 'assets'),
        routes: path.join(__dirname, 'routes'),
        components: path.join(__dirname, 'components')
      },
      sass: {
        includePaths: ['node_modules']
      },
      defineConstants: {
        'process.env.NODE_ENV': process.env.NODE_ENV
      },
      assemble: {
        layouts: path.join(__dirname, 'pages/layouts/*.hbs'),
        partials: path.join(__dirname, 'pages/partials/*.hbs'),
        pages: path.join(__dirname, 'pages/**/index.hbs'),
        mapPath: path.join(__dirname, 'public/manifest.json'),
        renameFunc(file) {
          const arrPath = path.dirname(file.key).split(path.sep);

          file.dirname = publicDir;
          file.filename = arrPath.pop();
          file.extname = '.html';
          return publicDir;
        }
      }
    });

    context.on('before', () => {
      fse.emptyDirSync(publicDir);
    });
  },
  server(abc, context) {
    const proxy = context.proxy;

    context.setConfig({
      port: 2017,
      opnPath: '/',
      livereload: {
        init: {
          port: 2018
        },
        watch: path.join(__dirname, './public/**/*')
      }
    });
    context.registerRouter('post', '/api/upload', proxy({
      url: `${baseApi[process.env.NODE_ENV] || baseApi.dev}/api/upload`
    }));
    context.registerRouter('get', '/api/download', proxy({
      url: `${baseApi[process.env.NODE_ENV] || baseApi.dev}/api/download`
    }));
    context.registerRouter('post', '/api/csrfToken', proxy({
      url: `${baseApi[process.env.NODE_ENV] || baseApi.dev}/api/csrfToken`
    }));
    context.registerRouter('post', '/api', proxy({
      url: `${baseApi[process.env.NODE_ENV] || baseApi.dev}/api`
    }));
  }
};
