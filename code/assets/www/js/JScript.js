            
        //move to init.js



       function favorite()
       {
       //move to favorite_manager.show
        
       }
       //function recipes()
       //{
      
       // 
       //}
       //function category()
       //{
      
       //}
       function gotoMain()
       {
        
       }
       function foodgrator()
       {
      //foodgerator_manager - start
          
       }
       function tools()
       {
        //move to Tools_Manager
        $('.about_us_page').hide();
         $('.search_page').hide();
       }
      
       function goto_one_recipe(eventObj)
       {
           var recipeMan_ = new RecipeMan();
           recipeMan_.showRecipePage(eventObj);
       
       }
      
       function goto_timer_page()
       {
      
       }
     
    
      //function what_u_need()
      //{
      //  $('.recipes_background_main').hide();
      //  $('.recipes_background_what_u_need').show();
      //  $('.recipes_background_what_to_do').hide();
      //  $('.Gesture_page').hide();
      //}
      //function description_recipe()
      //{
      //  $('.recipes_background_main').show();
      //  $('.recipes_background_what_u_need').hide();
      //  $('.recipes_background_what_to_do').hide();
      //  $('.Gesture_page').hide();
      //}
      //function what_to_do()
      //{
      //  $('.recipes_background_main').hide();
      //  $('.recipes_background_what_u_need').hide();
      //  $('.recipes_background_what_to_do').show();
      //  $('.Gesture_page').hide();
      //}
      /*function open_text()
      {
        $('.foodgrator_text_background').show();
        
      }*/
      function open_foodgrator_Results_Page()
      { 
        
         $('.recipes_list_Results').show();
         $('.food_list').hide();
         $('.foodgrator_text_background').hide();
         /*if(isIpad()) {
           $('.Gesture_btn').css({"background-position":"-101px 50%"});//ipad
        }
        else{
            $('.Gesture_btn').css({"background-position":"-59px 50%"});// iphone
        }*/
         
         
         $('.Terminology_singel_page').hide();
         $('.Gesture_page').hide();
         $('.share_page').hide();
          $('.search_page').hide();
      }
     // list_hover, list_regular    - in main.js page
      function timer_finish()
      {
        $('.timer_finish').css({"display":"none"});
        $('.timer_middel').css({"display":"block"});
        $('.timer_list').css({"display":"none"});
        
      }
      function timer_started()
      {
        $('.timer_Start_btn').css({"color":"#cf0d0d"});
        $('.timer_Start_btn').text("ПАУЗА");
        
      }
      function goto_term_page()
      {
        
        
        
      }

    function goto_term_singel_page()
    {
         
         
    }
    function goback_terminology_page()
    {
        $('.Terminology_singel_page').hide();
        $('.Terminology_page').show();
        $('.Gesture_page').hide();
    }
    function goto_shopping_page()
    {
       $('.shopping_page').show();
       $('.tools_page').hide();
       $('.foodgrator_text_background').hide();
       $('.Gesture_page').hide();
       $('.mail_pop').hide();
       $('.delete_pop').hide();
       $('.about_us_page').hide();
       $('.share_page').hide();
    }
    function text_open()
    {
        $('.foodgrator_text_background').show();
    }
    function open_gesture_page()
    {
       
    
    }
    function pop_mail_page()
    {
        //shoppingMan_
        
    }
    function pop_delete_page()
    {
        //shoppingMan_
       
    
    }
    function go_to_share_page()
    {
        
    }
    function open_specific_page(){
    
       
        
    }
    function open_about_page()
    {
        NavigationMan_.navigate("main", "about");
        //$('.about_us_page').show();
        //$('.home_page').hide();
        
    }
   /* function open_search_page()
    {
        $('.search_page').show();
        $('.home_page').hide();
    }*/
    function open_new_timer()
    {
        $('.timer_list_middel').css({"height":"190px"});
        $('.new_timer').show();
        
    }
    function close_pop_window()
    {
         $('.pop_page').css({"display;":"none"});
         $('.pop_page').hide();
    }
    function close_start_pop_window()
    {
        $('.start_pop_page').css({"display;":"none"});
         $('.start_pop_page').hide();
    }
//    function open_share()
//{
//    $('.share_specific_pic').show();
//    $('.share_position').hide();
//    
//}

    
    
      
       
     