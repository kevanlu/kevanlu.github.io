---
title: "Getting Started"
date: 2014-04-07
categories: starting
---

Introduction
============
<div class="leftnote">1.</div>
<hr>

<p>
Once you've <a href="https://docs.google.com/forms/d/1GR2ZTofNRkkpsH24wntZKZRBGc2ekZaH2nQT2xKZaD4/viewform">signed-up</a> to contribute to the project, you will be added to a <strong>shared Dropbox folder</strong>. If you've waited more than a day and you still haven't been added, email <script language="JavaScript">
var username = "klu2017";
var hostname = "meds.uwo.com";
var linktext = username + "@" + hostname ;
document.write("<a id='email' href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>."); 
</script>
</p>

Lecture Assignments
===================
<div class="leftnote">2.</div>
<hr>

A spreadsheet showing showing the lectures that have yet to be written or assigned is available <a href="https://docs.google.com/spreadsheets/d/1iVqtLLZ-XRQhojiDCWTRCRucmUoUnKuCVMfsJLJ3oHU/pubhtml#">here</a>. It's also available from the link on the top of this site.

<img class="screenshot" src="images/writer-spreadsheet.png">

Writing Lecture Notes
=====================
<div class="leftnote">3.</div>
<hr>

The Shared Dropbox Folder
-------------------------
Once you're added to the Dropbox folder, you should see something like this:

<img class="screenshot" src="images/notes-directory.png">

The lecture notes are written as `.md` (*Markdown*) files. To edit them, we'll be using *StackEdit*. 

Setting up StackEdit
--------------------
To set up StackEdit, follow these instructions:

1. Go to <a href="https://stackedit.io">https://stackedit.io</a>.
2. Click the *'#'* button in the top-left corner.
3. Click *Settings*.
4. Click the *Extensions* tab.
5. Scroll down to *UserCustom Extension* and click it.
6. *Paste* in the following code:
	<pre><code>userCustom.onReady = function() {
	    $('head').append('&lt;link href="https://dl.dropboxusercontent.com/u/157117/notes/resources/stylesheets/stackedit.css" rel="stylesheet" /&gt;');
	};</code></pre>
7. Press *OK*.

Now anything you type will show up following the same format it'll appear in on the website.

<img class="screenshot" src="https://dl.dropboxusercontent.com/spa/4sm4d57annqq50o/o_3exwne.png">

Editing Lecture Notes
---------------------
To work on lecture notes from the Dropbox folder, follow these steps:

1. Click the *'#'* button in the top-left corner.
2. Click *Synchronize*.
3. Click *Open from Dropbox*.
4. Choose the *Course Notes* folder.
5. Find the lecture you signed up for.

Now you should have a blank lecture note corresponding to your own lecture. To format your notes, check out this <a href="reference-guide.html">Layout Reference Guide</a>.

It may also be easier to look at the format of another note that I've already written. To do this, follow the same steps as above, but pick another lecture. I would suggest this file:

1. Choose the *Course Notes* folder.
2. Open the *07-genitourinary* folder.
3. Open **2014-04-07-intro-case-week.md**.

Adding Images
-------------
To add images to the note file, you need to have a link to it. If you have a Mac, you can use **GrabBox** (<a href="http://grabbox.devsoft.no">grabbox.devsoft.no</a>) to automatically upload your screenshots, and generate a link for you to share. 

What it does is that it automatically uploads any screenshot you take onto your Dropbox folder, and then copies a link to the image onto your clipboard. Then, when you want to insert the picture, you can just paste in the link.

One problem with this is that your screenshots will all be placed in `~/Dropbox/Apps/GrabBox`, instead of your Desktop. If you want to stop this from happening, just quit GrabBox from its menubar icon.

Submitting Lecture Notes
========================
<div class="leftnote">4.</div>
<hr>

<p>When you're ready to submit your lecture note, export it and email it to me at <script language="JavaScript">
	var username = "klu2017";
	var hostname = "meds.uwo.com";
	var linktext = username + "@" + hostname ;
	document.write("<a id='email' href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>."); 
</script></p>

To export the file, follow the following steps:

1. Click the *'#'* button in the top-left corner.
2. Click *Export to Disk*.
3. Click *As Markdown*.
4. *Email me* the downloaded file.

<img class="screenshot" src='https://dl.dropboxusercontent.com/spa/4sm4d57annqq50o/e-efera8.png'>

When I've received the file, I'll copy it onto the website, and correct any formatting errors. I'll email you when it's online.