const regex = /(?:http(?:s)?:\/\/)?pastebin.com\/(?:raw\/)?([A-z0-9]*)/;

$(document).ready(function() {
  //retrieve();
  //document.getElementById("pastebinPaste").innerHTML = 
  var url_string = document.URL;
  var url = new URL(url_string);
  var paste = url.searchParams.get("paste");
  
  
  document.getElementById("pastebinPaste").innerHTML = paste
  if (paste == "") {
	  alert("no paste para")
  }
  else {
	  document.getElementById("url").value = "https://pastebin.com/" + paste
	  retrieve()
  }
});

function retrieve() {
  var url = document.getElementById("url").value;
  if (isPastebinUrl(url)) {
    var request = makeHttpObject();
    newUrl = getPastebinID(url);

    request.open("GET", newUrl, true);
    request.send(null);
    request.onreadystatechange = function() {

      if (request.readyState == 4) {
        if (request.status == 0) {
          alert("CORS not enabled.");
        } else if (request.status == 200) {
          display_txt = request.responseText
          document.getElementById("pastebinPaste").innerHTML = display_txt.replace(/\n/g, "<br />");
        } else {
          alert("Unhandled status");
        }
      }
    };
  }
}

function isPastebinUrl(url) {
  if ((m = regex.exec(url)) !== null) return true;
  else {
    alert("This is not a pastebin URL!");
    return false;
  }
}

function getPastebinID(url) {
  m = regex.exec(url);
  return "https://pastebin.com/raw/" + m[1].toString();
}

function makeHttpObject() {
  try {
    return new XMLHttpRequest();
  } catch (error) {}
  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch (error) {}
  try {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } catch (error) {}
  throw new Error("Could not create HTTP request object.");
}
