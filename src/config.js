let commonUrl =''

setTimeout(function(){
  console.log('ENV', process.env.NODE_ENV)
},3000)

if(process.env ==='development'){
  commonUrl = ''
}else if(process.env ==='development1'){
  commonUrl = ''
}else if(process.env ==='production'){
  commonUrl = ''
}

module.exports= {
  commonUrl,
}
