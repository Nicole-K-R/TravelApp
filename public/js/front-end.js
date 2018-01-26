// Set up variables to have in every ajax request
$.ajaxSetup({
    headers: {
        userName: 'put_username_cookie_here',
        password: 'put_password_cookie_here'
    }
});

$.ajax({
    type: "POST",
    url: "/test",
    dataType: 'json',
    data: 'put_data_here'
});