
var $list = $('#guestlist-view'),
  checkedinClass = 'icon-check',
  guestSelector = '.guest';

test('Guestlist',function(){
  var $list = $('#guestlist-view');
  ok($list.length,'List element should have guests');
});

test('Guest',function(){
  var $list = $('#guestlist-view');
  var $guest = $($list.find('li').eq(0)),
  guestExists = !!$guest[0];

  $guest.click();

  ok($guest.hasClass(checkedinClass),'should be checked on click');
  
  $guest.click();

  ok(guestExists && !$guest.hasClass(checkedinClass),'Should toggle off when clicked again');
});
