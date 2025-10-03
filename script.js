document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("dropdown").classList.toggle("active");
});

function highlightLogin(){
    alert('Click on either admin or member in navigaton');

    let member_login = document.getElementById('member');
    let admin_login = document.getElementById('admin');

    member_login.classList.add('highlight');
    admin_login.classList.add('highlight');

    setTimeout(() => { 
        member_login.classList.remove('highlight');
        admin_login.classList.remove('highlight');
    }, 1000);

}

