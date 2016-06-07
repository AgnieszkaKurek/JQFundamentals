//$(document).ready(function(){
  
  
  
  //$('div').css('background-color', '#38bode');
  
   // $('div').each(function () {
           //alert($(this).html());
    //});
    
    //var coll = $('div, span');
    // alert(coll.length);
  
    //alert($('#TestDiv').html());
  
    //alert($('div[title]').length);
     //var divs =  $('div[title = "Div Title"]');
    // alert(divs.length);
     //var inputs =  $('inputs[title = "text"]');
     //inputs.css('background-color','#ccff66');
       //$(':input').each(function(){
          //var elem = $(this);
          //alert(elem.val());
          
       //});
       
      // alert($('div:contains("my div")').html());
      
      //$('#DataTable tr:odd').css('background-color', '#ffcccc');
     
//});



$(document).ready(function () {
            //Using .each()
            var html = '';
            $('div.BlueDiv,div.RedDiv').each(function (index) {
                html += "<br />" + index + " " + $(this).text();
            });
            var output = $('#OutputDiv');
            output.html(html);

            //Modifying properties and attributes
            $('div.BlueDiv,div.RedDiv').each(function (index) {
                //raw DOM object
                this.title = "Some title";
                $(this).attr('title', 'Some title 2');
            });

            $('div.BlueDiv,div.RedDiv')
                .attr(
                    {
                        title: 'Some title 3'
                    }
                )
                .css({
                    'background-color': 'purple',
                    'color': 'white',
                    'font-size': '20pt'
                }).text('Changed Color');

            //Modifying the DOM
            var tcd = $('#TableContainerDiv');
            tcd.append('<span style="background-color:green">Appended Child 1</span>');
            tcd.prepend('<br /><span style="background-color:green">Prepended Child 1</span>');
            $('<br /><span style="background-color:green">Appended Child 2</span>').appendTo(tcd);
            $('<span style="background-color:green">Prepended Child 2</span>').prependTo(tcd);

            //Wrap
            $('span.Foo').wrap('<div class="RedDiv ParentWrapper" />');
            $('div.ParentWrapper').each(function () {
                //alert($(this).html());
            });

            //Remove
            $('div.ParentWrapper').remove();

            //Class functions
            //$('input[type="text"]').addClass('Highlight');
            //$('#LastNameTextBox').removeClass('Highlight');


        });

        function FocusBlur(tb) {
            $(tb).toggleClass('Highlight');
        }


