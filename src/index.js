import app from './app';

async function main(){
  app.set('port', process.env.PORT || 3000);
  await app.listen(app.get('port'));
  console.log('Listening on port 3000');
}

main();