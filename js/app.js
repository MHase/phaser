
require(['preload/preload'],function(){
  console.log('preload');
});

require(['create/create'],function(){
  console.log('create');
});

require(['update/update'],function(){
  console.log('update');
});

require(['game'],function(){
  console.log('game');
});
