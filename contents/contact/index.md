---
title: Andreas 'Andy' Hulstkamp
author: Andy Hulstkamp
date: 2011-10-01 15:00
template: contact.jade
type: page
---

# Contact

<div class="purge-g-r social-container">
    <div class="pure-u-1-4 social-tile">
        <img src="/svg/google-plus.svg" />
        <a href="https://plus.google.com/103966119359439831864" class="social-link">Follow on Google+</a>
    </div>
    <div class="pure-u-1-4 social-tile">
        <img src="/svg/twitter.svg" />
        <a href="http://www.twitter.com/andyhulstkamp" class="social-link">Follow on Twitter</a>
    </div>
</div>
<div class="form-container">
    <form class="pure-form pure-form-stacked contact-form" action="/formmailer.php" method="post">
        <fieldset>
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name">

            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email">

            <label for="comment">Message</label>
            <textarea name="comment" id="comment" placeholder="Message" cols="50" rows="10"></textarea>

            <br />
            <button type="submit" class="submit button">SEND</button>
        </fieldset>
    </form>
</div>