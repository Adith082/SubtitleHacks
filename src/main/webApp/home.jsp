<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>SUBTITLE HACKS</title>
 <link rel="stylesheet" href="home.css">
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=IBM+Plex+Serif:wght@100&family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=IBM+Plex+Serif:ital,wght@0,100;1,700&family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
</head>
<body>
       <div class="header">
            <h1> SUBTITLE HACKS </h1>
        </div>
        <div class="instruction">
               <h1 class="subtitle-1">INSTRUCTIONS: </h1>
            <pre class="para-1">
                1. PLEASE UPLOAD YOUR SUBTITLE FILE BELOW.
                2. PLEASE INPUT YOUR SPECIFIC PERIOD OF TIME IN THE FORMAT (HH:MM:SS) IN THERE SPECIFIC REGION.
                3. CLICK ON THE SUBMIT BUTTON AND BOOM !!! 
            </pre>

        </div>

        <form class="searchForm">
            <input type="file" name="upload" id="upload">
            <input type="search" name="searchBox" id="searchBox" placeholder="HH:MM:SS">
            <input type="button" name="submit" value="submit" id = "btn" onclick="wordSearch()">
        </form>
        <div id="searchResult">

        </div>
        <script src="home.js"></script>
</body>
</html>