const path = require('path');

module.exports={
    mode:'production',
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    performance: {
        hints: false
      },


    module:{
        rules:[
            {
                test:/\.css/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            }

        ]
    },

    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
    }
}