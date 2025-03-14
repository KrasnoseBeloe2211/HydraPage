    document.getElementById('f_form').addEventListener('submit', GetFormValue);

function GetFormValue(event) {
    event.preventDefault();
    var el = document.getElementById('f_form')       
    var data = {firstName: el.f_name.value,
                lastName: el.l_name.value,
                email: el.email.value,
                phoneNum: el.phone.value,
                sub: el.subject.value,
                text: el.text_ar.value
                };
    if (el.f_name.value == '' || el.l_name.value == '' || el.email.value == '' || el.phone.value == '' || el.subject.value == '' || el.text_ar.value == '') {
        el.innerHTML +='<p style = "font-size: 6px; color: #fff;">Введены некорректные данные</p>';
        
    }else{
        el.innerHTML +='<p style = "font-size: 6px; color: #fff;">Введены некорректные данные</p>';
    };
    
    console.log(data);
    return false;    
};