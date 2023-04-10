"use strick"
let userInput =document.getElementById('userInput');
let submitButton =document.getElementById('submit');
let searchLogo=document.getElementById('searchLogo');
searchLogo.onclick=function(){
  document.getElementById('tv').style = "display:none"; 

}

submitButton.onclick=function(){
  document.getElementById('tv').style="display: block";
    //Abdulla 
    switch(userInput.value){
      case "":
    document.getElementById('tv').innerHTML = "Sorry.."; 
    break;
    case "আবদুল":
    case "Abdulla":
    document.getElementById('tv').innerHTML = "একজন বাংলাদেশি Apps developer সে আমাকে তৈরি করেছেন আপনাদের সেবা করার জন্য তার তৈরি মোট 5টি apps play store uploding. আপনি তার সাথে যোগাযোগ করতে পারেন Abdulla 17 years old.Experience Ui Ux Designer & Devloper Android , App,C# & ruby Basic.01710-564041"; 
    break;

    //Rahat
    case "রাহাত":
    case "Rahat":
        document.getElementById('tv').innerHTML = "তিনি এখন ছ্যাকা খেয়ে ব্যাকা হয়ে💔 আছেন এবং বিয়ে করতে চাচ্ছেন অল্প বয়সে পাকিলে বাল ছ্যাকা খায় চিরকাল।"; 
        break;
//Tanjim
//Rahat
    case "Tanjim":
    case "তানজিম":
    document.getElementById('tv').innerHTML = "তিনি হলেন একজন হুজুর এবং সে সব সমায় মানুশের উপকার করতে ভালোবাসেন এবং সে একজন হ্যাকার।"; 
    break;

    //Mahedi
    case "মেহেদি":
    case "Mahedi":
    document.getElementById('tv').innerHTML = "তার আসল নাম হলো লালুমিয়া এবং সে একটু কিং বিডিও দেখে বেশি এবং কাজ করে।"; 
    break;
     //Rajjak
    case "রাজ্জাক":
    case "Rajjak":
    document.getElementById('tv').innerHTML = "রাজ্জাক তিনি দেখতে সুন্দার এবং তার কন্নারাশি।"; 
    break;
     //Sakil
     case "সাকিল":
    case "Sakil":
    document.getElementById('tv').innerHTML = "সাকিল সে বিয়ে করেছেন পেমকরে এবং এখন সে সংসারি করেন।"; 
    break;
    //Sakil
    case "নাঈম":
    case "Nayem":
    document.getElementById('tv').innerHTML = "দেখতে চিকন এবং বেশি ধুমপান করেন।"; 
    break;

    //Deipue
    case "দিপু":
    case "Nayem":
    document.getElementById('tv').innerHTML = "দিপু ধুমপান করেন এবং তার জিবনে একটা কঠিন সমায় তিনি পার করতেছেন তাও ভালোবাসা কারনে।"; 
    break;

     //Rajip
     case "রাজিপ":
    case "Rajip":
    document.getElementById('tv').innerHTML = "দেখতে লম্বা এবং তিনি মাদ্রাসায় পড়েছেন।"; 
    break;

      //Alim
      case "আলিম":
        case "Rajip":
        document.getElementById('tv').innerHTML = "আলিম দেখতে লম্বা ধুমপান করে এবং একটু একটু রাজনীতি করে মনের দিক থেকে ভালো।"; 
        break;

         //Shadat
      case "শাহাদাত":
        case "Rajip":
        document.getElementById('tv').innerHTML = "মোটামুটি ধুমপান করে এবং একটু চালাক টাইপের।"; 
        break;

           //Robiul
      case "রবিউল":
        case "Robiul":
        document.getElementById('tv').innerHTML = "লম্বা এবং একটু বোকা টাইপের কথাবেশি বলে।"; 
        break;

              //Rasel
      case "রাছেল":
        case "Robiul":
        document.getElementById('tv').innerHTML = "লম্বা এবং রাজনীতি করেন ধুমপার করে দেখতে চিকন।"; 
        break;

                //Samim
      case "সামিন":
        case "Samim":
        document.getElementById('tv').innerHTML = "ধুমপার করে এবং পরিচিত  মানুশের সাথে একটু বাজে ব্যবহার করেন।"; 
        break;

                  //Najmul
      case "নাজমুল":
        case "Najmul":
        document.getElementById('tv').innerHTML = "তার আসল নাম কদু এবং ফুকার বয়।"; 
        break;
        //cod
        case "Cod":
        document.getElementById('tv').innerHTML = "^^pt update cd cp apt update cd cp apt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cpapt update cd cp "; 
        break;


                //Mim Akter
                case "মিম আক্তার":
                case "Mim Akter":
                document.getElementById('tv').innerHTML = "এক জনের খাওয়া মাল কে খাইছে সেটা বলা যাবেনা।"; 
                break;


default:
document.getElementById('tv').innerHTML = " আনেক বেশি ফেসবুক চালায়। কিন্তু কোনো লাভনাই সুদু সমায় অপচয়। "; 



}

}


