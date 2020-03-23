$(function() {
  function addUser(user) {
    let html = `
      <div class="chat-group-form__input clearfix">
        <p class="chat-group-form__input__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>
    `;
    $("#user-search-result").append(html);
    return html;
  }

  function addDeleteUser(name, user_id) {
    // <input name="group[user_ids][]" type="hidden" value="${user_id}>
    let html = `
    <div class="chat-group-user clearfix" id="${user_id}">
      <p class="chat-group-user__name">${name}</p>
      <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${user_id}" data-user-name="${name}">削除</div>
    </div>`;
    console.log(html)
    $(".js-add-user").append(html);
  }

  function addMembers(user_id) {
    let html = `
    <input value="${user_id}" name="group[user_ids][]" type="hidden" id="group_user_ids_${user_id}" />`;
    console.log(html)
    $(`#${user_id}`).append(html);
  }

  // function addDeleteUser(name, id) {
  //   let html = `
  //   <div class="chat-group-user clearfix" id="${id}">
  //     <p class="chat-group-user__name">${name}</p>
  //     <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
  //   </div>`;
  //   $(".js-add-user").append(html);
  // }

  // function addMembers(userId) {
  //   let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
  //   $(`#${userId}`).append(html);
  // }


  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    console.log(input)
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
      .done(function(users) {
        $("#user-search-result").empty();

        if (users.length !== 0) {
        users.forEach(function(user){
        addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
      })
      .fail(function() {
        alert("ユーザー検索に失敗しました");
      });
  });
  $(function(){
    $(document).on('click','.user-search-add', function(){
      var name = $(this).data("user-name");
      var user_id = $(this).data("user-id");
      addMembers(user_id);
      addDeleteUser(name, user_id);
      $(this)
        .parent()
        .remove();
    });
    $(document).on("click", ".chat-group-user__btn--remove", function() {
      $(this)
        .parent()
        .remove();
    });
  })
});