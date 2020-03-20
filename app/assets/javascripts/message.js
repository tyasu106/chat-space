$(function(){ 
  
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message__box" data-message-id=${message.id}>
         <div class="messages__box__upper-info">
           <div class="messages__box__upper-info__talker">
             ${message.user_name}
           </div>
           <div class="messages__box__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="messages__box__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message__box" data-message-id=${message.id}>
         <div class="messages__box__upper-info">
           <div class="messages__box__upper-info__talker">
             ${message.user_name}
           </div>
           <div class="messages__box__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="messages__box__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }

 var reloadMessages = function() {
  var last_message_id = $('.message:last').data("message-id");
  $.ajax({
    url: "api/messages",
    type: 'get',
    data: {id: last_message_id},
    dataType: 'json',
  })
    .done(function(messages){
      if (messages.length !== 0) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      //メッセージが入ったHTMLに、入れ物ごと追加
      $('.messages').append(insertHTML);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
  .fail(function(){
    alert('error');
  });
 };
 if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
 }
});