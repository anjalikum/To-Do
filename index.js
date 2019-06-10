var cardContainer1 = $('.card-container1');
var submit1 = $('.submit-btn1');
var currentPlan1 = localStorage.getItem("name-card1");
submit1.on("click", appendToDo1);
function appendToDo1() {
  var time1 = $('.time1').val();
  var activity1 = $('.activity1').val();
  var duration1 = $('.duration1').val();
    if (duration1 == 1) {
        cardContainer1.append(`
        <p class="name-card1"><input type= "checkbox" class= "checkbox1">At ${time1} ${activity1} for ${duration1} minute</p>
        `);
    } else {
        cardContainer1.append(`
        <p class="name-card1"><input type= "checkbox" class= "checkbox1">At ${time1} ${activity1} for ${duration1} minutes</p>
        `);
    }
var checkbox1 = $('.checkbox1');
checkbox1.on("click", remove)
  $('.time1').val("");
  $('.activity1').val("");
  $('.duration1').val("");
storePlan(currentPlan1);
}
function remove() {
  event.target.parentNode.remove();
}
function storePlan(e) {
  e.preventDefault();
  localStorage.setItem('name-card1', name-card);
}
  var cardContainer2 = $('.card-container2');
  var submit2 = $('.submit-btn2');
  var currentPlan2 = localStorage.getItem("name-card2");
  submit2.on("click", appendToDo2);
  function appendToDo2() {
    var time2 = $('.time2').val();
    var activity2 = $('.activity2').val();
    var duration2 = $('.duration2').val();
      if (duration2 == 1) {
          cardContainer2.append(`
          <p class="name-card2"><input type= "checkbox" class= "checkbox2">At ${time2} ${activity2} for ${duration2} minute</p>
          `);
      } else {
          cardContainer2.append(`
          <p class="name-card2"><input type= "checkbox" class= "checkbox2">At ${time2} ${activity2} for ${duration2} minutes</p>
          `);
      }
      var checkbox2 = $('.checkbox2');
      checkbox2.on("click", remove)
    $('.time2').val("");
    $('.activity2').val("");
    $('.duration2').val("");
    storePlan(currentPlan2);
    }
    function remove() {
      event.target.parentNode.remove();
    }
    function storePlan(e) {
      e.preventDefault();
      localStorage.setItem('name-card2', name-card);
    }
    var cardContainer3 = $('.card-container3');
    var submit3 = $('.submit-btn3');
    var currentPlan3 = localStorage.getItem("name-card3");
    submit3.on("click", appendToDo3);
    function appendToDo3() {
      var time3 = $('.time3').val();
      var activity3 = $('.activity3').val();
      var duration3 = $('.duration3').val();
        if (duration3 == 1) {
            cardContainer3.append(`
            <p class="name-card3"><input type= "checkbox" class= "checkbox3">At ${time3} ${activity3} for ${duration3} minute</p>
            `);
        } else {
            cardContainer3.append(`
            <p class="name-card3"><input type= "checkbox" class= "checkbox3">At ${time3} ${activity3} for ${duration3} minutes</p>
            `);
        }
        var checkbox3 = $('.checkbox3');
        checkbox3.on("click", remove)
      $('.time3').val("");
      $('.activity3').val("");
      $('.duration3').val("");
      storePlan(currentPlan3);
      }
      function remove() {
        event.target.parentNode.remove();
      }
      function storePlan(e) {
        e.preventDefault();
        localStorage.setItem('name-card3', name-card);
      }
      var cardContainer4 = $('.card-container4');
      var submit4 = $('.submit-btn4');
      var currentPlan4 = localStorage.getItem("name-card4");
      submit4.on("click", appendToDo4);
      function appendToDo4() {
        var time4 = $('.time4').val();
        var activity4 = $('.activity4').val();
        var duration4 = $('.duration4').val();
          if (duration4 == 1) {
              cardContainer4.append(`
              <p class="name-card4"><input type= "checkbox" class= "checkbox4">At ${time4} ${activity4} for ${duration4} minute</p>
              `);
          } else {
              cardContainer4.append(`
              <p class="name-card4"><input type= "checkbox" class= "checkbox4">At ${time4} ${activity4} for ${duration4} minutes</p>
              `);
          }
          var checkbox4 = $('.checkbox4');
          checkbox4.on("click", remove)
        $('.time4').val("");
        $('.activity4').val("");
        $('.duration4').val("");
        storePlan(currentPlan4);
        }
        function remove() {
          event.target.parentNode.remove();
        }
        function storePlan(e) {
          e.preventDefault();
          localStorage.setItem('name-card4', name-card);
        }
