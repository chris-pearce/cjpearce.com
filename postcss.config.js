// http://eng.datafox.com/nodejs/2014/09/28/nodejs-config-best-practices/

const config = {
    plugins: {
        'postcss-import': {},
        'autoprefixer': {
            grid: false
        }
    }
};

module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return config;
            break;
        case 'production':
            config.plugins['postcss-csso'] = {};
            return config;
            break;
        default:
            console.error('Unrecognized NODE_ENV: ' + process.env.NODE_ENV);
            process.exit(1);
    }
};
