
    function changeImg()
{
    var buttons =document.querySelectorAll(" #card_items .item_card_section .choose_front_rear > a")
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].onclick  = function()
         {
    event.preventDefault()
var side = this.getAttribute("rel")
var img = document.getElementById("mainImg")
img.src = `${side}.png`
         }
    }
}


function modalRegister()
{
    //Chỉ có 1 phần tử nên khi selector chỉ cần select 1 element
    var buyBtns = document.querySelector("a.btn_register")
    var modalOpen = document.querySelector("div.modal")
    var modalClose = document.querySelector(".modal_close")
    var modalInput = document.querySelector("div.modal_container")
    function showBuyTickes()//hiện ra Modal Box
    {
        modalOpen.classList.add('open')
    }

    function closeBuyTickets()//Tắt Modal Box
    {
        modalOpen.classList.remove('open')
    }

    buyBtns.onclick = function()//onclick vào nút đăng kí
    {
        event.preventDefault()
        showBuyTickes()

    }
    modalClose.onclick = function()//onclick vào nút close
    {
        event.preventDefault()
        closeBuyTickets()
    }
    modalOpen.onclick = function() // bấm vào cái vùng to ở ngoài là thoát modal box
    {
        event.preventDefault()
        closeBuyTickets()
    }
    modalInput.onclick = function() // bấm vào modal container mà ko thoát khỏi modal box
    {
        event.stopPropagation() //Tránh kế thừa
    }
}



function taskBarHeader()
{
    window.onscroll = function()
    {
        console.info(document.documentElement.scrollTop)
        var header = document.getElementById("header_menu")
        if(document.documentElement.scrollTop>50||document.body.scrollTop>50)
        {
        header.style.position = "fixed";
        header.style.left = 0
        header.style.right = 0
        header.style.top = 0
        header.style.backgroundColor = "rgba(0,0,0,0.5)"
        header.style.zIndex = 1
        }
        else
        {
    header.style.position = "relative";
    header.style.backgroundColor = "#555"
        }
    }
}
var courses = ["HTML","CSS","JAVASCRIPT","REACTJS","PHP",". NET","JQUERY","PYTHON"]
$(document).ready(function(){
    $("#search_btn").click(function(){
        var txt = $("#search_text").val()
        var txtLower = txt.toLowerCase()
        for(let i of courses)
            {
                if(i.toLowerCase().indexOf(txt)>=0)
                {
                    $("html,body").animate({
                        scrollTop:610
                      },150)
                }
            }
        $(`.course_list_items li p:contains(${txt})`).parent().css({"background-color": "pink"})
        $(`.course_list_items li p:contains(${txt})`).addClass("changeColor")
        $(`.course_list_items li p:contains(${txtLower})`).parent().css({"background-color": "pink"})
        $(`.course_list_items li p:contains(${txtLower})`).addClass("changeColor")
        setTimeout(function(){
            $(`.course_list_items li p:contains(${txt})`).parent().css({"background-color": "white"})
            $(`.course_list_items li p:contains(${txtLower})`).parent().css({"background-color": "white"})
            $(`.course_list_items li p:contains(${txt})`).removeClass("changeColor")
            $(`.course_list_items li p:contains(${txtLower})`).removeClass("changeColor")
        },2500)

    })
    $("#crs_btn").click(function()
    {
      $("html,body").animate({
        scrollTop:610
      },1000)
    })

})