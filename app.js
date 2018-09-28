"use strict";

function MyApp()
{
  var version = "v1.o";
  
  function setStatus(message)
  {
    $("#app>footer"}.text(message);
  }
  
  this.start = function()
  {
    $("app>header").append(version);
    setStatus("ready");
  };
  
}
