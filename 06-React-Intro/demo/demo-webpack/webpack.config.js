	
module.exports = {
  // entry points se definen dentro del objeto que exportamos bajo el nombre entry, y cuyo valor es un arreglo
  entry: './app.js',
  //donde queremos que webpack deposite los archivos luego de la transformación
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // Entran en juego los loaders, estos son los módulos encargados de realizar tranformaciones
    // module: {
    //     loaders: [
    //       // test: qué archivos deberán pasar por la transformación, los .coffee, exclude para excluir, en este caso siempre node, y loader sera el que utilicemos
    //       {test: /\.coffee$/, exclude: /node_modules/, loader: "coffee-loader"}
    //     ]
    //   },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}