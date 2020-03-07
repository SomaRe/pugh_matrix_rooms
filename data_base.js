var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1tcqepaFRH_SxY2UzKEUODitckMxz2mPbIrV6ErfGZ5E/edit?usp=sharing';
$(document).ready(function () {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  });
  
  function showInfo (data, tabletop) {
    var i, dataLength = data.length,cv=0,t20=0;
    if(parseInt(data[0].T20)>parseInt(data[0].CV)){
      $('#hello').append(
        "<tr><td>"+ data[0].Criteria+"</td><td>"+ data[0].T20+"</td><td>"+ data[0].CV+"</td><td> cv</td></tr>"
      );
        cv=cv+1;
      }
      else if(parseInt(data[0].T20)<parseInt(data[0].CV)){
        $('#hello').append(
          "<tr><td>"+ data[0].Criteria+"</td><td>"+ data[0].T20+"</td><td>"+ data[0].CV+"</td><td>T20</td></tr>"
        );
        t20 = t20+1;
        }
        else if(parseInt(data[0].T20)==parseInt(data[0].CV)){
          $('#hello').append(
            "<tr><td>"+ data[0].Criteria+"</td><td>"+ data[0].T20+"</td><td>"+ data[0].CV+"</td><td>DRAW</td></tr>"
          );
          }
          console.log(cv);
    for (i=1; i<=dataLength; i++) {
      if(parseInt(data[i].T20)>parseInt(data[i].CV)){
      $('#hello').append(
        "<tr><td>"+ data[i].Criteria+"</td><td>"+ data[i].T20+"</td><td>"+ data[i].CV+"</td><td> T20</td></tr>"
      );
        t20=t20+1;
      }
      else if(parseInt(data[i].T20)<parseInt(data[i].CV)){
        $('#hello').append(
          "<tr><td>"+ data[i].Criteria+"</td><td>"+ data[i].T20+"</td><td>"+ data[i].CV+"</td><td>cv</td></tr>"
        );
        cv = cv+1;
        }
        else if(parseInt(data[i].T20)==parseInt(data[i].CV)){
          $('#hello').append(
            "<tr><td>"+ data[i].Criteria+"</td><td>"+ data[i].T20+"</td><td>"+ data[i].CV+"</td><td>DRAW</td></tr>"
          );
          }
          if(cv>t20){$("#winner").text("WINNER = ChinaValley");}
  else if(t20>cv){$("#winner").text("WINNER = T20");}
  else{$("#winner").text("DRAW");}
  console.log(cv);
    }
    
    
  }
  
});
  
  
  