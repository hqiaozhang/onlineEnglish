/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 开发框架配置文件
 * @Date: 2018-03-07 14:39:52 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-04-08 14:13:19
  */

 const path = require('path')
 const debug = require('debug')('app:config:project')
 const argv = require('yargs').argv
 
 debug('Creating default configuration.')
 // ========================================================
 // Default Configuration
 // ========================================================
 const config = {
   env : process.env.NODE_ENV || 'development',
 
   // ----------------------------------
   // Project Structure
   // ----------------------------------
   path_base  : path.resolve(__dirname, '../..'),
   dir_client : 'app',
   dir_dist   : 'dist',
   dir_public : 'public',
   dir_server : 'server',
 
   // ----------------------------------
   // Server Configuration
   // 部署服务器地址、端口和项目名称
   // 每次部署前，必须先确定这三个字段的值
   // example：
  //  project_name: '/protal/static',
  //  server_host : '192.168.5.160',
  //  server_port : 8080,
   // ----------------------------------
   server_host : 'localhost',
   server_port : process.env.PORT || 8080,
   project_name: '/protal/static',
 
   // ----------------------------------
   // Compiler Configuration
   // ----------------------------------
   compiler_devtool         : 'source-map',
   compiler_hash_type       : 'hash',
   compiler_fail_on_warning : false,
   compiler_quiet           : false,
   compiler_public_path     : '/',
   compiler_stats           : {
     chunks : false,
     chunkModules : false,
     colors : true
   },
   compiler_vendors : [
     'react',
     'react-dom',
     'react-redux',
     'react-router-dom',
     'redux',
     'lodash',
     'axios',
     'antd',
     'd3',
     'echarts'
   ]
 }
 
 // ------------------------------------
 // Environment
 // ------------------------------------
 config.globals = {
   'process.env'  : {
     NODE_ENV : JSON.stringify(config.env)
   },
   NODE_ENV     : JSON.stringify(config.env),
   __DEV__      : config.env === 'development',
   __PROD__     : config.env === 'production',
   __BASENAME__ : JSON.stringify(process.env.BASENAME || '')
 }
 
 // ------------------------------------
 // Validate Vendor Dependencies
 // ------------------------------------
 const pkg = require('../../package.json')
 
 config.compiler_vendors = config.compiler_vendors
   .filter((dep) => {
     if (pkg.dependencies[dep]) return true
 
     debug(
       `Package "${dep}" was not found as an npm dependency in package.json ` +
       `it won't be included in the webpack vendor bundle.
        Consider removing it from \`compiler_vendors\` in ~/config/index.js`
     )
   })
 
 // ------------------------------------
 // Utilities
 // ------------------------------------
 function base() {
   const args = [config.path_base].concat([].slice.call(arguments))
   return path.resolve(...args)
 }
 
 config.paths = {
   base,
   client : base.bind(null, config.dir_client),
   public : base.bind(null, config.dir_public),
   dist   : base.bind(null, config.dir_dist)
 }
 
 // ========================================================
 // Environment Configuration
 // ========================================================
 debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)
 const environments = require('./environments.config')
 
 const overrides = environments[config.env]
 if (overrides) {
   debug('Found overrides, applying to default configuration.')
   Object.assign(config, overrides(config))
 } else {
   debug('No environment overrides found, defaults will be used.')
 }
 
 module.exports = config
 